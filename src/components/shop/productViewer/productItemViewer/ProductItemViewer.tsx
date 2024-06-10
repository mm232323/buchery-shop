import { memo } from "react";
import { postCartData } from "../../../../util/http";
import { cartProdsData, shopProdItemData } from "../../../../util/interfaces";
import styles from "./ProductItemViewer.module.css";
import { FaCartPlus } from "react-icons/fa";
const ProductItemViewer: React.FC<{
  productItem: shopProdItemData;
  color: string;
  type: string;
}> = memo((props) => {
  function addToCart(productItm: shopProdItemData) {
    const cartDataProd: cartProdsData = {
      name: productItm.name,
      type: props.type,
      imgUrl: productItm.image,
      price: +productItm.priceAfterDiscount,
      quantity: 1,
    };
    postCartData(cartDataProd);
  }
  return (
    <div className={styles.product_item__container}>
      <img
        className={styles.product_item__img}
        src={props.productItem.image}
        alt={`${props.productItem.name} image`}
      />
      <div
        className={styles.product_item__details}
        style={{ color: props.color }}
      >
        <h3>{props.productItem.name}</h3>
        <h5>{props.productItem.price} ر.س</h5>
        <h4>{props.productItem.priceAfterDiscount} ر.س</h4>
        <button
          style={{ backgroundColor: props.color }}
          className={styles.product_item__addToCart}
          onClick={() => addToCart(props.productItem)}
        >
          {<p>اضف إلي</p>}
          <FaCartPlus color="white" className={styles.icon} size={25} />
        </button>
      </div>
    </div>
  );
})
export default ProductItemViewer;
