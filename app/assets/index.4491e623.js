const ct=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};ct();const P={};function z(e){P.context=e}const at=(e,t)=>e===t,ut=Symbol("solid-proxy"),ft=Symbol("solid-track"),ce={equals:at};let qe=We;const F={},j=1,ae=2,Ke={owned:null,cleanups:null,context:null,owner:null},[dt,jn]=E(!1);var w=null;let ne=null,b=null,G=null,C=null,R=null,Se=0;function Q(e,t){const n=b,r=w,s=e.length===0,o=s?Ke:{owned:null,cleanups:null,context:null,owner:t||r},l=s?e:()=>e(()=>Ce(o));w=o,b=null;try{return he(l,!0)}finally{b=n,w=r}}function E(e,t){t=t?Object.assign({},ce,t):ce;const n={value:e,observers:null,observerSlots:null,pending:F,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==F?n.pending:n.value)),Ee(n,s));return[He.bind(n),r]}function ye(e,t,n){const r=de(e,t,!0,j);H(r)}function I(e,t,n){const r=de(e,t,!1,j);H(r)}function ht(e,t,n){qe=$t;const r=de(e,t,!1,j);r.user=!0,R?R.push(r):H(r)}function A(e,t,n){n=n?Object.assign({},ce,n):ce;const r=de(e,t,!0,0);return r.pending=F,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,H(r),He.bind(r)}function gt(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={});const r=new Set,[s,o]=E(n.initialValue),[l,i]=E(void 0,{equals:!1}),[u,c]=E(!1),[a,d]=E();let f,g=null,h=null,_=null,L=!1,O="initialValue"in n,x=typeof e=="function"&&A(e);P.context&&(_=`${P.context.id}${P.context.count++}`,P.load&&(h=P.load(_)));function S(m,p,y,$){return g===m&&(g=null,O=!0,h&&(m===h||p===h)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated($,{value:p})),h=null,d(f=y),N(p)),p}function N(m){ue(()=>{o(()=>m),c(!1);for(const p of r.keys())p.decrement();r.clear()})}function k(){const m=bt,p=s();if(f)throw f;return b&&!b.user&&m&&ye(()=>{l(),g&&(m.resolved||r.has(m)||(m.increment(),r.add(m)))}),p}function B(m=!0){if(m&&L)return;L=!1,d(f=void 0);const p=x?x():e;if(p==null||p===!1){S(g,T(s));return}const y=h||T(()=>t(p,{value:s(),refetching:m}));return typeof y!="object"||!("then"in y)?(S(g,y),y):(g=y,L=!0,queueMicrotask(()=>L=!1),ue(()=>{c(!0),i()}),y.then($=>S(y,$,void 0,p),$=>S(y,$,$)))}return Object.defineProperties(k,{loading:{get(){return u()}},error:{get(){return a()}},latest:{get(){if(!O)return k();if(f)throw f;return s()}}}),x?ye(()=>B(!1)):B(!1),[k,{refetch:B,mutate:o}]}function ue(e){if(G)return e();let t;const n=G=[];try{t=e()}finally{G=null}return he(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==F){const o=s.pending;s.pending=F,Ee(s,o)}}},!1),t}function T(e){let t,n=b;return b=null,t=e(),b=n,t}function Fe(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(o){o=!1;return}const u=T(()=>t(i,s,l));return s=i,u}}function $e(e){ht(()=>T(e))}function ve(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function mt(){return w}function pt(e,t){const n=w;w=e;try{return he(t,!0)}finally{w=n}}function yt(e){const t=b,n=w;return Promise.resolve().then(()=>{b=t,w=n;let r;return ue(e),b=w=null,r?r.done:void 0})}function wt(){return[dt,yt]}function Ve(e){const t=Symbol("context");return{id:t,Provider:vt(t),defaultValue:e}}function Ae(e){let t;return(t=ze(w,e.id))!==void 0?t:e.defaultValue}function Pe(e){const t=A(e);return A(()=>we(t()))}let bt;function He(){const e=ne;if(this.sources&&(this.state||e)){const t=C;C=null,this.state===j||e?H(this):fe(this),C=t}if(b){const t=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(t)):(b.sources=[this],b.sourceSlots=[t]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function Ee(e,t,n){if(G)return e.pending===F&&G.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&he(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];r&&ne.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?C.push(o):R.push(o),o.observers&&Je(o)),r||(o.state=j)}if(C.length>1e6)throw C=[],new Error},!1),t}function H(e){if(!e.fn)return;Ce(e);const t=w,n=b,r=Se;b=w=e,xt(e,e.value,r),b=n,w=t}function xt(e,t,n){let r;try{r=e.fn(t)}catch(s){Xe(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?Ee(e,r):e.value=r,e.updatedAt=n)}function de(e,t,n,r=j,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:null,pure:n};return w===null||w!==Ke&&(w.owned?w.owned.push(o):w.owned=[o]),o}function Y(e){const t=ne;if(e.state===0||t)return;if(e.state===ae||t)return fe(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Se);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===j||t)H(e);else if(e.state===ae||t){const s=C;C=null,fe(e,n[0]),C=s}}function he(e,t){if(C)return e();let n=!1;t||(C=[]),R?n=!0:R=[],Se++;try{const r=e();return St(n),r}catch(r){C||(R=null),Xe(r)}}function St(e){C&&(We(C),C=null),!e&&(R.length?ue(()=>{qe(R),R=null}):R=null)}function We(e){for(let t=0;t<e.length;t++)Y(e[t])}function $t(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:Y(s)}P.context&&z();const r=e.length;for(t=0;t<n;t++)Y(e[t]);for(t=r;t<e.length;t++)Y(e[t])}function fe(e,t){const n=ne;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===j||n?s!==t&&Y(s):(s.state===ae||n)&&fe(s,t))}}function Je(e){const t=ne;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ae,r.pure?C.push(r):R.push(r),r.observers&&Je(r))}}function Ce(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)Ce(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Xe(e){throw e}function ze(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ze(e.owner,t):void 0}function we(e){if(typeof e=="function"&&!e.length)return we(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=we(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function vt(e){return function(n){let r;return ye(()=>r=T(()=>(w.context={[e]:n.value},Pe(()=>n.children)))),r}}const At=Symbol("fallback");function Oe(e){for(let t=0;t<e.length;t++)e[t]()}function Pt(e,t,n={}){let r=[],s=[],o=[],l=0,i=t.length>1?[]:null;return ve(()=>Oe(o)),()=>{let u=e()||[],c,a;return u[ft],T(()=>{let f=u.length,g,h,_,L,O,x,S,N,k;if(f===0)l!==0&&(Oe(o),o=[],r=[],s=[],l=0,i&&(i=[])),n.fallback&&(r=[At],s[0]=Q(B=>(o[0]=B,n.fallback())),l=1);else if(l===0){for(s=new Array(f),a=0;a<f;a++)r[a]=u[a],s[a]=Q(d);l=f}else{for(_=new Array(f),L=new Array(f),i&&(O=new Array(f)),x=0,S=Math.min(l,f);x<S&&r[x]===u[x];x++);for(S=l-1,N=f-1;S>=x&&N>=x&&r[S]===u[N];S--,N--)_[N]=s[S],L[N]=o[S],i&&(O[N]=i[S]);for(g=new Map,h=new Array(N+1),a=N;a>=x;a--)k=u[a],c=g.get(k),h[a]=c===void 0?-1:c,g.set(k,a);for(c=x;c<=S;c++)k=r[c],a=g.get(k),a!==void 0&&a!==-1?(_[a]=s[c],L[a]=o[c],i&&(O[a]=i[c]),a=h[a],g.set(k,a)):o[c]();for(a=x;a<f;a++)a in _?(s[a]=_[a],o[a]=L[a],i&&(i[a]=O[a],i[a](a))):s[a]=Q(d);s=s.slice(0,l=f),r=u.slice(0)}return s});function d(f){if(o[a]=f,i){const[g,h]=E(a);return i[a]=h,t(u[a],g)}return t(u[a])}}}function v(e,t){return T(()=>e(t||{}))}function se(){return!0}const Ge={get(e,t,n){return t===ut?n:e.get(t)},has(e,t){return e.has(t)},set:se,deleteProperty:se,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:se,deleteProperty:se}},ownKeys(e){return e.keys()}};function pe(e){return(e=typeof e=="function"?e():e)==null?{}:e}function Qe(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=pe(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in pe(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(pe(e[n])));return[...new Set(t)]}},Ge)}function Et(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),s=t.map(o=>{const l={};for(let i=0;i<o.length;i++){const u=o[i];Object.defineProperty(l,u,r[u]?r[u]:{get(){return e[u]},set(){return!0}})}return l});return s.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},Ge)),s}function Ye(e){let t,n;const r=s=>{const o=P.context;if(o){const[i,u]=E();(n||(n=e())).then(c=>{z(o),u(()=>c.default),z()}),t=i}else if(t){const i=t();if(i)return i(s)}else{const[i]=gt(()=>(n||(n=e())).then(u=>u.default));t=i}let l;return A(()=>(l=t())&&T(()=>{if(!o)return l(s);const i=P.context;z(o);const u=l(s);return z(i),u}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}function Ct(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(Pt(()=>e.each,e.children,t||void 0))}function Ze(e){let t=!1;const n=A(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return A(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?T(()=>s(r)):s}return e.fallback})}const Lt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],_t=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Lt]),Nt=new Set(["innerHTML","textContent","innerText","children"]),kt={className:"class",htmlFor:"for"},Te={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Ot=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Tt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function oe(e,t){return A(e,void 0,t?void 0:{equals:t})}function Rt(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,u=t[s-1].nextSibling,c=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const a=o<r?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],a)}else if(o===i)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],a),t[s]=n[o]}else{if(!c){c=new Map;let d=i;for(;d<o;)c.set(n[d],d++)}const a=c.get(t[l]);if(a!=null)if(i<a&&a<o){let d=l,f=1,g;for(;++d<s&&d<o&&!((g=c.get(t[d]))==null||g!==a+f);)f++;if(f>a-i){const h=t[l];for(;i<a;)e.insertBefore(n[i++],h)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Re="_$DX_DELEGATE";function It(e,t,n){let r;return Q(s=>{r=s,t===document?e():ee(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function M(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function ge(e,t=window.document){const n=t[Re]||(t[Re]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Vt))}}function be(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function jt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Mt(e,t){t==null?e.removeAttribute("class"):e.className=t}function Bt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function Dt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const i=s[o];!i||i==="undefined"||t[i]||(Ie(e,i,!1),delete n[i])}for(o=0,l=r.length;o<l;o++){const i=r[o],u=!!t[i];!i||i==="undefined"||n[i]===u||!u||(Ie(e,i,!0),n[i]=u)}return n}function Ut(e,t,n={}){const r=e.style,s=typeof n=="string";if(t==null&&s||typeof t=="string")return r.cssText=t;s&&(r.cssText=void 0,n={}),t||(t={});let o,l;for(l in n)t[l]==null&&r.removeProperty(l),delete n[l];for(l in t)o=t[l],o!==n[l]&&(r.setProperty(l,o),n[l]=o);return n}function qt(e,t,n,r){typeof t=="function"?I(s=>Me(e,t(),s,n,r)):Me(e,t,void 0,n,r)}function ee(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return V(e,t,r,n);I(s=>V(e,t(),s,n),r)}function Kt(e,t,n,r,s={},o=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;je(e,l,null,s[l],n,o)}for(const l in t){if(l==="children"){r||V(e,t.children);continue}const i=t[l];s[l]=je(e,l,i,s[l],n,o)}}function Ft(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ie(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function je(e,t,n,r,s,o){let l,i,u;if(t==="style")return Ut(e,n,r);if(t==="classList")return Dt(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);r&&e.removeEventListener(c,r),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);r&&e.removeEventListener(c,r,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),a=Ot.has(c);if(!a&&r){const d=Array.isArray(r)?r[0]:r;e.removeEventListener(c,d)}(a||n)&&(Bt(e,c,n,a),a&&ge([c]))}else if((u=Nt.has(t))||!s&&(Te[t]||(i=_t.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?Mt(e,n):l&&!i&&!u?e[Ft(t)]=n:e[Te[t]||t]=n;else{const c=s&&t.indexOf(":")>-1&&Tt[t.split(":")[0]];c?jt(e,c,t,n):be(e,kt[t]||t,n)}return n}function Vt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),P.registry&&!P.done&&(P.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Me(e,t,n={},r,s){return t||(t={}),!s&&"children"in t&&I(()=>n.children=V(e,t.children,n.children)),t.ref&&t.ref(e),I(()=>Kt(e,t,r,!0,n,!0)),n}function V(e,t,n,r,s){for(P.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(P.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=q(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(P.context)return n;n=q(e,n,r)}else{if(o==="function")return I(()=>{let i=t();for(;typeof i=="function";)i=i();n=V(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],u=n&&Array.isArray(n);if(xe(i,t,n,s))return I(()=>n=V(e,i,n,r,!0)),()=>n;if(P.context){for(let c=0;c<i.length;c++)if(i[c].parentNode)return n=i}if(i.length===0){if(n=q(e,n,r),l)return n}else u?n.length===0?Be(e,i,r):Rt(e,n,i):(n&&q(e),Be(e,i));n=i}else if(t instanceof Node){if(P.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=q(e,n,r,t);q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function xe(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],u=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=xe(e,i,u)||s;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();s=xe(e,Array.isArray(i)?i:[i],u)||s}else e.push(i),s=!0;else{const c=String(i);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return s}function Be(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function q(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const u=i.parentNode===e;!o&&!l?u?e.replaceChild(s,i):e.insertBefore(s,n):u&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}function Ht(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Wt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Jt(e){try{return document.querySelector(e)}catch{return null}}function Xt(e,t){const n=Jt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function zt(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=Wt(E(o(e()),{equals:(i,u)=>i.value===u.value}),void 0,i=>(!s&&t(i),i));return n&&ve(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function Gt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:E({value:""})};return e}function Qt(){return zt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Xt(window.location.hash.slice(1),n)},e=>Ht(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Yt=/^(?:[a-z0-9]+:)?\/\//i,Zt=/^\/+|\/+$/g;function Z(e,t=!1){const n=e.replace(Zt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function le(e,t,n){if(Yt.test(t))return;const r=Z(e),s=n&&Z(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+Z(t,!o)}function en(e,t){if(e==null)throw new Error(t);return e}function et(e,t){return Z(e).replace(/\/*(\*.*)?$/g,"")+Z(t)}function tn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function K(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function nn(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return l=>{const i=l.split("/").filter(Boolean),u=i.length-o;if(u<0||u>0&&r===void 0&&!t)return null;const c={path:o?"":"/",params:{}};for(let a=0;a<o;a++){const d=s[a],f=i[a];if(d[0]===":")c.params[d.slice(1)]=f;else if(d.localeCompare(f,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${f}`}return r&&(c.params[r]=u?i.slice(-u).join("/"):""),c}}function rn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function tt(e){const t=new Map,n=mt();return new Proxy({},{get(r,s){return t.has(s)||pt(n,()=>t.set(s,A(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function nt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return nt(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const sn=100,rt=Ve(),me=Ve(),Le=()=>en(Ae(rt),"Make sure your app is wrapped in a <Router />");let te;const _e=()=>te||Ae(me)||Le().base,on=e=>{const t=_e();return A(()=>t.resolvePath(e()))},ln=e=>{const t=Le();return A(()=>{const n=e();return n!==void 0?t.renderPath(n):n})};function cn(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>v(r,{}):()=>{const{element:u}=e;return u===void 0&&n?v(n,{}):u},preload:e.component?r.preload:e.preload,data:s};return st(e.path).reduce((u,c)=>{for(const a of nt(c)){const d=et(t,a),f=l?d:d.split("/*",1)[0];u.push({...i,originalPath:a,pattern:f,matcher:nn(f,!l)})}return u},[])}function an(e,t=0){return{routes:e,score:rn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function st(e){return Array.isArray(e)?e:[e]}function ot(e,t="",n,r=[],s=[]){const o=st(e);for(let l=0,i=o.length;l<i;l++){const u=o[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=cn(u,t,n);for(const a of c){if(r.push(a),u.children)ot(u.children,a.pattern,n,r,s);else{const d=an([...r],s.length);s.push(d)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function un(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function fn(e,t){const n=new URL("http://sar"),r=A(u=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),u}},n,{equals:(u,c)=>u.href===c.href}),s=A(()=>K(r().pathname)),o=A(()=>K(r().search,!0)),l=A(()=>K(r().hash)),i=A(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:tt(Fe(o,()=>tn(r())))}}function dn(e,t="",n,r){const{signal:[s,o],utils:l={}}=Gt(e),i=l.parsePath||(m=>m),u=l.renderPath||(m=>m),c=le("",t),a=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[d,f]=wt(),[g,h]=E(s().value),[_,L]=E(s().state),O=fn(g,_),x=[],S={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(m){return le(c,m)}};if(n)try{te=S,S.data=n({data:void 0,params:{},location:O,navigate:k(S)})}finally{te=void 0}function N(m,p,y){T(()=>{if(typeof p=="number"){p&&(l.go?l.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:$,resolve:W,scroll:J,state:re}={replace:!1,resolve:!0,scroll:!0,...y},D=W?m.resolvePath(p):le("",p);if(D===void 0)throw new Error(`Path '${p}' is not a routable path`);if(x.length>=sn)throw new Error("Too many redirects");const U=g();if(D!==U||re!==_()){const X=x.push({value:U,replace:$,scroll:J,state:_()});f(()=>{h(D),L(re)}).then(()=>{x.length===X&&B({value:D,state:re})})}})}function k(m){return m=m||Ae(me)||S,(p,y)=>N(m,p,y)}function B(m){const p=x[0];p&&((m.value!==p.value||m.state!==p.state)&&o({...m,replace:p.replace,scroll:p.scroll}),x.length=0)}I(()=>{const{value:m,state:p}=s();T(()=>{m!==g()&&f(()=>{h(m),L(p)})})});{let m=function(y){return y.namespaceURI==="http://www.w3.org/2000/svg"},p=function(y){if(y.defaultPrevented||y.button!==0||y.metaKey||y.altKey||y.ctrlKey||y.shiftKey)return;const $=y.composedPath().find(ke=>ke instanceof Node&&ke.nodeName.toUpperCase()==="A");if(!$)return;const W=m($),J=W?$.href.baseVal:$.href;if((W?$.target.baseVal:$.target)||!J&&!$.hasAttribute("state"))return;const D=($.getAttribute("rel")||"").split(/\s+/);if($.hasAttribute("download")||D&&D.includes("external"))return;const U=W?new URL(J,document.baseURI):new URL(J),X=K(U.pathname);if(U.origin!==window.location.origin||c&&X&&!X.toLowerCase().startsWith(c.toLowerCase()))return;const lt=i(X+K(U.search,!0)+K(U.hash)),Ne=$.getAttribute("state");y.preventDefault(),N(S,lt,{resolve:!1,replace:$.hasAttribute("replace"),scroll:!$.hasAttribute("noscroll"),state:Ne&&JSON.parse(Ne)})};document.addEventListener("click",p),ve(()=>document.removeEventListener("click",p))}return{base:S,out:a,location:O,isRouting:d,renderPath:u,parsePath:i,navigatorFactory:k}}function hn(e,t,n,r){const{base:s,location:o,navigatorFactory:l}=e,{pattern:i,element:u,preload:c,data:a}=r().route,d=A(()=>r().path),f=tt(()=>r().params);c&&c();const g={parent:t,pattern:i,get child(){return n()},path:d,params:f,data:t.data,outlet:u,resolvePath(h){return le(s.path(),h,d())}};if(a)try{te=g,g.data=a({data:t.data,params:f,location:o,navigate:l(g)})}finally{te=void 0}return g}const gn=M("<a></a>"),mn=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||Qt(),i=dn(l,r,s);return v(rt.Provider,{value:i,get children(){return e.children}})},pn=e=>{const t=Le(),n=_e(),r=Pe(()=>e.children),s=A(()=>ot(r(),et(n.pattern,e.base||""),yn)),o=A(()=>un(s(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:c,path:a,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:a,params:d})));const l=[];let i;const u=A(Fe(o,(c,a,d)=>{let f=a&&c.length===a.length;const g=[];for(let h=0,_=c.length;h<_;h++){const L=a&&a[h],O=c[h];d&&L&&O.route.key===L.route.key?g[h]=d[h]:(f=!1,l[h]&&l[h](),Q(x=>{l[h]=x,g[h]=hn(t,g[h-1]||n,()=>u()[h+1],()=>o()[h])}))}return l.splice(c.length).forEach(h=>h()),d&&f?d:(i=g[0],g)}));return v(Ze,{get when(){return u()&&i},children:c=>v(me.Provider,{value:c,get children(){return c.outlet()}})})},ie=e=>{const t=Pe(()=>e.children);return Qe(e,{get children(){return t()}})},yn=()=>{const e=_e();return v(Ze,{get when(){return e.child},children:t=>v(me.Provider,{value:t,get children(){return t.outlet()}})})};function wn(e){const[,t]=Et(e,["children","to","href","state"]),n=ln(()=>e.to);return(()=>{const r=gn.cloneNode(!0);return qt(r,t,!1,!0),ee(r,()=>e.children),I(s=>{const o=n()||e.href,l=JSON.stringify(e.state);return o!==s._v$&&be(r,"href",s._v$=o),l!==s._v$2&&be(r,"state",s._v$2=l),s},{_v$:void 0,_v$2:void 0}),r})()}function bn(e){const t=on(()=>e.href);return v(wn,Qe(e,{get to(){return t()}}))}const xn="modulepreload",De={},Sn="/",it=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Sn}${r}`,r in De)return;De[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":xn,s||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),s)return new Promise((i,u)=>{l.addEventListener("load",i),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},$n=M("<div></div>");var vn=()=>{const[e,t]=E([]);return $e(async()=>{const n=await fetch("/api/menuitems",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:localStorage.getItem("token")})});t(await n.json())}),(()=>{const n=$n.cloneNode(!0);return ee(n,v(Ct,{get each(){return e()},children:(r,s)=>v(bn,{get href(){return r.url},class:"btn btn-ghost normal-case text-xl",get children(){return r.name}})})),n})()};const An=M("<br>"),Pn=M('<button class="btn btn-primary">Logout</button>');var En=()=>["Welcome to the INSIDE!",An.cloneNode(!0),(()=>{const e=Pn.cloneNode(!0);return e.$$click=()=>{localStorage.removeItem("token"),window.location.href="/"},e})()];ge(["click"]);const Cn=M(`<div class="card w-100 bg-base-100 shadow-xl"><div class="card-body"><h1 class="card-title">It's all about the pentiums baby</h1><h2 class="card-title">Login</h2><input type="text" placeholder="Username" required class="input input-bordered input-primary w-full max-w-xs"><h2 class="card-title">Password</h2><input type="password" placeholder="Password" required class="input input-bordered input-primary w-full max-w-xs"><div class="card-actions justify-end"><button class="btn btn-primary">Login</button></div></div></div>`);var Ln=()=>{const[e,t]=E(""),[n,r]=E(""),s=async()=>{await(await fetch("/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e(),password:n()})})).json().then(l=>{localStorage.setItem("token",l.result),console.log("token saved!"),window.location.href="/"})};return(()=>{const o=Cn.cloneNode(!0),l=o.firstChild,i=l.firstChild,u=i.nextSibling,c=u.nextSibling,a=c.nextSibling,d=a.nextSibling,f=d.nextSibling,g=f.firstChild;return c.$$input=h=>t(h.currentTarget.value),d.$$input=h=>r(h.currentTarget.value),g.$$click=()=>s(),o})()};ge(["input","click"]);var _n=()=>{const[e,t]=E(!1);return $e(async()=>{localStorage.getItem("token")&&t(!0)}),[oe((()=>{const n=oe(()=>!e(),!0);return()=>n()&&v(Ln,{})})()),oe((()=>{const n=oe(()=>!!e(),!0);return()=>n()&&v(En,{})})())]};const Nn=M('<div class="card w-100 bg-base-100 shadow-xl"><div class="card-body"><h1 class="card-title">Dump da news!</h1><h2 class="card-title">Message</h2><textarea maxlength="500" placeholder="Message" required class="textarea textarea-secondary"></textarea><div class="card-actions justify-end"><button class="btn btn-primary">Dump it</button></div></div></div>');var kn=()=>{const[e,t]=E(""),n=async()=>{await(await fetch("/api/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({message:e()})})).json().then(s=>{console.log(s),console.log("post saved!"),window.location.href="/"})};return(()=>{const r=Nn.cloneNode(!0),s=r.firstChild,o=s.firstChild,l=o.nextSibling,i=l.nextSibling,u=i.nextSibling,c=u.firstChild;return i.$$input=a=>t(a.currentTarget.value),c.$$click=()=>n(),r})()};ge(["input","click"]);const On=M('<div class="navbar bg-base-100"></div>'),Tn=M('<div class="container mx-auto"></div>'),Ue=Ye(()=>it(()=>import("./Blog.3242740e.js"),[])),Rn=Ye(()=>it(()=>import("./Admin.3b301b63.js"),[]));E();const In=()=>($e(async()=>{}),[(()=>{const e=On.cloneNode(!0);return ee(e,v(vn,{})),e})(),(()=>{const e=Tn.cloneNode(!0);return ee(e,v(pn,{get children(){return[v(ie,{path:"/",component:Ue}),v(ie,{path:"/post",component:kn}),v(ie,{path:"/admin",component:Rn}),v(ie,{path:"/auth",component:_n}),v(Ue,{})]}})),e})()]);It(()=>v(mn,{get children(){return v(In,{})}}),document.getElementById("root"));export{Ct as F,v as a,E as c,ge as d,ee as i,oe as m,$e as o,M as t};