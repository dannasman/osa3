(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(2),i=function(e){var n=e.text,t=e.handleClick;return r.a.createElement("button",{onClick:t},n)},l=function(e){var n=e.persons,t=e.removePerson;return r.a.createElement("div",null,n.map((function(e){return[r.a.createElement("p",{key:e.id},e.name," ",e.number),r.a.createElement(i,{key:e.name,text:"delete",handleClick:function(){return t(e.id)}})]})))},m=function(e){var n=e.persons,t=e.newName,a=e.newNumber,c=e.handleNameChange,u=e.handleNumberChange,o=e.addPerson,i=e.updatePerson;return r.a.createElement("form",{onSubmit:n.map((function(e){return e.name})).indexOf(t)>-1?i:o},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:c})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=function(e){var n=e.newSearch,t=e.handleSearchChange;return r.a.createElement("div",null,"Filter shown with",r.a.createElement("input",{value:n,onChange:t}))},d=t(3),s=t.n(d),h="http://localhost:3001/api/persons",p=function(){return s.a.get(h).then((function(e){return e.data}))},b=function(e){return s.a.post(h,e).then((function(e){return e.data}))},v=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},w=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),d=i[0],s=i[1],h=Object(a.useState)(""),w=Object(o.a)(h,2),O=w[0],j=w[1],C=Object(a.useState)(""),S=Object(o.a)(C,2),N=S[0],k=S[1],y=Object(a.useState)(!1),P=Object(o.a)(y,2),T=P[0],x=P[1],D=Object(a.useState)(""),F=Object(o.a)(D,2),I=F[0],J=F[1],L=Object(a.useState)(""),A=Object(o.a)(L,2),B=A[0],U=A[1];Object(a.useEffect)((function(){console.log("effect"),p().then((function(e){c(e)}))}),[]);return r.a.createElement("div",null,T?r.a.createElement(g,{message:I,type:B}):null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{value:N,handleSearchChange:function(e){return k(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(m,{persons:t,newName:d,newNumber:O,handleNameChange:function(e){return s(e.target.value)},handleNumberChange:function(e){return j(e.target.value)},addPerson:function(e){e.preventDefault(),b({name:d,number:O}).then((function(e){c(t.concat(e)),J("Added ".concat(d)),U("success"),x(!0),setTimeout((function(){J(""),U(""),x(!1)}),3e3),s(""),j("")})).catch((function(e){J("Failed to add ".concat(d)),U("error"),x(!0),setTimeout((function(){J(""),U(""),x(!1)}),3e3),s(""),j("")}))},updatePerson:function(e){e.preventDefault();var n={name:d,number:O};window.confirm("".concat(t.find((function(e){return e.id===t.find((function(e){return e.name===d})).id})).name," is already in the phonebook, replace the old number with a new one?"))&&v(t.find((function(e){return e.name===d})).id,n).then((function(e){c(t.map((function(n){return n.name!==d?n:e}))),J("Updated ".concat(d)),U("success"),x(!0),setTimeout((function(){console.log("t\xe4\xe4ll\xe4, t\xe4n\xe4\xe4n"),J(""),U(""),x(!1)}),3e3)})).catch((function(e){J("Failed to update information of ".concat(d)),U("error"),x(!0),setTimeout((function(){J(""),U(""),x(!1)}),3e3)}))}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(l,{persons:t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})),removePerson:function(e){window.confirm("Delete ".concat(t.find((function(n){return n.id===e})).name,"?"))&&E(e).then((function(n){p().then((function(n){c(n),J("Deleted ".concat(t.find((function(n){return n.id===e})).name)),U("success"),x(!0),setTimeout((function(){J(""),U(""),x(!1)}),3e3)}))})).catch((function(n){J("Information of ".concat(t.find((function(n){return n.id===e})).name," has already been removed from server")),U("error"),x(!0),setTimeout((function(){J(""),U(""),x(!1)}),3e3),s(""),j("")}))}}))};t(36);u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.39865e45.chunk.js.map