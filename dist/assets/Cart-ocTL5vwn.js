const __vite__fileDeps=["assets/Header-CdNUXSyh.js","assets/index-Beml1ju3.js","assets/index-BEpvqjXs.css","assets/whiteLogo-XC7EW-sY.js","assets/Header-BBLWY-lQ.css","assets/LoadingSpinner-BBgM6ZP3.js","assets/LoadingSpinner-C32VEv4P.css","assets/CartItemViewer-Cc9BWx9V.js","assets/useQuery-BLtftLHs.js","assets/motion-78ofFGR3.js","assets/frame-DpbGo-EL.js","assets/CartItemViewer-DErfmAhJ.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as s,j as t,_ as n,a as p}from"./index-Beml1ju3.js";import{u as h}from"./useQuery-BLtftLHs.js";const y="_cart__container_nuex2_1",j="_cart__section_nuex2_7",g="_headers_nuex2_33",f="_cartBg_nuex2_53",v="_cart__seperator_nuex2_65",b="_empty__fallback_nuex2_81",E="_cart__totalPrice_nuex2_95",P="_cart__delivery_nuex2_97",N="_cart__buyWays_nuex2_99",C="_ways_nuex2_123",B="_cart__buyBut_nuex2_161",e={cart__container:y,cart__section:j,headers:g,cartBg:f,cart__seperator:v,empty__fallback:b,cart__totalPrice:E,cart__delivery:P,cart__buyWays:N,ways:C,cart__buyBut:B},k="/paypal.png",w="/visa.png",D="/masterCard.png",I="/americanExpress.png",L=s.lazy(()=>n(()=>import("./Header-CdNUXSyh.js"),__vite__mapDeps([0,1,2,3,4]))),Q=s.lazy(()=>n(()=>import("./LoadingSpinner-BBgM6ZP3.js"),__vite__mapDeps([5,1,2,6]))),R=s.lazy(()=>n(()=>import("./CartItemViewer-Cc9BWx9V.js"),__vite__mapDeps([7,1,2,8,9,10,11])));function q(){const[,l]=s.useState(1),[o,d]=s.useState(0);function u(){l(Math.random)}const{data:a,isPending:x,isError:m,error:i}=h({queryKey:["cart"],queryFn:p});let c;return m&&(c=t.jsxs("p",{children:[i.name,":",i.message]})),x&&(c=t.jsx(Q,{})),a&&(c=a.products.map(r=>t.jsx(R,{onUpdateCartQty:u,cartItm:r},r.name))),s.useEffect(()=>{if(a){let r=0;for(let _=0;_<a.products.length;_++)r+=a.products[_].quantity*a.products[_].price;d(r)}},[a]),t.jsxs("div",{className:e.cart__container,children:[t.jsx(L,{theme:"dark"}),t.jsx("center",{children:t.jsxs("section",{className:e.cart__section,style:{marginBottom:a&&a.products.length==0?379:300},children:[t.jsxs("div",{className:e.headers,children:[t.jsx("h3",{children:"المنتج"}),t.jsx("h3",{children:"السعر"}),t.jsx("h3",{children:"الكمية"}),t.jsx("h3",{children:"المجموع"})]}),t.jsx("div",{className:e.cart__seperator}),a&&a.products.length==0&&t.jsx("p",{className:e.empty__fallback,children:"لا توجد منتجات في سلة المشتريات"}),c,a&&a.products.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:e.cart__totalPrice,children:[t.jsx("h1",{children:"إجمالي المجموع"}),t.jsxs("h1",{children:[o," ر.س"]})]}),t.jsxs("div",{className:e.cart__delivery,children:[t.jsx("h1",{children:"التوصيل"}),t.jsx("h1",{children:"مجاني"})]}),t.jsxs("div",{className:e.cart__buyWays,children:[t.jsx("h1",{children:"طريقة الدفع"}),t.jsxs("div",{className:e.ways,children:[t.jsx("img",{src:k,alt:"paypal"}),t.jsx("img",{src:w,alt:"visa"}),t.jsx("img",{src:D,alt:"masterCard"}),t.jsx("img",{src:I,alt:"americanExpress"})]})]}),t.jsx("button",{className:e.cart__buyBut,children:"دفع"})]})]})})]})}export{q as default};