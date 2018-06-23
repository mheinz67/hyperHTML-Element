var HyperHTMLElement=function(e){"use strict";const t=document.defaultView,n=1,r=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,o="http://www.w3.org/2000/svg",s="connected",i="dis"+s,l=/^style|textarea$/i,c="_hyper: "+(Math.random()*new Date|0)+";",a="\x3c!--"+c+"--\x3e";let u=t.Event;try{new u("Event")}catch(e){u=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}const h=t.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,r){t[e.push(n)-1]=r}}};let d=0;const f=t.WeakMap||function(){const e=c+d++;return{get:t=>t[e],set(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},p=t.WeakSet||function(){const e=new f;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}},m=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString),g=c.trim||function(){return this.replace(/^\s+|\s+$/g,"")};function b(){return this}const y=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||(this[e]=t.call(this,e))},set(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}},v={},w=[],N=v.hasOwnProperty;let E=0;var x=(e,t)=>{e in v||(E=w.push(e)),v[e]=t},C=(e,t)=>{for(let n=0;n<E;n++){let r=w[n];if(N.call(e,r))return v[r](e[r],t)}};const $=(e,t)=>_(e).createElement(t),_=e=>e.ownerDocument||e,S=e=>_(e).createDocumentFragment(),O=(e,t)=>_(e).createTextNode(t),A=" \\f\\n\\r\\t",j="[ "+A+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",T="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",k="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",L=new RegExp(T+j+k+"+)([ "+A+"]*/?>)","g"),P=new RegExp(T+j+k+"*)([ "+A+"]*/>)","g"),M=S(document),D="append"in M,R="content"in $(document,"template");M.appendChild(O(M,"g")),M.appendChild(O(M,""));const B=1===M.cloneNode(!0).childNodes.length,H="importNode"in document,z=D?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e.appendChild(t[r])},Z=new RegExp("("+j+"=)(['\"]?)"+a+"\\2","gi"),F=(e,t,n,r)=>"<"+t+n.replace(Z,I)+r,I=(e,t,n)=>t+(n||'"')+c+(n||'"'),V=(e,t)=>("ownerSVGElement"in e?X:Q)(e,t.replace(L,F)),G=B?e=>{const t=e.cloneNode(),n=e.childNodes||[],r=n.length;for(let e=0;e<r;e++)t.appendChild(G(n[e]));return t}:e=>e.cloneNode(!0),W=e=>{const t=[],r=e.childNodes,o=r.length;for(let e=0;e<o;e++)r[e].nodeType===n&&t.push(r[e]);return t},q=H?(e,t)=>e.importNode(t,!0):(e,t)=>G(t),K=[].slice,U=e=>J(e);let J=e=>{if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((t.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};J=(t=>{const n="^"+t.join("^");return e[n]||(e[n]=t)})}else J=(e=>e);return J(e)};const Q=R?(e,t)=>{const n=$(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const n=$(e,"template"),r=S(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;n.innerHTML="<table>"+t+"</table>",z(r,K.call(n.querySelectorAll(e)))}else n.innerHTML=t,z(r,K.call(n.childNodes));return r},X=R?(e,t)=>{const n=S(e),r=_(e).createElementNS(o,"svg");return r.innerHTML=t,z(n,K.call(r.childNodes)),n}:(e,t)=>{const n=S(e),r=$(e,"div");return r.innerHTML='<svg xmlns="'+o+'">'+t+"</svg>",z(n,K.call(r.firstChild.childNodes)),n};function Y(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}Y.prototype.insert=function(){const e=S(this.first);return z(e,this.childNodes),e},Y.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=_(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};const ee=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};var te=(e,t,r)=>({type:e,name:r,node:t,path:(e=>{const t=[];let r;switch(e.nodeType){case n:case 11:r=e;break;case 8:r=e.parentNode,ee(t,r,e);break;default:r=e.ownerElement}for(e=r;r=r.parentNode;e=r)ee(t,r,e);return t})(t)}),ne=(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e=e.childNodes[t[r]];return e};const re=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;const oe=(e,t)=>{let n,r;return o=>{switch(typeof o){case"object":if(o){if("object"===n){if(!t&&r!==o)for(const t in r)t in o||(e[t]="")}else t?e.value="":e.cssText="";const s=t?{}:e;for(const e in o){const t=o[e];s[e]="number"!=typeof t||re.test(e)?t:t+"px"}n="object",t?e.value=le(r=s):r=o;break}default:r!=o&&(n="string",r=o,t?e.value=o||"":e.cssText=o||"")}}},se=/([^A-Z])([A-Z]+)/g,ie=(e,t,n)=>t+"-"+n.toLowerCase(),le=e=>{const t=[];for(const n in e)t.push(n.replace(se,ie),":",e[n],";");return t.join("")},ce=e=>e,ae=(e,t,n,r)=>{if(null==r)t.removeChild(e(n,-1));else{const o=t.ownerDocument.createRange();o.setStartBefore(e(n,-1)),o.setEndAfter(e(r,-1)),o.deleteContents()}},ue=(e,t,n,r,o)=>{const s=r||ce,i=null==o?null:s(o,0);let l=0,c=0,a=t.length-1,u=t[0],h=t[a],d=n.length-1,f=n[0],p=n[d];for(;l<=a&&c<=d;)if(null==u)u=t[++l];else if(null==h)h=t[--a];else if(null==f)f=n[++c];else if(null==p)p=n[--d];else if(u==f)u=t[++l],f=n[++c];else if(h==p)h=t[--a],p=n[--d];else if(u==p)e.insertBefore(s(u,1),s(h,-0).nextSibling),u=t[++l],p=n[--d];else if(h==f)e.insertBefore(s(h,1),s(u,0)),h=t[--a],f=n[++c];else{let r=t.indexOf(f);if(r<0)e.insertBefore(s(f,1),s(u,0)),f=n[++c];else{let o=r,i=c;for(;o<=a&&i<=d&&t[o]===n[i];)o++,i++;if(1<o-r)--r===l?e.removeChild(s(u,-1)):ae(s,e,u,t[r]),l=o,c=i,u=t[o],f=n[i];else{const o=t[r];t[r]=null,e.insertBefore(s(o,1),s(u,0)),f=n[++c]}}}if(l<=a||c<=d)if(l>a){const t=n[d+1],r=null==t?i:s(t,0);if(c===d)e.insertBefore(s(n[c],1),r);else{const t=e.ownerDocument.createDocumentFragment();for(;c<=d;)t.appendChild(s(n[c++],1));e.insertBefore(t,r)}}else null==t[l]&&l++,l===a?e.removeChild(s(t[l],-1)):ae(s,e,t[l],t[a]);return n},he=new p;function de(){}de.prototype=Object.create(null);const fe=e=>({html:e}),pe=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===Y?1/t<0?t?e.remove():e.last:t?e.insert():e.first:pe(e.render(),t),me=(e,t,r)=>{const o=e.childNodes,s=o.length;for(let i=0;i<s;i++){let s=o[i];switch(s.nodeType){case n:ge(s,t,r),me(s,t,r);break;case 8:s.textContent===c&&(r.shift(),t.push(l.test(e.nodeName)?te("text",e):te("any",s)));break;case 3:l.test(e.nodeName)&&g.call(s.textContent)===a&&(r.shift(),t.push(te("text",e)))}}},ge=(e,t,n)=>{const r=new de,o=e.attributes,s=K.call(o),i=[],l=s.length;for(let e=0;e<l;e++){const l=s[e];if(l.value===c){const e=l.name;if(!(e in r)){const s=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");r[e]=o[s]||o[s.toLowerCase()],t.push(te("attr",r[e],s))}i.push(l)}}const a=i.length;for(let t=0;t<a;t++){const n=i[t];/^id$/i.test(n.name)?e.removeAttribute(n.name):e.removeAttributeNode(i[t])}const u=e.nodeName;if(/^script$/i.test(u)){const t=document.createElement(u);for(let e=0;e<o.length;e++)t.setAttributeNode(o[e].cloneNode(!0));t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},be=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(fe).then(t):Promise.resolve(C(e,t)).then(t)},ye=e=>null!=e&&"then"in e,ve=(e,t)=>{let n,r=!1;const o=s=>{switch(typeof s){case"string":case"number":case"boolean":r?n!==s&&(n=s,t[0].textContent=s):(r=!0,n=s,t=ue(e.parentNode,t,[O(e,s)],pe,e));break;case"object":case"undefined":if(null==s){r=!1,t=ue(e.parentNode,t,[],pe,e);break}default:if(r=!1,n=s,m(s))if(0===s.length)t.length&&(t=ue(e.parentNode,t,[],pe,e));else switch(typeof s[0]){case"string":case"number":case"boolean":o({html:s});break;case"object":if(m(s[0])&&(s=s.concat.apply([],s)),ye(s[0])){Promise.all(s).then(o);break}default:t=ue(e.parentNode,t,s,pe,e)}else(e=>"ELEMENT_NODE"in e||e instanceof Y||e instanceof b)(s)?t=ue(e.parentNode,t,11===s.nodeType?K.call(s.childNodes):[s],pe,e):ye(s)?s.then(o):"placeholder"in s?be(s,o):"text"in s?o(String(s.text)):"any"in s?o(s.any):"html"in s?t=ue(e.parentNode,t,K.call(V(e,[].concat(s.html).join("")).childNodes),pe,e):o("length"in s?K.call(s):C(s,o))}};return o},we=(e,t,r)=>{const o="ownerSVGElement"in e;let l;if("style"===t)return((e,t,n)=>{if(n){const r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),oe(r,n)}return oe(e.style,n)})(e,r,o);if(/^on/.test(t)){let r=t.slice(2);return r===s||r===i?(xe&&(xe=!1,function(){const e=(e,r)=>{const o=new u(r),s=e.length;for(let r=0;r<s;r++){let s=e[r];s.nodeType===n&&t(s,o)}},t=(e,n)=>{he.has(e)&&e.dispatchEvent(n);const r=e.children||W(e),o=r.length;for(let e=0;e<o;e++)t(r[e],n)};try{new MutationObserver(t=>{const n=t.length;for(let r=0;r<n;r++){let n=t[r];e(n.removedNodes,i),e(n.addedNodes,s)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],i)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],s)},!1)}}()),he.add(e)):t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{l!==t&&(l&&e.removeEventListener(r,l,!1),l=t,t&&e.addEventListener(r,t,!1))}}if("data"===t||!o&&t in e)return n=>{l!==n&&(l=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};{let t=!1;const n=r.cloneNode(!0);return r=>{l!==r&&(l=r,n.value!==r&&(null==r?(t&&(t=!1,e.removeAttributeNode(n)),n.value=r):(n.value=r,t||(t=!0,e.setAttributeNode(n)))))}}},Ne=e=>{let t;const n=r=>{t!==r&&(t=r,"object"==typeof r&&r?ye(r)?r.then(n):"placeholder"in r?be(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?K.call(r).join(""):C(r,n)):e.textContent=null==r?"":r)};return n};var Ee={create:(e,t)=>{const n=[],r=t.length;for(let o=0;o<r;o++){const r=t[o],s=ne(e,r.path);switch(r.type){case"any":n.push(ve(s,[]));break;case"attr":n.push(we(s,r.name,r.node));break;case"text":n.push(Ne(s)),s.textContent=""}}return n},find:me};let xe=!0;const Ce=new f,$e=(()=>{try{const e=new f,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(e){return new h}})();function _e(e){const t=Ce.get(this);return t&&t.template===U(e)?Se.apply(t.updates,arguments):function(e){e=U(e);const t=$e.get(e)||function(e){const t=[],n=e.join(a).replace(Oe,Ae),r=V(this,n);Ee.find(r,t,e.slice());const o={fragment:r,paths:t};return $e.set(e,o),o}.call(this,e),n=q(this.ownerDocument,t.fragment),r=Ee.create(n,t.paths);Ce.set(this,{template:e,updates:r}),Se.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}function Se(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}const Oe=P,Ae=(e,t,n)=>r.test(t)?e:"<"+t+n+"></"+t+">",je=new f,Te=(e,t)=>null==e?ke(t||"html"):Le(e,t||"html"),ke=e=>{let t,n,r,s,i;return function(l){l=U(l);let c=s!==l;return c&&(s=l,r=S(document),n="svg"===e?document.createElementNS(o,"svg"):r,i=_e.bind(n)),i.apply(null,arguments),c&&("svg"===e&&z(r,K.call(n.childNodes)),t=Pe(r)),t}},Le=(e,t)=>{const n=t.indexOf(":");let r=je.get(e),o=t;return-1<n&&(o=t.slice(n+1),t=t.slice(0,n)||"html"),r||je.set(e,r={}),r[o]||(r[o]=ke(t))},Pe=e=>{const t=e.childNodes,r=t.length,o=[];for(let e=0;e<r;e++){let r=t[e];r.nodeType!==n&&0===g.call(r.textContent).length||o.push(r)}return 1===o.length?o[0]:new Y(o)},Me=e=>_e.bind(e),De=x;function Re(e){return arguments.length<2?null==e?ke("html"):"string"==typeof e?Re.wire(null,e):"raw"in e?ke("html")(e):"nodeType"in e?Re.bind(e):Le(e,"html"):("raw"in e?ke("html"):Re.wire).apply(null,arguments)}
/*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */Re.Component=b,Re.bind=Me,Re.define=De,Re.diff=ue,Re.hyper=Re,Re.wire=Te,function(e){const t=new f,n=Object.create,r=(e,t)=>{const n={w:null,p:null};return t.set(e,n),n};Object.defineProperties(b,{for:{configurable:!0,value(e,o){return((e,t,o,s)=>{const i=t.get(e)||r(e,t);switch(typeof s){case"object":case"function":const t=i.w||(i.w=new f);return t.get(s)||((e,t,n)=>(e.set(t,n),n))(t,s,new e(o));default:const r=i.p||(i.p=n(null));return r[s]||(r[s]=new e(o))}})(this,t.get(e)||(e=>{const n=new h;return t.set(e,n),n})(e),e,null==o?"default":o)}}}),Object.defineProperties(b.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:y("html",e),svg:y("svg",e),state:y("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}})}(ke);const Be=Object,He=[],ze=Be.defineProperty,Ze=Be.getOwnPropertyDescriptor,Fe=Be.getOwnPropertyNames,Ie=Be.getOwnPropertySymbols||(()=>[]),Ve=Be.getPrototypeOf||(e=>e.__proto__),Ge="object"==typeof Reflect&&Reflect.ownKeys||(e=>Fe(e).concat(Ie(e))),We=Be.setPrototypeOf||((e,t)=>(e.__proto__=t,e));class qe extends HTMLElement{static define(e,t){const n=this,r=n.prototype;(n.observedAttributes||[]).forEach(e=>{e in r||ze(r,e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),{configurable:!0,get(){return this.getAttribute(e)},set(t){this.setAttribute(e,t)}})});const o=r.attributeChangedCallback,s=!!o,i=r.created;if(i){ze(r,"_init$",{configurable:!0,writable:!0,value:!0}),ze(r,"attributeChangedCallback",{configurable:!0,value:function e(t,n,r){if(this._init$&&(Ue.call(this,i),this._init$))return this._init$$.push(e.bind(this,t,n,r));s&&n!==r&&o.apply(this,arguments)}});const e=r.connectedCallback,t=!!e;ze(r,"connectedCallback",{configurable:!0,value:function n(){if(this._init$&&(Ue.call(this,i),this._init$))return this._init$$.push(n.bind(this));t&&e.apply(this,arguments)}})}else s&&ze(r,"attributeChangedCallback",{configurable:!0,value(e,t,n){t!==n&&o.apply(this,arguments)}});if(Fe(r).forEach(e=>{if(/^handle[A-Z]/.test(e)){const t="_"+e+"$",n=r[e];ze(r,e,{configurable:!0,get(){return this[t]||(this[t]=n.bind(this))}})}}),"handleEvent"in r||ze(r,"handleEvent",{configurable:!0,value(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}}),t&&t.extends){const o=document.createElement(t.extends).constructor,s=class extends o{},i=Ve(n);Ge(i).filter(e=>["length","name","arguments","caller","prototype"].indexOf(e)<0).forEach(e=>ze(s,e,Ze(i,e))),Ge(i.prototype).forEach(e=>ze(s.prototype,e,Ze(i.prototype,e))),We(n,s),We(r,s.prototype),customElements.define(e,n,t)}else customElements.define(e,n);return He.push(n),n}get html(){return this._html$||(this.html=Me(this.shadowRoot||this._shadowRoot||this))}set html(e){ze(this,"_html$",{configurable:!0,value:e})}render(){}get defaultState(){return{}}get state(){return this._state$||(this.state=this.defaultState)}set state(e){ze(this,"_state$",{configurable:!0,value:e})}setState(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}qe.Component=b,qe.bind=Me,qe.intent=De,qe.wire=Te,qe.hyper=Re;try{Symbol.hasInstance&&He.push(ze(qe,Symbol.hasInstance,{enumerable:!1,configurable:!0,value:e=>He.some(Qe,Ve(e))}))}catch(e){}const Ke={type:"DOMContentLoaded",handleEvent(){Ke.ready()?(document.removeEventListener(Ke.type,Ke,!1),Ke.list.splice(0).forEach(Je)):setTimeout(Ke.handleEvent)},ready:()=>"complete"===document.readyState,list:[]};function Ue(e){if(Ke.ready()||function(e){let t=this;do{if(t.nextSibling)return!0}while(t=t.parentNode);return setTimeout(Ue.bind(this,e)),!1}.call(this,e)){if(this._init$){const t=this._init$$;t&&delete this._init$$,e.call(ze(this,"_init$",{value:!1})),t&&t.forEach(Je)}}else this.hasOwnProperty("_init$$")||ze(this,"_init$$",{configurable:!0,value:[]}),Ke.list.push(Ue.bind(this,e))}function Je(e){e()}function Qe(e){return this===e.prototype}return Ke.ready()||document.addEventListener(Ke.type,Ke,!1),e.default=qe,e.default}({});