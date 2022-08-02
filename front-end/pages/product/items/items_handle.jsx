import React from "react";
import HandleCate from "./handle_cate";
import data from "../data";

function Items_cate(details) {
    return (
        <HandleCate         
        key={details.id} 
        Style={details.Style}
        image={details.image}
        content={details.content}
        >
        </HandleCate>
    );
}

function Items_handle(props) {
    return (
            <div>
                {props.Catelogies.map(Items_cate)}
            </div>
    );
}

export default Items_handle;