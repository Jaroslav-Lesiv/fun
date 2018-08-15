parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({41:[function(require,module,exports) {
var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=document.querySelectorAll(".lazy-load")||[],i=function(){function n(e){var i=this,o=e.images;t(this,n),this.images=o,console.log(this.images),window.addEventListener("scroll",function(){return i.checkPosition()})}return e(n,[{key:"checkPosition",value:function(){var e=this;this.images.length&&this.images.forEach(function(t){return e.isVisible(t)?e.showImage(t):void 0})}},{key:"isVisible",value:function(e){var t=e.getBoundingClientRect(),n=document.documentElement.clientHeight,i=t.top+n/2>0&&t.top<n,o=t.bottom<n+n/2&&t.bottom>0;return i||o}},{key:"showImage",value:function(e){var t=e.getAttribute("realsrc");e.src=t,this.images=Array.prototype.slice.call(this.images).filter(function(t){return t!==e})}}]),n}(),o=new i({images:n});
},{}],51:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(n=(a=l.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return e}(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(t){return document.createElement(t)},e=r("div"),n=r("span"),o=r("nav"),i=r("ul"),a=r("li"),l=r("strong"),s=r("a"),u=r("h3"),p=r("p"),c=r("img"),v=r("button"),y=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log(e);var n=!0,o=!1,i=void 0;try{for(var a,l=Object.entries(e)[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var s=a.value,u=t(s,2),p=u[0],c=u[1];r.style[p]=c}}catch(t){o=!0,i=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}};exports.div=e,exports.span=n,exports.nav=o,exports.ul=i,exports.li=a,exports.strong=l,exports.a=s,exports.h3=u,exports.p=p,exports.img=c,exports.button=v,exports.setStyle=y;
},{}],40:[function(require,module,exports) {
"use strict";var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),e=require("../helper");function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=document.querySelectorAll("#nav ul.list li a"),s=function(){function e(t){var r=this,s=t.links,o=void 0===s?[]:s;i(this,e),this.hash=null,this.links=[].concat(n(o)).map(function(t){return{selector:t,hash:t.getAttribute("href")}}),this.nodeList=[].concat(n(this.links.map(function(t){return{selector:document.querySelector(t.hash),hash:t.hash}}))),window.addEventListener("scroll",function(t){return r.sectionHandler()}),this.linksHandler()}return t(e,[{key:"sectionHandler",value:function(){document.documentElement.clientHeight;var t=!0,e=!1,n=void 0;try{for(var i,r=this.nodeList[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value,o=s.selector.getBoundingClientRect();if(o.top>=0||o.bottom-23>0){this.hash=s.hash,this.updateNavigation();break}}}catch(t){e=!0,n=t}finally{try{!t&&r.return&&r.return()}finally{if(e)throw n}}}},{key:"linksHandler",value:function(){var t=this;this.links.forEach(function(e){e.selector.addEventListener("click",function(n){n.preventDefault(),t.hash=e.hash,t.updateSections()})})}},{key:"updateNavigation",value:function(){var t=this;this.links.forEach(function(e){return e.hash===t.hash?e.selector.classList.add("btn-primary"):e.selector.classList.remove("btn-primary")})}},{key:"updateSections",value:function(){var t=this;window.scrollTo({top:this.nodeList.find(function(e){return e.hash===t.hash}).selector.offsetTop,behavior:"smooth"})}}]),e}();new s({links:r});var o=function(){function e(){var t=this;i(this,e),this.isActive=!1,this.button=document.querySelector("#nav-toggle_menu"),this.nav=document.querySelector("#nav"),this.button.addEventListener("click",function(){return t.toggle()})}return t(e,[{key:"toggle",value:function(){this.isActive=!this.isActive,this.render()}},{key:"render",value:function(){console.log(3,this.isActive),this.isActive?(this.button.classList.add("active"),this.nav.classList.add("active"),console.log(this.button,this.nav,"true 222")):(this.button.classList.remove("active"),this.nav.classList.remove("active"),console.log(this.button,this.nav,"false 333"))}}]),e}();new o;
},{"../helper":51}],42:[function(require,module,exports) {
"use strict";var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),t=require("../helper");function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function o(e){var t=e.selector;if(i(this,o),t){this.selector=t;var r=this.selector.dataset,n=r.keywords,s=void 0===n?[]:n,a=r.duration,l=void 0===a?4e3:a;this.duration=l,this.words=s.split(","),this.current=0,this.createNode()}}return e(o,[{key:"createNode",value:function(){var e=t.div.cloneNode(),i=t.h3.cloneNode(),o=t.h3.cloneNode(),n=t.div.cloneNode();this.wordWrap=n;var s=t.h3.cloneNode();i.className="color-primary bold mr-10",o.className="color-primary bold ml-10",(0,t.setStyle)(s,{display:"inline-flex",justifyContent:"center",textTransform:"uppercase",fontWeight:"400"}),(0,t.setStyle)(e,{display:"inline-flex"}),(0,t.setStyle)(n,{display:"flex",overflow:"hidden"}),i.innerHTML="[",o.innerHTML="]",e.append(i,n,o);this.wordsSelector=this.words.map(function(e){var t=s.cloneNode(!0);return t.innerHTML=e,t});var a=t.div.cloneNode();(0,t.setStyle)(a,{display:"flex",flexDirection:"column",transition:"0.4s"}),a.append.apply(a,r(this.wordsSelector)),this.wordWrap.append(a),this.selector.append(e),this.maxWidth=a.offsetWidth+"px",this.maxHeight=this.wordsSelector[0].offsetHeight,(0,t.setStyle)(this.wordWrap,{width:this.maxWidth,height:this.maxHeight+"px",position:"relative"}),(0,t.setStyle)(a,{position:"absolute",top:0,left:0}),this.wordSlider=a,this.update()}},{key:"update",value:function(){var e=this;console.log(this.current,this.maxHeight),(0,t.setStyle)(this.wordSlider,{transform:"translateY(-"+this.current*this.maxHeight+"px)"}),this.current=this.current>=this.wordsSelector.length-1?0:this.current+1,setTimeout(function(){return e.update()},this.duration)}}]),o}(),n=document.querySelector(".text-bracket");new o({selector:n});
},{"../helper":51}],43:[function(require,module,exports) {
"use strict";var e=require("../helper"),a=function(e){e.addEventListener("mouseover",function(e){var a=this.parentNode.offsetHeight;this.style.transition=this.offsetHeight/a*1.5+"s",this.style.transform="translateY(-"+(this.offsetHeight-a)+"px)"}),e.addEventListener("mouseleave",function(e){this.style.transform="translateY(0)"})},l=e.a.cloneNode(!0);l.className="snake";var t=e.span.cloneNode();t.className="dot";var s=e.span.cloneNode();s.className="page-shape-url";var r=e.div.cloneNode();r.className="page-shape",r.append(t.cloneNode()),r.append(t.cloneNode()),r.append(t.cloneNode());var n=JSON.stringify({sortKeys:["all","extension","desktop","mobile","web"],examples:[{label:"NormalGame",url:"https://normalgame.net",sortKey:"web,react",img:"normalgame.png",use:[{label:"React",url:"https://reactjs.org/"},{label:"redux",url:"https://redux.js.org/"},{label:"redux-saga",url:"https://github.com/redux-saga/redux-saga"},{label:"webpack",url:"https://webpack.js.org/"},{label:"styled-components",url:"https://www.styled-components.com/"},{label:"Laravel",url:"http://laravel.su/"}],description:"Using: React, Redux, Webpack, recompose, styled-components, redux-saga"},{label:"JustLabelMe",url:"https://just-label.me",sortKey:"web",img:"justlabelme.png",use:[{label:"JavaScript",url:"https://www.javascript.com/"},{label:"stylus",url:"http://stylus-lang.com/"},{label:"gulp",url:"https://gulpjs.com/"}],description:"With JustLabelMe service, you’ll save a lot of time because you can print perfectly onto 4”x6” sticker labels, peel them and place them right on the package!"},{label:"JustLabelMe Extension",url:"https://chrome.google.com/webstore/detail/justlabelme/bpfpmjjojjekdeliaeepcnccikcjpiph",sortKey:"web,extension",img:"justlabelme_ext.jpg",use:[{label:"React",url:"https://reactjs.org/"},{label:"redux",url:"https://redux.js.org/"},{label:"webpack",url:"https://webpack.js.org/"},{label:"styled-components",url:"https://www.styled-components.com/"}],description:"Provides the ability to transform & print FBA shipping and product labels while you are on Amazon Seller Central with a single click"},{label:"Widin",url:"https://codingchipmunks.com/widin/",sortKey:"web",img:"widin.png",use:[{label:"JavaScript",url:"https://www.javascript.com/"},{label:"stylus",url:"http://stylus-lang.com/"},{label:"pug (jade)",url:"https://pugjs.org/api/getting-started.html"},{label:"gulp",url:"https://gulpjs.com/"}],description:"WidinOnline is a decentralized multifaceted market place set to unify the entire commerce landscape of Africa into a sigle inegrated e-commerce platform"},{label:"nomis",url:"https://nomis.com.ua/",sortKey:"web",img:"nomis.png",use:[{label:"JavaScript",url:"https://www.javascript.com/"},{label:"jQuery",url:"https://jquery.com/"},{label:"sass",url:"https://sass-lang.com/"},{label:"blade",url:"http://laravel.su/docs/5.3/blade"},{label:"gulp",url:"https://gulpjs.com/"},{label:"Laravel",url:"http://laravel.su/"}],description:"Check the reliability and solvency of the counterparty"}]}),o=JSON.parse(n),c=document.querySelector("#examples"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return JSON.parse(n).filter(function(a){return a.sortKey.split(",").some(function(a){return a===e})})},p=function(t){var n=document.querySelector("#examples .examples");e.nav.cloneNode(!0).className="flex flex-align-center flex-justify-sa";var c=e.ul.cloneNode(!0);c.className="flex flex-align-center flex-justify-sa mb-20";var i=e.li.cloneNode(!0),p=e.button.cloneNode(!0);p.className="btn text-uppercase";var d=e.ul.cloneNode(!0);d.className="examples-content flex flex-align-start flex-justify-sa";var u=e.li.cloneNode(!0);u.className="card";var m=e.div.cloneNode(!0);m.className="card-media";var h=e.div.cloneNode(!0);h.className="card-content";var b=l.cloneNode(!0);b.className="card-label snake";var g=e.p.cloneNode(!0);g.className="card-description",o.examples.forEach(function(l){var t=g.cloneNode(!0);t.innerHTML=l.description;var n=b.cloneNode(!0);n.href=l.url,n.innerHTML=l.label;var o=e.strong.cloneNode(!0);o.append(n);var c=e.strong.cloneNode(!0),i=e.p.cloneNode();c.innerHTML="Use: ",i.append(c),l.use.forEach(function(a,t){var s=e.a.cloneNode();s.href=a.url,s.className="snake card-link",s.target="_blank",s.innerHTML=a.label+(t===l.use.length-1?"":","),s.style.display="inline-flex",s.style.flexWrap="wrap",i.append(s)});var p=m.cloneNode(!0),f=e.img.cloneNode(!0);f.src="./img/examples/"+l.img,a(f);var v=s.cloneNode();v.innerHTML=l.url;var N=r.cloneNode(!0);N.append(v),p.append(f);var y=h.cloneNode(!0);y.append(o),y.append(i),y.append(t);var x=u.cloneNode(!0);x.dataset.sort=l.sortKey,x.append(N),x.append(p),x.append(y),d.append(x)});o.sortKeys.forEach(function(e,a){var l=p.cloneNode(!0);l.innerHTML=e,l.dataset.sort=e,a||l.classList.add("btn-primary"),l.addEventListener("click",function(){!function(e){d.querySelectorAll(".card").forEach(function(a){a.dataset.sort.split(",").some(function(a){return a===e})||"all"===e?(a.classList.add("show_scale"),a.classList.remove("hide_scale")):(a.classList.remove("show_scale"),a.classList.add("hide_scale")),n.querySelectorAll("ul li button[data-sort]").forEach(function(e){return e.classList.remove("btn-primary")}),n.querySelector('ul li button[data-sort="'+e+'"]').classList.add("btn-primary")})}(e)});var t=i.cloneNode(!0);t.append(l),c.append(t)}),n.append(c),n.append(d)};p(o);
},{"../helper":51}],35:[function(require,module,exports) {
"use strict";var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}require("./lazyLoad"),require("./navigation"),require("./textBracket"),require("./examples"),particlesJS("particles-js",{particles:{number:{value:40,density:{enable:!0,value_area:500}},color:{value:"#59DBD5"},shape:{type:"circle",stroke:{width:0,color:"#505050"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#505050",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});var a=function(){function t(e){var a=e.selectors;n(this,t),this.selectors=a,this.handle()}return e(t,[{key:"handle",value:function(){var e=this;this.selectors.forEach(function(t){var n=t.dataset,a=n.animate;switch(n.start){case"load":document.addEventListener("DOMContentLoaded",function(){t.classList.add(a)});case"scroll":window.addEventListener("scroll",function(){return e.checkScroll(t,a)}),e.checkScroll(t,a)}})}},{key:"checkScroll",value:function(e,t){e.getBoundingClientRect().top<=document.documentElement.clientHeight&&e.classList.add(t)}}]),t}();document.addEventListener("DOMContentLoaded",function(){new a({selectors:[].concat(t(document.querySelectorAll(".animated")))})}),console.log([].concat(t(document.querySelectorAll(".animated"))));
},{"./lazyLoad":41,"./navigation":40,"./textBracket":42,"./examples":43}]},{},[35], null)
//# sourceMappingURL=/main.53a55d3b.map