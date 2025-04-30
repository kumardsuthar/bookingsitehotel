import React, { useState } from 'react'
import axios from 'axios'
import '../css/Login.css'

function Profile() {
    const [user , setUser] = useState(null)

    const getProfileData = ()=> {
        const  token = JSON.parse(localStorage.getItem("token")) // local stroage mathi token lidhu atle json .parse
       
        const header = {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
        axios.get("https://api.escuelajs.co/api/v1/auth/profile",header)
  
        .then((res) => {
            console.log("proile data", res)
            setUser(res.data)
        })
        .catch((err) => {
            alert("you are not login")
            console.log("not profile data",err)
        })
    }

    const handlelogout = () => {
        setUser(null)
        localStorage.removeItem("token");
        alert("logout success full")

    }
  return (
   

    <div className="profile-container">
    <div className="profile-card">
      <h2>User Profile</h2>
      <div className="buttons">
        <button onClick={getProfileData}>Load Profile</button>
        <button onClick={handlelogout}>Logout</button>
      </div>
      {user && (
        <div className="user-info">
          <img src={user?.avatar} alt="User Avatar" className="avatar" />
          <p><strong>Name:</strong> {user?.name || "N/A"}</p>
          <p><strong>Email:</strong> {user?.email || "N/A"}</p>
          <p><strong>Role:</strong> {user?.role || "N/A"}</p>
        </div>
      )}
    </div>
  </div>
  )
}

export default Profile
