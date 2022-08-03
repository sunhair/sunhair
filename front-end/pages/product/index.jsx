import React from "react";
import Catelogy from "./Catelogies/catelogies";
import Items from "./items/items";
import Link from "next/link";
import { useState } from "react";



export default function Product(){
    const [id, setId] = useState();
    function setStateId(id) {
        setId(data.find((item)=> item.id == id));
    };
    return (
        <div>
            <Catelogy onSet={setStateId} />
            <Items />
        </div>
      )
};

