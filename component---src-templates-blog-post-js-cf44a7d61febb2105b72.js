"use strict";(self.webpackChunkjennybrennan_github_io=self.webpackChunkjennybrennan_github_io||[]).push([[989],{9230:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return f},M:function(){return C},P:function(){return E},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function u(e,t,a,r,n){return void 0===n&&(n={}),c()||(n=o({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},n)),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){var u={};i&&(u.backgroundColor=i,"fixed"===a?(u.width=r,u.height=n,u.backgroundColor=i,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d}var p,m=["children"],g=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(g,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return r.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},w=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],E=function(e){var t=e.fallback,a=s(e,b);return t?r.createElement(w,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(p=w.propTypes)?void 0:p.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var C=function(e){return r.createElement(r.Fragment,null,r.createElement(w,o({},e)),r.createElement("noscript",null,r.createElement(w,o({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=w.propTypes;var L,I,S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],x=new Set,A=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,u=e.style,d=e.backgroundColor,p=e.className,m=e.class,g=e.onStartLoad,f=e.onLoad,h=e.onError,y=s(e,T),v=i.width,w=i.height,b=i.layout,E=function(e,t,a){var r={},n="gatsby-image-wrapper";return c()||(r.position="relative",r.overflow="hidden"),"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(c()||(r.display="inline-block",r.verticalAlign="top"),n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,w,b),C=E.style,S=E.className,k=s(E,_),A=(0,r.useRef)(),O=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(p=m);var N=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,v,w);return(0,r.useEffect)((function(){L||(L=Promise.all([a.e(774),a.e(36)]).then(a.bind(a,9036)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=A.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void x.add(O)):I&&x.has(O)?void 0:(L.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;A.current.innerHTML=r(o({isLoading:!0,isLoaded:x.has(O),image:i},y)),x.has(O)||(e=requestAnimationFrame((function(){A.current&&(t=n(A.current,O,x,u,g,f,h))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){x.has(O)&&I&&(A.current.innerHTML=I(o({isLoading:x.has(O),isLoaded:x.has(O),image:i},y)),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},k,{style:o({},C,u,{backgroundColor:d}),className:S+(p?" "+p:""),ref:A,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(c(),(0,r.createElement)(A,e)):null}));O.propTypes=k,O.displayName="GatsbyImage";var N,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],R=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:S,width:R,height:R,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(N=O,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,q);return n&&console.warn(n),a?r.createElement(N,o({image:a},i)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=z},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},4982:function(e,t,a){a.r(t);var r=a(1721),n=a(7294),i=a(8759),o=a(8678),s=a(7540),l=a(9230),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t="https://jennybrennan.com"+e.fields.slug;return n.createElement(o.Z,null,e.frontmatter.featuredImage?n.createElement(s.Z,{title:e.frontmatter.title,desc:e.frontmatter.desc,canonical:t,image:e.frontmatter.featuredImage.childImageSharp.gatsbyImageData.getSrc}):n.createElement(s.Z,{title:e.frontmatter.title,desc:e.frontmatter.desc,canonical:t}),n.createElement("article",null,e.frontmatter.featuredImage&&n.createElement(l.G,{image:e.frontmatter.featuredImage.childImageSharp.gatsbyImageData,className:"blog-robot"}),n.createElement("h1",null,e.frontmatter.title),n.createElement("h3",{className:"subheading"},e.frontmatter.desc),n.createElement("main",null,n.createElement("article",null,n.createElement("small",null,e.frontmatter.date),n.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),n.createElement(i.default,{to:"/",className:"read-all"},"← Read all posts")))))},t}(n.Component);t.default=c}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cf44a7d61febb2105b72.js.map