//import { Counter } from '../components/Counter'
export default function PostsLayout ({ children }) {
    return (
        <div className="flex flex-col items-center justify-center">

            <small>Home &bull; Post</small>
            {children}
        </div>
    )
}