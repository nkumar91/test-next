import { useRouter } from "next/router"

export default function CommentHome(){
    const router = useRouter();

    return(
        <>
        <h1>Comment Page {router.query.comment}</h1>
        </>
    )
}