(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"button{\n    border-radius: 5px;\n    background-color: rgb(182, 235, 166);\n    margin: 20px;\n    padding: 10px;\n}\ndiv{\n    min-height: 100px;\n   \n    margin: 20px;\n}\n.btns{\n    border-radius: 10px;\n    display:flex;\n    justify-content: space-evenly;\n    background-color: beige;\n}\n   .test{\n    max-width: 450px;\n   }\n#content{\n    background-color: darkgrey;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    line-height: 1.2;\n    \n}.menu1,.menu2,.menu3{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 20px;\n}\nimg{\n    margin: 20px;\n    border-radius: 10px;\n}\nbody{\n    background-color: bisque;\n}\n\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(){const e=document.querySelector("#content");e.innerHTML=" ";const t=document.createElement("div");t.className="test",t.textContent="At (RN), we’re serving up more than (TF). In fact, (RN) Famous (recipe) is one of our unexpected specialties. Reminiscent of butcher shops back in the day, each slow-smoked, sizzling prime chop measures seven-fingers high. Our signature recipe, that we have perfected for more than four decades, is rubbed with a secret blend of seasonings, cured and roasted on a rotisserie with pecan wood for up to six hours before it’s topped with (RN) signature herb-garlic butter, then carved tableside.(RN) specializes idelicious food featuring fresh ingredients and masterful preparation by the (RN) culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, (RN’s) lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.he approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save room for dessert",e.appendChild(t)}var t=n(379),r=n.n(t),o=n(795),a=n.n(o),i=n(569),c=n.n(i),s=n(565),d=n.n(s),u=n(216),l=n.n(u),p=n(589),m=n.n(p),f=n(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,e(),document.getElementById("content");const v=document.querySelector(".homebtn"),g=document.querySelector(".menubtn"),b=document.querySelector(".contactbtn");v.addEventListener("click",e),g.addEventListener("click",(function(){const e=document.querySelector("#content");e.innerHTML=" ";const t=document.createElement("div");t.textContent="Menu Of Happiness",e.appendChild(t);const n=document.createElement("div");n.textContent="Gobi Tandoori",n.className="menu1",t.appendChild(n);const r=document.createElement("img");r.src="/src/gobi.jpg",r.setAttribute("height","250"),r.setAttribute("width","250"),n.appendChild(r);const o=document.createElement("div");o.textContent="Mushroom Tandoori",o.className="menu2",t.appendChild(o);const a=document.createElement("img");a.src="/src/mush.jpg",a.setAttribute("height","250"),a.setAttribute("width","250"),o.appendChild(a);const i=document.createElement("div");i.textContent="Chaya",i.className="menu3",t.appendChild(i);const c=document.createElement("img");c.src="/src/tea.jpeg",c.setAttribute("height","250"),c.setAttribute("width","250"),i.appendChild(c)})),b.addEventListener("click",(function(){const e=document.querySelector("#content");e.innerHTML=" ";const t=document.createElement("div");t.textContent="Contact Information",e.appendChild(t);const n=document.createElement("p");n.textContent="Email : BreadAndToast@fakemail.com",t.appendChild(n);const r=document.createElement("p");r.textContent="Phone :4206969420",t.appendChild(r);const o=document.createElement("p");o.textContent="Bread And Toast Bakers \nNo 420 69 Avenue \n Sunset Boulevard Fakeville",t.appendChild(o);const a=document.createElement("p");a.textContent="Open on All Days And At All Times",t.appendChild(a)}))})()})();