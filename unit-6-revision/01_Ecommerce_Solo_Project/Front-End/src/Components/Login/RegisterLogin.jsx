import React from 'react'

export default function RegisterLogin() {
    const handleRegister=(e)=>{

    }
  return (
    <div>
      <div>
          <input type="text" placeholder='Enter email here.' onChange={handleRegister}/>
          <input type="password"  placeholder='Password'  onChange={handleRegister}/>
          <select onChange={handleRegister}>
              <option >Select one</option>
              <option value="admin" >Admin</option>
              <option value="user">User</option>
          </select>
      </div>
    </div>
  )
}
// http://localhost:5000/login


