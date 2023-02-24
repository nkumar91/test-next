import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Home(props)
{
    const [data,setData] = useState(5)
    const [user,setUser] = useState([])


    useEffect(()=>{
console.log("hello")
    },[])
  
    return(
        <>
        <h1>Hello World {data}</h1>
        <button onClick={()=>setData(90)}>Click Karo</button>
        <ul>
            {
                props.data.map((ele,index)=>
                  <li key={index}>{ele.first_name}</li>
                )
            }
        </ul>
        </>
    )
}

export async function  getServerSideProps(context){
    console.log("call server side props")
    const res = await fetch(`https://reqres.in/api/users?page=${context.query.first}`)
    const json = await res.json()
    const a = 3
    if(a == 2){
        return {
            notFound:true
        }
    }
    return(
        {
            props:{data:json.data}
        }
    )
}