var S=s=>{throw TypeError(s)};var j=(s,t,e)=>t.has(s)||S("Cannot "+e);var i=(s,t,e)=>(j(s,t,"read from private field"),e?e.call(s):t.get(s)),x=(s,t,e)=>t.has(s)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),_=(s,t,e,r)=>(j(s,t,"write to private field"),r?r.call(s,e):t.set(s,e),e),v=(s,t,e)=>(j(s,t,"access private method"),e);import{S as N,s as R,o as k,k as E,u as Q,r as m,j as a,p as U,q as D}from"./index-BxpujTYj.js";import{s as L}from"./useQuery-Bkmz3ofv.js";import{m as q}from"./proxy-BtV4rMHV.js";import"./use-constant-DTL2RLjD.js";var p,n,o,c,l,g,O,w,Y=(w=class extends N{constructor(t,e){super();x(this,l);x(this,p);x(this,n);x(this,o);x(this,c);_(this,n,void 0),_(this,p,t),this.setOptions(e),this.bindMethods(),v(this,l,g).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const e=this.options;this.options=i(this,p).defaultMutationOptions(t),R(e,this.options)||i(this,p).getMutationCache().notify({type:"observerOptionsUpdated",mutation:i(this,o),observer:this}),(r=i(this,o))==null||r.setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=i(this,o))==null||t.removeObserver(this)}onMutationUpdate(t){v(this,l,g).call(this),v(this,l,O).call(this,t)}getCurrentResult(){return i(this,n)}reset(){_(this,o,void 0),v(this,l,g).call(this),v(this,l,O).call(this)}mutate(t,e){var r;return _(this,c,e),(r=i(this,o))==null||r.removeObserver(this),_(this,o,i(this,p).getMutationCache().build(i(this,p),this.options)),i(this,o).addObserver(this),i(this,o).execute(t)}},p=new WeakMap,n=new WeakMap,o=new WeakMap,c=new WeakMap,l=new WeakSet,g=function(){var e;const t=((e=i(this,o))==null?void 0:e.state)??k();_(this,n,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},O=function(t){E.batch(()=>{var e,r,h,y,d,u,b,C;i(this,c)&&this.hasListeners()&&((t==null?void 0:t.type)==="success"?((r=(e=i(this,c)).onSuccess)==null||r.call(e,t.data,i(this,n).variables,i(this,n).context),(y=(h=i(this,c)).onSettled)==null||y.call(h,t.data,null,i(this,n).variables,i(this,n).context)):(t==null?void 0:t.type)==="error"&&((u=(d=i(this,c)).onError)==null||u.call(d,t.error,i(this,n).variables,i(this,n).context),(C=(b=i(this,c)).onSettled)==null||C.call(b,void 0,t.error,i(this,n).variables,i(this,n).context))),this.listeners.forEach(M=>{M(i(this,n))})})},w);function A(s,t){const e=Q(),[r]=m.useState(()=>new Y(e,s));m.useEffect(()=>{r.setOptions(s)},[r,s]);const h=m.useSyncExternalStore(m.useCallback(d=>r.subscribe(E.batchCalls(d)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),y=m.useCallback((d,u)=>{r.mutate(d,u).catch(F)},[r]);if(h.error&&L(r.options.throwOnError,[h.error]))throw h.error;return{...h,mutate:y,mutateAsync:h.mutate}}function F(){}const K="_cartItm__container_8dywg_1",P="_prod__details_8dywg_19",T="_prod__price_8dywg_43",V="_prod__quantity_8dywg_55",f={cartItm__container:K,prod__details:P,prod__price:T,prod__quantity:V},W=m.memo(({cartItm:s,onUpdateCartQty:t})=>{const[e,r]=m.useState(s.quantity),{mutate:h}=A({mutationFn:U,onSuccess:()=>{D.invalidateQueries({queryKey:["cart"],exact:!0})}});function y(u){h({cartItem:u,Url:"increase"}),t(u.price),r(b=>b+1)}function d(u){h({cartItem:u,Url:"decrease"}),t(-u.price),r(b=>b-1)}return e!==0&&a.jsxs(q.div,{layout:!0,exit:{opacity:0,translateY:20},children:[a.jsxs("div",{className:f.cartItm__container,children:[a.jsxs("div",{className:f.prod__details,children:[a.jsx("img",{src:s.imgUrl,alt:"cart item image url"}),a.jsx("h3",{children:s.name}),a.jsx("p",{children:s.type})]}),a.jsxs("h1",{className:f.prod__price,children:[s.price," ر.س"]}),a.jsxs("div",{className:f.prod__quantity,children:[a.jsx("button",{onClick:()=>y(s),children:"+"}),a.jsx("h3",{children:e}),a.jsx("button",{onClick:()=>d(s),children:"-"})]}),a.jsxs(q.h1,{animate:{opacity:100,translateY:0},className:f.prod__price,children:[s.price*e," ر.س"]})]}),a.jsx("div",{className:f.cartItm__seperator})]})});export{W as default};
