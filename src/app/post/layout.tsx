export default function PostsLayout ({ children }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Este es el layout de los post</h1>
            {children}
        </div>
    )
}