import Image from 'next/image'
import { Inter } from 'next/font/google'
import '../globals.css'


export const metadata = {
  title: 'About Page',
  description: 'Test description',
}
export default function Page() {
  return <h1 className='flex items-center justify-center text-2xl'>About</h1>;
}