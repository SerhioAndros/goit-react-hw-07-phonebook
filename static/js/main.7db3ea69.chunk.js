(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return d})),n.d(e,"j",(function(){return l}));var c=n(2),r=Object(c.b)("contacts/fetchContactRequest"),a=Object(c.b)("contacts/fetchContactSuccess"),u=Object(c.b)("contacts/fetchContactError"),o=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),d=Object(c.b)("contacts/deleteContactError"),l=Object(c.b)("contacts/filterContacts")},21:function(t,e,n){t.exports={container:"UserMenu_container__d0EdU",avatar:"UserMenu_avatar__vXnvH",name:"UserMenu_name__2mtnI",userName:"UserMenu_userName__INTpr",logoutBtn:"UserMenu_logoutBtn__2Zb8a"}},24:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return O}));var c=n(16),r=n.n(c),a=n(23),u=n(18),o=n.n(u),i=n(4);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){o.a.defaults.headers.common.Authorization=""},j=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.k)()),e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:c=e.sent,s(c.data.token),n(Object(i.l)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.j)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.e)()),e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:c=e.sent,s(c.data.token),n(Object(i.f)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.d)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),a=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return s(a),e(Object(i.b)()),t.prev=5,t.next=8,o.a.get("/users/current");case 8:u=t.sent,console.log(u.data),e(Object(i.c)(u.data)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e(Object(i.a)(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()},O=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.h)()),t.prev=1,t.next=4,o.a.post("/users/logout");case 4:b(),e(Object(i.i)()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(i.g)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return f}));var c=n(2),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),d=Object(c.b)("auth/logoutError"),l=Object(c.b)("auth/getCurrUserRequest"),O=Object(c.b)("auth/getCurrUserSuccess"),f=Object(c.b)("auth/getCurrUserError")},46:function(t,e,n){t.exports={header:"AppBar_header__7_Kb1"}},47:function(t,e,n){t.exports={loader:"App_loader__2tFGB"}},59:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var c,r,a,u,o,i,s=n(0),b=n.n(s),j=n(25),d=n.n(j),l=n(8),O=n(15),f=n(2),h=n(17),p=n(45),x=n.n(p),v=n(3),g=n(49),m=n(7),k=n(10),y=Object(f.c)([],(c={},Object(v.a)(c,k.i,(function(t,e){return e.payload})),Object(v.a)(c,k.c,(function(t,e){var n=e.payload;return[].concat(Object(g.a)(t),[n])})),Object(v.a)(c,k.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),_=Object(f.c)("",Object(v.a)({},k.j,(function(t,e){return e.payload}))),A=Object(f.c)(!1,(r={},Object(v.a)(r,k.h,(function(){return!0})),Object(v.a)(r,k.i,(function(){return!1})),Object(v.a)(r,k.g,(function(){return!1})),Object(v.a)(r,k.b,(function(){return!0})),Object(v.a)(r,k.c,(function(){return!1})),Object(v.a)(r,k.a,(function(){return!1})),Object(v.a)(r,k.e,(function(){return!0})),Object(v.a)(r,k.f,(function(){return!1})),Object(v.a)(r,k.d,(function(){return!1})),r)),C=Object(m.b)({contactItems:y,contactFilter:_,loading:A}),w=n(4),S={name:null,email:null},N=Object(f.c)(S,(a={},Object(v.a)(a,w.l,(function(t,e){return e.payload.user})),Object(v.a)(a,w.f,(function(t,e){return e.payload.user})),Object(v.a)(a,w.c,(function(t,e){return e.payload})),Object(v.a)(a,w.i,(function(){return S})),a)),R=Object(f.c)(null,(u={},Object(v.a)(u,w.l,(function(t,e){return e.payload.token})),Object(v.a)(u,w.f,(function(t,e){return e.payload.token})),Object(v.a)(u,w.i,(function(){return null})),u)),U=function(t,e){return e.payload},z=Object(f.c)(null,(o={},Object(v.a)(o,w.j,U),Object(v.a)(o,w.d,U),Object(v.a)(o,w.a,U),Object(v.a)(o,w.g,U),o)),B=Object(f.c)(!1,(i={},Object(v.a)(i,w.l,(function(){return!0})),Object(v.a)(i,w.f,(function(){return!0})),Object(v.a)(i,w.c,(function(){return!0})),Object(v.a)(i,w.j,(function(){return!1})),Object(v.a)(i,w.d,(function(){return!1})),Object(v.a)(i,w.a,(function(){return!1})),Object(v.a)(i,w.i,(function(){return!1})),i)),E=Object(m.b)({user:N,token:R,error:z,isAuthed:B}),L={key:"authToken",storage:x.a,whitelist:["token"]},T=Object(f.a)({reducer:{contacts:C,auth:Object(h.g)(L,E)},middleware:Object(f.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})}),q={store:T,persistor:Object(h.h)(T)},M=(n(59),n(33)),I=n(34),D=n(36),F=n(35),J=n(6),W=n(46),G=n.n(W),H=function(t){return t.auth.isAuthed},K=function(t){return t.auth.user.name},P=n(1),X={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,fontSize:21,color:"#2A363B"},activeLink:{color:"rgb(89, 89, 199)"}},Z=Object(l.b)((function(t){return{isAuthenticated:H(t)}}))((function(t){var e=t.isAuthenticated;return Object(P.jsxs)("nav",{children:[Object(P.jsx)(O.b,{exact:!0,to:"/",style:X.link,activeStyle:X.activeLink,children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e!"}),e&&Object(P.jsx)(O.b,{exact:!0,to:"/contacts",style:X.link,activeStyle:X.activeLink,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438\u043a\u0438"})]})})),Q=n(24),V=n(21),Y=n.n(V),$=Object(l.b)((function(t){return{name:K(t),avatar:"https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png"}}),(function(t){return{onLogout:function(e){return t(Object(Q.c)(e))}}}))((function(t){var e=t.avatar,n=t.name,c=t.onLogout;return Object(P.jsxs)("div",{className:Y.a.container,children:[Object(P.jsx)("img",{src:e,alt:"",width:"45",className:Y.a.avatar}),Object(P.jsxs)("span",{className:Y.a.name,children:["\u0412\u0435\u0447\u0435\u0440 \u0432 \u0445\u0430\u0442\u0443, ",Object(P.jsx)("span",{className:Y.a.userName,children:n})]}),Object(P.jsx)("button",{type:"button",onClick:c,className:Y.a.logoutBtn,children:"\u0421\u0432\u0430\u043b\u0438\u0432\u0430\u0435\u043c..."})]})})),tt={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,fontSize:21,color:"#2A363B"},activeLink:{color:"rgb(89, 89, 199)"}},et=function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)(O.b,{to:"/register",exact:!0,style:tt.link,activeStyle:tt.activeLink,children:"\u0417\u0430\u0440\u0435\u0433\u0430\u0442\u044c\u0441\u044f"}),Object(P.jsx)(O.b,{to:"/login",exact:!0,style:tt.link,activeStyle:tt.activeLink,children:"\u0417\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c\u0441\u044f"})]})},nt=Object(l.b)((function(t){return{isAuthenticated:H(t)}}),null)((function(t){var e=t.isAuthenticated;return Object(P.jsxs)("header",{className:G.a.header,children:[Object(P.jsx)(Z,{}),e?Object(P.jsx)($,{}):Object(P.jsx)(et,{})]})})),ct=n(19),rt=n(28),at=["component","isAuthenticated","redirectTo","restricted"],ut=Object(l.b)((function(t){return{isAuthenticated:H(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=t.restricted,a=Object(rt.a)(t,at);return Object(P.jsx)(J.b,Object(ct.a)(Object(ct.a)({},a),{},{render:function(t){return n&&r?Object(P.jsx)(J.a,{to:c}):Object(P.jsx)(e,Object(ct.a)({},t))}}))})),ot=["component","isAuthenticated","redirectTo"],it=Object(l.b)((function(t){return{isAuthenticated:H(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(rt.a)(t,ot);return Object(P.jsx)(J.b,Object(ct.a)(Object(ct.a)({},r),{},{render:function(t){return n?Object(P.jsx)(e,Object(ct.a)({},t)):Object(P.jsx)(J.a,{to:c})}}))})),st=n(47),bt=n.n(st),jt=Object(s.lazy)((function(){return n.e(5).then(n.bind(null,111))})),dt=Object(s.lazy)((function(){return n.e(7).then(n.bind(null,112))})),lt=Object(s.lazy)((function(){return n.e(6).then(n.bind(null,113))})),Ot=Object(s.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,114))})),ft=function(t){Object(D.a)(n,t);var e=Object(F.a)(n);function n(){return Object(M.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.onRefresh()}},{key:"render",value:function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)(nt,{}),Object(P.jsx)(s.Suspense,{fallback:Object(P.jsx)("p",{className:bt.a.loader,children:"\u0411\u0430\u0442\u044f, \u044f \u0441\u0442\u0430\u0440\u0430\u044e\u0441\u044c!"}),children:Object(P.jsxs)(J.d,{children:[Object(P.jsx)(ut,{exact:!0,path:"/",component:jt}),Object(P.jsx)(ut,{path:"/register",redirectTo:"/contacts",restricted:!0,component:dt}),Object(P.jsx)(ut,{path:"/login",redirectTo:"/contacts",restricted:!0,component:lt}),Object(P.jsx)(it,{path:"/contacts",redirectTo:"/login",component:Ot})]})})]})}}]),n}(s.Component),ht=Object(l.b)(null,(function(t){return{onRefresh:function(){return t(Object(Q.a)())}}}))(ft),pt=n(48);d.a.render(Object(P.jsx)(b.a.StrictMode,{children:Object(P.jsx)(l.a,{store:q.store,children:Object(P.jsx)(pt.a,{loading:null,persistor:q.persistor,children:Object(P.jsx)(O.a,{children:Object(P.jsx)(ht,{})})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.7db3ea69.chunk.js.map