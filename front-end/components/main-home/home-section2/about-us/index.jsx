import { AnimationOnScroll } from "react-animation-on-scroll";

function AboutUs() {
  return (
    <div className="container about-us">
      <div className="row justify-content-between">
        <AnimationOnScroll animateIn="animate__bounceInDown" className="col-5">
          <div className="image-wrapper shine">
            <img
              src="/sun.png"
              alt="Image here, hover me and watch me shine!"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceInLeft"  className="col-6 mt-5">
          <p className="title float-end">ABOUT US</p>
          <p className="content float-end text-end mt-3">
            Sun Hair was founded with the goal of providing ladies all over the
            world with the most beautiful, fashionable hair without causing
            damage to their natural hair. Sun Hair is proud to be one of
            Vietnam&apos;s leading hair suppliers, offering the most excellent value
            and premium services.
          </p>
          <p className="content float-end text-end">
            Sun means light, which is indispensable for sustaining life.
            Inspired by sun and shine, we desire to make all women natural
            beauty in their way through our hair products
          </p>
          <a href="#" className="float-end text-end mt-5">
            Learn more &ensp;
            <img
              src="/external-link-alt-solid1.png"
              alt="Image here, hover me and watch me shine!"
            />
          </a>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default AboutUs;
