import axios from 'axios';
import {useState, useEffect} from 'react';

function ProductData (){

   const [productData, setProductData]  = useState([]);

   useEffect(() => {
      axios
        .get(`http://localhost:5000/user`)
        .then((res) => {
          setProductData(res.data);
        })
        .catch((error) => console.log(error))
    }, []);

    return productData;
}

export default ProductData;
