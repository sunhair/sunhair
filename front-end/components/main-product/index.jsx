import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PathProps from "../path";

const CATEGORIES = [
  "WEFT HAIR",
  "BULK HAIR",
  "KERATIN HAIR",
  "CLOSURE",
  "CLIP IN",
  "FRONTAl",
  "WIGS HAIR",
  "TAPE HAIR",
  "RAW HAIR",
];

const SORT_ORDERLY = [
  "",
  "FEATURED ITEMS",
  "NEWEST ITEMS",
  "BEST SELLING",
  "A TO Z",
  "Z TO A",
  "BY REVIEW",
  "PRICE LOW TO HIGH",
  "PRICE HIGH TO LOW",
];
function Main() {
  const router = useRouter();
  /* DATA PRODUCT */
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products`)
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [sortBy, setSortBy] = useState("");
  const [currCate, setCurrCate] = useState("");

  const currentPath = "ALL CATEGORIES";

  const [currPath, setCurrPath] = useState([
    {
      href: "/",
      namepath: "HOME",
    },
    {
      href: "/product",
      namepath: currentPath,
    },
  ]);

  const handleClickCategory = (category) => {
    console.log(category)
    // router.push('product/'+{category});
  };

  return (
    <>
      <div className="container main-product">
        <div className="row path mt-4 ps-1">
          <div className="col-6 path">
            <PathProps props={currPath} />
          </div>
        </div>

        <div className="row title-sort mt-4 justify-content-between align-items-end">
          <div className="col-6 title category-title ps-3">{currentPath}</div>
          <div className="col-md-2 ">
            <div className="sort border-bottom">
              <span className="mt-1 fw-normal">SORT: </span>
              <div class="btn-group ">
                <button
                  type="button"
                  class="btn dropdown-toggle p-0 m-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p className="text d-inline-block mb-1">{sortBy}</p>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  {SORT_ORDERLY.map((sortOrderly, index) => (
                    <li key={index}>
                      <button class="dropdown-item" type="button">
                        {sortOrderly}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row category-showprduct mt-5">
          <div className="col-3 list-category">
            {CATEGORIES.map((category, index) => (
              <div key={index} className="box-btn-cate">
                {/* <Link href={`/product/${category}`}> */ }
                  <div className="btn-cate btn-category"  onClick={(category) => handleClickCategory(category)}>
                    <span>
                      {category}
                    </span>
                  </div>
                {/* </Link> */}
              </div>
            ))}
          </div>
          <div className="col-3 product-panel p-0">
            <div className="panel text-center">{currCate}</div>
          </div>
          <div className="col-3 product-panel p-0">
            <div className="panel text-center">fff</div>
          </div>
          <div className="col-3 product-panel p-0">
            <div className="panel text-center">fff</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
