"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[92],{4711:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var r=s(5043);var l=s(3892),i=s(899),t=s(7154),n=s(2312),o=s(3216),d=s(5475),m=s(1638),c=s(579);const h=()=>{let{setUserToken:e}=(0,r.useContext)(m.R),a=(0,o.Zp)();const[s,h]=(0,r.useState)(!1),[u,p]=(0,r.useState)(null);let b=i.Ik({email:i.Yj().required("email is required").email("invalid email"),password:i.Yj().required("password is required").matches(/^[A-Z][\w @]{5,8}$/,"invalid Password example Ahmed123")}),w=(0,l.Wx)({initialValues:{email:"",password:""},validationSchema:b,onSubmit:async function(s){h(!0);let{data:r}=await t.A.post("https://ecommerce.routemisr.com/api/v1/auth/signin",s).catch((e=>{p(e.response.data.message),h(!1)}));"success"==r.message&&(h(!1),localStorage.setItem("userToken",r.token),e(r.token),a("/"))}});return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"w-75 mx-auto py-4 mt-5",children:[(0,c.jsx)("h2",{children:"Login Now"}),u?(0,c.jsx)("div",{className:"alert alert-danger",children:u}):"",(0,c.jsxs)("form",{onSubmit:w.handleSubmit,children:[(0,c.jsx)("label",{htmlFor:"email",children:"Email : "}),(0,c.jsx)("input",{onChange:w.handleChange,onBlur:w.handleBlur,type:"email",placeholder:"Enter your Email",id:"email",name:"email",className:"form-control mb-3"}),w.errors.email&&w.touched.email?(0,c.jsx)("div",{className:"alert alert-danger py-2",children:w.errors.email}):null,(0,c.jsx)("label",{htmlFor:"password",children:"Password : "}),(0,c.jsx)("input",{onChange:w.handleChange,onBlur:w.handleBlur,type:"password",placeholder:"Enter your Password",id:"password",name:"password",className:"form-control mb-3"}),w.errors.password&&w.touched.password?(0,c.jsx)("div",{className:"alert alert-danger py-2",children:w.errors.password}):null,1==s?(0,c.jsxs)("button",{className:"btn bg-main text-white fs-4 fw-bold",type:"submit",children:[" ",(0,c.jsx)(n.lb,{height:"30",width:"30",color:"#fff",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})," "]}):(0,c.jsx)("button",{disabled:!(w.dirty&&w.isValid),className:"btn bg-main text-white cursor-pointer fs-4 fw-bold me-3",type:"submit",children:"Login  "}),(0,c.jsx)("span",{className:"py-3",children:"If you do not have an account please"}),(0,c.jsx)(d.N_,{to:"/register",className:"btn  fs-4 cursor-pointer bg-main ",children:"Register Now"}),(0,c.jsx)("div",{className:"py-3",children:(0,c.jsx)("span",{className:"btn fs-4 cursor-pointer bg-main ",onClick:()=>{!async function(){a("/getemail")}()},children:"Forget password"})})]})]})})}}}]);
//# sourceMappingURL=92.4d0163eb.chunk.js.map