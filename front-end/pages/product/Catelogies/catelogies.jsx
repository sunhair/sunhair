import React from "react";
import data from '../data';
import Cate_handle from "./catelogies_handle";

function createCatelogies(product) {
    return (
      <Cate_handle
        key={product.id}
        name={product.name}
      />
    );
  }

function Catelogies() {
    return (
        <div>
        {data.map(createCatelogies)}
        </div>
    );
}

export default Catelogies;