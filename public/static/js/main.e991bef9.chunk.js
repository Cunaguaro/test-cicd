(this["webpackJsonpmetagrupo-tools"]=this["webpackJsonpmetagrupo-tools"]||[]).push([[0],{16:function(e,a,t){e.exports=t(40)},21:function(e,a,t){},22:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),o=t.n(r),c=(t(21),t(22),t(2)),m=t(13),s=t(15),i=t(14),u=t.n(i),p=function(e){var a=Object(n.useState)({email:"",subject:"",message:"",lang:"en"}),t=Object(s.a)(a,2),r=t[0],o=t[1],i=function(e){o(Object(m.a)({},r,Object(c.a)({},e.currentTarget.name,e.currentTarget.value)))};return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.a.post("generate-pdf",JSON.stringify({userData:r}),{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:i,value:r.email}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"subject"},"Subject"),l.a.createElement("input",{type:"text",className:"form-control",id:"subject",name:"subject",placeholder:"Subject",onChange:i,value:r.subject})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("input",{type:"text",className:"form-control",id:"message",name:"message",placeholder:"Password",onChange:i,value:r.message})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))};var d=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e991bef9.chunk.js.map