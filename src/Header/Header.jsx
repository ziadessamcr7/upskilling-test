import React from 'react'

export default function Header() {
    return <section id='header' className='mb-4'>


        <div className="container overflow-auto">
            <div className='mb-5 d-flex justify-content-center align-items-center -info mt-5'>
                <img src={require('../images/Trash Hauling.png')} className='-success' style={{ width: '65px', height: '45px' }} alt="" />


                <div className=' words ms-3 '>
                    <h2 className=''>Round Rock</h2>
                    <p>Trash Houling</p>

                </div>

            </div>

            <div className='d-flex justify-content-center mb-2'>
                <button className='btn btn-primary px-4 rounded-3 mb-4'>Experts</button>
            </div>

            <h5 className='text-center u'>Lorem</h5 >
            <h1 className='text-center mb-3 display-2'>Lorem lorem</h1>

            <div className="row mb-2">
                <div className="col-md-4 mx-auto text-center">
                    <h6> nulla incidunt veniam labore. Debitis, adipisci nesciunt corrupti optio vero velit tempore modi aperiam aspernatur provident saepe?</h6>
                </div>
            </div>
        </div>

        <div className='d-flex justify-content-center pb-5'>
            <button className='btn btn-primary px-5 py-3 rounded-5'>Help Me</button>
        </div>

    </section>

}
