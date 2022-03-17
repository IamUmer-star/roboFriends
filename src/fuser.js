import axios from "axios"

const User = ()=>{
    const fetchuser = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(({data})=>data)
        .catch(err=>'Errorrrs')
    }
    return(
        <div data-test='fetchuser'>
{fetchuser}
        </div>
    )
}
export default User;