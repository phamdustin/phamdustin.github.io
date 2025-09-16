import React, { useState } from 'react'
const Contact = () => {
   return (
    <div>
      <form>
        <label for='email'>Email: </label>
        <input type="text" id='email' name='email'></input><br></br>
        <label for='message'>Message: </label>
        <textarea id='message' rows='8' cols='50'></textarea><br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact