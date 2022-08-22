import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import PathProps from "../path";
const CATEGORIES = [
  {
    nameCate: "WEFT HAIR",
    nameURL: "weft_hair",
  },
  {
    nameCate: "BULK HAIR",
    nameURL: "bulk_hair",
  },
  {
    nameCate: "KERATIN HAIR",
    nameURL: "keratin_hair",
  },
  {
    nameCate: "CLOSURE",
    nameURL: "closure",
  },
  {
    nameCate: "CLIP IN",
    nameURL: "clip_in",
  },
  {
    nameCate: "FRONTAL",
    nameURL: "frontal",
  },
  {
    nameCate: "WIGS HAIR",
    nameURL: "wigs_hair",
  },
  {
    nameCate: "TAPE HAIR",
    nameURL: "tape_hair",
  },
  {
    nameCate: "RAW HAIR",
    nameURL: "raw_hair",
  },
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
  // Always do navigations after the first render
  useEffect(() => {
    router.push("product/", undefined, { shallow: true });
  }, []);

  const router = useRouter();

  /**----------------------------------------------------------------------------------------------- */
  /* DATA PRODUCT */
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user`)
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  /**----------------------------------------------------------------------------------------------- */
  /**SORT FUNCTION */
  const [sortBy, setSortBy] = useState("");

  /**----------------------------------------------------------------------------------------------- */
  /**CURRENT PATH */
  const [currPath, setCurrPath] = useState([
    {
      href: "/",
      namepath: "HOME",
    },
    {
      href: "/product",
      namepath: "ALL CATEGORIES",
    },
  ]);

  /**----------------------------------------------------------------------------------------------- */
  /**CATEGORY */

  function handleClick(category) {
    if (currPath.length == 2) {
      setCurrPath((curPath) => [
        ...curPath,
        {
          href: "product/?category=" + category.nameURL,
          namepath: category.nameCate,
        },
      ]);
    } else if (currPath.length == 3) {
      const copiedPath = Array.from(currPath);
      copiedPath[2].href = "product/?category=" + category.nameURL;
      copiedPath[2].namepath = category.nameCate;
      setCurrPath(copiedPath);
    }
  }

  useEffect(() => {
    router.push(`${currPath[currPath.length - 1].href}`, undefined, {
      shallow: true,
    });
  }, [currPath]);

  const [test, setTest] = useState(0);

  const handleTurnBackSegment = (index) => {
    setCurrPath((path) => path.slice(0, index + 1));
  };

  return (
    <>
      <div className="container main-product">
        
        <div className="row path mt-4 ps-1">
          <div className="col-6 path">
            <div className="path">
              {currPath.map((unitpath, index) => (
                <a
                  key={index}
                  className="unitpath-basic ms-1 me-1 title"
                  onClick={() => handleTurnBackSegment(index)}
                >
                  {unitpath.namepath}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="row title-sort mt-4 justify-content-between align-items-end">
          <div className="col-6 title category-title ps-3">
            {currPath[currPath.length - 1].namepath}
          </div>
          <div className="col-md-2 ">
            <div className="sort border-bottom">
              <span className="mt-1 fw-normal">SORT: </span>
              <div className="btn-group ">
                <button
                  type="button"
                  className="btn dropdown-toggle p-0 m-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p className="text d-inline-block mb-1">{sortBy}</p>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {SORT_ORDERLY.map((sortOrderly, index) => (
                    <li key={index}>
                      <button className="dropdown-item" type="button">
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
                <div
                  className="btn-cate btn-category"
                  onClick={() => handleClick(category)}
                >
                  <span>{category.nameCate}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="col-3 product-panel p-0">
            <div className="panel text-center">
              {currPath[currPath.length - 1].namepath}
            </div>
          </div>
          <div className="col-3 product-panel p-0">
            <div className="panel text-center">
              {/* {productData.map(product=>(
                <div>
                  <img src={product.avatar} style="height:60px"/>
                </div>
              ))} */}
              aa
            </div>
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
