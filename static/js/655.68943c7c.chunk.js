"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[655],{9655:(e,s,l)=>{l.r(s),l.d(s,{default:()=>v});var n=l(2791),i=l(1523),t=l(8962);const r="Users_userPhoto__XuTmP";var o=l(184);const a=e=>{let{user:s,unFollowTC:l,followTC:n,isFollowing:a}=e;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("span",{children:[(0,o.jsx)("div",{children:(0,o.jsx)(i.OL,{to:"/profile/"+s.id,children:(0,o.jsx)("img",{src:s.photos.small?s.photos.small:t,alt:"",className:r})})}),(0,o.jsx)("div",{children:s.followed?(0,o.jsx)("button",{disabled:a.some((e=>e===s.id)),onClick:()=>{l(s.id)},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):(0,o.jsx)("button",{disabled:a.some((e=>e===s.id)),onClick:()=>{n(s.id)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]}),(0,o.jsxs)("span",{children:[(0,o.jsxs)("span",{children:[(0,o.jsx)("div",{children:s.name}),(0,o.jsx)("div",{children:s.status})]}),(0,o.jsxs)("span",{children:[(0,o.jsx)("div",{children:s.id}),(0,o.jsx)("div",{children:s.followed})]})]})]})};var d=l(1694),c=l.n(d);const u=e=>{let{totalUserCount:s,pageSize:l,onPageChanged:i,currentPage:t}=e,r=Math.ceil(s/l),a=[];for(let n=1;n<=r;n+=1)a.push(n);let d=Math.ceil(r/10),[u,h]=(0,n.useState)(1),x=10*(u-1)+1,j=10*u;return(0,o.jsxs)("div",{className:"",children:[u>1&&(0,o.jsx)("button",{onClick:()=>{h(u-1)},children:"\u043f\u0440\u0435\u0434."}),a.filter((e=>e>=x&&e<=j)).map((e=>(0,o.jsx)("span",{className:c()({"":t===e},""),onClick:()=>{i(e)},children:e},e))),d>u&&(0,o.jsx)("button",{onClick:()=>{h(u+1)},children:"\u0441\u043b\u0435\u0434."})]})};var h=l(364),x=l(5705);const j=n.memo((e=>{let{onFilterChanged:s}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"User search"}),(0,o.jsx)(x.J9,{initialValues:{term:"",friend:null},onSubmit:(e,l)=>{let{setSubmitting:n}=l;s(e),n(!1)},children:e=>{let{isSubmitting:s}=e;return(0,o.jsxs)("form",{children:[(0,o.jsx)(x.gN,{type:"text",name:"term"}),(0,o.jsxs)(x.gN,{name:"friend",as:"select",placeholder:"All users",children:[(0,o.jsx)("option",{value:"null",children:"All"}),(0,o.jsx)("option",{value:"true",children:"Friend"}),(0,o.jsx)("option",{value:"false",children:"Not friends"})]}),(0,o.jsx)("button",{type:"submit",disabled:s,children:"Search"})]})}})]})}));var g=l(6716),p=l(5778),m=l(8107);const v=()=>{const{filter:e,users:s,totalUserCount:l,pageSize:i,currentPage:t,isFollowing:r,isFetching:d}={totalUserCount:(0,h.v9)(m.lr),currentPage:(0,h.v9)(m.FZ),pageSize:(0,h.v9)(m.b7),users:(0,h.v9)(m.Rf),isFollowing:(0,h.v9)(m.f3),filter:(0,h.v9)(m.ln),isFetching:(0,h.v9)(m.ab)},c=(0,h.I0)();(0,n.useEffect)((()=>{c(g.thunks.getUsers(t,i,e))}),[]);const x=e=>{c(g.thunks.follow(e))},v=e=>{c(g.thunks.unFollow(e))};return(0,o.jsxs)("div",{children:[(0,o.jsx)(j,{onFilterChanged:e=>{c(g.thunks.getUsers(1,i,e))}}),(0,o.jsx)(u,{totalUserCount:l,pageSize:i,currentPage:t,onPageChanged:s=>{c(g.thunks.getUsers(s,i,e))}}),d?(0,o.jsx)(p.p,{}):null,s.map((e=>(0,o.jsx)(a,{followTC:x,isFollowing:r,unFollowTC:v,user:e},e.id)))]})}},8962:(e,s,l)=>{e.exports=l.p+"static/media/photo.713c87a65d424c00adee.png"}}]);
//# sourceMappingURL=655.68943c7c.chunk.js.map