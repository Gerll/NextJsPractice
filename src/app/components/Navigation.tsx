import Link from "next/link";
import '../globals.css'

//links
const links = [{
    label: 'Home',
    route: '/'
    }, {
        label: 'About',
        route: '/about'
    }, {
        label: 'Post',
        route: '/post'
    }];


export function Navigation () {
    return (
        <header className="flex items-center justify-center mb-8">
            <nav className="bg-[#000] border-2 w-1/2">
                <ul className="flex flex-row justify-center content-around gap-12 p-8 ">
                    {links.map(({ label, route }) => (
                    <li 
                    className="gap-64"
                    key={route}>
                        <Link href={route}>
                        {label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}