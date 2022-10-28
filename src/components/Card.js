import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ props }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <ToastContainer theme='colored' position='top-left' />
                <img src={props.item_image} className="card-img-top" alt={props.item_name} />
                <div className="card-body">
                    <h5 className="card-title text-truncate">{props.item_name}</h5>
                    <h6 className="card-title">{props.item_price}</h6>

                    <Link to="#" className="btn btn-primary"
                        onClick={() => {
                            dispatch({ type: "ADD_TO_CART", paylod: props })
                            toast.success("Item added to Cart")
                        }}
                    >Add to Cart</Link>
                </div>
            </div>
        </>
    )
}

export default Card