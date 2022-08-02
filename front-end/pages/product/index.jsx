import React from "react";
import Catelogies from "./Catelogies/catelogies";
import Items from "./items/items";
import Link from "next/link";



export default function Product(){
    return (
        <div>
            <Catelogies />
            <Items />
        </div>
      )
};

