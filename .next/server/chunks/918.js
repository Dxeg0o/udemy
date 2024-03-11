exports.id=918,exports.ids=[918],exports.modules={17584:(e,t,a)=>{Promise.resolve().then(a.bind(a,23525)),Promise.resolve().then(a.bind(a,76780))},9876:(e,t,a)=>{Promise.resolve().then(a.bind(a,15314))},24002:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,13724,23)),Promise.resolve().then(a.t.bind(a,35365,23)),Promise.resolve().then(a.t.bind(a,44900,23)),Promise.resolve().then(a.t.bind(a,44714,23)),Promise.resolve().then(a.t.bind(a,45392,23)),Promise.resolve().then(a.t.bind(a,8898,23))},23525:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>NavBar});var r=a(30784),n=a(11440),s=a.n(n),l=a(9885),o=a(43872),i=a.n(o),d=a(89440),u=a.n(d);function AuthModalInputs({inputs:e,handleChangeInput:t,isSignin:a}){return(0,r.jsxs)("div",{className:"",children:[a?null:(0,r.jsxs)("div",{className:"my-3 flex justify-between text-sm  ",children:[r.jsx("input",{type:"text",className:"border rounded p-2 py-3 w-[49%] bg-white text-black",placeholder:"First Name",value:e.firstName,onChange:t,name:"firstName"}),r.jsx("input",{type:"text",className:"border rounded p-2 py-3 w-[49%] bg-white text-black",placeholder:"Last Name",value:e.lastName,onChange:t,name:"lastName"})]}),r.jsx("div",{className:"my-3 flex justify-between text-sm",children:r.jsx("input",{type:"text",className:"border rounded p-2 py-3 w-full bg-white text-black",placeholder:"Email",value:e.email,onChange:t,name:"email"})}),a?null:(0,r.jsxs)("div",{className:"my-3 flex justify-between text-sm",children:[r.jsx("input",{type:"text",className:"border rounded p-2 py-3 w-[49%] bg-white text-black",placeholder:"Phone",value:e.phone,onChange:t,name:"phone"}),r.jsx("input",{type:"text",className:"border rounded p-2 py-3 w-[49%] bg-white text-black",placeholder:"City",value:e.city,onChange:t,name:"city"})]}),r.jsx("div",{className:"my-3 flex justify-between text-sm",children:r.jsx("input",{type:"text",className:"border rounded p-2 py-3 w-full bg-white text-black",placeholder:"Password",value:e.password,onChange:t,name:"password"})})]})}var c=a(54997),h=a(66668),x=a(76780);let hooks_useAuth=()=>{let{data:e,error:t,loading:a,setAuthState:r}=(0,l.useContext)(x.AuthenticationContext),signin=async({email:e,password:t},a)=>{r({data:null,error:null,loading:!0});try{let n=await c.Z.post("http://localhost:3000/api/auth/signin",{email:e,password:t});console.log(n),r({data:n.data,error:null,loading:!1}),a()}catch(e){r({data:null,error:e.response.data.errorMessage,loading:!1})}},signup=async({email:e,password:t,firstName:a,lastName:n,phone:s,city:l},o)=>{r({data:null,error:null,loading:!0});try{let i=await c.Z.post("http://localhost:3000/api/auth/signup",{email:e,password:t,firstName:a,lastName:n,phone:s,city:l});console.log(i),r({data:i.data,error:null,loading:!1}),o()}catch(e){r({data:null,error:e.response.data.errorMessage,loading:!1})}};return{signin,signup,signout:()=>{(0,h.deleteCookie)("jwt"),r({data:null,error:null,loading:!1})}}};var m=a(99360),p=a.n(m),g=a(81932),b=a.n(g);let f={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4};function AuthModal({isSignin:e}){let[t,a]=(0,l.useState)(!1),handleClose=()=>a(!1),{signin:n,signup:s}=hooks_useAuth(),{loading:o,data:d,error:c}=(0,l.useContext)(x.AuthenticationContext),renderContent=(t,a)=>e?t:a,[h,m]=(0,l.useState)({firstName:"",lastName:"",email:"",phone:"",city:"",password:""}),[g,y]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{if(e){if(h.password&&h.email)return y(!1)}else if(h.firstName&&h.lastName&&h.email&&h.password&&h.password&&h.city)return y(!1);y(!0)},[h]),(0,r.jsxs)("div",{children:[r.jsx("button",{className:`${renderContent("bg-blue-500 hover:bg-blue-400 text-white","hover:bg-gray-100")} border p-1 px-4 rounded mr-3`,onClick:()=>a(!0),children:renderContent("Sign in","Sign up")}),r.jsx(u(),{open:t,onClose:handleClose,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.jsx(i(),{sx:f,children:o?r.jsx("div",{className:"py-24 px-2 h-[600px] flex justify-center",children:r.jsx(p(),{})}):(0,r.jsxs)("div",{className:"p-2 h-[600px]",children:[c?r.jsx(b(),{severity:"error",className:"mb-4",children:c}):null,(0,r.jsxs)("div",{className:"uppercase font-bold text-center pb-2 border-b mb-2",children:[r.jsx("p",{className:"text-sm text-black",children:renderContent("Sign in","Create Account")}),(0,r.jsxs)("p",{className:"text-black",children:[d?.firstName," ",d?.lastName]})]}),(0,r.jsxs)("div",{className:"m-auto",children:[r.jsx("h2",{className:"text-2xl font-light text-center text-black",children:renderContent("Log Into Your Account","Create Your OpenTable Account")}),r.jsx(AuthModalInputs,{inputs:h,handleChangeInput:e=>{m({...h,[e.target.name]:e.target.value})},isSignin:e}),r.jsx("button",{className:"uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400",disabled:g,onClick:()=>{e?n({email:h.email,password:h.password},handleClose):s(h,handleClose)},children:renderContent("Sign in","Create Account")})]})]})})})]})}function NavBar(){let{data:e,loading:t}=(0,l.useContext)(x.AuthenticationContext),{signout:a}=hooks_useAuth();return(0,r.jsxs)("nav",{className:"bg-white p-2 flex justify-between",children:[r.jsx(s(),{href:"",className:"font-bold text-gray-700 text-2xl",children:"OpenTable"}),r.jsx("div",{children:t?null:r.jsx("div",{className:"flex",children:e?r.jsx("button",{className:"bg-blue-500 hover:bg-blue-400 text-white border p-1 px-4 rounded mr-3",onClick:a,children:"Sign out"}):(0,r.jsxs)(r.Fragment,{children:[r.jsx(AuthModal,{isSignin:!0}),r.jsx(AuthModal,{isSignin:!1})]})})})]})}},15314:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>SearchBar});var r=a(30784),n=a(57114),s=a(9885);function SearchBar(){let e=(0,n.useRouter)(),[t,a]=(0,s.useState)("");return(0,r.jsxs)("div",{className:"text-left py-3 m-auto flex justify-center",children:[r.jsx("input",{className:"rounded text-lg mr-3 p-2 w-[450px] bg-white text-black",type:"text",placeholder:"State, city or town",value:t,onChange:e=>a(e.target.value)}),r.jsx("button",{className:"rounded bg-red-600 px-9 py-2",onClick:()=>{""!==t&&(e.push(`/search?city=${t}`),a(""))},children:"Let\xb4s Go"})]})}},76780:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AuthenticationContext:()=>o,default:()=>AuthContext});var r=a(30784),n=a(54997),s=a(66668),l=a(9885);let o=(0,l.createContext)({loading:!1,error:null,data:null,setAuthState:()=>{}});function AuthContext({children:e}){let[t,a]=(0,l.useState)({loading:!0,data:null,error:null}),fetchUser=async()=>{a({data:null,error:null,loading:!0});try{let e=(0,s.getCookie)("jwt");if(!e)return a({data:null,error:null,loading:!1});let t=await n.Z.get("http://localhost:3000/api/auth/me",{headers:{Authorization:`Bearer ${e}`}});n.Z.defaults.headers.common.Authorization=`Bearer ${e}`,a({data:t.data,error:null,loading:!1})}catch(e){a({data:null,error:e.response.data.errorMessage,loading:!1})}};return(0,l.useEffect)(()=>{fetchUser()},[]),r.jsx(o.Provider,{value:{...t,setAuthState:a},children:e})}},79427:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Header});var r=a(4656),n=a(96109);function Header(){return r.jsx("div",{className:"h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2 text-white",children:(0,r.jsxs)("div",{className:"text-center mt-10",children:[(0,r.jsxs)("h1",{className:"text-5xl font-bold mb-2",children:["Find your table for any occasion"," "]}),r.jsx(n.ZP,{})]})})}},96109:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>i});var r=a(95153);let n=(0,r.createProxy)(String.raw`/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/components/SearchBar.tsx`),{__esModule:s,$$typeof:l}=n,o=n.default,i=o},40067:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>RootLayout});var r=a(4656),n=a(95153);let s=(0,n.createProxy)(String.raw`/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/components/NavBar.tsx`),{__esModule:l,$$typeof:o}=s,i=s.default,d=(0,n.createProxy)(String.raw`/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/context/AuthContext.tsx`),{__esModule:u,$$typeof:c}=d,h=d.default;function RootLayout({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{}),r.jsx("body",{children:r.jsx("main",{className:"bg-gray-100 min-h-screen w-screen text-black",children:r.jsx(h,{children:(0,r.jsxs)("main",{className:"max-w-screen-2xl m-auto bg-white",children:[r.jsx(i,{}),e]})})})})]})}d.AuthenticationContext,a(67272)},88734:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Loading});var r=a(4656);a(3542);var n=a(79427);function Loading(){return(0,r.jsxs)("main",{children:[r.jsx(n.Z,{}),r.jsx("div",{className:"py-3 px-35 mt-10 flex flex-wrap justify-center",children:[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>r.jsx("div",{className:"animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"},e))})]})}},67272:()=>{}};