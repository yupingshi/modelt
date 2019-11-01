/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

;/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map

;/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;(function() {
    'use strict';

    var Utils = function() {
        this.retries = 0;
        this.timeout = 100;
    };

    Utils.prototype = {
        baseAjax: function(params) {
            //url, callback, formatData, errorCallback
            var self = this;
            var xhr = new XMLHttpRequest();
            var mime = params.mime ? params.mime : 'application/json';
            xhr.overrideMimeType(mime);
            xhr.open('GET', params.url, true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var data = params.formatData ?
                        params.formatData(xhr.responseText) :
                        xhr.responseText;
                    if (data.length > 0) {
                        return params.callback(data);
                    } else {
                        console.error('Error retrieving data', xhr.responseText);
                        return params.callback(false);
                    }
                } else {
                    if (self.retries < 9) {
                        setTimeout(function() {
                            params.errorCallback(xhr.status);
                            self.timeout *= 2;
                            self.retries += 1;
                        }, self.timeout);
                    } else {
                        console.error('Error retrieving data', xhr.responseText);
                    }
                }
            };
            xhr.onerror = function() {
                console.error('Error xhr request');
            };
            xhr.send(null);
        },
        getHtmlServiceData: function(params) {
            var self = this;

            var url = encodeURI(
                params.auth.baseUrl +
                '/v1/content/' +
                params.auth.store +
                '/content-item/' +
                params.auth.id +
                '?template=' +
                params.auth.templateName+
                '&locale='+params.auth.locale

            );

            return this.baseAjax({
                url: url,
                callback: function(data) {
                    params.callback(data);
                },
                errorCallback: function() {
                    self.getHtmlServiceData(params);
                }
            });
        },
        postProcessing: {
            execHtmlService: function(renderName, params) {
                var self = this;
                if(self.htmlServiceDependencies[renderName]){
                    self.htmlServiceDependencies[renderName].forEach(function (fixName) {
                        self.handlers[fixName](params);
                    });
                }
            },
            htmlServiceDependencies: {
                slider: [
                    'fixVideoButton',
                    'fixAndroidSwipeOverTheVideo',
                    'bannerStyle'
                ],
                video: ['fixVideoButton'],
                splitBlock: ['fixVideoButton',  'bannerStyle', 'split'],
                blog: ['fixVideoButton', 'bannerStyle', 'split'],
                homepage: [
                    'fixVideoButton',
                    'fixAndroidSwipeOverTheVideo',
                    'promoBanner',
                    'bannerStyle',
                    'split'
                ],
                specialofferbanner:[
                    'bannerStyle'
                ],
                promoBanner: ['promoBanner'],
                banner: ['bannerStyle'],
                containerWithMultipleContentTypes:[
                    'fixVideoButton',
                    'fixAndroidSwipeOverTheVideo',
                    'promoBanner',
                    'bannerStyle',
                    'split'
                ]
            },
            handlers: {
                split: function() {
                    var splitClass = function(index, split) {
                        if (typeof split === 'undefined') {
                            return '';
                        }
                        var id = parseInt(index, 10);
                        var splitter = split.split('/');
                        if (id === 0) {
                            return 'amp-dc-size-' + splitter[0];
                        }
                        return 'amp-dc-size-' + splitter[1];
                    };

                    var splitBlock = [].slice.call(
                        document.querySelectorAll('.amp-dc-splitBlock')
                    );
                    if (splitBlock.length < 1) {
                        return;
                    }

                    splitBlock.forEach(function(split) {
                        var needle = 'js_dc_split-';
                        var className = split.className;
                        var splitPosition = className.indexOf(needle);

                        if (splitPosition == -1) {
                            return;
                        }

                        var splitPercentage = className.substring(
                            splitPosition + needle.length,
                            className.length
                        );

                        var splitParts = [].slice.call(
                            split.querySelectorAll('.amp-dc-split-part')
                        );

                        if (splitParts.length > 1) {
                            splitParts.forEach(function(splitPart, ind) {
                                var addClass = splitClass(ind, splitPercentage).trim();
                                splitPart.classList.add(addClass);
                            });
                        }
                    });
                },
                bannerStyle: function(opts) {
                    var bannerSections = [].slice.call(
                        document.querySelectorAll('.amp-dc-banner-info')
                    );

                    if (bannerSections.length < 1) {
                        return;
                    }

                    var setStyle = function(opts) {
                        var style = '';
                        var hex = opts.bannerColor || '#fff';
                        var alpha = opts.bannerOpacity || 1;
                        var hex = hex.replace('#', '');

                        if (hex.length === 3) {
                            var hexArr = hex.split('');
                            hex = hexArr[0] + hexArr[0];
                            hex += hexArr[1] + hexArr[1];
                            hex += hexArr[2] + hexArr[2];
                        }

                        var r = parseInt(hex.slice(0, 2), 16);
                        var g = parseInt(hex.slice(2, 4), 16);
                        var b = parseInt(hex.slice(4, 6), 16);

                        if (alpha) {
                            style +=
                                'background-color:rgba(' +
                                r +
                                ', ' +
                                g +
                                ', ' +
                                b +
                                ', ' +
                                alpha +
                                '); ';
                        } else {
                            style +=
                                'background-color:rgb(' + r + ', ' + g + ', ' + b + '); ';
                        }

                        if (opts.textColour) {
                            style += 'color: #' + opts.textColour;
                        }

                        return style;
                    };

                    bannerSections.forEach(function(bannerSection) {
                        bannerSection.setAttribute(
                            'style',
                            setStyle({
                                bannerColor: bannerSection.getAttribute('data-color'),
                                bannerOpacity: bannerSection.getAttribute('data-opacity'),
                                textColour: bannerSection.getAttribute('data-txtcolor')
                            })
                        );
                    });
                },
                // showdown: function() {
                //     var textNodes = [].slice.call(
                //         document.querySelectorAll('.amp-dc-text')
                //     );

                //     if (textNodes.length < 1) {
                //         return;
                //     }

                //     if (typeof showdown === 'undefined') {
                //         return html || '';
                //     }

                //     var converter = new showdown.Converter({
                //         noHeaderId: true,
                //         simpleLineBreaks: true
                //     });

                //     textNodes.forEach(function(textNode) {
                //         textNode.innerHTML = converter.makeHtml(textNode.innerHTML.trim());
                //     });
                // },
                promoBanner: function() {
                    var promoBanner = function($node) {
                        var $children = [].slice.call(
                            $node.querySelectorAll('.amp-dc-promo-block')
                        );
                        var currentItemNum = 2;
                        var winWidth = window.innerWidth;

                        if ($children.length < 2) {
                            $children[0].classList.add('dc-fade-in');
                            return;
                        }

                        $children.forEach(function($child) {
                            $children[currentItemNum - 1].classList.remove('dc-fade-in');
                        });

                        $children[currentItemNum - 1].classList.add('dc-fade-in');

                        var getNextItem = function() {
                            if (currentItemNum === $children.length) {
                                currentItemNum = 1;
                            } else {
                                currentItemNum += 1;
                            }

                            return currentItemNum - 1;
                        };

                        var interval = setInterval(function() {
                            winWidth = window.innerWidth;
                            var $fadedElems = [].slice.call(
                                $node.querySelectorAll('.dc-fade-in')
                            );
                            if (winWidth > 768) {
                                return;
                            }

                            var itemToShow = getNextItem();
                            if ($fadedElems.length > 0) {
                                $fadedElems.forEach(function($fadeElem) {
                                    $fadeElem.classList.remove('dc-fade-in');
                                });
                            }
                            $children[itemToShow].classList.add('dc-fade-in');
                        }, 5000);
                    };
                    var arr = [].slice.call(
                        document.querySelectorAll('.amp-dc-promo-banner-wrap')
                    );
                    arr.forEach(function($node) {
                        promoBanner($node);
                    });
                },
                fixAndroidSwipeOverTheVideo: function() {
                    if (navigator.userAgent.match(/Android/i)) {
                        var videos = document.querySelectorAll(
                            '.amp-dc-slider .amp-dc-video'
                        );
                        videos = Array.prototype.slice.call(videos, 0);
                        videos.forEach(function(video, ix) {
                            var overlay = document.createElement('div');
                            overlay.style.width = video.clientWidth + 'px';
                            overlay.style.height = video.clientHeight - 30 + 'px';
                            overlay.style.marginBottom = -video.clientHeight + 30 + 'px';
                            overlay.className = 'inactive-video';
                            video.parentNode.parentNode.insertBefore(
                                overlay,
                                video.parentNode
                            );
                            overlay.addEventListener('click', function() {
                                overlay.classList.add('no-overlay');
                                video.play();
                            });
                            video.addEventListener('pause', function() {
                                overlay.classList.remove('no-overlay');
                            });
                            window.addEventListener('resize', function() {
                                overlay.style.width = video.clientWidth + 'px';
                                overlay.style.height = video.clientHeight - 30 + 'px';
                                overlay.style.marginBottom = -video.clientHeight + 30 + 'px';
                            });
                        });
                    }
                },
                fixVideoButton: function() {
                    var videos = document.querySelectorAll('.amp-dc-video');
                    videos = Array.prototype.slice.call(videos, 0);
                    var pauseButtons = document.querySelectorAll('.pause-button');
                    pauseButtons = Array.prototype.slice.call(pauseButtons, 0);
                    var ev = 'click';

                    if (!pauseButtons || !pauseButtons.length) {
                        return false;
                    }

                    if (navigator.userAgent.match(/(iPad)|(iPhone)|(Android)/i)) {
                        ev = 'touchstart';
                    } else {
                        pauseButtons.forEach(function(item) {
                            item.classList.remove('inactive');
                        });
                    }
                    if (navigator.userAgent.match(/Android/i)) {
                        videos.forEach(function(video) {
                            video.addEventListener(ev, function() {
                                var self = this;
                                self.paused ?
                                    setTimeout(function() {
                                        self.play();
                                    }, 1) :
                                    setTimeout(function() {
                                        self.pause();
                                    }, 1);
                            });
                        });
                    } else {
                        var lock = [];
                        var lockInit = function(ix) {
                            lock[ix] = true;
                            setTimeout(function() {
                                lock[ix] = false;
                            }, 200);
                        };
                        videos.forEach(function(video, ix) {
                            lock[ix] = false;
                            video.addEventListener(
                                ev,
                                (function() {
                                    return function() {
                                        if (!lock[ix]) {
                                            if (videos[ix].paused) {
                                                lockInit(ix);
                                                setTimeout(function() {
                                                    videos[ix].paused ? videos[ix].play() : '';
                                                }, 200);
                                            } else {
                                                lockInit(ix);
                                                setTimeout(function() {
                                                    videos[ix].pause();
                                                }, 200);
                                            }
                                        }
                                    };
                                })(ix)
                            );
                            video.addEventListener('pause', function() {
                                pauseButtons[ix].classList.remove('inactive');
                            });
                            video.addEventListener('play', function() {
                                pauseButtons[ix].classList.add('inactive');
                            });
                            pauseButtons[ix].addEventListener(ev, function() {
                                if (!lock[ix]) {
                                    videos[ix].paused ?
                                        setTimeout(function() {
                                            videos[ix].play();
                                        }, 1) :
                                        setTimeout(function() {
                                            videos[ix].pause();
                                        }, 1);
                                    lockInit(ix);
                                }
                            });
                        });
                    }
                }
            }
        },
        constructor: Utils
    };

    window.AmpCa = window.AmpCa || {};
    window.AmpCa.Utils = Utils;
})();

/*===========================
 Utils AMD Export
 ===========================*/
if (typeof module !== 'undefined') {
    module.exports = window.AmpCa.Utils;
} else if (typeof define === 'function' && define.amd) {
    define([], function() {
        'use strict';
        return window.AmpCa.Utils;
    });
}
;!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

;/*!
 * jQuery UI Core 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function( $, undefined ) {

    var uuid = 0,
        runiqueId = /^ui-id-\d+$/;
    
    // $.ui might exist from components with no dependencies, e.g., $.ui.position
    $.ui = $.ui || {};
    
    $.extend( $.ui, {
        version: "1.10.3",
    
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    
    // plugins
    $.fn.extend({
        focus: (function( orig ) {
            return function( delay, fn ) {
                return typeof delay === "number" ?
                    this.each(function() {
                        var elem = this;
                        setTimeout(function() {
                            $( elem ).focus();
                            if ( fn ) {
                                fn.call( elem );
                            }
                        }, delay );
                    }) :
                    orig.apply( this, arguments );
            };
        })( $.fn.focus ),
    
        scrollParent: function() {
            var scrollParent;
            if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                scrollParent = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test($.css(this,"position")) && (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
                }).eq(0);
            } else {
                scrollParent = this.parents().filter(function() {
                    return (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
                }).eq(0);
            }
    
            return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
        },
    
        zIndex: function( zIndex ) {
            if ( zIndex !== undefined ) {
                return this.css( "zIndex", zIndex );
            }
    
            if ( this.length ) {
                var elem = $( this[ 0 ] ), position, value;
                while ( elem.length && elem[ 0 ] !== document ) {
                    // Ignore z-index if position is set to a value where z-index is ignored by the browser
                    // This makes behavior of this function consistent across browsers
                    // WebKit always returns auto if the element is positioned
                    position = elem.css( "position" );
                    if ( position === "absolute" || position === "relative" || position === "fixed" ) {
                        // IE returns 0 when zIndex is not specified
                        // other browsers return a string
                        // we ignore the case of nested elements with an explicit value of 0
                        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                        value = parseInt( elem.css( "zIndex" ), 10 );
                        if ( !isNaN( value ) && value !== 0 ) {
                            return value;
                        }
                    }
                    elem = elem.parent();
                }
            }
    
            return 0;
        },
    
        uniqueId: function() {
            return this.each(function() {
                if ( !this.id ) {
                    this.id = "ui-id-" + (++uuid);
                }
            });
        },
    
        removeUniqueId: function() {
            return this.each(function() {
                if ( runiqueId.test( this.id ) ) {
                    $( this ).removeAttr( "id" );
                }
            });
        }
    });
    
    // selectors
    function focusable( element, isTabIndexNotNaN ) {
        var map, mapName, img,
            nodeName = element.nodeName.toLowerCase();
        if ( "area" === nodeName ) {
            map = element.parentNode;
            mapName = map.name;
            if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
                return false;
            }
            img = $( "img[usemap=#" + mapName + "]" )[0];
            return !!img && visible( img );
        }
        return ( /input|select|textarea|button|object/.test( nodeName ) ?
            !element.disabled :
            "a" === nodeName ?
                element.href || isTabIndexNotNaN :
                isTabIndexNotNaN) &&
            // the element and all of its ancestors must be visible
            visible( element );
    }
    
    function visible( element ) {
        return $.expr.filters.visible( element ) &&
            !$( element ).parents().addBack().filter(function() {
                return $.css( this, "visibility" ) === "hidden";
            }).length;
    }
    
    $.extend( $.expr[ ":" ], {
        data: $.expr.createPseudo ?
            $.expr.createPseudo(function( dataName ) {
                return function( elem ) {
                    return !!$.data( elem, dataName );
                };
            }) :
            // support: jQuery <1.8
            function( elem, i, match ) {
                return !!$.data( elem, match[ 3 ] );
            },
    
        focusable: function( element ) {
            return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
        },
    
        tabbable: function( element ) {
            var tabIndex = $.attr( element, "tabindex" ),
                isTabIndexNaN = isNaN( tabIndex );
            return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
        }
    });
    
    // support: jQuery <1.8
    if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
        $.each( [ "Width", "Height" ], function( i, name ) {
            var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
                type = name.toLowerCase(),
                orig = {
                    innerWidth: $.fn.innerWidth,
                    innerHeight: $.fn.innerHeight,
                    outerWidth: $.fn.outerWidth,
                    outerHeight: $.fn.outerHeight
                };
    
            function reduce( elem, size, border, margin ) {
                $.each( side, function() {
                    size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
                    if ( border ) {
                        size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
                    }
                    if ( margin ) {
                        size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
                    }
                });
                return size;
            }
    
            $.fn[ "inner" + name ] = function( size ) {
                if ( size === undefined ) {
                    return orig[ "inner" + name ].call( this );
                }
    
                return this.each(function() {
                    $( this ).css( type, reduce( this, size ) + "px" );
                });
            };
    
            $.fn[ "outer" + name] = function( size, margin ) {
                if ( typeof size !== "number" ) {
                    return orig[ "outer" + name ].call( this, size );
                }
    
                return this.each(function() {
                    $( this).css( type, reduce( this, size, true, margin ) + "px" );
                });
            };
        });
    }
    
    // support: jQuery <1.8
    if ( !$.fn.addBack ) {
        $.fn.addBack = function( selector ) {
            return this.add( selector == null ?
                this.prevObject : this.prevObject.filter( selector )
            );
        };
    }
    
    // support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
    if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
        $.fn.removeData = (function( removeData ) {
            return function( key ) {
                if ( arguments.length ) {
                    return removeData.call( this, $.camelCase( key ) );
                } else {
                    return removeData.call( this );
                }
            };
        })( $.fn.removeData );
    }
    
    
    
    
    
    // deprecated
    $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
    
    $.support.selectstart = "onselectstart" in document.createElement( "div" );
    $.fn.extend({
        disableSelection: function() {
            return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
                ".ui-disableSelection", function( event ) {
                    event.preventDefault();
                });
        },
    
        enableSelection: function() {
            return this.unbind( ".ui-disableSelection" );
        }
    });
    
    $.extend( $.ui, {
        // $.ui.plugin is deprecated. Use $.widget() extensions instead.
        plugin: {
            add: function( module, option, set ) {
                var i,
                    proto = $.ui[ module ].prototype;
                for ( i in set ) {
                    proto.plugins[ i ] = proto.plugins[ i ] || [];
                    proto.plugins[ i ].push( [ option, set[ i ] ] );
                }
            },
            call: function( instance, name, args ) {
                var i,
                    set = instance.plugins[ name ];
                if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
                    return;
                }
    
                for ( i = 0; i < set.length; i++ ) {
                    if ( instance.options[ set[ i ][ 0 ] ] ) {
                        set[ i ][ 1 ].apply( instance.element, args );
                    }
                }
            }
        },
    
        // only used by resizable
        hasScroll: function( el, a ) {
    
            //If overflow is hidden, the element might have extra content, but the user wants to hide it
            if ( $( el ).css( "overflow" ) === "hidden") {
                return false;
            }
    
            var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
                has = false;
    
            if ( el[ scroll ] > 0 ) {
                return true;
            }
    
            // TODO: determine which cases actually cause this to happen
            // if the element doesn't have the scroll set, see if it's possible to
            // set the scroll
            el[ scroll ] = 1;
            has = ( el[ scroll ] > 0 );
            el[ scroll ] = 0;
            return has;
        }
    });
    
    })( jQuery );
    
    /*!
     * jQuery UI Widget 1.10.3
     * http://jqueryui.com
     *
     * Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */
    (function( $, undefined ) {
    
    var uuid = 0,
        slice = Array.prototype.slice,
        _cleanData = $.cleanData;
    $.cleanData = function( elems ) {
        for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
            try {
                $( elem ).triggerHandler( "remove" );
            // http://bugs.jquery.com/ticket/8235
            } catch( e ) {}
        }
        _cleanData( elems );
    };
    
    $.widget = function( name, base, prototype ) {
        var fullName, existingConstructor, constructor, basePrototype,
            // proxiedPrototype allows the provided prototype to remain unmodified
            // so that it can be used as a mixin for multiple widgets (#8876)
            proxiedPrototype = {},
            namespace = name.split( "." )[ 0 ];
    
        name = name.split( "." )[ 1 ];
        fullName = namespace + "-" + name;
    
        if ( !prototype ) {
            prototype = base;
            base = $.Widget;
        }
    
        // create selector for plugin
        $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
            return !!$.data( elem, fullName );
        };
    
        $[ namespace ] = $[ namespace ] || {};
        existingConstructor = $[ namespace ][ name ];
        constructor = $[ namespace ][ name ] = function( options, element ) {
            // allow instantiation without "new" keyword
            if ( !this._createWidget ) {
                return new constructor( options, element );
            }
    
            // allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if ( arguments.length ) {
                this._createWidget( options, element );
            }
        };
        // extend with the existing constructor to carry over any static properties
        $.extend( constructor, existingConstructor, {
            version: prototype.version,
            // copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend( {}, prototype ),
            // track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });
    
        basePrototype = new base();
        // we need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend( {}, basePrototype.options );
        $.each( prototype, function( prop, value ) {
            if ( !$.isFunction( value ) ) {
                proxiedPrototype[ prop ] = value;
                return;
            }
            proxiedPrototype[ prop ] = (function() {
                var _super = function() {
                        return base.prototype[ prop ].apply( this, arguments );
                    },
                    _superApply = function( args ) {
                        return base.prototype[ prop ].apply( this, args );
                    };
                return function() {
                    var __super = this._super,
                        __superApply = this._superApply,
                        returnValue;
    
                    this._super = _super;
                    this._superApply = _superApply;
    
                    returnValue = value.apply( this, arguments );
    
                    this._super = __super;
                    this._superApply = __superApply;
    
                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend( basePrototype, {
            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });
    
        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if ( existingConstructor ) {
            $.each( existingConstructor._childConstructors, function( i, child ) {
                var childPrototype = child.prototype;
    
                // redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
            });
            // remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push( constructor );
        }
    
        $.widget.bridge( name, constructor );
    };
    
    $.widget.extend = function( target ) {
        var input = slice.call( arguments, 1 ),
            inputIndex = 0,
            inputLength = input.length,
            key,
            value;
        for ( ; inputIndex < inputLength; inputIndex++ ) {
            for ( key in input[ inputIndex ] ) {
                value = input[ inputIndex ][ key ];
                if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
                    // Clone objects
                    if ( $.isPlainObject( value ) ) {
                        target[ key ] = $.isPlainObject( target[ key ] ) ?
                            $.widget.extend( {}, target[ key ], value ) :
                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend( {}, value );
                    // Copy everything else by reference
                    } else {
                        target[ key ] = value;
                    }
                }
            }
        }
        return target;
    };
    
    $.widget.bridge = function( name, object ) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[ name ] = function( options ) {
            var isMethodCall = typeof options === "string",
                args = slice.call( arguments, 1 ),
                returnValue = this;
    
            // allow multiple hashes to be passed on init
            options = !isMethodCall && args.length ?
                $.widget.extend.apply( null, [ options ].concat(args) ) :
                options;
    
            if ( isMethodCall ) {
                this.each(function() {
                    var methodValue,
                        instance = $.data( this, fullName );
                    if ( !instance ) {
                        return $.error( "cannot call methods on " + name + " prior to initialization; " +
                            "attempted to call method '" + options + "'" );
                    }
                    if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
                        return $.error( "no such method '" + options + "' for " + name + " widget instance" );
                    }
                    methodValue = instance[ options ].apply( instance, args );
                    if ( methodValue !== instance && methodValue !== undefined ) {
                        returnValue = methodValue && methodValue.jquery ?
                            returnValue.pushStack( methodValue.get() ) :
                            methodValue;
                        return false;
                    }
                });
            } else {
                this.each(function() {
                    var instance = $.data( this, fullName );
                    if ( instance ) {
                        instance.option( options || {} )._init();
                    } else {
                        $.data( this, fullName, new object( options, this ) );
                    }
                });
            }
    
            return returnValue;
        };
    };
    
    $.Widget = function( /* options, element */ ) {};
    $.Widget._childConstructors = [];
    
    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
    
            // callbacks
            create: null
        },
        _createWidget: function( options, element ) {
            element = $( element || this.defaultElement || this )[ 0 ];
            this.element = $( element );
            this.uuid = uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = $.widget.extend( {},
                this.options,
                this._getCreateOptions(),
                options );
    
            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
    
            if ( element !== this ) {
                $.data( element, this.widgetFullName, this );
                this._on( true, this.element, {
                    remove: function( event ) {
                        if ( event.target === element ) {
                            this.destroy();
                        }
                    }
                });
                this.document = $( element.style ?
                    // element within the document
                    element.ownerDocument :
                    // element is window or document
                    element.document || element );
                this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
            }
    
            this._create();
            this._trigger( "create", null, this._getCreateEventData() );
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
    
        destroy: function() {
            this._destroy();
            // we can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .unbind( this.eventNamespace )
                // 1.9 BC for #7810
                // TODO remove dual storage
                .removeData( this.widgetName )
                .removeData( this.widgetFullName )
                // support: jquery <1.6.3
                // http://bugs.jquery.com/ticket/9413
                .removeData( $.camelCase( this.widgetFullName ) );
            this.widget()
                .unbind( this.eventNamespace )
                .removeAttr( "aria-disabled" )
                .removeClass(
                    this.widgetFullName + "-disabled " +
                    "ui-state-disabled" );
    
            // clean up events and states
            this.bindings.unbind( this.eventNamespace );
            this.hoverable.removeClass( "ui-state-hover" );
            this.focusable.removeClass( "ui-state-focus" );
        },
        _destroy: $.noop,
    
        widget: function() {
            return this.element;
        },
    
        option: function( key, value ) {
            var options = key,
                parts,
                curOption,
                i;
    
            if ( arguments.length === 0 ) {
                // don't return a reference to the internal hash
                return $.widget.extend( {}, this.options );
            }
    
            if ( typeof key === "string" ) {
                // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split( "." );
                key = parts.shift();
                if ( parts.length ) {
                    curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
                    for ( i = 0; i < parts.length - 1; i++ ) {
                        curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
                        curOption = curOption[ parts[ i ] ];
                    }
                    key = parts.pop();
                    if ( value === undefined ) {
                        return curOption[ key ] === undefined ? null : curOption[ key ];
                    }
                    curOption[ key ] = value;
                } else {
                    if ( value === undefined ) {
                        return this.options[ key ] === undefined ? null : this.options[ key ];
                    }
                    options[ key ] = value;
                }
            }
    
            this._setOptions( options );
    
            return this;
        },
        _setOptions: function( options ) {
            var key;
    
            for ( key in options ) {
                this._setOption( key, options[ key ] );
            }
    
            return this;
        },
        _setOption: function( key, value ) {
            this.options[ key ] = value;
    
            if ( key === "disabled" ) {
                this.widget()
                    .toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
                    .attr( "aria-disabled", value );
                this.hoverable.removeClass( "ui-state-hover" );
                this.focusable.removeClass( "ui-state-focus" );
            }
    
            return this;
        },
    
        enable: function() {
            return this._setOption( "disabled", false );
        },
        disable: function() {
            return this._setOption( "disabled", true );
        },
    
        _on: function( suppressDisabledCheck, element, handlers ) {
            var delegateElement,
                instance = this;
    
            // no suppressDisabledCheck flag, shuffle arguments
            if ( typeof suppressDisabledCheck !== "boolean" ) {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }
    
            // no element argument, shuffle and use this.element
            if ( !handlers ) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                // accept selectors, DOM elements
                element = delegateElement = $( element );
                this.bindings = this.bindings.add( element );
            }
    
            $.each( handlers, function( event, handler ) {
                function handlerProxy() {
                    // allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if ( !suppressDisabledCheck &&
                            ( instance.options.disabled === true ||
                                $( this ).hasClass( "ui-state-disabled" ) ) ) {
                        return;
                    }
                    return ( typeof handler === "string" ? instance[ handler ] : handler )
                        .apply( instance, arguments );
                }
    
                // copy the guid so direct unbinding works
                if ( typeof handler !== "string" ) {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }
    
                var match = event.match( /^(\w+)\s*(.*)$/ ),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                if ( selector ) {
                    delegateElement.delegate( selector, eventName, handlerProxy );
                } else {
                    element.bind( eventName, handlerProxy );
                }
            });
        },
    
        _off: function( element, eventName ) {
            eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
            element.unbind( eventName ).undelegate( eventName );
        },
    
        _delay: function( handler, delay ) {
            function handlerProxy() {
                return ( typeof handler === "string" ? instance[ handler ] : handler )
                    .apply( instance, arguments );
            }
            var instance = this;
            return setTimeout( handlerProxy, delay || 0 );
        },
    
        _hoverable: function( element ) {
            this.hoverable = this.hoverable.add( element );
            this._on( element, {
                mouseenter: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-hover" );
                },
                mouseleave: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-hover" );
                }
            });
        },
    
        _focusable: function( element ) {
            this.focusable = this.focusable.add( element );
            this._on( element, {
                focusin: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-focus" );
                },
                focusout: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-focus" );
                }
            });
        },
    
        _trigger: function( type, event, data ) {
            var prop, orig,
                callback = this.options[ type ];
    
            data = data || {};
            event = $.Event( event );
            event.type = ( type === this.widgetEventPrefix ?
                type :
                this.widgetEventPrefix + type ).toLowerCase();
            // the original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[ 0 ];
    
            // copy original event properties over to the new event
            orig = event.originalEvent;
            if ( orig ) {
                for ( prop in orig ) {
                    if ( !( prop in event ) ) {
                        event[ prop ] = orig[ prop ];
                    }
                }
            }
    
            this.element.trigger( event, data );
            return !( $.isFunction( callback ) &&
                callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
                event.isDefaultPrevented() );
        }
    };
    
    $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
        $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
            if ( typeof options === "string" ) {
                options = { effect: options };
            }
            var hasOptions,
                effectName = !options ?
                    method :
                    options === true || typeof options === "number" ?
                        defaultEffect :
                        options.effect || defaultEffect;
            options = options || {};
            if ( typeof options === "number" ) {
                options = { duration: options };
            }
            hasOptions = !$.isEmptyObject( options );
            options.complete = callback;
            if ( options.delay ) {
                element.delay( options.delay );
            }
            if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
                element[ method ]( options );
            } else if ( effectName !== method && element[ effectName ] ) {
                element[ effectName ]( options.duration, options.easing, callback );
            } else {
                element.queue(function( next ) {
                    $( this )[ method ]();
                    if ( callback ) {
                        callback.call( element[ 0 ] );
                    }
                    next();
                });
            }
        };
    });
    
    })( jQuery );
;/**
 * amp amplience-sdk-client v0.1.0
 *
 * @class amp
 */
var amp = amp || {};

(function(){

    amp.di = {};
    amp.stats = {};

/**
 * Polyfills for IE
 *
 * @class __Global__
 */

// requestAnimationFrame Polyfill (Paul Irish / Erik Möller)
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// JSON
var JSON = JSON || {};
/**
 * Adds stringify if it doesn't exit
 * @method JSOP.stringify
 * @param {Object} obj
 */
// implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function (obj) {
    var t = typeof (obj);
    if (t != "object" || obj === null) {

        // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);

    }
    else {

        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);

        for (n in obj) {
            if(obj.hasOwnProperty(n)){
                v = obj[n];
                t = typeof(v);

                if (t == "string") v = '"' + v + '"';
                else if (t == "object" && v !== null) v = JSON.stringify(v);

                json.push((arr ? "" : '"' + n + '":') + String(v));
            }
        }

        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};
/**
 * implement JSON.parse de-serialization it doesn't exit
 * @method JSON.parse
 * @param {String} data
 */
JSON.parse = JSON.parse || function (data) {

    if ( typeof data !== "string" || !data ) {
        return null;
    }

    var rvalidchars = /^[\],:{}\s]*$/;

    var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;

    var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;

    var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;

    var rwhitespace = /^\s+|\s+$/g;

    // Make sure the incoming data is actual JSON
    // Logic borrowed from jquery && http://json.org/json2.js
    if ( rvalidchars.test( data.replace(rwhitespace,"").replace( rvalidescape, "@" ).replace( rvalidtokens, "]" ).replace( rvalidbraces, "")) ) {
        return ( new Function( "return " + data ) )();
    }
};



(function() {
    var define, requireModule, require, requirejs;

    (function() {
        var registry = {}, seen = {};

        define = function(name, deps, callback) {
            registry[name] = { deps: deps, callback: callback };
        };

        requirejs = require = requireModule = function(name) {
            requirejs._eak_seen = registry;

            if (seen[name]) { return seen[name]; }
            seen[name] = {};

            if (!registry[name]) {
                throw new Error("Could not find module " + name);
            }

            var mod = registry[name],
                deps = mod.deps,
                callback = mod.callback,
                reified = [],
                exports;

            for (var i=0, l=deps.length; i<l; i++) {
                if (deps[i] === 'exports') {
                    reified.push(exports = {});
                } else {
                    reified.push(requireModule(resolve(deps[i])));
                }
            }

            var value = callback.apply(this, reified);
            return seen[name] = exports || value;

            function resolve(child) {
                if (child.charAt(0) !== '.') { return child; }
                var parts = child.split("/");
                var parentBase = name.split("/").slice(0, -1);

                for (var i=0, l=parts.length; i<l; i++) {
                    var part = parts[i];

                    if (part === '..') { parentBase.pop(); }
                    else if (part === '.') { continue; }
                    else { parentBase.push(part); }
                }

                return parentBase.join("/");
            }
        };
    })();

    define("promise/all",
        ["./utils","exports"],
        function(__dependency1__, __exports__) {
            "use strict";
            /* global toString */

            var isArray = __dependency1__.isArray;
            var isFunction = __dependency1__.isFunction;

            /**
             Returns a promise that is fulfilled when all the given promises have been
             fulfilled, or rejected if any of them become rejected. The return promise
             is fulfilled with an array that gives all the values in the order they were
             passed in the `promises` array argument.

             Example:

             ```javascript
             var promise1 = RSVP.resolve(1);
             var promise2 = RSVP.resolve(2);
             var promise3 = RSVP.resolve(3);
             var promises = [ promise1, promise2, promise3 ];

             RSVP.all(promises).then(function(array){
        // The array here would be [ 1, 2, 3 ];
      });
             ```

             If any of the `promises` given to `RSVP.all` are rejected, the first promise
             that is rejected will be given as an argument to the returned promises's
             rejection handler. For example:

             Example:

             ```javascript
             var promise1 = RSVP.resolve(1);
             var promise2 = RSVP.reject(new Error("2"));
             var promise3 = RSVP.reject(new Error("3"));
             var promises = [ promise1, promise2, promise3 ];

             RSVP.all(promises).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(error) {
        // error.message === "2"
      });
             ```

             @method all
             @for RSVP
             @param {Array} promises
             @param {String} label
             @return {Promise} promise that is fulfilled when all `promises` have been
             fulfilled, or rejected if any of them become rejected.
             */
            function all(promises) {
                /*jshint validthis:true */
                var Promise = this;

                if (!isArray(promises)) {
                    throw new TypeError('You must pass an array to all.');
                }

                return new Promise(function(resolve, reject) {
                    var results = [], remaining = promises.length,
                        promise;

                    if (remaining === 0) {
                        resolve([]);
                    }

                    function resolver(index) {
                        return function(value) {
                            resolveAll(index, value);
                        };
                    }

                    function resolveAll(index, value) {
                        results[index] = value;
                        if (--remaining === 0) {
                            resolve(results);
                        }
                    }

                    for (var i = 0; i < promises.length; i++) {
                        promise = promises[i];

                        if (promise && isFunction(promise.then)) {
                            promise.then(resolver(i), reject);
                        } else {
                            resolveAll(i, promise);
                        }
                    }
                });
            }

            __exports__.all = all;
        });
    define("promise/asap",
        ["exports"],
        function(__exports__) {
            "use strict";
            var browserGlobal = (typeof window !== 'undefined') ? window : {};
            var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
            var local = (typeof global !== 'undefined') ? global : (this === undefined? window:this);

            // node
            function useNextTick() {
                return function() {
                    process.nextTick(flush);
                };
            }

            function useMutationObserver() {
                var iterations = 0;
                var observer = new BrowserMutationObserver(flush);
                var node = document.createTextNode('');
                observer.observe(node, { characterData: true });

                return function() {
                    node.data = (iterations = ++iterations % 2);
                };
            }

            function useSetTimeout() {
                return function() {
                    local.setTimeout(flush, 1);
                };
            }

            var queue = [];
            function flush() {
                for (var i = 0; i < queue.length; i++) {
                    var tuple = queue[i];
                    var callback = tuple[0], arg = tuple[1];
                    callback(arg);
                }
                queue = [];
            }

            var scheduleFlush;

            // Decide what async method to use to triggering processing of queued callbacks:
            if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
                scheduleFlush = useNextTick();
            } else if (BrowserMutationObserver) {
                scheduleFlush = useMutationObserver();
            } else {
                scheduleFlush = useSetTimeout();
            }

            function asap(callback, arg) {
                var length = queue.push([callback, arg]);
                if (length === 1) {
                    // If length is 1, that means that we need to schedule an async flush.
                    // If additional callbacks are queued before the queue is flushed, they
                    // will be processed by this flush that we are scheduling.
                    scheduleFlush();
                }
            }

            __exports__.asap = asap;
        });
    define("promise/config",
        ["exports"],
        function(__exports__) {
            "use strict";
            var config = {
                instrument: false
            };

            function configure(name, value) {
                if (arguments.length === 2) {
                    config[name] = value;
                } else {
                    return config[name];
                }
            }

            __exports__.config = config;
            __exports__.configure = configure;
        });
    define("promise/polyfill",
        ["./promise","./utils","exports"],
        function(__dependency1__, __dependency2__, __exports__) {
            "use strict";
            /*global self*/
            var RSVPPromise = __dependency1__.Promise;
            var isFunction = __dependency2__.isFunction;

            function polyfill() {
                var local;

                if (typeof global !== 'undefined') {
                    local = global;
                } else if (typeof window !== 'undefined' && window.document) {
                    local = window;
                } else {
                    local = self;
                }

                var es6PromiseSupport =
                    "Promise" in local &&
                    // Some of these methods are missing from
                    // Firefox/Chrome experimental implementations
                    "resolve" in local.Promise &&
                    "reject" in local.Promise &&
                    "all" in local.Promise &&
                    "race" in local.Promise &&
                    // Older version of the spec had a resolver object
                    // as the arg rather than a function
                    (function() {
                        var resolve;
                        new local.Promise(function(r) { resolve = r; });
                        return isFunction(resolve);
                    }());

                if (!es6PromiseSupport) {
                    local.Promise = RSVPPromise;
                }
            }

            __exports__.polyfill = polyfill;
        });
    define("promise/promise",
        ["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],
        function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
            "use strict";
            var config = __dependency1__.config;
            var configure = __dependency1__.configure;
            var objectOrFunction = __dependency2__.objectOrFunction;
            var isFunction = __dependency2__.isFunction;
            var now = __dependency2__.now;
            var all = __dependency3__.all;
            var race = __dependency4__.race;
            var staticResolve = __dependency5__.resolve;
            var staticReject = __dependency6__.reject;
            var asap = __dependency7__.asap;

            var counter = 0;

            config.async = asap; // default async is asap;

            function Promise(resolver) {
                if (!isFunction(resolver)) {
                    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                }

                if (!(this instanceof Promise)) {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }

                this._subscribers = [];

                invokeResolver(resolver, this);
            }

            function invokeResolver(resolver, promise) {
                function resolvePromise(value) {
                    resolve(promise, value);
                }

                function rejectPromise(reason) {
                    reject(promise, reason);
                }

                try {
                    resolver(resolvePromise, rejectPromise);
                } catch(e) {
                    rejectPromise(e);
                }
            }

            function invokeCallback(settled, promise, callback, detail) {
                var hasCallback = isFunction(callback),
                    value, error, succeeded, failed;

                if (hasCallback) {
                    try {
                        value = callback(detail);
                        succeeded = true;
                    } catch(e) {
                        failed = true;
                        error = e;
                    }
                } else {
                    value = detail;
                    succeeded = true;
                }

                if (handleThenable(promise, value)) {
                    return;
                } else if (hasCallback && succeeded) {
                    resolve(promise, value);
                } else if (failed) {
                    reject(promise, error);
                } else if (settled === FULFILLED) {
                    resolve(promise, value);
                } else if (settled === REJECTED) {
                    reject(promise, value);
                }
            }

            var PENDING   = void 0;
            var SEALED    = 0;
            var FULFILLED = 1;
            var REJECTED  = 2;

            function subscribe(parent, child, onFulfillment, onRejection) {
                var subscribers = parent._subscribers;
                var length = subscribers.length;

                subscribers[length] = child;
                subscribers[length + FULFILLED] = onFulfillment;
                subscribers[length + REJECTED]  = onRejection;
            }

            function publish(promise, settled) {
                var child, callback, subscribers = promise._subscribers, detail = promise._detail;

                for (var i = 0; i < subscribers.length; i += 3) {
                    child = subscribers[i];
                    callback = subscribers[i + settled];

                    invokeCallback(settled, child, callback, detail);
                }

                promise._subscribers = null;
            }

            Promise.prototype = {
                constructor: Promise,

                _state: undefined,
                _detail: undefined,
                _subscribers: undefined,

                then: function(onFulfillment, onRejection) {
                    var promise = this;

                    var thenPromise = new this.constructor(function() {});

                    if (this._state) {
                        var callbacks = arguments;
                        config.async(function invokePromiseCallback() {
                            invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail);
                        });
                    } else {
                        subscribe(this, thenPromise, onFulfillment, onRejection);
                    }

                    return thenPromise;
                },

                'catch': function(onRejection) {
                    return this.then(null, onRejection);
                }
            };

            Promise.all = all;
            Promise.race = race;
            Promise.resolve = staticResolve;
            Promise.reject = staticReject;

            function handleThenable(promise, value) {
                var then = null,
                    resolved;

                try {
                    if (promise === value) {
                        throw new TypeError("A promises callback cannot return that same promise.");
                    }

                    if (objectOrFunction(value)) {
                        then = value.then;

                        if (isFunction(then)) {
                            then.call(value, function(val) {
                                if (resolved) { return true; }
                                resolved = true;

                                if (value !== val) {
                                    resolve(promise, val);
                                } else {
                                    fulfill(promise, val);
                                }
                            }, function(val) {
                                if (resolved) { return true; }
                                resolved = true;

                                reject(promise, val);
                            });

                            return true;
                        }
                    }
                } catch (error) {
                    if (resolved) { return true; }
                    reject(promise, error);
                    return true;
                }

                return false;
            }

            function resolve(promise, value) {
                if (promise === value) {
                    fulfill(promise, value);
                } else if (!handleThenable(promise, value)) {
                    fulfill(promise, value);
                }
            }

            function fulfill(promise, value) {
                if (promise._state !== PENDING) { return; }
                promise._state = SEALED;
                promise._detail = value;

                config.async(publishFulfillment, promise);
            }

            function reject(promise, reason) {
                if (promise._state !== PENDING) { return; }
                promise._state = SEALED;
                promise._detail = reason;

                config.async(publishRejection, promise);
            }

            function publishFulfillment(promise) {
                publish(promise, promise._state = FULFILLED);
            }

            function publishRejection(promise) {
                publish(promise, promise._state = REJECTED);
            }

            __exports__.Promise = Promise;
        });
    define("promise/race",
        ["./utils","exports"],
        function(__dependency1__, __exports__) {
            "use strict";
            /* global toString */
            var isArray = __dependency1__.isArray;

            /**
             `RSVP.race` allows you to watch a series of promises and act as soon as the
             first promise given to the `promises` argument fulfills or rejects.

             Example:

             ```javascript
             var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

             var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 2");
        }, 100);
      });

             RSVP.race([promise1, promise2]).then(function(result){
        // result === "promise 2" because it was resolved before promise1
        // was resolved.
      });
             ```

             `RSVP.race` is deterministic in that only the state of the first completed
             promise matters. For example, even if other promises given to the `promises`
             array argument are resolved, but the first completed promise has become
             rejected before the other promises became fulfilled, the returned promise
             will become rejected:

             ```javascript
             var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

             var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          reject(new Error("promise 2"));
        }, 100);
      });

             RSVP.race([promise1, promise2]).then(function(result){
        // Code here never runs because there are rejected promises!
      }, function(reason){
        // reason.message === "promise2" because promise 2 became rejected before
        // promise 1 became fulfilled
      });
             ```

             @method race
             @for RSVP
             @param {Array} promises array of promises to observe
             @param {String} label optional string for describing the promise returned.
             Useful for tooling.
             @return {Promise} a promise that becomes fulfilled with the value the first
             completed promises is resolved with if the first completed promise was
             fulfilled, or rejected with the reason that the first completed promise
             was rejected with.
             */
            function race(promises) {
                /*jshint validthis:true */
                var Promise = this;

                if (!isArray(promises)) {
                    throw new TypeError('You must pass an array to race.');
                }
                return new Promise(function(resolve, reject) {
                    var results = [], promise;

                    for (var i = 0; i < promises.length; i++) {
                        promise = promises[i];

                        if (promise && typeof promise.then === 'function') {
                            promise.then(resolve, reject);
                        } else {
                            resolve(promise);
                        }
                    }
                });
            }

            __exports__.race = race;
        });
    define("promise/reject",
        ["exports"],
        function(__exports__) {
            "use strict";
            /**
             `RSVP.reject` returns a promise that will become rejected with the passed
             `reason`. `RSVP.reject` is essentially shorthand for the following:

             ```javascript
             var promise = new RSVP.Promise(function(resolve, reject){
        reject(new Error('WHOOPS'));
      });

             promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
             ```

             Instead of writing the above, your code now simply becomes the following:

             ```javascript
             var promise = RSVP.reject(new Error('WHOOPS'));

             promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
             ```

             @method reject
             @for RSVP
             @param {Any} reason value that the returned promise will be rejected with.
             @param {String} label optional string for identifying the returned promise.
             Useful for tooling.
             @return {Promise} a promise that will become rejected with the given
             `reason`.
             */
            function reject(reason) {
                /*jshint validthis:true */
                var Promise = this;

                return new Promise(function (resolve, reject) {
                    reject(reason);
                });
            }

            __exports__.reject = reject;
        });
    define("promise/resolve",
        ["exports"],
        function(__exports__) {
            "use strict";
            function resolve(value) {
                /*jshint validthis:true */
                if (value && typeof value === 'object' && value.constructor === this) {
                    return value;
                }

                var Promise = this;

                return new Promise(function(resolve) {
                    resolve(value);
                });
            }

            __exports__.resolve = resolve;
        });
    define("promise/utils",
        ["exports"],
        function(__exports__) {
            "use strict";
            function objectOrFunction(x) {
                return isFunction(x) || (typeof x === "object" && x !== null);
            }

            function isFunction(x) {
                return typeof x === "function";
            }

            function isArray(x) {
                return Object.prototype.toString.call(x) === "[object Array]";
            }

            // Date.now is not available in browsers < IE9
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
            var now = Date.now || function() { return new Date().getTime(); };


            __exports__.objectOrFunction = objectOrFunction;
            __exports__.isFunction = isFunction;
            __exports__.isArray = isArray;
            __exports__.now = now;
        });
    requireModule('promise/polyfill').polyfill();
}());
/**
 * Global SDK config settings
 *
 * @property conf
 * @type {Object}
 * @default {"cache_window": 21600000,"default_size": 190,"client_id":null,"di_basepath":null}
 */
amp.conf = {
    "cache_window": 21600000,
    "default_size": 190,
    "client_id":null,
    "di_basepath":'http://i1.adis.ws/',
    "content_basepath": "http://c1.adis.ws/",
    "err_img":null
};

(function(){
    /**
     * Overwrites the conf defaults and sets up analytics binding
     * @method init
     * @param {Object} conf The config object
     */
    amp.init = function(conf) {
        for (var i in conf) {
            if (amp.conf.hasOwnProperty(i)){
                amp.conf[i] = conf[i];
            }
        }

    };
}());
/**
 * indexOf function
 * @method indexOf
 * @param {Integer}
 */
var indexOf = amp.indexOf = function(arr, elt /*, from*/)
{
    "use strict";
    if (arr == null) {
        throw new TypeError();
    }
    var t = Object(arr);
    var len = t.length >>> 0;
    if (len === 0) {
        return -1;
    }
    var n = 0;
    if (arguments.length > 1) {
        n = Number(arguments[2]);
        if (n != n) { // shortcut for verifying if it's NaN
            n = 0;
        } else if (n != 0 && n != Infinity && n != -Infinity) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
    }
    if (n >= len) {
        return -1;
    }
    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
    for (; k < len; k++) {
        if (k in t && t[k] === elt) {
            return k;
        }
    }
    return -1;
}
/**
 * Returns an array of object keys
 * @method keys
 * @param {Object} obj
 */
var keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
        if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
            throw new TypeError('Object.keys called on non-object');
        }

        var result = [], prop, i;

        for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
                result.push(prop);
            }
        }

        if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
                if (hasOwnProperty.call(obj, dontEnums[i])) {
                    result.push(dontEnums[i]);
                }
            }
        }
        return result;
    };
}());

function buildQueryString(obj) {
    var str = [];
    for(var p in obj){
        if (obj.hasOwnProperty(p)) {
            str.push(p+ "=" + obj[p]);
        }
    }
    return str.join("&");
}


function querystringToArray(str, specialCase) {
    var options = str.split('&'),
        optionsArray = [];
    for (var i=0; i<options.length;i++){
        var parts = options[i].split('='), optionsObj = {};
        if(specialCase){
            specialCase(parts, optionsObj);
        }else{
            optionsObj[parts[0]] = parts[1];
        }
        optionsArray.push(optionsObj);
    }
    return optionsArray;
}

function isArray(o){
    return Object.prototype.toString.call( o ) === '[object Array]';
}

(function(){
/**
 * Creates a url to an asset
 * @method getAssetURL
 * @param {Object} asset to build the url for format {'name':'asset','type':'i'}
 */
amp.getAssetURL = function (asset) {
    return amp.conf.di_basepath + asset.type + '/' + amp.conf.client_id + '/' + asset.name;
};

var videoAssetsNeeded = function(o) {
    var arr = [];
    if(o.items || (o.set && o.set.items)) {
        var items = o.items || o.set.items;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if(item.type == "video"){
                arr.push({name:item.name,type:'v'});
            } else {
                if(item.items || (item.set && item.set.items)){
                    arr = arr.concat(videoAssetsNeeded(item));
                }
            }
        }
    }
    return arr;
};

var getVidsNotLoaded = function(toload,loaded) {
    var notLoaded = [];
    for (var i =0; i<toload.length;i++) {
        var item = toload[i];
        var found = false;
        for (var m=0;m<loaded.length;m++){
            var l = loaded[m];
            if(l.name === item.name && l.type === item.type) {
                found = true;
                break;
            }
        }
        if(!found) {
            notLoaded.push(item);
        }
    }
    return notLoaded;
};
var copyObj = function(a,b,exclude) {
    for (var i in b) {
        if(b.hasOwnProperty(i)){
            if(indexOf(exclude, i)!=-1)
                continue;
            a[i] = b[i];
        }
    }
    return a;
};

var setMediaCodec = function(data) {
    for(var i in data) {
        if(data.hasOwnProperty(i)){
            var v = data[i];
            for(var m =0; m<v.media.length; m++) {
                v.media[m].htmlCodec = amp.videoToFormat(v.media[m]);
            }
        }

    }
    return data;
};

var orderVideoSources = function(data,order) {
    for(var i in data) {
        if(data.hasOwnProperty(i)){
            var v = data[i];
            v.media = amp.sortVideoSource(v.media,order);
        }

    }
    return data;
};

var combineData = function(vData,data) {
    for(var i in vData) {
        if(vData.hasOwnProperty(i)){
            var v = vData[i];
            var recurse = function(o,v){
                if(o.items || (o.set && o.set.items)){
                    var items = o.items || o.set.items;
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if(item.type == "video" && item.name == v.name){
                            item = copyObj(item, v, ['url']);
                        } else {
                            if(item.items || (item.set && item.set.items)){
                                item = recurse(item,v);
                            }
                        }
                    }
                }
                return o;
            }
        }
        data = recurse(data,v);
    }
    return data;
};
var removeData = function(vData,data) {
    for(var i in vData) {
        if(vData.hasOwnProperty(i)){
            var v = vData[i];
            var recurse = function(o,v){
                if(o.items || (o.set && o.set.items)){
                    var items = o.items || o.set.items;
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if(item.type == "video"){
                            items.splice(i, 1);
                        } else {
                            if(item.items || (item.set && item.set.items)){
                                item = recurse(item,v);
                            }
                        }
                    }
                }
                return o;
            }
        }
        data = recurse(data,v);
    }
    return data;
};
function objLength(obj) {
    var count = 0;
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }
    return count;
}
/**
 * Retrieves DI Data through JSONP
 * @method get
 * @param {Object} assets to load in the format {'name':'asset','type':'i'}
 * @param {Function} success Callback function called on successful load
 * @param {Function} error Callback function called on unsuccessful load
 * @param {Int} integer to change timeout time
 */
amp.get = function (assets, success, error, videoSort, timeout, transformData) {
    var assCount = 0, failed = true, dataWin = {}, dataFail = {}, assLength = 0, timeout = timeout || 60000;

    var win = function(url){
        return function (name,data) {
            var vidAssets = videoAssetsNeeded(data);
            var notLoaded = getVidsNotLoaded(vidAssets,assets);
            var allLoaded = function() {
                assCount++;
                dataWin[name] = data;
                dataWin[name].url = url;
                dataWin[name].name = !dataWin[name].name ? name : dataWin[name].name;
                if(assCount == assLength) {
                    done();
                }
            };
            if(notLoaded.length){
                amp.get(notLoaded,function(vData) {
                    vData = setMediaCodec(vData);
                    if(videoSort) {
                        vData = orderVideoSources(vData,videoSort);
                    }
                    data = combineData(vData,data);
                    allLoaded();
                },function(vData) {
                    data = removeData(vData,data);
                    allLoaded();
                },
                    false,
                    timeout,
                    transformData || false);
            } else {
                if(data.media){
                    data = setMediaCodec({'d':data})['d'];
                    if(videoSort) {
                        data = orderVideoSources({'d':data},videoSort)['d'];
                    }
                }

                allLoaded();
            }
        }
    };
    var fail = function(url){
        return function (name,data) {
            assCount++;
            dataFail[name] = data;
            dataFail[name].url = url;
            failed = true;
            if(assCount == assLength) {
                done();
            }
        }
    };
    var done = function(){
        if(objLength(dataWin)>0 && success) {
            if(transformData && typeof transformData === 'function'){
                dataWin = transformData(dataWin);
            }
            success(dataWin);
        }
        if(objLength(dataFail)>0 && error) {
            if(transformData && typeof transformData === 'function'){
                dataFail = transformData(dataFail);
            }
            error(dataFail);
        }
    };

    var isValid = function(asset){
        if (!asset || !asset.type || !asset.name) {
            return false;
        } else {
            return true;
        }
    }

    if(!isArray(assets)){
        assLength = 1;
        if(!isValid(assets))
            return;
        var url = amp.getAssetURL(assets);
        jsonp(amp.getAssetURL(assets)+ '.js', assets.name, win(url), fail(url),assets.transform, timeout);
    }else{
        assLength = assets.length;
        for (var i = 0; i < assLength; i++) {
            if(!isValid(assets[i]))
                continue;
            var url = amp.getAssetURL(assets[i]);
            jsonp(url + '.js', assets[i].name, win(url), fail(url),assets[i].transform, timeout);
        }
    }
};

var movingCacheWindow = function () {
    var timestamp = new Date();
    timestamp -= timestamp % amp.conf.cache_window;
    return timestamp;
};

var clean = function(name){
    var script = cbScripts[name];
    if(script){
        script.dispose();
    }
    delete cbArray[name];
    delete cbTimeout[name];
    delete cbScripts[name];
};

var cbArray = [], cbScripts = [], cbTimeout = [];

/**
 * Cache for all successful JSONP calls
 *
 * @property jsonCache
 * @type {Object}
 * @default {}
 */
amp.jsonCache = {};

/**
 * Callback method for JSONP
 * @method jsonReturn
 * @param {String} name The name of the asset
 * @param {Object} data The returned JSON data
 */
amp.jsonReturn = function(name, data) {
    // do we have callbacks waiting for that name?
    if(!cbArray[name])
        return;
    // clear the timeout because we have answers!
    clearTimeout(cbTimeout[name]);
    // go through callbacks
    for (var i = 0; i < cbArray[name].length; i++) {
        var obj = cbArray[name][i];
        // success or error callback
        if(data.status == "error") {
            if(obj.fail) {
                obj.fail(name,data);
            }
        } else {
            // add it to the cache
            amp.jsonCache[name] = data;
            if(obj.win) {
                obj.win(name,data);
            }
        }
    }
    clean(name);
};

amp.get.createScript = function(src, onerror) {
    // lets create a home for our json
    var script = document.createElement('script');
    script.src = src;
    script.onerror= onerror;
    script.dispose = function(){
        document.body.removeChild(script);
    };

    // set the thing off:
    document.body.appendChild(script);
    return script;
};

/**
 * Clears the cache of JSONP responses
 */
amp.clearJsonCache = function(){
    amp.jsonCache = {};
}

var jsonp =  amp.jsonp = function(url, name, success, error, transform, timeout){
    var timeout = timeout || 60000;
    if(!transform){
        transform = '';
    } else {
        transform = transform+'&'
    }
    // do we already have the data?
    if(amp.jsonCache[name]) {
        success(name, amp.jsonCache[name]);
        return;
    }
    // is the json in progress?
    if(cbArray[name]) {
        // if so add it to the pile and get out of here
        cbArray[name].push({'win':success,'fail':error});
        return;
    } else {
        // otherwise create the object
        cbArray[name] = [{'win':success,'fail':error}];
    }

    // waiting for fail
    cbTimeout[name] = setTimeout(function() {
        amp.jsonReturn(name,{ status:'error',code: 404, message: "Not Found", name: name });
    }, timeout);

    var src = url + "?" + transform + buildQueryString({deep:true, timestamp: movingCacheWindow(), arg: "'"+name+"'", func:"amp.jsonReturn"});
    var script = amp.get.createScript(src, function(e) {
        amp.jsonReturn(name,{ status:'error',code: 404, message: "Not Found", name: name });
    });

    // remember it for cleaning
    cbScripts[name] = script;
};

}());
(function () {

    var payloadSize = 10;

    amp.content = function (assets, win, fail, timeout) {
        var timeout = timeout || 60000;

        if (!isArray(assets)) {
            assets = [assets];
        }

        payloader(assets, timeout, function(wins,fails){
            if(wins.length>0) {
                win(formatPayloadResponse(wins));
            }
            if(fails.length>0) {
                fail(fails);
            }
        });
    };

    var formatPayloadResponse = function(response) {
        var data = [];
        for(var i=0;i<response.length;i++) {
            var payloads = response[i].result.payload;
            for (var p = 0; p < payloads.length; p++) {
                var payload = payloads[p];
                payload.name = payload.key.split('/');
                payload.name = payload.name[payload.name.length-1];
                data.push(payload);
            }
        }
        return data;
    };

    var buildContentUrl = function (name) {
        return amp.conf.content_basepath + 'c/' + amp.conf.client_id + '/' + name+'.js';
    };

    var buildPayloadUrl = function (assets) {
        return amp.conf.content_basepath + 'p/' + amp.conf.client_id + '/[' + generateContentArray(assets) + '].js';
    };

    var payloader = function(assets, timeout, finished) {
        var wins = [];
        var fails = [];
        var it = Math.ceil(assets.length/payloadSize);

        var onWin = function(name,result) {
            wins.push({name:name,result:result});
            doneYet();
        };

        var onFail = function (name,result) {
            fails.push({name:name,result:result});
            doneYet();
        };

        var doneYet = function() {
            if(wins.length + fails.length === it) {
                if(finished) {
                    finished(wins,fails);
                }
            }
        };

        for(var i=0;i<it;i++) {
            var array = assets.slice(i*payloadSize,(i*payloadSize)+payloadSize);
            amp.jsonp(buildPayloadUrl(assets),array.join(','),onWin,onFail, timeout);
        }
    };

    var generateContentArray = function(assets) {
        var s = '';
        var a = [];
        for(var i=0; i<assets.length;i++) {
            a.push('"/c//' + assets[i] +'"');
        }
        return a.join(',');
    }

}());
(function(){
/**
 * Generated HTML based on asset JSON
 * @method genHTML
 * @param {Object} asset The Asset Data
 * @param {Object} attach The DOM node to attach the result to
 */
amp.genHTML = function (asset, attach, lazy, videoSourceSort) {
    if(!asset) return;
    var doms = {};
    var transform = function(asset) {
        var assHTML = genAssetHTML(asset, lazy, videoSourceSort);
        doms[asset.name]=(assHTML);
        if (attach && attach.appendChild) {
            attach.appendChild(assHTML);
        }
    };
    if(isArray(asset)) {
        for (var i = 0; i < asset.length; i++) {
            transform(asset[i]);
        }
    } else if(typeof asset == "object") {
        transform(asset);
    } else {
        return;
    }

    return doms;
};

var hasSize = function(o) {
    if(!o || (!o.src && !o.url))
        return false;
    var src = o.isImage? o.url :  o.src;
    var op =  amp.di.get(src);
    for (var i = 0; i < op.length; i++) {
        var obj = op[i];
        if ((obj.width && obj.width!='undefined')||(obj.height && obj.height!='undefined')) {
           return true;
        }
    }
    return false;

}

amp.videoToFormat = function(video){
    if(!video) return;

    var format = video.format;
    var videoCodec = "";
    var audioCodec = "";

    switch(format && format.toLowerCase()){
        case "flash video":
            format = "flv";
            break;
        case "mpeg4":
            format = "mp4";
            break;
    }

    switch(video["video.codec"] && video["video.codec"].toLowerCase()){
        case "h264":
            /** Baseline, it could be higher but we dont have that info **/
            //videoCodec = "avc1.42E01E";
            break;
        case "theora":
            videoCodec = "theora";
            break;
        case "vp8":
            videoCodec = "vp8";
            break;
    }

    switch(video["audio.codec"] && video["audio.codec"].toLowerCase()){
        case "aac":
            if(format == "mp4"){
                audioCodec = "mp4a.40.2";
            }
            break;
        case "vorbis":
            audioCodec = "vorbis";
            break;
    }

    var typeString = format ? "video/" + format : typeString;
    if(videoCodec != ""){
        typeString += '; codecs="';
        typeString += videoCodec;
        if(audioCodec != ""){
            typeString += ", " + audioCodec;
        }
        typeString += '"'
    }

     return typeString;
};

amp.genVideoHTML = function(asset,  videoSourceSort){
    if(!asset.src) {
        asset.src=asset.url;
    }
    var dom = document.createElement('div');
    dom.setAttribute('id', asset.name);
    var video = document.createElement('video');
    if(!hasSize(asset)) {
        video.setAttribute('poster', amp.di.width( asset.src, amp.conf.default_size));
    } else {
        video.setAttribute('poster', asset.src);
    }

    try{
        video.setAttribute('preload', 'auto');
    } catch(e) {
    }
    video.setAttribute('controls', '');
    var media = asset.media, sorted;

    if(videoSourceSort){
        sorted = amp.sortVideoSource(media, videoSourceSort);
    }else{
        sorted = media;
    }
    if(sorted) {
        for (var m=0;m<sorted.length;m++) {
            var media = sorted[m];
            var src = document.createElement('source');
            src.setAttribute('src',media.src);
            src.setAttribute('res',media.bitrate);
            src.setAttribute('label',media.profileLabel);
            src.setAttribute('type', amp.videoToFormat(media));
            video.appendChild(src);
        }
    }
    dom.appendChild(video);
    return dom;
}

amp.sortVideoSource = function(media, by){

    if(isArray(by)){
        if(by.length > 0){
            var mediaLen = media.length, result = [];
            for(var c=0; c<by.length;c++){
                for(var i=0; i<mediaLen; i++) {
                    if(by[c] == media[i].profile || by[c] == media[i].profileLabel) {
                        result.push(media[i]);
                    }
                }
            }

            for(var i=0; i<mediaLen; i++) {
                if((indexOf(by, media[i].profile) == -1 )&& (indexOf(by, media[i].profileLabel) == -1)){
                    result.push(media[i]);
                }
            }
            return result;
        }
    } else if(!isNaN(by)){
        return media.sort(function(a,b){
            var indexA = Math.abs(by - parseInt(a.bitrate));
            var indexB = Math.abs(by - parseInt(b.bitrate));

            return indexA - indexB;
        });
    }

    return media;
};

var getIdFromUrl = function(url) {
    var arr = url.split('/');
    var last = arr[arr.length-1];
    return last.split('?')[0];
};

var genAssetHTML = function (asset,lazy, videoSourceSort) {
    var dom;
     if (asset.isImage || asset.type == "img") {

        var dom = document.createElement('img');
        var attr = asset.isImage ? asset.url :  asset.src;

        if(!hasSize(asset)) {
            attr = attr + '?' + webCacheSize(asset);
        }
        if(lazy) {
            dom.setAttribute('data-amp-src', attr);
        } else {
            dom.setAttribute('src', attr);
        }
        dom.setAttribute('class','amp-main-img');
        if(!asset.name) {
            dom.setAttribute('id', getIdFromUrl(attr));
        } else {
            dom.setAttribute('id', asset.name);
        }

    } else if (asset.type == "video" || asset.media ) {
        dom = amp.genVideoHTML(asset, videoSourceSort);
    } else if (asset.items || asset.set.items) {
        var items = asset.items || asset.set.items;
        var dom = document.createElement('ul');
        dom.setAttribute('id', asset.name);
        for (var i = 0; i < items.length; i++) {
            var li = document.createElement('li');
            dom.appendChild(li);
            var child = items[i];
            child.url = asset.url;
            li.appendChild(genAssetHTML(child, lazy));
        }
    }
    return dom;
};

var webCacheSize = function (data) {
    if (data.width > data.height) {
        return 'w='+amp.conf.default_size;
    } else {
        return 'h='+amp.conf.default_size;
    }
};




}());
(function () {
    /**
     * DI Methods
     *
     * @class amp.di
     */

    var diOptions = [
        {shortName: 'cs', fullName: 'grayscale', val: 'gray'},
        {shortName: 'dpi', fullName: 'dpi',type:'number'},
        {shortName: 'dpiFilter', fullName: 'dpiFilter',type:'string'},
        {shortName: 'resize', fullName: 'resize', type:'boolean'},
        {shortName: 'filter', fullName: 'filter', type:'string'},
        {shortName: 'upscale', fullName: 'upscale',  type:'boolean'},
        {shortName: 'bg', fullName: 'background', type:'string'},
        {shortName: 'qlt', fullName: 'quality', type:'number'},
        {shortName: 'cm', fullName: 'compositeMode',type:'string'},
        {shortName: 'cs', fullName: 'colourSpace', type:'string'},
        {shortName: 'maxW', fullName: 'maxWidth', type:'number'},
        {shortName: 'maxH', fullName: 'maxHeight', type:'number'},
        {shortName: 'template', fullName: 'template',type:'array'},
        {shortName: 'w', fullName: 'width', type:'number'},
        {shortName: 'h', fullName: 'height', type:'number'},
        {shortName: 'fmt', fullName: 'format', type:'string'},
        {shortName: 'unsharp', fullName: 'sharpen', type:'string'},
        {shortName: 'crop', fullName: 'crop', type:'string'},
        {shortName: 'pcrop', fullName: 'preCrop',type:'string'},
        {shortName: 'img404', fullName: 'missingImage', type:'string'},
        {shortName: 'sm', fullName: 'scaleMode', type:'string'},
        {shortName: 'strip', fullName: 'strip',  type:'boolean'},
        {shortName: 'orig', fullName: 'original',  type:'boolean'}
        ],
    /**
     * Switches options from longName to shortName and vice versa
     * @method returnAs
     * @param {Array} options The options array
     * @param {String} from shortName|fullName
     * @param {String} to shortName|fullName
     * @private
     */
    returnAs = function(options, from, to){
        for (var i = 0; i < options.length; i++) {
            var key = typeof options[i] == "object" && keys(options[i]); 
            for(var o in options[i]){
                if(options[i].hasOwnProperty(o)){
                    for (var c = 0; c < diOptions.length; c++) {
                        if (diOptions[c][from] == o) {
                            if (diOptions[c].val) options[i][diOptions[c][from]] = diOptions[c].val;
                            //rename object key from to
                            if(diOptions[c][to] != diOptions[c][from]) {
                                options[i][diOptions[c][to]] = options[i][o];
                                delete options[i][o];
                            }
                        }
                    }
                }
            }
        }
        return options;
    },
    removeDuplicates = function(arr){
        var obj = {}, i = arr.length;
        while(i--){
            var key = typeof arr[i] == "object" && keys(arr[i]);
            if(obj[key] && (key!="template")) arr.splice(i,1);
            obj[key] = true;
        }

        return arr;
    },
    buildUrl = function(str, setOptions, caller) {
        var url = str.split('?');
        var optionsArray = url[1] ? querystringToArray(url[1],function(parts, optionsObj){
            !parts[1] ? optionsObj["template"] = parts[0] : optionsObj[parts[0]] = parts[1];
        }) : [];

        if(!optionsArray)
            return false;

        if (!setOptions && !caller)
            return removeDuplicates(optionsArray);

        optionsArray = removeDuplicates(optionsArray);
        if (!setOptions && caller) {
            var specificVal = [];
            for (var i = 0; i < optionsArray.length; i++) {
                if(optionsArray[i][caller]){
                    //only need an array for templates otherwise values should be unique
                     if(caller == "template"){
                        specificVal.push(optionsArray[i][caller])
                    }else{
                        return optionsArray[i][caller];
                     }
                }
            }
            return specificVal.length > 0 ? specificVal : false;
        }

        optionsArray = removeDuplicates(optionsArray.concat(setOptions));
        var params = [];
        for (var i = 0; i < optionsArray.length; i++) {
            var key = keys(optionsArray[i]);
            if (key == "template") {
                var names = optionsArray[i][key];
                if( Object.prototype.toString.call( names ) === '[object Array]' ) {
                    for (var l=0;l<names.length;l++) {
                        params.push(names[l]);
                    }
                } else {
                    params.push(names);
                }
            } else {
                params.push(buildQueryString(optionsArray[i]));
            }


        }

        return url[0] + '?' + params.join("&");
    },
    traverse = function(o, options, filter, caller) {
        for (var i in o) {
            if(o.hasOwnProperty(i)){
                if (o[i] != null && typeof o[i] == "object") {
                    if (o[i].type == "img" || o[i].type == "set" || o[i].type == "video"){
                        if (filter && filter.exclude) {
                            var exclude = false;
                            for (var c = 0; c < filter.exclude.length; c++) {
                                 if (o[i].name == filter.exclude[c]) {
                                   exclude = true;
                                }
                            }
                            if(exclude)
                                continue;
                        }
                       // o[i].src = buildUrl(o[i].src, options, caller);
                    }
                    traverse(o[i], options, filter, caller);
                }else{
                    if((i == "src" && ( o.type == "img" ||  o.type == "set" || o.type == "video"))|| (i == "url" && o.isImage)){
                         o[i] = buildUrl(o[i], options, caller);
                    }
                }
            }
        }
        return o;
    };

    /**
     * Returns an object of the DI options set on a URL
     * @method get
     * @param {String} src A URL string
     */
    amp.di.get = function (src) {
        if(!src) return false;
        return returnAs(buildUrl(src), "shortName", "fullName");
    }

    /**
     * Returns a string or data object with the DI options chosen

     * @method set
     * @param {Object|String} src The source data or url to be set with the given options
     * @param {Array of Objects} options The DI options to be set on string
     * @param {Object} filter Exclude objects by name
     * @return The value passed to the src parameter with the options set
     */
    amp.di.set = function (src, options, filter, caller) {
        if(options){
             !isArray(options) ?
                options = returnAs([options], "fullName", "shortName"):
                options = returnAs(options, "fullName", "shortName")
        }

        return typeof src != "string" ?
            traverse(src, options, filter, caller) :
            buildUrl(src, options, caller);
    };

    /**
     * Method to set the image's colour space to grayscale
     * @method grayscale
     * @param {Object|String} src  Data containing src values or a src string
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the image resolution.  If not set the image will retain its
     * original resolution
     * @method resolution
     * @param {Object|String} src Data containing src values or a src string
     * @param {Integer} option  The number of dots per inch required.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the resampling algorithm to use when changing the image's resolution
     * @method resolutionFilter
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option Accepts string values:
     * q(Quadratic),
     * s(Sinc),
     * l(Lanczos) default,
     * p(Point),
     * c(Cubic)
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the image's background colour. This will only have effect when the image is padded or the original image is transparent
     * @method background
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  The colour required as RGB values
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the compression quality of the image
     * @method quality
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option  An integer value between 1-100
     * @returns The modified value passed to the src param
     */

    /**
     * Method to cut out a section of the image
     * @method crop
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  A string with the values for x,y,w,h respectively.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to cut out a section of the image.  Crops relative to the original image size
     * @method preCrop
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  A string with the values for x,y,w,h respectively.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the image format
     * @method format
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  Accepts the following string values:
     * GIF,
     * JPEG,
     * JPG,
     * PNG,
     * TIFF
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the resizing algorithim to use
     * @method filter
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option Accepts string values:
     * q(Quadratic),
     * s(Sinc),
     * l(Lanczos) default,
     * p(Point),
     * c(Cubic),
     * h(Hermite)
     * @returns The modified value passed to the src param
     */

   /**
     * Method to allow the image to be scaled to a bigger size than the original output.
     * @method upscale
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  Accpets the following string values:
     * true,
    *  false,
    *  padd
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the source colour space to grayscale
     * @method colourSpace
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option Accepts the following string values
     * rgb,
     * rgba,
     * srgb,
     * gray,
     * cmyk,
     * ohta,
     * lab,
     * xyz,
     * hsb,
     * hsl
     * @returns The modified value passed to the src param
     */

    /**
     * Method to resize the image
     * @method resize
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Object} option  An object accepting the following values
     * width,
     * height,
     * scale mode - S(Stretch), TL (Top Left),TC (Top Center),TR (Top Right),ML (Middle Left),
     * MC (Middle Center - Default), MR (Middle Right), BL (Bottom Left), BC (Bottom Center),BR (Bottom Right),
     * e.g., {'w':'asset','h':'i', sm:'S'}
     * @returns The modified value passed to the src param
     */

    /**
     * Method to sharpen the image with an unsharp mask
     * @method sharpen
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option  A string value specifying the following:
     * radius (0-5),
     * sigma (0.01-5),
     * amount (1-300),
     * threshold (1-255),
     * e.g., '4,3,120,220'
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the width of the image
     * @method width
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option The width in pixels.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the height of the image
     * @method height
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option The height in pixels.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the maximum height allowed for the image.  May be overridden at account level
     * @method maxHeight
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option The maximum height in pixels.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the maximum width allowed for the image.  May be overridden at account level
     * @method maxWidth
     * @param {Object|String} src  Data containing src values or a src string
     * @param {Integer} option The maximum width in pixels.
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set the composite operator when the image is applied on top of a background colour
     * @method compositeMode
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option Accepts the following string values:
     * over(default),
     * colo,
     * dark,
     * diff,
     * light,
     * multi,
     * cout,
     * cover
     * @returns The modified value passed to the src param
     */

    /**
     * Method to set an existing transformation template on the image.
     * @method template
     * @param {Object|String} src  Data containing src values or a src string
     * @param {String} option The template name wrapped with the $ symbol. e.g., $mobileTemplate$
     * @returns The modified value passed to the src param
     */

    (function buildDIOptions() {
        for (var i = 0; i < diOptions.length; i++) {
            (function (options) {
                amp.di[options.fullName] = function (src, option) {
                    if(!src) return;
                    var sn = options.fullName != "grayscale" ? options.shortName : null;
                    //checks if has auto filled option
                    var opt = typeof(options.val)!="undefined" ? options.val : option;
                    if(typeof(opt)!="undefined"){
                        var newObj = {};
                        newObj[options.shortName] = opt;
                        return amp.di.set(src, newObj, null, sn);
                    }
                    var val = amp.di.set(src, null, null, sn);
                    switch (options.type) {
                        case 'number':
                            return Number(val);
                        case 'boolean':
                            if(val=='true') {
                                return true;
                            } else if (val=='false') {
                                return false;
                            }
                        case 'string':
                        default:
                            return val
                    }
                }
            })(diOptions[i]);
        }
    })();
}());
(function(){

/**
 * Event binding for Analytics
 *
 * @class amp.stats
 */

var aEvents = [];
aEvents.all = [];

/**
 * Binds a callback to a set of events which can be filtered
 * (e.g. {type:slider,cb:function} will bind cb to all slider events
 * @method bind
 * @param {Object} o The config object
 */
amp.stats.bind = function(o) {
    if(typeof o == "function"){
        aEvents.all.push(o);
        return;
    };
    if(isArray(o)) {
        for (var i=0; i<o.length;i++) {
            amp.stats.bind(o[i]);
        }
        return;
    };
    if(typeof o != "object")
        return;

    if(!o.cb)
        return;

    if(o.type && o.event){
        aPush(o.type+'.'+ o.event, o.cb);
    } else if (o.type) {
        aPush(o.type, o.cb);
    } else if (o.event) {
        aPush(o.event,o.cb);
    }
};
var aPush = function (obj,fn){
    aEvents[obj] ? aEvents[obj].push(fn) :  aEvents[obj] = [fn];
};
 
/**
 * Triggers an event and its callbacks
 * @method event
 * @param {Object} dom The DOM source of the event
 * @param {String} type The type of source for the event e.g. Slider
 * @param {String} name The nature of the event e.g. Click
 * @param {Object} value The value of the event e.g. {'was':2,'now':3}
 */
amp.stats.event = function(dom,type,event,value){
    var cbs = [];
    cbs = cbs.concat(aEvents.all,aEvents[type]?aEvents[type]:[],aEvents[event]?aEvents[event]:[],aEvents[type+'.'+event]?aEvents[type+'.'+event]:[]);
    for (var i=0; i<cbs.length;i++) {
        cbs[i](dom,type,event,value);
    }
};

}());

}());
// amplience-sdk-client v0.1.0
(function ( $ ) {
    $.widget( "amp.ampStack", {
        // Default options.
        options: {
            delay: 3000,
            autoplay:false,
            loop:true,
            fade:false,
            start:1,
            responsive:true,
            center:false,
            parentSize:false,
            gesture:{
                enabled:false,
                fingers:1,
                dir:'horz',
                distance:50
            },
            states:{
                "selected":"amp-selected",
                "seen":"amp-seen"
            }
        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampStack;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function() {
            var _asyncMethods = [],
                self = this,
                children = this._children = this.element.children();
            this.canTouch =  !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);
            this.element.addClass('amp');
            this.element.addClass('amp-stack');
            this.count = this._children.length;
            this._index = Math.max(1,Math.min(this.options.start,this.count));
            children.addClass('amp-layer');
            children.css({'display':'none'});
            children.eq(this._index-1).css('display','block');
            children.eq(this._index-1).addClass(this.options.states.selected + ' ' +this.options.states.seen);
            this._addGestures();
            if(this.options.autoplay) {
                this.play();
            }
            setTimeout(function(_self) {
                return function() {
                    return _self._calcSize();
                }
            }(self),1);

            $(window).bind("resize", function(_self) {
                return function() {
                    return setTimeout($.proxy(_self._calcSize,_self),1);
                }
            }(self));



            this._track("created",{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev()});

        },

        _addGestures : function() {
            if(!this.options.gesture.enabled || !this.canTouch)
                return;
            var start, move, stop, getEvent;

            this._startG = function(e){

                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=this.options.gesture.fingers)
                        return true;
                }

                if (e.originalEvent && e.originalEvent.target && e.originalEvent.target.type === 'range') {
                    return true;
                }

                this.changed = false;
                this.moved = false;
                this.startTouchEvent = e;
                var e = this._getEvent(e);
                this.startPos = this.options.gesture.dir == 'horz' ?  e.pageX - e.target.offsetLeft : e.pageY - e.target.offsetTop;
                $(window).on('touchmove',$.proxy(this._moveG,this));
                $(window).on('touchcancel',$.proxy(this._stopG,this));
                $(window).on('touchend',$.proxy(this._stopG,this));
                return true;
            };

            this._getEvent = function(e) {
                if(e.type == "touchend" || e.type == "touchcancel") {
                    e = this.lastEvent;
                }
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    e = e.originalEvent.touches[0];
                }
                return e;
            };

            this._moveG = function(e){
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=this.options.gesture.fingers)
                        return true;
                }
                if (e.originalEvent && e.originalEvent.target && e.originalEvent.target.type === 'range') {
                    return true;
                }
                this.moved = true;
                this.lastEvent = e;
                e = this._getEvent(e);
                if(this.options.gesture.dir == 'horz' ? e.pageX - this.startPos: e.pageY - this.startPos !=0){
                    return false;
                }
                return true;
            };

            this._stopG = function(e){
                $(window).off('touchmove',$.proxy(this._moveG,this));
                $(window).off('touchcancel',$.proxy(this._stopG,this));
                $(window).off('touchend',$.proxy(this._stopG,this));
                if(this.moved && !this.changed){
                    this.changed = true;
                    e = this._getEvent(e);
                    var endPos = this.options.gesture.dir == 'horz' ?  e.pageX - e.target.offsetLeft : e.pageY - e.target.offsetTop;
                    var diff = endPos - this.startPos;
                    if(Math.abs(diff)<this.options.gesture.distance)
                        return;
                    if(diff>0) {
                        this.prev();
                    } else {
                        this.next();
                    }
                }
            };

            this._children.on('touchstart', $.proxy(this._startG,this));

        },

        _getIndex : function(_index) {
            var children = this._children;
            if(_index > children.length){
                if(!this.options.loop)
                    return _index;
                while(_index > children.length) {
                    _index = _index-children.length;
                }
            } else if(_index<1) {
                if(!this.options.loop)
                    return _index;
                while(_index<1) {
                    _index += children.length;
                }
            }
            return _index;
        },
        play: function(){
            var self = this;
            clearInterval(this.interval);
            this.interval = setInterval(function() {
                self.next();
            },this.options.delay);
            this._track("play",null);
        },
        pause: function(){
            clearInterval(this.interval);
            this._track("pause",null);
        },
        next: function() {
            this.goTo(this._index+1);
        },
        prev: function() {
            this.goTo(this._index-1);
        },
        redraw: function() {
            this._calcSize();
        },
        _calcSize : function() {
            var w,h;
            if ((this.options.responsive) && (this.options.width && this.options.height && this.options.width!='auto' && this.options.height!='auto')) {
                if(!this.options.parentSize) {
                    w  = Math.round((this.element.width()));
                    h =  Math.round((w*(this.options.height/this.options.width)));
                    this.element.height(h);
                } else {
                    w  = Math.round((this.element.parent().width()));
                    h =  Math.round((w*(this.options.height/this.options.width)));
                    if(h > this.element.parent().height()) {
                        h = this.element.parent().height();
                        w = Math.round((h*(this.options.width/this.options.height)));

                    }
                    this.element.width(w);
                    this.element.height(h);
                }
                if(this.options.center) {
                    this.element.css('margin-left',((this.element.parent().width()/2)-(w/2))+'px');
                    this.element.css('margin-top',((this.element.parent().height()/2)-(h/2))+'px');
                }

            } else {
                if (this.options.width && this.options.width!='auto') {
                    this.element.width(this.options.width);
                } else if (this.options.width=='auto') {
                    var biggest = 0;
                    for(var i=0;i<this.count;i++) {

                        for (var i = 0 ; i < this.count; i++) {
                            var elm = this._children.eq(i),
                                display = elm.css('display');
                            elm.css('display','block');
                            biggest = Math.max(elm.outerWidth(true),biggest);
                            elm.css('display',display);
                        }
                    }
                    this.element.width(biggest);
                }
                if (this.options.height && this.options.height!='auto') {
                    this.element.height(this.options.height);
                } else if (this.options.height=='auto') {
                    var biggest = 0;
                    for(var i=0;i<this.count;i++) {
                        for (var i = 0 ; i < this.count; i++) {
                            var elm = this._children.eq(i),
                                display = elm.css('display');
                            elm.css('display','block');
                            var h = elm.outerHeight(true);
                            biggest = Math.max(elm.outerHeight(true),biggest);
                            elm.css('display',display);
                        }
                    }
                    this.element.height(biggest);
                }
            }
        },
        _onFinish: function() {
            var count = 1,
                self = this;
            while(this._asyncMethods.length!=0) {
                var method = this._asyncMethods.splice(0,1)[0];
                if(method.func && method.args) {
                    setTimeout(function(){
                        if (method && method.func) {
                            method.func.apply(self,method.args);
                        }
                    },count);
                    count++
                }
            }
        },
        visible: function(visible, parent) {
            if (visible != this._visible) {
                this._track('visible',{'visible':visible});
                this._visible = visible;
                this.callChildMethod(this._children.eq(this._index-1),'visible',visible)
                if(visible)
                    this._calcSize();
            }
        },
        callChildMethod: function(element,type,value) {
            var recursive = function(children) {
                for(var m=0;m<children.length;m++) {
                    var found = false,
                        child = $(children[m]),
                        components = child.data();
                    for (var c in components) {
                        if(components.hasOwnProperty(c)){
                            var component = components[c];
                            if(component[type] && typeof component[type] == 'function' && c.substring(0,3)=='amp'){
                                component[type](value);
                                found = true;
                            }
                        }
                    }
                    // go through only one amp-component deep
                    if(!found) {
                        recursive(child.children());
                    }
                }
            };
            recursive(element.children());
        },
        goTo:function(_index,triggered,noAnim) {
            _index = parseInt(_index);

            if(isNaN(_index))
                return;

            if(this._animating) {
                this._asyncMethods.push({func:this.goTo,args:arguments});
                return;
            }

            if(!triggered) {
                this._exeBinds(_index,'goTo');
            }

            if(this._getIndex(_index) == this._index)
                return;

            if(_index > this.count){
                if(!this.options.loop)
                    return;
                while(_index > this.count) {
                    _index = _index-this.count;
                }
                this._track("looped","forwards");
            } else if(_index<1) {
                if(!this.options.loop)
                    return;
                while(_index<1) {
                    _index += this.count;
                }
                this._track("looped","backwards");
            }
            if(!noAnim) {
                this._animate(_index);
            }
        },

        _exeBinds:function(value,on){
            // triggering goTos and Selects on elements set up by ampNav
            if(!this._boundArray)
                return;
            for (var i = 0; i < this._boundArray.length; i++) {
                var obj = this._boundArray[i];
                if(on && on!=obj.on)
                    continue;
                var $target = $(obj.selector);
                var components = $target.data();
                for (var c in components) {
                    if(components.hasOwnProperty(c)){
                        var component = components[c];
                        if(component[obj.action] && c.substring(0,3)=='amp'){
                            component[obj.action](value,true);
                        }
                    }
                }
            }
        },
        _numToIndex:function(num){
            if(num > this.count){
                if(!this.options.loop)
                    return this.count;
                while(num > this.count) {
                    num = num-this.count;
                }
            } else if(num<1) {
                if(!this.options.loop)
                    return 1;
                while(num<1) {
                    num += this.count;
                }
            }
            return num;
        },
         bind:function(options) {
            if(!this._boundArray)
                this._boundArray = [];
            this._boundArray.push(options);
        },
        canPrev : function() {
            return this.options.loop || this._index>1;
        },
        canNext : function() {
            return this.options.loop || this._index<this.count;
        },
        _animate : function(_index){
            var items = this.element,
                currItem  = items.children('li').eq(this._index - 1),
                nextItem = items.children('li').eq(_index - 1);

            currItem.removeClass(this.options.states.selected);
            if(this.options.fade){
                currItem.fadeOut();
            } else {
                currItem.css('display','none');
            }

            nextItem.addClass(this.options.states.selected + ' ' +this.options.states.seen);
            if(this.options.fade){
                nextItem.fadeIn();
            } else {
                nextItem.css('display','block');
            }
            this._setIndex(_index);
        },
        _setIndex:function(index, noVisibilityToggle) {
            if (!noVisibilityToggle) {
                var elmWas = this._children.eq(this._index-1);
                var elm = this._children.eq(index-1);

                this.callChildMethod(elm,'visible',true);
                this.callChildMethod(elmWas,'visible',false);
            }

            this._index = index;
            this._track("change",{'index':index,'canPrev':this.canPrev(),'canNext':this.canNext()});
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'stack',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-stack');
            this._removeEmptyAttributeHelper(this.element);
            var children = this._children;
            children.removeClass('amp-layer');
            children.removeClass(this.options.states.selected);
            children.removeClass(this.options.states.seen);
            children.css('display','');
            for (var i=0,len=children.length;i<len;i++ ) {
                this._removeEmptyAttributeHelper($(children[i]));
            }
        },
        _removeEmptyAttributeHelper:function(elm, attsToCleanIfEmpty){
            var attArr = attsToCleanIfEmpty || ['class','style'];
            for (var i= 0,len=attArr.length;i<len;i++ ) {
                if(!(elm.attr(attArr[i]) && elm.prop(attArr[i]))){
                    elm.removeAttr(attArr[i]);
                }
            }
        }
    });


}( jQuery ));
(function ( $ ) {

    $.widget( "amp.ampCarousel",$.amp.ampStack, {
        options:{
            animDuration : 250,
            easing : '',
            dir : 'horz',
            animate:true,
            layout:'standard',
            start:1,
            preferForward: false,
            no3D: false,
            thumbWidthExceed:0,
            gesture:{
                enabled:false,
                fingers:2,
                distance:50
            },
            onActivate: {
                select:true,
                goTo:true
            },
            preloadNext:true,
            responsive:true,
            states : {
                visible : 'amp-visible',
                partiallyVisible: 'amp-partially-visible'
            },
            animationStartCallback: function(){},
            animationEndCallback: function(){}
        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampCarousel;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _layoutManagers:{},
        _create: function() {

            this._elms = [];
            this._visible = 0;
            this._asyncMethods = [];
            this._canNext = true;
            this._movedCounter = 0;
            var self = this;

            this.options.delay = Math.max(this.options.delay,this.options.animDuration+1);
            this.options.animDuration = this.options.animate ? this.options.animDuration : 1;
            this.canTouch =  !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);
            this.element.addClass('amp');
            this.element.addClass('amp-carousel');
            this.element.wrapInner("<div class='amp-anim-container' style='width:100%;height:100%;position:absolute'></div>");
            this._container = this.element.children().eq(0);
            this._containerPos = 0;
            this._children = this.element.children().eq(0).children();
            this.count = this._children.length;
            this._checkCSS3();
            this._index = Math.max(1,Math.min(this.options.start,this.count));
            this._selectedIndex = this._index;
            this._children.addClass('amp-slide');
            this._calcSize();
            this._chooseLayoutManager();

            this._children.eq(this._index-1).addClass(this.options.states.selected);

            if(this.options.onActivate.goTo || this.options.onActivate.select ) {
                for (var i = 0 ; i < this.count; i++) {
                    var start = function() {
                        self.moved = false;
                        $(window).on(!this.canTouch?'mousemove':'touchmove', $.proxy(move,self));
                    };
                    var move = function(evt) {
                        self._movedCounter +=1;
                        if(self._movedCounter >= 3){
                            self.moved = true;
                        }
                    };
                    var activate = (function(_i){
                        var me = self;
                        return function(e){
                            $(window).off(!this.canTouch?'mousemove':'touchmove', $.proxy(move,self));
                            if(me.moved)
                                return true;
                            if (me.options.onActivate.goTo)
                                me.goTo(_i);
                            if (me.options.onActivate.select)
                                me.select(_i);
                            return true;
                        }
                    }(i+1));

                    this._children.eq(i).on(!this.canTouch?'mousedown':'touchstart', $.proxy(start,self));
                    this._children.eq(i).on(!this.canTouch?'mouseup':'touchend',$.proxy(activate,self));
                }
            }

            this._calcSize();
            setTimeout($.proxy(this._calcSize,this),1);

            if(this.options.responsive){
                $(window).bind("resize", function(_self) {
                    return function() {
                        return setTimeout($.proxy(_self.redraw,_self),1);
                    }
                }(self));
            }


            if(this.options.autoplay) {
                this.play();
            }

            this._preloadNext();
            this._track("created",{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev(),'visible':this._visible, 'count':this.count});
        },
        _chooseLayoutManager : function(){
            var chosenLayout,
                layout
            if( Object.prototype.toString.call( this.options.layout ) === '[object Array]' ) {
                for (var i=0; i<this.options.layout.length;i++) {
                    layout = this._layoutManagers[this.options.layout[i]];
                    if (this.checkFeatures(layout)) {
                        chosenLayout = layout;
                        break;
                    }
                }
            } else {
                layout = this._layoutManagers[this.options.layout];
                if (this.checkFeatures(layout)) {
                    chosenLayout = layout;
                }
            }
            if (!chosenLayout) {
                chosenLayout = this._layoutManagers.standard;
            }
            this._layoutManager = chosenLayout.create(this);
        },
        _calcSize: function() {
            this._super();
            if(this._layoutManager)
                this._layoutManager.layout(this._index);
            this._track('resized',{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev(),'visible':this._visible, 'count':this.count});
        },
        _firstCharLowerCase : function(str) {
            return (str.substr(0,1).toLowerCase()+str.substr(1));
        },
        _dashConvert: function(val) {
            var str = '';
            for(var i =0; i<val.length; i++) {
                var c = val.substr(i,1);
                if (c === c.toUpperCase()) {
                    str+='-'+c.toLowerCase();
                } else {
                    str+=c;
                }
            }
            return str;
        },
        _checkCSS3: function() {
            var prefixes = ['', 'Webkit','Moz','O','ms','Khtml'],
                cssChecks = [{'name':'transform','dom':'Transform'},{'name':'transition','dom':'Transition'},{name:'transitionDuration',dom:'TransitionDuration'},{name:'transitionTimingFunction',dom:'TransitionTimingFunction'},{name:'anim',dom:'AnimationName'}],
                elm = this.element[0],
                el = document.createElement('p');
            this._canCSS3 = {};
            document.body.insertBefore(el, null);
            for( var i = 0; i < prefixes.length; i++ ) {
                var pre = prefixes[i];
                for (var j = 0; j < cssChecks.length; j++) {
                    var o =  cssChecks[j];
                    if(this._canCSS3[o.name])
                        continue;
                    if(elm.style[ pre + o.dom ] !== undefined) {
                        this._canCSS3[o.name] = pre+ o.dom;
                    }
                    if(elm.style[ pre + this._firstCharLowerCase(o.dom) ] !== undefined) {
                        this._canCSS3[o.name] = pre+this._firstCharLowerCase(o.dom);
                    }
                }
            }
            if(this._canCSS3.transform && !this.options.no3D) {
                if (el.style[this._canCSS3.transform] !== undefined) {
                    el.style[this._canCSS3.transform] = "translate3d(1px,1px,1px)";
                    var computed = window.getComputedStyle(el).getPropertyValue(this._dashConvert(this._canCSS3.transform));
                    this._canCSS3.can3D = ((computed !=null) && (computed != ""));
                }
            }
            document.body.removeChild(el);
        },
        _direction : function(index) {

            if(!this.options.loop) {
                return index>this._index;
            }
            var forw=0, back=0;
            this._index = Math.min(this._index,this.count);
            var oIndex =  this._index;
            while(oIndex!=index) {
                if(oIndex>this.count){
                    oIndex = 1;
                    continue;
                } else {
                    oIndex++;
                }
                forw++
            }
            oIndex = this._index;
            while(oIndex!=index) {
                if(oIndex<1) {
                    oIndex = this.count;
                    continue;
                } else {
                    oIndex--;
                }
                back++;
            }
            if(this.options.preferForward) {
                if(forw>1 && back >1) {
                    return true;
                }
            }
            return forw<=back;
        },
        _loopIndex : function(dir,start,count) {
            var inc = dir ? 1 : -1;
            var curr = start;
            for (var i= 0;i<count;i++) {

                if(curr+inc>this.count){
                    curr = 1;
                } else if(curr+inc<1) {
                    curr = this.count
                } else {
                    curr = curr + inc;
                }

            }
            return curr;
        },
        _loopCount : function(dir,start,target) {
            target = Math.min(target,this.count);
            var inc = dir ? 1 : -1;
            var curr = start;
            var count = 0;
            while(curr != target) {
                count++;
                if(curr+inc>this.count){
                    curr = 1;
                } else if(curr+inc<1) {
                    curr = this.count
                } else {
                    curr = curr + inc;
                }
            }
            return count;
        },
        _resetPos: function(elm) {
            if(this._canCSS3.transform && this._canCSS3.transition) {
                elm.css(this._canCSS3.transform,'');
            } else {
                if(this.options.dir=='horz') {
                    elm.css('left','');
                } else {
                    elm.css('top','');
                }
            }
        },
        _removeStates: function() {
            this._children.removeClass(this.options.states.visible);
            this._children.removeClass(this.options.states.partiallyVisible);
        },
        _setState: function(elm,state) {
            switch(state) {
                case 'visible' :
                    elm.addClass(this.options.states.visible);
                    elm.addClass(this.options.states.seen);
                    this.callChildMethod(elm,'visible',true);
                    break;
                case 'invisible' :
                    elm.removeClass(this.options.states.visible);
                    this.callChildMethod(elm,'visible',false);
                    break;
                case 'partial' :
                    elm.addClass(this.options.states.partiallyVisible);
                    this.callChildMethod(elm,'visible',false);
                    break;

            }
        },
        _posElm: function(elm,num,index,add) {
            if (!this._elms[index])
                this._elms[index] = 0;
            var number = add ? this._elms[index]+num : num//, transform;
            if(this._canCSS3.transform && this._canCSS3.transition) {
                if(this._canCSS3.can3D) {
                    //transform = elm.css(this._canCSS3.transform);
                    if(this.options.dir=='horz') {
                        elm.css(this._canCSS3.transform,'translate3d('+number+'px,0,0)');
                    } else {
                        elm.css(this._canCSS3.transform,'translate3d(0,'+number+'px,0)');
                    }
                } else {
                    if(this.options.dir=='horz') {
                        elm.css(this._canCSS3.transform,'translate('+number+'px,0)');
                    } else {
                        elm.css(this._canCSS3.transform,'translate(0,'+number+'px)');
                    }
                }
            } else {
                if(this.options.dir=='horz') {
                    elm.css('left',number+'px');
                } else {
                    elm.css('top',number+'px');
                }
            }
            this._elms[index] = number;
        },
        _preloadNext:function(){
            if(this.options.preloadNext) {
                var num = this._visible + (this._index - 1);
                var index = this._loopIndex(true,num,1);
                var nextNextItem = this._children.eq(index-1);
                this.callChildMethod(nextNextItem,'preload',true);
            }
        },
        _measureElements : function (dir,index,count) {
            var size = 0,
                horz = this.options.dir == 'horz';

            for (var i=0; i<count; i++) {

                var eindex = dir? index+i:index-i;
                if (eindex > this.count) {
                    eindex = 1;
                }
                if(eindex < 1) {
                    eindex = this.count;
                }
                size += this._measureElement(eindex-1);
            }
            return dir ? 0-size : size;
        },
        _moveElements : function(howMuch,onDone,animate) {

            var $container = this._container,
                self = this;

            // if the position is the same, don't bother moving and fire the cb (transitionend won't fire without change)
            if(this._containerPos == howMuch) {
                if(self._canCSS3.transform && self._canCSS3.transitionDuration) {
                    $container.css(self._canCSS3.transitionTimingFunction, '');
                    $container.css(self._canCSS3.transitionDuration,'');
                }
                if(onDone)
                    onDone();
                return;
            }
            this._containerPos = howMuch;

            self.options.animationStartCallback();

            if(!animate) {
                if(self._canCSS3.transform && self._canCSS3.transitionDuration) {
                    var transform = self._canCSS3.can3D ? (self.options.dir=='horz'?'translate3d('+howMuch+'px,0,0)':'translate3d(0, '+howMuch+'px,0)') : (self.options.dir=='horz'?'translateX('+howMuch+'px)':'translateY('+howMuch+'px');
                    $container.css(self._canCSS3.transform,transform);
                } else {
                    if(self.options.dir=='horz'){
                        $container.css('left',howMuch+'px');
                    } else {
                        $container.css('top',howMuch+'px');
                    }
                }
                if(onDone)
                    onDone();

                return;
            }

            if(self._canCSS3.transform && self._canCSS3.transitionDuration) {
                var transform = self._canCSS3.can3D ? (self.options.dir=='horz'?'translate3d('+howMuch+'px,0,0)':'translate3d(0, '+howMuch+'px,0)') : (self.options.dir=='horz'?'translateX('+howMuch+'px)':'translateY('+howMuch+'px');
                $container.css(self._canCSS3.transform,transform);
                $container.css(self._canCSS3.transitionTimingFunction, self.options.easing);
                $container.css(self._canCSS3.transitionDuration, self.options.animDuration + 'ms');

                $container.off().on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    $container.css(self._canCSS3.transitionTimingFunction, '');
                    $container.css(self._canCSS3.transitionDuration,'');
                    if(onDone)
                        onDone();
                    self.options.animationEndCallback();
                });
            } else {
                var anim = {};
                if(self.options.dir=='horz'){
                    anim.left = howMuch+'px';
                } else {
                    anim.top = howMuch+'px';
                }
                $container.animate(anim, self.options.animDuration,'swing',function(){
                    if(onDone)
                        onDone();
                    self.options.animationEndCallback();
                });
            }

        },
        _measureElement : function (index) {
            var size,
                horz = this.options.dir == 'horz',
                elm = this._children.eq(index),
                clientHeight = elm[0].getBoundingClientRect().height;

            elm.css('display','block');
            if(horz) {
                size = elm.outerWidth(true);
            } else {
                size = elm.outerHeight(true);
                if(clientHeight && (size - clientHeight <= 1)){
                    size = clientHeight;
                }
                if(!clientHeight){
                    size = elm.outerHeight(true) - 1;
                }
            }
            elm.css('display','');
            return size;
        },
        _elmSize : function() {
            return this.options.dir=='horz' ? this.element.width(): this.element.height();
        },
        _animate : function(_index){
            var self = this;
            this._animating = true;
            this._layoutManager.focus(_index,true,function(){
                self._setIndex(_index);
            });

        },
        _setIndex : function (_index) {
            this._index = _index;
            this._track("change",{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev(),'visible':this._visible, 'count':this.count});
            this._animating = false;
            this._preloadNext();
            this._onFinish();
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'carousel',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-carousel');
            this._removeEmptyAttributeHelper(this.element);
            var c = this._children;
            c.removeClass('amp-slide');
            c.removeClass(this.options.states.visible);
            c.removeClass(this.options.states.partiallyVisible);
            c.removeClass(this.options.states.selected);
            c.removeClass(this.options.states.seen);
            for (var i=0;i<c.length;i++ ) {
                var elm = c.eq(i);
                this._resetPos(elm,0);
                this._removeEmptyAttributeHelper(elm);
            }
            this._container.replaceWith(c);

        },
        checkFeatures: function(lm) {
            if (lm) {
                if(lm.requiredFeatures) {
                    var passed = true;
                    for (var i=0; i<lm.requiredFeatures.length; i++) {
                        var feature = lm.requiredFeatures[i];
                        if(!this._canCSS3[feature]) {
                            passed = false;
                        }
                    }
                    return passed;
                } else {
                    return true;
                }
            }
            return false;
        },
        canNext : function() {
            return this.options.loop || (this._canNext && this._index + this._visible <= this.count);
        },
        redraw:function(){
            if(this._animating) {
                this._asyncMethods.push({func:self._calcSize,args:arguments});
                return;
            }
            return this._calcSize();
        },
        select : function(num,triggered) {
            var _index = this._numToIndex(num),
                currItem  = this._children.eq(this._selectedIndex-1),
                nextItem = this._children.eq(_index-1);

            var mainSize = 0;
            currItem.removeClass(this.options.states.selected);
            nextItem.addClass(this.options.states.selected + ' ' +this.options.states.seen);
            this._selectedIndex = _index;
            if(!nextItem.hasClass(this.options.states.visible)) {
                this.goTo(_index,triggered);
            }
            if(!triggered) {
                this._exeBinds(_index,'select');
            }
            this._preloadNext();
            this._track("selected",{'index':_index});
        }
    });
    // -----------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------STANDARD LAYOUT MANAGER
    // -----------------------------------------------------------------------------------------------------------------
    (function(){
        var standard = function(widget,options){
            function Manager() {
                this.name = 'standard';
                this.options = options;
                this.duplicated = [];
            }

            var m = Manager.prototype;
            m.init = function() {
                if(widget.canTouch && widget.options.gesture.enabled) {
                    widget._children.on('touchstart', $.proxy(this.start,this));
                }
                else{
                    widget._children.on('mousedown', $.proxy(this.start,this));
                }
            };

            m.start = function(e){
                if(this.animating)
                    return;
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=widget.options.gesture.fingers)
                        return true;
                }
                this.duplicationOffsets = {};
                this.duplicationOffsets.left = 0;
                this.duplicationOffsets.leftSize = 0;
                this.duplicationOffsets.right = 0;
                this.duplicationOffsets.rightSize = 0;
                this.changed = false;
                this.startPos = widget._containerPos;
                this.moved = false;
                this.startTouchEvent = e;
                var e = this.getEvent(e);
                this.xo = e.pageX - widget._containerPos;
                this.yo = e.pageY - widget._containerPos;
                this.xo2 = e.pageX;
                this.yo2 = e.pageY;
                $(window).on('touchmove',$.proxy(this.move,this));
                $(window).on('touchcancel',$.proxy(this.stop,this));
                $(window).on('touchend',$.proxy(this.stop,this));
                $(window).on('mouseup',$.proxy(this.stop,this));
                return true;
            };

            m.move = function(e){
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=widget.options.gesture.fingers)
                        return true;
                }
                this.moved = true;
                this.lastEvent = e;

                e = this.getEvent(e);
                var mx = e.pageX - this.xo;
                var my = e.pageY - this.yo;
                var mx2 = e.pageX - this.xo2;
                var my2 = e.pageY - this.yo2;
                if(!this.moveDir) {
                    if(Math.abs(mx2)< Math.abs(my2)) {
                        this.moveDir = 'vert';
                    } else if (Math.abs(mx2)> Math.abs(my2)){
                        this.moveDir = 'horz';
                    } else {
                        this.moveDir = widget.options.dir;
                    }
                }
                if(widget.options.dir != this.moveDir){
                    return true;
                }

                var offset = widget.options.dir == 'horz' ? mx : my;
                widget._moveElements(offset,null,false);

                if(widget.options.loop) {
                    this.checkDuplicate(offset)
                }

                if(widget.options.dir == this.moveDir){
                    return false;
                }
            };

            m.checkDuplicate = function(offset) {
                if (offset-this.metrics[this.lastOne-1].size<0-(this.allSize-widget._elmSize())){
                    this.duplicateSlide(true);
                }

                if (0-offset-this.metrics[0].size <= 0-this.duplicationOffsets.leftSize){
                    this.duplicateSlide(false);
                }
            };

            m.duplicateSlide = function(dir) {
                if(dir){
                    var i=widget._numToIndex(widget._index-1+widget.count+this.duplicationOffsets.right+1)-1;
                    var elm = widget._children.eq(i);
                    var clone = elm.clone();
                    widget._container.append(clone);
                    var cloneSize = widget.options.dir=='horz' ? clone.width() : clone.height();
                    var target = this.allSize;
                    widget._posElm(clone,target,this.count+this.duplicated.length);
                    this.duplicated.push(clone);
                    this.duplicationOffsets.right++;
                    this.duplicationOffsets.rightSize+=cloneSize;
                    this.lastOne=i+1;
                    this.allSize+=cloneSize;
                } else {
                    var i=widget._numToIndex(widget._index-1-this.duplicationOffsets.left)-1;
                    var elm = widget._children.eq(i);
                    var clone = elm.clone();
                    widget._container.append(clone);
                    var cloneSize = widget.options.dir=='horz' ? clone.width() : clone.height();
                    var target = 0-this.duplicationOffsets.leftSize-cloneSize;
                    widget._posElm(clone,target,this.count+this.duplicated.length);
                    this.duplicated.push(clone);
                    this.duplicationOffsets.left++;
                    this.duplicationOffsets.leftSize+=cloneSize;
                }
            };

            m.stop = function(e){
                widget._movedCounter = 0;
                $(window).off('touchmove',$.proxy(this.move,this));
                $(window).off('touchcancel',$.proxy(this.stop,this));
                $(window).off('touchend',$.proxy(this.stop,this));
                $(window).off('mouseup',$.proxy(this.stop,this));
                this.moveDir = null;
                if(this.moved && !this.changed){
                    if(widget.preventStop){
                        widget.preventStop = false;
                        return;
                    }
                    var nearest = this.findNearest();
                    var nearestIndex = nearest.index+1;
                    if (nearestIndex == widget._index) {
                        // we are closest to our original position, but how far did we move?
                        var diff = this.startPos - widget._containerPos;
                        if(Math.abs(diff)>=widget.options.gesture.distance) {
                            if(diff>0) {
                                if(widget.canNext()) {
                                    widget.next();
                                } else {
                                    widget._moveElements(this.startPos,null,true);
                                }
                            } else {
                                if(widget.canPrev()) {
                                    widget.prev();
                                } else {
                                    widget._moveElements(this.startPos,null,true);
                                }
                            }
                        } else {
                            widget._moveElements(this.startPos,null,true);
                        }
                        this.changed = true;
                        if (widget.options.loop) {
                            widget._containerPos = 0;
                        }
                        return;
                    }
                    if (!widget.options.loop) {
                        this.changed = true;
                        widget.goTo(nearestIndex);
                    } else {
                        this.animating = true;
                        widget._moveElements(nearest.pos, $.proxy(function(){
                            this.allSize = this.oAllSize;
                            this.focus(nearestIndex,false);
                            widget._containerPos = 0;
                            widget._setIndex(nearestIndex);
                            widget.goTo(nearestIndex,null,true);
                            this.changed = true;
                            this.animating = false;
                        },this),true);

                    }
                }
                widget.preventStop = false;
            };

            m.getEvent = function(e) {
                if(e.type == "touchend"  || e.type == "touchcancel") {
                    e = this.startTouchEvent;
                }
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    e = e.originalEvent.touches[0];
                }
                return e;
            };

            m.findNearest = function() {
                var index = 0;
                var target = widget._containerPos;
                var smallest = this.oAllSize;
                var multi = 0;
                if(widget.options.loop) {
                    while(target<0-this.oAllSize) {
                        target += this.oAllSize;
                        multi--;
                    }
                    while(target>0) {
                        target -= this.oAllSize;
                        multi++;
                    }
                }
                for (var i =0; i<this.metrics.length; i++){
                    var diff = Math.abs(target + this.metrics[i].pos);
                    if (diff<smallest) {
                        smallest = diff;
                        index = i;
                    }
                }
                // test the end position as well!
                var end = widget._numToIndex(widget._index+widget.count-1)-1;
                var diff = Math.abs(target + (this.metrics[end].pos+this.metrics[end].size));
                if (diff<smallest) {
                    smallest = diff;
                    index = widget._index-1;
                    target += this.oAllSize;
                }
                var offset = target>=0? this.metrics[index].pos+(this.oAllSize*(multi-1)) : (0-this.metrics[index].pos)+(this.oAllSize*multi);
                return {index:index,pos:offset};
            };

            m.layout = function(_index) {
                if(!widget.options.loop){
                    this.arrange(1);
                    this.focusNoLoop(_index,false);
                } else {
                    this.arrange(_index);
                    this.focusLoop(_index, false);
                }
            };

            m.focus= function(_index,anim,cb) {
                if(!widget.options.loop){
                    this.focusNoLoop(_index,anim);
                    if(cb)
                        cb();
                } else {
                    this.focusLoop(_index,anim,cb);
                }
            };

            m.focusNoLoop= function(_index,anim) {
                var target = 0-this.metrics[_index-1].pos;
                var min = 0-(this.allSize-widget._elmSize());
                target = Math.min(Math.max(min, target),0);
                this.setVisibleStates(_index,target);
                widget._moveElements(target,null,anim);
            };

            m.setVisibleStates = function(_index,target) {
                var target = Math.abs(target);
                widget._removeStates();
                var visible = 0;
                for (var i=0; i<this.metrics.length; i++) {
                    var pos = this.metrics[i].pos;
                    var elm = widget._children.eq(i);
                    var elmSize = this.metrics[i].size;
                    var bounds = parseFloat(widget._children.eq(i).css('margin-right')) * 2;

                    if (pos >= target && (pos + elmSize - widget.options.thumbWidthExceed - bounds - target) <= widget._elmSize()) {
                        widget._setState(elm, 'visible');
                        visible++;
                    } else if ((pos + elmSize - bounds > target && (pos + elmSize - bounds - target) < widget._elmSize()) || (pos > target && (pos - target) < widget._elmSize())) {
                        widget._setState(elm, 'partial');
                    } else {
                        widget._setState(elm, 'invisible');
                    }
                }
                widget._visible = visible;
            };

            m.focusLoop= function(_index,anim,cb) {
                var self = this,
                    dir = (widget._direction(_index)),
                    target = dir ? 0-this.metrics[_index-1].pos : this.allSize - this.metrics[_index-1].pos,
                    diff = widget._loopCount(dir,widget._index,_index);
                this.duplicate(dir);

                this.setVisibleStates(_index,target);

                widget._moveElements(target,function(){
                    widget._container[0].style[widget._canCSS3.transform] = '';
                    widget.options.dir === 'horz' ? widget._container[0].style.left = '' : widget._container[0].style.top = '';
                    self.arrange(_index);
                    while (self.duplicated.length > 0) {
                        var obj = self.duplicated.splice(0,1);
                        obj[0].remove();
                        delete obj[0];
                    }
                    if(cb)
                        cb();
                },anim);
            };

            m.duplicate= function(dir){
                for (var i=0; i<widget.count; i++) {
                    var elm = widget._children.eq(i);
                    var clone = elm.clone();
                    widget._container.append(clone);
                    var target = dir ?this.metrics[i].pos+this.allSize :this.metrics[i].pos-this.allSize ;
                    widget._posElm(clone,target,this.count+this.duplicated.length);
                    this.duplicated.push(clone);
                    var borderW = elm.css('box-sizing') == 'border-box' ? elm.css('borderBottomWidth')
                    + elm.css('borderTopWidth') : 0;
                    var borderH = borderW ? elm.css('borderLeftWidth') + elm.css('borderRightWidth') : 0;
                    clone.css({
                        width: elm.width() + borderW,
                        height: elm.height() + borderH
                    });

                }
            };

            m.arrange= function (index) {
                var offset = 0,
                    metrics = [],
                    sizes = [];
                widget._removeStates();
                for (var s=0; s<widget.count; s++) {
                    var i = s;
                    if(index !== void 0){
                        i+=index-1;
                        while(i>=widget.count){
                            i-=widget.count;
                        }
                    }
                    var elm = widget._children.eq(i);
                    var eSize = widget._measureElement(i);
                    if(eSize+offset<=widget._elmSize()) {
                        widget._setState(elm,'visible');
                    } else if (offset<widget._elmSize()) {
                        widget._setState(elm,'partial');
                    } else {
                        widget._setState(elm,'invisible');
                    }
                    metrics[i] = {};
                    metrics[i].size = eSize;
                    metrics[i].pos = offset;
                    widget._posElm(elm,offset,i);
                    sizes[i] = (eSize);
                    offset += eSize;
                }
                if(widget.options.loop){
                    widget._containerPos = 0;
                }
                this.lastOne = index;
                delete this.metrics;
                this.metrics = metrics;
                this.allSize = offset;
                this.oAllSize = offset;
                return {allSize:offset,metrics:metrics};
            };
            var mo = new Manager( );
            mo.init();
            return mo;

        };

        $.amp.ampCarousel.prototype._layoutManagers['standard'] = {'requiredFeatures':null,'create':standard};
    }());


    // -----------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------- 3D Layout Manager
    // -----------------------------------------------------------------------------------------------------------------
    // Made with help from: 'Intro to CSS 3D transforms' By David DeSandro
    (function(){
        var carousel3D = function(widget,options){
            var transformProp = widget._canCSS3.transform;
            function Manager() {
                this.name = 'carousel3D';
                this.options = options;
                this.styles = [];
                this.angles = [];
            }
            var m = Manager.prototype;

            m.init = function() {
                var self = this;
                this.element = widget._container[0];
                this.rotation = 0;
                this.panelCount = widget.count;
                this.totalPanelCount = this.element.children.length;
                this.theta = 0;
                this.isHorizontal = widget.options.dir == 'horz';
                widget._container.css('perspective','1000px');
                this.modify();
                setTimeout(function(){
                    self.animation(true);
                },10);
                if(widget.canTouch && widget.options.gesture.enabled) {
                    widget._children.on('touchstart', $.proxy(this.start,this));
                }
            };

            m.animation = function(enable) {
                if (enable) {
                    widget._children.css('transitionTimingFunction',widget.options.easing);
                    widget._children.css('transitionDuration',widget.options.animDuration+'ms');
                } else {
                    widget._children.css('transitionTimingFunction','');
                    widget._children.css('transitionDuration','');
                }
            };

            m.start = function(e) {
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=widget.options.gesture.fingers)
                        return true;
                }
                var e = this.getEvent(e);
                this.xo = e.pageX - e.target.offsetLeft;
                this.yo = e.pageY - e.target.offsetTop;

                this.changed = false;
                this.moved = false;
                this.animation(false);
                this.startPos = this.rotation;

                $(window).on('touchmove',$.proxy(this.move,this));
                $(window).on('touchcancel',$.proxy(this.stop,this));
                $(window).on('touchend',$.proxy(this.stop,this));

            };

            m.move = function(e) {

                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=widget.options.gesture.fingers)
                        return true;
                }
                this.lastEvent = e;
                this.moved = true;
                e = this.getEvent(e);
                var mx = e.pageX - this.xo;
                var my = this.yo - e.pageY;
                var diff = widget.options.dir == 'horz' ? mx : my;
                if(diff>0) {
                    diff = Math.min(this.theta/2,diff/10)
                } else {
                    diff = Math.max(0-(this.theta/2),diff/10);
                }
                this.rotation = this.startPos + diff;
                this.transform();
                return false;
            };

            m.getEvent = function(e) {
                if(e.type == "touchend" || e.type == "touchcancel") {
                    e = this.lastEvent;
                }
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    e = e.originalEvent.touches[0];
                }
                return e;
            };

            m.stop = function(e) {
                $(window).off('touchmove',$.proxy(this.move,this));
                $(window).off('touchcancel',$.proxy(this.stop,this));
                $(window).off('touchend',$.proxy(this.stop,this));
                this.animation(true);
                if(this.moved && !this.changed){
                    e = this.getEvent(e);
                    var mx = e.pageX - this.xo;
                    var my = this.yo - e.pageY;
                    var diff = widget.options.dir == 'horz' ? mx : my;
                    this.rotation = this.startPos;
                    // we are closest to our original position, but how far did we move?
                    if(Math.abs(diff)>=widget.options.gesture.distance) {
                        if(diff<0) {
                            if(widget.canNext()) {
                                widget.next();
                                return;
                            }
                        } else {
                            if(widget.canPrev()) {
                                widget.prev();
                                return;
                            }
                        }
                    }
                    this.transform();
                    this.changed = true;
                }
            };

            m.modify = function() {

                var panel, angle, i;
                this.xOffset = widget._container.width()/2 - widget._children.eq(0).width()/2;
                this.yOffset = widget._container.height()/2 - widget._children.eq(0).height()/2;
                this.panelSize = this.isHorizontal ? widget._children.eq(0).width() : widget._children.eq(0).height();
                this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
                this.theta = 360 / this.panelCount;

                // do some trig to figure out how big the carousel is in 3D space
                this.radius = Math.round( ( this.panelSize / 2) / Math.tan( Math.PI / this.panelCount ) );
                delete this.styles;
                delete this.angles;
                this.styles = [];
                this.angles = [];
                for ( i = 0; i < this.panelCount; i++ ) {
                    panel = this.element.children[i];
                    if(!panel)
                        continue;
                    angle = this.theta * i;
                    this.angles[i] = angle;
                    // rotate panel, then push it out in 3D space
                    this.styles[i] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
                    panel.style[ transformProp ] = this.styles[i];
                    if(widget.options.dir=="horz"){
                        panel.style.left = this.xOffset + 'px'
                    }else{
                        panel.style.top = this.yOffset + 'px'
                    }
                }

                // hide other panels
                for (  ; i < this.totalPanelCount; i++ ) {
                    panel = this.element.children[i];
                    if(!panel)
                        continue;
                    panel.style.opacity = 0;
                    panel.style[ transformProp ] = 'none';
                }

                // adjust rotation so panels are always flat
                this.rotation = Math.round( this.rotation / this.theta ) * this.theta;

                this.transform();

            };

            m.transform = function() {
                // push the carousel back in 3D space,
                // and rotate it
                for (var i = 0; i < this.panelCount; i++ ) {
                    if(!this.element.children[i])
                        continue;

                    var totalAngle = this.angles[i]+this.rotation;

                    while (totalAngle > 360) {
                        totalAngle -= 360;
                    }
                    while (totalAngle <0) {
                        totalAngle += 360;
                    }

                        var zIndexAngle;
                        if(totalAngle <= 180) {
                            zIndexAngle = 180 - totalAngle;
                        } else {
                            zIndexAngle = totalAngle - 180;
                        }
                        this.element.children[i].style.zIndex = zIndexAngle;

                    this.element.children[i].style[ transformProp ] = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)' + this.styles[i];
                }

            };

            m.focus = function (index,anim,cb) {
                var dir = (widget._direction(index));
                var diff = widget._loopCount(dir,widget._index,index);
                var elm = widget._children.eq(index-1);
                var wasElm = widget._children.eq(widget._index-1);
                widget._setState(elm,'visible');
                widget._setState(wasElm,'invisible');

                if(dir){
                    this.rotation -= this.theta * diff;
                } else {
                    this.rotation += this.theta * diff;
                }
                this.transform();
                if(cb)
                    cb();
            };

            m.layout = function (index) {
                this.modify();
                this.focus(index);

            };

            var mo =  new Manager();
            mo.init();
            return mo;
        };
        $.amp.ampCarousel.prototype._layoutManagers['carousel3D'] = {'requiredFeatures':['can3D','transform'],'create':carousel3D};
    }());
}( jQuery ));
(function ( $ ) {

    $.widget( "amp.ampImage", {
        options: {
            errImg: null,
            preload:'visible',
            insertAfter:false
        },
        _loadedHistory : [],
        _getCreateOptions:function(){
            var attributes = this.element.data().ampImage;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function() {
            this.element.addClass('amp');
            this.element.addClass('amp-image');
            var self = this;
            this.element.bind('load',function(e){
                self._loaded();
            });
            this.element.bind('error',function(){
                self._failLoad();
            });

            if($.inArray(this.options.preload, ['created', 'visible', 'none']) == -1){
                this.options.preload = 'visible';
            }

            if(this.options.preload == 'created') {
                this.newLoad();
            }
            this._track("created");

        },

        dimensionsParams: function (imgSrc) {
            //Dynamically assign width and/or height attributes in src attribute of an image
            var self = this;
            var dimensionsObj = self.element.data('amp-dimensions');
            var src = imgSrc;
            if (!dimensionsObj) {
                return src;
            }

            var paramPrefix = src.indexOf('?') === -1 ? '?' : '&';
            var paramsString = '';

            $.each(dimensionsObj[0], function (key, obj) {
                var regExp = new RegExp(paramPrefix + key + '=' + '[0-9]*', "g");
                var duplicate = src.match(regExp);

                if (duplicate && duplicate.length > 0) {
                    $.each(duplicate, function (i, v) {
                        src = src.replace(v, '');
                    });
                }

                var $parent = obj.domName === 'window' ? $(window) : self.element.closest(obj.domName);
                paramsString += paramPrefix + key + '=' + parseFloat($parent[obj.domProp](), 10);
                paramPrefix = '&';

            });

            src += paramsString;
            return src;
        },

        newLoad: function() {
            var src = (this.element.attr('src') && this.element.attr('src')!="")?this.element.attr('src'):this.element.attr('data-amp-src');
            src = this.dimensionsParams(src);
            var ampSrcSet = this.element.attr('data-amp-srcset') || null;

            if($.inArray(src, this._loadedHistory)!==-1){
                if(this.loading) {
                    this.loading.remove();
                }
                this.element.attr('src',src);
                if(ampSrcSet){
                    this.element.attr('srcset',ampSrcSet);
                }
                this.element.show();
                return;
            }
            if(!this.loading) {
                this.loading = $('<div class="amp-loading"></div>');
            }
            this.element.hide();
            !this.options.insertAfter ? this.element.parent().append(this.loading) :this.options.insertAfter.prepend(this.loading);
            this.element.attr('src','');
            this.element.attr('src',src);

            if(ampSrcSet){
                this.element.attr('srcset','');
                this.element.attr('srcset', ampSrcSet);
            }
        },

        visible: function(visible) {
            if(visible && visible!= this._visible) {
                if(this.options.preload == 'visible'){
                    if(this.loaded || this.loading)
                        return;

                    this.newLoad();
            }
            }
            this._visible = visible;
        },
        load: function(options) {
            if(this.loaded || this.loading)
                return;

            this.newLoad();
        },
        preload: function() {
            if(!this.element.parent().hasClass('amp-spin')){
                this.newLoad();
            }
        },
        loaded:false,
        _loaded: function(){
            this._loadedHistory.push(this.element.attr('src'));
            this._track( 'loaded', true );
            this.loaded = true;
            if(this.loading) {
                this.loading.remove();
            }
            this.element.show();
        },
        _failLoad: function() {
            if(this.options.errImg) {
                this.element.attr('src',this.options.errImg);
            } else {
                if (window.amp && amp.conf && amp.conf.err_img) {
                    this.element.attr('src',amp.conf.err_img);
                }
            }
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'image',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-image');
            if(this.loading) {
                this.loading.remove();
            }
            this.element.css('display','');
            this._removeEmptyAttributeHelper(this.element);
        },
        _removeEmptyAttributeHelper:function(elm, attsToCleanIfEmpty){
            var attArr = attsToCleanIfEmpty || ['class','style'];
            for (var i= 0,len=attArr.length;i<len;i++ ) {
                if(!(elm.attr(attArr[i]) && elm.prop(attArr[i]))){
                    elm.removeAttr(attArr[i]);
                }
            }
        }
    });


}( jQuery ));
(function ( $ ) {
    $.widget( "amp.ampBuild", {
        // Default options.
        options: {
        },
        _create: function() {
            for(var prop in $.amp){
                if($.amp.hasOwnProperty(prop)){
                    this.element.find("[data-"+ prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()+"]")[prop]();
                }
            }
            this._track("created");
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'build',event,value);
            }
        }
    });

}( jQuery ));
(function ( $ ) {

    $.widget( "amp.ampNav", {
        // Default options.
        options: {
        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampNav;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function() {
            var self = this;
            var components = this.element.data();
            for (var i in components) {
                if(components.hasOwnProperty(i)){
                    var component = components[i];
                    if(component.bind && i.substring(0,3)=='amp'){
                        component.bind(this.options);
                    }
                }
            }
            this._track("created");
        },
        _track: function(event,value) {
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'navigation',event,value);
            }
        }
    });



}( jQuery ));
(function ($) {
    var reset = {
        top: 0, left: 0,  opacity:0, width:'', height:''
    };

    $.widget("amp.ampZoom", {
        // Default options.
        options: {
            zoom: 3,
            url: '',
            activate:{
                touch:"up",
                mouse:"up"
            },
            pan:false,
            map:false,
            target:{},
            lens: true,
            fade: true,
            preload: {
                image:'created',
                zoomed:'none'
            },
            responsive:true,
            cursor:{active: 'auto', inactive: 'auto'},
            transforms:'',
            states:{
                "active":"amp-active",
                "inactive":"amp-inactive"
            },
            width:'auto',
            height:'auto',
            create:function(){},
            created:function(){},
            zoomedIn:function(){},
            zoomedOut:function(){},
            move:function(){},
            startMove:function(){},
            stopMove:function(){},
            startPreload:function(){},
            preloaded:function(){},
            visible:function(){}
        },
        _zoomLoaded:false,
        _getCreateOptions:function(){
            this.validTypes = this._createValidTypes(this.options);
            var attributes = this.element.data().ampZoom;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }

            return this.options;
        },
        _createValidTypes: function(options){
            var validTypes = {};
            for(var option in options){
                if(options.hasOwnProperty(option)){
                    var val = options[option], newType;
                    newType = (option == "width" || option == "height") ? "number" :  typeof val;
                    validTypes[option] = typeof val === "object" ?
                        this._createValidTypes(val) :
                    { type: newType, defaultValue:val };
                }
            }
            return validTypes;
        },
        _checkValidTypes:function(options, validTypes){
            return options;
        },
        _create: function () {
            this.options = this._checkValidTypes(this.options, this.validTypes);

            if($.isArray(this.options.zoom))
                this._cycle = {current:-1, len:this.options.zoom.length};

            var preloadOptionsArray = ['created', 'visible', 'none'];
            if($.inArray(this.options.preload.image, preloadOptionsArray) == -1)
                this.options.preload.image = 'created';

            if($.inArray(this.options.preload.zoomed, preloadOptionsArray) == -1)
                this.options.preload.zoomed = 'none';

            this.element.addClass('amp amp-zoom');
            this.element.wrap('<div class="amp-zoom-container"></div>');
            this.parent = this.element.parent();
            this.parent.prepend(this.loading);
            this.element.wrap('<div class="amp-zoom-overflow"></div>');
            this.overflow = this.element.parent();
            this.wrapper = $('<div class="amp-zoom-wrapper"></div>');
            this.imgs = [];
            var i = 0;
            do{
				var img = $('<img class="amp-zoom-img">');
				img.css(reset); 
				this.wrapper.append(img); 
                this.imgs.push(img);
                i++;
            }while(i < (this._cycle && this._cycle.len));

       
            if(this.options.responsive){
                this.element.css({ height:'auto', width:'100%', maxWidth:'100%' });
            }

            if(this.options.target){
                this.mark = this.options.map ? {name:"map", inner:"inner"} : {name:"box", inner:"wrapper"};
                try{
                    this[this.mark.name] = $('body').find(this.options.target);
                } catch(e) {
                    this[this.mark.name] = false;
                }

                if(this[this.mark.name] && this[this.mark.name].length > 0){
                    if(this.options.lens){
                        this.lens = $('<div class="amp-zoom-lens"></div>');
                        if(this.mark.name == "map"){
                            this[this.mark.name].addClass('amp-zoom-map');
                            this[this.mark.inner] = $('<div class="amp-zoom-wrapper"></div>');
                            this[this.mark.inner].append($('<img class="amp-main-img" src="'+this.element.attr('src')+'">'));
                            this[this.mark.inner].append(this.lens);
                        }else{
                            this[this.mark.name].addClass('amp-zoom-container');
                            this.parent.append(this.lens);
                        }
                    }

                    this[this.mark.inner].hide();
                    this[this.mark.name].append(this[this.mark.inner]);
                    this[this.mark.inner].addClass(this.options.states.inactive);
                    this[this.mark.inner][0].relatedUUID = this.uuid;
                }else{
                    this[this.mark.name] = false;
                }
            }

            if(!this.box){
                this.overflow.append(this.wrapper);
                this.canHideEl = !!$.amp.ampImage;
            }

            this.target = this.imgs[0];
            this._setZoomCursor(this.parent);
            this.parent.addClass(this.options.states.inactive);

            if(this.options.preload.image == 'created' || this.element[0].src)
                this._loadImage();

            if(this.options.preload.zoomed == 'created'){
                this._loadZoomed();
            }
        },
        _onImageLoad: function(){
            if (this._imageLoaded) {
                return;
            }

            this._track( 'loaded', true );
            this._imageLoaded = true;
            this._imageLoading = false;

            this._originalImage = this._getNaturalSize(this.element[0].src);

            var self = this;
            this._calcSize();
            if(this.options.responsive){
                $(window).bind("resize", function(_self) {
                    return function() {
                        if(_self.zoomed)
                            _self.zoom(false);
                        return _self._calcSize();
                    }
                }(self));
            }
            this.moved = false;
            this.canTouch =  !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);

            // start touch position
            this.zoomBy = 1;
            this.pos = {
                start: {'x':0,'y':0},
                last: {'x':0,'y':0},
                cur: {'x':0,'y':0}
            };


            var up = function(){
                var moveit = function(e){
                    self.moved = true;
                    return true;
                };

                var mouseleave = function(e){
                    end();
                    return true;
                };

                var end = function(e){
                    self.pos.cur = self.pos.last;
                    self.mousedown = false;
                    self.parent.off(self.canTouch ? "touchmove" : "mousemove", $.proxy(moveit,self) );
                    if(!self.canTouch){
                        self.parent.off("mouseleave", $.proxy(mouseleave,self) );
                    }
                    self.parent.off(self.canTouch ? "touchend" : "mouseup", $.proxy(end,self) );
                    if(self.moved){
                        return;
                    }

                    return self.toggle(e);
                };
                var start = function(e){
                    if(self.zoomed){
                        e.stopPropagation();
                        e.preventDefault();
                    }

                    self.mousedown = true;
                    var a = self._getEvent(e);
                    self.pos.start = {x: a.pageX, y:a.pageY};
                    setTimeout(function(){
                        self.parent.on(self.canTouch ? "touchmove" : "mousemove", $.proxy(moveit,self) );
                        self.parent.on(self.canTouch ? "touchend" : "mouseup", $.proxy(end,self) );
                    },1);

                    if(!self.canTouch){
                        self.parent.on("mouseleave", $.proxy(mouseleave,self) );
                    }
                    self.moved = false;
                    var time = e.timeStamp;
                    self.startTouchEvent = e;
                    return true;
                };
                self.parent.on(self.canTouch ? "touchstart" : "mousedown", $.proxy(start,self));
            };

            if(this.canTouch){
                if(this.options.activate.touch == "disable")
                    return false;
                if(this.options.activate.touch == "doubleTap"){
                    var timeAllowed = 300,
                        distanceAllowed = 20;

                    this._lastEvent = '';
                    var start = function(e){ 
                        //e.preventDefault();
                        self.parent.on("touchend touchcancel", $.proxy(end,self));
                        this.startTouchEvent = e;
                        var e = this._getEvent(e);
                        self.pos.start = {x: e.pageX, y: e.pageY}
                        e.timeStamp = new Date().getTime();
                        var delta = e.timeStamp - (this._lastEvent && this._lastEvent.timeStamp) || 0,
                            movedTooFar = Math.abs(e.pageX - this._lastEvent.pageX) > distanceAllowed || Math.abs(e.pageY - this._lastEvent.pageY) > distanceAllowed;

                        if (delta < timeAllowed && delta != 0 && !movedTooFar) {
                            this.toggle(this.startTouchEvent);
                        }

                        this._lastEvent = e;
                        return true;
                    };

                    var end = function(e){
                        self.pos.cur = self.pos.last;
                        self.parent.off("touchend touchcancel", $.proxy(end,self));
                    }
                    self.parent.on("touchstart", $.proxy(start,self));
                }else if(this.options.activate.touch == "pinch"){
                    var fingersRequired = 2;
                    this._scale = 1;
                    this._scaled = false;

                    if(this._cycle){
                        this.maxZoom = this.options.zoom[this._cycle.len - 1];
                        this._cycle = false;
                    }else{
                        this.maxZoom = this.options.zoom;
                    }

                    var start = function (e) {
                        self.parent.on('touchcancel touchend', $.proxy(panEnd, self));
                        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
                            if(e.originalEvent.touches.length == 1){
                                var ev = self._getEvent(e);
                                self.pos.start = {x: ev.pageX, y: ev.pageY};
                                return true;
                            } else if (e.originalEvent.touches.length != fingersRequired)
                                return true;
                        }

                        e.preventDefault();
                        e.stopPropagation();
                        this.startZoom = this.zoomBy;
                        this.startPos = this.pos.last;
                        this.pos.start = this._getPosition(e.originalEvent.touches);
                        this.pinching = true;
                        this.hasPinchEnded = false;
                        if(!this._scaled)
                            this.o = this._pinchZoomStart(e);

                        this._startDist = this._getDistance(e.originalEvent.touches);
                        this._scale = this._lastScale || this._scale;
                        this.parent.on('touchmove', $.proxy(move, this));
                        this.parent.on('touchcancel touchend', $.proxy(end, this));
                        return true;
                    };

                    var move = function (e) {
                        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
                            if (e.originalEvent.touches.length != fingersRequired)
                                return true;
                        }

                        var moveDist = this._getDistance(e.originalEvent.touches),
                            position = this._getPosition(e.originalEvent.touches),
                            scale = moveDist / this._startDist;
                        scale = Math.max(1, Math.min((scale * this._scale), this.maxZoom));
                        this._pinchZoom(e, scale, position, this.o);
                        this._lastScale = scale;
                        this._scaled = true;
                    };

                    var panEnd = function (e) {
                        self.pos.cur = self.pos.last;
                        self.parent.off('touchcancel touchend', $.proxy(panEnd, self));
                    }

                    var end = function (e) {
                        if (e.originalEvent && e.originalEvent.touches) {
                            if (e.originalEvent.touches.length == 0){
                                self.hasPinchEnded = true;
                            }
                        }
                        self.parent.off('touchmove', $.proxy(move, this));
                        if(self.hasPinchEnded){
                            if(this.zoomBy == 1){
                                this.zoomed = false;
                            }
                            self.pinching = false;
                            self.pos.cur = self.pos.last;
                            self.parent.off('touchcancel touchend', $.proxy(end, this));
                        }
                    };
                    self.parent.on("touchstart", $.proxy(start, self));
                }else if(this.options.activate.touch == "none"){
                } else {
                    up();
                }
            }else{
                if(this.options.activate.mouse == "disable")
                    return false;
                if(this.options.activate.mouse == 'over' || this.options.activate.mouse == 'over-noclick' ) {
                    var evstr = 'mouseenter mousedown';
                    if(this.options.activate.mouse == 'over-noclick'){
                        evstr = 'mouseenter';
                    };
                    self.parent.on(evstr, function(e){
                        if(e.type == "mouseenter" && !self.zoomed){
                            return self.toggle(e);
                        }

                        if(e.type == "mousedown"){
                            return self.toggle(e);
                        }
                    });
                    self.parent.on("mouseleave",function(e){
                        return self.zoom(false,e);
                    });
                }else if(this.options.activate.mouse == 'down') {
                    this.options.pan = false;
                    self.parent.on("mousedown", function(e){
                        self.toggle(e)
                    });
                }else if(this.options.activate.mouse == "none"){
                }else{
                   up();
                }
            }

            if(this.options.preload.zoomed == 'created' || (this.canTouch && this.options.activate.touch == "pinch") || this._loadZoomedPromise)
                this.preload();

            this._track("created");
        },
        zoomed: false,
        toggle: function (e,index) {
            this._cycle ?
                this.cycle(e,index) :
                this.zoom(!this.zoomed, e);
        },
        cycle: function(e,index){
            if(this.animating) return;
            if(index!==void 0) {
                this._cycle.current = index
            } else {
                this._cycle.current = this._cycle.current+=1;
            }

            if(!this.options.zoom[this._cycle.current]){
                this._cycle.current = -1;
                this.zoom(false, e);
            }else{
                if(this.map)
                    this.inner.off('mousemove touchmove', $.proxy(this._mapMove,this));
                this.parent.off('mousemove touchmove');
                //this.parent.off('mousemove touchmove', $.proxy(this._parentMove,this));

                this.oldTarget = this.target[0] == this.imgs[this._cycle.current][0] ? null : this.target;
                this.oldZoom = this.options.zoom[this._cycle.current];
                this.target = this.imgs[this._cycle.current];
                this.zoom(true, e);
                this.pos.cur = this.pos.last;
            }
        },
        zoom: function (on, e, bypass) {
            if (on == this.zoomed && !this._cycle && !bypass)
                return;

            this.zoomed = on;
            var self = this;
            if (on) {
                this.box && this.box.show();
                if(!this._zoomLoaded){
                    this._checkLoaded(e);
                    return;
                }

                this.init = false;
                this.moveEvent = this.canTouch ? "touchmove" : "mousemove";
                this.zoomBy = this._cycle ? (this.options.zoom[this._cycle.current] || 1) : this.options.zoom;

                var pw = this.overflow.width(), ph = this.overflow.height(),
                    tw = pw * this.zoomBy, th = ph * this.zoomBy,
                    po = this.parent.offset(), bw = 0, bh = 0, mw = 0, mh = 0,lens = 0;

                if(e === void 0){
                    e = {
                        pageX:pw/2,
                        pageY:ph/2
                    }
                }

                this._track('startMove',{domEvent:e, zoom:this.zoomBy });
                this.parent.removeClass(this.options.states.inactive).addClass(this.options.states.active);
                this.wrapper.css({width: tw, height:th});

                if(this[this.mark.name]){
                    if(this.box){
                        bw = this.box.width();
                        bh = this.box.height();
                        if(this.lens) lens = this._makeLens(this.lens, bw, bh, this.zoomBy, {w:pw, h:ph});
                    }

                    if(this.map){
                        mw = this.map.width();
                        mh = mw*(this.element.height()/this.element.width());
                        this.inner.height(mh);
                        this.inner.width(mw);
                        if(this.lens) lens = this._makeLens(this.lens,  mw, mh, this.zoomBy, {w:mw, h:mh});

                        this._mapEnd = function(e){
                            self.mousedownForMap = false;
                            self.inner.off(self.canTouch ? "touchmove" : "mousemove", $.proxy(self._mapMove,self));
                            self.inner.off(self.canTouch ? "touchend" : "mouseup", $.proxy(self._mapEnd,self));

                        };

                        this._mapMove = function(e){
                            if( self.mousedownForMap)
                            self._mouseMove(self._getEvent(e), pw, ph, tw, th, self.map.offset(), bw, bh, mw, mh, lens, true);
                        };

                        this._mapStart = function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            self.mousedownForMap = true;
                            self._mouseMove(self._getEvent(e), pw, ph, tw, th, self.map.offset(), bw, bh, mw, mh, lens, true);
                            this.inner.on(self.canTouch ? "touchmove" : "mousemove", $.proxy(self._mapMove,self));
                            this.inner.on(self.canTouch ? "touchend" : "mouseup", $.proxy(self._mapEnd,self));
                        };
                        this.inner.on("mouseleave", $.proxy(self._mapEnd,self));
                        this.inner.on(self.canTouch ? "touchstart" : "mousedown", $.proxy(this._mapStart,self));
                    }

                    this[this.mark.name].show();
                    this[this.mark.inner].show();
                    this[this.mark.inner].removeClass(this.options.states.inactive).addClass(this.options.states.active);
                }

                 this._parentMove = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    self._mouseMove(self._getEvent(e), pw, ph, tw, th, po, bw, bh, mw, mh, lens);
                 };
                 this.parent.on(this.moveEvent, $.proxy(self._parentMove,self));
                 this._mouseMove(self._getEvent(e), pw, ph, tw, th, po, bw, bh, mw, mh, lens);
                 this._setZoomCursor(self.lens ? self.lens : self.parent);

                 if(this.options.fade) {
                    this.animating = true;
                    this.target.animate({opacity:1},{
                        complete:function(){
                            if(self.canHideEl) self.element.css({opacity:1});
                            self.animating = false;
                            if(self.oldTarget){
                                self.oldTarget.css(reset);
                            }
                        }
                    });
                }else{
                    this.target.css({opacity:1});
                    if(self.canHideEl) this.element.css({opacity:1});
                    if(self.oldTarget){
                        self.oldTarget.css(reset);
                    }
                }

                this.lens && this.lens.show();
                this._track('zoomedIn', {domEvent:e, zoom:this.zoomBy });
            } else {
                this.init = false;
                this._track('stopMove',{domEvent:e});
                this.pos = {
                    start: {'x':0,'y':0},
                    last: {'x':0,'y':0},
                    cur: {'x':0,'y':0}
                };

                this.target.css(reset);
                clearInterval(self.interval);
                if(this.options.fade)
                    this.target.stop();

                if(this[this.mark.name]){
                    this[this.mark.name].hide();
                    this[this.mark.inner].hide();
                    this[this.mark.inner].removeClass(this.options.states.active).addClass(this.options.states.inactive);

                    if(this.map){
                        this.inner.off("mouseleave", $.proxy(self._mapEnd,self));
                        this.inner.off(self.canTouch ? "touchstart" : "mousedown", $.proxy(this._mapStart,self));
                    }
                }

                if(this.canHideEl)
                    this.element.css({opacity:1});

                if(this._cycle){
                    this._cycle.current = -1;
                }

                this.lens && this.lens.hide();

                if(this.moveEvent&&$.proxy(this._parentMove, this) ) {
                    this.parent.off(this.moveEvent, $.proxy(this._parentMove, this));
                }
                this.wrapper.css({width: '', height:''});
                this._setCursor(this.options.cursor.inactive, this.parent);
                this.parent.removeClass(this.options.states.active).addClass(this.options.states.inactive);
                this._track('zoomedOut', e);
            }
        },
        _getEvent: function(e) {
            if(e && e.type == "touchend") {
                e = this.startTouchEvent;
            }
            if(e && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                e = e.originalEvent.touches[0];
            }
            return e;
        },
        load: function(option){
            this._loadImage();
        },
        visible: function(visible) {
            if (this._visible == visible){
                if(visible == this._zoomVisible)
                    return;

                if(visible && this.options.preload.zoomed == 'visible'){
                    this._loadZoomed();
                    this._zoomVisible = visible;
                }
                return;
            }

            if (visible) {
                if(this.options.preload.image == 'visible'){
                    this._loadImage();
                }

                if(this.options.preload.zoomed == 'visible'){
                    this._loadZoomed();
                    this._zoomVisible = visible;
                }
                this._calcSize();
            } else {
                this.zoom(false);
            }

            this._track('visible',{'visible':visible});
            this._visible = visible;
        },
        preload:function() {
            this._loadZoomed();
        },
        _makeLens:function(lens, rw, rh, zoom, limit){
            var o = { lw:rw / zoom, lh:rh / zoom,  lwh:0,  lhh:0,  dl:0,  dt:0};
            lens.width(o.lw);
            lens.height(o.lh);
            o.dl = (lens.outerWidth(true)-o.lw);
            o.dt = (lens.outerHeight(true)-o.lh);

            if(o.lw + o.dl > limit.w)
                o.lw = limit.w - o.dl;

            if(o.lh + o.dt > limit.h)
                o.lh = limit.h - o.dt;

            lens.width(o.lw);
            lens.height(o.lh);
            o.lwh = o.lw/2;
            o.lhh = o.lh/2;
            o.dlh = o.dl/2;
            o.dth = o.dt/2;
            return o;
        },
        _loadZoomed: function(){
            if(!this._imageLoaded){
                if(this.options.preload.zoomed != 'none')
                    this._loadZoomedPromise = true;
                this._loadImage();
                return;
            }
 
            if(this._zoomLoaded || this._zoomLoading)
                return;

            var self = this;
            this._zoomLoading = true;
            this._zoomLoaded = false;
            this._toLoadCount = this.imgs.length;
            this._zoomLoadedCount = 0;

            this._track('startPreload');
            var onLoad = function(e){
                self._zoomLoadedCount++;
                if(self._zoomLoadedCount == self._toLoadCount){
                    self._zoomLoaded = true;
                    self._zoomLoading = false;
                    self.loading.hide();
                    self._track('preloaded');
                    self._calcSize();
                }
            };

            $.each(this.imgs, function(i,el){
                el.on('load', onLoad);
                el[0].src = self._getUrl(self.options.zoom[i]);
            });

        },
        _checkLoaded: function(e){
            var self = this, opacitySet = false;
            if(!this._zoomLoading)
                this._loadZoomed();
            clearInterval(this.interval);
            this.interval = setInterval(function(){
                if(self._zoomLoaded){
                    clearInterval(self.interval);
                    self.zoom(self.zoomed, e, true);
                }else if(self._zoomLoading && !opacitySet){
                    if(self.canHideEl)
                        self.element.css({opacity:0});
                    opacitySet = true;
                }
            },50)
        },
        _pinchZoomStart: function(e){
            var self = this;
            this.zoomed = true;
            if(this.options.fade) {
                this.target.animate({opacity:1});
            }else{
                this.target.css({opacity:1});
            }
            this.target.show();

            var o = {pw:this.overflow.width(), ph: this.overflow.height(), po: this.parent.offset(), mw:0, mh:0, lens:null};
            o.tw = o.pw * 1, o.th = o.ph * 1;

            this.wrapper.css({width: this.overflow.width(), height: this.overflow.height()});
            if(this.map){
                o.mw = this.map.width(),
                o.mh =  o.mw*(this.element.height()/this.element.width());
                o.mo =  this.map.offset();
                this.inner.height(o.mh)
                this.map.show();
                if(this.lens)
                    o.lens = this._makeLens(this.lens, o.mw, o.mh, 1, {w: o.mw, h: o.mh});

                this._mapEnd = function(e){
                    self.inner.off("touchmove", $.proxy(self._mapMove,self));
                    self.inner.off("touchend", $.proxy(self._mapEnd,self));
                }

                this._mapMove = function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    self._mouseMove(self._getEvent(e), o.pw, o.ph, o.tw, o.th,self.map.offset(), null,null, o.mw, o.mh, o.lens, true);
                }

                this._mapStart = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    self._mouseMove(self._getEvent(e), o.pw, o.ph, o.tw, o.th,self.map.offset(), null,null, o.mw, o.mh, o.lens, true);
                    this.inner.on("touchmove",  $.proxy(self._mapMove,self));
                    this.inner.on("touchend", $.proxy(self._mapEnd,self));
                }
                this.inner.on("touchstart", $.proxy(this._mapStart,this));
                this.inner.removeClass(this.options.states.inactive).addClass(this.options.states.active);
                this.inner.show();
                this.lens && this.lens.show();
            }

            this._parentMove = function(e) {

                if(!self.hasPinchEnded){
                    e.stopPropagation();
                    return true;
                }
                if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
                    if (e.originalEvent.touches.length != 1)
                        return true;
                }

                e.preventDefault();
                if(this.zoomBy!==1) {
                    e.stopPropagation();
                }
                self._mouseMove(self._getEvent(e), o.pw, o.ph, o.tw, o.th, o.po, null, null, o.mw, o.mh, o.lens);
            };
            this.parent.on('touchmove', $.proxy(this._parentMove,this));
            return o;
        },
        _pinchZoom: function (e, scale, center, o) {
            if(scale == this.maxZoom){
                this._track('maxZoom', {domEvent:e, scale:scale, center:center});
            }else if(scale == 1){
                this._track('minZoom', {domEvent:e, scale:scale, center:center});
            }

            o.tw = o.pw * scale;
            o.th = o.ph * scale;
            this.zoomBy = scale;
            this.wrapper.css({width: o.tw, height: o.th});
            if(this.lens)
                o.lens = this._makeLens(this.lens, o.mw, o.mh, scale, {w: o.mw, h: o.mh});

            this._mouseMove({currentTarget:e.currentTarget, pageX:center.x, pageY:center.y}, o.pw, o.ph, o.tw, o.th, o.po, null, null, o.mw, o.mh, o.lens);
        },
        _mouseMove: function (e, pw, ph, tw, th, po, bw, bh, mw, mh, l, mapIsTarget){
            var dw = bw ? (tw - pw) + (pw - bw) : tw - pw,
                dh = bh ? (th - ph) + (ph - bh) : th - ph,
                mx, my, x, y, limited;

            if(this.init && this.options.pan){
                if(this.mousedown || this.canTouch || mapIsTarget){
                    if(!this.pinching){
                        this.panning = true;
                        var dx = (this.pos.start.x - e.pageX),
                            dy = (this.pos.start.y - e.pageY);
                        x = dx + this.pos.cur.x;
                        y = dy + this.pos.cur.y;
                        mx = (x+(pw/2))/(tw/pw);
                        my = (y+(ph/2))/(th/ph);
                    }else{
                        mx = (this.startPos.x+(this.pos.start.x - po.left))/this.startZoom;
                        my = (this.startPos.y+(this.pos.start.y - po.top))/this.startZoom;
                        x = (dw * (mx / pw));
                        y = (dh * (my / ph));
                    }
                }else{
                    this.panning = false;
                    return;
                }
            }else{
                this.init = true;
                this.panning = false;
                mx = e.pageX - po.left;
                my = e.pageY - po.top;
                x = dw * (mx / pw);
                y = dh * (my / ph);
                this.pos.cur.x = this.pos.last.x || x;
                this.pos.cur.y = this.pos.last.y || y;
            }

            if(this.lens){
                if(this.box){
                    if(this.box[0].lastChild.relatedUUID != this.uuid){
                        this.box.append(this.wrapper);
                        this.wrapper.show().siblings().hide();
                    }
                    var lx = pw, ly = ph;
                    var tmx = mx - l.lwh - l.dlh, tmy = my - l.lhh - l.dth;
                    x = ((tmx + l.dlh) * this.zoomBy - ((l.lw)/pw));
                    y = ((tmy + l.dth) * this.zoomBy - ((l.lh)/ph));
                    limited = this._setBounds(mx, my, pw, ph, 0, 0);
                    mx = limited.x;
                    my = limited.y;

                } else if (mapIsTarget){
                    if(this.panning){
                        mx = e.pageX - po.left;
                        my = e.pageY - po.top;
                    }

                    var lx = mw, ly = mh;
                    var tmx = mx - l.lwh - l.dlh, tmy = my - l.lhh - l.dth;
                    x = ((tmx + l.dlh) * this.zoomBy - ((l.lw)/pw)) * pw/mw;
                    y = ((tmy + l.dth) * this.zoomBy - ((l.lh)/ph)) * ph/mh;
                    this.pos.cur = {'x':x,'y':y};

                } else if (this.map){
                    if(this.map[0].lastChild.relatedUUID != this.uuid){
                        this.map.append(this.inner);
                        this.inner.show().siblings().hide();
                    }

                    if(!this.panning){
                        var rx = mx/(pw/l.lw), ry = my/(ph/l.lh),
                            tmx = (mx/(pw/mw))-rx-l.dlh, tmy = (my/(ph/mh))-ry-l.dth;
                    }else{
                        var tmx = (mx/(pw/mw)) - l.lwh - l.dth;
                        tmy = (my/(ph/mh)) - l.lhh - l.dth;
                    }

                    limited = this._setBounds(tmx, tmy, mw - l.lw - l.dl, mh - l.lh - l.dt, 0, 0);
                    tmx = limited.x;
                    tmy = limited.y;
                }

                if(this.box || mapIsTarget){
                    if(mx + l.lwh + l.dlh >= lx) tmx = lx - l.lw - l.dl;
                    if(my + l.lhh + l.dth >= ly) tmy = ly - l.lh - l.dt;
                    if(mx - l.lwh - l.dlh <= 0) tmx = 0;
                    if(my - l.lhh - l.dth <= 0) tmy = 0;
                }

                this.lens.css({'top': tmy + 'px', 'left': tmx + 'px'});
            }

            limited = this._setBounds(x, y, dw, dh, 0, 0);
            x = limited.x;
            y = limited.y;

            this.pos.last = {'x':x,'y':y};
            this.lastPos = {'x':x,'y':y};
            if(this.oldTarget)
                this.oldTarget.css({'top': -y + 'px', 'left': -x + 'px'});
            this.target.css({'top': -y + 'px', 'left': -x + 'px'});
            this._track('move',{domEvent:e,pos:{x:(mx / pw),y:(my / ph)}});
        },
        _calcSize: function() {
            var w,h;
            if ((this.options.responsive) && (this.options.width && this.options.height && this.options.width!='auto' && this.options.height!='auto')) {
                w = this.element.width();
                h = w*(this.options.height/this.options.width);
                this.parent.height(h);
                this.overflow.height(h);
                if(this.element.height() != 0 && h > this.element.height()){
                    this.overflow.height(this.element.height())
                }
            } else {
                if (this.options.width) {
                    this.parent.width(this.options.width);
                }
                if (this.options.height) {
                    this.parent.height(this.options.height);
                }
            }

            if(this.map){
                var mw = this.map.width();
                var mh =  mw*(this.element.height()/this.element.width());
                this.inner.height(mh)
            }
        },
        _getUrl: function(current){
            if(this.options.url)
                return this.options.url;

            var url = this.element.attr('src') || this.element.attr('data-amp-src');
            if(!url) return;

            var zoomBy = this._cycle ? (current || 1) : this.options.zoom;
            url = this._cleanUrl(url);
            var transform = this.options.transforms;
            if(this._cycle) {
                var index = $.inArray(current, this.options.zoom);
                transform = transform[index];
            }
            url = transform ? this._setTransforms(url, transform) : url; 
            url = this._setWidth(url, {h:this._originalImage.height * zoomBy, w:this._originalImage.width * zoomBy});
            return url;
        },
        _getWidth: function(url){
            if(window.amp && amp.di)
                return amp.di.width(url);

            var url = url.split("?");
            if(!url[1]) return false;
            var options = url[1].split('&');
            for (var i=0; i<options.length;i++){
                var parts = options[i].split('='), optionsObj = {};
                if(parts[0] == "w") {
                    return parseInt(parts[1]);
                }
            }
            return false;
        },
        _setWidth: function(url, width){
            if(window.amp && amp.di)
                return amp.di.set(url, width);

            var url = url.split("?");

            if(url[1]){
                var options = url[1].split('&'),
                    params = [];

                for (var i=0; i<options.length;i++){
                    var parts = options[i].split('='), optionsObj = {};
                    if(parts[0] != "w"){
                        optionsObj[parts[0]] = parts[1];
                        params.push($.param(optionsObj));
                    }
                }
                params = params.concat($.param(width));
                return url[0] +"?"+ params.join("&");
            }

            return url[0] +"?"+ $.param(width);
        },
        // removing everything
        _cleanUrl:function(url){
            var u = url.split('?');
            return u[0];
        },
        _loadImage:function(){ 
            if(this._imageLoaded || this._imageLoading)
                return;

            this.loading = $('<div class="amp-loading"></div>');
            this._imageLoading = true;
            var src = this.element[0].src || this.element.attr('data-amp-src');
            this.element.on('load', $.proxy(this._onImageLoad,this));
            this.element[0].src = '';
            this.element[0].src = src;
        },
        _getNaturalSize:function(src){ 
            return {width: this.element[0].naturalWidth, height: this.element[0].naturalHeight};
        },
        _setTransforms: function(url, transforms){
            if(url.indexOf('?')==-1) {
                return url+'?'+transforms;
            } else {
                return url+'&'+transforms;
            }
        },
        _setBounds: function(x, y, r, b, l, t){
            if(x >= r) x = r;
            if(y >= b) y = b;
            if(x <= l) x = l;
            if(y <= t) y = t;
            return {
                x:x, y:y
            }
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'zoom',event,value);
            }
        },
        _setCursor: function(cursorStyle, el){
            if(typeof cursorStyle != "string")
                cursorStyle = "auto"

            if(cursorStyle.indexOf('zoom') < 0){
                el.css('cursor', cursorStyle);
                return false;
            }
            // zoom
            //TODO: This won't survive minification. We probably don't need it anyway, it should be easier to just detect IE8+
            if (/*@cc_on!@*/false || !!document.documentMode){ return false; }     // ie bye bye
            if(typeof InstallTrigger !== 'undefined'){        // moz
                el.css('cursor', '-moz-' + cursorStyle);
            }
            if(!!window.chrome){     // chrome + opera
                el.css('cursor', '-webkit-' + cursorStyle);
            }
        },
        _setZoomCursor: function(el) {
            var zoomLevels = this.options.zoom;

            if (zoomLevels.length) {
                // we have multiple zoom levels, set the zoom cursor according to where we are in the cycle
                var zoomIndex = zoomLevels.indexOf(this.zoomBy);

                if (zoomIndex === zoomLevels.length - 1) {
                    this._setCursor(this.options.cursor.active, el);
                } else {
                    this._setCursor(this.options.cursor.inactive, el);
                }

            } else {
                // we have single level zoom, set the zoom cursor according to whether we are in zoom or not
                if (this.zoomBy > 1) {
                    this._setCursor(this.options.cursor.active, el);
                } else {
                    this._setCursor(this.options.cursor.inactive, el);
                }
            }
        },
        _getDistance:function(t){
            var x = Math.abs(t[0].pageX-t[1].pageX),
                y = Math.abs(t[0].pageY-t[1].pageY);
            return Math.sqrt(
                (x * x) + (y * y)
            );
        },
        _getPosition:function(t){
            return {
                x:(t[0].pageX + t[1].pageX)/2,
                y:(t[0].pageY + t[1].pageY)/2
            };
        },
        _destroy: function() {
            this.element.unwrap().unwrap();
            this.wrapper.remove();
            this.element.removeClass('amp');
            this.element.removeClass('amp-zoom');
            this.element.removeClass(this.options.states.active);
            this.element.removeClass(this.options.states.inactive);
            this.element.css({'cursor':'', 'height':'', 'max-width':'','width':'', 'opacity':'', 'position':'', 'display':'','top':'',left:'',zoom:''});
            this._removeEmptyAttributeHelper(this.element);
        },
        _removeEmptyAttributeHelper:function(elm, attsToCleanIfEmpty){
            var attArr = attsToCleanIfEmpty || ['class','style'];
            for (var i= 0,len=attArr.length;i<len;i++ ) {
                if(!(elm.attr(attArr[i]) && elm.prop(attArr[i]))){
                    elm.removeAttr(attArr[i]);
                }
            }
        }
    });

}(jQuery));
(function ($) {

    $.widget("amp.ampZoomInline", {
        // Default options.
        options: {
            // the max size for the image to go up to
            scaleMax: 3,
            // the scale multiplier to apply to the image
            scaleStep: 0.5,
            // toggle the zoom or not, needed when we are using the same mouse event to zoom in and out
            scaleSteps: false,
            scaleProcess: false,
            events:{
                zoomIn:'mouseup touchstart',
                zoomOut:'mouseup touchend',
                move:'mousemove touchmove'
            },
            stopPropagation:'',
            activation:{
                inGesture:true
            },
            pinch:false,
            transforms:'',
            // created, visible, none
            preload:'none',
            pan:false

        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampZoomInline;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function () {
            var self = this;
            this.scale = 1;
            this.element.addClass('amp amp-zoom');
            this.$parent = this.element.parent();
            this._invalidateParentSize();
            this.element.on(this.options.events.zoomIn,$.proxy(this.zoomIn,this));
            if(!this.options.activation.inGesture){
                this.gestureDetect = new gestureDetector(this.element);
            }
            this._track("created");
            if(this.options.preload=='created') {
                this.load();
            }
            if(this.options.pan) {
                $(document).on("dragstart", function() {
                    return false;
                });

                this.element.parent().on('mousedown touchstart',$.proxy(function(e){
                    this._touchmove = false;
                    // are we panning? if so don't let mousedown trigger anything else
                    if(this.scale>1) {
                        e.stopPropagation();
                    }
                    if(this.panner) {
                        this.panner.remove();
                        delete this.panner;
                    }
                    if(this.scale>1) {
                        this.panner = new pan(this,e,$.proxy(function(x,y){
                            if(this.zoomArea){
                                this.zoomArea.setPosition(x,y);
                            }
                        },this));
                    }
                    return true;
                },this));
            }
            if(this.options.pinch) {
                this.element.parent().on('touchstart',$.proxy(function(e){
                    this_touchmove = false;
                    if(this.pincher) {
                        this.pincher.remove();
                        delete this.pincher;
                    }
//                    if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length>1){
//                        this._getPercentagePos(e);
//                        if(this.zoomArea){
//                        }
//                    }
                    this.pincher = new pinch(e,$.proxy(function(){
                        this.zoomIn();
                    },this),$.proxy(function(){
                        this.zoomOut();
                    },this));
                    return true;
                },this));
            }
            if(this.options.stopPropagation!=='') {
                this.element.parent().on(this.options.stopPropagation, $.proxy(function(e){
                    if(this.scale!=1){
                        e.stopPropagation();
                    }
                },this))
            }
        },


        visible: function(visible) {
            if (this._visible == visible) {
                return;
            }

            if (visible) {
                if(this.options.preload=='visible') {
                    this.load();
                }
            } else {
                if(!this.options.preventVisibleZoomOut){
                    this.zoomOutFull();
                }
            }

            this._track('visible',{'visible':visible});
            this._visible = visible;
        },
        load:function(){
            this._setupZoomArea().then($.proxy(function(area){
                this.zoomArea.allowClone = true;
                area.setScale(this.options.zoom);
            },this))
        },
        _setupZoomArea: function(){
            return new Promise($.proxy(function(resolve, reject) {
                if (!this.zoomArea) {
                    this.getImageSize().then($.proxy(function (size) {
                        if (!size.error) {
                            var self = this;
                            var img = new Image();
                            img.src = this.element.attr('src');
                            var $loading = $('<div class="amp-loading"></div>');
                            this.$parent.append($loading);
                            this.zoomArea = new zoomArea(this.element, this.$parent, size, this.options.transforms, this.options);

                            img.onload = function(){
                                $loading.remove();
                                resolve(self.zoomArea);
                            }
                        } else {
                            reject(false);
                        }
                    },this));
                } else {
                    resolve(this.zoomArea);
                }
            },this));
        },
        getImageSize : function(){
            return new Promise($.proxy(function(resolve, reject) {
                if(this.element[0].naturalWidth && this.element[0].naturalHeight) {
                    resolve({'x':this.element[0].naturalWidth,'y':this.element[0].naturalHeight});
                } else {
                    if(this.element[0].width && this.element[0].height) {
                        resolve({'x':this.element[0].width,'y':this.element[0].height});
                    }
                }
                this.element.on('load',$.proxy(function(){
                    if(this.element[0].naturalWidth && this.element[0].naturalHeight) {
                        resolve({'x':this.element[0].naturalWidth,'y':this.element[0].naturalHeight});
                    } else {
                        if(this.element[0].width && this.element[0].height) {
                            resolve({'x':this.element[0].width,'y':this.element[0].height});
                        }
                    }
                },this));

                this.element.on('error',$.proxy(function(){
                    reject({'error':true});
                },this));
            },this));
        },
        _invalidateParentSize : function(){
            this.parentSize = {"x":this.$parent.width(),"y":this.$parent.height()};
        },

        state: function() {
            return {
                scale: this.scale,
                scaleMax:this.options.scaleMax,
                scaleStep:this.options.scaleStep
            };
        },

        zoomInFull:function(e) {
            this.setScale(this.options.scaleMax);
            this._track('zoomedInFull',{domEvent:e,scale:this.options.scaleMax,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
        },

        zoomIn: function (e) {
            var self = this;
            if (!self.zoomArea) {
                self._setupZoomArea().then(function(area){
                    if(!area){
                        return;
                    }
                    self.zoomIn(e);
                });
                return false;
            }
            if(!this.options.scaleSteps){
                if(this.scale != 1){
                    return;
                }
            }
            if(e) {
                e.preventDefault();
            }
            if(!this.options.activation.inGesture){
                if (this.gestureDetect.detected) {
                    return;
                }
            }

            if (self.zoomArea && self.zoomArea.animating) {
                return;
            }

            if(this.scale == this.options.scaleMax) {
                if (this.options.events.zoomIn) {
                    self.zoomArea.$container.off(this.options.events.zoomIn,this.zoomIn);
                    self.isZoomIn = false;
                }
            }

            var currScale = this.scale;

            if(this.options.scaleSteps) {
                this.scale+=this.options.scaleStep;
                this.scale = Math.min(this.scale,this.options.scaleMax);
            } else {
                this.scale = this.options.scaleMax;
            }

            if(currScale == this.scale) {
                return;
            }
            this._track('zoomedIn',{domEvent:e,scale:this.scale,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
            this.setScale(this.scale).then(function(){
                // need to take these outside of execution because if we have the same event for zoomIn and zoomOut both would trigger due to bubbling
                setTimeout($.proxy(function(){
                    if (!self.isMoveOn  && self.options.events.move) {
                        self.zoomArea.$container.on(this.options.events.move, $.proxy(self._setPos,self));
                        self.isMoveOn = true;
                    }
                    if (self.options.scaleProcess) {
                        if(!self.options.scaleSteps || self.scale == self.options.scaleMax) {
                            self.zoomArea.$container.on(self.options.events.zoomOut, $.proxy(self.zoomOut, self));
                        } else {
                            if (!self.isZoomIn) {
                                self.zoomArea.$container.on(this.options.events.zoomIn,$.proxy(self.zoomIn,self));
                                self.isZoomIn = true;
                            }
                        }
                    } else {
                        if(!self.options.scaleSteps) { // put inside the if as if we use steps we don't want it to zoom out (mostly for spin)
                            self.zoomArea.$container.on(self.options.events.zoomOut, $.proxy(self.zoomOut, self));
                        }
                    }

                },self),500);
            });

        },

        zoomInClick: function (e) {
            if(!this.options.activation.inGesture){
                if (this.gestureDetect.detected) {
                    return;
                }
            }
            var currScale = this.scale;
            this.scale+=this.options.scaleStep;
            this.scale = Math.min(this.scale,this.options.scaleMax);
            if(currScale == this.scale) {
                return;
            }
            this._track('zoomedIn',{domEvent:e,scale:this.scale,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
            this.setScale(this.scale);
            // need to take these outside of execution because if we have the same event for zoomIn and zoomOut both would trigger due to bubbling
            setTimeout($.proxy(function(){
                self.zoomArea.$container.on(this.options.events.move, $.proxy(this._setPos,this));
            },this),1);
        },

        setScale : function(s) {
            this.scale = s;
            return this._setupZoomArea().then($.proxy(function(area){
                if(!area){
                    return;
                }
                area.setScale(this.scale);
                this._invalidateParentSize();
//                this._setPos(e);

            },this));
        },
        _setPos : function(e){
            if(e.type === 'touchmove'){
                this._touchmove = true;
            }
            this._track('settingPos',{domEvent:e});
            var pos = e?this._getPercentagePos(e):{x:0.5,y:0.5};
            this.zoomArea.setPosition(pos.x,pos.y)
        },
        zoomOut:function(e) {
            this.zoomArea.allowClone = false;
            if(this._touchmove) {
                return false;
            }

            if (this.zoomArea && this.zoomArea.animating) {
                return;
            }

            var currScale = this.scale;
            if(this.options.scaleSteps) {
                this.scale -= this.options.scaleStep;
                this.scale = Math.max(this.scale, 1);
            } else {
                this.scale = 1;
            }
            if(currScale == this.scale) {
                return;
            }
            if(this.scale == 1) {
                if (this.options.events.move) {
                    this.zoomArea.$container.off(this.options.events.move, this._setPos);
                    this.isMoveOn = false;
                }

                if (this.options.events.zoomOut) {
                    this.zoomArea.$container.off(this.options.events.zoomOut,this.zoomOut);
                }
            }

            this.zoomArea.setScale(this.scale);
            this._track('zoomedOut',{domEvent:e,scale:this.scale,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
        },

        zoomOutFull:function(e) {
            if (!this.zoomArea) {
                return;
            }
            if (this.options.events.move) {
                self.zoomArea.$container.off(this.options.events.move, this._setPos);
            }

            if (this.options.events.zoomOut) {
                self.zoomArea.$container.off(this.options.events.zoomOut,this.zoomOut);
            }

            this.scale = 1;

            this.zoomArea.setScale(1);
            this._track('zoomedOutFull',{domEvent:e,scale:this.scale,scaleMax:this.options.scaleMax,scaleStep:this.options.scaleStep});
        },
        // Convert touch event into a standard event
        _convertEvent:function(e) {
            if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
                // stop stupid device behaviour
                e.preventDefault();
                e = e.originalEvent.touches[0];
            }
            return(e);
        },
        _getPercentagePos:function(e){
            e = this._convertEvent(e);
            var offset = this.$parent.offset();
            return {"x": (e.pageX-offset.left)/this.parentSize.x,"y":(e.pageY-offset.top)/this.parentSize.y};
        },

        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'zoom',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-zoom');
            this._removeEmptyAttributeHelper(this.element);
        },
        _removeEmptyAttributeHelper:function(elm, attsToCleanIfEmpty){
            var attArr = attsToCleanIfEmpty || ['class','style'];
            for (var i= 0,len=attArr.length;i<len;i++ ) {
                if(!(elm.attr(attArr[i]) && elm.prop(attArr[i]))){
                    elm.removeAttr(attArr[i]);
                }
            }
        }
    });

    var gestureDetector = function(toleranceX,toleranceY){
        this.toleranceX = toleranceX!==undefined?toleranceX:0;
        this.toleranceY = toleranceY!==undefined?toleranceY:0;
        this.detected = false;
        this.$document = $('body');
        this.$document.on('mousedown touchstart',$.proxy(this.startDetecting,this));
    };

    // Convert touch event into a standard event
    gestureDetector.prototype.convertEvent = function(e) {
        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
            e = e.originalEvent.touches[0];
        }
        return(e);
    };

    gestureDetector.prototype.startDetecting = function(e) {
        this.detected = false;
        this.$document.on('mousemove touchmove', $.proxy(this.moveDetected,this));
        this.$document.on('mouseup touchend', $.proxy(this.stopDetecting,this));
    };

    gestureDetector.prototype.moveDetected = function(e) {
        this.detected = true;
    };

    gestureDetector.prototype.stopDetecting = function(e) {
        this.$document.off('mousemove touchmove',this.moveDetected);
        this.$document.off('mouseup touchend',this.stopDetecting);
    };

    var pinch = function(e,cbIn,cbOut) {
        // pixel value at which to use callbacks
        this.threshold = 100;
        e = this.getFingers(e);
        this.cbIn = cbIn;
        this.cbOut = cbOut;
        if(e.length==2){
            this.start = this.getDistance(e);
            $(document).on('touchmove', $.proxy(this.move,this));
            $(document).on('touchend', $.proxy(this.end,this));
        }
    };

    pinch.prototype.getDistance = function(touches){
        var x = Math.abs(touches[0].pageX-touches[1].pageX),
            y = Math.abs(touches[0].pageY-touches[1].pageY);
        return Math.sqrt(
            (x * x) + (y * y)
        );
    };

    pinch.prototype.move = function(e) {
        e.preventDefault();
        e = this.getFingers(e);
        var newDistance = this.getDistance(e);
        var distance = (newDistance - this.start);
        if(distance > this.threshold) {
            this.cbIn();
            this.start = newDistance;
        }

        if(distance < 0-this.threshold) {
            this.cbOut();
            this.start = newDistance;
        }
    };

    pinch.prototype.remove = function(){
        this.end();
    };

    pinch.prototype.end = function(e){
        $(document).off('mousemove touchmove',this.move);
        $(document).off('mouseup touchend',this.end);
    };
    // get touch event stuff
    pinch.prototype.getFingers = function(e) {
        if (e.originalEvent && e.originalEvent.touches) {
            e = e.originalEvent.touches;
        }
        return(e);
    };

    var pan = function(zoom,e,cb) {
        if(this.multiFinger(e)){
            return;
        }
        e = this.convertEvent(e);
        this.start = {'x': e.pageX, 'y': e.pageY};
        this.zoomArea = zoom.zoomArea;
        this.cb = cb;
        this.element = zoom.element;
        if(!this.zoomArea.newSize){
            this.zoomArea.newSize = {'x':this.zoomArea.$source.width(), 'y':this.zoomArea.$source.height()};
        }
        this.currentPixPos = this.zoomArea.getPixPos();
        $(document).on('mousemove touchmove', $.proxy(this.move,this));
        $(document).on('mouseup touchend', $.proxy(this.end,this));
    };

    pan.prototype.move = function(e) {
        e.preventDefault();
        e = this.convertEvent(e);
        var offsetX = e.pageX - this.start.x;
        var offsetY = e.pageY - this.start.y;
        var newPos = this.zoomArea.getPercentFromPos(this.currentPixPos.x + offsetX, this.currentPixPos.y + offsetY);
        this.cb(newPos.x,newPos.y);
    };

    pan.prototype.end = function(e){
        $(document).off('mousemove touchmove',this.move);
        $(document).off('mouseup touchend',this.end);
    };

    pan.prototype.remove = function(){
        this.end();
    };

    // Convert touch event into a standard event
    pan.prototype.multiFinger = function(e) {
        return(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length>1);
    };

    // Convert touch event into a standard event
    pan.prototype.convertEvent = function(e) {
        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
            e = e.originalEvent.touches[0];
        }
        return(e);
    };


    var zoomArea = function($source,$area,originalSize,transforms, options) {
        this.options = options;
        this.animating = false;
        this._allowChangeClone = true;
        this.isFF = navigator.userAgent.toLowerCase().search("firefox") > -1;
        this.transforms = transforms;
        this.initialSrc = $source[0].src;
        this.scale = 1;
        this.$area = $area;
        this.$source = $source;
        this.originalSize = originalSize;
        this.posPercentageX = 0.5;
        this.posPercentageY = 0.5;
        this.createContainer();
        this.hide();
    };

    zoomArea.prototype.getPercentagePosWithScale = function(e) {
//        this.newSize.x
    };

    zoomArea.prototype.createContainer = function() {
        var self = this;
        this.$container = $('<div class="amp-zoomed-container"></div>');
        this.$preloader = new Image();
        $(this.$preloader).on('load', function(){
            //Assign preloader loaded Boolean to true
            self._preloaderImgLoaded = true;
            if (self.allowClone && !self.animating) {
                self.updateImageSrc(true);
            }
        });
        this.$zoomed = $('<img class="amp-zoomed" style="z-index:2;" src=""/>');
        this.$zoomedClone = $('<img class="amp-zoomed-clone" style="z-index:2;" src=""/>');
        this.$container.append(this.$zoomedClone);
        this.$container.append(this.$zoomed);
        this.$area.append(this.$container);
        this.$container.css({
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0
        })
    };

    zoomArea.prototype.invalidatePosition = function() {
        this.setPosition(this.posPercentageX,this.posPercentageY);
    };

    zoomArea.prototype.setPosition = function(x,y) {
        if(this.animating)
            return;

        if(this.$zoomed.width()<=this.$area.width()) {
            x = 0.5;
        }

        if(this.$zoomed.height()<=this.$area.height()) {
            y = 0.5;
        }
        this.posPercentageX = x;
        this.posPercentageY = y;
        x = Math.min(1,Math.max(0,x));
        y = Math.min(1,Math.max(0,y));
        this.$zoomed.css('left',(0-((this.$zoomed.width()-this.$area.width())*x))+'px');
        this.$zoomed.css('top',(0-((this.$zoomed.height()-this.$area.height())*y))+'px');
        this.$zoomedClone.css('left',(0-((this.$zoomed.width()-this.$area.width())*x))+'px');
        this.$zoomedClone.css('top',(0-((this.$zoomed.height()-this.$area.height())*y))+'px');
    };

    zoomArea.prototype.getPixPos = function(x,y) {
        if(x==undefined && y == undefined) {
            x = this.posPercentageX;
            y = this.posPercentageY;
        }
        x = Math.min(1,Math.max(0,x));
        y = Math.min(1,Math.max(0,y));
        return {'x':(0-((this.newSize.x-this.$area.width())*x)),'y':(0-((this.newSize.y-this.$area.height())*y))};
    };

    zoomArea.prototype.getPercentFromPos = function(x,y) {
        var percentX = 0-(x/(this.newSize.x-this.$area.width()));
        var percentY = 0-(y/(this.newSize.y-this.$area.height()));
        return {'x':percentX,'y':percentY};
    };

    zoomArea.prototype.animate = function (size,pos,cb) {
        this.animating = true;
        if(size.x <= this.$area.width()) {
            pos.x = this.getPixPos(0.5,0.5).x;
        }
        if(size.y <= this.$area.height()) {
            pos.y = this.getPixPos(0.5,0.5).y;
        }

        var animConfig = {'width':size.x,'height':size.y,'left':pos.x+'px','top':pos.y+'px'};

        this.$zoomed.animate(animConfig, 500);
        this.$zoomedClone.animate(animConfig, 500);

        setTimeout($.proxy(function(){
            if (cb) {
                cb();
            }
            this.animating = false;
        },this),this.isFF ? 1000 : 600);
    };

    zoomArea.prototype.updateImageSrc = function(scaleIncreased){
        var self = this;
        if(!scaleIncreased || !self.allowClone || !self._preloaderImgLoaded){
            return false;
        }
        self.setImage();

    };

    zoomArea.prototype.setScale = function(scale,cb){
        var self = this;
        var scaleIncreased = scale > this.scale;
        if(scale == this.scale) {
            return;
        }

        if(!scaleIncreased){
            this.allowClone = false;
        }
        else{
            this.allowClone = true;
        }

        self._preloaderImgLoaded = false;

        if((scale < this.scale) && scale == 1) {
            this.newSize = {'x':this.$source.width(), 'y':this.$source.height()};
        } else {
            this.newSize = {'x':this.$source.width()*scale, 'y':this.$source.height()*scale};
        }
        if (this.scale==1) {
            this.$zoomed.attr('src',this.$source[0].src);
            if(scale > this.scale) {
                this.$zoomed.width(this.$source.width());
                this.$zoomed.height(this.$source.height());
                this.$zoomedClone.width(this.$source.width());
                this.$zoomedClone.height(this.$source.height());
            }
            this.setPosition(0.5,0.5);
            this.show();
        }
        if(scale==1){
            this.animate(this.newSize,this.getPixPos(), function(){
                self.hide();
                self.updateImageSrc(false);
            });
        } else {
            this.animate(this.newSize, this.getPixPos(), function(){
                self.updateImageSrc(scaleIncreased);
            });
        }
        this.scale = scale;
        this.invalidateImageURL({'x':this.originalSize.x*scale, 'y':this.originalSize.y*scale});
    };

    zoomArea.prototype.show = function(){
        this.invalidatePosition();
        $(window).off('resize', this.invalidatePosition);
        $(window).on('resize', $.proxy(this.invalidatePosition,this));
        this.$container.show();
    };

    zoomArea.prototype.hide = function(){
        this.$container.hide();
        $(window).off('resize', this.invalidatePosition);
    };

    zoomArea.prototype.invalidateImageURL = function(size) {
        var self = this;
        var templateQueryParam = '';

        if (this.transforms && this.transforms.length) {
            templateQueryParam = this.transforms + '&';
        }

        var src = this.initialSrc.split('?')[0] + '?' + templateQueryParam + 'w=' + size.x + '&h=' +size.y;

        if(size.x == 0 || size.y ==0) {
            src='';
        }
        self.$preloader = new Image();
        self._preloaderImgLoaded = true;
        self.$preloader.setAttribute('src', src);

    };
    zoomArea.prototype.setImage = function() {
        var self = this;
        var loaded;
        var previousSrc = self.$zoomed.attr('src');

        if(self._allowChangeClone){
            self.$zoomedClone.attr('src', previousSrc);
        }

        if(self.$preloader.complete && self.$preloader.naturalWidth && self.$preloader.naturalWidth > 0){
            if(loaded){
                return;
            }

            setTimeout(function(){
                self.$zoomed.attr('src', self.$preloader.src);
            }, self.isFF ? 1000 : 10);
            loaded = true;
        }

        else{
            self.$preloader.onload = function(){
                if(loaded){
                    return;
                }
                self.$zoomed.attr('src', self.$preloader.src);
                loaded = true;
            };
        }

        self._allowChangeClone = false;
    };


}(jQuery));

(function ($) {

    $.widget("amp.ampVideo", {
        options: {
            autoplay: false,
            loop: false,
            muted: false,
            skin: '',
            responsive: true,
            preload: 'auto',
            pauseOnHide: true,
            controls:true,
            nativeControlsForTouch:true,
            plugins:{},
            enableSoftStates: true
        },
        _states: {
            stopped:0,
            buffering:1,
            paused:2,
            playing:3,
            loading:4,
            error:5,
            idle:6
        },
        _currentState: 0,
        _ready: false,
        _loopCount: 0,
        _savedHTML:'',
        _getCreateOptions:function(){
            this._savedHTML = this.element[0].outerHTML;
            var attributes = this.element.data().ampVideo;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function () {
            this.element.addClass('amp amp-video');
            var video = this.element.find('video');
            var self = this;
            video.addClass('video-js' + ' ' + this.options.skin + ' ' + 'vjs-big-play-centered');
            if(videojs) {
                videojs.options.flash.swf = (this.options.swfUrl +"video-js.swf") || "../../assets/video-js.swf";

                this._player = videojs(video[0], {
                    autoplay: this.options.autoplay,
                    muted: this.options.muted,
                    width: '100%',
                    height: '100%',
                    loop: false,
                    controls: this.options.controls,
                    preload: this.options.preload,
                    plugins: self._sanitisePlugins(this.options.plugins),
                    nativeControlsForTouch:this.options.nativeControlsForTouch
                });
            }

            self._calcSize();
            if (self.options.responsive) {
                $(window).bind("resize", function (_self) {
                    return function () {
                        return _self._calcSize();
                    }
                }(self));
            }

            this._player.ready(function () {

                if(this.options_.muted){
                    this.volume(0);
                }

                self._ready = true;
                var vid = self.element.find('.vjs-tech');
                var interval = setInterval(function () {
                    if(self.options.height == 'auto'){
                        var height = vid.css({'height':'auto'}).height();
                        if (height != 0) {
                            clearInterval(interval);
                            self.element.height(height);
                            vid.css({height:''});
                            self._player.dimensions(self.element.width(), self.element.height())
                        }
                    }
                }, 200);
                if (self.options.autoplay)
                    self.state(self._states.playing);


                if (self.options.plugins && self.options.plugins['videoJsResolutionSwitcher'] && self.options.plugins['videoJsResolutionSwitcher'].default) {
                    self._player.on('ready', function () {
                        self._player.currentResolution(self.options.plugins['videoJsResolutionSwitcher'].default);
                        self._allowResolutionChange = false;
                    });
                    self._player.on('resolutionchange', function () {
                        if (self._player.paused()) {
                            if (self._allowResolutionChange) {
                                self._player.play();
                                self._player.pause();
                            }
                            if (self._player.currentTime() > 0.5) {
                                self._allowResolutionChange = true;
                            }
                        }
                    });
                }

                this.on("play", function (e) {
                    if (!self.softPlay || !self.options.enableSoftStates) {
                        self.state(self._states.playing);
                        self._track("play", {event:e,player:this,time: this.currentTime(),duration: self.duration});
                    } else {
                        self.softPlay = false;
                    }
                });

                this.on("error", function (e) {
                    self.state(self._states.error);
                    self._track("error", null);
                });

                this.on("pause", function (e) {
                    if(!e.target.ended && !e.target.seeking){
                        self.state(self._states.paused);
                        self._track("pause", {event:e,player:this,time: this.currentTime(),duration: self.duration});
                    }
                });

                this.on("waiting", function (e) {
                    self.state(self._states.buffering);
                });

                this.on("seeking", function (e) {
                    if (!self.softSeek) {
                        if (self.state() !== self._states.paused && e.target.currentTime !== 0 && self.options.enableSoftStates)
                            self.softPlay = true;
                        self._track("seeked", {event:e,player:this,time: this.currentTime(),duration: self.duration});
                    } else {
                        self.softSeek = false;
                    }
                });

                this.on("timeupdate", function (e) {
                    self._track("timeUpdate", {event:e,player:this,time: this.currentTime(),duration: self.duration});
                });

                this.on("volumechange", function (e) {
                    self._track("volume", {event:e,player:this,volume: this.volume(), muted: this.muted()});
                });

                this.on("durationchange", function (e) {
                    self.duration = this.duration();
                    self._track("durationChange", {event:e,player:this,duration: self.duration});
                });

                this.on("fullscreenchange", function (e) {
                    self._track("fullScreenChange", {event:e,player:this});
                    setTimeout(function(){$(window).resize()},200);
                });

                this.on("ended", function (e) {
                    if (self.options.loop) {
                        self.softSeek = true;
                        self._player.currentTime(0);
                        self.softPlay = true;
                        self._player.play();
                        self._track("ended", null);
                        self._track("looped", { count: ++self._loopCount });
                    }else{
                        self.state(self._states.stopped);
                        self._track("ended", null);
                        self._track("stopped", null);
                    }
                });
                self._track("created",{player:this,duration: self.duration});
            });
        },
        visible: function(visible) {
            if(visible == this._visible)
                return;

            this._track('visible',{'visible':visible});

            if (visible) {
                this._calcSize();
            } else {
                if(this._states.playing == this.state() || this._states.buffering== this.state()) {
                    if(this.options.pauseOnHide){
                        this.pause();
                    }
                }
            }

            this._visible = visible;
        },

        redraw:function(){
            this._calcSize();
        },
        _calcSize: function() {
            var w,h;
            if ((this.options.responsive) && (this.options.width && this.options.height && this.options.width!='auto' && this.options.height!='auto')) {
                var display = this.element.css('display');
                this.element.css('display','block');
                w  = Math.round((this.element.width()));
                this.element.css('display',display);
                h =  Math.round((w*(this.options.height/this.options.width)));
                this.element.height(h);
            } else {
                if (this.options.width) {
                    this.element.width(this.options.width)
                } else if (this.options.responsive) {
                    this.element.width(this.element.parent().width());
                }
                if (this.options.height) {
                    this.element.height(this.options.height);
                }else if (this.options.responsive) {
                    this.element.height(this.element.parent().height());
                }
            }

            if(this.options.center) {
                var eh = this.element.height();
                var ph = this.element.parent().height();
                this.element.css('margin-top',((ph/2)-(eh/2))+'px');
            }

            if (this._player)
                this._player.dimensions(this.element.width(), this.element.height())

        },
        play: function () {
            if(!this._ready || this._states.playing === this.state()) return;
            this._player.play();
        },
        pause: function () {
            if(!this._ready || this._states.paused === this.state()) return;
            this._player.pause();
        },
        stop: function () {
            if(!this._ready || this._states.stopped === this.state()) return;
            this._player.pause();
            this.softSeek = true;
            this._player.currentTime(0);
            this._track("stopped", null);
            this.state(this._states.stopped);
        },
        seek: function (time) {
            if(!this._ready) return;
            this.currentTime(time)
        },
        currentTime: function (time) {
            if (time === void 0)
                return this._player.currentTime();
            this._player.currentTime(time);
        },
        state: function(state){
            if (state === void 0)
                return this._currentState;
            this._currentState = state;
            this._trigger("stateChange", null, {state:state})
        },
        _track: function (event, value) {
            this._trigger(event, null, value);
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element, 'video', event, value);
            }
        },
        _destroy: function() {
            this._player.dispose();
            this._player = null;
            this.element[0].outerHTML = this._savedHTML;
        },
        _sanitisePlugins: function(plugins){
            // setting plugins to false doesn't deactivate, remove instead
            if (plugins && plugins['videoJsResolutionSwitcher'] == false){
                delete plugins['videoJsResolutionSwitcher'];
            }
            return plugins;
        }
    });

}(jQuery));

(function ( $ ) {

    $.widget( "amp.ampSpin",$.amp.ampStack, {
        options:{
            delay: 50,
            autoplay:false,
            loop:true,
            responsive:true,
            states:{
                "selected":"amp-selected",
                "seen":"amp-seen",
                "active":"amp-active",
                "inactive":"amp-inactive"
            },
            events:{
                start:'mousedown touchstart',
                move:'mousemove touchmove',
                end:'mouseup touchend'
            },
            momentum : true,
            preload: 'created',
            preloadType:'full',
            minDistance : 25,
            activate:'down',
            friction: 0.97,
            dir:'normal',
            gesture:{
                enabled:true,
                fingers:1
            },
            orientation: 'horz',
            start:1,
            cursor:{active: 'auto', inactive: 'auto'},
            play: {
                onLoad:false,
                onVisible:false,
                repeat:1,
                delay: 10
            },
            dragDistance:200,
            lazyLoad:false

        },
        _getCreateOptions:function(){
            var attributes = this.element.data().ampSpin;
            if (attributes) {
                return $.extend(true, {}, this.options, attributes);
            }
            return this.options;
        },
        _create: function() {
            var self = this,
                children = this._children = this.element.children(),
                count = this._count = this.element.children().length;
            this.isWebkit = /Chrome|Safari/.test(navigator.userAgent) && !/Edge/.test(navigator.userAgent);
            this.$document = $(document);
            this.options.friction = Math.min(this.options.friction,0.999);
            this.options.friction = Math.max(this.options.friction,0);
            this._setCursor(this.options.cursor.inactive);
            this.count = this.element.children().length;
            this.options.dragDistance = Math.max(this.options.dragDistance,1);
            this._index = Math.max(1,Math.min(this.options.start,this.count));
            if($.inArray(this.options.preload, ['created', 'visible', 'none']) == -1){
                this.options.preload = 'created';
            }
            this.element.addClass('amp');
            this.element.addClass('amp-spin');
            this.element.addClass(this.options.states.inactive);
            this.imgs = this.element.find('img:not(.amp-zoom-img)');
            this.toLoadCount =  this.imgs.length;
            this.loadedCount = 0;
            children.addClass('amp-frame');
            var currentChild =  children.eq(this._index-1);
            var currentChildClone = currentChild.clone();
            currentChildClone.addClass('amp-frame-clone');
            if (this.isWebkit){
                children.css({'display':'none'});
                currentChild.css('display','block');
            } else {
                children.css({'z-index':-1});
                currentChild.css('z-index', 1);
            }

            this.element.append(currentChildClone);
            currentChild.eq(this._index-1).addClass(this.options.states.selected + ' ' +this.options.states.seen);
            setTimeout(function(_self) {
                return function() {
                    return _self._calcSize();
                }
            }(self),1);
            
            if(this.options.responsive){
                $(window).on("resize", function(_self) {
                    return function() {
                        return _self._calcSize();
                    }
                }(self));
            }
            this.element.on('dragstart',function(e) {
                return false;
            });

            this.element.on(this.options.events.start, $.proxy(this._startDrag,this));

            // mousewheel
            this.element.on('mousewheel DOMMouseScroll', function(e){return self._mouseScroll(e);});

            if(this.options.autoplay) {
                this.play();
            }

            if(this.options.preload == 'created') {
                this._startPreload();
            }

            this._track("created",{'index':this._index,'canNext':this.canNext(),'canPrev':this.canPrev()});
        },
        _setCursor: function(cursorStyle){
            if((cursorStyle.indexOf('zoom') < 0)&&(cursorStyle.indexOf('grab') < 0)){
                this.element.css('cursor', cursorStyle);
                return false;
            }
            // zoom
            if (/*@cc_on!@*/false || !!document.documentMode){ return false; }     // ie bye bye
            if(typeof InstallTrigger !== 'undefined'){        // moz
                this.element.css('cursor', '-moz-' + cursorStyle);
            }

            if(!!window.chrome){     // chrome + opera

                this.element.css('cursor', '-webkit-' + cursorStyle);
            }
        },
        redraw:function(){
            this._calcSize();
        },
        _mouseScroll:function(e){
            var delta = 0;
            if (!e){e = window.event;} // for ie

            if (e.originalEvent.wheelDelta) {
                delta = e.originalEvent.wheelDelta;  // chrome, ie
            } else if (e.originalEvent.detail) {
                delta = -e.originalEvent.detail;   // ff
            }

            if (delta > 0){
                this.next();
            }else{
                this.prev();
            }

            this._track("scroll", { 'domEvent': e, delta: delta });

            e.preventDefault();
            return false;
        },
        visible:function(visible) {
            var self = this;
            if (visible != self._visible) {
                self._super(visible);
                if(visible) {
                    if(self.options.preload=='visible') {
                        self._startPreload();
                    }

                    if(this.options.preload == 'none'){
                        self._startPreload(self._index);
                    }
                    if(self.options.play.onVisible && self._loaded) {
                        setTimeout(function() {
                            self.playRepeat(self.options.play.repeat);
                        }, self.options.play.delay);
                    }
                }
            }
        },
        _resolveEventCoords: function(e){
            e = e.originalEvent;
            if(e.touches && e.touches.length){
                return {x: e.touches[0].clientX, y: e.touches[0].clientY};
            }else if(e.changedTouches && e.changedTouches.length){
                return {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
            }else{
                return {x: e.clientX, y: e.clientY};
            }
        },
        _startPreload: function(index){
            if(this._loaded || (this._loading && !this.first))
                return;

            var self=this;
            this._loading = true;
            if(!this.first){
                this._track('startPreload');
                if(this.options.preload != 'none'){
                     if(this.options.preloadType == 'full') {
                        this.pre = $('<li class="amp-progress amp-frame"></li>');
                        this.element.append(this.pre);
                    } else if (this.options.preloadType == 'window'){
                        // create progress indicator
                        this.progressIndicator = $('<div class="amp-progress-indicator"><div class="amp-progress-message"></div><div class="amp-progress-bar-background"><div class="amp-progress-bar"></div></div></div>');
                        this.progressIndicator.find('.amp-progress-message').html(this.options.progressMessage || 'Loading...');
                        this.progressIndicator.progress = self.progressIndicator.find('.amp-progress-bar');
                        this.progressIndicator.visible = true;
                        this.element.append(this.progressIndicator);
                    }
                }
            }


            var onLoad = function (e) {
                self.loadedCount++;
                if (self.loadedCount >= self.toLoadCount && !self._loaded) {
                    self._unsetLoadEvents(self.imgs);
                    self._loaded = true;
                    if (self.pre) {
                        self.pre.remove();
                    }
                    if (self.options.play.onLoad) {
                        self.playRepeat(self.options.play.repeat);
                    }
                    self._loading = false;
                    if (self.progressIndicator) {
                        self.progressIndicator.visible = false;
                        self.progressIndicator.remove();
                    }

                    self._track('preloaded');
                } else {
                    var percent = ((self.loadedCount / self.toLoadCount) * 100);
                    if (self.pre) {
                        self.pre.css('width', 100 - percent + '%');
                        self.pre.css('left', percent + '%');
                    }
                    if (self.progressIndicator && self.progressIndicator.visible) {
                        self.progressIndicator.progress.css('width', percent + '%');
                    }
                }

            };

            if(index){
                this.first = true;
                this.toLoadCount -= 1;
                this._callImageMethod($(this.imgs[index - 1]), onLoad)
            }else{
                this._callImageMethod(this.imgs, onLoad)
            }

        },
        _unsetLoadEvents: function(imgs) {
            if(!imgs){
                return;
            }
            for(var m = 0, len = imgs.length; m < len; m++) {
                var child = $(imgs[m]),
                    components = child.data();

                if(components['amp-ampZoom'] || components['ampAmpZoom']){
                    child.ampZoom({'loaded':null});
                }else{
                    child.ampImage({'loaded':null});
                }
            }
        },
        _callImageMethod: function(imgs, onLoad) {
            for(var m = 0, len = imgs.length; m < len; m++) {
                var child = $(imgs[m]),
                    components = child.data();

                if(components['amp-ampZoom']  || components['ampAmpZoom']){
                    child.ampZoom({'loaded':onLoad});
                    child.ampZoom('load', this.options.preload);
                }else{
                    var imgComponent = components['amp-ampImage'] || components['ampAmpImage'];
                    if(typeof imgComponent !== 'undefined' && imgComponent.loaded){
                        onLoad();
                    }
                    child.ampImage({'loaded':onLoad});
                    child.ampImage('load', this.options.preload);
                }
            }
        },
        preload:function() {
            this._startPreload();
        },
        playRepeat:function(num) {
            if(num=='inf'){
                this.play();
                return;
            }
            var self = this;

            for(var i=0; i<num; i++) {
                for (var x=0; x<this.count;x++) {
                    setTimeout(function(){
                        self.next();
                    },this.options.delay*((i*this.count)+x));
                }

            }
        },
        _startDrag: function(e) {
            var self = this,
                coords = this._resolveEventCoords(e),
                o = $(e.currentTarget).offset(),
                mx = coords.x - o.left,
                my = coords.y - o.top;
            
            if(this._started) {
                return;
            }
            
            if(this.options.gesture.enabled) {
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=this.options.gesture.fingers)
                        return true;
                }
            }

            this._started = true;

            this._track("startMove",{'domEvent':e,pos:{x:mx,y:my}});
            this._ended = false;
            this.pause();

            this._setCursor(this.options.cursor.active);
            this.element.removeClass(this.options.states.inactive).addClass(this.options.states.active);

            var m = this._mbind =function(i) {
                return function(e){
                    return self._mouseMove(e,o,mx,my,i);
                }
            }(this._index);
            var u = this._ubind = function(i){
                return function(e){
                    return self._endDrag(e,o,mx,my,i);
                }
            }(this._index);
                this.$document.on(this.options.events.move, m);
                this.$document.on(this.options.events.end,u);

            this._mouseMoveInfo = [{e:e,o:o,mx:mx,my:my,sindex:this._index}];
            if(window.navigator.userAgent.indexOf("MSIE ")>0){
                return false;
            }
            this.element.find('.amp-spin').each(function(i, element){
                var childSpin = $(element).data()['amp-ampSpin'] || $(element).data()['ampAmpSpin'];
                if(childSpin && childSpin._startDrag){
                    childSpin._startDrag(e);
                }
            })
        },
        _mouseMove: function(e,o,sx,sy,sindex) {

            if(this.options.gesture.enabled) {
                if(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0] ) {
                    if (e.originalEvent.touches.length!=this.options.gesture.fingers)
                        return true;
                }
            }
            var coords = this._resolveEventCoords(e),
                v= 0,
                mx = coords.x- o.left,
                my = coords.y - o.top,
                dx = mx-sx,
                dy = my-sy,
                m = this._mouseMoveInfo,
                mm = {e:e,mx:mx,my:my};

                if(Math.abs(dx)< Math.abs(dy)) {
                    this.moveDir = 'vert';
                } else if (Math.abs(dx)> Math.abs(dy)){
                    this.moveDir = 'horz';
                } else {
                    this.moveDir = this.options.orientation;
                }
            this._mouseMoveInfo.push(mm);
            if (this._mouseMoveInfo.length > 2) {
                this._mouseMoveInfo.shift();
            }
            this._moveSpin(this.options.orientation == 'horz' ? dx : dy,e,sindex);

            if(this.options.orientation == this.moveDir){
                e.preventDefault();
                return false;
            }
        },

        _moveSpin : function(distance,e,sindex) {
            var index = Math.round((distance/this.options.dragDistance)* (this._count-1));
            if(this.options.dir=='normal') {
                index = 0-index;
            }
            this._track("move",{domEvent:e,distFromStart:distance});
            var toIndex = this._numToIndex(index+sindex);
            if(toIndex!=this._index) {
                this._checkLoop(toIndex);
                this.goTo(toIndex);
            }
        },

        _checkLoop:function(toIndex) {
            if(Math.abs(this._index-toIndex)>2) {
                if(this._index>toIndex) {
                    this._track("looped","forwards");
                } else {
                    this._track("looped","backwards");
                }
            }
        },

        _endDrag: function(e,o,sx,sy,sindex) {
            if(this.moveDir == 'horz'){
                e.preventDefault();
                e.stopPropagation();
            }
            this.moveDir = null;
            var self = this;
            if(this._ended) {
                return;
            }
            this._started = false;
            this._ended = true;

            this._track("endMove",{'domEvent': e});
                this.$document.off(this.options.events.end, this._ubind);
                this.$document.off(this.options.events.move, this._mbind);
            clearInterval(this._timer);

            this._setCursor(this.options.cursor.inactive);
            this.element.removeClass(this.options.states.active).addClass(this.options.states.inactive);

            if(this.options.momentum && this._mouseMoveInfo.length==2) {
                var m = this._mouseMoveInfo,
                    time = m[1].e.timeStamp - m[0].e.timeStamp,
                    distance = this.options.orientation == 'horz' ? m[1].mx -  m[0].mx : m[1].my -  m[0].my;
                // we can't have inf speed or zero speed
                if(distance==0||time==0)
                    return;
                var speed = distance/time,
                    travelSpeed = speed,
                    friction = this.options.friction,
                    totalDistance = this.options.orientation == 'horz' ? m[1].mx -  sx : m[1].my -  sy,
                    travelDistance = 0,
                    travelTime = 0,
                    timeInterval = 10; // time interval in ms
                // Meeting the min distance requirement
                if(Math.abs(totalDistance) < this.options.minDistance)
                    return;

                var lastAnimationTime = null;

                var animateMomentum = function(timeStamp) {
                    var timeElapsed;

                    if (lastAnimationTime) {
                        timeElapsed = timeStamp - lastAnimationTime;
                    } else {
                        // this is the first iteration, assume 15ms
                        timeElapsed = 15;
                    }

                    lastAnimationTime = timeStamp;

                    // apply a unit of friction for every elapsed 10ms
                    var frictionIteration = timeElapsed / 10;
                    while (frictionIteration > 0) {
                        // allow for a partial application of friction, ie. if we had to apply 3.5 friction iterations
                        // for the last iteration (0.5), we only want to apply 50% of the friction speed delta
                        travelSpeed -= (travelSpeed - travelSpeed * friction) * Math.min(frictionIteration, 1);
                        frictionIteration -= 1;
                    }

                    travelDistance += travelSpeed * timeElapsed;
                    travelTime += timeElapsed;

                    self._moveSpin(travelDistance + totalDistance, e, sindex);

                    if (Math.abs(travelSpeed) > 0.1) {
                        window.requestAnimationFrame(animateMomentum);
                    }
                };

                // trigger the initial momentum animation
                window.requestAnimationFrame(animateMomentum);

                return;
            }
        },
        _calcSize: function() {
            this._super();

            if(this.progressIndicator && this.progressIndicator.visible){
                // position centrally
                this.progressIndicator.css('top', (parseInt($(this.element.find('li')[0]).css('height')) - parseInt(this.progressIndicator.css('height'))) / 2 + 'px');
                this.progressIndicator.css('left',(parseInt($(this.element.find('li')[0]).css('width')) - parseInt(this.progressIndicator.css('width'))) / 2 + 'px');
            }
        },
        _getIndex : function(_index) {
            var children = this.element.children();
            if(_index > children.length){
                if(!this.options.loop)
                    return;
                _index = 1;
            } else if(_index<1) {
                if(!this.options.loop)
                    return;
                _index = children.length;
            }
        },
        _direction : function(index) {
            var forw=0, back=0;
            var oIndex = index;
            while(oIndex!=this._index) {
                if(oIndex>this._count){
                    oIndex = 0;
                } else {
                    oIndex++;
                }
                forw++
            }
            oIndex = index;
            while(oIndex!=this._index) {
                if(oIndex<1) {
                    oIndex = this._count;
                } else {
                    oIndex--;
                }
                back++;
            }
            if (back<forw) {
                return true;
            } else {
                return false;
            }
        },
        _loopIndex : function(dir,start,count) {
            var inc = dir ? 1 : -1;
            var curr = start;
            for (var i= 0;i<count;i++) {

                if(curr+inc>this._count){
                    curr = 1;
                } else if(curr+inc<1) {
                    curr = this._count
                } else {
                    curr = curr + inc;
                }

            }
            return curr;
        },
        _loopCount : function(dir,start,target) {
            var inc = dir ? 1 : -1;
            var curr = start;
            var count = 0;
            while(curr != target) {
                count++;
                if(curr+inc>this._count){
                    curr = 1;
                } else if(curr+inc<1) {
                    curr = this._count
                } else {
                    curr = curr + inc;
                }
            }
            return count;
        },

        _animate : function(_index){
            var items = this.element,
                currItem  = items.children('li').eq(this._index - 1),
                nextItem = items.children('li').eq(_index - 1);
            if(this._index == _index){
                return;
            }
            nextItem.addClass(this.options.states.selected + ' ' +this.options.states.seen);
            if (this.isWebkit){
                nextItem.css('display', 'block');
                currItem.css('display', 'none');
            }else{
                nextItem.css('zIndex', 1);
                currItem.css('zIndex', -1);
            }
            currItem.removeClass(this.options.states.selected);
            this._setIndex(_index);

            // set the index, but ignore visibility toggling as this is already done
            this._setIndex(_index, true);
        },
        _track: function(event,value) {
            this._trigger( event, null, value );
            if(window.amp && amp.stats && amp.stats.event){
                amp.stats.event(this.element,'spin',event,value);
            }
        },
        _destroy: function() {
            this.element.removeClass('amp');
            this.element.removeClass('amp-spin');
            this.element.removeClass(this.options.states.active);
            this.element.removeClass(this.options.states.inactive);
            this.element.css('cursor','');
            this.element.find('.amp-progress').remove();
            this.element.find('.amp-loading').remove();
            this._removeEmptyAttributeHelper(this.element);
            var children = this.element.children();
            children.removeClass('amp-frame');
            children.removeClass(this.options.states.selected);
            children.removeClass(this.options.states.seen);
            children.css('display','');
            for (var i=0,len=children.length;i<len;i++ ) {
                this._removeEmptyAttributeHelper($(children[i]));
            }
            var imgs = children.find('img');
            imgs.removeClass('amp amp-main-img, amp-image');
            imgs.css('display','');
            for (var i= 0,len=imgs.length;i<len;i++ ) {
                this._removeEmptyAttributeHelper($(imgs[i]));
            }
        }

    });


}( jQuery ));
/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(3);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(17);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(5);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(18);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(19);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(6);

	var _decorators = __webpack_require__(14);

	var _logger = __webpack_require__(16);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(7);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(8);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(9);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(10);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(11);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(12);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(13);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(15);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(3);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;
this["amp"] = this["amp"] || {};
this["amp"]["templates"] = this["amp"]["templates"] || {};

Handlebars.registerPartial("main-container-list-image", this["amp"]["templates"]["main-container-list-image"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li>\n    <div class=\"zoom-trap\">\n        <img data-amp-src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.main : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + "\"\n            data-amp-srcset=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.main : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + " 1x, "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.mainRetina : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + " 2x\"\n            class=\"amp-main-img inner-element\">\n    </div>\n</li>\n";
},"useData":true}));

Handlebars.registerPartial("main-container-list-spin-3d", this["amp"]["templates"]["main-container-list-spin-3d"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "            <li>\n                <ul class=\"amp-inner-spinset\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.set : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n            </li>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                        <li>\n                            <img data-amp-src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].templates : depths[2])) != null ? stack1.main : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].locale : depths[2])) != null ? stack1.second : stack1), depth0))
    + "\"\n                                 data-amp-srcset=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].templates : depths[2])) != null ? stack1.main : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].locale : depths[2])) != null ? stack1.second : stack1), depth0))
    + " 1x, "
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].templates : depths[2])) != null ? stack1.mainRetina : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].locale : depths[2])) != null ? stack1.second : stack1), depth0))
    + " 2x\"\n                                 class=\"amp-main-img\">\n                        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<li>\n    <div class=\"spin-trap\"></div>\n    <ul id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.spin : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"inner-element amp-outer-spin\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.spin : depth0)) != null ? stack1.set : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</li>\n\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("main-container-list-spin", this["amp"]["templates"]["main-container-list-spin"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "            <li>\n                <img data-amp-src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].templates : depths[1])) != null ? stack1.main : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].locale : depths[1])) != null ? stack1.second : stack1), depth0))
    + "\"\n                    data-amp-srcset=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].templates : depths[1])) != null ? stack1.main : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].locale : depths[1])) != null ? stack1.second : stack1), depth0))
    + " 1x, "
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].templates : depths[1])) != null ? stack1.mainRetina : stack1), depth0))
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].locale : depths[1])) != null ? stack1.second : stack1), depth0))
    + " 2x\"\n                    class=\"amp-main-img\">\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<li>\n    <div class=\"spin-trap\"></div>\n    <ul id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.spin : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"inner-element\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.spin : depth0)) != null ? stack1.set : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</li>\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("main-container-list-video", this["amp"]["templates"]["main-container-list-video"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <source src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].locale : depths[1])) != null ? stack1.first : stack1), depth0))
    + "\" data-res=\""
    + alias4(((helper = (helper = helpers.profileLabel || (depth0 != null ? depth0.profileLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profileLabel","hash":{},"data":data}) : helper)))
    + "\" data-bitrate=\""
    + alias4(((helper = (helper = helpers.bitrate || (depth0 != null ? depth0.bitrate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bitrate","hash":{},"data":data}) : helper)))
    + "\" label=\""
    + alias4(((helper = (helper = helpers.profileLabel || (depth0 != null ? depth0.profileLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profileLabel","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = helpers.htmlCodec || (depth0 != null ? depth0.htmlCodec : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlCodec","hash":{},"data":data}) : helper)))
    + "; codecs="
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.video : depth0)) != null ? stack1.codec : stack1), depth0))
    + "\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li>\n    <div id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.video : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"inner-element video\">\n        <video poster=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.video : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.main : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.video : depth0)) != null ? stack1.media : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </video>\n    </div>\n</li>\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("main-container-list", this["amp"]["templates"]["main-container-list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.set : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.set : depth0)) != null ? stack1.items : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.set : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"main-container-list-spin-3d",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"spin":depth0},"data":data}))
    + "\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"main-container-list-spin",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"spin":depth0},"data":data}))
    + "\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.media : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"main-container-list-video",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"video":depth0},"data":data}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"main-container-list-image",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"image":depth0},"data":data}))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("nav-container-list-item", this["amp"]["templates"]["nav-container-list-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"tooltip "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.set : stack1)) != null ? stack1.items : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.set : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n            <span class=\"tooltip-icon\"></span>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "spin-3d";
},"4":function(container,depth0,helpers,partials,data) {
    return "spin";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"tooltip video\">\n            <span class=\"tooltip-icon\"></span>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<li>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.set : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.media : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <img data-amp-src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.src : stack1), depth0))
    + "?"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.thumb : stack1), depth0))
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.second : stack1), depth0))
    + "\"\n        alt=\"\"\n        class=\"amp-main-img thumbnail\">\n    <div class=\"amp-margin-helper\"></div>\n</li>\n";
},"useData":true}));

Handlebars.registerPartial("nav-container-list", this["amp"]["templates"]["nav-container-list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "        "
    + container.escapeExpression((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"nav-container-list-item",{"name":"renderPartial","hash":{"locale":(depths[1] != null ? depths[1].locale : depths[1]),"templates":(depths[1] != null ? depths[1].templates : depths[1]),"item":depth0},"data":data}))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useDepths":true}));

this["amp"]["templates"]["desktopFullView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<div class=\"desktop-full-view\">\n    <div class=\"main-container\">\n        "
    + alias3((helpers.renderPartial || (depth0 && depth0.renderPartial) || alias2).call(alias1,"main-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\"icon close\"></div>\n        <div class=\"tooltip\">\n            <span class=\"text\"></span>\n            <span class=\"tooltip-icon\"></span>\n        </div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.main : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav main-container-prev\"></div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.main : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav main-container-next\"></div>\n    </div>\n    <div class=\"nav-container\">\n        "
    + alias3((helpers.renderPartial || (depth0 && depth0.renderPartial) || alias2).call(alias1,"nav-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav nav-container-prev\"></div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav nav-container-next\"></div>\n    </div>\n    <div class=\"panel\">\n        <div class=\"icon plus\"></div>\n        <div class=\"icon minus\"></div>\n    </div>\n</div>\n";
},"useData":true});

this["amp"]["templates"]["desktopNormalView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "amp-"
    + container.escapeExpression(((helper = (helper = helpers.view || (depth0 != null ? depth0.view : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"view","hash":{},"data":data}) : helper)))
    + "-view";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<div class=\"desktop-normal-view "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.view : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <div class=\"main-container\">\n        "
    + alias3((helpers.renderPartial || (depth0 && depth0.renderPartial) || alias2).call(alias1,"main-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\"tooltip\">\n            <span class=\"text\">Click to zoom</span>\n            <span class=\"tooltip-icon\"></span>\n        </div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.main : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav main-container-prev\"></div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.main : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav main-container-next\"></div>\n    </div>\n    <div class=\"nav-container\">\n        "
    + alias3((helpers.renderPartial || (depth0 && depth0.renderPartial) || alias2).call(alias1,"nav-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav nav-container-prev\"></div>\n        <div class=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav nav-container-next\"></div>\n    </div>\n</div>\n";
},"useData":true});

this["amp"]["templates"]["mobileNormalView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "mobile-"
    + container.escapeExpression(((helper = (helper = helpers.view || (depth0 != null ? depth0.view : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"view","hash":{},"data":data}) : helper)))
    + "-view";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <div>\n                    <div class=\"mobile-thumbnail\"></div>\n                </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression, alias3=container.lambda;

  return "<div class=\"mobile-normal-view "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.view : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <div class=\"main-container\">\n        "
    + alias2((helpers.renderPartial || (depth0 && depth0.renderPartial) || helpers.helperMissing).call(alias1,"main-container-list",{"name":"renderPartial","hash":{"locale":(depth0 != null ? depth0.locale : depth0),"templates":(depth0 != null ? depth0.templates : depth0),"items":(depth0 != null ? depth0.items : depth0)},"data":data}))
    + "\n        <div class=\"icon close\"></div>\n        <div class=\"tooltip\">\n            <span class=\"text\"></span>\n            <span class=\"tooltip-icon\"></span>\n        </div>\n    </div>\n    <div class=\"nav-container\">\n        <ul class=\"list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n        <div class=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.prev : stack1), depth0))
    + " amp-js-nav nav-container-prev\"></div>\n        <div class=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.templates : depth0)) != null ? stack1.navIcons : stack1)) != null ? stack1.nav : stack1)) != null ? stack1.next : stack1), depth0))
    + " amp-js-nav nav-container-next\"></div>\n    </div>\n</div>\n";
},"useData":true});
(function (global) {
    /* jshint -W097 */
    'use strict';

    Handlebars.registerHelper('renderPartial', function(partialName, options) {
        if (!partialName) {
            console.error('No partial name given.');
            return '';
        }
        var partial = Handlebars.partials[partialName];
        if (!partial) {
            console.error('Couldnt find the compiled partial: ' + partialName);
            return '';
        }
        return new Handlebars.SafeString( partial(options.hash) );
    });
    
}(window));
(function(e){Array.prototype.map||(Array.prototype.map=function(e,r){var a,o,i;if(null==this)throw new TypeError(" this is null or not defined");var n=Object(this),t=n.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(r&&(a=r),o=Array(t),i=0;t>i;){var l,d;i in n&&(l=n[i],d=e.call(a,l,i,n),o[i]=d),i++}return o});var r=e.detect=function(){var e=function(){},r={browser_parsers:[{regex:"^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii",family_replacement:"Wii",manufacturer:"Nintendo"},{regex:"(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",family_replacement:"Camino",other:!0},{regex:"(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?",family_replacement:"Pale Moon (Firefox Variant)",other:!0},{regex:"(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",family_replacement:"Firefox Mobile"},{regex:"(Fennec)/(\\d+)\\.(\\d+)(pre)",family_replacment:"Firefox Mobile"},{regex:"(Fennec)/(\\d+)\\.(\\d+)",family_replacement:"Firefox Mobile"},{regex:"Mobile.*(Firefox)/(\\d+)\\.(\\d+)",family_replacement:"Firefox Mobile"},{regex:"(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)",family_replacement:"Firefox ($1)"},{regex:"(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",family_replacement:"Firefox Alpha"},{regex:"(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",family_replacement:"Firefox Beta"},{regex:"(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",family_replacement:"Firefox Alpha"},{regex:"(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",family_replacement:"Firefox Beta"},{regex:"(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?",family_replacement:"Firefox ($1)"},{regex:"(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"MicroB",tablet:!0},{regex:"(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"},{regex:"(Flock)/(\\d+)\\.(\\d+)(b\\d+?)",family_replacement:"Flock",other:!0},{regex:"(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Rockmelt",other:!0},{regex:"(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Netscape"},{regex:"(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)",family_replacement:"Netscape"},{regex:"(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Netscape"},{regex:"(MyIBrow)/(\\d+)\\.(\\d+)",family_replacement:"My Internet Browser",other:!0},{regex:"(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",family_replacement:"Opera Tablet",tablet:!0},{regex:"(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",family_replacement:"Opera Mobile"},{regex:"Opera Mobi",family_replacement:"Opera Mobile"},{regex:"(Opera Mini)/(\\d+)\\.(\\d+)",family_replacement:"Opera Mini"},{regex:"(Opera Mini)/att/(\\d+)\\.(\\d+)",family_replacement:"Opera Mini"},{regex:"(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",family_replacement:"Opera"},{regex:"(OPR)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",family_replacement:"Opera"},{regex:"(webOSBrowser)/(\\d+)\\.(\\d+)",family_replacement:"webOS"},{regex:"(webOS)/(\\d+)\\.(\\d+)",family_replacement:"webOS"},{regex:"(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)",family_replacement:"webOS TouchPad"},{regex:"(luakit)",family_replacement:"LuaKit",other:!0},{regex:"(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)",family_replacement:"Lightning",other:!0},{regex:"(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)",family_replacement:"Swiftfox",other:!0},{regex:"(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)",family_replacement:"Swiftfox",other:!0},{regex:"rekonq",family_replacement:"Rekonq",other:!0},{regex:"(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?",family_replacement:"Conkeror",other:!0},{regex:"(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Konqueror",other:!0},{regex:"(WeTab)-Browser",family_replacement:"WeTab",other:!0},{regex:"(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Comodo Dragon",other:!0},{regex:"(YottaaMonitor)",family_replacement:"Yottaa Monitor",other:!0},{regex:"(Kindle)/(\\d+)\\.(\\d+)",family_replacement:"Kindle"},{regex:"(Symphony) (\\d+).(\\d+)",family_replacement:"Symphony",other:!0},{regex:"Minimo",family_replacement:"Minimo",other:!0},{regex:"(Edge)/(\\d+)\\.(\\d+)",family_replacement:"Edge"},{regex:"(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Chrome Mobile"},{regex:"(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Chrome Mobile iOS"},{regex:"(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile",family_replacement:"Chrome Mobile"},{regex:"(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Chrome Frame"},{regex:"(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"UC Browser",other:!0},{regex:"(SLP Browser)/(\\d+)\\.(\\d+)",family_replacement:"Tizen Browser",other:!0},{regex:"(Epiphany)/(\\d+)\\.(\\d+).(\\d+)",family_replacement:"Epiphany",other:!0},{regex:"(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)",family_replacement:"Sogou Explorer",other:!0},{regex:"(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)",family_replacement:"PingdomBot",other:!0},{regex:"(facebookexternalhit)/(\\d+)\\.(\\d+)",family_replacement:"FacebookBot"},{regex:"(Twitterbot)/(\\d+)\\.(\\d+)",family_replacement:"TwitterBot"},{regex:"(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)"},{regex:"(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris)/(\\d+)\\.(\\d+)"},{regex:"(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"},{regex:"(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?"},{regex:"(Android) Donut",v2_replacement:"2",v1_replacement:"1"},{regex:"(Android) Eclair",v2_replacement:"1",v1_replacement:"2"},{regex:"(Android) Froyo",v2_replacement:"2",v1_replacement:"2"},{regex:"(Android) Gingerbread",v2_replacement:"3",v1_replacement:"2"},{regex:"(Android) Honeycomb",v1_replacement:"3"},{regex:"(IEMobile)[ /](\\d+)\\.(\\d+)",family_replacement:"IE Mobile"},{regex:"(MSIE) (\\d+)\\.(\\d+).*XBLWP7",family_replacement:"IE Large Screen"},{regex:"(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"},{regex:"(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"},{regex:"(Obigo)InternetBrowser",other:!0},{regex:"(Obigo)\\-Browser",other:!0},{regex:"(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?",other:!0},{regex:"(MAXTHON|Maxthon) (\\d+)\\.(\\d+)",family_replacement:"Maxthon",other:!0},{regex:"(Maxthon|MyIE2|Uzbl|Shiira)",v1_replacement:"0",other:!0},{regex:"(PLAYSTATION) (\\d+)",family_replacement:"PlayStation",manufacturer:"Sony"},{regex:"(PlayStation Portable)[^\\d]+(\\d+).(\\d+)",manufacturer:"Sony"},{regex:"(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)",other:!0},{regex:"(POLARIS)/(\\d+)\\.(\\d+)",family_replacement:"Polaris",other:!0},{regex:"(Embider)/(\\d+)\\.(\\d+)",family_replacement:"Polaris",other:!0},{regex:"(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Bon Echo",other:!0},{regex:"(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPod).*Version/(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPod)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPhone).*Version/(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPhone)",family_replacement:"Mobile Safari",manufacturer:"Apple"},{regex:"(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",tablet:!0,manufacturer:"Apple"},{regex:"(iPad).*Version/(\\d+)\\.(\\d+)",family_replacement:"Mobile Safari",tablet:!0,manufacturer:"Apple"},{regex:"(iPad)",family_replacement:"Mobile Safari",tablet:!0,manufacturer:"Apple"},{regex:"(AvantGo) (\\d+).(\\d+)",other:!0},{regex:"(Avant)",v1_replacement:"1",other:!0},{regex:"^(Nokia)",family_replacement:"Nokia Services (WAP) Browser",manufacturer:"Nokia"},{regex:"(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)",manufacturer:"Nokia"},{regex:"(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)",manufacturer:"Nokia"},{regex:"(NokiaBrowser)/(\\d+)\\.(\\d+)",manufacturer:"Nokia"},{regex:"(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)",family_replacement:"NokiaBrowser",manufacturer:"Nokia"},{regex:"(Series60)/5\\.0",v2_replacement:"0",v1_replacement:"7",family_replacement:"NokiaBrowser",manufacturer:"Nokia"},{regex:"(Series60)/(\\d+)\\.(\\d+)",family_replacement:"Nokia OSS Browser",manufacturer:"Nokia"},{regex:"(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Nokia Series 40 Ovi Browser",manufacturer:"Nokia"},{regex:"(Nokia)[EN]?(\\d+)",manufacturer:"Nokia"},{regex:"(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Blackberry WebKit",tablet:!0,manufacturer:"Nokia"},{regex:"(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",family_replacement:"Blackberry WebKit",manufacturer:"RIM"},{regex:"(Black[bB]erry)\\s?(\\d+)",family_replacement:"Blackberry",manufacturer:"RIM"},{regex:"(OmniWeb)/v(\\d+)\\.(\\d+)",other:!0},{regex:"(Blazer)/(\\d+)\\.(\\d+)",family_replacement:"Palm Blazer",manufacturer:"Palm"},{regex:"(Pre)/(\\d+)\\.(\\d+)",family_replacement:"Palm Pre",manufacturer:"Palm"},{regex:"(Links) \\((\\d+)\\.(\\d+)",other:!0},{regex:"(QtWeb) Internet Browser/(\\d+)\\.(\\d+)",other:!0},{regex:"(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",other:!0,tablet:!0},{regex:"(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Version/\\d+\\.\\d+.\\d+ Safari/",family_replacement:"WebKit Nightly"},{regex:"(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/",family_replacement:"Safari"},{regex:"(Safari)/\\d+"},{regex:"(OLPC)/Update(\\d+)\\.(\\d+)",other:!0},{regex:"(OLPC)/Update()\\.(\\d+)",v1_replacement:"0",other:!0},{regex:"(SEMC\\-Browser)/(\\d+)\\.(\\d+)",other:!0},{regex:"(Teleca)",family_replacement:"Teleca Browser",other:!0},{regex:"Trident(.*)rv.(\\d+)\\.(\\d+)",family_replacement:"IE"},{regex:"(MSIE) (\\d+)\\.(\\d+)",family_replacement:"IE"}],os_parsers:[{regex:"(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"},{regex:"(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"},{regex:"(Android) Donut",os_v2_replacement:"2",os_v1_replacement:"1"},{regex:"(Android) Eclair",os_v2_replacement:"1",os_v1_replacement:"2"},{regex:"(Android) Froyo",os_v2_replacement:"2",os_v1_replacement:"2"},{regex:"(Android) Gingerbread",os_v2_replacement:"3",os_v1_replacement:"2"},{regex:"(Android) Honeycomb",os_v1_replacement:"3"},{regex:"(Silk-Accelerated=[a-z]{4,5})",os_replacement:"Android"},{regex:"(Windows Phone 6\\.5)"},{regex:"(Windows (?:NT 5\\.2|NT 5\\.1))",os_replacement:"Windows XP"},{regex:"(XBLWP7)",os_replacement:"Windows Phone OS"},{regex:"(Windows NT 6\\.1)",os_replacement:"Windows 7"},{regex:"(Windows NT 6\\.0)",os_replacement:"Windows Vista"},{regex:"(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)"},{regex:"(Windows NT 6\\.4|Windows NT 10\\.0)",os_replacement:"Windows 10"},{regex:"(Windows NT 6\\.2)",os_replacement:"Windows 8"},{regex:"(Windows Phone 8)",os_replacement:"Windows Phone 8"},{regex:"(Windows NT 5\\.0)",os_replacement:"Windows 2000"},{regex:"(Windows Phone OS) (\\d+)\\.(\\d+)"},{regex:"(Windows ?Mobile)",os_replacement:"Windows Mobile"},{regex:"(WinNT4.0)",os_replacement:"Windows NT 4.0"},{regex:"(Win98)",os_replacement:"Windows 98"},{regex:"(Tizen)/(\\d+)\\.(\\d+)",other:!0},{regex:"(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?",manufacturer:"Apple"},{regex:"(?:PPC|Intel) (Mac OS X)",manufacturer:"Apple"},{regex:"(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?",os_replacement:"iOS",manufacturer:"Apple"},{regex:"(iPhone|iPad|iPod); Opera",os_replacement:"iOS",manufacturer:"Apple"},{regex:"(iPad); Opera",tablet:!0,manufacturer:"Apple"},{regex:"(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",os_replacement:"iOS",manufacturer:"Apple"},{regex:"(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?",os_replacement:"Chrome OS"},{regex:"(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",other:!0},{regex:"(Linux Mint)(?:/(\\d+))?",other:!0},{regex:"(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",other:!0},{regex:"(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)",os_replacement:"Symbian OS"},{regex:"(Symbian/3).+NokiaBrowser/7\\.3",os_replacement:"Symbian^3 Anna"},{regex:"(Symbian/3).+NokiaBrowser/7\\.4",os_replacement:"Symbian^3 Belle"},{regex:"(Symbian/3)",os_replacement:"Symbian^3"},{regex:"(Series 60|SymbOS|S60)",os_replacement:"Symbian OS"},{regex:"(MeeGo)",other:!0},{regex:"Symbian [Oo][Ss]",os_replacement:"Symbian OS"},{regex:"(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",os_replacement:"BlackBerry OS",manufacturer:"RIM"},{regex:"(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",os_replacement:"BlackBerry OS",manufacturer:"RIM"},{regex:"(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)",os_replacement:"BlackBerry Tablet OS",tablet:!0,manufacturer:"RIM"},{regex:"(Play[Bb]ook)",os_replacement:"BlackBerry Tablet OS",tablet:!0,manufacturer:"RIM"},{regex:"(Black[Bb]erry)",os_replacement:"Blackberry OS",manufacturer:"RIM"},{regex:"(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",os_replacement:"webOS"},{regex:"(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",other:!0},{regex:"(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)",other:!0},{regex:"(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"},{regex:"(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)"},{regex:"(Linux|BSD)",other:!0}],mobile_os_families:["Windows Phone 6.5","Windows CE","Symbian OS"],device_parsers:[{regex:"HTC ([A-Z][a-z0-9]+) Build",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC_Touch_([A-Za-z0-9]+)",device_replacement:"HTC Touch ($1)",manufacturer:"HTC"},{regex:"USCCHTC(\\d+)",device_replacement:"HTC $1 (US Cellular)",manufacturer:"HTC"},{regex:"Sprint APA(9292)",device_replacement:"HTC $1 (Sprint)",manufacturer:"HTC"},{regex:"HTC ([A-Za-z0-9]+ [A-Z])",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC-([A-Za-z0-9]+)",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC_([A-Za-z0-9]+)",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"HTC ([A-Za-z0-9]+)",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"(ADR[A-Za-z0-9]+)",device_replacement:"HTC $1",manufacturer:"HTC"},{regex:"(HTC)",manufacturer:"HTC"},{regex:"SonyEricsson([A-Za-z0-9]+)/",device_replacement:"Ericsson $1",other:!0,manufacturer:"Sony"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"},{regex:"Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"},{regex:"NokiaN([0-9]+)",device_replacement:"Nokia N$1",manufacturer:"Nokia"},{regex:"Nokia([A-Za-z0-9\\v-]+)",device_replacement:"Nokia $1",manufacturer:"Nokia"},{regex:"NOKIA ([A-Za-z0-9\\-]+)",device_replacement:"Nokia $1",manufacturer:"Nokia"},{regex:"Nokia ([A-Za-z0-9\\-]+)",device_replacement:"Nokia $1",manufacturer:"Nokia"},{regex:"Lumia ([A-Za-z0-9\\-]+)",device_replacement:"Lumia $1",manufacturer:"Nokia"},{regex:"Symbian",device_replacement:"Nokia",manufacturer:"Nokia"},{regex:"(PlayBook).+RIM Tablet OS",device_replacement:"Blackberry Playbook",tablet:!0,manufacturer:"RIM"},{regex:"(Black[Bb]erry [0-9]+);",manufacturer:"RIM"},{regex:"Black[Bb]erry([0-9]+)",device_replacement:"BlackBerry $1",manufacturer:"RIM"},{regex:"(Pre)/(\\d+)\\.(\\d+)",device_replacement:"Palm Pre",manufacturer:"Palm"},{regex:"(Pixi)/(\\d+)\\.(\\d+)",device_replacement:"Palm Pixi",manufacturer:"Palm"},{regex:"(Touchpad)/(\\d+)\\.(\\d+)",device_replacement:"HP Touchpad",manufacturer:"HP"},{regex:"HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)",device_replacement:"HP iPAQ $1",manufacturer:"HP"},{regex:"Palm([A-Za-z0-9]+)",device_replacement:"Palm $1",manufacturer:"Palm"},{regex:"Treo([A-Za-z0-9]+)",device_replacement:"Palm Treo $1",manufacturer:"Palm"},{regex:"webOS.*(P160UNA)/(\\d+).(\\d+)",device_replacement:"HP Veer",manufacturer:"HP"},{regex:"(Kindle Fire)",manufacturer:"Amazon"},{regex:"(Kindle)",manufacturer:"Amazon"},{regex:"(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",device_replacement:"Kindle Fire",tablet:!0,manufacturer:"Amazon"},{regex:"(iPad) Simulator;",manufacturer:"Apple"},{regex:"(iPad);",manufacturer:"Apple"},{regex:"(iPod);",manufacturer:"Apple"},{regex:"(iPhone) Simulator;",manufacturer:"Apple"},{regex:"(iPhone);",manufacturer:"Apple"},{regex:"Nexus\\ ([A-Za-z0-9\\-]+)",device_replacement:"Nexus $1"},{regex:"acer_([A-Za-z0-9]+)_",device_replacement:"Acer $1",manufacturer:"Acer"},{regex:"acer_([A-Za-z0-9]+)_",device_replacement:"Acer $1",manufacturer:"Acer"},{regex:"Amoi\\-([A-Za-z0-9]+)",device_replacement:"Amoi $1",other:!0,manufacturer:"Amoi"},{regex:"AMOI\\-([A-Za-z0-9]+)",device_replacement:"Amoi $1",other:!0,manufacturer:"Amoi"},{regex:"Asus\\-([A-Za-z0-9]+)",device_replacement:"Asus $1",manufacturer:"Asus"},{regex:"ASUS\\-([A-Za-z0-9]+)",device_replacement:"Asus $1",manufacturer:"Asus"},{regex:"BIRD\\-([A-Za-z0-9]+)",device_replacement:"Bird $1",other:!0},{regex:"BIRD\\.([A-Za-z0-9]+)",device_replacement:"Bird $1",other:!0},{regex:"BIRD ([A-Za-z0-9]+)",device_replacement:"Bird $1",other:!0},{regex:"Dell ([A-Za-z0-9]+)",device_replacement:"Dell $1",manufacturer:"Dell"},{regex:"DoCoMo/2\\.0 ([A-Za-z0-9]+)",device_replacement:"DoCoMo $1",other:!0},{regex:"([A-Za-z0-9]+)\\_W\\;FOMA",device_replacement:"DoCoMo $1",other:!0},{regex:"([A-Za-z0-9]+)\\;FOMA",device_replacement:"DoCoMo $1",other:!0},{regex:"vodafone([A-Za-z0-9]+)",device_replacement:"Huawei Vodafone $1",other:!0},{regex:"i\\-mate ([A-Za-z0-9]+)",device_replacement:"i-mate $1",other:!0},{regex:"Kyocera\\-([A-Za-z0-9]+)",device_replacement:"Kyocera $1",other:!0},{regex:"KWC\\-([A-Za-z0-9]+)",device_replacement:"Kyocera $1",other:!0},{regex:"Lenovo\\-([A-Za-z0-9]+)",device_replacement:"Lenovo $1",manufacturer:"Lenovo"},{regex:"Lenovo\\_([A-Za-z0-9]+)",device_replacement:"Lenovo $1",manufacturer:"Levovo"},{regex:"LG/([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LG-LG([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LGE-LG([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LGE VX([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LG ([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LGE LG\\-AX([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LG\\-([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LGE\\-([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"LG([A-Za-z0-9]+)",device_replacement:"LG $1",manufacturer:"LG"},{regex:"(KIN)\\.One (\\d+)\\.(\\d+)",device_replacement:"Microsoft $1"},{regex:"(KIN)\\.Two (\\d+)\\.(\\d+)",device_replacement:"Microsoft $1"},{regex:"(Motorola)\\-([A-Za-z0-9]+)",manufacturer:"Motorola"},{regex:"MOTO\\-([A-Za-z0-9]+)",device_replacement:"Motorola $1",manufacturer:"Motorola"},{regex:"MOT\\-([A-Za-z0-9]+)",device_replacement:"Motorola $1",manufacturer:"Motorola"},{regex:"Philips([A-Za-z0-9]+)",device_replacement:"Philips $1",manufacturer:"Philips"},{regex:"Philips ([A-Za-z0-9]+)",device_replacement:"Philips $1",manufacturer:"Philips"},{regex:"SAMSUNG-([A-Za-z0-9\\-]+)",device_replacement:"Samsung $1",manufacturer:"Samsung"},{regex:"SAMSUNG\\; ([A-Za-z0-9\\-]+)",device_replacement:"Samsung $1",manufacturer:"Samsung"},{regex:"Softbank/1\\.0/([A-Za-z0-9]+)",device_replacement:"Softbank $1",other:!0},{regex:"Softbank/2\\.0/([A-Za-z0-9]+)",device_replacement:"Softbank $1",other:!0},{regex:"(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)",device_replacement:"Generic Smartphone"},{regex:"^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly\\_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)",device_replacement:"Generic Feature Phone"},{regex:"^(htcp|htcs|htct|htc\\_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)",device_replacement:"Generic Feature Phone"},{regex:"^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)",device_replacement:"Generic Feature Phone"},{regex:"^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda\\_)",device_replacement:"Generic Feature Phone"},{regex:"(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)",device_replacement:"Spider"}],mobile_browser_families:["Firefox Mobile","Opera Mobile","Opera Mini","Mobile Safari","webOS","IE Mobile","Playstation Portable","Nokia","Blackberry","Palm","Silk","Android","Maemo","Obigo","Netfront","AvantGo","Teleca","SEMC-Browser","Bolt","Iris","UP.Browser","Symphony","Minimo","Bunjaloo","Jasmine","Dolfin","Polaris","BREW","Chrome Mobile","Chrome Mobile iOS","UC Browser","Tizen Browser"]};e.parsers=["device_parsers","browser_parsers","os_parsers","mobile_os_families","mobile_browser_families"],e.types=["browser","os","device"],e.regexes=r||function(){var r={};return e.parsers.map(function(e){r[e]=[]}),r}(),e.families=function(){var r={};return e.types.map(function(e){r[e]=[]}),r}();var a=Array.prototype,o=(Object.prototype,Function.prototype,a.forEach);a.indexOf;var i=function(e,r){for(var a={},o=0;r.length>o&&!(a=r[o](e));o++);return a},n=function(e,r){t(e,function(e){t(r,function(r){delete e[r]})})},t=forEach=function(e,r,a){if(null!=e)if(o&&e.forEach===o)e.forEach(r,a);else if(e.length===+e.length)for(var i=0,n=e.length;n>i;i++)r.call(a,e[i],i,e);else for(var t in e)_.has(e,t)&&r.call(a,e[t],t,e)},l=function(e){return!(!e||e===undefined||null==e)},d=function(e){var r="";return e=e||{},l(e)&&l(e.major)&&(r+=e.major,l(e.minor)&&(r+="."+e.minor,l(e.patch)&&(r+="."+e.patch))),r},c=function(e){e=e||{};var r=d(e);return r&&(r=" "+r),e&&l(e.family)?e.family+r:""};return e.parse=function(r){var a=function(r){return e.regexes[r+"_parsers"].map(function(e){function a(r){var a=r.match(o);if(!a)return null;var t={};return t.family=(i?i.replace("$1",a[1]):a[1])||"other",t.major=parseInt(n?n:a[2])||null,t.minor=a[3]?parseInt(a[3]):null,t.patch=a[4]?parseInt(a[4]):null,t.tablet=e.tablet,t.man=e.manufacturer||null,t}var o=RegExp(e.regex),i=e[("browser"===r?"family":r)+"_replacement"],n=e.major_version_replacement;return a})},o=function(){},t=a("browser"),m=a("os"),p=a("device"),s=new o;s.source=r,s.browser=i(r,t),l(s.browser)?(s.browser.name=c(s.browser),s.browser.version=d(s.browser)):s.browser={},s.os=i(r,m),l(s.os)?(s.os.name=c(s.os),s.os.version=d(s.os)):s.os={},s.device=i(r,p),l(s.device)?(s.device.name=c(s.device),s.device.version=d(s.device)):s.device={tablet:!1,family:"Other"};var g={};return e.regexes.mobile_browser_families.map(function(e){g[e]=!0}),e.regexes.mobile_os_families.map(function(e){g[e]=!0}),s.device.type="Spider"===s.browser.family?"Spider":s.browser.tablet||s.os.tablet||s.device.tablet?"Tablet":g.hasOwnProperty(s.browser.family)?"Mobile":"Desktop",s.device.manufacturer=s.browser.man||s.os.man||s.device.man||null,n([s.browser,s.os,s.device],["tablet","man"]),s},e}();"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=r),exports.detect=r):e.detect=r,"function"==typeof define&&define.amd&&define(function(){return r})})(window);
(function () {
    'use strict';
    var addConfig = function (target, name, value) {
        if (!target.hasOwnProperty(name)) {
            target[name] = value;
        }

        else {
            console.warn('Property already exist');
        }
    };

    amp.viewerSettings = {
        viewerConfigs: {
            v:'1.1.3',
            target: '#amp-container',
            client: 'playground',
            imageBasePath: '//i1.adis.ws/',
            errImg: '404',
            errCallback: function () {
            },
            cacheControl: 1,
            cacheWindow: 315569259747,
            fullNavHeight: 100,
            templates: {
                thumb: 'w=85&h=85&qlt=70',
                desktop: {
                    main: 'w=1000&h=1000',
                    mainRetina: 'w=2000&h=2000'
                },
                desktopFull: {
                    main: 'w=1000',
                    mainRetina: 'w=2000'
                },
                mobile: {
                    main: 'w=500&h=500',
                    mainRetina: 'w=1000&h=1000'
                }
            },
            tooltips: {
                offsets: {
                    left: -102,
                    top:  -39
                },
                displayTime: 3000,
                desktop: {
                    image: {
                        noTouch: {
                            text: 'Click to zoom'
                        },
                        touch: {
                            text: 'Tap to zoom'
                        },
                        doubleTouch: {
                            text: 'Double tap to zoom'
                        }
                    },
                    spin: {
                        noTouch: {
                            text: 'Drag to rotate'
                        },
                        touch: {
                            text: 'Tap to rotate'
                        },
                        doubleTouch: {
                            text: 'Double tap to rotate'
                        }

                    },
                    video: {
                        play: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        },
                        pause: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        }
                    }
                },
                desktopFull: {
                    image: {
                        noTouch: {
                            text: 'Click to zoom'
                        },
                        touch: {
                            text: 'Tap to zoom'
                        },
                        doubleTouch: {
                            text: 'Double tap to zoom'
                        }
                    },
                    spin: {
                        noTouch: {
                            text: 'Drag to rotate'
                        },
                        touch: {
                            text: 'Tap to rotate'
                        },
                        doubleTouch: {
                            text: 'Double tap to rotate'
                        }

                    },
                    video: {
                        play: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        },
                        pause: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        }
                    }
                },
                mobile: {
                    image: {
                        noTouch: {
                            text: 'Click to zoom'
                        },
                        touch: {
                            text: 'Tap to zoom'
                        },
                        doubleTouch: {
                            text: 'Double tap to zoom'
                        }
                    },
                    spin: {
                        noTouch: {
                            text: 'Drag to rotate'
                        },
                        touch: {
                            text: 'Tap to rotate'
                        },
                        doubleTouch: {
                            text: 'Double tap to rotate'
                        }

                    },
                    video: {
                        play: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        },
                        pause: {
                            noTouch:{
                                text: ''
                            },
                            touch:{
                                text: ''
                            }
                        }
                    }
                }
            },
            navIconsMain: {
                next: 'icon icon-right bla-main-next',
                prev: 'icon icon-left bla-main-prev'
            },
            navIconsNav: {
                next: 'icon icon-right bla-nav-next',
                prev: 'icon icon-left bla-nav-prev'
            },
            navIconsPortraitNav: {
                next: 'icon icon-right bla-portrait-next',
                prev: 'icon icon-left bla-portrait-prev'
            },
            zoomInlineDoubleTap: true,
            doubleTapTime: 250,
            ampConfigs: {
                navElementsWidthPx: 100,
                navElementsWidthPxMobile: 50,
                navElementsCount: {
                    forDesktop: 5,
                    forDesktopFull: 4
                },
                mainContainerCarousel: {
                    width: 1,
                    height: 1,
                    responsive: true,
                    start: 1,
                    loop: false,
                    dir: 'horz',
                    autoplay: false,
                    gesture: {
                        enabled: true,
                        fingers: 1,
                        dir: 'horz',
                        distance: 100
                    },
                    animDuration: 200,
                    layout: 'standard',
                    onActivate: {
                        select: true,
                        goTo: true
                    },
                    animate: true,
                    easing: 'linear',
                    preferForward: true,
                    preloadNext: true

                },
                mainContainerNav: {
                    on: 'goTo',
                    action: 'select',
                    selector: '.nav-container .list'
                },
                mainContainerSpin: {
                    width: 1,
                    height: 1,
                    responsive: true,
                    delay: 100,
                    autoplay: false,
                    gesture: {
                        enabled: true,
                        fingers: 1
                    },
                    loop: true,
                    start: 1,
                    momentum: true,
                    minDistance: 50,
                    friction: 0.97,
                    dragDistance: 200,
                    preload: 'created',
                    preloadType: 'full',
                    activate: 'down',
                    dir: 'normal',
                    cursor: {
                        active: 'pointer',
                        inactive: 'pointer'
                    },
                    play: {
                        onLoad: true,
                        onVisible: true,
                        repeat: 1,
                        delay: 600
                    },
                    lazyLoad: false,
                    orientation: 'horz'
                },
                mainContainerSpin3d: {
                    loop:false,
                    dragDistance: 200,
                    orientation: 'vert',
                    preload:'created',
                    preloadType: 'window',
                    width: 1,
                    height: 1,
                    gesture: {
                        enabled: true,
                        fingers: 1
                    }
                },
                mainContainerVideo: {
                    preload:"none",
                    width: 1,
                    height: 1,
                    center: true,
                    responsive: true,
                    autoplay: false,
                    loop: false,
                    muted: false,
                    controls: true,
                    pauseOnHide: true,
                    nativeControlsForTouch: false,
                    "plugins": {
                        "videoJsResolutionSwitcher": {
                            "default": "Medium"
                        }
                    }
                },
                mainContainerZoomInline: {
                    transforms: [],
                    scaleMax: 3,
                    scaleStep:0.5,
                    scaleSteps: true,
                    pinch: true,
                    pan: true,
                    events: {
                        zoomIn: '',
                        zoomOut: '',
                        move: ''
                    },
                    activation: {
                        inGesture: true
                    },
                    preload: false,
                    preventVisibleZoomOut: true
                },
                navContainerCarousel: {
                    height: 1,
                    responsive: true,
                    start: 1,
                    loop: false,
                    dir: 'horz',
                    autoplay: false,
                    gesture: {
                        enabled: true,
                        fingers: 1,
                        dir: 'horz',
                        distance: 50
                    },
                    animDuration: 200,
                    layout: 'standard',
                    onActivate: {
                        select: true,
                        goTo: false
                    },
                    animate: true,
                    easing: 'linear',
                    preferForward: true,
                    preloadNext: true
                },
                navContainerNav: {
                    on: 'select',
                    action: 'select',
                    selector: '.main-container .list'
                },
                image: {
                    preload: 'created',
                    insertAfter: false,
                    errImg: null
                }
            }
        },
        portraitConfigs: function () {
            var self = this;
            addConfig(self.viewerConfigs.ampConfigs, 'navContainerCarouselPortrait', {
                height: '100%',
                responsive: true,
                start: 1,
                loop: false,
                dir: 'vert',
                autoplay: false,
                gesture: {
                    enabled: true,
                    fingers: 1,
                    dir: 'vert',
                    distance: 50
                },
                animDuration: 500,
                layout: 'standard',
                onActivate: {
                    select: true,
                    goTo: false
                },
                animate: true,
                easing: 'linear',
                preferForward: true,
                preloadNext: true
            });

            addConfig(self.viewerConfigs.ampConfigs, 'mainContainerSpinPortrait', {
                height: '100%',
                responsive: true,
                delay: 100,
                autoplay: false,
                gesture: {
                    enabled: true,
                    fingers: 1
                },
                loop: true,
                start: 1,
                momentum: true,
                minDistance: 50,
                friction: 0.97,
                dragDistance: 200,
                preload: 'created',
                preloadType: 'full',
                activate: 'down',
                dir: 'normal',
                cursor: {
                    active: 'pointer',
                    inactive: 'pointer'
                },
                play: {
                    onLoad: true,
                    onVisible: true,
                    repeat: 1
                },
                lazyLoad: false,
                orientation: 'horz'
            });

            addConfig(self.viewerConfigs.ampConfigs, 'mainContainerVideoPortrait', {
                preload: 'none',
                height: '100%',
                responsive: true,
                autoplay: false,
                loop: false,
                muted: false,
                controls: true,
                pauseOnHide: true,
                nativeControlsForTouch: true,
                plugins: {
                    videoJsResolutionSwitcher : true
                }
            });
        },
        overwritePortraitSettings: function (settings) {
            var self = this;
            settings.ampConfigs.mainContainerCarousel.width = 0.8;
            settings.ampConfigs.mainContainerCarousel.height = 1.2;
            settings.templates = {
                thumb: 'w=85&h=85&qlt=70',
                thumbPortrait: 'w=67&h=89&qlt=100',
                desktop: {
                    main: 'w=1010&h=1416',
                    mainRetina: 'w=2020&h=2832'
                },
                desktopFull: {
                    main: 'w=1010&h=1416',
                    mainRetina: 'w=2020&h=2832'
                },
                mobile: {
                    main: 'w=505&h=708',
                    mainRetina: 'w=1010&h=1416'
                }
            };
        }
    };

}());


(function (global, $) {
    'use strict';
    var PLAYER_NAME = 'Amplience Viewer';

    var Viewer = function (settings) {
        var self = this;

        var defaultSettings = amp.viewerSettings.viewerConfigs;

        if (settings.view === 'portrait') {

            amp.viewerSettings.overwritePortraitSettings(defaultSettings);
            //assign portrait settings
            amp.viewerSettings.portraitConfigs();
            self.isPortraitView = true;
        }

        else if (settings.view === 'landscape') {
            self.isLandscapeView = true;
        }

        else {
            self.isSquareView = true;
        }

        self.settings = $.extend(true, {}, defaultSettings, settings);

        if (self.settings.locale && self.settings.locale.length > 0) {
            self.settings.ampConfigs.mainContainerZoomInline.transforms.push('locale=' + self.settings.locale);
        }

        if (self.settings.ampConfigs.mainContainerCarousel.loop) {
            self.settings.ampConfigs.navContainerCarousel.loop = true;
            if(self.isPortraitView){
                self.settings.ampConfigs.navContainerCarouselPortrait.loop = true;
            }
        }

        self.views = {
            desktopNormalView: 'desktopNormalView',
            desktopFullView: 'desktopFullView',
            mobileNormalView: 'mobileNormalView'
        };
        self.assets = [];
        self.currentAssetIndex = 0;
        self.navCurrentAssetIndex = 0;
        self.canTouch = !!(('ontouchstart' in window) ||
        window.DocumentTouch && document instanceof window.DocumentTouch);
        self.wrapper = $('<div class="amp-viewer-kit"></div>');
        self.deviceWidth = global.innerWidth;

        self.controller();
        self.tags = [];
        self.IE = self.isIE();
    };

    Viewer.prototype.controller = function () {
        var self = this;
        amp.init({
            'client_id': self.settings.client,
            'di_basepath': self.settings.imageBasePath,
            'cache_window': self.settings.cacheWindow
        });

        //init ecommBridge

        if (window.ecommBridge && self.settings.ecommBridge) {
            this.bridgeConnector.initAll();
        }

        self.applyImgTemplates();

        var target = $(self.settings.target);
        target.append(self.wrapper);

        var setInfo = self.initSetData();

        self.getSet(setInfo)
            .then(function (result) {
                self.assets = result;
                self.renderInitialView();
            })
            .catch(function (error) {
                console.warn(error, PLAYER_NAME + ' unable to get set list.');
            });
    };

    Viewer.prototype.initSetData = function () {
        var self = this;
        var page = self.bridgeConnector.page;
        //Check if bridge page exists, and assign its settings instead of defaults
        if (page !== null && self.settings.ecommBridge) {
            if (page.mediaList && page.mediaList.constructor === Array && page.mediaList.length > 0) {
                return self.returnSetData(page.mediaList);
            } else if (page.mediaSet && typeof page.mediaSet === 'string' && page.mediaSet.length > 0) {
                return self.returnSetData(page.mediaSet);
            }
        } else {
            return self.returnSetData(self.settings.set);
        }
    };

    Viewer.prototype.returnSetData = function (data) {
        var self = this;
        var transform = '&v=' + self.settings.cacheControl;
        if (data.constructor === Array) {
            self.bridgeConnector.enrichMediaListWithParams(data, {
                transform: transform
            });
            return data;
        } else {
            return {
                name: data,
                type: 's',
                transform: transform
            };
        }
    };

    Viewer.prototype.secureData = function (data) {
        var self = this;
        if (self.settings.secure) {
            var strData = JSON.stringify(data);
            strData = strData.replace(/http:\/\//g, 'https://');
            data = JSON.parse(strData);
        }
        return data;
    };

    Viewer.prototype.getSet = function (setInfo) {
        /*
         @setInfo Object | Array
         if ecommBridge holds List info about assets, then it will be array, otherwise object
         */

        var self = this;

        return new Promise(function (resolve, reject) {
            amp.get(setInfo,
                function (data) {
                    var items = null;
                    if (setInfo.constructor === Array) {
                        items = self.bridgeConnector.convertListToSet(setInfo, data).items;
                    } else {
                        items = data[setInfo.name].items;
                    }
                    resolve(items);
                },
                function () {
                    self.getImage(self.settings.errImg)
                        .then(function (result) {
                            self.settings.errCallback.call(self);
                            resolve([{
                                src: result.url
                            }]);
                        });
                },
                false,
                false,
                self.secureData.bind(self)
            );
        });
    };

    Viewer.prototype.getImage = function (imageName) {
        var self = this;
        return new Promise(function (resolve, reject) {
            amp.get({
                    name: imageName,
                    type: 'i',
                    transform: '&v=' + self.settings.cacheControl
                },
                function (data) {
                    resolve(data[imageName]);
                },
                function () {
                    resolve({
                        url: '//i1.adis.ws/i/playground/404'
                    });
                },
                false,
                false,
                self.secureData.bind(self)
            );
        });
    };

    Viewer.prototype.changeSet = function (setInfo) {
        /*
         @setInfo Array | String
         if setInfo is Array, assume that ecommBridge is used
         */
        var self = this;

        if (self.bridgeConnector.page !== null && self.settings.ecommBridge) {
            if (setInfo.constructor === Array && setInfo.length > 0) {
                self.bridgeConnector.page.mediaList = setInfo;
            } else if (typeof setInfo === 'string' && setInfo.length > 0) {
                self.bridgeConnector.page.mediaset = setInfo;
                self.bridgeConnector.page.mediaList = null;
            }
        } else {
            self.settings.set = setInfo;
        }

        var setData = self.returnSetData(setInfo);

        self.getSet(setData)
            .then(function (result) {
                self.assets = result;
                self.currentAssetIndex = 0;
                self.renderInitialView();
            })
            .catch(function (error) {
                console.warn(error, PLAYER_NAME + ' unable to get set list.');
            });
    };

    Viewer.prototype.isIE = function () {
        if (/MSIE [0-9]{1,}/.test(navigator.userAgent)) {
            return true;
        } else if (/Trident\/\d./i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    }

    Viewer.prototype.isMobile = function () {
        var self = this;
        if (self.settings.isMobile) {
            return true;
        }
        return global.innerWidth <= 768;
    };

    Viewer.prototype.renderInitialView = function () {
        var self = this;
        self.currentView = self.isMobile() ? self.views.mobileNormalView : self.views.desktopNormalView;
        self.renderView(self.currentView);
    };

    Viewer.prototype.renderView = function (view, spinManipulate) {
        var self = this;
        var spinManipulate = spinManipulate || false;
        self.destroyAmpWidgets();

        switch (view) {
            case self.views.desktopNormalView:
                self.renderDesktopNormalView();
                break;
            case self.views.desktopFullView:
                self.renderDesktopFullView();
                break;
            case self.views.mobileNormalView:
                self.renderMobileNormalView();
                break;
            default:
                console.warn(PLAYER_NAME + ': Unknown view: ' + view + '. Viewer desktopNormalView.');
                self.renderDesktopNormalView();
                break;
        }

        if (view === self.views.desktopFullView) {
            this._scrollPosition = $(window).scrollTop();
            $('html, body').addClass('amp-no-scroll');
        }
        else {
            $('html, body').removeClass('amp-no-scroll');
            $(window).scrollTop(this._scrollPosition)
        }

        self.mainContainerList = self.wrapper.find('.main-container .list');
        self.navContainerList = self.wrapper.find('.nav-container .list');
        self.tooltip = self.wrapper.find('.main-container .tooltip');
        self.tooltipText = self.tooltip.find('span.text');

        self.bindGenericEvents();
        self.bindAmpEvents();
        self.bindNavigationEvents();
        self.bindSpinEvents();

        self.initImagesSrcset();
        self.initAmpWidgets(spinManipulate);

        self.applyNavigationStyles();

        self.checkMainContainerNavArrows();
        self.checkNavContainerNavArrows();
        self.checkZoomIcons();
        self.checkMainContainerSlidesVisibility();

        switch (view) {
            case self.views.desktopNormalView:
                self.bindDesktopNormalViewEvents();
                break;
            case self.views.desktopFullView:
                self.bindDesktopFullViewEvents();
                break;
            case self.views.mobileNormalView:
                self.bindMobileNormalViewEvents();
                break;
        }

        if (self.settings.initCallback) {
            self.settings.initCallback.apply(self);
        }
    };

    Viewer.prototype.getTemplateData = function (firstLocaleParam) {
        var self = this;
        var data = {
            items: self.assets,
            templates: self.getTemplates(),
            locale: {
                first: '',
                second: ''
            },
            view: ''
        };

        if (self.settings.locale && $.trim(self.settings.locale).length > 0) {
            var base = 'locale=' + self.settings.locale;
            data.locale.first = '?' + base;
            data.locale.second = '&' + base;
        }

        if (self.settings.view && self.settings.view.length > 0) {
            data.view = self.settings.view;
        }

        return data;
    };

    Viewer.prototype.renderDesktopNormalView = function () {
        var self = this;
        self.currentView = self.views.desktopNormalView;
        self.wrapper.html(amp.templates.desktopNormalView(self.getTemplateData()));
    };

    Viewer.prototype.renderDesktopFullView = function () {
        var self = this;
        self.currentView = self.views.desktopFullView;
        self.wrapper.html(amp.templates.desktopFullView(self.getTemplateData()));
    };

    Viewer.prototype.renderMobileNormalView = function () {
        var self = this;
        self.currentView = self.views.mobileNormalView;
        self.wrapper.html(amp.templates.mobileNormalView(self.getTemplateData()));
    };

    Viewer.prototype.applyImgTemplates = function () {
        var self = this;
        var errImgTransform = '&img404=' + self.settings.errImg + '&v=' + self.settings.cacheControl;
        var iterate = function (obj, callback) {
            $.each(obj, function (key, val) {
                if ($.type(val) === 'string') {
                    callback(obj, key);
                }
                else {
                    iterate(val, callback);
                }
            });
        };

        iterate(self.settings.templates, function (obj, key) {
            obj[key] += errImgTransform;
        });
    };

    Viewer.prototype.getTemplates = function () {
        var self = this;
        var thumbTemplate = self.settings.templates.thumb;
        var isPortrait = self.isPortraitView && self.currentView === self.views.desktopNormalView;

        if (isPortrait) {
            thumbTemplate = self.settings.templates.thumbPortrait;
        }

        var tts = {
            thumb: thumbTemplate,
            navIcons: {
                nav: isPortrait ? self.settings.navIconsPortraitNav : self.settings.navIconsNav,
                main: self.settings.navIconsMain
            }
        };

        switch (self.currentView) {
            case self.views.desktopNormalView:
                tts.main = self.settings.templates.desktop.main;
                tts.mainRetina = self.settings.templates.desktop.mainRetina;
                tts.zoom = self.settings.templates.desktop.zoom;
                break;
            case self.views.desktopFullView:
                tts.main = self.settings.templates.desktopFull.main;
                tts.mainRetina = self.settings.templates.desktopFull.mainRetina;
                tts.zoom = self.settings.templates.desktopFull.zoom;
                break;
            case self.views.mobileNormalView:
                tts.main = self.settings.templates.mobile.main;
                tts.mainRetina = self.settings.templates.mobile.mainRetina;
                tts.zoom = self.settings.templates.mobile.zoom;
                break;
        }

        return tts;
    };

    Viewer.prototype.initImagesSrcset = function () {
        var self = this;
    };

    Viewer.prototype.initAmpWidgets = function (spinManipulate) {
        var self = this;
        var ampConfigs = self.getAmpConfigs();

        var navSettings = ampConfigs.navContainerCarousel;

        if (self.settings.view && self.isPortraitView && self.currentView === 'desktopNormalView') {
            navSettings = ampConfigs.navContainerCarouselPortrait;
        }

        self.wrapper.find('[data-amp-src]').ampImage(ampConfigs.image);

        self.mainContainerList.ampCarousel(ampConfigs.mainContainerCarousel);
        self.mainContainerList.ampNav(ampConfigs.mainContainerNav);

        self.navContainerList.ampCarousel(navSettings);
        self.navContainerList.ampNav(ampConfigs.navContainerNav);

        var carouselData = self.mainContainerList.data()['amp-ampCarousel'] || self.mainContainerList.data()['ampAmpCarousel'];

        self.mainContainerList.on('touchstart', function(){
            carouselData.preventStop = false;
        });

        self.navContainerList.find('.amp-slide').on('touchstart', function(){
            carouselData.preventStop = true;
        });

        for (var i = 0; i < self.assets.length; i++) {
            var asset = self.assets[i];

            if (asset.hasOwnProperty('set')) {
                var spinSettings = ampConfigs.mainContainerSpin;
                if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
                    spinSettings = ampConfigs.mainContainerSpinPortrait;
                }

                var $spin = $('#' + asset.name);
                var $spin3d = $spin.find('.amp-inner-spinset');

                if ($spin3d.length > 0) {
                    $spin.ampSpin(ampConfigs.mainContainerSpin3d);
                    $spin3d.each(function (i) {
                        var spinConfig = $.extend(true, {}, ampConfigs.mainContainerSpin, {
                            play: {
                                onVisible: false,
                                onLoad: false
                            },
                            preloadType: 'window'
                        });
                        $(this).ampSpin(spinConfig);
                    });
                }

                else {
                    var mainContainerSpin = ampConfigs.mainContainerSpin;
                    if(mainContainerSpin.play.onVisible == true){
                        self.spinVisible = true;
                        mainContainerSpin.play.onVisible = false;
                    }
                    $spin.ampSpin(mainContainerSpin);
                }
            } else if (asset.hasOwnProperty('media')) {
                var videoSettings = ampConfigs.mainContainerVideo;
                if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
                    videoSettings = ampConfigs.mainContainerVideoPortrait;
                    videoSettings.nativeControlsForTouch = false;
                }

                if(self.IE && videoSettings.preload ==='none'){
                    delete videoSettings.preload;
                }

                var $videoTag = self.mainContainerList.find('#' + asset.name).ampVideo(videoSettings);

                $videoTag.find('video').on('touchstart', function () {
                    var state = $videoTag.ampVideo('state');
                    if (state == 2) {
                        $videoTag.ampVideo('play');
                    }
                    else {
                        $videoTag.ampVideo('pause');
                    }
                });

                self.tags.push({
                    alias: 'videoContainer',
                    $tag: $videoTag
                });

            } else if (self.currentView !== self.views.desktopNormalView) {
                self.mainContainerList.find('> > li:eq(' + i + ') img')
                    .ampZoomInline(ampConfigs.mainContainerZoomInline);
            }
        }
    };

    Viewer.prototype.destroyAmpWidgets = function () {
        var self = this;
        self.tags.length = 0;
        for (var i = 0; i < self.assets.length; i++) {
            var asset = self.assets[i];

            if (asset.hasOwnProperty('media')) {
                var video = $('#' + asset.name);
                if (video.length > 0) {
                    video.ampVideo('destroy');
                }
            }
        }
    };
//Move thumbs to one position after active or to one position before active
    Viewer.prototype.navMove = function (thumb) {
        var self = this;
        var slidesLength = self.mainContainerList.data()['ampAmpCarousel'].count;
        var next = self.settings.ampConfigs.mainContainerCarousel.loop ? (self.navPrevAssetIndex - 1 === slidesLength && self.navCurrentAssetIndex === 0) : false;
        var prev = self.settings.ampConfigs.mainContainerCarousel.loop ? (self.navPrevAssetIndex === 0 && self.navCurrentAssetIndex === (slidesLength - 1)) : false;
        var $thumb = $(thumb);
        var $next = $thumb.next();
        var $prev = $thumb.prev();

        if(self.navPrevAssetIndex === self.navCurrentAssetIndex){
            return;
        }

        if ($next.length > 0 || self.settings.ampConfigs.mainContainerCarousel.loop) {
            setTimeout(function () {
                if (!$next.hasClass('amp-visible')  && !prev) {
                    if(!self.settings.ampConfigs.mainContainerCarousel.loop && $next.length < 1){
                        return;
                    }
                    self.navContainerList.ampCarousel('next');

                }
                else if (!$prev.hasClass('amp-visible') && !next) {
                    if(!self.settings.ampConfigs.mainContainerCarousel.loop && $prev.length < 1){
                        return;
                    }
                    self.navContainerList.ampCarousel('prev');
                }
            }, 100);
        }
    };

    Viewer.prototype.navigateToActiveThumb = function () {
        var self = this;
        var $thumbs = self.navContainerList.find('.amp-slide');
        var $currentThumb = $thumbs.filter('.amp-selected');
        var visibleSlidesNum = Math.floor(self.navContainerList.width() /
            self.settings.ampConfigs.navElementsWidthPxMobile);
        var nextThumbsWidth = $thumbs.nextAll().length * self.settings.ampConfigs.navElementsWidthPxMobile;
        var prevThumbsWidth = $thumbs.prevAll().length * self.settings.ampConfigs.navElementsWidthPxMobile;
        if ($currentThumb.index() === 0 || $currentThumb.index() === $thumbs.length - 1) {
            self.navContainerList.ampCarousel('goTo', $currentThumb.index() + 1);
        }
        else if (nextThumbsWidth >= visibleSlidesNum) {
            self.navContainerList.ampCarousel('goTo', $currentThumb.index());
        }
        else {
            self.navContainerList.ampCarousel('goTo', $currentThumb.index() + 2);
        }
    };

    Viewer.prototype.bindNavigationEvents = function () {
        var self = this;
        var loop = self.settings.ampConfigs.mainContainerCarousel.loop;
        self.bindIconClickEvent(self.wrapper.find('.main-container-prev'), function () {
            self.checkMainContainerSlidesVisibility(0, true);
            self.mainContainerMove('prev', loop);
        });
        self.bindIconClickEvent(self.wrapper.find('.main-container-next'), function () {
            self.checkMainContainerSlidesVisibility(0, true);
            self.mainContainerMove('next', loop);
        });

        self.bindIconClickEvent(self.wrapper.find('.nav-container-prev'), function () {
            self.navContainerMove('prev', loop);
        });
        self.bindIconClickEvent(self.wrapper.find('.nav-container-next'), function () {
            self.navContainerMove('next', loop);
        });
    };

    Viewer.prototype.navContainerMove = function (dir, loop) {
        var self = this;
        if(loop){
            self.navContainerList.ampCarousel(dir);
            return;
        }
        var info = self.getNavigationVisibleSlidesInfo();
        var goToIndex = info.firstVisible + 1;
        if (dir === 'prev') {
            goToIndex = info.isFirst ? 1 : info.firstVisible;
        } else if (dir === 'next') {
            goToIndex = info.isLast ? info.firstVisible + 1 : info.firstVisible + 2;
        }
        self.navContainerList.ampCarousel('goTo', goToIndex);
    };

    Viewer.prototype.mainContainerMove = function (dir, loop) {
        var self = this;
        if(loop){
            self.mainContainerList.ampCarousel(dir);
            return;
        }

        var info = self.getMainVisibleSlidesInfo();
        var goToIndex = info.firstVisible + 1;
        if (dir === 'prev') {
            goToIndex = info.isFirst ? 1 : info.firstVisible;
        } else if (dir === 'next') {
            goToIndex = info.isLast ? info.firstVisible + 1 : info.firstVisible + 2;
        }

        self.mainContainerList.ampCarousel('goTo', goToIndex);
    };

    Viewer.prototype.initTooltips = function () {
        var self = this;

        self.mainContainerList.off('mousemove mouseout');
        self.tooltip.attr({style: ''});

        var assetIndex = self.currentAssetIndex;
        var currentAsset = self.assets[assetIndex];

        if (currentAsset.hasOwnProperty('set')) {
            var spin3D = false;
            if (currentAsset.set.items && currentAsset.set.items.length > 0 && currentAsset.set.items[0].set) {
                spin3D = true;
            }
            self.initSpinTooltip(spin3D);
        } else if (currentAsset.hasOwnProperty('media')) {
            self.initVideoTooltip();
        } else {
            self.initImageTooltip();
        }
    };

    Viewer.prototype.initImageTooltip = function () {
        var self = this;
        var tapText = '';
        self.tooltip.attr({class: 'tooltip image'});
        switch (self.currentView) {
            case self.views.desktopNormalView:
                if (self.canTouch) {
                    tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktop.image.doubleTouch.text :
                        self.settings.tooltips.desktop.image.touch.text;
                    self.tooltip.css({position: 'absolute'});
                    self.tooltipText.text(tapText);
                    self.fadeOutTooltip();
                } else {
                    self.tooltip.fadeOut(0);

                    var margin = +self.mainContainerList.css('margin-left').replace('px', '');

                    self.tooltipText.text(self.settings.tooltips.desktop.image.noTouch.text);

                    self.mainContainerList.on('mousemove', function (e) {
                        self.tooltip.css({
                            top: e.clientY - self.settings.tooltips.offsets.top,
                            left: e.clientX - self.settings.tooltips.offsets.left,
                            display: 'block'
                        });
                    });

                    self.mainContainerList.on('mouseout', function () {
                        self.tooltip.fadeOut(0);
                    });
                }
                break;
            case self.views.desktopFullView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktopFull.image.doubleTouch.text :
                    self.settings.tooltips.desktopFull.image.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.desktopFull.image.noTouch.text);
                self.tooltip.fadeOut(0);
                break;
            case self.views.mobileNormalView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.mobile.image.doubleTouch.text :
                    self.settings.tooltips.mobile.image.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.mobile.image.noTouch.text);
                self.fadeOutTooltip();
                break;
        }
    };

    Viewer.prototype.initSpinTooltip = function (spin3D) {
        var self = this;
        var tapText = '';
        var spinClass = spin3D ? 'spin-3d' : 'spin';
        self.tooltip.attr({class: 'tooltip ' + spinClass});
        switch (self.currentView) {
            case self.views.desktopNormalView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktop.spin.doubleTouch.text :
                    self.settings.tooltips.desktop.spin.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.desktop.spin.noTouch.text);
                break;
            case self.views.desktopFullView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.desktopFull.spin.doubleTouch.text :
                    self.settings.tooltips.desktopFull.spin.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.desktopFull.spin.noTouch.text);
                break;
            case self.views.mobileNormalView:
                tapText = (self.settings.zoomInlineDoubleTap) ? self.settings.tooltips.mobile.spin.doubleTouch.text :
                    self.settings.tooltips.mobile.spin.touch.text;
                self.tooltipText.text(self.canTouch ? tapText : self.settings.tooltips.mobile.spin.noTouch.text);
                break;
        }

        self.fadeOutTooltip();
    };

    Viewer.prototype.initVideoTooltip = function () {
        var self = this;

        self.tooltip.attr({class: 'tooltip video'});

        switch (self.currentView) {
            case self.views.desktopNormalView:
                self.tooltipText.text(self.canTouch ? self.settings.tooltips.desktop.video.play.touch.text : self.settings.tooltips.desktop.video.play.noTouch.text);
                break;
            case self.views.desktopFullView:
                self.tooltipText.text(self.canTouch ? self.settings.tooltips.desktopFull.video.play.touch.text : self.settings.tooltips.desktopFull.video.play.noTouch.text);
                break;
            case self.views.mobileNormalView:
                self.tooltipText.text(self.canTouch ? self.settings.tooltips.mobile.video.play.touch.text : self.settings.tooltips.mobile.video.play.noTouch.text);
                break;
        }

        self.fadeOutTooltip();
    };

    Viewer.prototype.fadeOutTooltip = function () {
        var self = this;
        clearTimeout(self.tooltipTimeout);
        self.tooltip.stop();
        self.tooltipTimeout = setTimeout(function () {
            self.tooltip.fadeOut();
        }, self.settings.tooltips.displayTime);
    };

    Viewer.prototype.doubleTapEvent = function ($element) {
        var self = this;
        var lastTapTime = 0;
        var lastTapTime2 = 0;
        var firsttouch = true;
        var touchStart = {
          x: 0,
          y: 0
        };
        var touchEnd = {
          x: 1000,
          y: 1000
        };
        var touch1 = {
          x: 0,
          y: 0
        };
        var touch2 = {
          x: 1000,
          y: 1000
        };
        $element.on('touchstart', function (e) {
            if (self.isZoomCycle) {
                lastTapTime = 0;
                lastTapTime2 = 0;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            var currentTime = new Date();
            var tapTime = currentTime - lastTapTime2;
            //if (tapTime < self.settings.doubleTapTime && tapTime > 0) {
            //    e.preventDefault();
            //}
            touchStart = {
                x: Math.abs(e.originalEvent.touches[0].pageX) || 0,
                y: Math.abs(e.originalEvent.touches[0].pageY) || 0
            };
            if (firsttouch) {
              touch1 = touchStart;
              firsttouch = false;
            } else {
              touch2 = touchStart;
              firsttouch = true;
            }
            lastTapTime2 = currentTime;
        });
        $element.on('touchend', function (e) {
            e.preventDefault();
            var currentTime = new Date();
            var tapTime = currentTime - lastTapTime;
            touchEnd = {
                x: Math.abs(e.originalEvent.changedTouches[0].pageX) || 1000,
                y: Math.abs(e.originalEvent.changedTouches[0].pageY) || 1000
            };
            var diff1 = {
                x: Math.abs(touch2.x - touch1.x),
                y: Math.abs(touch2.y - touch1.y)
            };
            var diff2 = {
                x: Math.abs(touchEnd.x - touchStart.x),
                y: Math.abs(touchEnd.y - touchStart.y)
            };
            if (diff1.x < 50 && diff1.y < 50 && diff2.x < 50 && diff2.y < 50) {
                if (tapTime < self.settings.doubleTapTime && tapTime > 0) {
                    $(this).trigger('doubletap');
                    $(this).trigger('doubletapend');
                } else {
                    if ($(e.target).hasClass('amp-slide')) {
                        e.stopPropagation();
                    }
                }
            }
            lastTapTime = currentTime;
        });
        return 'doubletap';
    };

    Viewer.prototype.bindDesktopNormalViewEvents = function () {
        var self = this;
        var $element = self.mainContainerList.find('.zoom-trap');

        var event = (self.canTouch && self.settings.zoomInlineDoubleTap)
            ? self.doubleTapEvent($element) : 'click';

        $element.on(event, function () {
            self.renderView(self.views.desktopFullView);
        });
    };

    Viewer.prototype.bindDesktopFullViewEvents = function () {
        var self = this;
        self.bindIconClickEvent(self.wrapper.find('.main-container .close'), function () {
            self.renderView(self.views.desktopNormalView, true);
        });

        self.bindIconClickEvent(self.wrapper.find('.panel .plus'), function () {
            self.zoomIn();
        });
        self.bindIconClickEvent(self.wrapper.find('.panel .minus'), function () {
            self.zoomOut();
        });

        self.bindZoomEvents(self.zoomCycle);
    };

    Viewer.prototype.bindMobileNormalViewEvents = function () {
        var self = this;
        self.bindIconClickEvent(self.wrapper.find('.main-container .close'), function () {
            self.zoomOutFull();
        });
        self.bindZoomEvents(self.zoomCycle);
    };

    Viewer.prototype.bindSpinEvents = function () {
        var self = this;
        var spinTraps = self.mainContainerList.find('.spin-trap');
        var spins = self.mainContainerList.find('.spin-trap + ul');
        if (self.canTouch) {
            self.bindTapEvent(spinTraps, function () {
                var $spinTrap = $(this);
                $spinTrap.addClass('active-for-scrolling');
                if($spinTrap.next().hasClass('amp-outer-spin')){
                    $spinTrap.parent().on('touchstart', self._prevent);
                }
            });

            self.bindTapEvent(spins, function () {
                var $spin = $(this);
                var $parent = $(this).parent()
                $parent.find('.spin-trap').removeClass('active-for-scrolling');
                if($spin.hasClass('amp-outer-spin')){
                    $parent.off('touchstart', self._prevent);
                }
            });
        } else {
            spinTraps.css({display: 'none'});
        }
    };

    Viewer.prototype.bindZoomEvents = function (zoomAction) {
        var self = this;
        var zoomTraps = self.mainContainerList.find('.zoom-trap');
        self.bindTapEvent(zoomTraps, zoomAction.bind(self), true);
    };

    Viewer.prototype._resize = function () {
        this.checkView();
        if (this.currentView === this.views.mobileNormalView ||
            this.isPortraitView && this.currentView === this.views.desktopNormalView) {
            if(!this.settings.ampConfigs.mainContainerCarousel.loop){
                this.navigateToActiveThumb();
            }

            this.applyNavigationStyles();
            this.checkNavContainerNavArrows();
        }
    };

    Viewer.prototype._orientationChange = function(){
        var self = this;
        setTimeout(function(){
            self._resize();
        }, 300)
    };


    Viewer.prototype.bindGenericEvents = function () {
        var self = this;
        $(window).off('resize', this._resize);
        $(window).on('resize', this._resize.bind(this));

        $(document).off('gesturestart', self._prevent);
        $(document).on('gesturestart', self._prevent.bind(this));


        window.removeEventListener("orientationchange", self._orientationChange);
        window.addEventListener("orientationchange", self._orientationChange.bind(this));


        var touchmoves = [];
        var $ampCarousel = false;
        var blocked = false;

        $(document).off('touchmove.viewerkit');
        $(document).on('touchmove.viewerkit', function (e) {
            if (e.originalEvent.touches[0] && e.originalEvent.touches[0].clientX !== undefined) {
              if(!$ampCarousel)  {
                $ampCarousel = $(e.target).parents('.amp-carousel');
              }
              if ($ampCarousel && $ampCarousel.length > 0) {
                var coords = {
                  clientX: e.originalEvent.touches[0].clientX,
                  clientY: e.originalEvent.touches[0].clientY
                };
                touchmoves.push(coords);
                var diffX = Math.abs(touchmoves[touchmoves.length-1].clientX - touchmoves[0].clientX);
                var diffY = Math.abs(touchmoves[touchmoves.length-1].clientY - touchmoves[0].clientY);
                if (!blocked && diffX > diffY) {
                  $ampCarousel.on('touchmove', self._prevent);
                  blocked = true;
                }
                if (blocked && diffX <= diffY) {
                  $ampCarousel.off('touchmove', self._prevent);
                  blocked = false;
                }
              }
            }
        });

        $(document).off('touchend.viewerkit');
        $(document).on('touchend.viewerkit', function (e) {
            touchmoves = [];
            if (blocked && $ampCarousel && $ampCarousel.length > 0) {
              $ampCarousel.off('touchmove', self._prevent);
              blocked = false;
            }
            $ampCarousel = false;
        });
    };

    Viewer.prototype.startSpin = function(assetIndex){
        var self = this;
        var currentAsset = self.assets[assetIndex];

        if(currentAsset.type === 'set' && currentAsset.set.items[0].type != 'set'){
            var $spin = self.mainContainerList.find('.amp-slide').eq(assetIndex).find('.amp-spin');

            var spinData = typeof $spin.data() !== 'undefined' ?
                ($spin.data()['amp-ampSpin'] || $spin.data()['ampAmpSpin']) : false;

            if($spin.length > 0 && (!spinData || spinData._loaded == true)){
                setTimeout(function(){
                    $spin.ampSpin('playRepeat', 1);
                }, self.settings.ampConfigs.mainContainerCarousel.animDuration);
            }
        }
    };

    Viewer.prototype.bindAmpEvents = function () {
        var self = this;

        self.mainContainerList.on('ampcarouselselected', function (e, data) {
            self.navPrevAssetIndex = self.navCurrentAssetIndex;
            self.navCurrentAssetIndex = (data.index - 1);
            self.checkMainContainerSlidesVisibility(0, true);
        });

        self.mainContainerList.on('ampcarouselcreated ampcarouselchange', function (e, data) {
            $('.amp-spin').find('.amp-frame').css({
                'margin-left': '-1px'
            });
            self.prevAssetIndex = self.currentAssetIndex;
            self.currentAssetIndex = data.index - 1;
            self.zoomOutFull();
            self.initTooltips();
            self.checkSpins();
            self.checkMainContainerNavArrows();
            self.checkZoomIcons();
            self.checkMainContainerSlidesVisibility(self.settings.ampConfigs.mainContainerCarousel.animDuration);
            if (self.spinVisible) {
                self.startSpin(self.currentAssetIndex);
            }
        });

        self.navContainerList.on('ampcarouselcreated ampcarouselchange', function (e, data) {
            self.checkNavContainerNavArrows();
            if (self.currentView === self.views.mobileNormalView && e.type === 'ampcarouselcreated') {
                var selected = false;
                self.navContainerList.find('.amp-slide')
                    .on('touchstart mousedown', function(){
                        selected = $(this).hasClass('amp-selected');
                    })
                    .on('touchend mouseup', function () {
                        if (!selected) {
                            self.navMove(this);
                        }
                    });
            }
        });

        self.mainContainerList.find('.zoom-trap > img').on('ampzoominlinezoomedin ampzoominlinezoomedinfull ' +
                'ampzoominlinezoomedout ampzoominlinezoomedoutfull', function (e, data) {
                self.checkZoomIcons();
                self.toggleZoomScrolling($(this).parent().find('.amp-zoomed'));
            })
            .on('ampzoominlinezoomedin ampzoominlinezoomedinfull', function (e, data) {
                self.lastZoomDir = 'In';
            })
            .on('ampzoominlinezoomedout ampzoominlinezoomedoutfull', function (e, data) {
                self.lastZoomDir = 'Out';
            });

        self.mainContainerList.find('.video').on('ampvideofullscreenchange', function (e, data) {
            var state = $(e.target).ampVideo('state');
            // If video is not paused
            if (state !== 2 && data.player && data.player.isFullscreen_) {
                setTimeout(function () {
                    $(e.target).ampVideo('play');
                }, 1000);
            }
        });
    };

    Viewer.prototype.checkMainContainerNavArrows = function () {
        var self = this;

        if(self.settings.ampConfigs.mainContainerCarousel.loop){
            return;
        }

        var assetIndex = self.currentAssetIndex;
        self.wrapper.find('.main-container > .amp-js-nav').removeClass('disabled');

        if (assetIndex === 0) {
            self.wrapper.find('.main-container-prev').addClass('disabled');
        }
        if (assetIndex === self.assets.length - 1) {
            self.wrapper.find('.main-container-next').addClass('disabled');
        }
    };

    Viewer.prototype.checkNavContainerNavArrows = function () {
        var self = this;

        if (self.settings.ampConfigs.mainContainerCarousel.loop) {
            return;
        }

        self.wrapper.find('.nav-container > .amp-js-nav').removeClass('disabled');
        var info = self.getNavigationVisibleSlidesInfo();
        if (info.isFirst) {
            self.wrapper.find('.nav-container-prev').addClass('disabled');
        }
        if (info.isLast) {
            self.wrapper.find('.nav-container-next').addClass('disabled');
        }
    };

    Viewer.prototype.checkView = function () {
        var self = this;
        if (self.isMobile() && self.currentView !== self.views.mobileNormalView) {
            self.renderView(self.views.mobileNormalView);
        } else if (!self.isMobile() && self.currentView === self.views.mobileNormalView) {
            self.renderView(self.views.desktopNormalView);
        }
    };

    Viewer.prototype.getAmpConfigs = function () {
        var self = this;

        var ampConfigs = self.settings.ampConfigs;

        switch (self.currentView) {
            case self.views.desktopNormalView:
                if (!self.settings.view && !self.isPortraitView) {
                    ampConfigs.navContainerCarousel.width = self.settings.ampConfigs.navElementsCount.forDesktop;
                    ampConfigs.navContainerCarousel.gesture.enabled = true;
                }
                break;
            case self.views.desktopFullView:
                ampConfigs.navContainerCarousel.width = self.settings.ampConfigs.navElementsCount.forDesktopFull;
                break;
            case self.views.mobileNormalView:
                var containerWidth = self.wrapper.width();
                var assetsCount = self.assets.length;
                var assetsWidth = assetsCount * ampConfigs.navElementsWidthPxMobile;
                var navIconsWidth = parseFloat(self.wrapper.find('.nav-container').css('padding-left'), 10) * 2;

                if (assetsWidth > containerWidth) {
                    //Calculate number of pagination dots fully visible inside thumbs container
                    ampConfigs.navContainerCarousel.width = Math.floor((containerWidth - navIconsWidth) /
                        ampConfigs.navElementsWidthPxMobile);
                    ampConfigs.navContainerCarousel.gesture.enabled = true;
                } else {
                    //Assume that all pagination dots could be shown
                    ampConfigs.navContainerCarousel.width = self.assets.length;
                    ampConfigs.navContainerCarousel.gesture.enabled = false;
                }
                break;
        }

        ampConfigs.mainContainerCarousel.start = self.currentAssetIndex + 1;
        ampConfigs.navContainerCarousel.start = self.currentAssetIndex + 1;

        return ampConfigs;
    };

    Viewer.prototype.applyNavigationStyles = function () {
        var self = this;
        var ampConfigs = self.getAmpConfigs();
        var navContainer = self.wrapper.find('.nav-container');
        var $navIcon = navContainer.find('> .amp-js-nav');

        if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
            var $visibleThumbs = navContainer.find('.amp-slide.amp-visible');

            if ($visibleThumbs.length === self.assets.length) {
                $navIcon.css({display: 'none'});
                navContainer.addClass('amp-without-thumbs');
            }
            else {
                $navIcon.css({display: 'block'});
                navContainer.removeClass('amp-without-thumbs');
                self.checkNavContainerNavArrowsStyle();
            }

            return false;
        }

        if (self.assets.length <= ampConfigs.navContainerCarousel.width) {
            $navIcon.css({display: 'none'});
        }
        else {
            $navIcon.css({display: 'block'});
        }

        var iconWidth = $navIcon.width();
        var navElementsWidthPercent = 100 / ampConfigs.navContainerCarousel.width;
        var normalNavContainerWidth = ampConfigs.navContainerCarousel.width * ampConfigs.navElementsWidthPx + iconWidth * 4;

        if (self.currentView === self.views.mobileNormalView) {
            if (self.assets.length <= ampConfigs.navContainerCarousel.width) {
                navContainer.css('padding', 0);
            } else {
                self.checkNavContainerNavArrowsStyle();
                navContainer.css('padding', '');
            }
        }

        var mobileNavContainerWidth = ampConfigs.navContainerCarousel.width * ampConfigs.navElementsWidthPxMobile +
            parseFloat(navContainer.css('padding-left'), 10) * 2;
        navContainer.css({
            'max-width': self.currentView === self.views.mobileNormalView ?
                mobileNavContainerWidth : normalNavContainerWidth
        });

        // For desktop thumnails we need to substract extra 20px due to margin
        var thumbWidth = self.currentView !== self.views.mobileNormalView ?
        'calc(' + navElementsWidthPercent + '% - 20px)'
            : ampConfigs.navElementsWidthPxMobile + 'px';

        self.navContainerList.find('.amp-slide').css('width', thumbWidth);
    };

    Viewer.prototype.getNavigationVisibleSlidesInfo = function () {
        var self = this;
        var elements = self.navContainerList.find('.amp-slide');
        var firstVisible = elements.length;
        for (var i = 0; i < elements.length; i++) {
            if (elements.eq(i).is('.amp-visible, .amp-partially-visible') && i < firstVisible) {
                firstVisible = i;
            }
        }
        var ampConfigs = self.getAmpConfigs();
        var visibleCount = ampConfigs.navContainerCarousel.width;

        if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
            visibleCount = elements.filter('.amp-visible, .amp-partially-visible').length;
        }

        return {
            firstVisible: firstVisible,
            isFirst: firstVisible === 0,
            isLast: firstVisible >= elements.length - visibleCount
        };
    };

    Viewer.prototype.getMainVisibleSlidesInfo = function () {
        var self = this;
        var elements = self.mainContainerList.find('.amp-slide');
        var firstVisible = elements.length;
        for (var i = 0; i < elements.length; i++) {
            if (elements.eq(i).is('.amp-visible, .amp-partially-visible') && i < firstVisible) {
                firstVisible = i;
            }
        }
        var ampConfigs = self.getAmpConfigs();
        var visibleCount = ampConfigs.mainContainerCarousel.width;

        if (self.settings.view && self.isPortraitView && self.currentView === self.views.desktopNormalView) {
            visibleCount = elements.filter('.amp-visible, .amp-partially-visible').length;
        }

        return {
            firstVisible: firstVisible,
            isFirst: firstVisible === 0,
            isLast: firstVisible >= elements.length - visibleCount
        };
    };

    Viewer.prototype.zoomIn = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            slide.ampZoomInline('zoomIn');
        }
    };

    Viewer.prototype.zoomOut = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            slide.ampZoomInline('zoomOut');
        }
    };

    Viewer.prototype.zoomInFull = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            slide.ampZoomInline('zoomInFull');
        }
    };

    Viewer.prototype.zoomOutFull = function () {
        var self = this;
        if (!self.isZoomCycle) {
            var slide = self.getZoomSlide();

            $.each(self._preventElements, function (ix, val) {
              val.off('touchmove', self._prevent);
            });
            self._preventElements = [];
            if (self.isZoomed()) {
              self.isZoomCycle = true;
              slide.ampZoomInline('zoomOutFull');
            }

            var prevSlide = self.getZoomSlide(self.prevAssetIndex);
            if (prevSlide.length > 0) {
                prevSlide.ampZoomInline('zoomOutFull');
            }
            setTimeout(function () {
              self.isZoomCycle = false;
            }, 600)
        }
    };

    Viewer.prototype.zoomToggle = function () {
        var self = this;
        var slide = self.getZoomSlide();
        if (slide.length > 0) {
            var state = slide.ampZoomInline('state');
            var scaleTo = 1 + state.scaleMax - state.scale;
            slide.ampZoomInline('setScale', scaleTo);
        }
    };

    Viewer.prototype.zoomCycle = function () {
        var self = this;
        if (!self.isZoomCycle) {
            var slide = self.getZoomSlide();
          if (slide.length > 0) {
                self.isZoomCycle = true;
                var dir = self.getNextCycleDir();
                slide.ampZoomInline('zoom' + dir);
            }
            setTimeout(function () {
                self.isZoomCycle = false;
            }, 500)
        }
    };

    Viewer.prototype.getNextCycleDir = function () {
        var self = this;
        var slide = self.getZoomSlide();
        var state = slide.ampZoomInline('state');

        if (state.scale === 1) {
            return 'In';
        } else if (state.scale === state.scaleMax) {
            return 'Out';
        } else {
            return self.lastZoomDir;
        }
    };

    Viewer.prototype.getZoomSlide = function (index) {
        var self = this;
        var index = typeof index !== 'undefined' ? index : self.currentAssetIndex;
        return self.mainContainerList.find('> > li:eq(' + index + ') .amp-zoom');
    };

    Viewer.prototype.toggleZoomScrolling = function($elem){
        var self = this;
        var slide = this.getZoomSlide();
        var state = slide.ampZoomInline('state')

        $.each(self._preventElements, function (ix, val) {
            val.off('touchmove', self._prevent);
        });
        self._preventElements = [];
        self._preventElements.push($elem);


        if(state.scale === 1){
            $elem.off('touchmove', self._prevent);
        }
        else{
            $elem.on('touchmove', self._prevent);
        }
    };

    Viewer.prototype.checkZoomIcons = function () {
        var self = this;
        var slide = self.getZoomSlide();
        var state = slide.ampZoomInline('state');
        switch (self.currentView) {
            case self.views.desktopFullView:
                var plus = self.wrapper.find('.panel .plus');
                var minus = self.wrapper.find('.panel .minus');
                plus.add(minus).removeClass('disabled');
                if (slide.length > 0) {
                    if (state.scale === 1) {
                        minus.addClass('disabled');
                    }
                    if (state.scale === state.scaleMax) {
                        plus.addClass('disabled');
                    }
                } else {
                    plus.add(minus).addClass('disabled');
                }
                break;
            case self.views.mobileNormalView:
                var close = self.wrapper.find('.main-container .close');
                close.css({display: 'none'});
                if (slide.length > 0) {
                    if (state.scale > 1) {
                        close.css({display: 'block'});
                    } else {
                      $.each(self._preventElements, function (ix, val) {
                        val.off('touchmove', self._prevent);
                        self._preventElements = [];
                      });
                    }
                }
                break;
        }
    };

    Viewer.prototype.isZoomed = function () {
        var self = this;
        var state = self.getZoomSlide().ampZoomInline('state');
        return state.scale > 1;
    };

    Viewer.prototype.bindTapEvent = function (element, action, preventDefault) {
        var self = this;
        var coords;
        var newCoords;

        // Need to remove mouse events on touch devices since it fires callbacks twice on tap
        var startEvents = (self.canTouch ? '' : 'mousedown ');
        var endEvents = (self.canTouch ? '' : 'mouseup ');
        if (this.settings.zoomInlineDoubleTap) {
            startEvents += self.doubleTapEvent(element);
            endEvents += 'doubletapend';
        } else {
            startEvents += 'touchstart';
            endEvents += 'touchend';
        }

        function getPageCoords(e) {
            var out = {x: 0, y: 0};

            if (e.type === 'touchstart' || e.type === 'touchmove' ||
                e.type === 'touchend' || e.type === 'touchcancel') {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                out.x = touch.pageX;
                out.y = touch.pageY;
            } else if (e.type === 'mousedown' || e.type === 'mouseup' ||
                e.type === 'mousemove' || e.type === 'mouseover' ||
                e.type === 'mouseout' || e.type === 'mouseenter' ||
                e.type === 'mouseleave') {
                out.x = e.pageX;
                out.y = e.pageY;
            }
            return out;
        }

        element.on(startEvents, function (e) {
            var $self = $(this);

            if(preventDefault){
                e.preventDefault();
            }

            if (e.which === 3) {
                return false;
            }

            if ($self.data('startEvent') === 'progress') return;
            $self.data('startEvent', 'progress');
            setTimeout(function () {
                $self.data('startEvent', 'done');
            }, 500);

            var target = this;
            target.tap = true;
            coords = getPageCoords(e);
            element.one(endEvents, function (e) {

                if (e.which === 3) {
                    return false;
                }

                //$.each(self._preventElements, function (ix, val) {
                //    val.off('touchmove', self._prevent);
                //});
                //self._preventElements = [];
                ////element.on('touchmove', self._prevent);
                //self._preventElements.push(element);

                var target = this;
                newCoords = getPageCoords(e);

                var distX = coords.x - newCoords.x;
                var distY = coords.y - newCoords.y;

                if (Math.abs(distX) >= 5 || Math.abs(distY) >= 5) {
                    target.tap = false;
                }

                if (target.tap) {
                    target.tap = false;
                    action.call(target);
                }
            });



            if (self.isZoomed()) {
                e.stopPropagation();
            }
        });
    };

    Viewer.prototype.checkSpins = function () {
        var self = this;
        var spinTraps = self.mainContainerList.find('.spin-trap');
        if (self.canTouch) {
            spinTraps.removeClass('active-for-scrolling');
            spinTraps.parent().off('touchstart', self._prevent);
        } else {
            spinTraps.css({display: 'none'});
        }
    };

    Viewer.prototype.bindIconClickEvent = function (icon, action) {
        var self = this;
        icon.on('click', function (e, data) {
            e.stopPropagation();
            if ($(this).hasClass('disabled')) {
                e.preventDefault();
            } else {
                action();
            }
        });
    };

    Viewer.prototype.checkNavContainerNavArrowsStyle = function () {
        var self = this;
        var navContainer = self.wrapper.find('.nav-container');
        var leftArrow = navContainer.find('.nav-container-prev');
        var rightArrow = navContainer.find('.nav-container-next');
        var thumbWidth = navContainer.find('.amp-slide:not(.amp-selected) .mobile-thumbnail').width();
        var shift = (52 - thumbWidth) / 2;

        leftArrow.add(rightArrow)
            .css('width', thumbWidth)
            .css('height', thumbWidth);

        leftArrow.css('left', shift);
        rightArrow.css('right', shift);
    };

    Viewer.prototype.checkMainContainerSlidesVisibility = function (timeout, showSlide) {

        var self = this;
        var assetIndex = self.currentAssetIndex;
        var timeout = timeout || 0;
        var currentAsset = self.assets[assetIndex];
        var $slide = self.mainContainerList.find('.amp-slide').has('.video');

        if (typeof showSlide !== 'undefined' && showSlide) {
            $slide.css({
                opacity: 1
            })
            return;
        }

        if (currentAsset.hasOwnProperty('media')) {
            $slide.css({
                opacity: 1
            })
            return;
        }

        else {
                $slide.css({opacity: 0});
        }
    };

    Viewer.prototype._prevent = function (e) {
        e.preventDefault();
    };

    Viewer.prototype._preventElements = [];

    global.amp.Viewer = Viewer;
}(window, jQuery));

(function (global, $) {
    'use strict';
    var bridgeConnector = {
        bridge: window.ecommBridge,
        page: null,
        setPageInfo: function (page) {
            this.page = {};
            for (var x in page) {
                if (page.hasOwnProperty(x)) {
                    this.page[x] = page[x];
                }
            }
        },
        enrichMediaListWithParams: function (list, params) {
            if (list && list.constructor === Array && list.length > 0) {
                $.each(list, function (i, v) {
                    for (var name in params) {
                        v[name] = params[name];
                    }
                });
            }
            return list;
        },

        convertListToSet: function (assetsList, assetsData) {
            var setObject = {'name': 'set', 'items': []};

            //ew, we have to loop through to preserve order
            for (var i = 0; i < assetsList.length; i++) {
                var name = assetsList[i].name;
                var key;
                for (key in assetsData) {
                    if (key === name && assetsData.hasOwnProperty(key)) {
                        setObject.items.push(assetsData[key]);
                        break;
                    }
                }
            }

            for (var s = 0; s < setObject.items.length; s++) {
                if (setObject.items[s].thumbs) {
                    setObject.items[s].type = 'video';
                } else if (setObject.items[s].items) {
                    setObject.items[s].type = 'set';
                    setObject.items[s].set = {'items': setObject.items[s].items};
                } else if (setObject.items[s].isImage) {
                    setObject.items[s].type = 'img';
                }
                setObject.items[s].src = setObject.items[s].url;
            }
            return setObject;
        },
        initAll: function () {
            if (this.bridge !== null && this.bridge.site && this.bridge.site.page) {
                this.setPageInfo(this.bridge.site.page);
            }
        }
    };

    global.amp.Viewer.prototype.bridgeConnector = bridgeConnector;
}(window, jQuery));

;/*!
 * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {

  var version = '2.2.0';
  var optionOverrides = {};
  var defaults = {
    exclude: [],
    excludeWithin: [],
    offset: 0,

    // one of 'top' or 'left'
    direction: 'top',

    // if set, bind click events through delegation
    //  supported since jQuery 1.4.2
    delegateSelector: null,

    // jQuery set of elements you wish to scroll (for $.smoothScroll).
    //  if null (default), $('html, body').firstScrollable() is used.
    scrollElement: null,

    // only use if you want to override default behavior
    scrollTarget: null,

    // automatically focus the target element after scrolling to it
    autoFocus: false,

    // fn(opts) function to be called before scrolling occurs.
    // `this` is the element(s) being scrolled
    beforeScroll: function() {},

    // fn(opts) function to be called after scrolling occurs.
    // `this` is the triggering element
    afterScroll: function() {},

    // easing name. jQuery comes with "swing" and "linear." For others, you'll need an easing plugin
    // from jQuery UI or elsewhere
    easing: 'swing',

    // speed can be a number or 'auto'
    // if 'auto', the speed will be calculated based on the formula:
    // (current scroll position - target scroll position) / autoCoeffic
    speed: 400,

    // coefficient for "auto" speed
    autoCoefficient: 2,

    // $.fn.smoothScroll only: whether to prevent the default click action
    preventDefault: true
  };

  var getScrollable = function(opts) {
    var scrollable = [];
    var scrolled = false;
    var dir = opts.dir && opts.dir === 'left' ? 'scrollLeft' : 'scrollTop';

    this.each(function() {
      var el = $(this);

      if (this === document || this === window) {
        return;
      }

      if (document.scrollingElement && (this === document.documentElement || this === document.body)) {
        scrollable.push(document.scrollingElement);

        return false;
      }

      if (el[dir]() > 0) {
        scrollable.push(this);
      } else {
        // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
        el[dir](1);
        scrolled = el[dir]() > 0;

        if (scrolled) {
          scrollable.push(this);
        }
        // then put it back, of course
        el[dir](0);
      }
    });

    if (!scrollable.length) {
      this.each(function() {
        // If no scrollable elements and <html> has scroll-behavior:smooth because
        // "When this property is specified on the root element, it applies to the viewport instead."
        // and "The scroll-behavior property of the … body element is *not* propagated to the viewport."
        // → https://drafts.csswg.org/cssom-view/#propdef-scroll-behavior
        if (this === document.documentElement && $(this).css('scrollBehavior') === 'smooth') {
          scrollable = [this];
        }

        // If still no scrollable elements, fall back to <body>,
        // if it's in the jQuery collection
        // (doing this because Safari sets scrollTop async,
        // so can't set it to 1 and immediately get the value.)
        if (!scrollable.length && this.nodeName === 'BODY') {
          scrollable = [this];
        }
      });
    }

    // Use the first scrollable element if we're calling firstScrollable()
    if (opts.el === 'first' && scrollable.length > 1) {
      scrollable = [scrollable[0]];
    }

    return scrollable;
  };

  var rRelative = /^([\-\+]=)(\d+)/;

  $.fn.extend({
    scrollable: function(dir) {
      var scrl = getScrollable.call(this, {dir: dir});

      return this.pushStack(scrl);
    },
    firstScrollable: function(dir) {
      var scrl = getScrollable.call(this, {el: 'first', dir: dir});

      return this.pushStack(scrl);
    },

    smoothScroll: function(options, extra) {
      options = options || {};

      if (options === 'options') {
        if (!extra) {
          return this.first().data('ssOpts');
        }

        return this.each(function() {
          var $this = $(this);
          var opts = $.extend($this.data('ssOpts') || {}, extra);

          $(this).data('ssOpts', opts);
        });
      }

      var opts = $.extend({}, $.fn.smoothScroll.defaults, options);

      var clickHandler = function(event) {
        var escapeSelector = function(str) {
          return str.replace(/(:|\.|\/)/g, '\\$1');
        };

        var link = this;
        var $link = $(this);
        var thisOpts = $.extend({}, opts, $link.data('ssOpts') || {});
        var exclude = opts.exclude;
        var excludeWithin = thisOpts.excludeWithin;
        var elCounter = 0;
        var ewlCounter = 0;
        var include = true;
        var clickOpts = {};
        var locationPath = $.smoothScroll.filterPath(location.pathname);
        var linkPath = $.smoothScroll.filterPath(link.pathname);
        var hostMatch = location.hostname === link.hostname || !link.hostname;
        var pathMatch = thisOpts.scrollTarget || (linkPath === locationPath);
        var thisHash = escapeSelector(link.hash);

        if (thisHash && !$(thisHash).length) {
          include = false;
        }

        if (!thisOpts.scrollTarget && (!hostMatch || !pathMatch || !thisHash)) {
          include = false;
        } else {
          while (include && elCounter < exclude.length) {
            if ($link.is(escapeSelector(exclude[elCounter++]))) {
              include = false;
            }
          }

          while (include && ewlCounter < excludeWithin.length) {
            if ($link.closest(excludeWithin[ewlCounter++]).length) {
              include = false;
            }
          }
        }

        if (include) {
          if (thisOpts.preventDefault) {
            event.preventDefault();
          }

          $.extend(clickOpts, thisOpts, {
            scrollTarget: thisOpts.scrollTarget || thisHash,
            link: link
          });

          $.smoothScroll(clickOpts);
        }
      };

      if (options.delegateSelector !== null) {
        this
        .off('click.smoothscroll', options.delegateSelector)
        .on('click.smoothscroll', options.delegateSelector, clickHandler);
      } else {
        this
        .off('click.smoothscroll')
        .on('click.smoothscroll', clickHandler);
      }

      return this;
    }
  });

  var getExplicitOffset = function(val) {
    var explicit = {relative: ''};
    var parts = typeof val === 'string' && rRelative.exec(val);

    if (typeof val === 'number') {
      explicit.px = val;
    } else if (parts) {
      explicit.relative = parts[1];
      explicit.px = parseFloat(parts[2]) || 0;
    }

    return explicit;
  };

  var onAfterScroll = function(opts) {
    var $tgt = $(opts.scrollTarget);

    if (opts.autoFocus && $tgt.length) {
      $tgt[0].focus();

      if (!$tgt.is(document.activeElement)) {
        $tgt.prop({tabIndex: -1});
        $tgt[0].focus();
      }
    }

    opts.afterScroll.call(opts.link, opts);
  };

  $.smoothScroll = function(options, px) {
    if (options === 'options' && typeof px === 'object') {
      return $.extend(optionOverrides, px);
    }
    var opts, $scroller, speed, delta;
    var explicitOffset = getExplicitOffset(options);
    var scrollTargetOffset = {};
    var scrollerOffset = 0;
    var offPos = 'offset';
    var scrollDir = 'scrollTop';
    var aniProps = {};
    var aniOpts = {};

    if (explicitOffset.px) {
      opts = $.extend({link: null}, $.fn.smoothScroll.defaults, optionOverrides);
    } else {
      opts = $.extend({link: null}, $.fn.smoothScroll.defaults, options || {}, optionOverrides);

      if (opts.scrollElement) {
        offPos = 'position';

        if (opts.scrollElement.css('position') === 'static') {
          opts.scrollElement.css('position', 'relative');
        }
      }

      if (px) {
        explicitOffset = getExplicitOffset(px);
      }
    }

    scrollDir = opts.direction === 'left' ? 'scrollLeft' : scrollDir;

    if (opts.scrollElement) {
      $scroller = opts.scrollElement;

      if (!explicitOffset.px && !(/^(?:HTML|BODY)$/).test($scroller[0].nodeName)) {
        scrollerOffset = $scroller[scrollDir]();
      }
    } else {
      $scroller = $('html, body').firstScrollable(opts.direction);
    }

    // beforeScroll callback function must fire before calculating offset
    opts.beforeScroll.call($scroller, opts);

    scrollTargetOffset = explicitOffset.px ? explicitOffset : {
      relative: '',
      px: ($(opts.scrollTarget)[offPos]() && $(opts.scrollTarget)[offPos]()[opts.direction]) || 0
    };

    aniProps[scrollDir] = scrollTargetOffset.relative + (scrollTargetOffset.px + scrollerOffset + opts.offset);

    speed = opts.speed;

    // automatically calculate the speed of the scroll based on distance / coefficient
    if (speed === 'auto') {

      // $scroller[scrollDir]() is position before scroll, aniProps[scrollDir] is position after
      // When delta is greater, speed will be greater.
      delta = Math.abs(aniProps[scrollDir] - $scroller[scrollDir]());

      // Divide the delta by the coefficient
      speed = delta / opts.autoCoefficient;
    }

    aniOpts = {
      duration: speed,
      easing: opts.easing,
      complete: function() {
        onAfterScroll(opts);
      }
    };

    if (opts.step) {
      aniOpts.step = opts.step;
    }

    if ($scroller.length) {
      $scroller.stop().animate(aniProps, aniOpts);
    } else {
      onAfterScroll(opts);
    }
  };

  $.smoothScroll.version = version;
  $.smoothScroll.filterPath = function(string) {
    string = string || '';

    return string
      .replace(/^\//, '')
      .replace(/(?:index|default).[a-zA-Z]{3,4}$/, '')
      .replace(/\/$/, '');
  };

  // default options
  $.fn.smoothScroll.defaults = defaults;

}));

;/*
 * Copyright (C) 2009-2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
(function() {
    "use strict";
    var C = {
        BasePath: "https://my300363-api.s4hana.ondemand.com/sap/opu/odata/sap/CUAN_CONTENT_PAGE_RESULT_SRV",
        ResultHeadersPath: "ResultHeaders",
        CORS: true,
        CSRFTokenHeader: "",
        AppendScenarioParameter: "",
        Tenant: "https://my300363.s4hana.ondemand.com",
        Version: "11.12.20"
    };
    var R = {
        getConfig: function(c) {
            if (c) {
                var b = R.Setting.get(c, "lpi-base-path"),
                    t = R.Setting.get(c, "lpi-tenant");
                if (b && t) {
                    return {
                        BasePath: b,
                        ResultHeadersPath: "",
                        CORS: true,
                        CSRFTokenHeader: "",
                        AppendScenarioParameter: "_L54AD1F204_",
                        Tenant: t,
                        Version: C.Version
                    };
                }
            }
            return C;
        },
        initialize: function() {
            if (this.isInitializing() || this.isInitialized()) {
                return;
            }
            this.reset();
            var c = this.getPages(),
                i;
            for (i = 0; i < c.length; i++) {
                this.ContentPage.prepare(c[i]);
            }
            this.Request.fetchToken(c, this.handleFetchTokenResponse.bind(this));
        },
        handleFetchTokenResponse: function(c, s) {
            var i;
            if (s) {
                for (i = 0; i < c.length; i++) {
                    this.Result.sendOpen(c[i], this.handleOpenResponse.bind(this));
                }
            } else {
                for (i = 0; i < c.length; i++) {
                    R.ContentPage.toggleErrorMessage(c[i], true);
                }
            }
        },
        handleOpenResponse: function(c, r) {
            if (R.Request.isErrorResponse(r)) {
                R.ContentPage.toggleErrorMessage(c, true);
            } else {
                this.ContentPage.finishLoading(c, r);
            }
            c.sapCpInitializing = false;
            c.sapCpInitialized = true;
        },
        isInitializing: function() {
            var c = this.getPages(),
                i;
            for (i = 0; i < c.length; i++) {
                if (c[i].sapCpInitializing) {
                    return true;
                }
            }
            return false;
        },
        isInitialized: function() {
            var c = this.getPages(),
                i;
            for (i = 0; i < c.length; i++) {
                if (!c[i].sapCpInitialized) {
                    return false;
                }
            }
            return true;
        },
        getPages: function() {
            return R.Node.getAllWithClassName(document, "sapCpContentPage");
        },
        reset: function() {
            var c = this.getPages(),
                i, o;
            for (i = 0; i < c.length; i++) {
                o = c[i];
                delete o.sapCpInitializing;
                delete o.sapCpInitialized;
                delete o.sapCpCSRFToken;
            }
        },
        ContentPage: {
            prepare: function(c) {
                if (c.sapCpInitializing || c.sapCpInitialized) {
                    return;
                }
                c.sapCpInitializing = true;
                this.checkVersion(c);
                this.prepareWidgets(c);
                R.Event.registerListener(c, "submit", this.handleSubmitEvent.bind(this));
            },
            checkVersion: function(c) {
                var s = R.Setting.get(c, "version"),
                    m = R.getConfig(c);
                if (s > m.Version) {
                    R.Console.warn("You are using an outdated version of the landing page script");
                }
            },
            prepareWidgets: function(c) {
                var w = this.getWidgets(c),
                    i;
                for (i = 0; i < w.length; i++) {
                    R.Widget.prepare(w[i]);
                }
            },
            getWidgets: function(c) {
                return R.Node.getAllWithClassName(c, "sapCpWidget");
            },
            checkMissingMandatoryFieldsLabel: function(n) {
                var c = R.Util.findParentByClassName(n, "sapCpContentPage"),
                    m = R.Node.getAllWithClassName(c, "sapCpWidgetMandatoryMissing"),
                    h = (m.length > 0);
                R.ContentPage.toggleMissingMandatoryField(c, h);
            },
            finishLoading: function(c, r) {
                if (r && r.ContactPersonalizationData && r.ContactPersonalizationData.results) {
                    this.processPersonalizationData(c, r.ContactPersonalizationData.results);
                }
                this.toggleLoading(c, false);
            },
            processPersonalizationData: function(c, p) {
                var P, w = this.getWidgets(c),
                    W, i;
                for (i = 0; i < p.length; i++) {
                    P = p[i];
                    W = R.Util.findWidgetByKey(w, P.WidgetKeyHash);
                    if (W) {
                        R.Widget.applyPersonalization(W, P.Value);
                    }
                }
            },
            handleSubmitEvent: function(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
            },
            collectAnswers: function(c, o) {
                var w = this.getWidgets(c),
                    W, a = [],
                    A, m = false,
                    i = false,
                    I;
                for (I = 0; I < w.length; I++) {
                    W = w[I];
                    A = R.Widget.collectAnswer(W, o);
                    if (A) {
                        a.push(A);
                    } else if (A === false) {
                        m = true;
                    } else if (A === null) {
                        i = true;
                    }
                }
                if (m || i) {
                    return false;
                }
                return a;
            },
            toggleLoading: function(c, s) {
                R.CSS.toggleClass(c, "sapCpContentPageLoading", s);
            },
            toggleMissingMandatoryField: function(c, s) {
                R.CSS.toggleClass(c, "sapCpMissingMandatoryField", s);
            },
            toggleInvalid: function(c, i) {
                R.CSS.toggleClass(c, "sapCpContentPageInvalid", i);
            },
            toggleErrorMessage: function(c, s) {
                R.CSS.toggleClass(c, "sapCpSubmitError", s);
            },
            toggleSuccessMessage: function(c, s) {
                R.CSS.toggleClass(c, "sapCpSubmitCompleted", s);
            },
            isProductiveTestMode: function(c) {
                var t = R.Setting.get(c, "test-mode"),
                    p = R.Setting.get(c, "productive");
                return (t && p);
            },
            setErrorMessage: function(c, e) {
                var E = R.Node.getFirstWithClassName(c, "sapCpErrorMessageText");
                if (E) {
                    E.sapCpErrorMessage = (E.sapCpErrorMessage || E.textContent);
                    E.textContent = (e || E.sapCpErrorMessage);
                }
            }
        },
        Layout: {},
        Widget: {
            prepare: function(w) {
                if (this.isInputWidget(w)) {
                    R.InputWidget.prepare(w);
                } else if (this.isCheckBoxWidget(w)) {
                    R.CheckBoxWidget.prepare(w);
                } else if (this.isDownloadWidget(w)) {
                    R.DownloadWidget.prepare(w);
                } else if (this.isButtonWidget(w)) {
                    R.ButtonWidget.prepare(w);
                } else if (this.isInteractionWidget(w)) {
                    R.InteractionWidget.prepare(w);
                }
            },
            applyPersonalization: function(w, v) {
                if (this.isInputWidget(w)) {
                    R.InputWidget.applyPersonalization(w, v);
                } else if (this.isCheckBoxWidget(w)) {
                    R.CheckBoxWidget.applyPersonalization(w, v);
                }
            },
            collectAnswer: function(w, c) {
                var a;
                if (this.isInputWidget(w)) {
                    a = R.InputWidget.collectAnswer(w);
                } else if (this.isNoteWidget(w)) {
                    a = R.NoteWidget.collectAnswer(w);
                } else if (this.isCheckBoxWidget(w)) {
                    a = R.CheckBoxWidget.collectAnswer(w);
                } else if (this.isDownloadWidget(w)) {
                    a = R.DownloadWidget.collectAnswer(w);
                } else if (this.isButtonWidget(w)) {
                    a = R.ButtonWidget.collectAnswer(w, c);
                } else if (this.isInteractionWidget(w)) {
                    a = R.InteractionWidget.collectAnswer(w);
                }
                if (a === false) {
                    R.Widget.toggleMissingMandatory(w, true);
                    R.Widget.toggleInvalid(w, false);
                } else if (a === null) {
                    R.Widget.toggleMissingMandatory(w, false);
                    R.Widget.toggleInvalid(w, true);
                } else {
                    R.Widget.toggleMissingMandatory(w, false);
                    R.Widget.toggleInvalid(w, false);
                }
                return a;
            },
            isMandatory: function(w) {
                return R.CSS.hasClass(w, "sapCpWidgetMandatory");
            },
            isTextWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpTextWidget");
            },
            isInputWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpInputWidget");
            },
            isNoteWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpNoteWidget");
            },
            isCheckBoxWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpCheckBoxWidget");
            },
            isDownloadWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpDownloadWidget");
            },
            isButtonWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpButtonWidget");
            },
            isInteractionWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpInteractionWidget");
            },
            toggleMissingMandatory: function(w, m) {
                R.CSS.toggleClass(w, "sapCpWidgetMandatoryMissing", m);
            },
            toggleInvalid: function(w, i) {
                R.CSS.toggleClass(w, "sapCpWidgetInvalid", i);
            }
        },
        InputWidget: {
            prepare: function(i) {
                var I = R.Widget.isMandatory(i),
                    a, d, D, b;
                d = i.getElementsByTagName("select");
                for (b = 0; b < d.length; b++) {
                    R.Event.registerListener(d[b], "change", this.handleDropDownChangeEvent.bind(this));
                }
                D = R.Node.getFirstWithClassName(i, "sapCpDatePicker");
                if (D) {
                    this.prepareDatePicker(D);
                }
                if (!I) {
                    return;
                }
                a = i.getElementsByTagName("input");
                if (a[0]) {
                    R.Event.registerListener(a[0], "focusout", this.handleInputFocusOutEvent.bind(this));
                }
            },
            prepareDatePicker: function(d) {
                var D = R.Node.getAllWithClassName(d, "sapCpDropDown"),
                    o, i;
                for (i = 0; i < D.length; i++) {
                    o = D[i];
                    if (R.CSS.hasClass(o, "sapCpDatePickerDay")) {
                        this.prepareDatePickerDayDropDown(o);
                    } else if (R.CSS.hasClass(o, "sapCpDatePickerMonth")) {
                        R.Event.registerListener(o, "change", this.handleDatePickerDropDownChangeEvent.bind(this));
                    } else if (R.CSS.hasClass(o, "sapCpDatePickerYear")) {
                        this.prepareDatePickerYearDropDown(o);
                        R.Event.registerListener(o, "change", this.handleDatePickerDropDownChangeEvent.bind(this));
                    }
                }
            },
            prepareDatePickerDayDropDown: function(d) {
                var i;
                for (i = 1; i <= 31; i++) {
                    this.addDatePickerDropDownOption(d, i);
                }
            },
            prepareDatePickerYearDropDown: function(y) {
                var d = R.Setting.get(y, "dropdowntype"),
                    Y = d.split("-"),
                    i, a, c = new Date(),
                    b = c.getFullYear(),
                    e, I;
                if (Y.length === 4) {
                    i = (parseInt(Y[2], 10) || 0);
                    a = (parseInt(Y[3], 10) || 0);
                }
                if (i > 0) {
                    for (I = i; I > 0; I--) {
                        e = b + I;
                        this.addDatePickerDropDownOption(y, e);
                    }
                }
                this.addDatePickerDropDownOption(y, b);
                if (a > 0) {
                    for (I = 1; I <= a; I++) {
                        e = b - I;
                        this.addDatePickerDropDownOption(y, e);
                    }
                }
            },
            applyPersonalization: function(i, v) {
                var I = R.Node.getFirstWithClassName(i, "sapCpInput"),
                    c = R.Node.getFirstWithClassName(i, "sapCpCheckBox"),
                    d = R.Node.getFirstWithClassName(i, "sapCpDatePicker"),
                    D = R.Node.getFirstWithClassName(i, "sapCpDropDown"),
                    a;
                if (!v) {
                    return;
                }
                if (I) {
                    I.value = v;
                } else if (c) {
                    a = c.getElementsByTagName("input");
                    if (a[0]) {
                        a[0].checked = !!v;
                    }
                } else if (d) {
                    if (v !== "00000000") {
                        var y = R.Node.getFirstWithClassName(d, "sapCpDatePickerYear"),
                            m = R.Node.getFirstWithClassName(d, "sapCpDatePickerMonth"),
                            o = R.Node.getFirstWithClassName(d, "sapCpDatePickerDay");
                        if (y) {
                            y.value = v.substring(0, 4);
                        }
                        if (m) {
                            m.value = v.substring(4, 6);
                        }
                        if (o) {
                            o.value = v.substring(6, 8);
                        }
                    }
                } else if (D) {
                    D.value = v;
                    this.updateDropDownValue(D);
                }
            },
            handleInputFocusOutEvent: function(e) {
                var i = e.target,
                    I = R.Util.findParentByClassName(i, "sapCpInputWidget");
                if (i.value) {
                    R.Widget.toggleMissingMandatory(I, false);
                }
                R.ContentPage.checkMissingMandatoryFieldsLabel(I);
            },
            handleDropDownChangeEvent: function(e) {
                var d = e.target;
                this.updateDropDownValue(d);
            },
            handleDatePickerDropDownChangeEvent: function(e) {
                var d = e.target,
                    D = d.parentNode;
                this.updateDatePickerValues(D);
            },
            updateDropDownValue: function(d) {
                R.CSS.toggleClass(d, "sapCpDropDownPlaceholder", !d.value);
            },
            updateDatePickerValues: function(d) {
                var D = R.Node.getFirstWithClassName(d, "sapCpDatePickerDay"),
                    m = R.Node.getFirstWithClassName(d, "sapCpDatePickerMonth"),
                    y = R.Node.getFirstWithClassName(d, "sapCpDatePickerYear");
                if (!D || !m || !y) {
                    return;
                }
                var s = D.selectedOptions[0].value,
                    S = m.selectedOptions[0].value,
                    a = y.selectedOptions[0].value,
                    i = (parseInt(s, 10) || 0),
                    b = (parseInt(S, 10) || 0),
                    c = (parseInt(a, 10) || 0),
                    o = new Date(c, b, 0),
                    e = o.getDate(),
                    O = D.options.length,
                    f, I;
                if (i > e) {
                    D.selectedIndex = e.toString();
                }
                if (O > (e + 1)) {
                    for (I = O; I > (e + 1); I--) {
                        D.remove(I - 1);
                    }
                } else if (O < (e + 1)) {
                    for (I = O; I < (e + 1); I++) {
                        f = I;
                        this.addDatePickerDropDownOption(D, f);
                    }
                }
            },
            addDatePickerDropDownOption: function(d, v) {
                var V = v.toString(),
                    n;
                if (v < 10) {
                    V = "0" + V;
                }
                n = new Option(V, V);
                d.add(n);
            },
            checkValidity: function(i) {
                var r;
                var v = true;
                var I = "";
                if (i.type === "email") {
                    if (i.value) {
                        r = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                        v = r.test(i.value);
                        if (!v) {
                            I = i.getAttribute("data-sap-cp-validationMessage");
                        }
                    }
                }
                if (i.type === "tel") {
                    if (i.value) {
                        r = new RegExp("^\\+(?:[0-9] ?){6,28}[0-9]$");
                        v = r.test(i.value);
                        if (!v) {
                            I = i.getAttribute("data-sap-cp-validationMessage");
                        }
                    }
                }
                if (i.setCustomValidity) {
                    i.setCustomValidity(I);
                    i.title = I;
                } else {
                    i.title = I;
                }
                return v;
            },
            collectAnswer: function(i) {
                var I = R.Widget.isMandatory(i),
                    o = R.Node.getFirstWithClassName(i, "sapCpInput"),
                    c = R.Node.getFirstWithClassName(i, "sapCpCheckBox"),
                    d = R.Node.getFirstWithClassName(i, "sapCpDatePicker"),
                    D = R.Node.getFirstWithClassName(i, "sapCpDropDown"),
                    a, s, b;
                if (o) {
                    b = !this.checkValidity(o);
                    s = o.value;
                } else if (c) {
                    a = c.getElementsByTagName("input");
                    if (a[0]) {
                        s = (a[0].checked ? "X" : "");
                    }
                } else if (d) {
                    var y = R.Node.getFirstWithClassName(d, "sapCpDatePickerYear"),
                        m = R.Node.getFirstWithClassName(d, "sapCpDatePickerMonth"),
                        e = R.Node.getFirstWithClassName(d, "sapCpDatePickerDay");
                    if (y && m && e) {
                        s = y.value + m.value + e.value;
                    }
                    if (!/^[0-9]{8}$/.test(s)) {
                        s = "";
                    }
                } else if (D) {
                    s = D.value;
                }
                if (I && !s) {
                    return false;
                }
                if (b) {
                    return null;
                }
                var A = {
                    WidgetKeyHash: R.Setting.get(i, "key"),
                    WidgetValueKeyHash: "",
                    Value: s
                };
                return A;
            }
        },
        CheckBoxWidget: {
            prepare: function(c) {
                var i = R.Widget.isMandatory(c),
                    o;
                if (!i) {
                    return;
                }
                o = c.getElementsByTagName("input")[0];
                if (o) {
                    R.Event.registerListener(o, "focusout", this.handleCheckBoxFocusOutEvent.bind(this));
                }
            },
            applyPersonalization: function(c, v) {
                var o;
                o = c.getElementsByTagName("input")[0];
                if (o) {
                    o.checked = (o.checked || !!v);
                }
            },
            handleCheckBoxFocusOutEvent: function(e) {
                var c = e.target,
                    o = R.Util.findParentByClassName(c, "sapCpCheckBoxWidget");
                if (c.checked) {
                    R.Widget.toggleMissingMandatory(o, false);
                }
                R.ContentPage.checkMissingMandatoryFieldsLabel(o);
            },
            collectAnswer: function(c) {
                var i = R.Widget.isMandatory(c),
                    o = c.getElementsByTagName("input")[0],
                    b = false;
                if (o) {
                    b = o.checked;
                }
                if (i && !b) {
                    return false;
                }
                var a = {
                    WidgetKeyHash: R.Setting.get(c, "key"),
                    WidgetValueKeyHash: "",
                    Value: (b ? "X" : "")
                };
                return a;
            }
        },
        NoteWidget: {
            collectAnswer: function(n) {
                var w = R.Widget.isMandatory(n),
                    t = n.getElementsByTagName("textarea"),
                    N;
                if (t[0]) {
                    N = t[0].value;
                }
                if (w && !N) {
                    return false;
                }
                var a = {
                    WidgetKeyHash: R.Setting.get(n, "key"),
                    WidgetValueKeyHash: "",
                    Value: N
                };
                return a;
            }
        },
        DownloadWidget: {
            prepare: function(d) {
                var w = R.Widget.isMandatory(d),
                    c;
                if (!w) {
                    return;
                }
                c = d.getElementsByTagName("input");
                if (c[0]) {
                    R.Event.registerListener(c[0], "focusout", this.handleCheckBoxFocusOutEvent.bind(this));
                }
            },
            handleCheckBoxFocusOutEvent: function(e) {
                var c = e.target,
                    d = R.Util.findParentByClassName(c, "sapCpDownloadWidget");
                if (c.checked) {
                    R.Widget.toggleMissingMandatory(d, false);
                }
                R.ContentPage.checkMissingMandatoryFieldsLabel(d);
            },
            collectAnswer: function(d) {
                var w = R.Widget.isMandatory(d),
                    c = d.getElementsByTagName("input"),
                    b = false;
                if (c[0]) {
                    b = c[0].checked;
                }
                if (w && !b) {
                    return false;
                }
                var a = {
                    WidgetKeyHash: R.Setting.get(d, "key"),
                    WidgetValueKeyHash: "",
                    Value: (b ? "X" : "")
                };
                return a;
            }
        },
        InteractionWidget: {
            prepare: function(i) {
                var w = R.Widget.isMandatory(i),
                    c;
                if (!w) {
                    return;
                }
                c = i.getElementsByTagName("input");
                if (c[0]) {
                    R.Event.registerListener(c[0], "focusout", this.handleCheckBoxFocusOutEvent.bind(this));
                }
            },
            handleCheckBoxFocusOutEvent: function(e) {
                var c = e.target,
                    i = R.Util.findParentByClassName(c, "sapCpInteractionWidget");
                if (c.checked) {
                    R.Widget.toggleMissingMandatory(i, false);
                }
                R.ContentPage.checkMissingMandatoryFieldsLabel(i);
            },
            collectAnswer: function(i) {
                var w = R.Widget.isMandatory(i),
                    c = i.getElementsByTagName("input"),
                    b = false;
                if (c[0]) {
                    b = c[0].checked;
                }
                if (w && !b) {
                    return false;
                }
                var a = {
                    WidgetKeyHash: R.Setting.get(i, "key"),
                    WidgetValueKeyHash: "",
                    Value: (b ? "X" : "")
                };
                return a;
            }
        },
        ButtonWidget: {
            prepare: function(b) {
                var B;
                B = b.getElementsByTagName("button");
                if (B[0]) {
                    R.Event.registerListener(B[0], "click", this.handleButtonClickEvent.bind(this));
                }
            },
            handleButtonClickEvent: function(e) {
                var b = e.target,
                    B = R.Util.findParentByClassName(b, "sapCpButtonWidget");
                if (e.preventDefault) {
                    e.preventDefault();
                }
                R.Result.sendSubmit(B);
            },
            collectAnswer: function(b, c) {
                var a;
                if (b === c) {
                    a = {
                        WidgetKeyHash: R.Setting.get(b, "key"),
                        WidgetValueKeyHash: "",
                        Value: "X"
                    };
                }
                return a;
            },
            performFollowUpAction: function(b, c, f) {
                var F = R.Setting.get(b, "follow-up-action");
                if (!F || F === R.Constants.FollowUpAction.FollowUpPage) {
                    this.openFollowUpPage(f);
                } else if (F === R.Constants.FollowUpAction.SuccessMessage) {
                    R.ContentPage.toggleSuccessMessage(c, true);
                }
            },
            openFollowUpPage: function(f) {
                R.Util.openPage(window, f);
            },
            toggleDownloadLinkVisible: function(l, s) {
                R.CSS.toggleClass(l, "sapCpButtonWidgetDownloadLinkVisible", s);
            },
            toggleLoading: function(b, l) {
                var L = (typeof l === "undefined" ? !R.CSS.hasClass(b, "sapCpButtonWidgetLoading") : l),
                    B = b.getElementsByTagName("button"),
                    i;
                R.CSS.toggleClass(b, "sapCpButtonWidgetLoading", L);
                for (i = 0; i < B.length; i++) {
                    if (L) {
                        B[i].setAttribute("disabled", "disabled");
                    } else {
                        B[i].removeAttribute("disabled");
                    }
                }
            }
        },
        Result: {
            sendOpen: function(c, f) {
                var p = (R.Setting.get(c, "prefill-data") === "true"),
                    o = R.Result.buildOpen(c, p);
                R.Request.postResult(c, o, function(r) {
                    f(c, r);
                });
                if (!p) {
                    f(c, true);
                }
            },
            sendSubmit: function(c) {
                var o = R.Util.findParentByClassName(c, "sapCpContentPage"),
                    s = R.Result.buildSubmit(o, c),
                    v = true;
                R.ContentPage.toggleErrorMessage(o, false);
                R.ContentPage.toggleSuccessMessage(o, false);
                if (o.checkValidity) {
                    v = o.checkValidity();
                    R.ContentPage.toggleInvalid(o, !v);
                    if (o.reportValidity) {
                        o.reportValidity();
                    }
                }
                if (v && s) {
                    R.ContentPage.toggleMissingMandatoryField(o, false);
                    R.ButtonWidget.toggleLoading(c, true);
                    R.Request.postResult(o, s, function(r) {
                        R.Result.handleSubmitResponse(r, o, c);
                        R.ButtonWidget.toggleLoading(c, false);
                    });
                } else {
                    R.ContentPage.toggleMissingMandatoryField(o, true);
                }
            },
            buildOpen: function(c, p) {
                var r = this.buildResult(c, "OPEN");
                if (p) {
                    r.ContactPersonalizationData = [];
                }
                return r;
            },
            buildSubmit: function(c, o) {
                var r, a, m;
                r = this.buildResult(c, "SUBMIT");
                a = R.ContentPage.collectAnswers(c, o);
                m = !a;
                R.ContentPage.toggleMissingMandatoryField(c, m);
                if (m) {
                    return null;
                }
                r.Answers = a;
                r.ResultValues = [];
                return r;
            },
            buildResult: function(c, e) {
                var l = c.getElementsByClassName("sapCpLayout")[0];
                var r = {
                    ResultEvent: e,
                    ContentPageKeyHash: R.Setting.get(c, "key"),
                    LayoutKeyHash: R.Setting.get(l, "key"),
                    Url: R.Util.getCurrentUrl()
                };
                if (R.Setting.get(c, "lpkey")) {
                    r.LandingPageKeyHash = R.Setting.get(c, "lpkey");
                }
                if (R.ContentPage.isProductiveTestMode(c)) {
                    r.ProductiveTestMode = true;
                }
                var o = R.Util.getOutboundId();
                if (o) {
                    r.OutboundId = o;
                }
                var s = R.Util.getCampaignId();
                if (s) {
                    r.CampaignId = s;
                }
                return r;
            },
            handleSubmitResponse: function(r, c, o) {
                if (R.Request.isErrorResponse(r)) {
                    var e = (r && r.error && r.error.message && r.error.message.value || "Error");
                    if (this.checkMessagePresentable(r)) {
                        R.ContentPage.setErrorMessage(c, e);
                    } else {
                        R.ContentPage.setErrorMessage(c);
                    }
                    R.Console.warn(e);
                    R.ContentPage.toggleErrorMessage(c, true);
                    return;
                }
                if (r.ResultValues && r.ResultValues.results) {
                    this.handleResultValues(r.ResultValues.results, o);
                }
                R.ButtonWidget.performFollowUpAction(o, c, r.FollowUpPage);
            },
            checkMessagePresentable: function(r) {
                var b = false;
                var e;
                if (r && r.error && r.error.code) {
                    if (r.error.code.indexOf("HPA_COMMON/") === 0) {
                        e = r.error.code.substring(11);
                        if (e === "415" || (e >= 420 && e <= 428)) {
                            b = true;
                        }
                    }
                }
                return b;
            },
            handleResultValues: function(r, c) {
                var m, i;
                for (i = 0; i < r.length; i++) {
                    m = r[i];
                    if (m.WidgetValueName === R.Constants.WidgetValueName.DownloadURI) {
                        this.handleDownloadURI(m, c);
                    }
                }
            },
            handleDownloadURI: function(d, b) {
                var D = d.Value,
                    l, L, s, i;
                R.Util.openDownload(window, D);
                l = R.Node.getAllWithClassName(b, "sapCpLink");
                for (i = 0; i < l.length; i++) {
                    L = l[i];
                    s = R.Setting.get(L, "download-key");
                    if (s === d.WidgetKeyHash) {
                        L.href = D;
                        R.ButtonWidget.toggleDownloadLinkVisible(L, true);
                        break;
                    }
                }
            }
        },
        Request: {
            buildRequest: function(c, m, p) {
                var M = m,
                    P = this.appendScenarioParameter(p, c),
                    h = new XMLHttpRequest();
                if (C.CORS && !("withCredentials" in h)) {
                    if (typeof XDomainRequest === "function") {
                        h = new XDomainRequest();
                        if (M === "HEAD") {
                            M = "GET";
                        }
                    } else {
                        R.Console.warn("Cross-Domain requests are not supported in your browser.");
                        return null;
                    }
                }
                h.open(M, P, true);
                this.setRequestHeaders(h, c);
                h.withCredentials = true;
                return h;
            },
            appendScenarioParameter: function(p, c) {
                var P = p,
                    m = R.getConfig(c);
                if (m.AppendScenarioParameter) {
                    var s = "scenario=LPI",
                        t = "tenant=" + m.Tenant,
                        a = [s, t].join("&");
                    P += "?" + m.AppendScenarioParameter + "=" + btoa(a);
                }
                return P;
            },
            setRequestHeaders: function(h, c) {
                if (h.setRequestHeader) {
                    var m = R.getConfig(c);
                    h.setRequestHeader("Content-Type", "application/json");
                    h.setRequestHeader("Accept", "application/json");
                    if (m.CSRFTokenHeader) {
                        h.setRequestHeader(m.CSRFTokenHeader, (c.sapCpCSRFToken || "Fetch"));
                    }
                    return true;
                }
                return false;
            },
            send: function(h, d, s, e) {
                if (h instanceof XMLHttpRequest) {
                    h.onreadystatechange = function() {
                        if (h.DONE && h.readyState !== h.DONE || h.readyState !== XMLHttpRequest.DONE) {
                            return;
                        }
                        if (h.status >= 200 && h.status < 300) {
                            s(h);
                        } else {
                            e(h);
                        }
                    };
                } else {
                    h.onload = function() {
                        s(h);
                    };
                    h.onerror = function() {
                        e(h);
                    };
                    h.onprogress = function() {};
                    h.ontimeout = function() {};
                }
                if (d) {
                    h.send(JSON.stringify(d));
                } else {
                    h.send();
                }
            },
            fetchToken: function(c, f, u) {
                var h = (u ? "GET" : "HEAD"),
                    i, o, m, H;
                for (i = 0; i < c.length; i++) {
                    o = c[i];
                    m = R.getConfig(o);
                    H = this.buildRequest(o, h, m.BasePath);
                    if (!m.CSRFTokenHeader) {
                        f([o], true);
                        return;
                    }
                    this.send(H, null, function() {
                        if (H.getResponseHeader) {
                            o.sapCpCSRFToken = H.getResponseHeader(m.CSRFTokenHeader);
                        }
                        f([o], true);
                    }, function() {
                        if (!u) {
                            R.Request.fetchToken([o], f, true);
                        } else {
                            R.Console.warn("Technical error occurred.");
                            f([o], false);
                        }
                    });
                }
            },
            postResult: function(c, r, f) {
                var m = R.getConfig(c),
                    s = m.BasePath + m.ResultHeadersPath,
                    h = this.buildRequest(c, "POST", s);
                this.send(h, r, function() {
                    var a = JSON.parse(h.responseText);
                    if (typeof a === "string") {
                        a = JSON.parse(a);
                    }
                    a = (a && a.d || a);
                    f(a);
                }, function() {
                    R.Console.warn("Technical error occurred.");
                    var a = null;
                    if (h.responseText) {
                        a = JSON.parse(h.responseText);
                    }
                    f(a);
                });
            },
            isErrorResponse: function(r) {
                if (!r) {
                    return true;
                }
                return !!r.error;
            }
        },
        Setting: {
            get: function(n, s) {
                return n.getAttribute("data-sap-cp-" + s);
            }
        },
        Node: {
            getAllWithClassName: function(n, c) {
                if (n.getElementsByClassName) {
                    return n.getElementsByClassName(c);
                }
                if (n.querySelectorAll) {
                    return n.querySelectorAll("." + c);
                }
                R.Console.warn("Browser not supported!");
                return [];
            },
            getFirstWithClassName: function(n, c) {
                var N = R.Node.getAllWithClassName(n, c);
                if (N && N[0]) {
                    return N[0];
                }
                return null;
            }
        },
        CSS: {
            getClasses: function(n) {
                if (n.classList) {
                    return n.classList;
                }
                var c = n.getAttribute("class");
                return c.split(" ");
            },
            setClasses: function(n, c) {
                var s = c.join(" ");
                n.setAttribute("class", s);
            },
            hasClass: function(n, c) {
                if (n.classList && n.classList.contains) {
                    return n.classList.contains(c);
                }
                var a = this.getClasses(n);
                var i = a.indexOf(c);
                return (i >= 0);
            },
            addClass: function(n, c) {
                if (n.classList && n.classList.add) {
                    n.classList.add(c);
                    return;
                }
                var h = this.hasClass(n, c);
                if (h) {
                    return;
                }
                var a = this.getClasses(n);
                a.push(c);
                this.setClasses(n, a);
            },
            removeClass: function(n, c) {
                if (n.classList && n.classList.remove) {
                    n.classList.remove(c);
                    return;
                }
                var h = this.hasClass(n, c);
                if (!h) {
                    return;
                }
                var a = this.getClasses(n);
                var i = a.indexOf(c);
                a.splice(i, 1);
                this.setClasses(n, a);
            },
            toggleClass: function(n, c, a) {
                var A = a;
                if (typeof A === "undefined") {
                    A = !this.hasClass(n, c);
                }
                if (A) {
                    return this.addClass(n, c);
                }
                return this.removeClass(n, c);
            }
        },
        Util: {
            findParentByClassName: function(n, c) {
                if (!n || !c) {
                    return null;
                }
                if (R.CSS.hasClass(n, c)) {
                    return n;
                }
                var p = n.parentNode;
                if (!p || p === n) {
                    return null;
                }
                return this.findParentByClassName(p, c);
            },
            findWidgetByKey: function(w, W) {
                var o, i;
                for (i = 0; i < w.length; i++) {
                    o = w[i];
                    if (R.Setting.get(o, "key") === W) {
                        return o;
                    }
                }
                return null;
            },
            getCurrentUrl: function() {
                if (window !== window.top) {
                    return document.referrer;
                }
                return window.location.href;
            },
            getOutboundId: function() {
                return this.getURLParameter("sap-outbound-id");
            },
            getCampaignId: function() {
                return this.getURLParameter("sap-campaign-id");
            },
            getURLParameter: function(p) {
                var q = window.location.search.substring(1).split("&");
                for (var i = 0; i < q.length; i++) {
                    var P = q[i].split("="),
                        n = decodeURIComponent(P[0]);
                    if (n === p) {
                        return decodeURIComponent(P[1]);
                    }
                }
                return null;
            },
            prefixHttpProtocol: function(u) {
                var s = u.indexOf("/"),
                    d = u.indexOf("."),
                    p = u.indexOf("://");
                if (s === 0 || d === 0) {
                    return u;
                }
                if (p < 0 || s !== p + 1) {
                    return "http://" + u;
                }
                return u;
            },
            openPage: function(w, p) {
                if (!p) {
                    return;
                }
                var P = R.Util.prefixHttpProtocol(p);
                w.location.href = P;
            },
            openDownload: function(w, d) {
                if (!d) {
                    return;
                }
                var D = this.prefixHttpProtocol(d);
                w.open(D, "_blank");
            }
        },
        Event: {
            registerListener: function(n, e, l) {
                if (n.addEventListener) {
                    return n.addEventListener(e, l);
                }
                if (n.attachEvent) {
                    return n.attachEvent("on" + e, l);
                }
                R.Console.warn("Browser not supported!");
                return false;
            }
        },
        Console: {
            warn: function(m) {
                if (window.console && window.console.warn) {
                    window.console.warn(m);
                }
            }
        },
        Constants: {
            WidgetValueName: {
                DownloadURI: "DOWNLOAD_URI"
            },
            FollowUpAction: {
                FollowUpPage: "01",
                SuccessMessage: "02"
            }
        }
    };
    window.sap = (window.sap || {});
    window.sap.hpa = (window.sap.hpa || {});
    window.sap.hpa.cei = (window.sap.hpa.cei || {});
    window.sap.hpa.cei.cntpg = (window.sap.hpa.cei.cntpg || {});
    window.sap.hpa.cei.cntpg.run = (window.sap.hpa.cei.cntpg.run || R);
    if (window.sap.hpa.cei.cntpg.testEnvironment) {
        return;
    }
    R.Event.registerListener(document, "DOMContentLoaded", function() {
        R.initialize();
    });
    if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
        R.initialize();
    }
}());
;
//# sourceMappingURL=scripts.js.map