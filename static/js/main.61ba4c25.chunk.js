(this["webpackJsonpmanagement-students"]=this["webpackJsonpmanagement-students"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(8),a=n.n(i),s=(n(17),n(3)),o=n(4),u=n(7),l=n(6),d=(n(18),n(19),"LIST_ITEM"),h="ADD_ITEM",j="DELETE_ITEM",m="EDIT_ITEM",b="SEARCH_ITEM",O="SORT_ITEM",f=function(t,e){return{type:m,item:t,index:e}},p=n(5),v=n(27),x=n(0),I=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).saveItem=function(t){t.preventDefault();var e=r.props.itemEdit,n=r.inputName.current.value,c="\u0110ang h\u1ecdc"===r.inputStatus.current.value;if(e[0].editing){var i={id:e[1].id,name:n,status:c};return 0===n.trim().length?(r.inputName.current.value="",void r.props.changeEditing({editing:!1})):(r.props.saveItem(i),r.props.changeEditing({editing:!1}),void(r.inputName.current.value=""))}var a={id:Object(v.a)(),name:n,status:c};0!==n.trim().length?(r.props.saveItem(a),r.inputName.current.value=""):r.inputName.current.value=""},r.inputName=c.a.createRef(),r.inputStatus=c.a.createRef(),r}return Object(o.a)(n,[{key:"cancelAddItem",value:function(t){t.preventDefault(),this.inputName.current.value=""}},{key:"render",value:function(){var t=this,e=this.props.itemEdit;return Object(x.jsxs)("section",{className:"task-form ",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h4",{children:e[0].editing?"S\u1eeda sinh vi\xean":"Th\xeam sinh vi\xean"}),Object(x.jsx)("span",{className:"close-form",children:"x"})]}),Object(x.jsxs)("form",{className:"form-control",children:[Object(x.jsxs)("div",{className:"input-name",children:[Object(x.jsx)("label",{children:"T\xean"}),Object(x.jsx)("input",{type:"text",defaultValue:!1===e[0].editing?"":this.inputName.current.value=e[1].name,ref:this.inputName})]}),Object(x.jsxs)("div",{className:"input-status",children:[Object(x.jsx)("label",{children:"T\xecnh tr\u1ea1ng"}),Object(x.jsxs)("select",{ref:this.inputStatus,children:[Object(x.jsx)("option",{children:"\u0110ang h\u1ecdc"}),Object(x.jsx)("option",{children:"\u0110\xe3 ngh\u0129"})]})]}),Object(x.jsxs)("div",{className:"ctrl-task-form",children:[Object(x.jsx)("button",{onClick:function(e){return t.saveItem(e)},children:"L\u01b0u l\u1ea1i"}),Object(x.jsx)("button",{onClick:function(e){return t.cancelAddItem(e)},children:"Hu\u1ef7"})]})]})]})}}]),n}(r.Component),g=Object(p.b)((function(t){return{itemEdit:t.editItem}}),(function(t,e){return{saveItem:function(e){t({type:h,item:e})},changeEditing:function(e){t(f(e))}}}))(I),S=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).onSearch=function(t){r.props.onSearchItem(t.current.value),r.inputSearch.current.value=""},r.onSortItem=function(t){r.props.onSortItem(t)},r.inputSearch=c.a.createRef(),r}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{className:"task-control row",children:[Object(x.jsxs)("div",{className:"col-md-9 search-ctrl",children:[Object(x.jsx)("input",{type:"text",ref:this.inputSearch}),Object(x.jsx)("button",{onClick:function(){return t.onSearch(t.inputSearch)},children:"T\xecm ki\u1ebfm"})]}),Object(x.jsxs)("div",{className:"col-md-3 sort-form",children:[Object(x.jsx)("button",{className:"sort-ctrl",children:"S\u1eafp x\u1ebfp"}),Object(x.jsxs)("ul",{className:"dropdown-menu-sort",children:[Object(x.jsx)("li",{onClick:function(){return t.onSortItem("")},children:"M\u1eb7c \u0110\u1ecbnh"}),Object(x.jsx)("li",{onClick:function(){return t.onSortItem("A-Z")},children:"T\u1eeb A - Z"}),Object(x.jsx)("li",{onClick:function(){return t.onSortItem("Z-A")},children:"T\u1eeb Z - A"})]})]})]})}}]),n}(r.Component),N=function(t){return{onSearchItem:function(e){t(function(t){return{type:b,keyword:t}}(e))},onSortItem:function(e){t(function(t){return{type:O,typeSort:t}}(e))}}},k=Object(p.b)(N,N)(S),T=n(2),w=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).editItem=function(e,n){t.props.editItem(e,n)},t}return Object(o.a)(n,[{key:"deleteItem",value:function(t){this.props.deleteItem(t),window.location.reload()}},{key:"render",value:function(){var t,e=this,n=this.props,r=n.listItem,c=n.keywordSearch,i=n.sortItem;t=0===c.trim().length?Object(T.a)(r):r.filter((function(t){return-1!==t.name.toLowerCase().indexOf(c)})),"A-Z"===i&&t.sort((function(t,e){var n=t.name.toLowerCase(),r=e.name.toLowerCase();return n>r?1:n<r?-1:0})),"Z-A"===i&&t.sort((function(t,e){var n=t.name.toLowerCase(),r=e.name.toLowerCase();return n>r?-1:n<r?1:0}));var a=t.map((function(t,n){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:n+1}),Object(x.jsx)("td",{children:t.name}),Object(x.jsx)("td",{children:t.status?"\u0110ang h\u1ecdc":"\u0110\xe3 ngh\u0129"}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{className:"ctrl-edit",onClick:function(){return e.editItem(t,n)},children:"S\u1eeda"}),Object(x.jsx)("button",{className:"ctrl-delete",onClick:function(){return e.deleteItem(t.id)},children:"Xo\xe1"})]})]},n)}));return Object(x.jsx)("div",{className:"task-content",children:Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"STT"}),Object(x.jsx)("th",{children:"T\xean"}),Object(x.jsx)("th",{children:"Tr\u1ea1ng th\xe1i"}),Object(x.jsx)("th",{children:"H\xe0nh \u0111\u1ed9ng"})]})}),Object(x.jsx)("tbody",{children:a})]})})}}]),n}(r.Component),y=Object(p.b)((function(t){return{listItem:t.items,keywordSearch:t.searchItem,sortItem:t.sortItem}}),(function(t){return{deleteItem:function(e){t(function(t){return{type:j,id:t}}(e))},editItem:function(e,n){t(f(e,n))}}}))(w),E=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).editTask=function(t){var e={editStatus:!0,editTaskIndex:t};r.setState({editting:e})},r.valueSearch=function(t){r.setState({wordOnSearch:t})},r.state={taskItems:[],editting:{editStatus:!1,editTaskIndex:null},wordOnSearch:""},r}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.taskItems,n=t.wordOnSearch;return Object(x.jsxs)("div",{className:"App container",children:[Object(x.jsx)("h1",{className:"title-header",children:"Qu\u1ea3n L\xfd Sinh Vi\xean"}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-4",children:Object(x.jsx)(g,{editTaskItem:this.state})}),Object(x.jsxs)("section",{className:"wrapped col-md-8",children:[Object(x.jsx)(k,{valueSearch:this.valueSearch}),Object(x.jsx)(y,{taskItems:e,deleteItem:this.deleteItem,editTask:this.editTask,wordOnSearch:n})]})]})]})}}]),n}(r.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),i(t),a(t)}))},_=n(9),L=JSON.parse(localStorage.getItem("items")),A=L||[],D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(T.a)(t);case h:for(var n,r=0;r<t.length;r++)t[r].id===e.item.id&&(n=r);return void 0!==n?t.splice(n,1,e.item):t.push(e.item),localStorage.setItem("items",JSON.stringify(t)),Object(T.a)(t);case j:var c=t.filter((function(t){return t.id!==e.id}));return localStorage.setItem("items",JSON.stringify(c)),c;default:return Object(T.a)(t)}},M=[{editing:!1}],R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return e.item.id?(t[0].editing=!0,t[1]=e.item,t[2]=e.index):(t[0].editing=!1,t.splice(1,2)),Object(T.a)(t);default:return Object(T.a)(t)}},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return e.keyword;default:return t}},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return e.typeSort;default:return t}},X=Object(_.a)({items:D,editItem:R,searchItem:Z,sortItem:J}),F=Object(_.b)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log(F.getState()),a.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(p.a,{store:F,children:Object(x.jsx)(E,{})})}),document.getElementById("root")),C()}},[[25,1,2]]]);
//# sourceMappingURL=main.61ba4c25.chunk.js.map