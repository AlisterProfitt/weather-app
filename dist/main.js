(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(601),o=t.n(r),i=t(314),c=t.n(i)()(o());c.push([e.id,"html {\n box-sizing: border-box;\n background-color: rgb(0, 166, 255);\n}\n*, *:before, *:after {\n box-sizing: inherit;\n}\n\n* {\n  margin: 0;\n}\n\n.form-container {\n  height: 20vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1vh;\n}\n\ninput {\n  width: 400px;\n  height: 30px;\n  text-align: center;\n  background-color: rgb(235, 235, 235);\n}\n\nlabel {\n  font-size: 30px;\n  font-weight: 700;\n  color: rgb(255, 255, 255);\n}\n\ninput:focus::placeholder {\n  visibility: hidden;\n}\n\n\n/* Header */\nh1 {\n  color: white;\n  text-align: center;\n  height: 5vh;\n  & em {\n    color: rgb(48, 83, 159);\n  }\n  & sup {\n    font-size: 1rem;\n  }\n}\n\n/* Card Design */\n.weather-cards-container {\n  height: 75vh;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.card {\n  height: 90%;\n  width: 30%;\n  background-color:rgb(53, 116, 171);\n  box-shadow: 0px 0px 10px 5px rgb(41, 60, 136);\n  border: 5px solid white;\n}\n\n.date {\n  color: white;\n  font-size: 2vw;\n  background-color: rgb(19, 80, 134);\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40%;\n  gap: 20px;\n  & > img {\n    width: 40%;\n  }\n  & > div {\n    color: white;\n    font-size: 4vw;\n    width: 40%;\n  }\n}\n\ndiv.temperature-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.temperature-container > button {\n  width: 70%;\n  padding: 5px;\n  background-color: rgb(32, 158, 196);\n  color: white;\n  font-size: 1.5vw;\n  border-radius: 5px;\n}\n\n.description {\n  display: flex;\n  height: 15%;\n  justify-content: center;\n  align-items: center;\n  & p {\n    text-align: center;\n    font-weight: bold;\n    color: white;\n    font-size: 2.5vw;\n    overflow: hidden;\n  }\n}\n\n.more-info {\n  height: 35%;\n  align-self: flex-end;\n  align-content: center;\n  text-align: center;\n  color: white;\n  font-size: 3vw;\n}",""]);const a=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=a,n.splice(a,0,{identifier:l,updater:h,references:1})}c.push(l)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=t(i[c]);n[a].references--}for(var s=r(e,o),d=0;d<i.length;d++){var u=t(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),c=t.n(i),a=t(659),s=t.n(a),d=t(56),u=t.n(d),l=t(540),p=t.n(l),f=t(113),h=t.n(f),v=t(365),m={};m.styleTagTransform=h(),m.setAttributes=u(),m.insert=s().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=p(),o()(v.A,m),v.A&&v.A.locals&&v.A.locals;const g={clearDay:t.p+"e6541ce84a82ea86deaf.svg",clearNight:t.p+"7228ebde1a1cbbabeed4.svg",cloudy:t.p+"bd65452b254265c4f761.svg",fog:t.p+"07bf93f0c95051aa29f1.svg",hail:t.p+"7716b874413ac673e7aa.svg",partlyCloudyDay:t.p+"749d1251900ec2449417.svg",partlyCloudyNight:t.p+"c0a8d00378e555b86fcf.svg",rainSnowShowersDay:t.p+"207b14093cc421b50195.svg",rainSnowShowersNight:t.p+"d20b1ffc3bb5091a3478.svg",rainSnow:t.p+"30d0498eaffed5814744.svg",rain:t.p+"848651d20f3f58949d26.svg",showersDay:t.p+"99f737e43d74ac67225a.svg",showersNight:t.p+"391e6dd7e7c4056b3e07.svg",sleet:t.p+"a791cdeb76b2a1c641a5.svg",snowShowersDay:t.p+"9b361803bd2c718d208f.svg",snowShowersNight:t.p+"a917b111f11bd1e967cf.svg",snow:t.p+"f8d40353e151c5c7cce0.svg",thunderRain:t.p+"80f57ee23a7a1d38351e.svg",thunderShowersDay:t.p+"03133e2a54cdc1e8cf84.svg",thunderShowersNight:t.p+"430f208dd338964430c3.svg",thunder:t.p+"31fc29a57119a2bd369f.svg",wind:t.p+"e87b86c9cbeabdd90ce2.svg"};function y(e){return document.createElement(e)}function b(e,n){document.querySelector(n).appendChild(e)}function w(e,n,t,r,o,i){!function(e){const n=y("h1");n.textContent=`Today's Forecast For ${e.toUpperCase()}`,b(n,"body")}(i),function(){const e=y("div");e.classList.add("container","weather-cards-container"),b(e,"body")}(),function(e,n,t,r,o){const i=y("div");i.classList.add("card","first-card"),b(i,"div.weather-cards-container"),function(e){const n=y("div");n.classList.add("date"),n.textContent=e,b(n,"div.first-card")}(r),function(e,n){const t=y("div");t.classList.add("container","icon-container"),b(t,"div.first-card"),function(e){const n=y("img");var t;n.src=g[(t=e,t.split("-").map(((e,n)=>n?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():e.toLowerCase())).join(""))],b(n,"div.icon-container")}(n),function(e){const n=y("div");n.classList.add("container","temperature-container"),b(n,"div.icon-container"),function(e){const n=y("div");n.textContent=`${parseInt(e)}°F`,n.setAttribute("data-temperature",e),n.classList.add("temperature"),b(n,"div.temperature-container")}(e),function(){const e=y("button");e.classList.add("convert","default"),e.textContent="Convert",e.addEventListener("click",(()=>{!function(e){const n=document.querySelector("div.temperature"),t=parseInt(n.dataset.temperature);e.classList.contains("default")?n.textContent=parseInt(function(e){return 5/9*(e-32)}(t))+"°C":n.textContent=t+"°F",e.classList.toggle("default")}(e)})),b(e,"div.temperature-container")}()}(e)}(e,o),function(e){const n=y("div");n.classList.add("description"),b(n,"div.first-card"),function(e){const n=y("p");n.textContent=e,b(n,"div.description")}(e)}(t),function(e){const n=y("div");n.classList.add("more-info"),b(n,"div.first-card"),function(e){const n=y("p");n.textContent=`Humidity: ${parseInt(e)}%`,b(n,"div.more-info")}(e)}(n)}(e,n,t,r,o)}const x=document.querySelector("body");!function(){const e=document.createElement("div");e.classList.add("container","form-container"),document.body.appendChild(e),function(){const e=document.createElement("form");document.querySelector("div.form-container").appendChild(e),function(){const e=document.createElement("label");e.textContent="City:",e.setAttribute("for","city-search");document.querySelector("form").appendChild(e)}(),function(){const e=document.createElement("input");var n,t;n=e,t={type:"search",name:"city-search",id:"city-search",placeholder:"Please type the name of your city"},Object.entries(t).forEach((([e,t])=>n.setAttribute(e,t)));document.querySelector("form").appendChild(e)}()}()}();const C=document.querySelector('input[type="search"]');document.querySelector("form").addEventListener("submit",(async function(e){e.preventDefault(),function(){const e=document.querySelector("div");for(console.log(e);x.lastChild&&x.lastChild!==e;)x.removeChild(x.lastChild)}();const n=C.value,{humidity:t,temperature:r,description:o,date:i,icon:c}=await async function(e){const n=await async function(e){try{const n=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?key=4WB2XHP2B4BTABGTS8YCNGX45`);return await n.json()}catch(e){console.log("Error! "+e)}}(e),{temp:t,description:r,humidity:o,icon:i,datetime:c}=n.days[0];return{temperature:t,description:r,humidity:o,icon:i,date:c}}(n);console.log(t,r,o,i,c),w(r,t,o,i,c,n)}))})();