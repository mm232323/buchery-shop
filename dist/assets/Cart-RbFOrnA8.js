const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Header-CkR9z_TJ.js","assets/index-BxpujTYj.js","assets/index-C6KOki5O.css","assets/whiteLogo-XC7EW-sY.js","assets/Header-BF5oJjhl.css","assets/LoadingSpinner-DIPLelrH.js","assets/LoadingSpinner-C8cq31Nn.css","assets/CartItemViewer-GmT7cQYP.js","assets/useQuery-Bkmz3ofv.js","assets/proxy-BtV4rMHV.js","assets/use-constant-DTL2RLjD.js","assets/CartItemViewer-k-SDP0hr.css"])))=>i.map(i=>d[i]);
import{r as c,j as t,_ as n,a as m}from"./index-BxpujTYj.js";import{u as p}from"./useQuery-Bkmz3ofv.js";const h="_cart__container_nuex2_1",y="_cart__section_nuex2_7",j="_headers_nuex2_33",g="_cartBg_nuex2_53",f="_cart__seperator_nuex2_65",v="_empty__fallback_nuex2_81",b="_cart__totalPrice_nuex2_95",E="_cart__delivery_nuex2_97",P="_cart__buyWays_nuex2_99",N="_ways_nuex2_123",C="_cart__buyBut_nuex2_161",e={cart__container:h,cart__section:y,headers:j,cartBg:g,cart__seperator:f,empty__fallback:v,cart__totalPrice:b,cart__delivery:E,cart__buyWays:P,ways:N,cart__buyBut:C},B="/paypal.png",k="/visa.png",w="/masterCard.png",D="/americanExpress.png",I=c.lazy(()=>n(()=>import("./Header-CkR9z_TJ.js"),__vite__mapDeps([0,1,2,3,4]))),L=c.lazy(()=>n(()=>import("./LoadingSpinner-DIPLelrH.js"),__vite__mapDeps([5,1,2,6]))),R=c.lazy(()=>n(()=>import("./CartItemViewer-GmT7cQYP.js"),__vite__mapDeps([7,1,2,8,9,10,11])));function q(){const[o,i]=c.useState(0);function d(r){i(s=>s+r)}const{data:a,isPending:u,isError:x,error:l}=p({queryKey:["cart"],queryFn:m});let _;return x&&(_=t.jsxs("p",{children:[l.name,":",l.message]})),u&&(_=t.jsx(L,{})),a&&(_=a.products.map(r=>t.jsx(R,{onUpdateCartQty:d,cartItm:r},r.name))),c.useEffect(()=>{if(a){let r=0;for(let s=0;s<a.products.length;s++)r+=a.products[s].quantity*a.products[s].price;i(r)}},[a]),t.jsxs("div",{className:e.cart__container,children:[t.jsx(I,{theme:"dark"}),t.jsx("center",{children:t.jsxs("section",{className:e.cart__section,style:{marginBottom:a&&a.products.length==0?379:300},children:[t.jsxs("div",{className:e.headers,children:[t.jsx("h3",{children:"المنتج"}),t.jsx("h3",{children:"السعر"}),t.jsx("h3",{children:"الكمية"}),t.jsx("h3",{children:"المجموع"})]}),t.jsx("div",{className:e.cart__seperator}),a&&a.products.length==0&&t.jsx("p",{className:e.empty__fallback,children:"لا توجد منتجات في سلة المشتريات"}),_,a&&a.products.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:e.cart__totalPrice,children:[t.jsx("h1",{children:"إجمالي المجموع"}),t.jsxs("h1",{children:[o," ر.س"]})]}),t.jsxs("div",{className:e.cart__delivery,children:[t.jsx("h1",{children:"التوصيل"}),t.jsx("h1",{children:"مجاني"})]}),t.jsxs("div",{className:e.cart__buyWays,children:[t.jsx("h1",{children:"طريقة الدفع"}),t.jsxs("div",{className:e.ways,children:[t.jsx("img",{src:B,alt:"paypal"}),t.jsx("img",{src:k,alt:"visa"}),t.jsx("img",{src:w,alt:"masterCard"}),t.jsx("img",{src:D,alt:"americanExpress"})]})]}),t.jsx("button",{className:e.cart__buyBut,children:"دفع"})]})]})})]})}export{q as default};