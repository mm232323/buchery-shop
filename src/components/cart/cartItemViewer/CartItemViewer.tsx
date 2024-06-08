import { useState,memo } from "react";
import { updateQty } from "../../../util/http";
import { cartProdsData } from "../../../util/interfaces";
import styles from "./CartItemViewer.module.css";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { queryClient } from "../../../util/http";
const CartItemViewer: React.FC<{
  cartItm: cartProdsData;
  onUpdateCartQty: () => void;
}> = memo(({ cartItm, onUpdateCartQty }) => {
  const [qty, setQty] = useState(cartItm.quantity);
  const { mutate } = useMutation({
    mutationFn: updateQty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"], exact: true });
    },
  });
  function handleIncreaseQty(cartItem: cartProdsData) {
    mutate({ cartItem, Url: "increase" });
    onUpdateCartQty();
    setQty((pevQty) => pevQty + 1);
  }
  function handleDecreaseQty(cartItem: cartProdsData) {
    mutate({ cartItem, Url: "decrease" });
    onUpdateCartQty();
    setQty((pevQty) => pevQty - 1);
  }
  return (
    qty !== 0 && (
      <motion.div layout exit={{ opacity: 0, translateY: 20 }}>
        <div className={styles.cartItm__container}>
          <div className={styles.prod__details}>
            <img src={cartItm.imgUrl} alt="cart item image url" />
            <h3>{cartItm.name}</h3>
            <p>{cartItm.type}</p>
          </div>
          <h1 className={styles.prod__price}>{cartItm.price} ر.س</h1>
          <div className={styles.prod__quantity}>
            <button onClick={() => handleIncreaseQty(cartItm)}>+</button>
            <h3>{qty}</h3>
            <button onClick={() => handleDecreaseQty(cartItm)}>-</button>
          </div>
          <motion.h1
            animate={{ opacity: 100, translateY: 0 }}
            className={styles.prod__price}
          >
            {cartItm.price * qty} ر.س
          </motion.h1>
        </div>
        <div className={styles.cartItm__seperator}></div>
      </motion.div>
    )
  );
})
export default CartItemViewer;
