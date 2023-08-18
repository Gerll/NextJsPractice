import { Counter } from '../components/Counter'
export default function PostsLayout ({ children }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <Counter/>
            <h1>Este es el layout de los post</h1>
            {children}
        </div>
    )
}