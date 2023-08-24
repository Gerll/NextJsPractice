import Link from "next/link";

const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
        //Revalidate that the page have new post every 60 seg
        next: {
        revalidate: 60
        } 
    })
        .then(res => res.json())
}

export default async function Post ( { params } ) {
    const {id} = params;
    const comments = await fetchComments(id)

    return (
        <ul className="m5">
            {comments.map(comment => (
                <li key={comment.id}>
                <h4 className="font-extrabold">{comment.name}</h4>
                <small>{comment.body}</small>
            </li>
            ))}
        </ul>
    )
}
