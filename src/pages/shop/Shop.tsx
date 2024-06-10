import styles from "./Shop.module.css";
import {lazy} from 'react'
const  Header  = lazy(() => import("../../components/layout/header/Header"));
const PageIder  = lazy(() => import("../../components/UI/pageIder/PageIder"))
import shopIdImg from "/shopIdImg.png";
import { fetchShopProducts } from "../../util/http";
import { useQuery } from "@tanstack/react-query";
const LoadingSpinner  = lazy(() => import("../../components/UI/loadingSpinner/LoadingSpinner"))
const ScrollButton  = lazy(() => import("../../components/shop/scrollButton/ScrollButton"))
const ProductViewer  = lazy(() => import("../../components/shop/productViewer/ProductViewer"))
import { AnimatePresence } from "framer-motion";
import slaughterLinkImg from "/slaughterhouseLinkImg.png";
import barbecueLinkImg from "/barbecueLinkImg.png";
const Button = lazy(() => import("../../components/UI/button/Button"))
export default function Shop() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchShopProducts,
  });
  let content;
  if (isError)
    content = (
      <p>
        {error.name}: {error.message}
      </p>
    );
  if (isPending) content = <LoadingSpinner />;
  return (
    <div className={styles.shop__container}>
      <Header theme="dark" />
      <PageIder color="#571D1D" img={shopIdImg}>
        السوق
      </PageIder>
      <br />
      {isPending && content}
      {data && (
        <>
          <div className={styles.shop__headers}>
            <AnimatePresence>
              {data.reverse().map((product) => (
                <ScrollButton
                  scrollPos={product.YPosition}
                  color={product.colors[0]}
                  key={product.prodId}
                >
                  {product.type}
                </ScrollButton>
              ))}
            </AnimatePresence>
          </div>
          <div className={styles.shop__products}>
            <AnimatePresence>
              {data.reverse().map((product) => (
                <ProductViewer key={product.prodId} product={product} />
              ))}
            </AnimatePresence>
          </div>
        </>
      )}
      <section className={styles.shop__links}>
        <div className={styles.images__container}>
          <img
            style={{ borderRight: "1px white solid" }}
            src={barbecueLinkImg}
            alt="barbecue link image"
          />
          <img src={slaughterLinkImg} alt="slaughte-house link image" />
        </div>
        <p className={styles.slaughter__text}>
          أحصل علي جميع <br></br>مميزات الذبح وجزارة<br></br> بسعر رخيص وجودة
          عالية
        </p>
        <Button Y={13} X={16} linkTo="/main/barbecue">
          تصفح الأن
        </Button>
        <p className={styles.barbecue__text}>
          المجزراتي يقدم افضل<br></br> خدمات الشوي الفاخرة<br></br> وعدة سنوات
          من الخبرة<br></br> و الكفائه
        </p>
        <Button Y={17} X={46} linkTo="/main/slaughterhouse">
          تصفح الأن
        </Button>
      </section>
    </div>
  );
}
