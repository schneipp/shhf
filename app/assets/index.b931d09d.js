const lt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};lt();const E={};function J(e){E.context=e}const ct=(e,t)=>e===t,ut=Symbol("solid-proxy"),at=Symbol("solid-track"),le={equals:ct};let Ue=He;const K={},j=1,ce=2,De={owned:null,cleanups:null,context:null,owner:null},[ft,Tn]=R(!1);var w=null;let te=null,b=null,z=null,L=null,k=null,xe=0;function G(e,t){const n=b,r=w,s=e.length===0,o=s?De:{owned:null,cleanups:null,context:null,owner:t||r},l=s?e:()=>e(()=>Ee(o));w=o,b=null;try{return de(l,!0)}finally{b=n,w=r}}function R(e,t){t=t?Object.assign({},le,t):le;const n={value:e,observers:null,observerSlots:null,pending:K,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==K?n.pending:n.value)),Se(n,s));return[Fe.bind(n),r]}function ye(e,t,n){const r=fe(e,t,!0,j);F(r)}function I(e,t,n){const r=fe(e,t,!1,j);F(r)}function dt(e,t,n){Ue=At;const r=fe(e,t,!1,j);r.user=!0,k?k.push(r):F(r)}function S(e,t,n){n=n?Object.assign({},le,n):le;const r=fe(e,t,!0,0);return r.pending=K,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,F(r),Fe.bind(r)}function ht(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={});const r=new Set,[s,o]=R(n.initialValue),[l,i]=R(void 0,{equals:!1}),[a,c]=R(!1),[u,d]=R();let f,y=null,h=null,$=null,C=!1,T="initialValue"in n,x=typeof e=="function"&&S(e);E.context&&($=`${E.context.id}${E.context.count++}`,E.load&&(h=E.load($)));function A(g,m,p,v){return y===g&&(y=null,T=!0,h&&(g===h||m===h)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated(v,{value:m})),h=null,d(f=p),N(m)),m}function N(g){ue(()=>{o(()=>g),c(!1);for(const m of r.keys())m.decrement();r.clear()})}function O(){const g=wt,m=s();if(f)throw f;return b&&!b.user&&g&&ye(()=>{l(),y&&(g.resolved||r.has(g)||(g.increment(),r.add(g)))}),m}function B(g=!0){if(g&&C)return;C=!1,d(f=void 0);const m=x?x():e;if(m==null||m===!1){A(y,_(s));return}const p=h||_(()=>t(m,{value:s(),refetching:g}));return typeof p!="object"||!("then"in p)?(A(y,p),p):(y=p,C=!0,queueMicrotask(()=>C=!1),ue(()=>{c(!0),i()}),p.then(v=>A(p,v,void 0,m),v=>A(p,v,v)))}return Object.defineProperties(O,{loading:{get(){return a()}},error:{get(){return u()}},latest:{get(){if(!T)return O();if(f)throw f;return s()}}}),x?ye(()=>B(!1)):B(!1),[O,{refetch:B,mutate:o}]}function ue(e){if(z)return e();let t;const n=z=[];try{t=e()}finally{z=null}return de(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==K){const o=s.pending;s.pending=K,Se(s,o)}}},!1),t}function _(e){let t,n=b;return b=null,t=e(),b=n,t}function qe(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(o){o=!1;return}const a=_(()=>t(i,s,l));return s=i,a}}function Ke(e){dt(()=>_(e))}function Ae(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function gt(){return w}function mt(e,t){const n=w;w=e;try{return de(t,!0)}finally{w=n}}function yt(e){const t=b,n=w;return Promise.resolve().then(()=>{b=t,w=n;let r;return ue(e),b=w=null,r?r.done:void 0})}function pt(){return[ft,yt]}function Ve(e){const t=Symbol("context");return{id:t,Provider:vt(t),defaultValue:e}}function ve(e){let t;return(t=Je(w,e.id))!==void 0?t:e.defaultValue}function Pe(e){const t=S(e);return S(()=>pe(t()))}let wt;function Fe(){const e=te;if(this.sources&&(this.state||e)){const t=L;L=null,this.state===j||e?F(this):ae(this),L=t}if(b){const t=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(t)):(b.sources=[this],b.sourceSlots=[t]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function Se(e,t,n){if(z)return e.pending===K&&z.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&de(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];r&&te.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?L.push(o):k.push(o),o.observers&&We(o)),r||(o.state=j)}if(L.length>1e6)throw L=[],new Error},!1),t}function F(e){if(!e.fn)return;Ee(e);const t=w,n=b,r=xe;b=w=e,bt(e,e.value,r),b=n,w=t}function bt(e,t,n){let r;try{r=e.fn(t)}catch(s){Xe(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?Se(e,r):e.value=r,e.updatedAt=n)}function fe(e,t,n,r=j,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:null,pure:n};return w===null||w!==De&&(w.owned?w.owned.push(o):w.owned=[o]),o}function Q(e){const t=te;if(e.state===0||t)return;if(e.state===ce||t)return ae(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<xe);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===j||t)F(e);else if(e.state===ce||t){const s=L;L=null,ae(e,n[0]),L=s}}function de(e,t){if(L)return e();let n=!1;t||(L=[]),k?n=!0:k=[],xe++;try{const r=e();return xt(n),r}catch(r){L||(k=null),Xe(r)}}function xt(e){L&&(He(L),L=null),!e&&(k.length?ue(()=>{Ue(k),k=null}):k=null)}function He(e){for(let t=0;t<e.length;t++)Q(e[t])}function At(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:Q(s)}E.context&&J();const r=e.length;for(t=0;t<n;t++)Q(e[t]);for(t=r;t<e.length;t++)Q(e[t])}function ae(e,t){const n=te;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===j||n?s!==t&&Q(s):(s.state===ce||n)&&ae(s,t))}}function We(e){const t=te;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ce,r.pure?L.push(r):k.push(r),r.observers&&We(r))}}function Ee(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)Ee(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Xe(e){throw e}function Je(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Je(e.owner,t):void 0}function pe(e){if(typeof e=="function"&&!e.length)return pe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=pe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function vt(e){return function(n){let r;return ye(()=>r=_(()=>(w.context={[e]:n.value},Pe(()=>n.children)))),r}}const Pt=Symbol("fallback");function Re(e){for(let t=0;t<e.length;t++)e[t]()}function St(e,t,n={}){let r=[],s=[],o=[],l=0,i=t.length>1?[]:null;return Ae(()=>Re(o)),()=>{let a=e()||[],c,u;return a[at],_(()=>{let f=a.length,y,h,$,C,T,x,A,N,O;if(f===0)l!==0&&(Re(o),o=[],r=[],s=[],l=0,i&&(i=[])),n.fallback&&(r=[Pt],s[0]=G(B=>(o[0]=B,n.fallback())),l=1);else if(l===0){for(s=new Array(f),u=0;u<f;u++)r[u]=a[u],s[u]=G(d);l=f}else{for($=new Array(f),C=new Array(f),i&&(T=new Array(f)),x=0,A=Math.min(l,f);x<A&&r[x]===a[x];x++);for(A=l-1,N=f-1;A>=x&&N>=x&&r[A]===a[N];A--,N--)$[N]=s[A],C[N]=o[A],i&&(T[N]=i[A]);for(y=new Map,h=new Array(N+1),u=N;u>=x;u--)O=a[u],c=y.get(O),h[u]=c===void 0?-1:c,y.set(O,u);for(c=x;c<=A;c++)O=r[c],u=y.get(O),u!==void 0&&u!==-1?($[u]=s[c],C[u]=o[c],i&&(T[u]=i[c]),u=h[u],y.set(O,u)):o[c]();for(u=x;u<f;u++)u in $?(s[u]=$[u],o[u]=C[u],i&&(i[u]=T[u],i[u](u))):s[u]=G(d);s=s.slice(0,l=f),r=a.slice(0)}return s});function d(f){if(o[u]=f,i){const[y,h]=R(u);return i[u]=h,t(a[u],y)}return t(a[u])}}}function P(e,t){return _(()=>e(t||{}))}function se(){return!0}const ze={get(e,t,n){return t===ut?n:e.get(t)},has(e,t){return e.has(t)},set:se,deleteProperty:se,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:se,deleteProperty:se}},ownKeys(e){return e.keys()}};function ge(e){return(e=typeof e=="function"?e():e)==null?{}:e}function Ge(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=ge(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in ge(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(ge(e[n])));return[...new Set(t)]}},ze)}function Et(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),s=t.map(o=>{const l={};for(let i=0;i<o.length;i++){const a=o[i];Object.defineProperty(l,a,r[a]?r[a]:{get(){return e[a]},set(){return!0}})}return l});return s.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},ze)),s}function Qe(e){let t,n;const r=s=>{const o=E.context;if(o){const[i,a]=R();(n||(n=e())).then(c=>{J(o),a(()=>c.default),J()}),t=i}else if(t){const i=t();if(i)return i(s)}else{const[i]=ht(()=>(n||(n=e())).then(a=>a.default));t=i}let l;return S(()=>(l=t())&&_(()=>{if(!o)return l(s);const i=E.context;J(o);const a=l(s);return J(i),a}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}function Lt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return S(St(()=>e.each,e.children,t||void 0))}function Ye(e){let t=!1;const n=S(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return S(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?_(()=>s(r)):s}return e.fallback})}const Ct=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],$t=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ct]),Nt=new Set(["innerHTML","textContent","innerText","children"]),Rt={className:"class",htmlFor:"for"},Oe={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Ot=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Tt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function oe(e,t){return S(e,void 0,t?void 0:{equals:t})}function _t(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,a=t[s-1].nextSibling,c=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const u=o<r?i?n[i-1].nextSibling:n[o-i]:a;for(;i<o;)e.insertBefore(n[i++],u)}else if(o===i)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!c){c=new Map;let d=i;for(;d<o;)c.set(n[d],d++)}const u=c.get(t[l]);if(u!=null)if(i<u&&u<o){let d=l,f=1,y;for(;++d<s&&d<o&&!((y=c.get(t[d]))==null||y!==u+f);)f++;if(f>u-i){const h=t[l];for(;i<u;)e.insertBefore(n[i++],h)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Te="_$DX_DELEGATE";function kt(e,t,n){let r;return G(s=>{r=s,t===document?e():Z(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function ne(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function It(e,t=window.document){const n=t[Te]||(t[Te]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Ft))}}function we(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function jt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Bt(e,t){t==null?e.removeAttribute("class"):e.className=t}function Mt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function Ut(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const i=s[o];!i||i==="undefined"||t[i]||(_e(e,i,!1),delete n[i])}for(o=0,l=r.length;o<l;o++){const i=r[o],a=!!t[i];!i||i==="undefined"||n[i]===a||!a||(_e(e,i,!0),n[i]=a)}return n}function Dt(e,t,n={}){const r=e.style,s=typeof n=="string";if(t==null&&s||typeof t=="string")return r.cssText=t;s&&(r.cssText=void 0,n={}),t||(t={});let o,l;for(l in n)t[l]==null&&r.removeProperty(l),delete n[l];for(l in t)o=t[l],o!==n[l]&&(r.setProperty(l,o),n[l]=o);return n}function qt(e,t,n,r){typeof t=="function"?I(s=>Ie(e,t(),s,n,r)):Ie(e,t,void 0,n,r)}function Z(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return V(e,t,r,n);I(s=>V(e,t(),s,n),r)}function Kt(e,t,n,r,s={},o=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;ke(e,l,null,s[l],n,o)}for(const l in t){if(l==="children"){r||V(e,t.children);continue}const i=t[l];s[l]=ke(e,l,i,s[l],n,o)}}function Vt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function _e(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function ke(e,t,n,r,s,o){let l,i,a;if(t==="style")return Dt(e,n,r);if(t==="classList")return Ut(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);r&&e.removeEventListener(c,r),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);r&&e.removeEventListener(c,r,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),u=Ot.has(c);if(!u&&r){const d=Array.isArray(r)?r[0]:r;e.removeEventListener(c,d)}(u||n)&&(Mt(e,c,n,u),u&&It([c]))}else if((a=Nt.has(t))||!s&&(Oe[t]||(i=$t.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?Bt(e,n):l&&!i&&!a?e[Vt(t)]=n:e[Oe[t]||t]=n;else{const c=s&&t.indexOf(":")>-1&&Tt[t.split(":")[0]];c?jt(e,c,t,n):we(e,Rt[t]||t,n)}return n}function Ft(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),E.registry&&!E.done&&(E.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Ie(e,t,n={},r,s){return t||(t={}),!s&&"children"in t&&I(()=>n.children=V(e,t.children,n.children)),t.ref&&t.ref(e),I(()=>Kt(e,t,r,!0,n,!0)),n}function V(e,t,n,r,s){for(E.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(E.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=D(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(E.context)return n;n=D(e,n,r)}else{if(o==="function")return I(()=>{let i=t();for(;typeof i=="function";)i=i();n=V(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(be(i,t,n,s))return I(()=>n=V(e,i,n,r,!0)),()=>n;if(E.context){for(let c=0;c<i.length;c++)if(i[c].parentNode)return n=i}if(i.length===0){if(n=D(e,n,r),l)return n}else a?n.length===0?je(e,i,r):_t(e,n,i):(n&&D(e),je(e,i));n=i}else if(t instanceof Node){if(E.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=D(e,n,r,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function be(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],a=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=be(e,i,a)||s;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();s=be(e,Array.isArray(i)?i:[i],a)||s}else e.push(i),s=!0;else{const c=String(i);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return s}function je(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function D(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const a=i.parentNode===e;!o&&!l?a?e.replaceChild(s,i):e.insertBefore(s,n):a&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}function Ht(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Wt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Xt(e){try{return document.querySelector(e)}catch{return null}}function Jt(e,t){const n=Xt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function zt(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=Wt(R(o(e()),{equals:(i,a)=>i.value===a.value}),void 0,i=>(!s&&t(i),i));return n&&Ae(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function Gt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:R({value:""})};return e}function Qt(){return zt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Jt(window.location.hash.slice(1),n)},e=>Ht(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Yt=/^(?:[a-z0-9]+:)?\/\//i,Zt=/^\/+|\/+$/g;function Y(e,t=!1){const n=e.replace(Zt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ie(e,t,n){if(Yt.test(t))return;const r=Y(e),s=n&&Y(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+Y(t,!o)}function en(e,t){if(e==null)throw new Error(t);return e}function Ze(e,t){return Y(e).replace(/\/*(\*.*)?$/g,"")+Y(t)}function tn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function q(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function nn(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return l=>{const i=l.split("/").filter(Boolean),a=i.length-o;if(a<0||a>0&&r===void 0&&!t)return null;const c={path:o?"":"/",params:{}};for(let u=0;u<o;u++){const d=s[u],f=i[u];if(d[0]===":")c.params[d.slice(1)]=f;else if(d.localeCompare(f,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${f}`}return r&&(c.params[r]=a?i.slice(-a).join("/"):""),c}}function rn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function et(e){const t=new Map,n=gt();return new Proxy({},{get(r,s){return t.has(s)||mt(n,()=>t.set(s,S(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function tt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return tt(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const sn=100,nt=Ve(),he=Ve(),Le=()=>en(ve(nt),"Make sure your app is wrapped in a <Router />");let ee;const Ce=()=>ee||ve(he)||Le().base,on=e=>{const t=Ce();return S(()=>t.resolvePath(e()))},ln=e=>{const t=Le();return S(()=>{const n=e();return n!==void 0?t.renderPath(n):n})};function cn(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>P(r,{}):()=>{const{element:a}=e;return a===void 0&&n?P(n,{}):a},preload:e.component?r.preload:e.preload,data:s};return rt(e.path).reduce((a,c)=>{for(const u of tt(c)){const d=Ze(t,u),f=l?d:d.split("/*",1)[0];a.push({...i,originalPath:u,pattern:f,matcher:nn(f,!l)})}return a},[])}function un(e,t=0){return{routes:e,score:rn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function rt(e){return Array.isArray(e)?e:[e]}function st(e,t="",n,r=[],s=[]){const o=rt(e);for(let l=0,i=o.length;l<i;l++){const a=o[l];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const c=cn(a,t,n);for(const u of c){if(r.push(u),a.children)st(a.children,u.pattern,n,r,s);else{const d=un([...r],s.length);s.push(d)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function an(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function fn(e,t){const n=new URL("http://sar"),r=S(a=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),a}},n,{equals:(a,c)=>a.href===c.href}),s=S(()=>q(r().pathname)),o=S(()=>q(r().search,!0)),l=S(()=>q(r().hash)),i=S(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:et(qe(o,()=>tn(r())))}}function dn(e,t="",n,r){const{signal:[s,o],utils:l={}}=Gt(e),i=l.parsePath||(g=>g),a=l.renderPath||(g=>g),c=ie("",t),u=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[d,f]=pt(),[y,h]=R(s().value),[$,C]=R(s().state),T=fn(y,$),x=[],A={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(g){return ie(c,g)}};if(n)try{ee=A,A.data=n({data:void 0,params:{},location:T,navigate:O(A)})}finally{ee=void 0}function N(g,m,p){_(()=>{if(typeof m=="number"){m&&(l.go?l.go(m):console.warn("Router integration does not support relative routing"));return}const{replace:v,resolve:H,scroll:W,state:re}={replace:!1,resolve:!0,scroll:!0,...p},M=H?g.resolvePath(m):ie("",m);if(M===void 0)throw new Error(`Path '${m}' is not a routable path`);if(x.length>=sn)throw new Error("Too many redirects");const U=y();if(M!==U||re!==$()){const X=x.push({value:U,replace:v,scroll:W,state:$()});f(()=>{h(M),C(re)}).then(()=>{x.length===X&&B({value:M,state:re})})}})}function O(g){return g=g||ve(he)||A,(m,p)=>N(g,m,p)}function B(g){const m=x[0];m&&((g.value!==m.value||g.state!==m.state)&&o({...g,replace:m.replace,scroll:m.scroll}),x.length=0)}I(()=>{const{value:g,state:m}=s();_(()=>{g!==y()&&f(()=>{h(g),C(m)})})});{let g=function(p){return p.namespaceURI==="http://www.w3.org/2000/svg"},m=function(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const v=p.composedPath().find(Ne=>Ne instanceof Node&&Ne.nodeName.toUpperCase()==="A");if(!v)return;const H=g(v),W=H?v.href.baseVal:v.href;if((H?v.target.baseVal:v.target)||!W&&!v.hasAttribute("state"))return;const M=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||M&&M.includes("external"))return;const U=H?new URL(W,document.baseURI):new URL(W),X=q(U.pathname);if(U.origin!==window.location.origin||c&&X&&!X.toLowerCase().startsWith(c.toLowerCase()))return;const it=i(X+q(U.search,!0)+q(U.hash)),$e=v.getAttribute("state");p.preventDefault(),N(A,it,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:$e&&JSON.parse($e)})};document.addEventListener("click",m),Ae(()=>document.removeEventListener("click",m))}return{base:A,out:u,location:T,isRouting:d,renderPath:a,parsePath:i,navigatorFactory:O}}function hn(e,t,n,r){const{base:s,location:o,navigatorFactory:l}=e,{pattern:i,element:a,preload:c,data:u}=r().route,d=S(()=>r().path),f=et(()=>r().params);c&&c();const y={parent:t,pattern:i,get child(){return n()},path:d,params:f,data:t.data,outlet:a,resolvePath(h){return ie(s.path(),h,d())}};if(u)try{ee=y,y.data=u({data:t.data,params:f,location:o,navigate:l(y)})}finally{ee=void 0}return y}const gn=ne("<a></a>"),mn=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||Qt(),i=dn(l,r,s);return P(nt.Provider,{value:i,get children(){return e.children}})},yn=e=>{const t=Le(),n=Ce(),r=Pe(()=>e.children),s=S(()=>st(r(),Ze(n.pattern,e.base||""),pn)),o=S(()=>an(s(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:c,path:u,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:u,params:d})));const l=[];let i;const a=S(qe(o,(c,u,d)=>{let f=u&&c.length===u.length;const y=[];for(let h=0,$=c.length;h<$;h++){const C=u&&u[h],T=c[h];d&&C&&T.route.key===C.route.key?y[h]=d[h]:(f=!1,l[h]&&l[h](),G(x=>{l[h]=x,y[h]=hn(t,y[h-1]||n,()=>a()[h+1],()=>o()[h])}))}return l.splice(c.length).forEach(h=>h()),d&&f?d:(i=y[0],y)}));return P(Ye,{get when(){return a()&&i},children:c=>P(he.Provider,{value:c,get children(){return c.outlet()}})})},me=e=>{const t=Pe(()=>e.children);return Ge(e,{get children(){return t()}})},pn=()=>{const e=Ce();return P(Ye,{get when(){return e.child},children:t=>P(he.Provider,{value:t,get children(){return t.outlet()}})})};function wn(e){const[,t]=Et(e,["children","to","href","state"]),n=ln(()=>e.to);return(()=>{const r=gn.cloneNode(!0);return qt(r,t,!1,!0),Z(r,()=>e.children),I(s=>{const o=n()||e.href,l=JSON.stringify(e.state);return o!==s._v$&&we(r,"href",s._v$=o),l!==s._v$2&&we(r,"state",s._v$2=l),s},{_v$:void 0,_v$2:void 0}),r})()}function bn(e){const t=on(()=>e.href);return P(wn,Ge(e,{get to(){return t()}}))}const xn="modulepreload",Be={},An="/",ot=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${An}${r}`,r in Be)return;Be[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":xn,s||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),s)return new Promise((i,a)=>{l.addEventListener("load",i),l.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},vn=ne("<div></div>");var Pn=()=>{const[e,t]=R([]);return Ke(async()=>{const n=await fetch("/api/menuitems");t(await n.json())}),(()=>{const n=vn.cloneNode(!0);return Z(n,P(Lt,{get each(){return e()},children:(r,s)=>P(bn,{get href(){return r.url},class:"btn btn-ghost normal-case text-xl",get children(){return r.name}})})),n})()},Sn=()=>"Welcome to the Dasboard, master";const En=ne(`<div class="card w-100 bg-base-100 shadow-xl"><div class="card-body"><h1 class="card-title">It's all about the pentiums baby</h1><h2 class="card-title">Login</h2><input type="text" placeholder="Username" class="input input-bordered input-primary w-full max-w-xs"><h2 class="card-title">Password</h2><input type="password" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs"><div class="card-actions justify-end"><button class="btn btn-primary">Login</button></div></div></div>`);var Ln=()=>(console.log("hallo"),En.cloneNode(!0)),Cn=()=>{const[e,t]=R(!1);return[oe((()=>{const n=oe(()=>!e(),!0);return()=>n()&&P(Ln,{})})()),oe((()=>{const n=oe(()=>!!e(),!0);return()=>n()&&P(Sn,{})})())]};const $n=ne('<div class="navbar bg-base-100"></div>'),Nn=ne('<div class="container mx-auto"></div>'),Me=Qe(()=>ot(()=>import("./Blog.d5ae7c8b.js"),[])),Rn=Qe(()=>ot(()=>import("./Admin.4df9226f.js"),[]));R();const On=()=>(Ke(async()=>{}),[(()=>{const e=$n.cloneNode(!0);return Z(e,P(Pn,{})),e})(),(()=>{const e=Nn.cloneNode(!0);return Z(e,P(yn,{get children(){return[P(me,{path:"/blog",component:Me}),P(me,{path:"/admin",component:Rn}),P(me,{path:"/auth",component:Cn}),P(Me,{})]}})),e})()]);kt(()=>P(mn,{get children(){return P(On,{})}}),document.getElementById("root"));export{P as a,R as c,oe as m,ne as t};
