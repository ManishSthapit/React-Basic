import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../layout/Navbar'

const Cart = () => {
    const cart_store= useSelector(store=>store.cartStore)
    const cartItems = cart_store.cart_items

    const dispatch = useDispatch()
  return (
    <>
    <Navbar/>
    <div className='container my-5 shadow-lg'>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <td>S.No</td>
                    <td>Product Images</td>
                    <td>Product Description</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    cartItems.map((item,i)=>{
                        return <tr key={i}>
                            <td>{i+1}</td>
                            <td>
                                <img src={item.item_image} style={{height:"100px"}}/>
                            </td>
                            <td>
                                <h4>{item.item_name}</h4>
                                <p>{item.item_descrpition}</p>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>{
                                    return dispatch({type:"REMOVE_FROM_CART", payload:item})
                                }}>
                                    <i className='bi bi-trash'></i>
                                </button>
                            </td>
                        </tr>
                    })
                }


            </tbody>
        </table>
    </div>
    
    </>
  )
}

export default Cart