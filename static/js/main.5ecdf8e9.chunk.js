(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,function(e,t,a){e.exports={button:"Affairs_button__3ZFIY",buttonActive:"Affairs_buttonActive__29oiy",highPriority:"Affairs_highPriority__1FSey",lowPriority:"Affairs_lowPriority__TbjlI",middlePriority:"Affairs_middlePriority__1YUtj",affairWrapper:"Affairs_affairWrapper__WiWJv"}},,function(e,t,a){e.exports={message:"Message_message__3O4PN",avatar:"Message_avatar__bAXMd",content:"Message_content__NkxV6",angle:"Message_angle__3hZNy",text:"Message_text__20bwq",name:"Message_name__1l8-v",time:"Message_time__3-Nn4"}},function(e,t,a){e.exports={wrapper:"MyPages_wrapper__1kRME",item:"MyPages_item__3dPji",active:"MyPages_active__VF0pb"}},,function(e,t,a){e.exports={greeting:"Greeting_greeting__GM2Tf",error:"Greeting_error__3zHM1",input:"Greeting_input__2lJV5",errorInput:"Greeting_errorInput__1IBEk",button:"Greeting_button__39fm1",count:"Greeting_count__3pdBg"}},,,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3OsER",input:"SuperInputText_input__3ZEUb",errorInput:"SuperInputText_errorInput__-qcn2",error:"SuperInputText_error__1ktAx",notError:"SuperInputText_notError__3_Wnb"}},,,function(e,t,a){e.exports={clock:"Clock_clock__LQFoo",date:"Clock_date__29tqN",emptyDiv:"Clock_emptyDiv__25T1q"}},function(e,t,a){e.exports={blue:"HW4_blue__SpSWH",column:"HW4_column__2BF3S",testSpanError:"HW4_testSpanError__2O-0n"}},function(e,t,a){e.exports={default:"SuperButton_default__1sKO9",red:"SuperButton_red__2kuUs"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__29ijr",spanClassName:"SuperCheckbox_spanClassName__33FGP"}},function(e,t,a){e.exports={pencil:"HW6_pencil__FO9hI",span:"HW6_span__PAbPG"}},function(e,t,a){e.exports={select:"SuperSelect_select__1wAOj",option:"SuperSelect_option__2i-Dm"}},function(e,t,a){e.exports={radio:"SuperRadio_radio__RYPU-",label:"SuperRadio_label__3n3wk"}},,,,,function(e,t,a){e.exports={App:"App_App__3oy7J"}},function(e,t,a){e.exports={wrapper:"HW8_wrapper__1NGRy"}},,function(e,t,a){e.exports=a.p+"static/media/preloader.cac6f4f6.gif"},function(e,t,a){e.exports={wrapper:"HW10_wrapper__1CS3u"}},function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(37),a(27)),i=a.n(o),u=a(8),s=a(1),m=a(6),p=a.n(m);var d=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{src:e.avatar,className:p.a.avatar,alt:"avatar"}),r.a.createElement("div",{className:p.a.angle}),r.a.createElement("div",{className:p.a.content},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.message}," ",e.message),r.a.createElement("div",{className:p.a.time},e.time)))},E="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Vitalii",_="I want to be the master",v="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homework 1:",r.a.createElement(d,{avatar:E,name:f,message:_,time:v}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=a(2),b=a(4),C=a.n(b);var k=function(e){var t="high"===e.priority?C.a.highPriority:"middle"===e.priority?C.a.middlePriority:"low"===e.priority?C.a.lowPriority:void 0;return r.a.createElement("div",{className:C.a.affairWrapper},r.a.createElement("div",null,r.a.createElement("button",{className:C.a.button,onClick:function(){e.deleteAffairCallback(e._id)}},"X")),r.a.createElement("div",null,e.affair),r.a.createElement("div",{className:t},e.priority))};var N=function(e){var t=e.data.map((function(t){return r.a.createElement(k,{key:t._id,affair:t.name,deleteAffairCallback:e.deleteAffairCallback,_id:t._id,priority:t.priority})})),a=function(t){e.setFilter(t)};return r.a.createElement("div",{className:C.a.someClass},t,r.a.createElement("button",{className:"all"===e.filter?C.a.buttonActive:C.a.button,onClick:function(){return a("all")}},"All"),r.a.createElement("button",{className:"high"===e.filter?C.a.buttonActive:C.a.button,onClick:function(){return a("high")}},"High"),r.a.createElement("button",{className:"middle"===e.filter?C.a.buttonActive:C.a.button,onClick:function(){return a("middle")}},"Middle"),r.a.createElement("button",{className:"low"===e.filter?C.a.buttonActive:C.a.button,onClick:function(){return a("low")}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(O),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(h.a)(c,2),i=o[0],u=o[1],s=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(a,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homework 2:",r.a.createElement(N,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=a(15),w=a(44),S=a(9),x=a.n(S),A=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?x.a.errorInput:x.a.input;return r.a.createElement("div",{className:x.a.greeting},r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("div",{className:x.a.error},l)),r.a.createElement("button",{className:x.a.button,onClick:n},"add"),r.a.createElement("div",{className:x.a.count},c))},I=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),s=Object(h.a)(u,2),m=s[0],p=s[1],d=t.length;return r.a.createElement(A,{name:o,setNameCallback:function(e){i(e.currentTarget.value),p("")},addUser:function(){""!==o?(alert("Hello ".concat(o.trim()," !")),a(o),i("")):p("error")},error:m,totalUsers:d})};var P=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(I,{users:a,addUserCallback:function(e){var t={_id:Object(w.a)(),name:e};l([t].concat(Object(j.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=a(5),M=a(13),F=a.n(M),H=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],W=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),i=Object(T.a)(e,H),u="".concat(F.a.error," ").concat(o||""),s="".concat(F.a.input," ").concat(c?F.a.errorInput:F.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:s},i)),c&&r.a.createElement("span",{className:u},c))},G=a(17),D=a.n(G),J=a(18),R=a.n(J),U=["red","className"],B=function(e){var t=e.red,a=e.className,n=Object(T.a)(e,U),l="".concat(t?R.a.red:R.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},L=a(19),K=a.n(L),q=["type","onChange","onChangeChecked","className","spanClassName","children"],Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,q),o="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var V=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(a),l(""))},i=Object(n.useState)(!1),u=Object(h.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(W,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(W,{className:D.a.blue}),r.a.createElement(B,null,"default"),r.a.createElement(B,{red:!0,onClick:o},"delete "),r.a.createElement(B,{disabled:!0},"disabled"),r.a.createElement(Y,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(Y,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};function Z(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(y,null),r.a.createElement(P,null),r.a.createElement(V,null))}function X(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))}var z=a(20),Q=a.n(z),$=["autoFocus","onBlur","onEnter","spanProps","onClick"],ee=["children","onDoubleClick","className"],te=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=e.onClick,o=Object(T.a)(e,$),i=Object(n.useState)(!1),u=Object(h.a)(i,2),s=u[0],m=u[1],p=l||{},d=p.children,E=p.onDoubleClick,f=p.className,_=Object(T.a)(p,ee),v="".concat(Q.a.span," ").concat(f||"");return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(W,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()}},o)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:v},_),d||o.value),r.a.createElement("img",{onClick:function(){m(!1),c&&c()},className:Q.a.pencil,src:"https://cdn-icons-png.flaticon.com/512/1250/1250925.png",alt:"pencil"}))};function ae(e,t){var a=JSON.stringify(t);return localStorage.setItem(e,a),t}function ne(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ae("test",{x:"A",y:1});ne("test",{x:"",y:0});var re=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(te,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(B,{onClick:function(){l(ae("editable-span-value",a))}},"save"),r.a.createElement(B,{onClick:function(){l(ne("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},le=a(21),ce=a.n(le),oe=["value","options","onChange","onChangeOption","className"],ie=function(e){e.value;var t=e.options,a=e.onChange,n=e.onChangeOption,l=e.className,c=Object(T.a)(e,oe),o=t?t.map((function(e,t){return r.a.createElement("option",{key:e+"-"+t,className:ce.a.option,value:e},e)})):[],i=ce.a.select+(l?" "+l:"");return r.a.createElement("select",Object.assign({className:i,onChange:function(e){n&&n(e.currentTarget.value),a&&a(e)}},c),o)},ue=a(22),se=a.n(ue),me=["type","name","options","value","onChange","onChangeOption"],pe=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(T.a)(e,me),i=function(e){c&&c(e.currentTarget.value),l&&l(e)},u=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a,className:se.a.label},r.a.createElement("input",Object.assign({className:se.a.radio,type:"radio",onChange:i,checked:e===n,value:e,name:t},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},de=["x","y","z"];var Ee=function(){var e=Object(n.useState)(de[1]),t=Object(h.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ie,{options:de,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(pe,{name:"radio",options:de,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},fe=function(e,t){switch(t.type){case"SORT":var a=Object(j.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?a:a.reverse();case"CHECK":return e.filter((function(e){return e.age>t.payload}));default:return e}},_e=a(28),ve=a.n(_e),ge=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(n.useState)(ge),t=Object(h.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id,className:ve.a.wrapper},e.name," ",r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement(B,{onClick:function(){return l(fe(ge,{type:"SORT",payload:"up"}))}},"sort up"),r.a.createElement(B,{onClick:function(){return l(fe(ge,{type:"SORT",payload:"down"}))}},"sort down"),r.a.createElement(B,{onClick:function(){return l(fe(ge,{type:"CHECK",payload:18}))}},"check 18"),r.a.createElement("hr",null),r.a.createElement("hr",null))},be=a(16),Ce=a.n(be);var ke=function(){var e=Object(n.useState)(0),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(new Date),o=Object(h.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)(!1),m=Object(h.a)(s,2),p=m[0],d=m[1],E=function(){window.clearInterval(a)},f=function(e){return e>=0&&e<=9?"0"+e:e},_="".concat(f(i.getHours()),":").concat(f(i.getMinutes()),":").concat(f(i.getSeconds())),v="".concat(f(i.getDate()),".").concat(f(i.getMonth()+1),".").concat(i.getFullYear());return r.a.createElement("div",null,r.a.createElement("div",{className:Ce.a.clock,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},_),p?r.a.createElement("div",{className:Ce.a.date},v):r.a.createElement("div",{className:Ce.a.emptyDiv}),r.a.createElement(B,{onClick:function(){E();var e=window.setInterval((function(){u(new Date)}),1e3);l(e)}},"start"),r.a.createElement(B,{onClick:E},"stop"))};var Ne=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ke,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},Oe=a(25),ye={isLoading:!1},je=function(e){return{type:"CHANGE LOADING",isLoading:e}},we=a(12),Se=a(30),xe=a.n(Se),Ae=a(31),Ie=a.n(Ae);var Pe=function(){var e=Object(we.c)((function(e){return e.loading.isLoading})),t=Object(we.b)();return r.a.createElement("div",{className:Ie.a.wrapper},r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("img",{src:xe.a,alt:"preloader"}):r.a.createElement("div",null,r.a.createElement(B,{onClick:function(){t(je(!0)),console.log(e),setTimeout((function(){return t(je(!1))}),1e3),console.log(e)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Te=a(24),Me=Object(Te.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE LOADING":return Object(Oe.a)(Object(Oe.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),Fe=Object(Te.b)(Me),He=Fe;function We(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(Ee,null),r.a.createElement(he,null),r.a.createElement(Ne,null),r.a.createElement(we.a,{store:He},r.a.createElement(Pe,null)))}function Ge(){return r.a.createElement("div",null,"JUNIOR+")}window.store=Fe;var De="/",Je="/junior",Re="/junior+",Ue="*";function Be(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{path:De,element:r.a.createElement(Z,null)}),r.a.createElement(s.a,{path:Je,element:r.a.createElement(We,null)}),r.a.createElement(s.a,{path:Re,element:r.a.createElement(Ge,null)}),r.a.createElement(s.a,{path:Ue,element:r.a.createElement(X,null)}))}var Le=a(7),Ke=a.n(Le);var qe=function(){return r.a.createElement("div",{className:Ke.a.wrapper},r.a.createElement(u.b,{to:De,className:function(e){return e.isActive?Ke.a.active:Ke.a.item}},"Pre-Junior"),r.a.createElement("br",null),r.a.createElement(u.b,{to:Je,className:function(e){return e.isActive?Ke.a.active:Ke.a.item}},"Junior"),r.a.createElement("br",null),r.a.createElement(u.b,{to:Re,className:function(e){return e.isActive?Ke.a.active:Ke.a.item}},"Junior+"),r.a.createElement("br",null))};function Ye(){return r.a.createElement(u.a,null,r.a.createElement(qe,null),r.a.createElement(Be,null))}function Ve(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ye,null))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ve,null)),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.5ecdf8e9.chunk.js.map