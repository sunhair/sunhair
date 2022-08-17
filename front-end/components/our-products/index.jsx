function OurProducts() {
  return (
    <div className="container our-products">
      <div className="row d-flex justify-content-center pt-5 align-items-center">
        <div className="col-12 text-center position-relative">
          <p className="title d-inline">OUR PRODUCTS</p>
          <a href="#" className=" link mt-5  position-absolute">
            Learn more &ensp;
            <img
              src="/external-link-alt-solid1.png"
              alt="Image here, hover me and watch me shine!"
            />
          </a>
          <p className="description">
            "We are happy to provide the greatest hair quality in a variety of
            styles and colors"
          </p>
        </div>
      </div>

      <main className="page-content1">
        <div class="card1">
          <div class="content1">
            <h2 class="title1">Weft hair</h2>
            <p class="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button class="btn1">See all</button>
          </div>
        </div>
        <div class="card1">
          <div class="content1">
            <h2 class="title1">Keration Hair</h2>
            <p class="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button class="btn1">See all</button>
          </div>
        </div>
        <div class="card1">
          <div class="content1">
            <h2 class="title1">Closure</h2>
            <p class="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button class="btn1">See all</button>
          </div>
        </div>
        <div class="card1">
          <div class="content1">
            <h2 class="title1">See all</h2>
            <p class="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button class="btn1">View Trips</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OurProducts;
