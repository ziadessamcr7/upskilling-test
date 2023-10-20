import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Testimonial() {

    const [userData, setUserData] = useState(null)


    async function getUserData() {
        const { data } = await axios.get(`https://reqres.in/api/users?page=1`)
        console.log(data.data)

        setUserData(data.data)

    }

    useEffect(function () {
        getUserData()
    }, [])


    return <section className='container mb-5' id='Testymonial'>

        <div className='d-flex  justify-content-center my-5'>
            <h1 className='position-relative'>Testimonial
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
                <div className='line4'></div>
            </h1>
        </div>

        <div className="row justify-content-center g-4">


            {userData?.map(function (info, idx) {
                return <div key={idx} className="col-md-5 bg-info-subte">
                    <div className='rounded-5 p-3' style={{ border: '1px solid #6D91EE' }}>
                        <div className="row">
                            <div className="col-md-3">
                                <div>
                                    <img src={info.avatar} className='w-100 rounded-circle' alt="" />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div>
                                    <h6 className='fw-bold'>{info.first_name} {info.last_name} </h6>
                                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eius esse voluptatibus non, accusantium excepturi sint, nemo dicta similique adipisci laudantium! Ea numquam repellat repellendus possimus nemo omnis quasi rem?</p>
                                </div>
                                <div className='stars'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star "></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }).slice(0, 4)}










        </div>


    </section>
}
