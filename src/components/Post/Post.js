import Image from "next/image";

export default function Post(props){
    return (
        <>
            <p>First Post {props.title}</p>
            <Image src="/next.svg" width={50} height={50}></Image>
        </>
    )
}