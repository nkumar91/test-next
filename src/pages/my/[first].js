import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Home(props)
{
    const [data,setData] = useState(5)
    const [user,setUser] = useState([])
    const router  = useRouter()

    useEffect(()=>{
        async function callApi(){
            const res = await fetch("https://reqres.in/api/users?page=2")
            const json = await res.json()
            setUser(json.data)
           // router.push("/")
        }
        setData(20)
        callApi()
    },[])
    return(
        <>
        <h1>Hello World {data}</h1>
        <button onClick={()=>setData(90)}>Click Karo</button>
        <ul>
            {
                user.map((ele)=>
                  <li>{ele.first_name}</li>
                )
            }
        </ul>
        </>
    )
}

// export async function  getStaticProps(context){
//     const res = await fetch("https://reqres.in/api/users?page=2")
//     const json = await res.json()
//     const a = 3
//     if(a == 2){
//         return {
//             notFound:true
//         }
//     }
//     return(
//         {
//             props:{data:json.data}
//         }
//     )
// }