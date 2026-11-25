import React, { useContext, useState } from 'react';
import style from './Login.module.css'
import logo from '../../Assets/images/freshcart-logo.svg';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
const Login = () => {
    let {setUserToken}= useContext(UserContext)
    let navigate=useNavigate()  
    const [laoding, setlaoding] = useState(false);
    const [apiErrore, setapiErrore] = useState(null);
    async function Loginsubmit(values) {
        setlaoding(true)
    let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
    .catch((err)=>{setapiErrore(err.response.data.message)
        setlaoding(false)})
        if(data.message=='success'){
            setlaoding(false)
            localStorage.setItem('userToken',data.token)
            setUserToken(data.token)
            navigate('/')
        }
    }
   async function forgetPassword() {
        navigate('/getemail')
    }
    let validationSchema=yup.object({
        email:yup.string().required('email is required').email('invalid email'),
        password:yup.string().required('password is required').matches(/^[A-Z][\w @]{5,8}$/,'invalid Password example Ahmed123'),
    })
    let formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },validationSchema
        ,onSubmit:Loginsubmit
    })
 
    return <>
    <div className={style.page}>
      <div className={style.hero}>
        <h2>Fresh finds,<br />delivered fast.</h2>
        <p>Thousands of products, one simple cart. Sign in to pick up where you left off.</p>
        <div className={style.chips}><span>Free shipping</span><span>Secure checkout</span><span>Top brands</span></div>
      </div>
      <div className={style.formside}>
        <div className={style.box}>
          <img className={style.logo} src={logo} alt="FreshCart" />
          <h1 className={style.title}>Sign in</h1>
          <p className={style.sub}>Enter your details below</p>
          {apiErrore?<div className={style.error}>{apiErrore}</div>:''}
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email" className={style.label}>Email</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" placeholder='you@example.com' id='email' name='email' className={style.input} />
            {formik.errors.email &&formik.touched.email?<div className={style.error}>{formik.errors.email}</div>:null}
            <label htmlFor="password" className={style.label}>Password</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" placeholder='Enter your password' id='password' name='password' className={style.input} />
            {formik.errors.password &&formik.touched.password?<div className={style.error}>{formik.errors.password}</div>:null}
            <div className={style.row}><span className={style.link} onClick={()=>{forgetPassword()}}>Forgot password?</span></div>
            {laoding==true?<button className={style.btn} type='submit'><Bars height="24" width="24" color="#fff" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true} /></button>:
            <button disabled={!(formik.dirty &&formik.isValid)} className={style.btn} type='submit'>Sign in</button>}
          </form>
          <p className={style.foot}>Don't have an account? <Link to={'/register'} className={style.link}>Register now</Link></p>
        </div>
      </div>
    </div>
    </>
}

export default Login;
