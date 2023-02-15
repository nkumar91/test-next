import Post from "@/components/Post/Post"
import { useRouter } from "next/router"

export default function PostHome({star})
{
    const {id} = useRouter().query
    console.log("after")
    return (
        <>
        <Post title="hello"/>
            <h1>Post {star} Home {id}</h1>
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
  