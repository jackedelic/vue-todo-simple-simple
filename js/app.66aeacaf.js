(function(e){function t(t){for(var i,l,r=t[0],s=t[1],u=t[2],c=0,p=[];c<r.length;c++)l=r[c],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={app:0},o=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var m=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"0ce2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"small-container",attrs:{id:"app"}},[n("h1",[e._v("Employees")]),n("EmployeeForm",{on:{"add:employee":e.addEmployee}}),n("EmployeeTable",{attrs:{employees:e.employees},on:{"delete:employee":e.deleteEmployee}})],1)},o=[],l=(n("99af"),n("4de4"),n("2909")),r=n("5530"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-table"}},[0===e.employees.length?n("p",{staticClass:"empty-table"},[e._v("Employees Kosong")]):n("table",[e._m(0),n("tbody",e._l(e.employees,(function(t){return n("tr",{key:t.id},[e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"employee.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]):n("td",[e._v(e._s(t.name))]),e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"employee.email"}],attrs:{type:"email"},domProps:{value:t.email},on:{input:function(n){n.target.composing||e.$set(t,"email",n.target.value)}}})]):n("td",[e._v(e._s(t.email))]),e.editing===t.id?n("td",[n("button",{on:{click:function(n){return e.handleSave(t.id)}}},[e._v("Save")]),n("button",{staticClass:"muted-button",on:{click:function(n){return e.handleCancel(t.id)}}},[e._v("Cancel")])]):n("td",[n("button",{on:{click:function(n){return e.handleEdit(t)}}},[e._v("Edit")]),n("button",{on:{click:function(n){return e.handleDelete(t.id)}}},[e._v("Delete")])])])})),0)])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Employee name")]),n("th",[e._v("Employee email")])])])}],m=(n("d81d"),{name:"EmployeeTable",props:{employees:Array},data:function(){return{editing:null}},methods:{handleEdit:function(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},handleDelete:function(e){this.$emit("delete:employee",e)},handleSave:function(e){this.editing=null,this.$emit("save:employee",e)},handleCancel:function(e){var t=this;this.employees=this.employees.map((function(n){return n.id===e?Object.assign({},t.cachedEmployee):n})),this.editing=null}}}),c=m,p=(n("e6c4"),n("2877")),d=Object(p["a"])(c,s,u,!1,null,"91c228fc",null),f=d.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-form"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("label",{attrs:{for:"name"}},[e._v("Employee name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],ref:"first",class:{"has-error":e.submitting&&e.isNameInvalid},attrs:{type:"text",id:"name"},domProps:{value:e.employee.name},on:{focus:e.clearStatus,keypress:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),n("label",{attrs:{for:"email"}},[e._v("Employee email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.email,expression:"employee.email"}],class:{"has-error":e.submitting&&e.isEmailInvalid},attrs:{type:"email",id:"email"},domProps:{value:e.employee.email},on:{focus:e.clearStatus,keypress:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"email",t.target.value)}}}),e.error&&e.submitting?n("p",{staticClass:"error-message"},[e._v("❗Please fill out all required fields")]):e._e(),e.success?n("p",{staticClass:"success-message"},[e._v("✅ Employee successfully added")]):e._e(),n("button",[e._v("Add Employee")])])])},h=[],v=(n("b0c0"),{name:"EmployeeForm",data:function(){return{submitting:!1,error:!1,success:!1,employee:{name:"",email:""}}},methods:{handleSubmit:function(){if(this.clearStatus(),this.submitting=!0,this.isNameInvalid||this.isEmailInvalid)return this.error=!0,void(this.success=!1);this.$emit("add:employee",this.employee),this.employee={name:"",email:""},this.submitting=!1,this.success=!0,this.error=!1,this.$refs.first.focus()},clearStatus:function(){this.success=!1,this.error=!1,this.submitting=!1}},computed:{isNameInvalid:function(){return""===this.employee.name},isEmailInvalid:function(){return""===this.employee.email}}}),b=v,g=(n("5f96"),Object(p["a"])(b,y,h,!1,null,"71fb4384",null)),_=g.exports,E={name:"App",components:{EmployeeTable:f,EmployeeForm:_},data:function(){return{employees:[{id:1,name:"Richard Hendricks",email:"richard@piedpiper.com"},{id:2,name:"Bertram Gilfoyle",email:"gilfoyle@piedpiper.com"},{id:3,name:"Dinesh Chugtai",email:"dinesh@piedpiper.com"}]}},methods:{addEmployee:function(e){var t=this.employees.length>0?this.employees[this.employees.length-1].id:0,n=t+1,i=Object(r["a"])(Object(r["a"])({},e),{},{id:n});this.employees=[].concat(Object(l["a"])(this.employees),[i])},deleteEmployee:function(e){this.employees=this.employees.filter((function(t){return t.id!==e}))}}},O=E,j=(n("034f"),Object(p["a"])(O,a,o,!1,null,null,null)),S=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(S)}}).$mount("#app")},"5f96":function(e,t,n){"use strict";var i=n("0ce2"),a=n.n(i);a.a},8268:function(e,t,n){},"85ec":function(e,t,n){},e6c4:function(e,t,n){"use strict";var i=n("8268"),a=n.n(i);a.a}});
//# sourceMappingURL=app.66aeacaf.js.map