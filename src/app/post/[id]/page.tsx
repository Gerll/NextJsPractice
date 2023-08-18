export default function Post ( { params } ) {
    const {id} = params;

    return <h1 className='flex items-center justify-center text-2xl'>Esto es el post {id} </h1>
}