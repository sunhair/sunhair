import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Categories from "./Categories";
import data from "./data";
import Items from "./Items";


export default function Product(){ 
    const [selectedId, setselectedId] = useState(null)
    const listItem = selectedId 
        ? data.find((e)=>e.id === selectedId)
        : []
    return (
        <div>
            <Categories data={data} setselectedId={setselectedId}/>
            <Items data = {listItem} />
        </div>
      )
};

