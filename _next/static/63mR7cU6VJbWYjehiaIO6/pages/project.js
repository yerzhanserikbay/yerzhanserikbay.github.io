(window.webpackJsonp=window.webpackJsonp||[]).push([["b11c"],{"/eQG":function(e,t,n){n("v5Dd");var i=n("WEpk").Object;e.exports=function(e,t){return i.getOwnPropertyDescriptor(e,t)}},"1uty":function(e,t,n){"use strict";var i="_erd";function r(e){return e[i]}e.exports={initState:function(e){return e[i]={},r(e)},getState:r,cleanState:function(e){delete e[i]}}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7sSR":function(e,t,n){"use strict";var i=n("t3DW").forEach,r=n("W+U1"),o=n("Sa1T"),a=n("LO96"),s=n("UFhH"),l=n("q7TX"),c=n("GOnX"),d=n("wnTG"),u=n("1uty"),h=n("GNKm"),f=n("yUZ2");function p(e){return Array.isArray(e)||void 0!==e.length}function m(e){if(Array.isArray(e))return e;var t=[];return i(e,function(e){t.push(e)}),t}function g(e){return e&&1===e.nodeType}function v(e,t,n){var i=e[t];return null==i&&void 0!==n?n:i}e.exports=function(e){var t;if((e=e||{}).idHandler)t={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var n=a(),b=s({idGenerator:n,stateHandler:u});t=b}var y=e.reporter;y||(y=l(!1===y));var w=v(e,"batchProcessor",d({reporter:y})),S={};S.callOnAdd=!!v(e,"callOnAdd",!0),S.debug=!!v(e,"debug",!1);var x,E=o(t),C=r({stateHandler:u}),k=v(e,"strategy","object"),z={reporter:y,batchProcessor:w,stateHandler:u,idHandler:t};if("scroll"===k&&(c.isLegacyOpera()?(y.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),k="object"):c.isIE(9)&&(y.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),k="object")),"scroll"===k)x=f(z);else{if("object"!==k)throw new Error("Invalid strategy name: "+k);x=h(z)}var O={};return{listenTo:function(e,n,r){function o(e){var t=E.get(e);i(t,function(t){t(e)})}function a(e,t,n){E.add(t,n),e&&n(t)}if(r||(r=n,n=e,e={}),!n)throw new Error("At least one element required.");if(!r)throw new Error("Listener required.");if(g(n))n=[n];else{if(!p(n))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=m(n)}var s=0,l=v(e,"callOnAdd",S.callOnAdd),c=v(e,"onReady",function(){}),d=v(e,"debug",S.debug);i(n,function(e){u.getState(e)||(u.initState(e),t.set(e));var h=t.get(e);if(d&&y.log("Attaching listener to element",h,e),!C.isDetectable(e))return d&&y.log(h,"Not detectable."),C.isBusy(e)?(d&&y.log(h,"System busy making it detectable"),a(l,e,r),O[h]=O[h]||[],void O[h].push(function(){++s===n.length&&c()})):(d&&y.log(h,"Making detectable..."),C.markBusy(e,!0),x.makeDetectable({debug:d},e,function(e){if(d&&y.log(h,"onElementDetectable"),u.getState(e)){C.markAsDetectable(e),C.markBusy(e,!1),x.addListener(e,o),a(l,e,r);var t=u.getState(e);if(t&&t.startSize){var f=e.offsetWidth,p=e.offsetHeight;t.startSize.width===f&&t.startSize.height===p||o(e)}O[h]&&i(O[h],function(e){e()})}else d&&y.log(h,"Element uninstalled before being detectable.");delete O[h],++s===n.length&&c()}));d&&y.log(h,"Already detecable, adding listener."),a(l,e,r),s++}),s===n.length&&c()},removeListener:E.removeListener,removeAllListeners:E.removeAllListeners,uninstall:function(e){if(!e)return y.error("At least one element is required.");if(g(e))e=[e];else{if(!p(e))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=m(e)}i(e,function(e){E.removeAllListeners(e),x.uninstall(e),u.cleanState(e)})}}}},FdMb:function(e,t,n){"use strict";function i(e,t,n,i){var r,o=!1,a=0;function s(){r&&clearTimeout(r)}function l(){var l=this,c=Date.now()-a,d=arguments;function u(){a=Date.now(),n.apply(l,d)}o||(i&&!r&&u(),s(),void 0===i&&c>e?u():!0!==t&&(r=setTimeout(i?function(){r=void 0}:u,void 0===i?e-c:e)))}return"boolean"!=typeof t&&(i=n,n=t,t=void 0),l.cancel=function(){s(),o=!0},l}function r(e,t,n){return void 0===n?i(e,t,!1):i(e,n,!1!==t)}n.r(t),n.d(t,"throttle",function(){return i}),n.d(t,"debounce",function(){return r})},GNKm:function(e,t,n){"use strict";var i=n("GOnX");e.exports=function(e){var t=(e=e||{}).reporter,n=e.batchProcessor,r=e.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function o(e){return r(e).object}return{makeDetectable:function(e,o,a){a||(a=o,o=e,e=null),(e=e||{}).debug,i.isIE(8)?a(o):function(e,o){var a="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",s=!1,l=window.getComputedStyle(e),c=e.offsetWidth,d=e.offsetHeight;function u(){function n(){if("static"===l.position){e.style.position="relative";var n=function(e,t,n,i){var r=n[i];"auto"!==r&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(r)&&(e.warn("An element that is positioned static has style."+i+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};n(t,e,l,"top"),n(t,e,l,"right"),n(t,e,l,"bottom"),n(t,e,l,"left")}}""!==l.position&&(n(),s=!0);var c=document.createElement("object");c.style.cssText=a,c.tabIndex=-1,c.type="text/html",c.setAttribute("aria-hidden","true"),c.onload=function(){s||n(),function e(t,n){t.contentDocument?n(t.contentDocument):setTimeout(function(){e(t,n)},100)}(this,function(t){o(e)})},i.isIE()||(c.data="about:blank"),e.appendChild(c),r(e).object=c,i.isIE()&&(c.data="about:blank")}r(e).startSize={width:c,height:d},n?n.add(u):u()}(o,a)},addListener:function(e,t){if(!o(e))throw new Error("Element is not detectable by this strategy.");function n(){t(e)}i.isIE(8)?(r(e).object={proxy:n},e.attachEvent("onresize",n)):o(e).contentDocument.defaultView.addEventListener("resize",n)},uninstall:function(e){i.isIE(8)?e.detachEvent("onresize",r(e).object.proxy):e.removeChild(o(e)),delete r(e).object}}}},GOnX:function(e,t,n){"use strict";var i=e.exports={};i.isIE=function(e){return(-1!==(t=navigator.userAgent.toLowerCase()).indexOf("msie")||-1!==t.indexOf("trident")||-1!==t.indexOf(" edge/"))&&(!e||e===function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}());var t},i.isLegacyOpera=function(){return!!window.opera}},Gytx:function(e,t){e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var d=e[c],u=t[c];if(!1===(r=n?n.call(i,d,u,c):void 0)||void 0===r&&d!==u)return!1}return!0}},IZOP:function(e,t,n){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=i(n("7sSR")),o=n("q1tI"),a=i(o),s=i(n("17x9")),l=i(n("i8i4")),c=i(n("QLaP")),d=n("FdMb"),u=i(n("Gytx")),h={};var f=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},v=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},y="react-sizeme: an error occurred whilst stopping to listen to node size changes",w={monitorWidth:!0,monitorHeight:!1,monitorPosition:!1,refreshRate:16,refreshMode:"throttle",noPlaceholder:!1,resizeDetectorStrategy:"scroll"};function S(e){return e.displayName||e.name||"Component"}var x=function(e){function t(){return f(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),p(t,[{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);function E(e){var t=e.className,n=e.style,i={};return t||n?(t&&(i.className=t),n&&(i.style=n)):i.style={width:"100%",height:"100%"},a.createElement("div",i)}x.displayName="SizeMeReferenceWrapper",x.propTypes={children:s.element.isRequired},E.displayName="SizeMePlaceholder",E.propTypes={className:s.string,style:s.object};var C=function(e){function t(t){var n=t.explicitRef,i=t.className,r=t.style,o=t.size,s=t.disablePlaceholder,l=(t.onSize,v(t,["explicitRef","className","style","size","disablePlaceholder","onSize"])),c=(null==o||null==o.width&&null==o.height&&null==o.position)&&!s,d={className:i,style:r};null!=o&&(d.size=o);var u=c?a.createElement(E,{className:i,style:r}):a.createElement(e,m({},d,l));return a.createElement(x,{ref:n},u)}return t.displayName="SizeMeRenderer("+S(e)+")",t.propTypes={explicitRef:s.func.isRequired,className:s.string,style:s.object,size:s.shape({width:s.number,height:s.number}),disablePlaceholder:s.bool,onSize:s.func},t};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=e.monitorWidth,n=void 0===t?w.monitorWidth:t,i=e.monitorHeight,o=void 0===i?w.monitorHeight:i,u=e.monitorPosition,v=void 0===u?w.monitorPosition:u,x=e.refreshRate,E=void 0===x?w.refreshRate:x,z=e.refreshMode,O=void 0===z?w.refreshMode:z,j=e.noPlaceholder,I=void 0===j?w.noPlaceholder:j,D=e.resizeDetectorStrategy,A=void 0===D?w.resizeDetectorStrategy:D;c(n||o||v,'You have to monitor at least one of the width, height, or position when using "sizeMe"'),c(E>=16,"It is highly recommended that you don't put your refreshRate lower than 16 as this may cause layout thrashing."),c("throttle"===O||"debounce"===O,'The refreshMode should have a value of "throttle" or "debounce"');var T="throttle"===O?d.throttle:d.debounce;return function(e){var t=C(e),i=function(e){function i(){var e,t,r;f(this,i);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return t=r=b(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(s))),r.domEl=null,r.state={width:void 0,height:void 0,position:void 0},r.uninstall=function(){if(r.domEl){try{r.detector.uninstall(r.domEl)}catch(e){console.warn(y)}r.domEl=null}},r.determineStrategy=function(e){e.onSize?(r.callbackState||(r.callbackState=m({},r.state)),r.strategy="callback"):r.strategy="render"},r.strategisedSetState=function(e){"callback"===r.strategy&&(r.callbackState=e,r.props.onSize(e)),r.setState(e)},r.strategisedGetState=function(){return"callback"===r.strategy?r.callbackState:r.state},r.refCallback=function(e){r.element=e},r.hasSizeChanged=function(e,t){var i=e,r=t,a=i.position||{},s=r.position||{};return n&&i.width!==r.width||o&&i.height!==r.height||v&&(a.top!==s.top||a.left!==s.left||a.bottom!==s.bottom||a.right!==s.right)},r.checkIfSizeChanged=T(E,function(e){var t=e.getBoundingClientRect(),i=t.width,a=t.height,s=t.right,l=t.left,c=t.top,d=t.bottom,u={width:n?i:null,height:o?a:null,position:v?{right:s,left:l,top:c,bottom:d}:null};r.hasSizeChanged(r.strategisedGetState(),u)&&r.strategisedSetState(u)}),b(r,t)}return g(i,e),p(i,[{key:"componentDidMount",value:function(){this.detector=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scroll";return h[e]||(h[e]=r({strategy:e})),h[e]}(A),this.determineStrategy(this.props),this.handleDOMNode()}},{key:"componentDidUpdate",value:function(){this.determineStrategy(this.props),this.handleDOMNode()}},{key:"componentWillUnmount",value:function(){this.hasSizeChanged=function(){},this.checkIfSizeChanged=function(){},this.uninstall()}},{key:"handleDOMNode",value:function(){var e=this.element&&l.findDOMNode(this.element);e?this.domEl?this.domEl.isSameNode(e)||(this.uninstall(),this.domEl=e,this.detector.listenTo(this.domEl,this.checkIfSizeChanged)):(this.domEl=e,this.detector.listenTo(this.domEl,this.checkIfSizeChanged)):this.uninstall()}},{key:"render",value:function(){var e=k.enableSSRBehaviour||k.noPlaceholders||I||"callback"===this.strategy,n=m({},this.state);return a.createElement(t,m({explicitRef:this.refCallback,size:"callback"===this.strategy?null:n,disablePlaceholder:e},this.props))}}]),i}(a.Component);return i.displayName="SizeMe("+S(e)+")",i.propTypes={onSize:s.func},i.WrappedComponent=e,i}}k.enableSSRBehaviour=!1,k.noPlaceholders=!1;var z=function(e){function t(e){f(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));O.call(n);e.children,e.render;var i=v(e,["children","render"]);return n.createComponent(i),n.state={size:{width:void 0,height:void 0}},n}return g(t,e),p(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=(t.children,t.render,v(t,["children","render"])),i=(e.children,e.render,v(e,["children","render"]));u(n,i)||this.createComponent(n)}},{key:"render",value:function(){var e=this.SizeAware,t=this.props.children||this.props.render;return a.createElement(e,{onSize:this.onSize},t({size:this.state.size}))}}]),t}(o.Component);z.propTypes={children:s.func,render:s.func},z.defaultProps={children:void 0,render:void 0};var O=function(){var e=this;this.createComponent=function(t){e.SizeAware=k(t)(function(e){return e.children})},this.onSize=function(t){return e.setState({size:t})}};k.SizeMe=z,k.withSize=k,e.exports=k},"Jo+v":function(e,t,n){e.exports=n("/eQG")},LO96:function(e,t,n){"use strict";e.exports=function(){var e=1;return{generate:function(){return e++}}}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,i,r,o,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,i,r,o,a,s],d=0;(l=new Error(t.replace(/%s/g,function(){return c[d++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},Sa1T:function(e,t,n){"use strict";e.exports=function(e){var t={};function n(n){var i=e.get(n);return void 0===i?[]:t[i]||[]}return{get:n,add:function(n,i){var r=e.get(n);t[r]||(t[r]=[]),t[r].push(i)},removeListener:function(e,t){for(var i=n(e),r=0,o=i.length;r<o;++r)if(i[r]===t){i.splice(r,1);break}},removeAllListeners:function(e){var t=n(e);t&&(t.length=0)}}}},UFhH:function(e,t,n){"use strict";e.exports=function(e){var t=e.idGenerator,n=e.stateHandler.getState;return{get:function(e){var t=n(e);return t&&void 0!==t.id?t.id:null},set:function(e){var i=n(e);if(!i)throw new Error("setId required the element to have a resize detection state.");var r=t.generate();return i.id=r,r}}}},UL9e:function(e,t,n){"use strict";(e.exports={}).getOption=function(e,t,n){var i=e[t];if(null==i&&void 0!==n)return n;return i}},"W+U1":function(e,t,n){"use strict";e.exports=function(e){var t=e.stateHandler.getState;return{isDetectable:function(e){var n=t(e);return n&&!!n.isDetectable},markAsDetectable:function(e){t(e).isDetectable=!0},isBusy:function(e){return!!t(e).busy},markBusy:function(e,n){t(e).busy=!!n}}}},b6cx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){var e=n("mI7R");return{page:e.default||e}}])},mI7R:function(e,t,n){"use strict";n.r(t);var i=n("0iUn"),r=n("sLSF"),o=n("MI3g"),a=n("a7VT"),s=n("AT/M"),l=n("Tit0"),c=n("vYYK"),d=n("q1tI"),u=n.n(d),h=n("IZOP"),f=n("nOHt"),p=n("5Yp1"),m=n("wR4/"),g=n("Jo+v"),v=n.n(g),b=n("4mXO"),y=n.n(b),w=n("pLtp"),S=n.n(w);function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=S()(n);"function"==typeof y.a&&(i=i.concat(y()(n).filter(function(e){return v()(n,e).enumerable}))),i.forEach(function(t){Object(c.a)(e,t,n[t])})}return e}var E=n("UXZV"),C=n.n(E),k=n("vOnD"),z=n("kOwS"),O=k.b.div.attrs({style:function(e){return{zIndex:e.zIndex,transform:"translateX(".concat(e.translateX,"px) scale(").concat(e.transformScale,")"),opacity:e.opacity,boxShadow:e.boxShadow}}}).withConfig({displayName:"StackCard__Card",componentId:"sc-3qz48g-0"})(["width:",";height:",";transition:",";border-radius:5px;position:absolute;transform-origin:50% -50%;& > *{width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:inherit;}"],function(e){return e.width?"".concat(e.width,"px"):"100%"},function(e){return e.height?"".concat(e.height,"px"):"100%"},function(e){return"all ".concat(e.animationDuration,"ms ease-in-out;")}),j=k.b.div.withConfig({displayName:"StackCard__CardContainer",componentId:"sc-3qz48g-1"})(["position:relative;width:",";height:",";padding-top:",";"],function(e){return e.width?"".concat(e.width,"px"):"100%"},function(e){return e.height?"".concat(e.height,"px"):"100%"},function(e){return"".concat(e.paddingTop,"px")}),I=function(e){var t=e.cardsArray,n=e.cards,i=e.width,r=e.height,o=e.transformScaleStep,a=e.maxVisibleCards,s=e.animationDuration;return u.a.createElement(j,{width:i,height:r,cardsAmount:t?t.length:0,paddingTop:r*Math.pow(o,a)-r},t&&t.map(function(e,t){return u.a.createElement(O,Object(z.a)({},n[t],{width:i,height:r,key:e.children.key,animationDuration:s}),e.children)}))};I.defaultProps={cardsArray:[]};var D=I,A=k.b.div.withConfig({displayName:"StackCardContainer__Container",componentId:"sc-10wzq6r-0"})(["display:flex;flex-direction:column;align-items:center;margin-top:18px;"]),T=k.b.div.withConfig({displayName:"StackCardContainer__ButtonsContainer",componentId:"sc-10wzq6r-1"})(["color:",";display:flex;justify-content:space-between;width:150px;margin-top:16px;"],function(e){return e.theme.colors.fontColor}),N=k.b.a.withConfig({displayName:"StackCardContainer__ControlButton",componentId:"sc-10wzq6r-2"})(["position:relative;color:",";text-decoration:none;border-bottom:1px dotted ",";user-select:none;:hover{font-weight:bold;cursor:pointer;}:active{top:2px;}"],function(e){return e.theme.colors.fontColor},function(e){return e.theme.colors.primaryColor}),P=function(e){function t(){var e,n;Object(i.default)(this,t);for(var r=arguments.length,l=new Array(r),d=0;d<r;d++)l[d]=arguments[d];return n=Object(o.default)(this,(e=Object(a.default)(t)).call.apply(e,[this].concat(l))),Object(c.a)(Object(s.default)(n),"state",{cards:{},topCardIndex:0,currentIndex:1,bottomCardIndex:0,disabled:!1}),Object(c.a)(Object(s.default)(n),"componentDidMount",function(){var e=n.props,t=e.maxVisibleCards,i=e.transformScaleStep,r=e.shadow,o=u.a.Children.toArray(n.props.children),a=t?1/t:1/o.length,s=o.reverse().map(function(e,n){return{zIndex:o.length-n,transformScale:n<t?1-i*n:1-i*(t-1),translateX:0,opacity:n<t?1-a*n:0,boxShadow:n<t&&r,children:e}}).reverse(),l=C()({},s);n.setState({cards:l,cardsArray:s,topCardIndex:s.length-1})}),Object(c.a)(Object(s.default)(n),"handleNextButtonClick",function(){var e=n.state,t=e.cards,i=e.cardsArray,r=e.topCardIndex,o=e.bottomCardIndex,a=e.currentIndex,s=n.props,l=s.cardShift,d=s.animationDuration;n.setState({disabled:!0,cards:x({},t,Object(c.a)({},r,x({},t[r],{translateX:l})))},function(){var e=i.map(function(e,n){return x({},n===r?t[o]:t[(n+1)%i.length],{translateX:0})});setTimeout(function(){n.setState({cards:C()({},e)},function(){n.setState({topCardIndex:0===r?i.length-1:r-1,bottomCardIndex:r,disabled:!1,currentIndex:a%i.length+1})})},d)})}),Object(c.a)(Object(s.default)(n),"handlePreviousButtonClick",function(){var e=n.state,t=e.cards,i=e.cardsArray,r=e.topCardIndex,o=e.bottomCardIndex,a=e.currentIndex,s=n.props,l=s.cardShift,d=s.animationDuration,u=i.map(function(e,n){return n===o?x({},t[r],{translateX:-1*l,zIndex:t[o].zIndex}):x({},t[0===n?i.length-1:n-1],{translateX:0})});n.setState({disabled:!0,cards:C()({},u)},function(){setTimeout(function(){n.setState({cards:x({},n.state.cards,Object(c.a)({},o,x({},n.state.cards[o],{translateX:0,zIndex:i.length})))},function(){return n.setState({topCardIndex:o,bottomCardIndex:o===i.length-1?0:o+1,disabled:!1,currentIndex:1===a?i.length:a-1})})},d)})}),n}return Object(l.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.state,t=e.cardsArray,n=e.cards,i=e.disabled,r=e.currentIndex,o=this.props,a=o.maxVisibleCards,s=o.transformScaleStep,l=o.animationDuration,c=o.width,d=o.height;return u.a.createElement(A,null,u.a.createElement(D,{cardsArray:t,cards:n,width:c,height:d,transformScaleStep:a,maxVisibleCards:s,animationDuration:l}),u.a.createElement(T,null,u.a.createElement(N,{onClick:i?null:this.handlePreviousButtonClick},"<"," prev"),r,"/",u.a.Children.toArray(this.props.children).length,u.a.createElement(N,{onClick:i?null:this.handleNextButtonClick},"next ",">")))}}]),t}(d.Component);P.defaultProps={maxVisibleCards:3,transformScaleStep:.1,cardShift:150,animationDuration:300,shadow:"0 5px 15px 0 rgba(0, 0, 0, 0.1)"};var _=P,M=n("JGD8"),L=function(e){function t(){var e,n;Object(i.default)(this,t);for(var r=arguments.length,l=new Array(r),d=0;d<r;d++)l[d]=arguments[d];return n=Object(o.default)(this,(e=Object(a.default)(t)).call.apply(e,[this].concat(l))),Object(c.a)(Object(s.default)(n),"state",{isDarkMode:!1}),n}return Object(l.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props.size.width>640?640:this.props.size.width-32,t=this.props.router.query.project;return u.a.createElement(p.a,{title:"".concat(t.name," — Yerzhan Serikbay"),isHomeLink:!0,isDarkMode:this.state.isDarkMode},u.a.createElement(_,{width:e,height:e/t.ratio,maxVisibleCards:4,cardShift:e/30,transformScaleStep:.05},t.images.map(function(e){return u.a.createElement("img",{src:e.src,alt:e.alt,key:e.key})})),u.a.createElement(m.a,{markdown:t.markdown}))}}],[{key:"getDerivedStateFromProps",value:function(){return{isDarkMode:Object(M.a)()}}}]),t}(u.a.Component);t.default=Object(h.withSize)()(Object(f.withRouter)(L))},q7TX:function(e,t,n){"use strict";e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},t3DW:function(e,t,n){"use strict";(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}},v5Dd:function(e,t,n){var i=n("NsO/"),r=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",function(){return function(e,t){return r(i(e),t)}})},wnTG:function(e,t,n){"use strict";var i=n("UL9e");function r(){var e={},t=0,n=0,i=0;return{add:function(r,o){o||(o=r,r=0),r>n?n=r:r<i&&(i=r),e[r]||(e[r]=[]),e[r].push(o),t++},process:function(){for(var t=i;t<=n;t++)for(var r=e[t],o=0;o<r.length;o++)(0,r[o])()},size:function(){return t}}}e.exports=function(e){var t=(e=e||{}).reporter,n=i.getOption(e,"async",!0),o=i.getOption(e,"auto",!0);o&&!n&&(t&&t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),n=!0);var a,s=r(),l=!1;function c(){for(l=!0;s.size();){var e=s;s=r(),e.process()}l=!1}function d(){var e;e=c,a=setTimeout(e,0)}return{add:function(e,t){!l&&o&&n&&0===s.size()&&d(),s.add(e,t)},force:function(e){l||(void 0===e&&(e=n),a&&(clearTimeout(a),a=null),e?d():c())}}}},yUZ2:function(e,t,n){"use strict";var i=n("t3DW").forEach;e.exports=function(e){var t=(e=e||{}).reporter,n=e.batchProcessor,r=e.stateHandler.getState,o=(e.stateHandler.hasState,e.idHandler);if(!n)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var a=function(){var e=document.createElement("div");e.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var t=document.createElement("div");t.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,i=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:i}}(),s="erd_scroll_detection_container";function l(e,n,i){if(e.addEventListener)e.addEventListener(n,i);else{if(!e.attachEvent)return t.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+n,i)}}function c(e,n,i){if(e.removeEventListener)e.removeEventListener(n,i);else{if(!e.detachEvent)return t.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+n,i)}}function d(e){return r(e).container.childNodes[0].childNodes[0].childNodes[0]}function u(e){return r(e).container.childNodes[0].childNodes[0].childNodes[1]}return function(e,t){if(!document.getElementById(e)){var n=t+"_animation",i=t+"_animation_active",r="/* Created by the element-resize-detector library. */\n";r+="."+t+" > div::-webkit-scrollbar { display: none; }\n\n",r+="."+i+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",r+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",function(t,n){n=n||function(e){document.head.appendChild(e)};var i=document.createElement("style");i.innerHTML=t,i.id=e,n(i)}(r+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}}("erd_scroll_detection_scrollbar_style",s),{makeDetectable:function(e,c,h){function f(){if(e.debug){var n=Array.prototype.slice.call(arguments);if(n.unshift(o.get(c),"Scroll: "),t.log.apply)t.log.apply(null,n);else for(var i=0;i<n.length;i++)t.log(n[i])}}function p(e){var t=r(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function m(){var e=window.getComputedStyle(c),t={};return t.position=e.position,t.width=c.offsetWidth,t.height=c.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function g(){if(f("storeStyle invoked."),r(c)){var e=m();r(c).style=e}else f("Aborting because element has been uninstalled")}function v(e,t,n){r(e).lastWidth=t,r(e).lastHeight=n}function b(){return 2*a.width+1}function y(){return 2*a.height+1}function w(e){return e+10+b()}function S(e){return e+10+y()}function x(e,t,n){var i=d(e),r=u(e),o=w(t),a=S(n),s=function(e){return 2*e+b()}(t),l=function(e){return 2*e+y()}(n);i.scrollLeft=o,i.scrollTop=a,r.scrollLeft=s,r.scrollTop=l}function E(){var e=r(c).container;if(!e){(e=document.createElement("div")).className=s,e.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",r(c).container=e,function(e){e.className+=" "+s+"_animation_active"}(e),c.appendChild(e);var t=function(){r(c).onRendered&&r(c).onRendered()};l(e,"animationstart",t),r(c).onAnimationStart=t}return e}function C(){if(f("Injecting elements"),r(c)){!function(){var e=r(c).style;if("static"===e.position){c.style.position="relative";var n=function(e,t,n,i){var r=n[i];"auto"!==r&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(r)&&(e.warn("An element that is positioned static has style."+i+"="+r+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};n(t,c,e,"top"),n(t,c,e,"right"),n(t,c,e,"bottom"),n(t,c,e,"left")}}();var e=r(c).container;e||(e=E());var n,i,o,d,u=a.width,h=a.height,p="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; left: "+(n=(n=-(1+u))?n+"px":"0")+"; top: "+(i=(i=-(1+h))?i+"px":"0")+"; right: "+(d=(d=-u)?d+"px":"0")+"; bottom: "+(o=(o=-h)?o+"px":"0")+";",m=document.createElement("div"),g=document.createElement("div"),v=document.createElement("div"),b=document.createElement("div"),y=document.createElement("div"),w=document.createElement("div");m.dir="ltr",m.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",m.className=s,g.className=s,g.style.cssText=p,v.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",b.style.cssText="position: absolute; left: 0; top: 0;",y.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",w.style.cssText="position: absolute; width: 200%; height: 200%;",v.appendChild(b),y.appendChild(w),g.appendChild(v),g.appendChild(y),m.appendChild(g),e.appendChild(m),l(v,"scroll",S),l(y,"scroll",x),r(c).onExpandScroll=S,r(c).onShrinkScroll=x}else f("Aborting because element has been uninstalled");function S(){r(c).onExpand&&r(c).onExpand()}function x(){r(c).onShrink&&r(c).onShrink()}}function k(){function a(e,t,n){var i=function(e){return d(e).childNodes[0]}(e),r=w(t),o=S(n);i.style.width=r+"px",i.style.height=o+"px"}function s(i){var s=c.offsetWidth,d=c.offsetHeight;f("Storing current size",s,d),v(c,s,d),n.add(0,function(){if(r(c))if(l()){if(e.debug){var n=c.offsetWidth,i=c.offsetHeight;n===s&&i===d||t.warn(o.get(c),"Scroll: Size changed before updating detector elements.")}a(c,s,d)}else f("Aborting because element container has not been initialized");else f("Aborting because element has been uninstalled")}),n.add(1,function(){r(c)?l()?x(c,s,d):f("Aborting because element container has not been initialized"):f("Aborting because element has been uninstalled")}),i&&n.add(2,function(){r(c)?l()?i():f("Aborting because element container has not been initialized"):f("Aborting because element has been uninstalled")})}function l(){return!!r(c).container}function h(){f("notifyListenersIfNeeded invoked");var e=r(c);return void 0===r(c).lastNotifiedWidth&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?f("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?f("Not notifying: Size already notified"):(f("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void i(r(c).listeners,function(e){e(c)}))}function m(){if(f("Scroll detected."),p(c))f("Scroll event fired while unrendered. Ignoring...");else{var e=c.offsetWidth,t=c.offsetHeight;e!==r(c).lastWidth||t!==r(c).lastHeight?(f("Element size changed."),s(h)):f("Element size has not changed ("+e+"x"+t+").")}}if(f("registerListenersAndPositionElements invoked."),r(c)){r(c).onRendered=function(){if(f("startanimation triggered."),p(c))f("Ignoring since element is still unrendered...");else{f("Element rendered.");var e=d(c),t=u(c);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(f("Scrollbars out of sync. Updating detector elements..."),s(h))}},r(c).onExpand=m,r(c).onShrink=m;var g=r(c).style;a(c,g.width,g.height)}else f("Aborting because element has been uninstalled")}function z(){if(f("finalizeDomMutation invoked."),r(c)){var e=r(c).style;v(c,e.width,e.height),x(c,e.width,e.height)}else f("Aborting because element has been uninstalled")}function O(){h(c)}function j(){var e;f("Installing..."),r(c).listeners=[],e=m(),r(c).startSize={width:e.width,height:e.height},f("Element start size",r(c).startSize),n.add(0,g),n.add(1,C),n.add(2,k),n.add(3,z),n.add(4,O)}h||(h=c,c=e,e=null),e=e||{},f("Making detectable..."),function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===window.getComputedStyle(e)}(c)?(f("Element is detached"),E(),f("Waiting until element is attached..."),r(c).onRendered=function(){f("Element is now attached"),j()}):j()},addListener:function(e,t){if(!r(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");r(e).listeners.push(t)},uninstall:function(e){var t=r(e);t&&(t.onExpandScroll&&c(d(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&c(u(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&c(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}}}}},[["b6cx","5d41","9da1"]]]);