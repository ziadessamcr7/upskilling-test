import React from 'react'

export default function About() {
    return <section id='about' className='my-4 position-relative '>

        <div className="container position-absolute top-0 end-0 bottom-0 start-0">
            <div className="row justify-content-center text-white">
                <div className="col-md-5">
                    <div>
                        <h2 className='display-4 fw-bolder mb-4 pt-3'>About Us</h2>
                        <h6 className='mb-4'>Lorem, ipsum dolor sit amet. At delectus aliquid nostrum excepturi esse officiis quasi laudantium quo dignissimos sit veniam iste molestiae culpa facilis deserunt eum, vero est? Obcaecati nulla recusandae alias vitae minima?</h6>
                        <img src={require('../images/Rectangle 263.png')} className='w-75' alt="" />
                    </div>

                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <div>
                        <h2 className='display-4 fw-bolder text-end mb-4 pt-5'>Where</h2>
                        <h6 className='text-end'>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque, temporibus repudiandae ut impedit expedita? consectetur adipisicing elit. Molestiae exercitationem numquam impedit hic minima iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus aliquid nostrum excepturi esse officiis quasi laudantium quo dignissimos sit veniam iste molestiae culpa facilis deserunt eum, vero est? Obcaecati nulla recusandae alias vitae minima?</h6>
                    </div>
                </div>


            </div>
            <button className='btn yellow px-5 py-3 fw-bold rounded-5 mx-auto d-block my-5'>Help Me</button>


        </div>

        <div className='d-flex justify-content-end'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1259" height="570" viewBox="0 0 600 840" fill="none">
                <path d="M558.598 0.0959473H1259V840H0L443.36 71.6682C443.36 71.6682 466.775 32.8108 488.594 16.6126C514.043 -2.28033 558.598 0.0959473 558.598 0.0959473Z" fill="#6D91EE" />
            </svg>
        </div>


    </section>
}


