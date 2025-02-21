import { GalleryContainer, SwiperGalleryContainer } from "./GalleryStyle";
import SwiperGallery from "./SwiperGallery";

const Gallery = () => {
  return (
    <div id="gallery" data-aos="fade-left">
      <GalleryContainer>
        <h1>Галлерея</h1>
        <SwiperGalleryContainer>
          <SwiperGallery />
        </SwiperGalleryContainer>
      </GalleryContainer>
    </div>
  );
};

export default Gallery;
