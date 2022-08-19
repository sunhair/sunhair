const image1 = "/sale1.png";
const image2 = "/customer.png";
const image3 = "/virtualhair.png";

export function ImageSet1() {
  return (
    <div className="frame">
      <img src={image1} alt="" />
      <img className="image-center" src={image2} alt="" />
      <img src={image3} alt="" />
    </div>
  );
}

export function ImageSet2() {
  return (
    <div className="frame">
      <img src={image2} alt="" />
      <img className="image-center" src={image3} alt="" />
      <img src={image1} alt="" />
    </div>
  );
}

export function ImageSet3() {
  return (
    <div className="frame">
      <img src={image3} alt="" />
      <img className="image-center" src={image1} alt="" />
      <img src={image2} alt="" />
    </div>
  );
}
