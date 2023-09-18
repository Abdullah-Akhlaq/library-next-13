
import React from 'react'

interface IUserList {
  userId: number
  id: number,
  title: string,
  body: string
}

const ProductsList = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const products: IUserList[] = await res.json()

  return (
    <div>
      <i style={{ fontSize: '25px' }}><b> ProductsList </b> </i>

      {products.map((ele: any) => <div>
        <b> Title:</b>  {ele.title}
      </div>)}
    </div>
  )
}

export default ProductsList