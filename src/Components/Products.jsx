import React from 'react'

const Products = ({id, name, price, onDelete,onEdit }) => {
    return (

        <div>
            <div className='h-auto w-80 bg-green-100 p-3 rounded-sm'>
                <p className='mt-3'>Name: {name}</p>
                <p className=' mt-3'>Price: Rs.{price}</p>
                <div className='flex items-center gap-4'>
                    <button className='bg-black mt-3 cursor-pointer text-white px-3 py-2 rounded-md hover:bg-blue-300 hover:text-black duration-300 ease-in-out' >View Product</button>
                <button className='bg-red-500 mt-3 cursor-pointer text-white px-3 py-2 rounded-md hover:bg-black hover:text-white duration-300 ease-in-out' onClick={()=> onDelete(id)}>Delete</button>
                <button className='bg-green-500 mt-3 cursor-pointer text-white px-3 py-2 rounded-md hover:bg-purple-600 hover:text-white duration-300 ease-in-out' onClick={()=> onEdit({id,name,price})}>Edit</button>
                </div>
                
            </div>
        </div>
    )
}

export default Products
