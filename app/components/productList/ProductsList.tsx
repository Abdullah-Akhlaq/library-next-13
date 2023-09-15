import React from 'react'

interface IUserList {
  userId: number
  id: number,
  title: string,
  body: string
}

const ProductsList = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const products = res.json()
  console.log('https://github.com/saadwaqas688/apple-cart-boiler.git', products);

  return (
    <div>
      ProductsList

      {/* {products.map((ele: any) => ele.id)} */}
    </div>
  )
}

export default ProductsList