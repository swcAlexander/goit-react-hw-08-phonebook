"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[735],{8735:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var a=t(2791),r=t(9434),c=(t(5462),t(2286)),o="ContactItem_contactItem__Z4FuP",s="ContactItem_contactName__ZAMAK",i="ContactItem_contactNumber__Xjnxb",l=t(8097),u=t(184),m=function(e){var n=e.name,t=e.number,a=e.itemId,c=(0,r.I0)();return(0,u.jsxs)("li",{className:o,children:[(0,u.jsxs)("span",{className:s,children:[n,":"]}),(0,u.jsx)("span",{className:i,children:t}),(0,u.jsx)("button",{type:"button",onClick:function(){return e=a,void c((0,l.GK)(e));var e},children:"Delete"})]},a)},d="ContactList_contactList__UFVCg",h=function(){var e=(0,r.v9)(c.zp);return(0,u.jsx)("ul",{className:d,children:e.map((function(e){return(0,u.jsx)(m,{name:e.name,number:e.number,itemId:e.id},e.id)}))})},_=t(9439),f="ContactForm_contactForm__y0Rca",v="ContactForm_contactFormHeader__gURbL",x="ContactForm_contactInput__z6XOX",p="ContactForm_contactButton__jSKp4",j=t(8174),b=function(){var e=(0,a.useState)(""),n=(0,_.Z)(e,2),t=n[0],o=n[1],s=(0,a.useState)(""),i=(0,_.Z)(s,2),m=i[0],d=i[1],h=(0,r.v9)(c.Af),b=(0,r.I0)(),g=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":o(a);break;case"number":d(a);break;default:return}},C=function(){o(""),d("")};return(0,u.jsxs)("form",{className:f,onSubmit:function(e){(e.preventDefault(),""!==t.trim()&&""!==m.trim())?h.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?j.Am.error("".concat(t," is on contacts")):(b((0,l.uK)({name:t,number:m})),C()):j.Am.error("Please fill in all fields")},children:[(0,u.jsx)("h1",{className:v,children:"Phonebook"}),(0,u.jsx)("input",{className:x,type:"text",name:"name",value:t,onChange:g,placeholder:"Name"}),(0,u.jsx)("input",{className:x,type:"tel",name:"number",value:m,onChange:g,placeholder:"Phone number"}),(0,u.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},g=t(6338),C=function(){var e=(0,r.v9)(c.AD),n=(0,r.I0)(),t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&t[e];n+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return n}(10);return(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"",id:t,children:"Find filter by name"}),(0,u.jsx)("input",{type:"text",value:e,id:t,onChange:function(e){n((0,g.Tv)(e.target.value))}})]})},N=t(7593),k="Apx_container__ucoVh",F=function(){var e=(0,r.I0)(),n=(0,r.v9)(c.Af),t=(0,r.v9)(c.NH),o=(0,r.v9)(c.vI);return console.log(t),(0,a.useEffect)((function(){e((0,l.yF)(o))}),[e,o]),(0,u.jsxs)("div",{className:k,children:[(0,u.jsx)(b,{}),(0,u.jsx)("h2",{children:"Contacts"}),t&&(0,u.jsx)(N.a,{}),n.length>0?(0,u.jsx)(C,{}):(0,u.jsx)("p",{children:"Your phonebook is empty. Add first contact!"}),n.length>0&&(0,u.jsx)(h,{})]})},I="ScreenSaver_main_container__rGLr4",y="ScreenSaver_title__zlKNn",A=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h1",{className:y,children:["Phonebook welcome page"," ",(0,u.jsx)("span",{role:"img","aria-label":"Greeting icon",children:"\ud83d\udc81\u200d\u2640\ufe0f"})]}),(0,u.jsx)("div",{className:I,children:(0,u.jsx)("p",{children:"Please register or log in"})})]})},S=function(){var e=(0,r.v9)(c.tT);return(0,u.jsx)("div",{children:e?(0,u.jsx)(F,{}):(0,u.jsx)(A,{})})}}}]);
//# sourceMappingURL=735.fe0a09a6.chunk.js.map