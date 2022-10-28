import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Navbar from '../layout/Navbar'

const Home = () => {
    let item_store = useSelector(store => store.itemStore)
    const items_in_store = item_store.items

    // console.log(item_in_store)
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row row-cols-md-3 row-cols-lg-5 g-5'>

                    {
                        items_in_store.map((item,i) => {
                            return<Card props={item} key={i}></Card>

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home