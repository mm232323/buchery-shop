import{r as f}from"./index-Beml1ju3.js";const M=f.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),S=f.createContext(null),E=typeof document<"u",L=E?f.useLayoutEffect:f.useEffect;class p{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const s=this.order.indexOf(e);s!==-1&&(this.order.splice(s,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function F(n){let e=new p,s=new p,a=0,r=!1,c=!1;const h=new WeakSet,i={schedule:(o,d=!1,l=!1)=>{const t=l&&r,u=t?e:s;return d&&h.add(o),u.add(o)&&t&&r&&(a=e.order.length),o},cancel:o=>{s.remove(o),h.delete(o)},process:o=>{if(r){c=!0;return}if(r=!0,[e,s]=[s,e],s.clear(),a=e.order.length,a)for(let d=0;d<a;d++){const l=e.order[d];h.has(l)&&(i.schedule(l),n()),l(o)}r=!1,c&&(c=!1,i.process(o))}};return i}const m=["read","resolveKeyframes","update","preRender","render","postRender"],w=40;function R(n,e){let s=!1,a=!0;const r={delta:0,timestamp:0,isProcessing:!1},c=m.reduce((t,u)=>(t[u]=F(()=>s=!0),t),{}),h=t=>{c[t].process(r)},i=()=>{const t=performance.now();s=!1,r.delta=a?1e3/60:Math.max(Math.min(t-r.timestamp,w),1),r.timestamp=t,r.isProcessing=!0,m.forEach(h),r.isProcessing=!1,s&&e&&(a=!1,n(i))},o=()=>{s=!0,a=!0,r.isProcessing||n(i)};return{schedule:m.reduce((t,u)=>{const x=c[u];return t[u]=(g,C=!1,P=!1)=>(s||o(),x.schedule(g,C,P)),t},{}),cancel:t=>m.forEach(u=>c[u].cancel(t)),state:r,steps:c}}const q=f.createContext({});function A(n){const e=f.useRef(null);return e.current===null&&(e.current=n()),e.current}const v=n=>n,{schedule:B,cancel:K,state:O,steps:T}=R(typeof requestAnimationFrame<"u"?requestAnimationFrame:v,!0);export{q as L,M,S as P,A as a,O as b,R as c,K as d,B as f,E as i,v as n,T as s,L as u};