module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=r=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/components/CommentPost"]},function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.r(e);r(0);function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,e,r){return(i=c()?Reflect.construct:function(t,e,r){var o=[null];o.push.apply(o,e);var u=new(Function.bind.apply(t,o));return r&&n(u,r.prototype),u}).apply(null,arguments)}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return i(t,arguments,u(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),n(o,t)})(t)}var l=r(1),f=r(2),p=r.n(f);function s(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(t,e){b=function(t,e){return new c(t,void 0,e)};var r=a(RegExp),n=RegExp.prototype,u=new WeakMap;function c(t,e,n){var o=r.call(this,t,e);return u.set(o,n||u.get(t)),o}function i(t,e){var r=u.get(e);return Object.keys(r).reduce((function(e,n){return e[n]=t[r[n]],e}),Object.create(null))}return o(c,r),c.prototype.exec=function(t){var e=n.exec.call(this,t);return e&&(e.groups=i(e,this)),e},c.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var r=u.get(this);return n[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+r[e]})))}if("function"==typeof e){var o=this;return n[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!=typeof t[t.length-1]&&t.push(i(t,o)),e.apply(this,t)}))}return n[Symbol.replace].call(this,t,e)},b.apply(this,arguments)}app.initializers.add("nearata-internal-links-noreload",(function(t){var e=b(/^\/([0-9A-Z_a-z]+)/,{route:1});Object(l.extend)(p.a.prototype,"oncreate",(function(){for(var r,n=t.forum.attribute("baseUrl"),o=function(){var o=r.value,u=o.href;if(!u.startsWith(n))return"continue";var c=u.replace(n,"");o.addEventListener("click",(function(r){r.preventDefault();var n=c.match(e);if(null!==n){var o=n.groups.route;switch(o){case"d":m.route.set(t.route("discussion",{id:c.replace("/d/","")}));break;case"flags":case"following":case"notifications":case"settings":case"tags":m.route.set("/"+o);break;case"t":m.route.set(t.route("tag",{tags:c.replace("/t/","")}));break;case"u":m.route.set(t.route("user",{username:c.replace("/u/","")}))}}else m.route.set("/")}))},u=s(this.element.querySelector(".Post-body").querySelectorAll("a"));!(r=u()).done;)o()}))}))}]);
//# sourceMappingURL=forum.js.map