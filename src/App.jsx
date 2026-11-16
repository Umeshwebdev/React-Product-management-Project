import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Products from './Components/Products'

const App = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  const [product, setProducts] = useState([
    { id: 1, name: "Laptop", price: 23000 },
    { id: 2, name: " MiniLactos", price: 32000 },
    { id: 3, name: "Game Set", price: 35145 },
    { id: 4, name: "Watch Acer", price: 2390 },
    { id: 5, name: "LOGIC Pro", price: 7840 }
  ])


  // Add Product
  const addProduct = () => {

    if (!name || !price) {
      return
    }

    if (editId !== null) {

      const updateProduct = product.map((item) => {
        if (editId === item.id) {
          return {
            ...item, name: name, price: price
          }
        }
        return item;
      })
      setProducts(updateProduct)
      setEditId(null);
      setName("");
      setPrice("");

    } else {

      const newProduct = {
        id: Date.now(),
        name: name,
        price: price
      }

      setProducts([...product, newProduct]);
      setName("");
      setPrice("");
    }
  }

  // Delete Product
  const deleteProduct = (id) => {
    const updateProduct = product.filter((produc) => produc.id != id)
    setProducts(updateProduct);
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setName(item.name)
    setPrice(item.price)
  }


  return (
    <div className='p-3'>
      <Navbar />
      {/* Hero */}
      <div className='w-full h-auto p-4  text-center'>
        <h1 className='text-red-600 text-3xl'>Product Management APP</h1>
        <p>Welcome to our App</p>
        <marquee direction="left">Product Added New Buy Now!</marquee>
      </div>

      {/* Add new Product */}
      <h1 className='mt-4 text-2xl'>Add New Product: </h1>
      <div className=' flex items-center gap-5 p-3 mb-9'>

        <input type="text" placeholder='Enter Product name' className='border-2 mt-4 p-2 rounded-sm outline-none' value={name} onChange={(e) => { setName(e.target.value) }} /> <br />

        <input type="number" className='border-2 mt-4 p-2 rounded-sm outline-none' value={price} onChange={(e) => { setPrice(e.target.value) }} /><br />

        <button className='bg-black mt-3 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white duration-300 ease-in-out' onClick={addProduct}>
          {editId != null ? "Update Product" : "Add Product"}
        </button>
      </div>

      {/* Details */}
      <p className='mt-3 mb-3'><b>Product Details:</b></p>
      <div className='p-4 flex items-center gap-4 flex-wrap'>
        {
          product.map((item) => (
            <Products key={item.id} id={item.id} name={item.name} price={item.price} onDelete={deleteProduct} onEdit={handleEdit} />
          ))
        }
      </div>


    </div>
  )
}

export default App
