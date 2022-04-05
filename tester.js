const { exec } = require("child_process");
const axios = require("axios");

class GracefullyExit extends Error {
  constructor(message) {
    super(message);

    // assign the error class name in your custom error (as a shortcut)
    this.name = this.constructor.name;

    // capturing the stack trace keeps the reference to your error class
    Error.captureStackTrace(this, this.constructor);
  }
}

exec("npm start", (error, stdout, stderr) => {
  console.log("Exited gracefully");
});

async function checkIfServerIsLive() {
  try {
    const result = await axios.get("http://localhost:3000");
    return true;
  } catch (e) {
    // console.log(e);
    return false;
  }
}

async function startTesting() {
  let isServerUp = false;
  while (!isServerUp) {
    isServerUp = await checkIfServerIsLive();
    if (isServerUp) {
      console.log("server is up in background Start Testing");
    }
  }
  exec("npx playwright test", (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(stdout);
    console.log("exiting by process.exit");
    process.exit();
  });
}

(async () => {try {await startTesting();} catch (e) {console.log(e);}})();
