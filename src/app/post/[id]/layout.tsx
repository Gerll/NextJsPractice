import { LikeButton } from "./LikeButton";
import Link from "next/link";

const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
        //Revalidate that the page have new post every 60 seg
        next: {
        revalidate: 60
        } 
    })
        .then(res => res.json())
}

export default async function Post ( { children, params } ) {
    const {id} = params;
    const post = await fetchSinglePost(id)

    return (
    <section className="flex flex-col items-center justify-center">
        <article className='w-1/2 m-5'>
            <h1 className=''>Esto es el post {id} </h1>
            <h1 className="text-3xl font-extrabold">{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/post/${id}/comments`} className="text-[#50d71e]">Ver comentarios</Link>
            {children}
        </article>
    </section>

    )
}
