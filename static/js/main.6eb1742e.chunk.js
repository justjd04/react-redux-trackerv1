(this["webpackJsonpreact-redux-trackerv1"]=this["webpackJsonpreact-redux-trackerv1"]||[]).push([[0],{47:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(17),s=c.n(r),i=c(1),l=function(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark justify-content-between",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"col-8 ",children:Object(i.jsx)("h1",{className:"text-info",children:" Recruitment Tracker"})})})})},o=(c(47),function(){return Object(i.jsxs)("div",{className:"sk-circle",children:[Object(i.jsx)("div",{className:"sk-circle1 sk-child"}),Object(i.jsx)("div",{className:"sk-circle2 sk-child"}),Object(i.jsx)("div",{className:"sk-circle3 sk-child"}),Object(i.jsx)("div",{className:"sk-circle4 sk-child"}),Object(i.jsx)("div",{className:"sk-circle5 sk-child"}),Object(i.jsx)("div",{className:"sk-circle6 sk-child"}),Object(i.jsx)("div",{className:"sk-circle7 sk-child"}),Object(i.jsx)("div",{className:"sk-circle8 sk-child"}),Object(i.jsx)("div",{className:"sk-circle9 sk-child"}),Object(i.jsx)("div",{className:"sk-circle10 sk-child"}),Object(i.jsx)("div",{className:"sk-circle11 sk-child"}),Object(i.jsx)("div",{className:"sk-circle12 sk-child"})]})}),d=c(11),u=c(14),j=c.n(u),b=c(5),O="VALIDATE_FORM",h="VALIDATE_FORM_SUCCESS",f="VALIDATE_FORM_ERROR",m="ADD_PRODUCT",p="ADD_PRODUCT_SUCCESS",x="ADD_PRODUCT_ERROR",v="SAVE_PRODUCT",N="SAVE_PRODUCT_SUCCESS",y="SAVE_PRODUCT_ERROR",g="DELETE_PRODUCT",E="DELETE_PRODUCT_SUCCESS",_="DELETE_PRODUCT_ERROR",D="EDIT_ACTION_PRODUCT",R="EDIT_ACTION_PRODUCT_SUCCESS",k="EDIT_ACTION_PRODUCT_ERROR",C="EDIT_PRODUCT",T="EDIT_PRODUCT_SUCCESS",w="EDIT_PRODUCT_ERROR",S=c(38),U=c.n(S).a.create({baseURL:"http://localhost:5000/"});var P=function(){return{type:m}},A=function(e){return{type:p,payload:e}},I=function(e){return{type:x}};var L=function(){return{type:v}},V=function(e){return{type:N,payload:e}},F=function(){return{type:y}};var B=function(){return{type:g}},M=function(e){return{type:E,payload:e}},X=function(){return{type:_}};var J=function(e){return{type:D}},Y=function(e){return{type:R,payload:e}},q=function(){return{type:k}};var z=function(){return{type:C}},G=function(e){return{type:T,payload:e}},H=function(){return{type:w}},K=function(e){var t=e.candidate,c=Object(b.b)(),n=function(e){j.a.fire({title:"Delete?",text:"The deleted item cannot be recovered!",type:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#271ea8",confirmButtonText:"Yes, Delete"}).then((function(t){t.value&&(j.a.fire("Deleted","The item was successfully deleted.","success"),console.log(e),c(function(e){return function(t){t(B()),U.delete("/books/".concat(e)).then((function(c){t(M(e))})).catch((function(e){t(X())}))}}(e)))}))};return Object(i.jsxs)("tr",{className:"pl-2",children:[Object(i.jsx)("td",{children:t.name}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"font-weight position",children:t.position})}),Object(i.jsxs)("td",{className:"actions ",children:[Object(i.jsx)(d.b,{to:"/candidates/edit/".concat(t.id),className:"btn btn-outline-info px-4 mx-1",children:"Edit"}),Object(i.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return n(t.id)},children:"Delete"})]})]})},Q=function(e){var t=e.description,c=(e.type,e.link),n=e.className;return Object(i.jsx)(d.b,{to:c,className:n,children:t})},W=function(){var e=Object(b.b)();Object(n.useEffect)((function(){e((function(e){e(L()),U.get("/books").then((function(t){e(V(t.data))})).catch((function(t){e(F())}))}))}),[]);var t=Object(b.c)((function(e){return e.candidates.loading})),c=Object(b.c)((function(e){return e.candidates.error})),r=Object(b.c)((function(e){return e.candidates.candidates}));return Object(i.jsxs)(a.a.Fragment,{children:[c?Object(i.jsx)("div",{className:"font-wight-bold alert alert-danger text-center mt-5",children:"Error..."}):null,t?Object(i.jsx)(o,{}):null,Object(i.jsx)("div",{className:"d-md-flex justify-content-md-end m-1",children:Object(i.jsx)(Q,{description:"Add New",link:"/candidates/new",className:"btn btn-primary new-post d-block "})}),Object(i.jsxs)("table",{className:"table table-striped .table-hover shadow text-center",children:[Object(i.jsx)("thead",{className:"bg-info table-dark",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"Name"}),Object(i.jsx)("th",{scope:"col",children:"Position"}),Object(i.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(i.jsx)("tbody",{children:r.map((function(e){return Object(i.jsx)(K,{candidate:e},e.id)}))})]})]})},Z=c(25),$=c(39);function ee(){return function(e){e(te())}}var te=function(){return{type:O}},ce=function(){return{type:h}},ne=function(){return{type:f}},ae=function(e){var t=e.history,c=Object(n.useState)(""),a=Object(Z.a)(c,2),r=a[0],s=a[1],l=Object(n.useState)(""),o=Object(Z.a)(l,2),u=o[0],j=o[1],O=Object(b.b)(),h=function(e){return O(function(e){return function(t){t(P()),U.post("/books",e).then((function(c){console.log(c),t(A(e))})).catch((function(e){console.log(e),t(I())}))}}(e))},f=Object(b.c)((function(e){return e.error.error}));return Object(i.jsx)("div",{className:"row justify-content-center mt-5",children:Object(i.jsx)("div",{className:"col-md-8",children:Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h2",{className:"text-center mb-4 font-weight-bold ",children:"Candidate Information"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(ee()),""!==r.trim()&&""!==u.trim()?(O(ce()),h({name:r,position:u,id:Object($.v4)()}),t.push("/")):O(ne())},children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Name"}),Object(i.jsx)("input",{type:"text",className:"form-control  ",placeholder:"Name",valur:r,onChange:function(e){return s(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Position"}),Object(i.jsx)("input",{type:"text",className:"form-control ",placeholder:"Position",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(i.jsx)(d.b,{to:"/",children:Object(i.jsx)("button",{type:"submit",className:"btn btn-warning rounded-pill font-weight-bold text-uppercase m-2",style:{width:"100px"},children:"Cancel"})}),Object(i.jsx)("button",{type:"submit",className:"btn btn-info rounded-pill font-weight-bold text-uppercase m-2",style:{width:"100px"},children:"Save"})]}),f?Object(i.jsx)("div",{className:"font-weight-bold alert alert-danger text-center mt-4",children:"Missing Field"}):null]})})})})},re=function(e){var t=e.history,c=e.match,a=Object(n.useRef)(""),r=Object(n.useRef)(""),s=Object(b.b)(),l=function(e){return s(function(e){return function(t){t(z()),U.put("/books/".concat(e.id),e).then((function(e){t(G(e.data)),j.a.fire("Saved","Successfully Updated","success")})).catch((function(e){t(H())}))}}(e))},o=c.params.id;Object(n.useEffect)((function(){s(function(e){return function(t){t(J()),U.get("/books/".concat(e)).then((function(e){console.log(e.data),t(Y(e.data))})).catch((function(e){console.log(e),t(q())}))}}(o))}),[s,o]);var u=Object(b.c)((function(e){return e.candidates.candidate})),O=Object(b.c)((function(e){return e.candidates.error}));if(!u)return"Loading...";return Object(i.jsx)(n.Fragment,{children:O?Object(i.jsx)("div",{className:"font-weight-bold alert alert-danger text-center mt-4",children:"Error"}):Object(i.jsx)("div",{className:"row justify-content-center mt-5",children:Object(i.jsx)("dic",{className:"col-md-8",children:Object(i.jsxs)("div",{className:"card px-4",children:[Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("h2",{className:"text-center",children:"Candidate Information"})}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(ee()),""!==a.current.value.trim()&&""!==r.current.value.trim()?(s(ce()),l({id:o,name:a.current.value,position:r.current.value}),t.push("/")):s(ne())},children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Name"}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",defaultValue:u.name,ref:a})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Position"}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Position",defaultValue:u.position,ref:r})]}),Object(i.jsx)(d.b,{to:"/",children:Object(i.jsx)("button",{type:"submit",className:"btn btn-warning rounded-pill font-weight-bold text-uppercase m-2",style:{width:"100px"},children:"Cancel"})}),Object(i.jsx)("button",{type:"submit",className:"btn btn-info rounded-pill font-weight text-uppercase m-2",style:{width:"100px"},children:"Save"})]})]})})})})},se=c(4),ie=c(13),le=c(40),oe=c(41),de=c(2),ue={candidates:[],error:null,loading:!1,candidate:{}};var je={error:null};var be=Object(ie.b)({candidates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(de.a)(Object(de.a)({},e),{},{error:null});case p:return Object(de.a)(Object(de.a)({},e),{},{error:null,candidates:[].concat(Object(oe.a)(e.candidates),[t.payload])});case x:return Object(de.a)(Object(de.a)({},e),{},{error:!0});case v:return Object(de.a)(Object(de.a)({},e),{},{loading:!0,candidate:{}});case N:return Object(de.a)(Object(de.a)({},e),{},{candidates:t.payload,loading:!1,error:!1,candidate:{}});case y:return Object(de.a)(Object(de.a)({},e),{},{candidates:[],loading:!1,error:!0,candidate:{}});case g:return Object(de.a)(Object(de.a)({},e),{},{error:null});case E:return Object(de.a)(Object(de.a)({},e),{},{error:null,candidates:e.candidates.filter((function(e){return e.id!==t.payload}))});case _:return Object(de.a)(Object(de.a)({},e),{},{error:!0});case D:return Object(de.a)(Object(de.a)({},e),{},{error:null});case R:return Object(de.a)(Object(de.a)({},e),{},{error:null,candidate:t.payload});case k:return Object(de.a)(Object(de.a)({},e),{},{error:!0});case C:return Object(de.a)(Object(de.a)({},e),{},{error:null});case T:return Object(de.a)(Object(de.a)({},e),{},{error:null,candidates:e.candidates.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});case w:return Object(de.a)(Object(de.a)({},e),{},{error:!0});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case h:return Object(de.a)(Object(de.a)({},e),{},{error:null});case f:return Object(de.a)(Object(de.a)({},e),{},{error:!0});default:return e}}}),Oe=[le.a],he=Object(ie.d)(be,{},Object(ie.c)(ie.a.apply(void 0,Oe),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var fe=function(){return Object(i.jsxs)(d.a,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(b.a,{store:he,children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(se.c,{children:[Object(i.jsx)(se.a,{exact:!0,path:"/",component:W}),Object(i.jsx)(se.a,{exact:!0,path:"/candidates/new",component:ae}),Object(i.jsx)(se.a,{exact:!0,path:"/candidates/edit/:id",component:re})]})})})]})};c(83);s.a.render(Object(i.jsx)(fe,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.6eb1742e.chunk.js.map