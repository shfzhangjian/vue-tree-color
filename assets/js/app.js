(function(e){function a(a){for(var l,i,r=a[0],s=a[1],c=a[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);d&&d(a);while(p.length)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],l=!0,r=1;r<t.length;r++){var s=t[r];0!==n[s]&&(l=!1)}l&&(o.splice(a--,1),e=i(i.s=t[0]))}return e}var l={},n={app:0},o=[];function i(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=l,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)i.d(t,l,function(a){return e[a]}.bind(null,l));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("f0a0")},3253:function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("139e"),t("fae9"),t("3ff7"),t("d6dc");var l=t("a593"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"flex"},[t("Home",{staticClass:"f1"}),t("About",{staticClass:"f1"})],1)])},o=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("vue2-org-tree",{attrs:{data:e.data,horizontal:!0,name:"test",NodeClass:e.NodeClass,judge:e.judge,"label-class-name":e.labelClassName,collapsable:""},on:{"on-expand":e.onExpand,"on-node-mouseover":e.onMouseover,"on-node-mouseout":e.onMouseout}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.BasicSwich,expression:"BasicSwich"}],staticClass:"floating"},[t("p",[e._v("ID:"+e._s(e.BasicInfo.id))]),t("p",[e._v("Name:"+e._s(e.BasicInfo.label))])])],1)},r=[],s=(t("72b3"),t("270f"),{data:function(){return{BasicSwich:!1,BasicInfo:{id:null,label:null},judge:{swtich:!0},NodeClass:["myred","myger","myblue"],data:{id:0,label:"XXX科技有限公司",children:[{id:2,label:"产品研发部",children:[{id:5,label:"研发-前端",swtich:"myred"},{id:6,label:"研发-后端",swtich:"myger"},{id:9,label:"UI设计",swtich:111},{id:10,label:"产品经理"}]},{id:3,label:"销售部",children:[{id:7,label:"销售一部",swtich:"myblue"},{id:8,label:"销售二部",swtich:!1}]},{id:4,label:"财务部"},{id:9,label:"HR人事"}]},horizontal:!1,collapsable:!0,expandAll:!1,labelClassName:"org-bg-res"}},created:function(){this.expandChange()},methods:{renderContent:function(e,a){return a.label},onMouseout:function(e,a){this.BasicSwich=!1},onMouseover:function(e,a){this.BasicInfo=a,this.BasicSwich=!0;var t=document.getElementsByClassName("floating")[0];t.style.left=e.clientX+10+"px",t.style.top=e.clientY+10+"px"},onExpand:function(e,a){"expand"in a?(a.expand=!a.expand,!a.expand&&a.children&&this.collapse(a.children)):this.$set(a,"expand",!0)},NodeClick:function(e,a){alert(a.label),console.log(e,a)},collapse:function(e){var a=this;e.forEach((function(e){e.expand&&(e.expand=!1),e.children&&a.collapse(e.children)}))},expandChange:function(){this.toggleExpand(this.data,!0)},toggleExpand:function(e,a){var t=this;Array.isArray(e)?e.forEach((function(e){t.$set(e,"expand",a),e.children&&t.toggleExpand(e.children,a)})):(this.$set(e,"expand",a),e.children&&t.toggleExpand(e.children,a))}}}),c=s,d=(t("de16"),t("5d22")),u=Object(d["a"])(c,i,r,!1,null,null,null),p=u.exports,h=t("f820"),f={components:{Home:p,About:h["default"]}},b=f,v=(t("034f"),Object(d["a"])(b,n,o,!1,null,null,null)),m=v.exports,g=(t("402f"),t("a81e"));l["a"].use(g["a"]);var x=[{path:"/",name:"Home",component:p},{path:"/about",name:"About",component:function(){return Promise.resolve().then(t.bind(null,"f820"))}}],y=new g["a"]({mode:"hash",base:"",routes:x}),_=y,C=t("cf6b");l["a"].use(C["a"]);var w=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=t("42d0");l["a"].use(A["a"]),l["a"].config.productionTip=!1,new l["a"]({router:_,store:w,render:function(e){return e(m)}}).$mount("#app")},d3ee:function(e,a,t){},de16:function(e,a,t){"use strict";t("d3ee")},e76e:function(e,a,t){"use strict";t("3253")},f0a0:function(e,a,t){},f820:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"col-md-10 col-md-offset-1"},[e._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-8 col-md-offset-2"},[t("form",{staticClass:"form-horizontal row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"checkbox"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.horizontal,expression:"horizontal"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.horizontal)?e._i(e.horizontal,null)>-1:e.horizontal},on:{change:function(a){var t=e.horizontal,l=a.target,n=!!l.checked;if(Array.isArray(t)){var o=null,i=e._i(t,o);l.checked?i<0&&(e.horizontal=t.concat([o])):i>-1&&(e.horizontal=t.slice(0,i).concat(t.slice(i+1)))}else e.horizontal=n}}}),e._v(" Horizontal ")])])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"checkbox"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.collapsable,expression:"collapsable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.collapsable)?e._i(e.collapsable,null)>-1:e.collapsable},on:{change:function(a){var t=e.collapsable,l=a.target,n=!!l.checked;if(Array.isArray(t)){var o=null,i=e._i(t,o);l.checked?i<0&&(e.collapsable=t.concat([o])):i>-1&&(e.collapsable=t.slice(0,i).concat(t.slice(i+1)))}else e.collapsable=n}}}),e._v(" Collapsable ")])])]),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"checkbox"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.expandAll,expression:"expandAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.expandAll)?e._i(e.expandAll,null)>-1:e.expandAll},on:{change:[function(a){var t=e.expandAll,l=a.target,n=!!l.checked;if(Array.isArray(t)){var o=null,i=e._i(t,o);l.checked?i<0&&(e.expandAll=t.concat([o])):i>-1&&(e.expandAll=t.slice(0,i).concat(t.slice(i+1)))}else e.expandAll=n},e.expandChange]}}),e._v(" Expand All ")])])]),e._m(1),e._m(2),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"control-label col-md-5"},[e._v("labelClassName:")]),t("div",{staticClass:"col-md-7"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.labelClassName,expression:"labelClassName"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.labelClassName=a.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"bg-white"}},[e._v("bg-white")]),t("option",{attrs:{value:"bg-orange"}},[e._v("bg-orange")]),t("option",{attrs:{value:"bg-gold"}},[e._v("bg-gold")]),t("option",{attrs:{value:"bg-gray"}},[e._v("bg-gray")]),t("option",{attrs:{value:"bg-lightpink"}},[e._v("bg-lightpink")]),t("option",{attrs:{value:"bg-chocolate"}},[e._v("bg-chocolate")]),t("option",{attrs:{value:"bg-tomato"}},[e._v("bg-tomato")])])])])])])])]),e._m(3),t("div",{staticClass:"text-center"},[t("vue2-org-tree",{attrs:{name:"test",data:e.data,horizontal:e.horizontal,collapsable:e.collapsable,"label-class-name":e.labelClassName,"render-content":e.renderContent},on:{"on-expand":e.onExpand,"on-node-click":e.onNodeClick}})],1)])])])},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-header"},[t("h3",[e._v("基于Vue的组织架构树组件")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[t("br")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[t("br")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[t("br")])}],o=(t("72b3"),t("270f"),{data:function(){return{data:{id:0,label:"XXX科技有限公司",children:[{id:2,label:"产品研发部",children:[{id:5,label:"研发-前端"},{id:6,label:"研发-后端"},{id:9,label:"UI设计"},{id:10,label:"产品经理"}]},{id:3,label:"销售部",children:[{id:7,label:"销售一部"},{id:8,label:"销售二部"}]},{id:4,label:"财务部"},{id:9,label:"HR人事"}]},horizontal:!1,collapsable:!0,expandAll:!1,labelClassName:"bg-white"}},methods:{renderContent:function(e,a){return a.label},onExpand:function(e,a){"expand"in a?(a.expand=!a.expand,!a.expand&&a.children&&this.collapse(a.children)):this.$set(a,"expand",!0)},onNodeClick:function(e,a){alert(a.label)},collapse:function(e){var a=this;e.forEach((function(e){e.expand&&(e.expand=!1),e.children&&a.collapse(e.children)}))},expandChange:function(){this.toggleExpand(this.data,this.expandAll)},toggleExpand:function(e,a){var t=this;Array.isArray(e)?e.forEach((function(e){t.$set(e,"expand",a),e.children&&t.toggleExpand(e.children,a)})):(this.$set(e,"expand",a),e.children&&t.toggleExpand(e.children,a))}}}),i=o,r=(t("e76e"),t("5d22")),s=Object(r["a"])(i,l,n,!1,null,null,null);a["default"]=s.exports}});