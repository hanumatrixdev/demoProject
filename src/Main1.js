import React from 'react'
import { Link } from 'react-router-dom'

function Main1() {
  return (
    <div className='container-fluid p-5'>
        <div className='card text-center'>
            <div className='card-body'>
                Main Landing Page For Your Application
            </div>
            <div className='card'>
                <div className='card-body d-flex justify-content-center gap-2'>
                    <Link to={"/Header1"} className='btn btn-outline-primary btn-sm '>Product</Link>
                    <Link to={"/slogan-list"} className='btn btn-outline-info btn-sm'>Slogan</Link>
                    <Link to={"/Shop"} className='btn btn-outline-info btn-sm'>Shop</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main1;