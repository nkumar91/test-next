import Post from "@/components/Post/Post"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useRouter } from "next/router"
const Lazy = dynamic(()=>import('../../../components/Lazy/Lazy'),{loading:()=>'Loading...'

})
export default function PostHome({star})
{
    const {id} = useRouter().query
    console.log("after")
    return (
        <>
            <Post title="hello"/>
            <h1>Post {star} Home {id}</h1>
            <Link href="hello/6">go to comment</Link>
            <Lazy />
        </>
    )
}


export async function getServerSideProps(context) {
    console.log("before")

    const data = 2
    // if (!data) {
    //     return {
    //       redirect: {
    //         destination: '/',
    //         permanent: false,
    //       },
    //     }
    //   }
    if (!data) {
        return {
          notFound: true,
        }
      }
    return {
      props: {star:2}, // will be passed to the page component as props
    }
  }
  