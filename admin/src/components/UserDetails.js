import React from 'react'

function UserDetails(props) {
    const {user} = props
    let keysDesc = Object.keys(user);
  return (
    <div className="d-flex flex-wrap m-3 justify-content-between overflow-auto">
      {keysDesc.map((k, index) => {
        // let value = { keyF: k, description: user[k]}
        if(k === "_id" || (k === "updatedAt") || (k=== "password") || (k=== "__v") || (k=== "user_address")) return

        return (
          user[k] === "" || (
            <button key={index}
              type="button"
              className="btn btn-light m-3"
              style={{ minWidth: "250px" }}
              onMouseOver={(e)=>{
                  const key = Object.keys(user).find(key => user[key] === e.target.innerHTML)
                  e.target.innerHTML = key
              }}
              onMouseOut={(e)=>{
                  e.target.innerHTML = user[e.target.innerHTML]
              }}
            >
              {user[k]}
            </button>
          )
        );
      })}
    </div>
  )
}

export default UserDetails