!function(e){function t(){p||(p=!0,c(h,function(e){u(e)}))}function n(t,n){var r=e.createElement("script");r.type="text/"+(t.type||"javascript"),r.src=t.src||t,r.async=!1,r.onreadystatechange=r.onload=function(){var e=r.readyState;!n.done&&(!e||/loaded|complete/.test(e))&&(n.done=!0,n())},(e.body||v).appendChild(r)}function r(e,t){return e.state==A?t&&t():e.state==S?L.ready(e.name,t):e.state==E?e.onpreload.push(function(){r(e,t)}):(e.state=S,void n(e.url,function(){e.state=A,t&&t(),c(m[e.name],function(e){u(e)}),i()&&p&&c(m.ALL,function(e){u(e)})}))}function a(e,t){void 0===e.state&&(e.state=E,e.onpreload=[],n({src:e.url,type:"cache"},function(){o(e)}))}function o(e){e.state=k,c(e.onpreload,function(e){e.call()})}function i(e){e=e||y;var t;for(var n in e){if(e.hasOwnProperty(n)&&e[n].state!=A)return!1;t=!0}return t}function s(e){return"[object Function]"==Object.prototype.toString.call(e)}function c(e,t){if(e){"object"==typeof e&&(e=[].slice.call(e));for(var n=0;n<e.length;n++)t.call(e,e[n],n)}}function l(e){var t;if("object"==typeof e)for(var n in e)e[n]&&(t={name:n,url:e[n]});else t={name:d(e),url:e};var r=y[t.name];return r&&r.url===t.url?r:(y[t.name]=t,t)}function d(e){var t=e.split("/"),n=t[t.length-1],r=n.indexOf("?");return-1!=r?n.substring(0,r):n}function u(e){e._done||(e(),e._done=1)}var f,p,v=e.documentElement,h=[],g=[],m={},y={},b=e.createElement("script").async===!0||"MozAppearance"in e.documentElement.style||window.opera,w=window.head_conf&&head_conf.head||"head",L=window[w]=window[w]||function(){L.ready.apply(null,arguments)},k=1,E=2,S=3,A=4;if(b?L.js=function(){var e=arguments,t=e[e.length-1],n={};return s(t)||(t=null),c(e,function(a,o){a!=t&&(a=l(a),n[a.name]=a,r(a,t&&o==e.length-2?function(){i(n)&&u(t)}:null))}),L}:L.js=function(){var e=arguments,t=[].slice.call(e,1),n=t[0];return f?(n?(c(t,function(e){s(e)||a(l(e))}),r(l(e[0]),s(n)?n:function(){L.js.apply(null,t)})):r(l(e[0])),L):(g.push(function(){L.js.apply(null,e)}),L)},L.ready=function(t,n){if(t==e)return p?u(n):h.push(n),L;if(s(t)&&(n=t,t="ALL"),"string"!=typeof t||!s(n))return L;var r=y[t];if(r&&r.state==A||"ALL"==t&&i()&&p)return u(n),L;var a=m[t];return a?a.push(n):a=m[t]=[n],L},L.ready(e,function(){i()&&c(m.ALL,function(e){u(e)}),L.feature&&L.feature("domloaded",!0)}),window.addEventListener)e.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1);else if(window.attachEvent){e.attachEvent("onreadystatechange",function(){"complete"===e.readyState&&t()});var x=1;try{x=window.frameElement}catch(q){}!x&&v.doScroll&&function(){try{v.doScroll("left"),t()}catch(e){return void setTimeout(arguments.callee,1)}}(),window.attachEvent("onload",t)}!e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",handler=function(){e.removeEventListener("DOMContentLoaded",handler,!1),e.readyState="complete"},!1)),setTimeout(function(){f=!0,c(g,function(e){e()})},300)}(document);var Reveal=function(){"use strict";function e(e){if(t(),!at.transforms2d&&!at.transforms3d)return void document.body.setAttribute("class","no-transforms");window.addEventListener("load",x,!1);var r=Reveal.getQueryHash();"undefined"!=typeof r.dependencies&&delete r.dependencies,d(Je,e),d(Je,r),m(),n()}function t(){at.transforms3d="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,at.transforms2d="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,at.requestAnimationFrameMethod=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,at.requestAnimationFrame="function"==typeof at.requestAnimationFrameMethod,at.canvas=!!document.createElement("canvas").getContext,$e=navigator.userAgent.match(/(iphone|ipod|android)/gi)}function n(){function e(){a.length&&head.js.apply(null,a),r()}function t(t){head.ready(t.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],function(){"function"==typeof t.callback&&t.callback.apply(this),0===--o&&e()})}for(var n=[],a=[],o=0,i=0,s=Je.dependencies.length;s>i;i++){var c=Je.dependencies[i];(!c.condition||c.condition())&&(c.async?a.push(c.src):n.push(c.src),t(c))}n.length?(o=n.length,head.js.apply(null,n)):e()}function r(){a(),Y(),s(),ne(),V(!0),setTimeout(function(){rt.slides.classList.remove("no-transition"),et=!0,b("ready",{indexh:Ye,indexv:Xe,currentSlide:_e})},1)}function a(){rt.theme=document.querySelector("#theme"),rt.wrapper=document.querySelector(".reveal"),rt.slides=document.querySelector(".reveal .slides"),rt.slides.classList.add("no-transition"),rt.background=o(rt.wrapper,"div","backgrounds",null),rt.progress=o(rt.wrapper,"div","progress","<span></span>"),rt.progressbar=rt.progress.querySelector("span"),o(rt.wrapper,"aside","controls",'<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'),rt.slideNumber=o(rt.wrapper,"div","slide-number",""),o(rt.wrapper,"div","state-background",null),o(rt.wrapper,"div","pause-overlay",null),rt.controls=document.querySelector(".reveal .controls"),rt.controlsLeft=u(document.querySelectorAll(".navigate-left")),rt.controlsRight=u(document.querySelectorAll(".navigate-right")),rt.controlsUp=u(document.querySelectorAll(".navigate-up")),rt.controlsDown=u(document.querySelectorAll(".navigate-down")),rt.controlsPrev=u(document.querySelectorAll(".navigate-prev")),rt.controlsNext=u(document.querySelectorAll(".navigate-next"))}function o(e,t,n,r){var a=e.querySelector("."+n);return a||(a=document.createElement(t),a.classList.add(n),null!==r&&(a.innerHTML=r),e.appendChild(a)),a}function i(){function e(e,t){var n={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundColor:e.getAttribute("data-background-color"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition")},r=document.createElement("div");return r.className="slide-background",n.background&&(/^(http|file|\/\/)/gi.test(n.background)||/\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test(n.background)?r.style.backgroundImage="url("+n.background+")":r.style.background=n.background),(n.background||n.backgroundColor||n.backgroundImage)&&r.setAttribute("data-background-hash",n.background+n.backgroundSize+n.backgroundImage+n.backgroundColor+n.backgroundRepeat+n.backgroundPosition+n.backgroundTransition),n.backgroundSize&&(r.style.backgroundSize=n.backgroundSize),n.backgroundImage&&(r.style.backgroundImage='url("'+n.backgroundImage+'")'),n.backgroundColor&&(r.style.backgroundColor=n.backgroundColor),n.backgroundRepeat&&(r.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(r.style.backgroundPosition=n.backgroundPosition),n.backgroundTransition&&r.setAttribute("data-background-transition",n.backgroundTransition),t.appendChild(r),r}g()&&document.body.classList.add("print-pdf"),rt.background.innerHTML="",rt.background.classList.add("no-transition"),u(document.querySelectorAll(Qe)).forEach(function(t){var n;n=g()?e(t,t):e(t,rt.background),u(t.querySelectorAll("section")).forEach(function(t){g()?e(t,t):e(t,n)})}),Je.parallaxBackgroundImage?(rt.background.style.backgroundImage='url("'+Je.parallaxBackgroundImage+'")',rt.background.style.backgroundSize=Je.parallaxBackgroundSize,setTimeout(function(){rt.wrapper.classList.add("has-parallax-background")},1)):(rt.background.style.backgroundImage="",rt.wrapper.classList.remove("has-parallax-background"))}function s(e){var t=document.querySelectorAll(Ve).length;if(rt.wrapper.classList.remove(Je.transition),"object"==typeof e&&d(Je,e),at.transforms3d===!1&&(Je.transition="linear"),rt.wrapper.classList.add(Je.transition),rt.wrapper.setAttribute("data-transition-speed",Je.transitionSpeed),rt.wrapper.setAttribute("data-background-transition",Je.backgroundTransition),rt.controls.style.display=Je.controls?"block":"none",rt.progress.style.display=Je.progress?"block":"none",Je.rtl?rt.wrapper.classList.add("rtl"):rt.wrapper.classList.remove("rtl"),Je.center?rt.wrapper.classList.add("center"):rt.wrapper.classList.remove("center"),Je.mouseWheel?(document.addEventListener("DOMMouseScroll",qe,!1),document.addEventListener("mousewheel",qe,!1)):(document.removeEventListener("DOMMouseScroll",qe,!1),document.removeEventListener("mousewheel",qe,!1)),Je.rollingLinks?w():L(),Je.previewLinks?k():(E(),k("[data-preview-link]")),t>1&&Je.autoSlide&&Je.autoSlideStoppable&&at.canvas&&at.requestAnimationFrame?(Ke=new We(rt.wrapper,function(){return Math.min(Math.max((Date.now()-ft)/dt,0),1)}),Ke.on("click",je),pt=!1):Ke&&(Ke.destroy(),Ke=null),Je.theme&&rt.theme){var n=rt.theme.getAttribute("href"),r=/[^\/]*?(?=\.css)/,a=n.match(r)[0];Je.theme!==a&&(n=n.replace(r,Je.theme),rt.theme.setAttribute("href",n))}W()}function c(){if(lt=!0,window.addEventListener("hashchange",Re,!1),window.addEventListener("resize",Oe,!1),Je.touch&&(rt.wrapper.addEventListener("touchstart",Le,!1),rt.wrapper.addEventListener("touchmove",ke,!1),rt.wrapper.addEventListener("touchend",Ee,!1),window.navigator.msPointerEnabled&&(rt.wrapper.addEventListener("MSPointerDown",Se,!1),rt.wrapper.addEventListener("MSPointerMove",Ae,!1),rt.wrapper.addEventListener("MSPointerUp",xe,!1))),Je.keyboard&&document.addEventListener("keydown",we,!1),Je.progress&&rt.progress&&rt.progress.addEventListener("click",Me,!1),Je.focusBodyOnPageVisiblityChange){var e;"hidden"in document?e="visibilitychange":"msHidden"in document?e="msvisibilitychange":"webkitHidden"in document&&(e="webkitvisibilitychange"),e&&document.addEventListener(e,He,!1)}["touchstart","click"].forEach(function(e){rt.controlsLeft.forEach(function(t){t.addEventListener(e,Te,!1)}),rt.controlsRight.forEach(function(t){t.addEventListener(e,Pe,!1)}),rt.controlsUp.forEach(function(t){t.addEventListener(e,Ne,!1)}),rt.controlsDown.forEach(function(t){t.addEventListener(e,Ie,!1)}),rt.controlsPrev.forEach(function(t){t.addEventListener(e,Ce,!1)}),rt.controlsNext.forEach(function(t){t.addEventListener(e,De,!1)})})}function l(){lt=!1,document.removeEventListener("keydown",we,!1),window.removeEventListener("hashchange",Re,!1),window.removeEventListener("resize",Oe,!1),rt.wrapper.removeEventListener("touchstart",Le,!1),rt.wrapper.removeEventListener("touchmove",ke,!1),rt.wrapper.removeEventListener("touchend",Ee,!1),window.navigator.msPointerEnabled&&(rt.wrapper.removeEventListener("MSPointerDown",Se,!1),rt.wrapper.removeEventListener("MSPointerMove",Ae,!1),rt.wrapper.removeEventListener("MSPointerUp",xe,!1)),Je.progress&&rt.progress&&rt.progress.removeEventListener("click",Me,!1),["touchstart","click"].forEach(function(e){rt.controlsLeft.forEach(function(t){t.removeEventListener(e,Te,!1)}),rt.controlsRight.forEach(function(t){t.removeEventListener(e,Pe,!1)}),rt.controlsUp.forEach(function(t){t.removeEventListener(e,Ne,!1)}),rt.controlsDown.forEach(function(t){t.removeEventListener(e,Ie,!1)}),rt.controlsPrev.forEach(function(t){t.removeEventListener(e,Ce,!1)}),rt.controlsNext.forEach(function(t){t.removeEventListener(e,De,!1)})})}function d(e,t){for(var n in t)e[n]=t[n]}function u(e){return Array.prototype.slice.call(e)}function f(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function p(e,t){e.style.WebkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function v(e){var t=0;if(e){var n=0;u(e.childNodes).forEach(function(e){"number"==typeof e.offsetTop&&e.style&&("absolute"===e.style.position&&(n+=1),t=Math.max(t,e.offsetTop+e.offsetHeight))}),0===n&&(t=e.offsetHeight)}return t}function h(e,t){if(t=t||0,e){var n=e.parentNode,r=n.childNodes;u(r).forEach(function(n){if("number"==typeof n.offsetHeight&&n!==e){var r=window.getComputedStyle(n),a=parseInt(r.marginTop,10),o=parseInt(r.marginBottom,10);t-=n.offsetHeight+a+o}});var a=window.getComputedStyle(e);t-=parseInt(a.marginTop,10)+parseInt(a.marginBottom,10)}return t}function g(){return/print-pdf/gi.test(window.location.search)}function m(){Je.hideAddressBar&&$e&&(window.addEventListener("load",y,!1),window.addEventListener("orientationchange",y,!1))}function y(){setTimeout(function(){window.scrollTo(0,1)},10)}function b(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),d(n,t),rt.wrapper.dispatchEvent(n)}function w(){if(at.transforms3d&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(Ve+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(!(!r.textContent||r.querySelector("*")||r.className&&r.classList.contains(r,"roll"))){var a=document.createElement("span");a.setAttribute("data-title",r.text),a.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(a)}}}function L(){for(var e=document.querySelectorAll(Ve+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],a=r.querySelector("span");a&&(r.classList.remove("roll"),r.innerHTML=a.innerHTML)}}function k(e){var t=u(document.querySelectorAll(e?e:"a"));t.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.addEventListener("click",Fe,!1)})}function E(){var e=u(document.querySelectorAll("a"));e.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.removeEventListener("click",Fe,!1)})}function S(e){A(),rt.preview=document.createElement("div"),rt.preview.classList.add("preview-link-overlay"),rt.wrapper.appendChild(rt.preview),rt.preview.innerHTML=["<header>",'<a class="close" href="#"><span class="icon"></span></a>','<a class="external" href="'+e+'" target="_blank"><span class="icon"></span></a>',"</header>",'<div class="spinner"></div>','<div class="viewport">','<iframe src="'+e+'"></iframe>',"</div>"].join(""),rt.preview.querySelector("iframe").addEventListener("load",function(){rt.preview.classList.add("loaded")},!1),rt.preview.querySelector(".close").addEventListener("click",function(e){A(),e.preventDefault()},!1),rt.preview.querySelector(".external").addEventListener("click",function(){A()},!1),setTimeout(function(){rt.preview.classList.add("visible")},1)}function A(){rt.preview&&(rt.preview.setAttribute("src",""),rt.preview.parentNode.removeChild(rt.preview),rt.preview=null)}function x(){if(rt.wrapper&&!g()){var e=rt.wrapper.offsetWidth,t=rt.wrapper.offsetHeight;e-=t*Je.margin,t-=t*Je.margin;var n=Je.width,r=Je.height,a=20;q(Je.width,Je.height,a),"string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),rt.slides.style.width=n+"px",rt.slides.style.height=r+"px",nt=Math.min(e/n,t/r),nt=Math.max(nt,Je.minScale),nt=Math.min(nt,Je.maxScale),"undefined"==typeof rt.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?p(rt.slides,"translate(-50%, -50%) scale("+nt+") translate(50%, 50%)"):rt.slides.style.zoom=nt;for(var o=u(document.querySelectorAll(Ve)),i=0,s=o.length;s>i;i++){var c=o[i];"none"!==c.style.display&&(c.style.top=Je.center||c.classList.contains("center")?c.classList.contains("stack")?0:Math.max(-(v(c)/2)-a,-r/2)+"px":"")}B(),Q()}}function q(e,t,n){u(rt.slides.querySelectorAll("section > .stretch")).forEach(function(r){var a=h(r,t-2*n);if(/(img|video)/gi.test(r.nodeName)){var o=r.naturalWidth||r.videoWidth,i=r.naturalHeight||r.videoHeight,s=Math.min(e/o,a/i);r.style.width=o*s+"px",r.style.height=i*s+"px"}else r.style.width=e+"px",r.style.height=a+"px"})}function M(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function T(e){if("object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")){var t=e.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(e.getAttribute(t)||0,10)}return 0}function P(){if(Je.overview){de();var e=rt.wrapper.classList.contains("overview"),t=window.innerWidth<400?1e3:2500;rt.wrapper.classList.add("overview"),rt.wrapper.classList.remove("overview-deactivating"),clearTimeout(st),clearTimeout(ct),st=setTimeout(function(){for(var n=document.querySelectorAll(Qe),r=0,a=n.length;a>r;r++){var o=n[r],i=Je.rtl?-105:105;if(o.setAttribute("data-index-h",r),p(o,"translateZ(-"+t+"px) translate("+(r-Ye)*i+"%, 0%)"),o.classList.contains("stack"))for(var s=o.querySelectorAll("section"),c=0,l=s.length;l>c;c++){var d=r===Ye?Xe:T(o),u=s[c];u.setAttribute("data-index-h",r),u.setAttribute("data-index-v",c),p(u,"translate(0%, "+105*(c-d)+"%)"),u.addEventListener("click",ze,!0)}else o.addEventListener("click",ze,!0)}_(),x(),e||b("overviewshown",{indexh:Ye,indexv:Xe,currentSlide:_e})},10)}}function N(){Je.overview&&(clearTimeout(st),clearTimeout(ct),rt.wrapper.classList.remove("overview"),rt.wrapper.classList.add("overview-deactivating"),ct=setTimeout(function(){rt.wrapper.classList.remove("overview-deactivating")},1),u(document.querySelectorAll(Ve)).forEach(function(e){p(e,""),e.removeEventListener("click",ze,!0)}),j(Ye,Xe),le(),b("overviewhidden",{indexh:Ye,indexv:Xe,currentSlide:_e}))}function I(e){"boolean"==typeof e?e?P():N():C()?N():P()}function C(){return rt.wrapper.classList.contains("overview")}function D(e){return e=e?e:_e,e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function R(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function O(){var e=rt.wrapper.classList.contains("paused");de(),rt.wrapper.classList.add("paused"),e===!1&&b("paused")}function H(){var e=rt.wrapper.classList.contains("paused");rt.wrapper.classList.remove("paused"),le(),e&&b("resumed")}function z(){F()?H():O()}function F(){return rt.wrapper.classList.contains("paused")}function j(e,t,n,r){Ue=_e;var a=document.querySelectorAll(Qe);void 0===t&&(t=T(a[e])),Ue&&Ue.parentNode&&Ue.parentNode.classList.contains("stack")&&M(Ue.parentNode,Xe);var o=tt.concat();tt.length=0;var i=Ye||0,s=Xe||0;Ye=U(Qe,void 0===e?Ye:e),Xe=U(Ze,void 0===t?Xe:t),_(),x();e:for(var c=0,l=tt.length;l>c;c++){for(var d=0;d<o.length;d++)if(o[d]===tt[c]){o.splice(d,1);continue e}document.documentElement.classList.add(tt[c]),b(tt[c])}for(;o.length;)document.documentElement.classList.remove(o.pop());C()&&P();var f=a[Ye],p=f.querySelectorAll("section");_e=p[Xe]||f,"undefined"!=typeof n&&ie(n);var v=Ye!==i||Xe!==s;v?b("slidechanged",{indexh:Ye,indexv:Xe,previousSlide:Ue,currentSlide:_e,origin:r}):Ue=null,Ue&&(Ue.classList.remove("present"),document.querySelector(Ge).classList.contains("present")&&setTimeout(function(){var e,t=u(document.querySelectorAll(Qe+".stack"));for(e in t)t[e]&&M(t[e],0)},0)),v&&(ee(Ue),J(_e)),K(),B(),V(),Q(),$(),re(),le()}function W(){l(),c(),x(),dt=Je.autoSlide,le(),i(),X(),K(),B(),V(!0),$()}function Y(){var e=u(document.querySelectorAll(Qe));e.forEach(function(e){var t=u(e.querySelectorAll("section"));t.forEach(function(e,t){t>0&&(e.classList.remove("present"),e.classList.remove("past"),e.classList.add("future"))})})}function X(){var e=u(document.querySelectorAll(Qe));e.forEach(function(e){var t=u(e.querySelectorAll("section"));t.forEach(function(e){oe(e.querySelectorAll(".fragment"))}),0===t.length&&oe(e.querySelectorAll(".fragment"))})}function U(e,t){var n=u(document.querySelectorAll(e)),r=n.length;if(r){Je.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var a=0;r>a;a++){var o=n[a],i=Je.rtl&&!D(o);if(o.classList.remove("past"),o.classList.remove("present"),o.classList.remove("future"),o.setAttribute("hidden",""),t>a){o.classList.add(i?"future":"past");for(var s=u(o.querySelectorAll(".fragment"));s.length;){var c=s.pop();c.classList.add("visible"),c.classList.remove("current-fragment")}}else if(a>t){o.classList.add(i?"past":"future");for(var l=u(o.querySelectorAll(".fragment.visible"));l.length;){var d=l.pop();d.classList.remove("visible"),d.classList.remove("current-fragment")}}o.querySelector("section")&&o.classList.add("stack")}n[t].classList.add("present"),n[t].removeAttribute("hidden");var f=n[t].getAttribute("data-state");f&&(tt=tt.concat(f.split(" ")))}else t=0;return t}function _(){var e,t,n=u(document.querySelectorAll(Qe)),r=n.length;if(r){var a=C()?10:Je.viewDistance;$e&&(a=C()?6:1);for(var o=0;r>o;o++){var i=n[o],s=u(i.querySelectorAll("section")),c=s.length;if(e=Math.abs((Ye-o)%(r-a))||0,i.style.display=e>a?"none":"block",c)for(var l=T(i),d=0;c>d;d++){var f=s[d];t=o===Ye?Math.abs(Xe-d):Math.abs(d-l),f.style.display=e+t>a?"none":"block"}}}}function B(){if(Je.progress&&rt.progress){var e=u(document.querySelectorAll(Qe)),t=document.querySelectorAll(Ve+":not(.stack)").length,n=0;e:for(var r=0;r<e.length;r++){for(var a=e[r],o=u(a.querySelectorAll("section")),i=0;i<o.length;i++){if(o[i].classList.contains("present"))break e;n++}if(a.classList.contains("present"))break;a.classList.contains("stack")===!1&&n++}rt.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function $(){if(Je.slideNumber&&rt.slideNumber){var e=Ye;Xe>0&&(e+=" - "+Xe),rt.slideNumber.innerHTML=e}}function K(){var e=Z(),t=G();rt.controlsLeft.concat(rt.controlsRight).concat(rt.controlsUp).concat(rt.controlsDown).concat(rt.controlsPrev).concat(rt.controlsNext).forEach(function(e){e.classList.remove("enabled"),e.classList.remove("fragmented")}),e.left&&rt.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&rt.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&rt.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&rt.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&rt.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&rt.controlsNext.forEach(function(e){e.classList.add("enabled")}),_e&&(t.prev&&rt.controlsPrev.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&rt.controlsNext.forEach(function(e){e.classList.add("fragmented","enabled")}),D(_e)?(t.prev&&rt.controlsUp.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&rt.controlsDown.forEach(function(e){e.classList.add("fragmented","enabled")})):(t.prev&&rt.controlsLeft.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&rt.controlsRight.forEach(function(e){e.classList.add("fragmented","enabled")})))}function V(e){var t=null,n=Je.rtl?"future":"past",r=Je.rtl?"past":"future";if(u(rt.background.childNodes).forEach(function(a,o){Ye>o?a.className="slide-background "+n:o>Ye?a.className="slide-background "+r:(a.className="slide-background present",t=a),(e||o===Ye)&&u(a.childNodes).forEach(function(e,n){Xe>n?e.className="slide-background past":n>Xe?e.className="slide-background future":(e.className="slide-background present",o===Ye&&(t=e))})}),t){var a=Be?Be.getAttribute("data-background-hash"):null,o=t.getAttribute("data-background-hash");o&&o===a&&t!==Be&&rt.background.classList.add("no-transition"),Be=t}setTimeout(function(){rt.background.classList.remove("no-transition")},1)}function Q(){if(Je.parallaxBackgroundImage){var e,t,n=document.querySelectorAll(Qe),r=document.querySelectorAll(Ze),a=rt.background.style.backgroundSize.split(" ");1===a.length?e=t=parseInt(a[0],10):(e=parseInt(a[0],10),t=parseInt(a[1],10));var o=rt.background.offsetWidth,i=n.length,s=-(e-o)/(i-1)*Ye,c=rt.background.offsetHeight,l=r.length,d=l>0?-(t-c)/(l-1)*Xe:0;rt.background.style.backgroundPosition=s+"px "+d+"px"}}function Z(){var e=document.querySelectorAll(Qe),t=document.querySelectorAll(Ze),n={left:Ye>0||Je.loop,right:Ye<e.length-1||Je.loop,up:Xe>0,down:Xe<t.length-1};if(Je.rtl){var r=n.left;n.left=n.right,n.right=r}return n}function G(){if(_e&&Je.fragments){var e=_e.querySelectorAll(".fragment"),t=_e.querySelectorAll(".fragment:not(.visible)");return{prev:e.length-t.length>0,next:!!t.length}}return{prev:!1,next:!1}}function J(e){e&&!te()&&(u(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&e.play()}),u(e.querySelectorAll("iframe")).forEach(function(e){e.contentWindow.postMessage("slide:start","*")}),u(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function ee(e){e&&(u(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-ignore")||e.pause()}),u(e.querySelectorAll("iframe")).forEach(function(e){e.contentWindow.postMessage("slide:stop","*")}),u(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-ignore")||"function"!=typeof e.contentWindow.postMessage||e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function te(){return!!window.location.search.match(/receiver/gi)}function ne(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var a=Reveal.getIndices(r);j(a.h,a.v)}else j(Ye||0,Xe||0)}else{var o=parseInt(t[0],10)||0,i=parseInt(t[1],10)||0;(o!==Ye||i!==Xe)&&j(o,i)}}function re(e){if(Je.history)if(clearTimeout(it),"number"==typeof e)it=setTimeout(re,e);else{var t="/";_e&&"string"==typeof _e.getAttribute("id")?t="/"+_e.getAttribute("id"):((Ye>0||Xe>0)&&(t+=Ye),Xe>0&&(t+="/"+Xe)),window.location.hash=t}}function ae(e){var t,n=Ye,r=Xe;if(e){var a=D(e),o=a?e.parentNode:e,i=u(document.querySelectorAll(Qe));n=Math.max(i.indexOf(o),0),a&&(r=Math.max(u(e.parentNode.querySelectorAll("section")).indexOf(e),0))}if(!e&&_e){var s=_e.querySelectorAll(".fragment").length>0;if(s){var c=_e.querySelectorAll(".fragment.visible");t=c.length-1}}return{h:n,v:r,f:t}}function oe(e){e=u(e);var t=[],n=[],r=[];e.forEach(function(e){if(e.hasAttribute("data-fragment-index")){var r=parseInt(e.getAttribute("data-fragment-index"),10);t[r]||(t[r]=[]),t[r].push(e)}else n.push([e])}),t=t.concat(n);var a=0;return t.forEach(function(e){e.forEach(function(e){r.push(e),e.setAttribute("data-fragment-index",a)}),a++}),r}function ie(e,t){if(_e&&Je.fragments){var n=oe(_e.querySelectorAll(".fragment"));if(n.length){if("number"!=typeof e){var r=oe(_e.querySelectorAll(".fragment.visible")).pop();e=r?parseInt(r.getAttribute("data-fragment-index")||0,10):-1}"number"==typeof t&&(e+=t);var a=[],o=[];return u(n).forEach(function(t,n){t.hasAttribute("data-fragment-index")&&(n=parseInt(t.getAttribute("data-fragment-index"),10)),e>=n?(t.classList.contains("visible")||a.push(t),t.classList.add("visible"),t.classList.remove("current-fragment"),n===e&&t.classList.add("current-fragment")):(t.classList.contains("visible")&&o.push(t),t.classList.remove("visible"),t.classList.remove("current-fragment"))}),o.length&&b("fragmenthidden",{fragment:o[0],fragments:o}),a.length&&b("fragmentshown",{fragment:a[0],fragments:a}),K(),!(!a.length&&!o.length)}}return!1}function se(){return ie(null,1)}function ce(){return ie(null,-1)}function le(){if(de(),_e){var e=_e.parentNode?_e.parentNode.getAttribute("data-autoslide"):null,t=_e.getAttribute("data-autoslide");dt=t?parseInt(t,10):e?parseInt(e,10):Je.autoSlide,u(_e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&dt&&1e3*e.duration>dt&&(dt=1e3*e.duration+1e3)}),!dt||pt||F()||C()||Reveal.isLastSlide()&&Je.loop!==!0||(ut=setTimeout(ye,dt),ft=Date.now()),Ke&&Ke.setPlaying(-1!==ut)}}function de(){clearTimeout(ut),ut=-1}function ue(){pt=!0,clearTimeout(ut),Ke&&Ke.setPlaying(!1)}function fe(){pt=!1,le()}function pe(){Je.rtl?(C()||se()===!1)&&Z().left&&j(Ye+1):(C()||ce()===!1)&&Z().left&&j(Ye-1)}function ve(){Je.rtl?(C()||ce()===!1)&&Z().right&&j(Ye-1):(C()||se()===!1)&&Z().right&&j(Ye+1)}function he(){(C()||ce()===!1)&&Z().up&&j(Ye,Xe-1)}function ge(){(C()||se()===!1)&&Z().down&&j(Ye,Xe+1)}function me(){if(ce()===!1)if(Z().up)he();else{var e=document.querySelector(Qe+".past:nth-child("+Ye+")");if(e){var t=e.querySelectorAll("section").length-1||void 0,n=Ye-1;j(n,t)}}}function ye(){se()===!1&&(Z().down?ge():ve()),le()}function be(){Je.autoSlideStoppable&&ue()}function we(e){be(e),document.activeElement;var t=!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable);if(!(t||e.shiftKey&&32!==e.keyCode||e.altKey||e.ctrlKey||e.metaKey)){if(F()&&-1===[66,190,191].indexOf(e.keyCode))return!1;var n=!1;if("object"==typeof Je.keyboard)for(var r in Je.keyboard)if(parseInt(r,10)===e.keyCode){var a=Je.keyboard[r];"function"==typeof a?a.apply(null,[e]):"string"==typeof a&&"function"==typeof Reveal[a]&&Reveal[a].call(),n=!0}if(n===!1)switch(n=!0,e.keyCode){case 80:case 33:me();break;case 78:case 34:ye();break;case 72:case 37:pe();break;case 76:case 39:ve();break;case 75:case 38:he();break;case 74:case 40:ge();break;case 36:j(0);break;case 35:j(Number.MAX_VALUE);break;case 32:C()?N():e.shiftKey?me():ye();break;case 13:C()?N():n=!1;break;case 66:case 190:case 191:z();break;case 70:R();break;default:n=!1}n?e.preventDefault():27!==e.keyCode&&79!==e.keyCode||!at.transforms3d||(rt.preview?A():I(),e.preventDefault()),le()}}function Le(e){vt.startX=e.touches[0].clientX,vt.startY=e.touches[0].clientY,vt.startCount=e.touches.length,2===e.touches.length&&Je.overview&&(vt.startSpan=f({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:vt.startX,y:vt.startY}))}function ke(e){if(vt.captured)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{be(e);var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===vt.startCount&&Je.overview){var r=f({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:vt.startX,y:vt.startY});Math.abs(vt.startSpan-r)>vt.threshold&&(vt.captured=!0,r<vt.startSpan?P():N()),e.preventDefault()}else if(1===e.touches.length&&2!==vt.startCount){var a=t-vt.startX,o=n-vt.startY;a>vt.threshold&&Math.abs(a)>Math.abs(o)?(vt.captured=!0,pe()):a<-vt.threshold&&Math.abs(a)>Math.abs(o)?(vt.captured=!0,ve()):o>vt.threshold?(vt.captured=!0,he()):o<-vt.threshold&&(vt.captured=!0,ge()),Je.embedded?(vt.captured||D(_e))&&e.preventDefault():e.preventDefault()}}}function Ee(){vt.captured=!1}function Se(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],Le(e))}function Ae(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],ke(e))}function xe(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],Ee(e))}function qe(e){if(Date.now()-ot>600){ot=Date.now();var t=e.detail||-e.wheelDelta;t>0?ye():me()}}function Me(e){be(e),e.preventDefault();var t=u(document.querySelectorAll(Qe)).length,n=Math.floor(e.clientX/rt.wrapper.offsetWidth*t);j(n)}function Te(e){e.preventDefault(),be(),pe()}function Pe(e){e.preventDefault(),be(),ve()}function Ne(e){e.preventDefault(),be(),he()}function Ie(e){e.preventDefault(),be(),ge()}function Ce(e){e.preventDefault(),be(),me()}function De(e){e.preventDefault(),be(),ye()}function Re(){ne()}function Oe(){x()}function He(){var e=document.webkitHidden||document.msHidden||document.hidden;e===!1&&document.activeElement!==document.body&&(document.activeElement.blur(),document.body.focus())}function ze(e){if(lt&&C()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(N(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);j(n,r)}}}function Fe(e){var t=e.target.getAttribute("href");t&&(S(t),e.preventDefault())}function je(){Reveal.isLastSlide()&&Je.loop===!1?(j(0,0),fe()):pt?fe():ue()}function We(e,t){this.diameter=50,this.thickness=3,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.context=this.canvas.getContext("2d"),
this.container.appendChild(this.canvas),this.render()}var Ye,Xe,Ue,_e,Be,$e,Ke,Ve=".reveal .slides section",Qe=".reveal .slides>section",Ze=".reveal .slides>section.present>section",Ge=".reveal .slides>section:first-of-type",Je={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,slideNumber:!1,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,autoSlideStoppable:!0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,previewLinks:!1,focusBodyOnPageVisiblityChange:!0,theme:null,transition:"default",transitionSpeed:"default",backgroundTransition:"default",parallaxBackgroundImage:"",parallaxBackgroundSize:"",viewDistance:3,dependencies:[]},et=!1,tt=[],nt=1,rt={},at={},ot=0,it=0,st=0,ct=0,lt=!1,dt=0,ut=0,ft=-1,pt=!1,vt={startX:0,startY:0,startSpan:0,startCount:0,captured:!1,threshold:40};return We.prototype.setPlaying=function(e){var t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()},We.prototype.animate=function(){var e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&at.requestAnimationFrameMethod.call(window,this.animate.bind(this))},We.prototype.render=function(){var e=this.playing?this.progress:0,t=this.diameter/2-this.thickness,n=this.diameter/2,r=this.diameter/2,a=14;this.progressOffset+=.1*(1-this.progressOffset);var o=-Math.PI/2+2*e*Math.PI,i=-Math.PI/2+2*this.progressOffset*Math.PI;this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,r,t+2,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,r,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#666",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,r,t,i,o,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-a/2,r-a/2),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,a/2-2,a),this.context.fillRect(a/2+2,0,a/2-2,a)):(this.context.beginPath(),this.context.translate(2,0),this.context.moveTo(0,0),this.context.lineTo(a-2,a/2),this.context.lineTo(0,a),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()},We.prototype.on=function(e,t){this.canvas.addEventListener(e,t,!1)},We.prototype.off=function(e,t){this.canvas.removeEventListener(e,t,!1)},We.prototype.destroy=function(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)},{initialize:e,configure:s,sync:W,slide:j,left:pe,right:ve,up:he,down:ge,prev:me,next:ye,navigateFragment:ie,prevFragment:ce,nextFragment:se,navigateTo:j,navigateLeft:pe,navigateRight:ve,navigateUp:he,navigateDown:ge,navigatePrev:me,navigateNext:ye,layout:x,availableRoutes:Z,availableFragments:G,toggleOverview:I,togglePause:z,isOverview:C,isPaused:F,addEventListeners:c,removeEventListeners:l,getIndices:ae,getSlide:function(e,t){var n=document.querySelectorAll(Qe)[e],r=n&&n.querySelectorAll("section");return"undefined"!=typeof t?r?r[t]:void 0:n},getPreviousSlide:function(){return Ue},getCurrentSlide:function(){return _e},getScale:function(){return nt},getConfig:function(){return Je},getQueryHash:function(){var e={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()});for(var t in e){var n=e[t];e[t]=unescape(n),"null"===n?e[t]=null:"true"===n?e[t]=!0:"false"===n?e[t]=!1:n.match(/^\d+$/)&&(e[t]=parseFloat(n))}return e},isFirstSlide:function(){return null==document.querySelector(Ve+".past")?!0:!1},isLastSlide:function(){return _e?_e.nextElementSibling?!1:D(_e)&&_e.parentNode.nextElementSibling?!1:!0:!1},isReady:function(){return et},addEventListener:function(e,t,n){"addEventListener"in window&&(rt.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(rt.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();