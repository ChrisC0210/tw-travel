(function(e){function t(t){for(var a,o,n=t[0],l=t[1],i=t[2],d=0,b=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(b.length)b.shift()();return s.push.apply(s,i||[]),c()}function c(){for(var e,t=0;t<s.length;t++){for(var c=s[t],a=!0,o=1;o<c.length;o++){var n=c[o];0!==r[n]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=c[0]))}return e}var a={},o={app:0},r={app:0},s=[];function n(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3cf53da1"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.e=function(e){var t=[],c={about:1};o[e]?t.push(o[e]):0!==o[e]&&c[e]&&t.push(o[e]=new Promise((function(t,c){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"a72fe4bd"}[e]+".css",r=l.p+a,s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var i=s[n],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===r))return t()}var b=document.getElementsByTagName("style");for(n=0;n<b.length;n++){i=b[n],d=i.getAttribute("data-href");if(d===a||d===r)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[e],u.parentNode.removeChild(u),c(s)},u.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(u)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,c){a=r[e]=[t,c]}));t.push(a[2]=s);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=n(e);var b=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(u);var c=r[e];if(0!==c){if(c){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",b.name="ChunkLoadError",b.type=a,b.request=o,c[1](b)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(c,a,function(t){return e[t]}.bind(null,a));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/tw-travel/dist/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var u=d;s.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0332":function(e,t,c){e.exports=c.p+"img/img-food-4.9e23ebc9.png"},"0a10":function(e,t,c){e.exports=c.p+"img/img-live-2.a4983aa9.png"},1574:function(e,t,c){},"16d5":function(e,t,c){},"187b":function(e,t,c){e.exports=c.p+"img/img-views-2.cbfc4b18.png"},"263b":function(e,t,c){e.exports=c.p+"img/img-live-3.719db642.png"},"271f":function(e,t,c){e.exports=c.p+"img/img-live-1.ca53ef9d.png"},"47c9":function(e,t,c){e.exports=c.p+"img/img-views-1.bf811e71.png"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23");function o(e,t,c,o,r,s){var n=Object(a["w"])("Header"),l=Object(a["w"])("router-view"),i=Object(a["w"])("Footer");return Object(a["r"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(n),Object(a["h"])(l),Object(a["h"])(i)],64)}var r=c("a2c7"),s=c.n(r),n={class:"header"},l={class:"fixed-top"},i={class:"shadow-sm mb-2",style:{"background-color":"#fff"}},d={class:"navbar navbar-expand-md container"},b={class:"container-fluid"},u=Object(a["e"])("img",{src:s.a,alt:""},null,-1),f=Object(a["e"])("button",{class:"navbar-toggler gray-800",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"true","aria-label":"Toggle navigation"},[Object(a["e"])("span",{class:"navbar-toggler-icon"})],-1),g={class:"navbar-collapse collapse show",id:"navbarCollapse",style:{}},p={class:"navbar-nav me-auto mb-2 mb-md-0"},h={class:"nav-item"},m=Object(a["g"])("找景點"),v={class:"nav-item"},j=Object(a["g"])("找餐廳"),O={class:"nav-item"},w=Object(a["g"])("找住宿"),x={class:"nav-item"},y=Object(a["g"])("找活動"),z=Object(a["e"])("span",{class:"me-2"},[Object(a["e"])("a",{href:"#"},[Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16"},[Object(a["e"])("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})])])],-1),C={class:"me-2"},k=Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-bookmark-heart",viewBox:"0 0 16 16"},[Object(a["e"])("path",{"fill-rule":"evenodd",d:"M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"}),Object(a["e"])("path",{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"})],-1),M={class:"d-flex justify-content-center mb-4"},H={class:"col-lg-6 col-sm-12 shadow-lg p-3 bg-body",style:{"border-radius":"50px"}},L={class:"d-flex grid",style:{"--bs-columns":"12"}},S=Object(a["f"])('<select class="g-col-2" aria-label=".form-select-lg example" style="font-weight:300;font-size:20px;border:0px;"><option value="1">找景點</option><option value="2">找餐廳</option><option value="3">找住宿</option><option value="4">找活動</option></select><select class="g-col-2" aria-label=".form-select-lg example" style="font-weight:300;font-size:20px;border:0px;"><option selected>選擇縣市</option><option value="1">台北市</option><option value="2">新北市</option><option value="3">宜蘭市</option></select><input class="g-col-6 form-control" type="search" placeholder="｜輸入搜尋內容" aria-label="Search" style="font-weight:300;font-size:20px;border:0px;">',3),_=Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16"},[Object(a["e"])("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})],-1);function A(e,t){var c=Object(a["w"])("router-link");return Object(a["r"])(),Object(a["d"])("div",n,[Object(a["e"])("header",l,[Object(a["e"])("div",i,[Object(a["e"])("nav",d,[Object(a["e"])("div",b,[Object(a["h"])(c,{to:"/",class:"me-4"},{default:Object(a["C"])((function(){return[u]})),_:1}),f,Object(a["e"])("div",g,[Object(a["e"])("ul",p,[Object(a["e"])("li",h,[Object(a["h"])(c,{to:"../scenicSpot",class:"me-4"},{default:Object(a["C"])((function(){return[m]})),_:1})]),Object(a["e"])("li",v,[Object(a["h"])(c,{to:"../restaurant",class:"me-4"},{default:Object(a["C"])((function(){return[j]})),_:1})]),Object(a["e"])("li",O,[Object(a["h"])(c,{to:"../hotelTour",class:"me-4"},{default:Object(a["C"])((function(){return[w]})),_:1})]),Object(a["e"])("li",x,[Object(a["h"])(c,{to:"../activityTour",class:"me-4"},{default:Object(a["C"])((function(){return[y]})),_:1})])]),z,Object(a["e"])("span",C,[Object(a["h"])(c,{to:"../myList",class:"me-4"},{default:Object(a["C"])((function(){return[k]})),_:1})])])])])]),Object(a["e"])("div",M,[Object(a["e"])("form",H,[Object(a["e"])("div",L,[S,Object(a["h"])(c,{to:"../searchPage",class:"me-4 mt-2 g-col-1"},{default:Object(a["C"])((function(){return[_]})),_:1})])])])])])}var V=c("6b0d"),T=c.n(V);const B={},P=T()(B,[["render",A]]);var E=P,D={class:"footer"},N=Object(a["e"])("div",{class:"bd-footer py-1 mt-4 bg-light text-center"},[Object(a["e"])("p",null,[Object(a["e"])("a",{href:"https://www.figma.com/file/Wkl3kfERTtJycuvQl6UHK1/thef2e-3rd-week1-christina?node-id=2%3A2"},"Design"),Object(a["g"])(" + Coding By Christina")])],-1),F=[N];function J(e,t){return Object(a["r"])(),Object(a["d"])("footer",D,F)}const q={},K=T()(q,[["render",J]]);var R=K,U={components:{Header:E,Footer:R}};c("c039");const I=T()(U,[["render",o]]);var Q=I,W=(c("d3b7"),c("3ca3"),c("ddb0"),c("6c02")),G=c("6fa6"),X=c.n(G),Y=c("fc6b"),Z=c.n(Y),$=c("fc2f"),ee=c.n($),te=c("0332"),ce=c.n(te),ae=c("47c9"),oe=c.n(ae),re=c("187b"),se=c.n(re),ne=c("f333"),le=c.n(ne),ie=c("271f"),de=c.n(ie),be=c("0a10"),ue=c.n(be),fe=c("263b"),ge=c.n(fe),pe=c("cf20"),he=c.n(pe),me={class:"home"},ve=Object(a["e"])("div",{class:"container"},[Object(a["e"])("h4",{class:"pink"},[Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-egg-fried",viewBox:"0 0 16 16"},[Object(a["e"])("path",{d:"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}),Object(a["e"])("path",{d:"M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"})]),Object(a["g"])(" 各地美食")]),Object(a["e"])("div",{class:"row row-cols-1 row-cols-lg-4 align-items-stretch g-6 mb-4"},[Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-food-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:X.a,alt:""}),Object(a["e"])("p",{class:"text-center gray-800",style:{"font-size":"26px"}},"台南美食")])])]),Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-food-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:Z.a,alt:""}),Object(a["e"])("p",{class:"text-center gray-800",style:{"font-size":"26px"}},"台北美食")])])]),Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-food-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:ee.a,alt:""}),Object(a["e"])("p",{class:"text-center gray-800",style:{"font-size":"26px"}},"高雄美食")])])]),Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-food-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:ce.a,alt:""}),Object(a["e"])("p",{class:"text-center gray-800",style:{"font-size":"26px"}},"基隆美食")])])])]),Object(a["e"])("h4",{class:"pink"},[Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-tree",viewBox:"0 0 16 16"},[Object(a["e"])("path",{d:"M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"})]),Object(a["g"])(" 熱門景點")]),Object(a["e"])("div",{class:"row row-cols-1 row-cols-lg-3 align-items-stretch g-6 mb-4"},[Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-2 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-food-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:oe.a,alt:""}),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"16px"}},"所屬縣市"),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"24px"}},"景點名稱")]),Object(a["e"])("a",{style:{position:"absolute",right:"10px",top:"10px"}},[Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-bookmark-heart",viewBox:"0 0 16 16"},[Object(a["e"])("path",{"fill-rule":"evenodd",d:"M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"}),Object(a["e"])("path",{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"})])])])]),Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-2 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-food-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:se.a,alt:""}),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"16px"}},"所屬縣市"),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"24px"}},"景點名稱")]),Object(a["e"])("a",{style:{position:"absolute",right:"10px",top:"10px"}},[Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-bookmark-heart",viewBox:"0 0 16 16"},[Object(a["e"])("path",{"fill-rule":"evenodd",d:"M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"}),Object(a["e"])("path",{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"})])])])]),Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-2 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-food-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:le.a,alt:""}),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"16px"}},"所屬縣市"),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"24px"}},"景點名稱")]),Object(a["e"])("a",{style:{position:"absolute",right:"10px",top:"10px"}},[Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-bookmark-heart",viewBox:"0 0 16 16"},[Object(a["e"])("path",{"fill-rule":"evenodd",d:"M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"}),Object(a["e"])("path",{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"})])])])])]),Object(a["e"])("h4",{class:"pink pt-4"},[Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-house-door",viewBox:"0 0 16 16"},[Object(a["e"])("path",{d:"M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"})]),Object(a["g"])(" 住宿精選")]),Object(a["e"])("div",{class:"row row-cols-1 row-cols-lg-4 align-items-stretch g-6 mb-4"},[Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-food-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:de.a,alt:""}),Object(a["e"])("p",{class:"text-center gray-800",style:{"font-size":"26px"}},"台南住宿")])])]),Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-live-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:ue.a,alt:""}),Object(a["e"])("p",{class:"text-center gray-800",style:{"font-size":"26px"}},"台北住宿")])])]),Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-live-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:ge.a,alt:""}),Object(a["e"])("p",{class:"text-center gray-800",style:{"font-size":"26px"}},"高雄住宿")])])]),Object(a["e"])("div",{class:"col mb-2"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"background-image":"url('../assets/img/img-food-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:he.a,alt:""}),Object(a["e"])("p",{class:"text-center gray-800",style:{"font-size":"26px"}},"基隆住宿")])])])]),Object(a["e"])("h4",{class:"pink"},[Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-calendar-event",viewBox:"0 0 16 16"},[Object(a["e"])("path",{d:"M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"}),Object(a["e"])("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"})]),Object(a["g"])(" 最近活動")]),Object(a["e"])("div",{class:"row"},[Object(a["e"])("div",{class:"col-md-10 order-md-2"},[Object(a["e"])("h2",{class:"gray-800",style:{"font-size":"24px"}},"活動名稱"),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"16px"}},"地點：縣市名稱"),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"16px"}},"發佈日期：2021-10-29"),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"16px"}},"活動簡述 Description (String, optional): Description (String, optional)")]),Object(a["e"])("div",{class:"col-md-2 order-md-1"},[Object(a["e"])("div",{class:"col"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"min-height":"150px","background-image":"url('../assets/img/img-live-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:ue.a,alt:""})])])])])]),Object(a["e"])("div",{class:"row"},[Object(a["e"])("div",{class:"col-md-10 order-md-2"},[Object(a["e"])("h2",{class:"gray-800",style:{"font-size":"24px"}},"活動名稱"),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"16px"}},"地點：縣市名稱"),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"16px"}},"發佈日期：2021-10-29"),Object(a["e"])("div",{class:"gray-800",style:{"font-size":"16px"}},"活動簡述 Description (String, optional): Description (String, optional)")]),Object(a["e"])("div",{class:"col-md-2 order-md-1"},[Object(a["e"])("div",{class:"col"},[Object(a["e"])("div",{class:"card-1 card card-cover overflow-hidden text-white rounded-5",style:{"min-height":"150px","background-image":"url('../assets/img/img-live-1.png')"}},[Object(a["e"])("a",{href:"#",class:"d-flex flex-column text-white"},[Object(a["e"])("img",{src:ue.a,alt:""})])])])]),Object(a["e"])("hr",{class:""})])],-1);function je(e,t,c,o,r,s){var n=Object(a["w"])("CarouselHome");return Object(a["r"])(),Object(a["d"])("div",me,[Object(a["h"])(n),ve])}var Oe=c("dc3f"),we=c.n(Oe),xe={class:"CarouselHome mb-4"},ye={class:"container text-center",style:{"z-index":"9",position:"absolute",left:"0",right:"0",top:"250px"}},ze=Object(a["e"])("h3",{class:"text-center text-shadow white"},"熊愛旅行，解封出遊去",-1),Ce=Object(a["g"])("推薦景點"),ke=Object(a["e"])("div",{class:"carousel__item"},[Object(a["e"])("img",{src:we.a,alt:""})],-1);function Me(e,t,c,o,r,s){var n=Object(a["w"])("router-link"),l=Object(a["w"])("Slide"),i=Object(a["w"])("Carousel");return Object(a["r"])(),Object(a["d"])("div",xe,[Object(a["e"])("div",ye,[ze,Object(a["h"])(n,{to:"ScenicSpot",class:"btn btn-primary white"},{default:Object(a["C"])((function(){return[Ce]})),_:1})]),Object(a["h"])(i,{"items-to-show":1,autoplay:5e3,"wrap-around":!0},{addons:Object(a["C"])((function(){return[]})),default:Object(a["C"])((function(){return[(Object(a["r"])(),Object(a["d"])(a["a"],null,Object(a["v"])(1,(function(e){return Object(a["h"])(l,{key:e},{default:Object(a["C"])((function(){return[ke]})),_:2},1024)})),64))]})),_:1})])}c("4001");var He=c("0b81"),Le=Object(a["i"])({name:"Autoplay",components:{Carousel:He["a"],Slide:He["b"]}});c("6f19");const Se=T()(Le,[["render",Me]]);var _e=Se,Ae={name:"Home",components:{CarouselHome:_e}};c("ef0d");const Ve=T()(Ae,[["render",je]]);var Te=Ve,Be=[{path:"/",name:"Home",component:Te},{path:"/about",name:"About",component:function(){return c.e("about").then(c.bind(null,"f820"))}},{path:"/scenicSpot",name:"ScenicSpot",component:function(){return c.e("about").then(c.bind(null,"dcdd"))}},{path:"/restaurant",name:"Restaurant",component:function(){return c.e("about").then(c.bind(null,"ad68"))}},{path:"/hotelTour",name:"HotelTour",component:function(){return c.e("about").then(c.bind(null,"caca"))}},{path:"/activityTour",name:"ActivityTour",component:function(){return c.e("about").then(c.bind(null,"9b89"))}},{path:"/searchPage",name:"SearchPage",component:function(){return c.e("about").then(c.bind(null,"49a8"))}},{path:"/myList",name:"MyList",component:function(){return c.e("about").then(c.bind(null,"1ae7"))}}],Pe=Object(W["a"])({history:Object(W["b"])(),routes:Be}),Ee=Pe;c("7b17");Object(a["c"])(Q).use(Ee).mount("#app")},"6f19":function(e,t,c){"use strict";c("e25f")},"6fa6":function(e,t,c){e.exports=c.p+"img/img-food-1.fe149852.png"},a2c7:function(e,t,c){e.exports=c.p+"img/tw-travel-logo.24d4a9fd.svg"},c039:function(e,t,c){"use strict";c("16d5")},cf20:function(e,t,c){e.exports=c.p+"img/img-live-4.0089a739.png"},dc3f:function(e,t,c){e.exports=c.p+"img/img-CarouselHome.6dabc848.png"},e25f:function(e,t,c){},ef0d:function(e,t,c){"use strict";c("1574")},f333:function(e,t,c){e.exports=c.p+"img/img-views-3.b5191e59.png"},fc2f:function(e,t,c){e.exports=c.p+"img/img-food-3.2ef5e771.png"},fc6b:function(e,t,c){e.exports=c.p+"img/img-food-2.7b00fb90.png"}});
//# sourceMappingURL=app.ca2027b2.js.map