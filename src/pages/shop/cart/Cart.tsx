import styles from "./Cart.module.css";
import {lazy} from 'react'
const Header = lazy(() => import("../../../components/layout/header/Header"))
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCartData } from "../../../util/http";
const LoadingSpinner = lazy(() => import("../../../components/UI/loadingSpinner/LoadingSpinner"))
const CartItemViewer = lazy(() => import("../../../components/cart/cartItemViewer/CartItemViewer"))
import paypal from "/paypal.png";
import visa from "/visa.png";
import masterCard from "/masterCard.png";
import americanExpress from "/americanExpress.png";
export default function Cart() {
  const [finalPrice, setFinalPrice] = useState(0);
  function updateCartQty(price:number) {
    setFinalPrice(prevFinalPrice => prevFinalPrice + price)
  }
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCartData,
  });
  let content;
  if (isError)
    content = (
      <p>
        {error.name}:{error.message}
      </p>
    );
  if (isPending) content = <LoadingSpinner />;
  if (data) {
    content = data.products.map((product) => (
      <CartItemViewer
        onUpdateCartQty={updateCartQty}
        key={product.name}
        cartItm={product}
      />
    ));
  }
  useEffect(() => {
    if (data) {
      let finalDataCollector = 0
      for (let i = 0; i < data.products.length; i++) {
        finalDataCollector += data.products[i].quantity * data.products[i].price
      }
      setFinalPrice(finalDataCollector)
    }
  }, [data]);
  return (
    <div className={styles.cart__container}>
      <Header theme="dark" />
      <center>
        <section className={styles.cart__section} style={{marginBottom:(data && data.products.length == 0) ? 379 : 300}}>
          <div className={styles.headers}>
            <h3>المنتج</h3>
            <h3>السعر</h3>
            <h3>الكمية</h3>
            <h3>المجموع</h3>
          </div>
          <div className={styles.cart__seperator}></div>
          {data && data.products.length == 0 && (
            <p className={styles.empty__fallback}>
              لا توجد منتجات في سلة المشتريات
            </p>
          )}
          {content}
          {data && data.products.length > 0 && (
            <>
              <div className={styles.cart__totalPrice}>
                <h1>إجمالي المجموع</h1>
                <h1>{finalPrice} ر.س</h1>
              </div>
              <div className={styles.cart__delivery}>
                <h1>التوصيل</h1>
                <h1>مجاني</h1>
              </div>
              <div className={styles.cart__buyWays}>
                <h1>طريقة الدفع</h1>
                <div className={styles.ways}>
                  <img src={paypal} alt="paypal" />
                  <img src={visa} alt="visa" />
                  <img src={masterCard} alt="masterCard" />
                  <img src={americanExpress} alt="americanExpress" />
                </div>
              </div>
              <button className={styles.cart__buyBut}>دفع</button>
            </>
          )}
        </section>
      </center>
    </div>
  );
}
