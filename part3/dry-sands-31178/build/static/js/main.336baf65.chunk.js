(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(13),c=t.n(r),o=(t(19),t(2)),u=t(3),i=t.n(u),m="/api/persons",f=function(){return i.a.get(m).then((function(e){return e.data}))},s=function(e){return i.a.post(m,e).then((function(e){return e.data}))},d=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return console.log("remove",e),i.a.delete("".concat(m,"/").concat(e))},b=function(e){var n=e.classMessage;if(null===n)return null;var t=n.split(":"),a=Object(o.a)(t,2),r=a[0],c=a[1];return console.log("Notification",r,c),l.a.createElement("div",{className:r},c)},E=function(e){var n=e.phoneNumber,t=e.remove;return l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("button",{onClick:function(){return t(n.id)}}," x ")," "),l.a.createElement("td",null,n.name),l.a.createElement("td",null,n.number))},v=function(e){var n=e.people,t=e.remove,a=e.filter,r=new RegExp(a,"i");return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Numbers"),l.a.createElement("table",{className:"center"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null," [x] "),l.a.createElement("th",null," Name "),l.a.createElement("th",null," Number ")),n.filter((function(e){return e.name.search(r)>=0})).map((function(e){return l.a.createElement(E,{key:e.name,phoneNumber:e,remove:t})})))))},p=function(e){var n=e.label,t=e.value,a=e.handle;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"name"},n),l.a.createElement("input",{name:n,value:t,onChange:a}))},g=function(e){var n=e.search,t=e.clear;return l.a.createElement(l.a.Fragment,null,l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Search"),l.a.createElement("div",null,l.a.createElement(p,{label:n.label,value:n.value,handle:n.handle}),l.a.createElement("button",{onClick:t}," x "))))},j=function(e){var n=e.submit,t=e.fields;return l.a.createElement("form",{onSubmit:n},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"New Entry"),l.a.createElement("div",null,l.a.createElement(p,{label:t[0].label,value:t[0].value,handle:t[0].handle})),l.a.createElement("div",null,l.a.createElement(p,{label:t[1].label,value:t[1].value,handle:t[1].handle})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"add"))))},O=(t(37),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),u=Object(o.a)(c,2),i=u[0],m=u[1],E=Object(a.useState)(""),p=Object(o.a)(E,2),O=p[0],N=p[1],w=Object(a.useState)(""),k=Object(o.a)(w,2),y=k[0],S=k[1],x=Object(a.useState)(null),F=Object(o.a)(x,2),C=F[0],D=F[1],A=function(e){console.log("setup",e),D(e),setTimeout((function(){D(null)}),2500)};Object(a.useEffect)((function(){console.log("effect.."),f().then((function(e){console.log("promise fulfilled"),r(e)})).catch((function(e){console.log(e)}))}),[]);return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},"Phonebook"),l.a.createElement(b,{classMessage:C}),l.a.createElement(g,{search:{label:"search",value:i,handle:function(e){return m(e.target.value)}},clear:function(){return m("")}}),l.a.createElement(j,{submit:function(e){e.preventDefault();var n={name:O,number:y},a=t.find((function(e){return e.name===O}));a&&window.confirm("".concat(O," has already been added to phonebook\n        Did you want to update the number?"))?function(e,n){h(e),d(e,n).then((function(n){var a=t.map((function(t){return t.id===e?n:t}));r(a),A("info:".concat(O," has been updated"))})).catch((function(e){console.log("deleted record:",e),A("error:this record has been deleted remotely"),f().then((function(e){console.log("refresh"),r(e)})).catch((function(e){console.log(e)}))}))}(a.id,n):s(n).then((function(e){r(t.concat(e)),A("info:".concat(e.name," has been added"))})).catch((function(e){return console.log(e)})),N(""),S("")},fields:[{label:"name",value:O,handle:function(e){return N(e.target.value)}},{label:"number",value:y,handle:function(e){return S(e.target.value)}}]}),l.a.createElement(v,{people:t,remove:function(e){var n=t.filter((function(n){return n.id===e}))[0];window.confirm("Do you want to remove '".concat(n.name,"' ?"))&&(console.log("The user has requested the removal of ".concat(e)),h(e),r(t.filter((function(n){return n.id!==e}))),A("info:".concat(n.name," has been removed")))},filter:i}))});c.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.336baf65.chunk.js.map