import React from 'react'

export default function Services() {
    return <section className=' container' id='services'>
        <div className='d-flex  justify-content-center my-5'>
            <h1 className='position-relative'>Services
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
                <div className='line4'></div>
            </h1>

        </div>
        <div className="row justify-content-center g-4">
            <div className="card p-0 rounded-4" style={{ width: '17rem' }}>
                <img src={require('../images/b51e46d3d5bb005d1e122864372c48f7.png')} className="card-img-top" height={'200px'} alt="..." />
                <div className="card-body">
                    <h6 className="fw-bold">Lorem, ipsum.</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card p-0 rounded-4" style={{ width: '17rem', marginLeft: '15px', marginRight: '15px' }}>
                <img src={require('../images/2png.png')} className="card-img-top" height={'200px'} alt="..." />
                <div className="card-body">
                    <h6 className="fw-bold">Lorem, ipsum.</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card p-0 rounded-4" style={{ width: '17rem' }}>
                <img src={require('../images/3.jpg')} className="card-img-top" height={'200px'} alt="..." />
                <div className="card-body">
                    <h6 className="fw-bold">Lorem, ipsum.</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-primary my-5 px-5 py-3 rounded-5 d-block'>Help me</button>
        </div>




    </section>
}
