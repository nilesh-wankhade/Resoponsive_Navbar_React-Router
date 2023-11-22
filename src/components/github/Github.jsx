// import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom"

const Github = () => {
//  const [data, setData]= useState([])
//      useEffect(() => {
//          fetch('https://api.github.com/users/nilesh-wankhade') 
//           .then((res)=>res.json())
//           .then((data)=> setData(data) )
//      }, [])

const data = useLoaderData()

  return (
    <div className="text-center bg-gray-600 text-white p-4 text-3xl">Github Followrs: {data.followers}
    <img src={data.avatar_url} alt="git pic" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const res = await fetch('https://api.github.com/users/nilesh-wankhade')
    return res.json()
}