import Link from "next/link"
import { useRouter } from "next/router"

export default function PostId(props){
    const {postId} = useRouter().query
    return (
        <>
        <h1>{props.post.title} {props.post.id}</h1>
       
        </>
    )
}

export async function getStaticPaths() {
    return {
      paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
      fallback: false,
    }
  }
  

  export async function getStaticProps({params}) {
    return {
      props: { post: {
        title:"nishant",id:params.postId
      },
    }
  }
  
  }


