import React from "react";
import { useState } from "react";
import data from '../data';
import Cate_Handle from "./catelogies_handle";


function Catelogy(props) {
    const [key, setID] = useState({});
    return (
        <div>
        {data.map((product) => {
            return (
                <Cate_Handle
                key={product.id}
                name={product.name}
                onClick={() => setID(props.onSet(product.id))}
                />  
            );
        })}
        </div>
    );
}

export default Catelogy;