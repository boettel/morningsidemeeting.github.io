(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"33dq":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return s}));r("q1tI");var n=r("lZkf"),o=r("mYRO"),c=r("qKvR");function s(){return Object(c.c)(n.a,{tag:o.d,title:o.e,basePath:o.a})}},"98Ni":function(t,e,r){t.exports={post:"posts-module--post--xM1vM"}},"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),s=r("Bnag");t.exports=function(t){return n(t)||o(t)||c(t)||s()},t.exports.default=t.exports,t.exports.__esModule=!0},RYWz:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("q1tI");var n=r("/A9N"),o=r("nYfD"),c=r("qKvR");function s(t){var e=t.title,r=t.basePath,s=t.children,u=[["About",r],["Posts",r+"/posts"],["Events",r+"/events"],["Documents",r+"/documents"]];return Object(c.c)(n.a,{withSubtitle:!1},Object(c.c)("h2",null,e),Object(c.c)(o.a,{links:u}),Object(c.c)("section",null,s))}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),s=r("8OQS");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var a=r("q1tI"),l=r("7ljp").mdx,p=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,c=s(t,["scope","children"]),u=p(e),f=a.useMemo((function(){if(!r)return null;var t=i({React:a,mdx:l},u),e=Object.keys(t),c=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,e]);return a.createElement(f,i({},c))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},lZkf:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("q1tI");var n=r("Wbzz"),o=r("RYWz"),c=r("xix8"),s=r("qKvR");function u(t){var e=t.data,r=t.tag,n=e.allMdxBlogPost.nodes.filter((function(t){return t.tags.includes(r)}));return n.length?Object(s.c)(c.b,{nodes:n,title:"Posts"}):Object(s.c)("p",null,"No posts found.")}function i(t){var e=t.title,r=t.basePath,c=t.tag;return Object(s.c)(n.b,{query:"3945884913",render:function(t){return Object(s.c)(o.a,{title:e,basePath:r},Object(s.c)(u,{data:t,tag:c}))}})}},mYRO:function(t){t.exports=JSON.parse('{"e":"First Day Caregivers","a":"/first-day-caregivers","b":"first-day-caregivers","d":"first-day-caregivers","c":"first-day-caregivers"}')},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function c(e,r,s){return o()?(t.exports=c=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},t.exports.default=t.exports,t.exports.__esModule=!0),c.apply(null,arguments)}t.exports=c,t.exports.default=t.exports,t.exports.__esModule=!0},xix8:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r("wx14"),o=r("q1tI"),c=r("sWYD"),s=r("4+6U"),u=r("A2+M"),i=r("98Ni"),a=r.n(i),l={psc:"Peace & Social Concerns Committee",announcements:"Announcements",blog:"Blog Posts",prisons:"Prisons Committee","ministry-and-counsel":"Ministry and Counsel",communications:"Communications and Website Commitee",board:"Bulletin Board"},p=r("qKvR"),f=function(t){var e=t.title,r=void 0===e?"untitled":e,n=t.body,o=void 0===n?"":n,i=t.tags,f=void 0===i?[]:i,d=t.linkTitle,b=void 0===d||d,x=t.date,v=t.slug,y=t.withTags?Object(p.c)("footer",null,f.map((function(t){return l[t]})).filter((function(t){return!!t})).join(", ")):null,O=x;try{var m=x.replace("T00:00:00.000Z","T05:00:00.000Z");O=Object(c.a)(Object(s.a)(m),"MMMM d, y")}catch(j){}return Object(p.c)("div",{className:a.a.post},r?Object(p.c)("h3",null,b?Object(p.c)("a",{href:v},r):r):null,O?Object(p.c)("time",{dateTime:x},O):null,Object(p.c)(u.MDXRenderer,null,o),y)};e.b=function(t){var e=t.nodes,r=void 0===e?[]:e,c=t.withTags,s=void 0!==c&&c;return Object(p.c)(o.Fragment,null,r.map((function(t){return Object(p.c)(f,Object(n.a)({key:t.id},Object.assign({},t,{withTags:s})))})))}}}]);
//# sourceMappingURL=component---src-pages-first-day-caregivers-posts-js-21cff9b44506d8a8b863.js.map