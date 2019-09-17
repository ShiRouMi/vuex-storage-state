(function(t){function e(e){for(var n,u,i=e[0],a=e[1],s=e[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);f&&f(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(c.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},c=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vuex-storage-state/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var f=a;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h3",[t._v("ShoppingCart vuex persist")]),r("hr"),r("h4",[t._v("Products")]),r("ProductList"),r("hr"),r("h4",[t._v("Cart")]),r("ShoppingCart")],1)},c=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shopping-cart"},[r("ul",t._l(t.carts,(function(e){return r("li",{key:e.title},[t._v("\n      "+t._s(e.title)+" --- "+t._s(e.price)+" * "+t._s(e.count)+"\n    ")])})),0),t._v("\n  Total: "),r("span",[t._v(t._s(t.countedPrice))]),r("br"),r("button",{attrs:{disabled:t.isCheckout},on:{click:t.cartCheckout}},[t._v("checkout")]),t.isCheckout?r("div",[t._v("Checkout successful")]):t._e(),r("button",{on:{click:t.clearStorage}},[t._v("clearStorage")])])},i=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),s=r("2f62"),f=(r("6762"),r("2fdb"),r("ac4d"),r("8a81"),window.localStorage),l="vuex-persist",p=null,d=!0,v=function(t){return!!t&&JSON.parse(f.getItem(t))},b=function(t,e){if(!t)return!1;e=JSON.stringify(e),f.setItem(t,e)},O=function(t){if(!t)return!1;f.removeItem(t)},h=function(t){var e=v(l),r=Object.assign(t.state,e);e&&t.replaceState(r)},g=function(t){h(t),t.subscribe((function(t,e){var r={};if(p)if(d){var n=!0,o=!1,c=void 0;try{for(var u,i=p[Symbol.iterator]();!(n=(u=i.next()).done);n=!0){var a=u.value;r[a]=e[a]}}catch(f){o=!0,c=f}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}}else for(var s in e)p.includes(s)||(r[s]=e[s]);else r=e;b(l,r)}))},y=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];p=t,d=e};g.remove=function(){return O(l)},g.observer=y;var m=g;function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w={computed:P({},Object(s["d"])("cart",{carts:function(t){return t.cart},isCheckout:function(t){return t.isCheckout}}),{},Object(s["c"])("cart",["countedPrice"])),methods:P({},Object(s["b"])("cart",["cartCheckout"]),{clearStorage:function(){m.remove()}})},_=w,S=r("2877"),C=Object(S["a"])(_,u,i,!1,null,null,null),k=C.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.products,(function(e){return r("li",{key:e.title},[t._v("\n    "+t._s(e.title)+"\n    -\n    "+t._s(e.price)+"\n\n    "),r("button",{on:{click:function(r){return t.addToCart(e)}}},[t._v("添加到购物袋")])])})),0)},D=[];function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I={computed:Object(s["d"])("products",{products:function(t){return t.products}}),methods:T({},Object(s["b"])("cart",["addToCart"])),created:function(){this.$store.dispatch("products/getProducts")}},J=I,M=Object(S["a"])(J,x,D,!1,null,null,null),$=M.exports,N={name:"app",components:{ShoppingCart:k,ProductList:$}},L=N,q=Object(S["a"])(L,o,c,!1,null,null,null),z=q.exports,A=r("bc3a"),B=r.n(A),F={products:[]},G={},H={setProducts:function(t,e){t.products=e}},K={getProducts:function(t){var e=t.commit;B.a.get("./products.json").then((function(t){var r=t.data;e("setProducts",r.data)}))}},Q={namespaced:!0,state:F,getters:G,mutations:H,actions:K};r("7514");function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var V={cart:[],isCheckout:!1},W={countedPrice:function(t){return t.cart.reduce((function(t,e){return t+ +e.price*e.count}),0)}},X={setCheckoutStatus:function(t,e){t.isCheckout=e},setCartItems:function(t,e){var r=e.cart;t.cart=r},pushProductToCart:function(t,e){t.cart.push(U({},e,{count:1}))},increaseProductCount:function(t,e){var r=e.title,n=t.cart.find((function(t){return t.title===r}));n.count++}},Y={cartCheckout:function(t){var e=t.commit;e("setCheckoutStatus",!0),e("setCartItems",{cart:[]})},addToCart:function(t,e){var r=t.commit,n=t.state;r("setCheckoutStatus",!1);var o=n.cart.find((function(t){return t.title===e.title}));r(o?"increaseProductCount":"pushProductToCart",e)}},Z={namespaced:!0,state:V,getters:W,mutations:X,actions:Y};r("7f7f");Object.defineProperty(exports,"__esModule",{value:!0});var tt,et=window.localStorage,rt="vuex-storage-state",nt=!0,ot=function(t){if(!t)return!1;var e=et.getItem(t);return JSON.parse(e)},ct=function(t,e){if(!t)return!1;e=JSON.stringify(e),et.setItem(t,e)},ut=function(t){if(!t)return!1;et.removeItem(t)},it=function(t,e){var r=ot(e),n=Object.assign(t.state,r);r&&t.replaceState(n)},at=function(t){var e=t.name,r=void 0===e?rt:e,n=t.observer,o=n.list,c=n.sign,u=void 0===c||c;return rt=r,tt=o,nt=u,function(t){it(t,r),t.subscribe((function(t,e){var n={};if(tt)if(nt)for(var o=0,c=tt;o<c.length;o++){var u=c[o];n[u]=e[u]}else for(var u in e)tt.includes(u)||(n[u]=e[u]);else n=e;ct(r,n)}))}};at.remove=function(){return ut(rt)},exports.default=at,n["a"].use(s["a"]);var st=new s["a"].Store({modules:{products:Q,cart:Z},plugins:[(void 0)({name:"abcd-state",observer:{list:["cart"],sign:!0}})]}),ft=st;n["a"].config.productionTip=!1,new n["a"]({store:ft,render:function(t){return t(z)}}).$mount("#app")}});
//# sourceMappingURL=app.e5236eba.js.map