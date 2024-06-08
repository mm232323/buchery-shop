import styles from "./Locations.module.css";
import Header from "../../components/layout/header/Header";
import PageIder from "../../components/UI/pageIder/PageIder";
import LocationsIdImg from "/locationsIdImg.png";
import LocationsBg from "/locationsBg.png";
import { useQuery } from "@tanstack/react-query";
import { fetchLocations } from "../../util/http";
import LoadingSpinner from "../../components/UI/loadingSpinner/LoadingSpinner";
import LocViewer from "../../components/locations/locViewer/LocViewer";
export default function Locations() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
  });
  let content;
  if (isPending) content = <LoadingSpinner />;
  if (isError)
    content = (
      <p>
        {error.name}: {error.message}
      </p>
    );
  if (data)
    content = data.map((location) => (
      <LocViewer
        key={location.id}
        name={location.name}
        phone={location.phone}
        WK={location.WK}
        address={location.address}
        imgUrl={location.imgUrl}
      />
    ));
  return (
    <div className={styles.locations__container}>
      <Header theme="dark" />
      <PageIder img={LocationsIdImg} color="white">الفروع</PageIder>
      <img
        className={styles.locations__background}
        src={LocationsBg}
        alt="locations background"
      />
      <section className={styles.locations__section1}>
        {content}
      </section>
    </div>
  );
}
