"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[886],{4886:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});var r=s(5043);var l=s(3216),i=s(3768),n=s(7154),t=s(3892),d=s(2312),o=s(899),m=s(579);const c=()=>{let e=(0,l.Zp)();const[a,s]=(0,r.useState)(!1);let c=o.Ik({email:o.Yj().required("email is required").email("invalid email"),newPassword:o.Yj().required("password is required").matches(/^[A-Z][\w @]{5,8}$/,"invalid Password example Ahmed123")}),h=(0,t.Wx)({initialValues:{email:"",newPassword:""},validationSchema:c,onSubmit:async function(a){s(!0);let{data:r}=await n.A.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",a);s(!1),r.token?(i.Ay.success("Email and Password are update"),e("/Login")):(i.Ay.error(r.message),s(!1))}});return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"w-75 mx-auto py-4 mt-5",children:[(0,m.jsx)("h2",{children:"Reset Password"}),(0,m.jsxs)("form",{onSubmit:h.handleSubmit,children:[(0,m.jsx)("label",{htmlFor:"email",children:"Email : "}),(0,m.jsx)("input",{onChange:h.handleChange,onBlur:h.handleBlur,type:"email",placeholder:"Enter your Email",id:"email",name:"email",className:"form-control mb-3"}),h.errors.email&&h.touched.email?(0,m.jsx)("div",{className:"alert alert-danger py-2",children:h.errors.email}):null,(0,m.jsx)("label",{htmlFor:"newPassword",children:"newPassword : "}),(0,m.jsx)("input",{onChange:h.handleChange,onBlur:h.handleBlur,type:"newPassword",placeholder:"Enter your newPassword",id:"newPassword",name:"newPassword",className:"form-control mb-3"}),h.errors.newPassword&&h.touched.password?(0,m.jsx)("div",{className:"alert alert-danger py-2",children:h.errors.password}):null,1==a?(0,m.jsxs)("button",{className:"btn bg-main text-white fs-4 fw-bold",type:"submit",children:[" ",(0,m.jsx)(d.lb,{height:"30",width:"30",color:"#fff",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})," "]}):(0,m.jsx)("button",{disabled:!(h.dirty&&h.isValid),className:"btn bg-main text-white fs-4 fw-bold me-3",type:"submit",children:"Reset"})]})]})})}}}]);
//# sourceMappingURL=886.afb3a34e.chunk.js.map