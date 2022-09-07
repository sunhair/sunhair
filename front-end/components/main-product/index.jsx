import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import CardProps from "../card-props";
import CartContext from "../../context/cart"; 

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

  /**LOADING STATE */
  const [isLoading, setIsLoading] = useState(false);
  /**PRODUCT CATEGORY */
  const [products, setProducts] = useState([]);
  /**----------------------------------------------------------------------------------------------- */
  /* DATA PRODUCT */
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:5000/product`)
      .then((res) => {
        setProducts(res.data);
        setProductData(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  /**TOOL ADD TO CARD */
  const productAdded=useContext(CartContext);

  /**----------------------------------------------------------------------------------------------- */
  /**SORT FUNCTION */
  const [sortBy, setSortBy] = useState("");
  // const handleShowOrderly = () =>{

  // }
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
    setIsLoading(true);

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
    setIsLoading(false);
  } 

  /**---------------------------------------------------------------------------------------------- */
  /**HANDLER CHANGE CURRENT PATH */
  useEffect(() => {
    router.push(`${currPath[currPath.length - 1].href}`, undefined, {
      shallow: true,
    });

    switch (currPath[currPath.length - 1].namepath) {
      case "ALL CATEGORIES":
        setProducts(productData);
        break;
      case "WEFT HAIR":
        setProducts(
          productData.filter((product) => product.category === "Weft hair")
        );
        break;
      case "BULK HAIR":
        setProducts(
          productData.filter((product) => product.category === "Bulk hair")
        );
        break;
      case "KERATIN HAIR":
        setProducts(
          productData.filter((product) => product.category === "Keratin Hair")
        );
        break;
      case "CLOSURE":
        setProducts(
          productData.filter((product) => product.category === "Closure Hair")
        );
        break;
      case "CLIP IN":
        setProducts(
          productData.filter((product) => product.category === "Clip-in ")
        );
        break;
      case "FRONTAL":
        setProducts(
          productData.filter((product) => product.category === "Frontal Hair")
        );
        break;
      case "WIGS HAIR":
        setProducts(
          productData.filter((product) => product.category === "Wigs Hair")
        );
        break;
      case "TAPE HAIR":
        setProducts(
          productData.filter((product) => product.category === "Tape Hair")
        );
        break;
      case "RAW HAIR":
        setProducts(
          productData.filter((product) => product.category === "Raw Hair")
        );
        break;
      default:
        break;
    }
  }, [currPath]);

  const handleTurnBackSegment = (index) => {
    setCurrPath((path) => path.slice(0, index + 1));
  };

  /**INDEX PRODUCT */

  
  return (
    <>
      <div className="container main-product">
        <div className="row path mt-4 ps-1">
          <div className="col-12 path">
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
          <div className="col-8 title category-title ps-3">
            {currPath[currPath.length - 1].namepath}
          </div>
          <div className="col-2 ">
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
          {/**CATEGORY  */}
          <div className="col-3 list-category">
            {CATEGORIES.map((category, index) => (
              <div key={index} className="box-btn-cate mb-1">
                <div
                  className="btn-cate btn-category"
                  onClick={() => handleClick(category)}
                >
                  <span>{category.nameCate}</span>
                </div>
              </div>
            ))}
          </div>

          {/**PRODUCT */}
          <div className="col-9 p-0 mb-5">
            <div className="container-fluid">
              <div className="row justify-content-between">
                <CardProps
                  props={products}
                  isLoading={isLoading}
                  handleChooseItems={setCurrPath}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
