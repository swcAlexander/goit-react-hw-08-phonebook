"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[725],{3725:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var r=t(2791),o=t(9434),a=(t(5462),"NOT_FOUND");var i=function(e,n){return e===n};function u(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?i:r,u=t.maxSize,c=void 0===u?1:u,l=t.resultEqualityCheck,s=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),f=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:a},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(s):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return a}return{get:r,put:function(n,o){r(n)===a&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,s);function m(){var n=f.get(arguments);if(n===a){if(n=e.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(e){return l(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return m.clearCache=function(){return f.clear()},m}function c(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function l(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(u=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var s=u,f=s.memoizeOptions,m=void 0===f?t:f,p=Array.isArray(m)?m:[m],v=c(r),d=e.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=v.length,t=0;t<n;t++)e.push(v[t].apply(null,arguments));return a=d.apply(null,e)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:d,dependencies:v,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var s=l(u),f=function(e){return e.contacts.items},m=function(e){return e.filter},p=s([f,m],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),v="ContactItem_contactItem__aUSMv",d="ContactItem_contactName__zpIwE",h="ContactItem_contactNumber__5zn6-",_=t(208),y=t(184),x=function(e){var n=e.name,t=e.number,r=e.itemId,a=(0,o.I0)();return(0,y.jsxs)("li",{className:v,children:[(0,y.jsxs)("span",{className:d,children:[n,":"]}),(0,y.jsx)("span",{className:h,children:t}),(0,y.jsx)("button",{type:"button",onClick:function(){return e=r,void a((0,_.GK)(e));var e},children:"Delete"})]},r)},g="ContactList_contactList__UFVCg",j=function(){var e=(0,o.v9)(p);return(0,y.jsx)("ul",{className:g,children:e.map((function(e){return(0,y.jsx)(x,{name:e.name,number:e.number,itemId:e.id},e.id)}))})},b=t(9439),C="ContactForm_contactForm__y0Rca",k="ContactForm_contactFormHeader__gURbL",w="ContactForm_contactInput__z6XOX",N="ContactForm_contactButton__jSKp4",F=t(8174),S=function(){var e=(0,r.useState)(""),n=(0,b.Z)(e,2),t=n[0],a=n[1],i=(0,r.useState)(""),u=(0,b.Z)(i,2),c=u[0],l=u[1],s=(0,o.I0)(),m=(0,o.v9)(f),p=function(e){var n=e.currentTarget,t=n.name,r=n.value;"name"===t?a(r):"number"===t&&l(r)},v=function(){a(""),l("")};return(0,y.jsxs)("form",{className:C,onSubmit:function(e){if(e.preventDefault(),""!==t.trim()&&""!==c.trim()){var n={name:t,number:c};m.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?F.Am.error("The contact is already in the contact book!"):(s((0,_.uK)(n)),v())}else F.Am.error("Please fill in all fields")},children:[(0,y.jsx)("h1",{className:k,children:"Phonebook"}),(0,y.jsx)("input",{className:w,type:"text",name:"name",value:t,onChange:p,placeholder:"Name"}),(0,y.jsx)("input",{className:w,type:"tel",name:"number",value:c,onChange:p,placeholder:"Phone number"}),(0,y.jsx)("button",{className:N,type:"submit",children:"Add contact"})]})},I=t(6338),A=function(){var e=(0,o.v9)(m),n=(0,o.I0)(),t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n}(10);return(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"",id:t,children:"Find filter by name"}),(0,y.jsx)("input",{type:"text",value:e,id:t,onChange:function(e){n((0,I.T)(e.target.value))}})]})},E=t(7593),L="Apx_container__ucoVh",z=t(1655),O=function(){var e=(0,o.I0)(),n=z.E.contacts,t=z.E.isLoading;return(0,r.useEffect)((function(){e((0,_.yF)())}),[e]),(0,y.jsxs)("div",{className:L,children:[(0,y.jsx)(S,{}),(0,y.jsx)("h2",{children:"Contacts"}),t&&(0,y.jsx)(E.a,{}),n.items.length>0?(0,y.jsx)(A,{}):(0,y.jsx)("p",{children:"Your phonebook is empty. Add first contact!"}),n.items.length>0&&(0,y.jsx)(j,{})]})},R="ScreenSaver_main_container__rGLr4",U="ScreenSaver_title__zlKNn",P=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("h1",{className:U,children:["Phonebook welcome page"," ",(0,y.jsx)("span",{role:"img","aria-label":"Greeting icon",children:"\ud83d\udc81\u200d\u2640\ufe0f"})]}),(0,y.jsx)("div",{className:R,children:(0,y.jsx)("p",{children:"Please register or log in"})})]})},D=t(6330),K=function(){var e=D.fD.profile;return(0,y.jsx)("div",{children:e?(0,y.jsx)(O,{}):(0,y.jsx)(P,{})})}}}]);
//# sourceMappingURL=725.2bfe1270.chunk.js.map