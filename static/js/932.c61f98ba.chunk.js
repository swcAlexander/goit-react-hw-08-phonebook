"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[932],{9198:function(e,t,n){n.d(t,{W:function(){return s}});n(2791);var r=n(184),s=function(e){var t=e.title,n=e.children;return(0,r.jsxs)("section",{children:[t&&(0,r.jsx)("h2",{children:t}),n]})}},6932:function(e,t,n){n.r(t);n(2791);var r=n(8174),s=n(979),a=n(9198),i=n(7689),l=n(184);t.default=function(){var e=(0,i.s0)();return(0,l.jsxs)(a.W,{children:[(0,l.jsx)("h1",{className:"text",children:"Sign Up"}),(0,l.jsxs)("form",{className:"registrationForm",onSubmit:function(t){t.preventDefault();var n={name:t.target.elements.name.value,email:t.target.elements.email.value,password:t.target.elements.password.value};(0,s.y)(n).then((function(){r.Am.success("Created"),e("/pages/Login")})).catch((function(e){return r.Am.error(e.message)}))},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"exsampleInputName",children:"Name"}),(0,l.jsx)("input",{type:"text",name:"name",typeof:"name",className:"form-control",id:"exsampleInputName"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"exsampleInputEmail",children:"Email address"}),(0,l.jsx)("input",{type:"text",name:"email",typeof:"email",className:"form-control",id:"exsampleInputEmail","aria-describedby":"emailHelp"}),(0,l.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share you email with anyone else"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"exsampleInputPassword",children:"Password"}),(0,l.jsx)("input",{type:"text",name:"password",typeof:"password",className:"form-control",id:"exsampleInputPassword"})]}),(0,l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})}},979:function(e,t,n){n.d(t,{x:function(){return u},y:function(){return l}});var r=n(5861),s=n(4687),a=n.n(s),i=n(1243).Z.create({baseURL:"https://connections-api.herokuapp.com"}),l=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/users/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/users/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=932.c61f98ba.chunk.js.map