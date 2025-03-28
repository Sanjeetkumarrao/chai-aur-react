import React from 'react'

function Card({username,btnText}) {
  console.log(username,btnText);
  
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4">
    <img
      src="https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        Title
      </span>
      <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
    </div>
    <p className="text-gray-300">
      {btnText}
    </p>
  </div>
  )
}

export default Card