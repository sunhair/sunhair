import React from "react";
import Items_handle from "./items_handle";
import data from "../data";

function Items() {
    return (
            <div>
                {data.map(items => {
                return (
                    <Items_handle 
                    id={items.id}
                    Catelogies={items.Catelogies}
                    />
                );
                })}
            </div>
    );
}

export default Items;