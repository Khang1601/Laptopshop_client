import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreateFormUS from './components/CreateFormUS';

export default function UserManager() {

    const [users, setUsers] = useState([]);
    const [formStatusUS, setFormStatusUS] = useState(false);
  
  
  
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_HOST}users`)
      .then(res => {
          if(res.status == 200) {
            console.log("users: ", users)
            setUsers(res.data.data)
          }else {
            // 213
            console.log("fuck 3");
          }
      })
      .catch(err => {
          // 500
          console.log("fuck u 3");
  
      })
    }, [])
  
  
    return (
      <div>
        <button onClick={() => {
          setFormStatusUS(true)
        }} className='btn btn-primary'>Add user</button>
  
        {
          formStatusUS && <CreateFormUS setFormStatusUS={setFormStatusUS}/> 
        }
  

        <h2>UserManager</h2>
  
  
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Avatar</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
              <th scope="col">IP</th>
              <th scope="col">Phonenumber</th>

              <th>Tools</th>
            </tr>
          </thead>
          
          <tbody>
            {
              users.map((user, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.email}</td>

                    {/* <td>
                      <img src={`${import.meta.env.VITE_SERVER_HOST}${user.avatar}`} style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%"
                      }}/>
                    </td> */}

                    <td>
                      <img src={user.avatar} style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%"
                      }}/>
                    </td>
                    

                    <td>{user.role}</td>
                    <td>
                      {user.status ? "1" : "0"}
                    </td>
                 
                    
                    <td>{user.ipaddress1}</td>
                    <td>{user.phonenumber}</td>

                    <td>
                      <button className='btn btn-danger'>Delete</button>
                      <button className='btn btn-info'>Update</button>

                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }