(self.webpackChunkbowie=self.webpackChunkbowie||[]).push([[627],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},5133:function(e,t,n){"use strict";n.d(t,{v:function(){return d}});var r=n(7294),o=n(5444),i=n(8),a=n(9),c=function(e){var t=e.open,n=(0,o.K2)("2159846095").completedata.headers[0],a=n.homebtn,c=n.photos,u=n.tracks,s=n.release;return r.createElement("div",null,r.createElement(i.W_,{open:t},r.createElement(i.LY,{to:"/"},a),r.createElement(i.LY,{to:"/Photos"},c),r.createElement(i.LY,{to:"/#tracks"},u),r.createElement(o.rU,{to:"/Buy"},r.createElement(i.eX,null,s))))},u=a.default.div.withConfig({displayName:"burguer__StyledBurger",componentId:"sc-62196t-0"})(["width:10vw;height:7vh;position:fixed;top:15px;right:20px;z-index:20;display:none;@media (max-width:768px){display:flex;justify-content:space-around;flex-flow:column nowrap;}div{width:2rem;height:0.25rem;background-color:",";border-radius:10px;transform-origin:1px;transition:all 0.3s linear;&:nth-child(1){transform:",";}&:nth-child(2){transform:",";opacity:",";}&:nth-child(3){transform:",";}}"],(function(e){return e.open?"#ccc":"#ddd"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),s=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return r.createElement(r.Fragment,null,r.createElement(u,{open:t,onClick:function(){return n(!t)}},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null)),r.createElement(c,{open:t}))},l=a.default.nav.withConfig({displayName:"navbar__Nav",componentId:"sc-tw1mpu-0"})(["z-index:9999;@media (min-width:600px){display:none;}"]),f=function(){return r.createElement(l,null,r.createElement(s,null))};function d(){var e=(0,o.K2)("4119400945").completedata.headers[0],t=e.homebtn,n=e.logo,a=e.photos,c=e.shows,u=e.tracks,s=e.release,l=e.about;return r.createElement(i.v2,null,r.createElement(i.xg,null,r.createElement(i.LY,{to:"/"},r.createElement("img",{src:n.url,alt:""}))),r.createElement(i.W_,null,r.createElement(i.LY,{to:"/"},t),r.createElement(i.LY,{to:"/Photos"},a),r.createElement(i.LY,{to:"/#tracks"},u),r.createElement(i.LY,{to:"/#shows"},c),r.createElement(i.LY,{to:"/#about"},l),r.createElement(o.rU,{to:"/Buy"},r.createElement(i.eX,null,s))),r.createElement(f,null))}},8:function(e,t,n){"use strict";n.d(t,{W2:function(){return i},v2:function(){return a},xg:function(){return c},W_:function(){return u},LY:function(){return s},eX:function(){return l},$e:function(){return f},gB:function(){return d}});var r=n(9),o=n(5444),i=r.default.header.withConfig({displayName:"style__Container",componentId:"sc-17udbjj-0"})(["width:100%"]),a=r.default.section.withConfig({displayName:"style__Menu",componentId:"sc-17udbjj-1"})(["height:12vh;width:100%;background-color:#000;display:flex;align-items:center;justify-content:space-evenly;position:fixed;top:0;z-index:10;"]),c=r.default.div.withConfig({displayName:"style__LogoContainer",componentId:"sc-17udbjj-2"})(["width:20%;display:flex;align-items:center;justify-content:center;img{width:50%;cursor:pointer;}@media (max-width:600px){width:70%;img{width:40%;}}"]),u=r.default.div.withConfig({displayName:"style__Navigation",componentId:"sc-17udbjj-3"})(["width:45%;height:100%;display:flex;align-items:center;justify-content:space-around;@media (max-width:600px){flex-flow:column nowrap;position:fixed;top:0;right:0;padding-top:3.5rem;height:100vh;width:300px;background-color:#0D2538;transform:",";transition:transform 0.3s ease-in-out;}"],(function(e){return e.open?"translateX(0)":"translateX(100%)"})),s=(0,r.default)(o.rU).withConfig({displayName:"style__NavItem",componentId:"sc-17udbjj-4"})(["font-size:1.3vw;& p:hover{color:#e8ca11;transition:all 0.3s ease 0s;animation:5s ease 0s 1 normal none running;}p{cursor:pointer;}@media (max-width:600px){font-size:7vw;}"]),l=r.default.button.withConfig({displayName:"style__Navbtn",componentId:"sc-17udbjj-5"})(['width:10vw;height:6vh;font-size:1.1vw;font-weight:bold;cursor:pointer;transition:all 0.3s ease;position:relative;display:inline-block;outline:none;border-radius:5px;z-index:0;background:black;overflow:hidden;border:2px solid darkgoldenrod;color:#fff;&:hover{color:#0E0D12;}&:hover:after{height:100%;}&:after{content:"";position:absolute;z-index:-1;transition:all 0.5s ease;left:0;bottom:0;height:0;width:100%;background:darkgoldenrod;}@media (max-width:600px){width:50vw;height:10vh;font-size:5vw;}']),f=r.default.section.withConfig({displayName:"style__HeaderIntro",componentId:"sc-17udbjj-6"})(["height:100vh;margin-top:12vh;background-size:cover;background-position:center;display:flex;align-items:center;justify-content:start;"]),d=r.default.div.withConfig({displayName:"style__TextIntro",componentId:"sc-17udbjj-7"})(["width:40%;height:50%;font-weight:400;margin-left:6%;margin-top:5%;display:flex;flex-direction:column;align-items:start;justify-content:center;animation:2s slide-right 1s forwards;transform:translateX(-120%);@keyframes slide-right{to{transform:translateX(0);}}h1{width:90%;font-size:3.2vw;margin-bottom:1.5vh;color:darkgoldenrod;text-shadow:3px 2px black;}h2{font-size:1.5vw;font-family:'Roboto',sans-serif;margin-bottom:2vh;text-shadow:3px 2px black;}p{color:#fff;font-size:1.2vw;margin-bottom:7vh;text-shadow:1px 2px black;}button{width:40%;padding:1vh 1vw;font-size:1.6vw;color:#000;background-color:#8B5937;border:transparent solid;border-radius:10px;transition:all 0.3s ease;position:relative;display:inline-block;&:hover{color:#fff;background-color:darkgoldenrod;transition:all 0.4s ease 0s;animation:5s ease 0s 1 normal none running;transform:scale(1.05);cursor:pointer;}&:hover:after{height:100%;}&:after{content:\"\";position:absolute;z-index:-1;transition:all 0.5s ease;left:0;bottom:0;height:0;width:100%;background:darkgoldenrod;}}@media (max-width:600px){width:80%;margin-top:0;justify-content:start;h1{font-size:7vw;}h2{font-size:3.3vw;margin-bottom:40%;}p{display:none;}button{width:110%;padding:2vh 1vw;font-size:5vw;}@media (max-width:400px){h2{margin-bottom:70%;}}}"])},1647:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r,o,i,a,c=n(7294),u=n(5697),s=n.n(u),l=n(4839),f=n.n(l),d=n(2993),p=n.n(d),h=n(6494),m=n.n(h),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",x="http-equiv",C="innerHTML",j="itemprop",A="name",O="property",S="rel",k="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",N="encodeSpecialCharacters",z="onChangeClientState",_="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),Y=[v.NOSCRIPT,v.SCRIPT,v.STYLE],R="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=J(e,v.TITLE),n=J(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,P);return t||r||void 0},G=function(e){return J(e,z)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===S&&"canonical"===e[n].toLowerCase()||u===S&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==T&&c!==j||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(v.BODY,r),ue(v.HTML,o),ce(f,d);var p={baseTag:se(v.BASE,n),linkTags:se(v.LINK,i),metaTags:se(v.META,a),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(v.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(R):n.getAttribute(R)!==a.join(",")&&n.setAttribute(R,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(R,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,o=fe(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,o,r),link:de(v.LINK,i,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,u,r),style:de(v.STYLE,s,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},he=f()((function(e){return{baseTag:Q([E,I],e),bodyAttributes:K(y,e),defer:J(e,M),encode:J(e,N),htmlAttributes:K(g,e),linkTags:V(v.LINK,[S,E],e),metaTags:V(v.META,[A,w,x,O,j],e),noscriptTags:V(v.NOSCRIPT,[C],e),onChangeClientState:G(e),scriptTags:V(v.SCRIPT,[k,C],e),styleTags:V(v.STYLE,[T],e),title:X(e),titleAttributes:K(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),me=(o=he,a=i=function(e){function t(){return H(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return F({},o,((t={})[r.type]=a,t.titleAttributes=F({},i),t));case v.BODY:return F({},o,{bodyAttributes:F({},i)});case v.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;function ye(){return c.createElement("div",null,c.createElement(me,null,c.createElement("style",null,"@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');"),c.createElement("title",null,"ZIGGY STARDUST"),c.createElement("link",{rel:"shortcut icon",href:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWZjYzAwO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyMi44OCA5IDE4LjI3IDM1LjQ1IDI3LjQ4IDM1LjQ1IDIyLjg4IDU1IDQ0LjczIDI3LjQgMzQuMzggMjcuNCA0My41OCA5IDIyLjg4IDkiLz48L3N2Zz4=",type:"image/x-icon"})))}}}]);
//# sourceMappingURL=e5243fa66c75756f1a81a466d99957bf584b86ef-5265a296110a581337c3.js.map