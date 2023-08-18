import Image from 'next/image'
import { Inter } from 'next/font/google'
import '../globals.css'
import {ListOfPost} from '../components/ListOfPost';

export const metadata = {
  title: 'Post Page',
  description: 'Blog Post',
}

export default async function PostPage({ params }) {
    return (
    <section className='flex flex-col items-center justify-center'>
        <ListOfPost />
    </section>
    )
}

/*
const fetchPost = () => {
    return fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}
export default async function PostPage( { params }) {
    const posts = await fetchPost();
  return (
    <section className='flex flex-col items-center justify-center '>
        {posts.map(post => (
            <article key={post.id} className='w-1/2 m-5'>
                <h2 className='text-3xl font-extrabold'>{post.title}</h2>
                <p className=''>{post.body}</p>
            </article>
        ))}
    </section>
    )
}
*/