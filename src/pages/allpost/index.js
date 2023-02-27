import Link from "next/link"
export default function Home(props){
    return(
        <>
            <h1>All Post</h1>
            <ul>
            {
                props.data.map(ele=>
                    <li><Link href={`allpost/[]`} as={`allpost/${ele.post_id}`}>Post Id {ele.post_id}</Link></li>
                    )
            }
        </ul>
        </>
    )
}

export function getStaticProps(){
    return{
        props:{
            data:[
                {post_id:1},
                {post_id:2},
                {post_id:3}
            ]
        }
    }
}