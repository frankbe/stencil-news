/*! Built with http://stenciljs.com */

(function(Core,appNamespace,publicPath){"use strict";
/*! document-register-element, 1.5.0
https://github.com/WebReflection/document-register-element
(C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e,t){"use strict";function Ht(){var e=wt.splice(0,wt.length);Et=0;while(e.length)e.shift().call(null,e.shift())}function Bt(e,t){for(var n=0,r=e.length;n<r;n++)Jt(e[n],t)}function jt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Pt(r,A[It(r)])}function Ft(e){return function(t){ut(t)&&(Jt(t,e),O.length&&Bt(t.querySelectorAll(O),e))}}function It(e){var t=ht.call(e,"is"),n=e.nodeName.toUpperCase(),r=_.call(L,t?N+t.toUpperCase():T+n);return t&&-1<r&&!qt(n,t)?-1:r}function qt(e,t){return-1<O.indexOf(e+'[is="'+t+'"]')}function Rt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[y]||2,o=e[w]||3;kt&&(!i||i===t)&&t[h]&&r!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(n===s||n===o))&&t[h](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function Ut(e){var t=Ft(e);return function(e){wt.push(t,e.target),Et&&clearTimeout(Et),Et=setTimeout(Ht,1)}}function zt(e){Ct&&(Ct=!1,e.currentTarget.removeEventListener(S,zt)),O.length&&Bt((e.target||n).querySelectorAll(O),e.detail===l?l:a),st&&Vt()}function Wt(e,t){var n=this;vt.call(n,e,t),Lt.call(n,{target:n})}function Xt(e,t){nt(e,t),Mt?Mt.observe(e,yt):(Nt&&(e.setAttribute=Wt,e[o]=Ot(e),e[u](x,Lt)),e[u](E,Rt)),e[m]&&kt&&(e.created=!0,e[m](),e.created=!1)}function Vt(){for(var e,t=0,n=at.length;t<n;t++)e=at[t],M.contains(e)||(n--,at.splice(t--,1),Jt(e,l))}function $t(e){throw new Error("A "+e+" type is already registered")}function Jt(e,t){var n,r=It(e);-1<r&&(Dt(e,A[r]),r=0,t===a&&!e[a]?(e[l]=!1,e[a]=!0,r=1,st&&_.call(at,e)<0&&at.push(e)):t===l&&!e[l]&&(e[a]=!1,e[l]=!0,r=1),r&&(n=e[t+f])&&n.call(e))}function Kt(){}function Qt(e,t,r){var i=r&&r[c]||"",o=t.prototype,u=tt(o),a=t.observedAttributes||j,f={prototype:u};ot(u,m,{value:function(){if(Q)Q=!1;else if(!this[W]){this[W]=!0,new t(this),o[m]&&o[m].call(this);var e=G[Z.get(t)];(!V||e.create.length>1)&&Zt(this)}}}),ot(u,h,{value:function(e){-1<_.call(a,e)&&o[h].apply(this,arguments)}}),o[d]&&ot(u,p,{value:o[d]}),o[v]&&ot(u,g,{value:o[v]}),i&&(f[c]=i),e=e.toUpperCase(),G[e]={constructor:t,create:i?[i,et(e)]:[e]},Z.set(t,e),n[s](e.toLowerCase(),f),en(e),Y[e].r()}function Gt(e){var t=G[e.toUpperCase()];return t&&t.constructor}function Yt(e){return typeof e=="string"?e:e&&e.is||""}function Zt(e){var t=e[h],n=t?e.attributes:j,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function en(e){return e=e.toUpperCase(),e in Y||(Y[e]={},Y[e].p=new K(function(t){Y[e].r=t})),Y[e].p}function tn(){X&&delete e.customElements,B(e,"customElements",{configurable:!0,value:new Kt}),B(e,"CustomElementRegistry",{configurable:!0,value:Kt});for(var t=function(t){var r=e[t];if(r){e[t]=function(t){var i,s;return t||(t=this),t[W]||(Q=!0,i=G[Z.get(t.constructor)],s=V&&i.create.length===1,t=s?Reflect.construct(r,j,i.constructor):n.createElement.apply(n,i.create),t[W]=!0,Q=!1,s||Zt(t)),t},e[t].prototype=r.prototype;try{r.prototype.constructor=e[t]}catch(i){z=!0,B(r,W,{value:e[t]})}}},r=i.get(/^HTML[A-Z]*[a-z]/),o=r.length;o--;t(r[o]));n.createElement=function(e,t){var n=Yt(t);return n?gt.call(this,e,et(n)):gt.call(this,e)},St||(Tt=!0,n[s](""))}var n=e.document,r=e.Object,i=function(e){var t=/^[A-Z]+[a-z]/,n=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(r.create||r)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(r){return typeof r=="string"?s[r]||(t.test(r)?[]:""):n(r)},o.set=function(n,r){return t.test(n)?i(n,r):i(r,n),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});t||(t="auto");var s="registerElement",o="__"+s+(e.Math.random()*1e5>>0),u="addEventListener",a="attached",f="Callback",l="detached",c="extends",h="attributeChanged"+f,p=a+f,d="connected"+f,v="disconnected"+f,m="created"+f,g=l+f,y="ADDITION",b="MODIFICATION",w="REMOVAL",E="DOMAttrModified",S="DOMContentLoaded",x="DOMSubtreeModified",T="<",N="=",C=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,k=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],L=[],A=[],O="",M=n.documentElement,_=L.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},D=r.prototype,P=D.hasOwnProperty,H=D.isPrototypeOf,B=r.defineProperty,j=[],F=r.getOwnPropertyDescriptor,I=r.getOwnPropertyNames,q=r.getPrototypeOf,R=r.setPrototypeOf,U=!!r.__proto__,z=!1,W="__dreCEv1",X=e.customElements,V=t!=="force"&&!!(X&&X.define&&X.get&&X.whenDefined),$=r.create||r,J=e.Map||function(){var t=[],n=[],r;return{get:function(e){return n[_.call(t,e)]},set:function(e,i){r=_.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},K=e.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},Q=!1,G=$(null),Y=$(null),Z=new J,et=function(e){return e.toLowerCase()},tt=r.create||function sn(e){return e?(sn.prototype=e,new sn):this},nt=R||(U?function(e,t){return e.__proto__=t,e}:I&&F?function(){function e(e,t){for(var n,r=I(t),i=0,s=r.length;i<s;i++)n=r[i],P.call(e,n)||B(e,n,F(t,n))}return function(t,n){do e(t,n);while((n=q(n))&&!H.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),rt=e.MutationObserver||e.WebKitMutationObserver,it=(e.HTMLElement||e.Element||e.Node).prototype,st=!H.call(it,M),ot=st?function(e,t,n){return e[t]=n.value,e}:B,ut=st?function(e){return e.nodeType===1}:function(e){return H.call(it,e)},at=st&&[],ft=it.attachShadow,lt=it.cloneNode,ct=it.dispatchEvent,ht=it.getAttribute,pt=it.hasAttribute,dt=it.removeAttribute,vt=it.setAttribute,mt=n.createElement,gt=mt,yt=rt&&{attributes:!0,characterData:!0,attributeOldValue:!0},bt=rt||function(e){Nt=!1,M.removeEventListener(E,bt)},wt,Et=0,St=s in n,xt=!0,Tt=!1,Nt=!0,Ct=!0,kt=!0,Lt,At,Ot,Mt,_t,Dt,Pt;St||(R||U?(Dt=function(e,t){H.call(t,e)||Xt(e,t)},Pt=Xt):(Dt=function(e,t){e[o]||(e[o]=r(!0),Xt(e,t))},Pt=Dt),st?(Nt=!1,function(){var e=F(it,u),t=e.value,n=function(e){var t=new CustomEvent(E,{bubbles:!0});t.attrName=e,t.prevValue=ht.call(this,e),t.newValue=null,t[w]=t.attrChange=2,dt.call(this,e),ct.call(this,t)},r=function(e,t){var n=pt.call(this,e),r=n&&ht.call(this,e),i=new CustomEvent(E,{bubbles:!0});vt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[b]=i.attrChange=1:i[y]=i.attrChange=0,ct.call(this,i)},i=function(e){var t=e.currentTarget,n=t[o],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(E,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[y]=i.attrChange=0:i[b]=i.attrChange=1,ct.call(t,i))};e.value=function(e,s,u){e===E&&this[h]&&this.setAttribute!==r&&(this[o]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,s,u)},B(it,u,e)}()):rt||(M[u](E,bt),M.setAttribute(o,1),M.removeAttribute(o),Nt&&(Lt=function(e){var t=this,n,r,i;if(t===e.target){n=t[o],t[o]=r=Ot(t);for(i in r){if(!(i in n))return At(0,t,i,n[i],r[i],y);if(r[i]!==n[i])return At(1,t,i,n[i],r[i],b)}for(i in n)if(!(i in r))return At(2,t,i,n[i],r[i],w)}},At=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Rt(o)},Ot=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),n[s]=function(t,r){p=t.toUpperCase(),xt&&(xt=!1,rt?(Mt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new rt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,kt&&s[h]&&i.attributeName!=="style"&&(o=ht.call(s,i.attributeName),o!==i.oldValue&&s[h](i.attributeName,i.oldValue,o)))})}(Ft(a),Ft(l)),_t=function(e){return Mt.observe(e,{childList:!0,subtree:!0}),e},_t(n),ft&&(it.attachShadow=function(){return _t(ft.apply(this,arguments))})):(wt=[],n[u]("DOMNodeInserted",Ut(a)),n[u]("DOMNodeRemoved",Ut(l))),n[u](S,zt),n[u]("readystatechange",zt),it.cloneNode=function(e){var t=lt.call(this,!!e),n=It(t);return-1<n&&Pt(t,A[n]),e&&O.length&&jt(t.querySelectorAll(O)),t});if(Tt)return Tt=!1;-2<_.call(L,N+p)+_.call(L,T+p)&&$t(t);if(!C.test(p)||-1<_.call(k,p))throw new Error("The type "+t+" is invalid");var i=function(){return o?n.createElement(f,p):n.createElement(f)},s=r||D,o=P.call(s,c),f=o?r[c].toUpperCase():p,p,d;return o&&-1<_.call(L,T+f)&&$t(f),d=L.push((o?N:T)+p)-1,O=O.concat(O.length?",":"",o?f+'[is="'+t.toLowerCase()+'"]':f),i.prototype=A[d]=P.call(s,"prototype")?s.prototype:tt(it),O.length&&Bt(n.querySelectorAll(O),a),i},n.createElement=gt=function(e,t){var r=Yt(t),i=r?mt.call(n,e,et(r)):mt.call(n,e),s=""+e,o=_.call(L,(r?N:T)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=qt(s.toUpperCase(),r))),kt=!n.createElement.innerHTMLHelper,u&&Pt(i,A[o]),i}),Kt.prototype={constructor:Kt,define:V?function(e,t,n){if(n)Qt(e,t,n);else{var r=e.toUpperCase();G[r]={constructor:t,create:[r]},Z.set(t,r),X.define(e,t)}}:Qt,get:V?function(e){return X.get(e)||Gt(e)}:Gt,whenDefined:V?function(e){return K.race([X.whenDefined(e),en(e)])}:en};if(!X||t==="force")tn();else try{(function(t,r,i){r[c]="a",t.prototype=tt(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(i,t,r);if(ht.call(n.createElement("a",{is:i}),"is")!==i||V&&ht.call(new t,"is")!==i)throw r})(function on(){return Reflect.construct(HTMLAnchorElement,[],on)},{},"document-register-element-a")}catch(nn){tn()}try{mt.call(n,"a","a")}catch(rn){et=function(e){return{is:e.toLowerCase()}}}})(window);


/*! Built with http://stenciljs.com */



(function(S,ia,ja,M,ka){function N(){}function A(d){return void 0!==d&&null!==d}function T(d){return void 0===d||null===d}function la(d){return d.replace(/([A-Z])/g,function(b){return"-"+b[0].toLowerCase()})}function ma(){}function na(d,b){return"child"===b?d.firstElementChild:"parent"===b?X(d)||d:"body"===b?d.ownerDocument.body:"document"===b?d.ownerDocument:"window"===b?d.ownerDocument.defaultView:d}function X(d){return d.parentElement?d.parentElement:d.parentNode&&d.parentNode.host?d.parentNode.host:
null}function U(d,b,f,q,r){function g(g){if(!(0<y&&g.keyCode!==y)){q(g);b.ia&&b.ia();a:{for(g=0;g<Y.length;g++)if(-1<f.indexOf(Y[g])){g=!0;break a}g=!1}g&&d.oa.flush()}}var u=f.split(":");b&&1<u.length&&(b=na(b,u[0]),f=u[1]);if(!b)return ma;var u=f.split("."),y=0;1<u.length&&(f=u[0],y=oa[u[1]]);var v=d.ya(r);b.addEventListener(f,g,v);return function(){b&&b.removeEventListener(f,g,v)}}function pa(d,b,f){b&&b.forEach(function(b){f[b.U]={emit:function(q){d.Qa(f.P,b.O,{bubbles:b.Ra,composed:b.Ta,cancelable:b.Sa,
detail:q})}}})}function Z(d,b,f){var q=void 0,r=void 0,g;for(g=arguments.length;2<g--;)P.push(arguments[g]);for(;P.length;)if((f=P.pop())&&void 0!==f.pop)for(g=f.length;g--;)P.push(f[g]);else{"boolean"===typeof f&&(f=null);if(g="function"!==typeof d)null==f?f="":"number"===typeof f?f=String(f):"string"!==typeof f&&(g=!1);g&&r?q[q.length-1].j+=f:void 0===q?q=[g?Q(f):f]:q.push(g?Q(f):f);r=g}r=new N;r.g=d;r.f=q;b?(r.C=b.a,r.Y=b.p,r.W=b.c,r.Z=b.s,r.D=b.o,r.X=b.k,r.Ga=b.n,r.Ca=0===b.x||2===b.x,r.Ba=0<
b.x):(r.Ca=!0,r.Ba=!q||0===q.length);return r}function Q(d){var b=new N;b.j=d;return b}function qa(d,b){var f=b.querySelectorAll("[ssrv]"),q,r,g,u=f.length,y,v;if(b.S=0<u)for(g=0;g<u;g++)for(b=f[g],q=d.G(b,"ssrv"),r=b.M=new N,r.g=d.va(r.b=b).toLowerCase(),y=0,v=b.childNodes.length;y<v;y++)aa(d,b.childNodes[y],r,q,!0)}function aa(d,b,f,q,r){var g=d.ca(b),u;if(r&&1===g){if(g=d.G(b,"ssrc"))g=g.split("."),g[0]===q&&(r=new N,r.g=d.va(r.b=b).toLowerCase(),f.f||(f.f=[]),f=f.f[g[1]]=r,r=""!==g[2]);for(g=
0;g<b.childNodes.length;g++)aa(d,b.childNodes[g],f,q,r)}else 3===g&&(u=b.previousSibling)&&8===d.ca(u)&&(g=d.sa(u).split("."),"s"===g[0]&&g[1]===q&&(r=Q(d.sa(b)),r.b=b,f.f||(f.f=[]),f.f[g[2]]=r))}function ra(d,b){function f(b){return d.requestAnimationFrame(b)}function q(d,v,w,C){try{for(v=b();w=r.shift();)w(d);for(;(w=g.shift())&&!(w(d),8<b()-v););}catch(B){C=B}(u=0<r.length||0<g.length)&&f(q);C&&console.error(C)}var r=[],g=[],u=!1;return{read:function(b){r.push(b);u||(u=!0,f(q))},write:function(b){g.push(b);
u||(u=!0,f(q))},Za:f}}function sa(d){return{Ja:d.documentElement,ba:d.head,cb:d.body,ca:function(b){return b.nodeType},Ia:function(){return d.createEvent("CustomEvent")},aa:function(b){return d.createElement(b)},Ha:function(b,f){return d.createElementNS(b,f)},ra:function(b){return d.createTextNode(b)},qa:function(b){return d.createComment(b)},H:function(b,f,d){b.insertBefore(f,d)},da:function(b,f){return b.removeChild(f)},F:function(b,f){b.appendChild(f)},eb:function(b){return b.childNodes},La:function(b){return b.parentNode},
Ka:function(b){return b.nextSibling},va:function(b){return b.tagName},sa:function(b){return b.textContent},ea:function(b,f){b.textContent=f},G:function(b,f){return b.getAttribute(f)},I:function(b,f,d){b.setAttribute(f,d)},ua:function(b,f,d,r){b.setAttributeNS(f,d,r)},ta:function(b,f){b.removeAttribute(f)}}}function ba(d,b,f,q){var r=null!=f;f=f||G;q=q||G;var g,u,y=q.b,v,w;if(f.C||q.C){v=f.C||G;w=q.C||G;for(g in w)u=w[g],v[g]!==u&&(1===ta[g]?u?b.I(y,g,""):b.ta(y,g):120!==g.charCodeAt(0)?b.I(y,g,u):
58===g.charCodeAt(3)?b.ua(y,ua,g,u):58===g.charCodeAt(5)?b.ua(y,va,g,u):b.I(y,g,u));if(r)for(g in v)g in w||b.ta(y,g)}if(f.W||q.W){v=f.W||G;w=q.W||G;if(r)for(g in v)w[g]||y.classList.remove(g);for(g in w)if(u=w[g],u!==v[g])y.classList[w[g]?"add":"remove"](g)}if(f.Y||q.Y){v=f.Y||G;w=q.Y||G;if(r)for(g in v)void 0===w[g]&&delete y[g];for(g in w)u=w[g],v[g]===u||"value"===g&&y[g]===u||(y[g]=u)}if(f.Z||q.Z){v=f.Z||G;w=q.Z||G;if(r)for(g in v)w[g]||(y.style[g]="");for(g in w)u=w[g],u!==v[g]&&(y.style[g]=
u)}v=f.D;w=q.D;if(v||w){R||(R=d.ya());if(r&&v&&f.T)for(g in v)w&&w[g]||f.b.removeEventListener(g,f.T,R);if(w)for(g in u=q.T=f.T||wa(),u.bb=q,w)v&&v[g]||y.addEventListener(g,u,R)}}function wa(){return function b(f){var q=b.bb,r=f.type,g=q.D;g&&g[r]&&ca(g[r],q,f)}}function ca(d,b,f){if("function"===typeof d)d.call(b,f,b);else if(null!==d&&"object"===typeof d)if("function"===typeof d[0])if(2===d.length)d[0].call(b,d[1],f,b);else{var q=d.slice(1);q.push(f);q.push(b);d[0].apply(b,q)}else for(b=0;b<d.length;b++)ca(d[b])}
function xa(d,b){function f(g,q,r){var u=0;if(0===g.g){if(v&&(g=g.C&&g.C.name,g=A(g)?v.la&&v.la[g]:v.B,A(g))){for(d.Fa=!0;u<g.length;u++)b.F(q,b.da(b.La(g[u]),g[u]));d.Fa=!1}return null}if(A(g.j))g.b=b.ra(g.j);else{q=g.b=g.Ga?b.Ha(g.Ga,g.g):b.aa(g.g);ba(d,b,null,g);var x=g.f;A(w)&&b.I(g.b,"ssrc",w+"."+r+(da(x)?"":"."));if(x)for(;u<x.length;++u)if(r=f(x[u],q,u))A(w)&&3===r.nodeType&&b.F(q,b.qa("s."+w+"."+u)),b.F(q,r),A(w)&&3===r.nodeType&&b.F(q,b.qa("/"))}return g.b}function q(d,g,q,r,u){for(var v;r<=
u;++r){var x=q[r];A(x)&&(v=A(x.j)?b.ra(x.j):f(x,d,r),A(v)&&(x.b=v,b.H(d,v,g)))}}function r(f,d,g,q){for(;g<=q;++g){var r=d[g];A(r)&&(A(r.b)&&V(r),b.da(f,r.b))}}function g(b,f){return b.g===f.g&&b.X===f.X}function u(v,w){var x=w.b=v.b,z=v.f,D=w.f;if(T(w.j))if(y&&w.Ca||0===w.g||ba(d,b,v,w),A(z)&&A(D)){if(!y||!w.Ba){v=w=0;for(var C=z.length-1,B=z[0],E=z[C],I=D.length-1,F=D[0],J=D[I],K=void 0,H,L;w<=C&&v<=I;)if(null==B)B=z[++w];else if(null==E)E=z[--C];else if(null==F)F=D[++v];else if(null==J)J=D[--I];
else if(g(B,F))u(B,F),B=z[++w],F=D[++v];else if(g(E,J))u(E,J),E=z[--C],J=D[--I];else if(g(B,J))u(B,J),b.H(x,B.b,b.Ka(E.b)),B=z[++w],J=D[--I];else if(g(E,F))u(E,F),b.H(x,E.b,B.b),E=z[--C],F=D[++v];else{if(T(K)){var O;H=z;L=C;for(var ea={},K=w;K<=L;++K)O=H[K],null!=O&&(O=O.X,void 0!==O&&(ea.k=K));K=ea}H=K[F.X];T(H)?H=f(F,x,v):(L=z[H],L.g!==F.g?H=f(F,x,H):(u(L,F),z[H]=void 0,H=L.b));F=D[++v];H&&b.H(x,H,B.b)}w>C?q(x,null==D[I+1]?null:D[I+1].b,D,v,I):v>I&&r(x,z,w,C)}}else A(D)?(A(v.j)&&b.ea(x,""),q(x,
null,D,0,D.length-1)):A(z)&&r(x,z,0,z.length-1);else x.i&&x.i.B?(z=x.i.B[0].parentElement,b.ea(z,w.j),x.i.B=[z.childNodes[0]]):b.ea(x,w.j)}var y=void 0,v=void 0,w=void 0;return function(f,d,g,q,r){y=g;v=q;w=r;u(f,d);A(w)&&b.I(f.b,"ssrv",w);return d}}function V(d){if(d.D&&d.T)for(var b in d.D)d.b.removeEventListener(b,d.D,!1);if(A(d.f))for(b=0;b<d.f.length;++b)d.f[b]&&V(d.f[b])}function da(d){if(d)for(var b=0;b<d.length;b++)if(0!==d[b].g||da(d[b].f))return!0;return!1}function ya(d,b){function f(){for(;0<
y.length;)y.shift()();C=!1}function q(){var d=b();for(f();0<v.length&&40>b()-d;)v.shift()();if(0===v.length)for(;0<w.length&&40>b()-d;)w.shift()();(B=0<v.length||0<w.length)&&g(r)}function r(){f();for(var d=b();0<v.length&&4>b()-d;)v.shift()();(B=0<v.length||0<w.length)&&g(q)}var g=d.Za,u=Promise.resolve(),y=[],v=[],w=[],C=!1,B=!1;return{add:function(b,d){3===d?(y.push(b),C||(C=!0,u.then(f))):(1===d?w.push(b):v.push(b),B||(B=!0,g(q)))},flush:r}}function za(d){var b=d.performance=d.performance||{};
if(!b.now){var f=Date.now();b.now=function(){return Date.now()-f}}return function(){return b.now()}}function W(d,b){if(A(b)){if(1===d)return"false"===b?!1:""===b||!!b;if(2===d)return parseFloat(b)}return b}function Aa(d,b,f,q,r){q!==r&&(f=f.toLowerCase(),(d=d.w(b).u.find(function(b){return b.N===f}))&&(b[d.V]=W(d.Aa,r)))}function Ba(d,b){b.wa||(b.wa=!0,delete b.fa,d.oa.add(function(){var f=d.w(b);Ca(d,b);d.Oa(b,f.ab);d.Xa(f,b,function(){b.ia()})},3))}function Ca(d,b){for(var f=b;f=X(f);)if(d.w(f)){f.S||
(b.L=f,f.v?f.v.push(b):f.v=[b]);break}}function fa(d,b){b.ha||(b.ha=!0,d.oa.add(function(){b.ha=!1;if(!b.fa){var f=!b.$instance;f&&Da(d,b);b.Ma(!f);f&&b.ga()}}))}function Ea(d,b,f,q){var r=0;if(q.ka)for(;r<q.ka.length;r++){var g=q.ka[r];Object.defineProperty(b,g,{configurable:!0,value:f[g].bind(f)})}g=f.R={};q.na&&(g.K={});q.ma&&(g.J={});if(q.pa)for(r=0;r<q.pa.length;r++)ga(!1,!0,"",q.pa[r],0,f,g,d,b,q.na,q.ma);if(q.u)for(r=0;r<q.u.length;r++)ga(!0,q.u[r].Wa,q.u[r].N,q.u[r].V,q.u[r].Aa,f,f.R,d,b,
q.na,q.ma)}function ga(d,b,f,q,r,g,u,y,v,w,C){function B(){return u[q]}function x(b){var f=u[q];if(b!==f){if(u.K&&u.K[q])u.K[q](b,f);u[q]=b;if(u.J&&u.J[q])u.J[q](b,f);fa(y,v)}}d?(f=v.getAttribute(f),null!==f?u[q]=W(r,f):void 0!==v[q]?u[q]=W(r,v[q]):void 0!==g[q]&&(u[q]=g[q])):u[q]=g[q];r=0;if(w)for(r=0;r<w.length;r++)w[r][0]===q&&(u.K[q]=g[w[r][1]].bind(g));if(C)for(r=0;r<C.length;r++)C[r][0]===q&&(u.J[q]=g[C[r][1]].bind(g));d&&Object.defineProperty(v,q,{configurable:!0,get:B,set:x});d={configurable:!0,
get:B};d.set=b?x:function(){console.warn('@Prop() "'+q+'" on "'+v.tagName.toLowerCase()+'" cannot be modified.')};Object.defineProperty(g,q,d)}function Fa(d,b,f){return f.split(" ").reduce(function(f,r){f[r]=!0;d&&(f[r+"-"+d]=!0,b&&(f[r+"-"+b]=!0,f[r+"-"+d+"-"+b]=!0));return f},{})}function Ga(d,b,f){var q=b.$instance,r=d.w(b);f&&q.componentWillUpdate&&q.componentWillUpdate();var g=q.render&&q.render(),u=q.hostData&&q.hostData(),y=r.Va;if(g||u||y)y&&(u=Object.keys(y).reduce(function(b,f){switch(f){case "theme":b["class"]=
b["class"]||{},b["class"]=Object.assign(b["class"],Fa(q.mode,q.color,y.theme))}return b},u||{})),r=b.M||new N,r.b=b,u&&(u.a=u.attrs,u.c=u["class"],u.s=u.style,u.o=u.on),b.M=d.render(r,Z(null,u,g),f,b.i);f&&q.componentDidUpdate&&q.componentDidUpdate()}function Ha(d,b){b.connectedCallback=function(){Ba(d,this)};b.attributeChangedCallback=function(b,q,r){Aa(d,this,b,q,r)};b.disconnectedCallback=function(){if(!d.Fa){this.fa=!0;var b=this.$instance;b&&(b.componentDidUnload&&b.componentDidUnload(),this.$instance=
b.P=b.R=b.R.K=b.R.J=null);if(b=this.A){for(var q=Object.keys(b),r=0;r<q.length;r++)b[q[r]]();this.A=null}this.M&&V(this.M);this.i&&(this.i=this.i.B=this.i.la=null);this.M=this.L=this.v=this.wa=this.ha=this.S=null}};b.ia=function(){fa(d,this)};b.ga=function(){var b=this.$instance;if(!(!b||this.fa||this.v&&this.v.length)){this.v=null;var q=d.w(this).ja;if(q)for(var r=0;r<q.length;r++){var g=q[r];!1!==g.Ua&&((this.A=this.A||{})[g.O]=U(d,this,g.O,b[g.U].bind(b),g))}this.S=!0;b.componentDidLoad&&b.componentDidLoad();
this.classList.add("\ud83d\udc8e");this.L&&(q=(b=this.L.v)&&b.indexOf(this),-1<q&&b.splice(q,1),!b.length&&this.L.ga(),delete this.L)}};b.Ma=function(b){Ga(d,this,b)}}function Da(d,b){var f=d.w(b),q=b.$instance=new f.Na;q.P=b;f.za&&Object.defineProperty(q,f.za,{get:function(){return this.P}});Ea(d,b,q,f);pa(d,f.xa,q);q.componentWillLoad&&q.componentWillLoad()}var oa={enter:13,escape:27,space:32,tab:9},Y="touch mouse pointer key focus blur drag".split(" "),P=[],G={},R=null,ta={allowfullscreen:1,async:1,
autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},va="http://www.w3.org/1999/xlink",ua="http://www.w3.org/XML/1998/namespace";M=S[M]=S[M]||{};var ha=function(d,b,f,q,r){function g(b){function d(){clearTimeout(g);f.onerror=f.onload=null;x.da(f.parentNode,f);delete B[b]}var f=x.aa("script");f.charset="utf-8";f.async=!0;f.src=b;var g=setTimeout(d,12E4);f.onerror=f.onload=d;x.F(x.ba,f)}var u=
{HTML:{}},y={},v={},w={},C={},B={},x=sa(q);q=za(f);d.dom=ra(f,q);d.addListener=function(b,d,f,g){return U(z,b,d,f,g)};d.enableListener=function(b,d,f,g){var q=z;if(b){var r=b.P,u=q.w(r).ja;if(u)for(var v=r.A=r.A||{},w=0;w<u.length;w++){var E=u[w];if(E.O===d){f&&!v[d]?v[d]=U(q,r,g?g+":"+d:d,b[E.U].bind(b),E):!f&&v[d]&&(v[d](),delete r.A[d]);break}}}};d.emit=function(b,f,g){b.dispatchEvent(new A(d.eventNameFn?d.eventNameFn(f):f,g))};d.isClient=!0;d.isServer=!1;var z={$a:function(b){return(b||[]).map(function(b){var d=
{Ea:b[0],u:[{V:"color",N:"color"},{V:"mode"}]};d.Ya=b[1];d.Da=b[2]||{};d.ab=b[3];if(b[4])for(var f=0;f<b[4].length;f++){var g=b[4][f];d.u.push({V:g[0],N:1===g[1]?g[0].toLowerCase():la(g[0]),Aa:g[2],Wa:!!g[3]})}d.ib=b[5];return u[d.Ea]=d})},Pa:function(b,d){Ha(z,d.prototype);d.observedAttributes=b.u.filter(function(b){return b.N}).map(function(b){return b.N});f.customElements.define(b.Ea.toLowerCase(),d)},w:function(b){return u[b.tagName]},Xa:function(b,d,f){var q=b.Ya;w[q]?f():(v[q]?v[q].push(f):
v[q]=[f],f=r+q+".js",B[f]||(B[f]=!0,g(f)),(b=b.Da[d.mode]||b.Da.$)&&!C[b]&&(C[b]=!0,d=x.aa("link"),d.href=r+b+".css",d.rel="stylesheet",x.H(x.ba,d,x.ba.firstChild)))},oa:ya(d.dom,q),Oa:function(b,f){b.mode||(b.mode=x.G(b,"mode")||d.mode);if(!x.G(b,"ssrv")){var g=x,q=b.childNodes;if(2===f){for(var r=f=void 0,u=void 0,v=0,w=q.length;v<w;v++){var y=q[v];1===g.ca(y)&&null!=(f=g.G(y,"slot"))?(u=u||{},u[f]?u[f].push(y):u[f]=[y]):r?r.push(y):r=[y]}b.i={B:r,la:u}}else 1===f&&(b.i={B:q.length?Array.apply(null,
q):null})}},Qa:d.emit,ya:function(b){return G?{capture:!(!b||!b.capture),passive:!(b&&!1===b.passive)}:!(!b||!b.capture)}};z.render=xa(z,x);var D=x.Ja;D.v=[];D.ga=function(){D.S=!0};qa(x,D);b.defineComponents=function(b,f){var g=arguments;f(y,Z,Q,d,r);for(var q=2;q<g.length;q++){var x=g[q],z=u[x[0]];z.Na=y[x[0]];z.Va=x[1];if(x[2]){z.ja=[];for(var B=0;B<x[2].length;B++){var A=x[2][B];z.ja.push({U:A[0],O:A[1],fb:!!A[2],gb:!!A[3],Ua:!!A[4]})}}z.pa=x[3];z.na=x[4];z.ma=x[5];if(x[6])for(z.xa=[],B=0;B<x[6].length;B++)A=
x[6][B],z.xa.push({O:A[0],U:A[1],Ra:!!A[2],Sa:!!A[3],Ta:!!A[4]});z.ka=x[7];z.za=x[8];z.hb=!!x[9]}if(g=v[b]){for(q=0;q<g.length;q++)g[q]();delete v[b]}w[b]=!0};var A=f.CustomEvent;"function"!==typeof A&&(A=function(b,d){var f=x.Ia();f.initCustomEvent(b,d.bubbles,d.cancelable,d.detail);return f},A.prototype=f.Event.prototype);var G=!1;try{f.addEventListener("eopt",null,Object.defineProperty({},"passive",{get:function(){G=!0}}))}catch(E){}return z}(ja,M,S,ia,ka);ha.$a(M.components).forEach(function(d){function b(b){return HTMLElement.call(this,
b)}b.prototype=Object.create(HTMLElement.prototype,{constructor:{value:b,configurable:!0}});ha.Pa(d,b)})})(window,document,Core,appNamespace,publicPath);
})({},"App","build/app/");