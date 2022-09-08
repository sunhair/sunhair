import Link from "next/Link";

function OurProducts() {
  return (
    <div className="container our-products">
      <div className="row d-flex justify-content-center pt-5 align-items-center">
        <div className="col-12 text-center position-relative">
          <p className="title d-inline">OUR PRODUCTS</p>
          <Link href="/product">
            <a className=" link mt-5  position-absolute">
              Learn more &ensp;
              <img
                src="/external-link-alt-solid1.png"
                alt="Image here, hover me and watch me shine!"
              />
            </a>
          </Link>

          <p className="description">
            &quot;We are happy to provide the greatest hair quality in a variety of
            styles and colors &quot;
          </p>
        </div>
      </div>

      <main className="page-content1">
        <div className="card1">
          <div className="content1">
            <h2 className="title1">Weft hair</h2>
            <p className="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn1">See all</button>
          </div>
        </div>
        <div className="card1">
          <div className="content1">
            <h2 className="title1">Keration Hair</h2>
            <p className="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn1">See all</button>
          </div>
        </div>
        <div className="card1">
          <div className="content1">
            <h2 className="title1">Closure</h2>
            <p className="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn1">See all</button>
          </div>
        </div>
        <div className="card1">
          <div className="content1">
            <h2 className="title1">See all</h2>
            <p className="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn1">View Trips</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OurProducts;
