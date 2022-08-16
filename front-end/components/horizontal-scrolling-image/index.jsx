import { ImageSet1, ImageSet2, ImageSet3 } from "./image-set";

function HorizontalImage() {
  return (
    <div className="horizontal">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <ImageSet1 />
          </div>
          <div class="carousel-item">
            <ImageSet2 />
          </div>
          <div class="carousel-item ">
            <ImageSet3 />
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}

export default HorizontalImage;
