import React, { useState } from "react";
import { TextInput } from "./inputsinput";

export default function Formee() {
    const handleChange = ()=>{
        
    }
  
  return (
    <div>
    
      <TextInput
        type="password"
        value={password}
        onChange={handleChange}
        id="password"
        required
        label="password"
        isPassword
        error={passwordLength} //Password lenght error
      />
      <TextInput
        type="password"
        value={passwordConfirmation}
        onChange={handleChange}
        id="passwordConfirmation"
        required
        label="Confirm password"
        isPassword
        error={errorPasswordMessage}
      />
      <button
        type="submit"
        name="action"
        onClick={onSubmit}
        disabled={!formState.email}
      >
        {loading ? `loading...` : `save`}
      </button>
      <p
          style={{
            color: '#E2AAA0',
            display: !isPasswordValid(password)  ? 'none' : 'block',
          }}
        >
          Password must have at least 15 characters, 1 lowercase character, 1 uppercase character, 1 number, 1 special character and Same password.
        </p>

      {accountCreationSuccessful && !loading ? (
        <p>You have succefully create and account 👏🏾</p>
      ) : null}
    </div>
  );
}