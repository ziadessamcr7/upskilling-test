import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { TailSpin } from 'react-loader-spinner'

export default function Contact() {

    const [laoding, setLoading] = useState(false)

    let phoneRegex = /^(02)?01[0125][0-9]{8}$/

    let user = {
        "email": "",
        "phone": "",
        "name": ""
    }

    let formik = useFormik({
        initialValues: user,

        onSubmit: sendUserData,

        validate: function (vals) {

            let errors = {};

            if (vals.email.includes('@') === false
                || vals.email.includes('.') === false) {
                errors.email = 'please make sure u enter a valid email'
            }

            if (vals.name.length < 3 || vals.name.length > 12) {
                errors.name = 'please enter a name of 3 chars at least'
            }

            if (phoneRegex.test(vals.phone) === false) {
                errors.phone = 'please enter a valid phone number'
            }

            return errors
        }
    })


    async function sendUserData(values) {
        console.log(values)
        setLoading(true)


        const { data } = await axios.post(`http://upskilling-egypt.com:3000/contact`, values)
            .catch(function (error) {
                console.log('error:', error)
            })

        console.log(data)

        setLoading(false)


        if (data.message === 'Email sent successfully') {
            toast.success(data.message)
        }

    }

    return <section className='container-fluid mb-4' id='contact'>

        <div className='d-flex  justify-content-center my-5 pt-5'>
            <h1 className='position-relative'>Contact Us
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
                <div className='line4'></div>
            </h1>
        </div>

        <div className="row justify-content-center">

            <div className="col-md-3">
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control rounded-5 p-2' id='name' name='name' placeholder='Name' />
                        {formik.errors.name && formik.touched.name ? <p className='text-danger err'>{formik.errors.name}</p> : ''}

                        <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control rounded-5 p-2 mt-3' id='email' name='email' placeholder='Email' />
                        {formik.errors.email && formik.touched.email ? <p className='text-danger err'>{formik.errors.email}</p> : ''}


                        <input type="tel" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control rounded-5 p-2 mt-3' id='phone' name='phone' placeholder='Phone' />
                        {formik.errors.phone && formik.touched.phone ? <p className='text-danger err'>{formik.errors.phone}</p> : ''}



                        <button type='submit' className='btn btn-outline-info px-5 rounded-4 d-flex m-auto mt-3 mb-5'>
                            {laoding ? <TailSpin
                                height="30"
                                width="30"
                                color="blue"
                                ariaLabel="tail-spin-loading"
                                radius="4"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            /> : 'send'}
                        </button>
                    </form>

                </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className='pb-5'>
                    <div className='mail mb-4'>
                        <i class="fa-solid fa-envelope "></i>
                        <span className='ms-3'>upskilling@gmail.com</span>
                    </div>
                    <div className='phone'>
                        <i class="fa-solid fa-phone"></i>
                        <span className='ms-3'>+1123984085</span>
                    </div>
                </div>
            </div>

        </div>

    </section>
}
