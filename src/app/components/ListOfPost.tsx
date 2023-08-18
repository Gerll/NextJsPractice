import { LikeButton } from "./LikeButton";
import Link from "next/link";

const fetchPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', { 
        //Revalidate that the page have new post every 60 seg
        next: {
        revalidate: 60
        } 
    })
        .then(res => res.json())
}

export async function ListOfPost() {
    const post = await fetchPost ();
    
    const handleClick = () => {
        alert('Me gsta este post')
    }

    return post.slice(0, 5).map(post => (
        <article key={post.id} className='w-1/2 m-5'>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
                <h2 className='text-3xl font-extrabold'>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton />
            </Link>
        </article>
    ))
}