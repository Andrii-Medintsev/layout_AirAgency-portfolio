parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".header__burger"),t=document.querySelector(".header__menu"),n=document.querySelector(".header");e.addEventListener("click",function(){e.classList.toggle("active"),t.classList.toggle("header__menu--active",e.classList.contains("active")),document.body.classList.toggle("page__body--with-menu",e.classList.contains("active"))}),n.addEventListener("click",function(n){(n.target.matches(".logo__image")||n.target.matches(".header__hire-us")||n.target.matches(".menu__link"))&&(e.classList.remove("active"),t.classList.remove("header__menu--active"),document.body.classList.remove("page__body--with-menu"))});var r=document.querySelector(".slider__button--next"),c=document.querySelector(".slider__button--prev");r.addEventListener("click",function(){return a(1)}),c.addEventListener("click",function(){return a(-1)});var s=1;function a(e){i(s+=e)}function i(e){var t=document.querySelectorAll(".slider__slide");e>t.length&&(s=1),e<1&&(s=t.length);for(var n=0;n<t.length;n++)t[n].style.display="none";t[s-1].style.display="block"}i(s);var o=document.querySelector(".form");o.addEventListener("submit",function(e){e.preventDefault(),o.reset()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.48864187.js.map