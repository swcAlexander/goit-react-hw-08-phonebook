"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[293],{8293:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(2791),a=t(9434),c=t(8174),o=(t(5462),t(6916)),s=function(e){return e.contacts.items},i=function(e){return e.filter},l=(0,o.P1)([s,i],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),u="ContactItem_contactItem__aUSMv",m="ContactItem_contactName__zpIwE",d="ContactItem_contactNumber__5zn6-",h=t(208),f=t(184),_=function(e){var n=e.name,t=e.number,r=e.itemId,c=(0,a.I0)();return(0,f.jsxs)("li",{className:u,children:[(0,f.jsxs)("span",{className:m,children:[n,":"]}),(0,f.jsx)("span",{className:d,children:t}),(0,f.jsx)("button",{type:"button",onClick:function(){return e=r,void c((0,h.GK)(e));var e},children:"Delete"})]},r)},x="ContactList_contactList__UFVCg",p=function(){var e=(0,a.v9)(l);return(0,f.jsx)("ul",{className:x,children:e.map((function(e){return(0,f.jsx)(_,{name:e.name,number:e.number,itemId:e.id},e.id)}))})},j=t(9439),v="ContactForm_contactForm__y0Rca",b="ContactForm_contactFormHeader__gURbL",C="ContactForm_contactInput__z6XOX",g="ContactForm_contactButton__jSKp4",N=function(){var e=(0,r.useState)(""),n=(0,j.Z)(e,2),t=n[0],o=n[1],i=(0,r.useState)(""),l=(0,j.Z)(i,2),u=l[0],m=l[1],d=(0,a.I0)(),_=(0,a.v9)(s),x=function(e){var n=e.currentTarget,t=n.name,r=n.value;"name"===t?o(r):"number"===t&&m(r)},p=function(){o(""),m("")};return(0,f.jsxs)("form",{className:v,onSubmit:function(e){if(e.preventDefault(),""!==t.trim()&&""!==u.trim()){var n={name:t,number:u};_.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?c.Am.error("The contact is already in the contact book!"):(d((0,h.uK)(n)),p())}else c.Am.error("Please fill in all fields")},children:[(0,f.jsx)("h1",{className:b,children:"Phonebook"}),(0,f.jsx)("input",{className:C,type:"text",name:"name",value:t,onChange:x,placeholder:"Name"}),(0,f.jsx)("input",{className:C,type:"tel",name:"number",value:u,onChange:x,placeholder:"Phone number"}),(0,f.jsx)("button",{className:g,type:"submit",children:"Add contact"})]})},w=t(5984),I=t(759),k=function(){var e=(0,a.v9)(i),n=(0,a.I0)(),t=(0,w.x0)(10);return(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"",id:t,children:"Find filter by name"}),(0,f.jsx)("input",{type:"text",value:e,id:t,onChange:function(e){n((0,I.T)(e.target.value))}})]})},y=t(643),F=function(){return(0,f.jsx)(y.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})},L="Apx_container__ucoVh",S=t(1655),P=function(){var e=(0,a.I0)(),n=S.E.contacts,t=S.E.isLoading;return(0,r.useEffect)((function(){e((0,h.yF)())}),[e]),(0,f.jsxs)("div",{className:L,children:[(0,f.jsx)(N,{}),(0,f.jsx)("h2",{children:"Contacts"}),t&&(0,f.jsx)(F,{}),n.items.length>0?(0,f.jsx)(k,{}):(0,f.jsx)("p",{children:"Your phonebook is empty. Add first contact!"}),n.items.length>0&&(0,f.jsx)(p,{}),(0,f.jsx)(c.Ix,{autoClose:3e3})]})},A="ScreenSaver_main_container__rGLr4",z="ScreenSaver_title__zlKNn",E=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("h1",{className:z,children:["Phonebook welcome page"," ",(0,f.jsx)("span",{role:"img","aria-label":"Greeting icon",children:"\ud83d\udc81\u200d\u2640\ufe0f"})]}),(0,f.jsx)("div",{className:A,children:(0,f.jsx)("p",{children:"Please register or log in"})})]})},K=t(6330),D=function(){var e=K.fD.profile;return(0,f.jsx)("div",{children:e?(0,f.jsx)(P,{}):(0,f.jsx)(E,{})})}}}]);
//# sourceMappingURL=293.e485996a.chunk.js.map