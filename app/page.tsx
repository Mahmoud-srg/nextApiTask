import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
  <main>
      <div>Hello, world!</div>
      <Link href="/users" className='btn btn-primary'>Users</Link>
      <ProductCard></ProductCard>
  </main> 
  )
}
