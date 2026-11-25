import React, { useState } from 'react';
import style from './Register.module.css'
import logo from '../../Assets/images/freshcart-logo.svg';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    let navigate=useNavigate()  
    const [laoding, setlaoding] = useState(false);
    const [apiErrore, setapiErrore] = useState(null);
    async function Registersubmit(values) {
        setlaoding(true)
    let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
    .catch((err)=>{setapiErrore(err?.response?.data?.message || 'Something went wrong, please try again')
        setlaoding(false)})
        if(data?.message=='success'){
            setlaoding(false)
            navigate('/Login')
        }
    }
    let validationSchema=yup.object({
        name:yup.string().required('Name is required').min(3,'minimum lenght 3').max(10,'maximum lenght 10'),
        email:yup.string().required('email is required').email('invalid email'),
        password:yup.string().required('password is required').matches(/^[A-Z][\w @]{5,8}$/,'invalid Password example Ahmed123'),
        rePassword:yup.string().required('rePassword is required').oneOf([yup.ref('password')],'password is not match'),
        phone:yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/,'must be an Egyptian number')
    })
    let formik=useFormik({
        initialValues:{
            name: "",
            email:"",
            password:"",
            rePassword:"",
            phone:""
        },validationSchema
        ,onSubmit:Registersubmit
    })
    return <>
    <div className={`${style.page} ${style.reverse}`}>
      <div className={style.hero}>
        <h2>Start in<br />3 easy steps.</h2>
        <p>One account for everything fresh.</p>
        <div className={style.steps}><div><b>1</b>Create your account</div><div><b>2</b>Browse thousands of products</div><div><b>3</b>Checkout securely</div></div>
      </div>
      <div className={style.formside}>
        <div className={style.box}>
          <img className={style.logo} src={logo} alt="FreshCart" />
          <h1 className={style.title}>Create account</h1>
          <p className={style.sub}>Join in a minute, shop right away</p>
          {apiErrore?<div className={style.error}>{apiErrore}</div>:''}
          <form onSubmit={formik.handleSubmit}>
          <div className={style.grid}>
            <div className={style.full}>
              <label htmlFor="name" className={style.label}>Name</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" placeholder='Your full name' id='name' name='name' className={style.input} />
              {formik.errors.name &&formik.touched.name?<div className={style.error}>{formik.errors.name}</div>:null}
            </div>
            <div className={style.full}>
              <label htmlFor="email" className={style.label}>Email</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" placeholder='you@example.com' id='email' name='email' className={style.input} />
              {formik.errors.email &&formik.touched.email?<div className={style.error}>{formik.errors.email}</div>:null}
            </div>
            <div>
              <label htmlFor="password" className={style.label}>Password</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" placeholder='Password' id='password' name='password' className={style.input} />
              {formik.errors.password &&formik.touched.password?<div className={style.error}>{formik.errors.password}</div>:null}
            </div>
            <div>
              <label htmlFor="rePassword" className={style.label}>Confirm password</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" placeholder='Re-enter password' id='rePassword' name='rePassword' className={style.input} />
              {formik.errors.rePassword &&formik.touched.rePassword?<div className={style.error}>{formik.errors.rePassword}</div>:null}
            </div>
            <div className={style.full}>
              <label htmlFor="phone" className={style.label}>Phone</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" placeholder='01xxxxxxxxx' id='phone' name='phone' className={style.input} />
              {formik.errors.phone &&formik.touched.phone?<div className={style.error}>{formik.errors.phone}</div>:null}
            </div>
          </div>
            {laoding==true?<button className={style.btn} type='submit'><Bars height="24" width="24" color="#fff" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true} /></button>:
            <button disabled={!(formik.dirty &&formik.isValid)} className={style.btn} type='submit'>Create account</button>}
          </form>
          <p className={style.foot}>Already have an account? <Link to={'/login'} className={style.link}>Sign in</Link></p>
        </div>
      </div>
    </div>
    </>
}

export default Register;
