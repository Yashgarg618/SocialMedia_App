import React from 'react'
import "./Profile.css";
export default function Profile() {
  return <div className="profile">
    <div className="profile-frame">
      <div className="profile-pic">
        <img src="https://images.unsplash.com/photo-1686214870450-ede7da8d7fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
      <div className="profile-data">
        <h1>Canta coder</h1>
        <div className="profile-info" style={{display:"flex"}}>
          <p>40 posts</p>
          <p>40 followers</p>
          <p>40 following</p>
        </div>
      </div>
    </div>
    <hr style={{width:"90%",opacity:"0.8",margin:"25px auto"}}/>
    <div className="gallery">
      <img src="https://images.unsplash.com/photo-1683384952222-bd88153346bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
      <img src="https://images.unsplash.com/photo-1686214870450-ede7da8d7fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
      <img src="https://images.unsplash.com/photo-1683384952222-bd88153346bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
      <img src="https://images.unsplash.com/photo-1686214870450-ede7da8d7fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
      <img src="https://images.unsplash.com/photo-1683384952222-bd88153346bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
      <img src="https://images.unsplash.com/photo-1686214870450-ede7da8d7fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
    </div>
  </div>;
  
}
