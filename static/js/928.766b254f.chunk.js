"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[928],{4569:(s,e,a)=>{a.d(e,{S:()=>m});var r=a(2791),t=a(364);const n="add-message-form_AddMessageForm__nVo4Y",c="add-message-form_textarea__o0Bsp";var i=a(1625),l=a(5788),d=a(8490),o=a(184);const m=()=>{const[s,e]=(0,r.useState)(""),a=(0,t.v9)(l.L),m=(0,t.I0)();return(0,o.jsxs)("div",{className:n,children:[(0,o.jsx)("div",{className:c,children:(0,o.jsx)("textarea",{onChange:s=>e(s.currentTarget.value),value:s,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u0435\u0442\u0443\u0445\u0430\u043c"})}),(0,o.jsx)("div",{children:(0,o.jsx)(i.ZP,{type:"primary",disabled:"pending"===a,onClick:()=>{s&&(m(d.thunks.sendMessage(s)),e(""))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})}},4928:(s,e,a)=>{a.r(e),a.d(e,{default:()=>v});var r=a(2791),t=a(364),n=a(8490),c=a(5788);const i="messages_messages__NrDVm",l="message_message__WFB7i",d="message_userMessage__ZJLNx",o="message_messageBlock__58HMd";var m=a(184);const u=r.memo((s=>{let{message:e}=s;const a=e.userId;return(0,m.jsxs)("div",{className:29875===a?d:l,children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:e.photo,alt:"avatar",width:"40px"})}),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("span",{children:e.userName}),(0,m.jsx)("p",{children:e.message})]})]})})),h=()=>{const s=(0,t.v9)(c.b),e=(0,r.useRef)(null),[a,n]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{var s;a&&(null===(s=e.current)||void 0===s||s.scrollIntoView({behavior:"smooth"}))}),[s]),(0,m.jsxs)("div",{className:i,onScroll:s=>{let e=s.currentTarget;Math.abs(e.scrollHeight-e.scrollTop)-e.clientHeight<300?!a&&n(!0):a&&n(!1)},children:[s.map((s=>(0,m.jsx)(u,{message:s},s.id))),(0,m.jsx)("div",{ref:e})]})};var g=a(4569);const v=()=>{const s=(0,t.I0)(),e=(0,t.v9)(c.L);return(0,r.useEffect)((()=>(s(n.thunks.messagesListening()),()=>{s(n.thunks.stopMessagesListening())})),[]),(0,m.jsxs)("div",{children:["error"===e&&(0,m.jsx)("div",{children:"\u041e\u0448\u0438\u0431\u043a\u0430! \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."}),(0,m.jsx)(h,{}),(0,m.jsx)(g.S,{})]})}},5788:(s,e,a)=>{a.d(e,{L:()=>t,b:()=>r});const r=s=>s.chat.messages,t=s=>s.chat.status}}]);
//# sourceMappingURL=928.766b254f.chunk.js.map