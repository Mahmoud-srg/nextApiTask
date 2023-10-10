import React from 'react'
interface Props{
    params:{pro:string[]}
}

const Products = ({params:{pro}}:Props) => {
  return (
    <div>Products {
      pro?.map(pr =><div key="index">{pr}</div>)
      }</div>
  )
}

export default Products