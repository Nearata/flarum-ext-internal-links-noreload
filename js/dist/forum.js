(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const r=flarum.core.compat["forum/app"];var a=e.n(r);a().initializers.add("nearata-internal-links-noreload",(function(){document.addEventListener("click",(function(e){var t=a().forum.attribute("baseUrl"),r=e.target.closest("a");if(r&&r.href.startsWith(t)&&!r.target){var o=r.href.replace(t,""),n=o.split("/");n[n.length-1].match(/(.*)\.(.*)/i)||(e.preventDefault(),m.route.set(o))}}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map