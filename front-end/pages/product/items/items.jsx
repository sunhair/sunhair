import React from "react";
import Items_handle from "./items_handle";
import data from "../data";

function createItems(items) {
    return (
        <Items_handle 
            key={items.id}
            Catelogies={items.Catelogies}
        />
    );
}

function Items() {
    return (
            <div>
                {data.map(createItems)}
            </div>
    );
}

export default Items;