(function(e){function t(t){for(var n,l,c=t[0],u=t[1],i=t[2],s=0,d=[];s<c.length;s++)l=c[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);v&&v(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var u=a[l];0!==r[u]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function l(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3c80f8f8"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(e);var i=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(s);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}r[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/tw-travel/dist/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var v=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"16d5":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t,a,r,o,l){var c=Object(n["w"])("Header"),u=Object(n["w"])("router-view"),i=Object(n["w"])("Footer");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(c),Object(n["h"])(u),Object(n["h"])(i)],64)}var o=a("a2c7"),l=a.n(o),c={class:"header"},u={class:"shadow-sm"},i={id:"nav",class:"navbar navbar-expand container","aria-label":"Second navbar example"},s={class:"container-fluid"},v=Object(n["e"])("img",{src:l.a,alt:""},null,-1),d=Object(n["e"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample02","aria-controls":"navbarsExample02","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["e"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarsExample02"},p={class:"navbar-nav me-auto"},h={class:"nav-item"},f=Object(n["g"])("找景點"),g={class:"nav-item"},j=Object(n["g"])("找餐廳"),m={class:"nav-item"},O=Object(n["g"])("找住宿"),w={class:"nav-item"},y=Object(n["g"])("找活動"),_=Object(n["f"])('<span class="me-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></a></span><span class="me-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path></svg></a></span>',2);function k(e,t){var a=Object(n["w"])("router-link");return Object(n["q"])(),Object(n["d"])("div",c,[Object(n["e"])("div",u,[Object(n["e"])("nav",i,[Object(n["e"])("div",s,[Object(n["h"])(a,{to:"/",class:"me-4"},{default:Object(n["B"])((function(){return[v]})),_:1}),d,Object(n["e"])("div",b,[Object(n["e"])("ul",p,[Object(n["e"])("li",h,[Object(n["h"])(a,{to:"../scenicSpot",class:"me-4"},{default:Object(n["B"])((function(){return[f]})),_:1})]),Object(n["e"])("li",g,[Object(n["h"])(a,{to:"../restaurant",class:"me-4"},{default:Object(n["B"])((function(){return[j]})),_:1})]),Object(n["e"])("li",m,[Object(n["h"])(a,{to:"../hotelTour",class:"me-4"},{default:Object(n["B"])((function(){return[O]})),_:1})]),Object(n["e"])("li",w,[Object(n["h"])(a,{to:"../activityTour",class:"me-4"},{default:Object(n["B"])((function(){return[y]})),_:1})])]),_])])])])])}var x=a("6b0d"),C=a.n(x);const T={},S=C()(T,[["render",k]]);var H=S,P={class:"footer"},B=Object(n["e"])("div",{class:"container-fluid text-center bg-light fixed-bottom"},[Object(n["e"])("p",null,"Copyright © Christina Chen. All Rights Reserved.")],-1),E=[B];function M(e,t){return Object(n["q"])(),Object(n["d"])("div",P,E)}const q={},z=C()(q,[["render",M]]);var A=z,L={components:{Header:H,Footer:A}};a("c039");const F=C()(L,[["render",r]]);var V=F,W=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),I=a("cf05"),R=a.n(I),J={class:"home container"},D=Object(n["e"])("img",{alt:"Vue logo",src:R.a},null,-1),N={class:"app"},Y=Object(n["g"])("666");function G(e,t,a,r,o,l){var c=Object(n["w"])("HelloWorld"),u=Object(n["w"])("CarouselHome");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",J,[D,Object(n["h"])(c,{msg:"Welcome to Your Vue.js App"})]),Object(n["e"])("div",N,[Object(n["h"])(u,null,{default:Object(n["B"])((function(){return[Y]})),_:1})])],64)}var K={class:"hello"},Q=Object(n["f"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);function U(e,t,a,r,o,l){return Object(n["q"])(),Object(n["d"])("div",K,[Object(n["e"])("h1",null,Object(n["y"])(a.msg),1),Q])}var X={name:"HelloWorld",props:{msg:String}};a("65e4");const Z=C()(X,[["render",U],["__scopeId","data-v-5141a303"]]);var $=Z,ee={name:"Home",components:{HelloWorld:$}};const te=C()(ee,[["render",G]]);var ae=te,ne=[{path:"/",name:"Home",component:ae},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/scenicSpot",name:"ScenicSpot",component:function(){return a.e("about").then(a.bind(null,"dcdd"))}},{path:"/restaurant",name:"Restaurant",component:function(){return a.e("about").then(a.bind(null,"ad68"))}},{path:"/hotelTour",name:"HotelTour",component:function(){return a.e("about").then(a.bind(null,"caca"))}},{path:"/activityTour",name:"ActivityTour",component:function(){return a.e("about").then(a.bind(null,"9b89"))}}],re=Object(W["a"])({history:Object(W["b"])(),routes:ne}),oe=re;Object(n["c"])(V).use(oe).mount("#app")},"5e10":function(e,t,a){},"65e4":function(e,t,a){"use strict";a("5e10")},a2c7:function(e,t,a){e.exports=a.p+"img/tw-travel-logo.24d4a9fd.svg"},c039:function(e,t,a){"use strict";a("16d5")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.7a1358be.js.map