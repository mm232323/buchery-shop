import styles from "./ProductViewer.module.css";
import { lazy } from "react";
import { shopProdsData } from "../../../util/interfaces";
const ProductItemViewer = lazy(
  () => import("./productItemViewer/ProductItemViewer")
);
import { memo } from "react";
const ProductViewer: React.FC<{ product: shopProdsData }> = memo((props) => {
  return (
    <div
      className={styles.product__container}
      style={{
        backgroundImage: `linear-gradient(to right,${props.product.colors[0]},${props.product.colors[1]})`,
      }}
    >
      <h1 className={styles.product__title}>{props.product.type}</h1>
      <div className={styles.product_items__container}>
        {props.product.prods.reverse().map((prodItem) => (
          <ProductItemViewer
            type={props.product.type}
            color={props.product.colors[2]}
            productItem={prodItem}
            key={prodItem.id}
          />
        ))}
      </div>
    </div>
  );
});
export default ProductViewer;
