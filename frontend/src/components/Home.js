import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("./signup");
    }

    fetch("http://localhost:5000/allposts", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
    })
      .then((res) => res.json())
      .then(result => setData(result))
      .catch((err) => console.log(err));
  }, [])
  return (
    <div className="home">
      {/*card */}
      {data.map((posts)=>{
        return(
          <div className="card">
          <div className="card-header">
            <div className="card-pic">
              <img src="https://images.unsplash.com/photo-1686214870450-ede7da8d7fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <h5>{posts.postedBy.name}</h5>
          </div>
          <div className="card-image">
            <img src={posts.photo} alt="" />
          </div>
          {/*card content */}
          <div className="card-content">
          <span className="material-symbols-outlined">
  favorite
  </span>
  <p>1 Like</p>
  <p>{posts.body}</p>
          </div>
          <div className="add-comment">
          <span className="material-symbols-outlined">
  mood
  </span>
  <input type="text" placeholder="Add a comment"/>
  <button className="comment">Post</button>
          </div>
        </div> 
        )
      })}
        
       
      
    </div>
  )
}
