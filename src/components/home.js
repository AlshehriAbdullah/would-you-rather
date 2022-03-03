import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

export default function Home () {
    return(
        <div className='container-fluid'>
            <div className='text-center'>
                <h2 className='mt-5'> Would You  Rather...  </h2>
                <div className='card-body'>
                    <img src='persona-icon-20.png' alt='pic'></img>
                    <div className='row'>
                        <div className='col'> option 1 </div>
                        <div className='col'>option 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}