(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+6XX":function(t,e,n){var r=n("y1pI");t.exports=function(t){return r(this.__data__,t)>-1}},"/9aa":function(t,e,n){var r=n("NykK"),o=n("ExA7"),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==a}},"2gN3":function(t,e,n){var r=n("Kz5y")["__core-js_shared__"];t.exports=r},"3Fdi":function(t,e,n){n("q8oJ"),n("C9fy"),n("8npG");var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},"44Ds":function(t,e,n){var r=n("e4Nc"),o="Expected a function";function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var c=t.apply(this,r);return n.cache=a.set(o,c)||a,c};return n.cache=new(a.Cache||r),n}a.Cache=r,t.exports=a},"4kuk":function(t,e,n){var r=n("SfRM"),o=n("Hvzi"),a=n("u8Dt"),c=n("ekgI"),i=n("JSQU");function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=c,u.prototype.set=i,t.exports=u},"4uTw":function(t,e,n){var r=n("Z0cm"),o=n("9ggG"),a=n("GNiM"),c=n("dt0z");t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:a(c(t))}},"9Nap":function(t,e,n){var r=n("/9aa"),o=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},"9ggG":function(t,e,n){var r=n("Z0cm"),o=n("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(c.test(t)||!a.test(t)||null!=e&&t in Object(e))}},AP2z:function(t,e,n){n("q8oJ"),n("C9fy"),n("8npG");var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,c=o.toString,i=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,i),n=t[i];try{t[i]=void 0;var r=!0}catch(u){}var o=c.call(t);return r&&(e?t[i]=n:delete t[i]),o}},Bl7J:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("+ZDr"),c=n.n(a);n("ZHwO");var i=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t,e,n=this.props.children;return t=o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",{className:"push-left"},o.a.createElement(c.a,{to:"/"},"Jenny Brennan")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/projects"},"Projects")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/blog"},"Blog")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/about"},"About")))),e=o.a.createElement("footer",null,o.a.createElement("a",{href:"/"},"About")," ·",o.a.createElement("a",{href:"https://twitter.com/jennyhbren"}," Twitter ")," ·",o.a.createElement("a",{href:"mailto:hello@jennybrennan.com"}," Email ")," ·",o.a.createElement("a",{href:"https://github.com/jennybrennan"}," GitHub ")," ·",o.a.createElement("a",{href:"https://linkedin.com/in/jennyhbren"}," LinkedIn ")," ·",o.a.createElement("a",{href:"https://github.com/JennyBrennan/jennybrennan.github.io"}," Site source code ")),o.a.createElement("div",null,t,n,e)},r}(o.a.Component);e.a=i},Cwc5:function(t,e,n){var r=n("NKxu"),o=n("Npjl");t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},E2jh:function(t,e,n){n("rzGZ"),n("Dq+y"),n("8npG");var r,o=n("2gN3"),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},EpBk:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,e,n){n("sC2a");var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,c=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)})),e}));t.exports=c},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},H8j4:function(t,e,n){var r=n("QkVE");t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},Hvzi:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},I01J:function(t,e,n){var r=n("44Ds"),o=500;t.exports=function(t){var e=r(t,(function(t){return n.size===o&&n.clear(),t})),n=e.cache;return e}},JHgL:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).get(t)}},JSQU:function(t,e,n){var r=n("YESw"),o="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?o:e,this}},KMkd:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,e,n){n("q8oJ"),n("C9fy"),n("8npG");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},LbRr:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r);e.a=function(t){var e=t.title,n=t.subtitle;return o.a.createElement("header",null,o.a.createElement("h1",null,e),o.a.createElement("h3",null,n))}},NKxu:function(t,e,n){n("sC2a"),n("klQ5"),n("q8oJ"),n("C9fy"),n("8npG");var r=n("lSCD"),o=n("E2jh"),a=n("GoyQ"),c=n("3Fdi"),i=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,s=u.toString,p=l.hasOwnProperty,f=RegExp("^"+s.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?f:i).test(c(t))}},Npjl:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},NykK:function(t,e,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),c="[object Null]",i="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?i:c:u&&u in Object(t)?o(t):a(t)}},QkVE:function(t,e,n){n("AqHK");var r=n("EpBk");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=n("+ZDr"),c=n.n(a),i=n("mwIZ"),u=n.n(i),l=n("Bl7J"),s=n("LbRr");var p=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=u()(this,"props.data.allMarkdownRemark.edges");return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(s.a,{subtitle:"Policy researcher and software engineer, trying to do the most good."}),o.a.createElement("main",null,o.a.createElement("h2",{className:"homepage"},"Projects"),o.a.createElement("ul",{className:"card-grid"},o.a.createElement("li",null,o.a.createElement("div",{className:"card"},o.a.createElement("h3",null,"ManifestWho?"),o.a.createElement("p",null,"A game of guessing political party manifestos as an experiment in UK political understanding."),o.a.createElement("p",null,o.a.createElement("a",{className:"project-link",href:"https://manifestwho.com"},"Visit manifestwho.com →")))),o.a.createElement("li",null,o.a.createElement("div",{className:"card"},o.a.createElement("h3",null,"Campaign Library"),o.a.createElement("p",null,"A new library resource for activists and campaign organisers on campaign theory and practice. Political research, product and development with ",o.a.createElement("a",{href:"http://campaignlab.london"},"Campaign Lab"),"."),o.a.createElement("p",null,o.a.createElement("a",{className:"project-link",href:"https://campaignlibrary.org"},"Visit campaignlibrary.org →")))),o.a.createElement("li",null,o.a.createElement("div",{className:"card"},o.a.createElement("h3",null,"Unbias"),o.a.createElement("p",null,"A Chrome extension to remove faces and names in LinkedIn profiles and searches, to reduce the effects of unconscious bias on recruiters."),o.a.createElement("p",null,o.a.createElement("a",{className:"project-link",href:"https://unbias.io"},"Visit unbias.io →"))))),o.a.createElement("strong",null,o.a.createElement(c.a,{to:"/projects",className:"homepage"},"See more projects...")),o.a.createElement("h2",{className:"homepage"},"Writing & resources"),o.a.createElement("ul",{className:"blog-index"},t.slice(0,3).map((function(t){var e=t.node,n=u()(e,"frontmatter.title")||e.fields.slug;return o.a.createElement("li",{className:"blog-card"},o.a.createElement(c.a,{to:e.fields.slug},n)," - ",o.a.createElement("em",null,e.frontmatter.date),o.a.createElement("br",null),e.frontmatter.desc)}))),o.a.createElement("strong",null,o.a.createElement(c.a,{to:"/blog",className:"homepage"},"Read more posts...")))))},r}(o.a.Component);e.default=p;var f="1006694862"},SfRM:function(t,e,n){var r=n("YESw");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Xi7e:function(t,e,n){var r=n("KMkd"),o=n("adU4"),a=n("tMB7"),c=n("+6XX"),i=n("Z8oC");function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=c,u.prototype.set=i,t.exports=u},YESw:function(t,e,n){var r=n("Cwc5")(Object,"create");t.exports=r},Z0cm:function(t,e,n){n("MIFh");var r=Array.isArray;t.exports=r},Z8oC:function(t,e,n){var r=n("y1pI");t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},ZWtO:function(t,e,n){var r=n("4uTw"),o=n("9Nap");t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[o(e[n++])];return n&&n==a?t:void 0}},adU4:function(t,e,n){var r=n("y1pI"),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},e4Nc:function(t,e,n){var r=n("fGT3"),o=n("k+1r"),a=n("JHgL"),c=n("pSRY"),i=n("H8j4");function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=c,u.prototype.set=i,t.exports=u},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},ebwN:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Map");t.exports=r},ekgI:function(t,e,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},fGT3:function(t,e,n){var r=n("4kuk"),o=n("Xi7e"),a=n("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},"k+1r":function(t,e,n){var r=n("QkVE");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},klQ5:function(t,e,n){var r=n("emib"),o=n("TUPI"),a=n("rjfK").f,c=n("chL8").f,i=n("mhTz"),u=n("lb9j"),l=r.RegExp,s=l,p=l.prototype,f=/a/g,h=/a/g,m=new l(f)!==f;if(n("QPJK")&&(!m||n("96qb")((function(){return h[n("sOol")("match")]=!1,l(f)!=f||l(h)==h||"/a/i"!=l(f,"i")})))){l=function(t,e){var n=this instanceof l,r=i(t),a=void 0===e;return!n&&r&&t.constructor===l&&a?t:o(m?new s(r&&!a?t.source:t,e):s((r=t instanceof l)?t.source:t,r&&a?u.call(t):e),n?this:p,l)};for(var v=function(t){t in l||a(l,t,{configurable:!0,get:function(){return s[t]},set:function(e){s[t]=e}})},y=c(s),d=0;y.length>d;)v(y[d++]);p.constructor=l,l.prototype=p,n("IYdN")(r,"RegExp",l)}n("to/b")("RegExp")},lSCD:function(t,e,n){var r=n("NykK"),o=n("GoyQ"),a="[object AsyncFunction]",c="[object Function]",i="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==c||e==i||e==a||e==u}},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},mwIZ:function(t,e,n){var r=n("ZWtO");t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},pSRY:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).has(t)}},tMB7:function(t,e,n){var r=n("y1pI");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},u8Dt:function(t,e,n){var r=n("YESw"),o="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===o?void 0:n}return a.call(e,t)?e[t]:void 0}},y1pI:function(t,e,n){var r=n("ljhN");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},zoYe:function(t,e,n){n("q8oJ"),n("C9fy"),n("8npG");var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),c=n("/9aa"),i=1/0,u=r?r.prototype:void 0,l=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(c(e))return l?l.call(e):"";var n=e+"";return"0"==n&&1/e==-i?"-0":n}}}]);
//# sourceMappingURL=component---src-pages-index-js-e3ae1f776f88ea403dd6.js.map