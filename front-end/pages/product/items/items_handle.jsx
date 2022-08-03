import React from "react";
import HandleCate from "./handle_cate";
import data from "../data";


function Items_handle(props) {
    return (
            <div>
                {props.Catelogies.map(details => {
                    return (
                        <HandleCate         
                        key={details.id} 
                        Style={details.Style}
                        image={details.image}
                        content={details.content}
        />
                    );
                })}
            </div>
    );
}

export default Items_handle;