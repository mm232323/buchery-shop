import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
const ImageComponent: React.FC<{ src: string; alt?: string ;className:string}> = ({
  src,
  alt,
  className
}) => {
  const [imageLoad, setImageLoad] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoad(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoad && (
        <Blurhash
          hash="oOHnT#~Wx^x[%Mxu~WflIoRifkWC?w%M%2t7%2t7tRaKn$NGf6j[xuofnhNGNGWC%MoeM{R%NGog"
          width="100%"
          height="100%"
          resolutionX={8}
          resolutionY={8}
          className={className}
        />
      )}
      {imageLoad && <img className={className} src={src} alt={alt} />}
    </>
  );
};
export default ImageComponent;
