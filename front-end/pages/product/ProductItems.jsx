import React from "react";

function CategorieS(props) {
    return (
        <div>
            <h1 onClick={() => {props.getId(props.content.id)}}>{props.content.name}</h1>
            <ul>
                {props.content.id == props.id ? props.content.Catelogies.map((product, index) => {
                        return (
                        <div key={index}>
                            <h1>{product.Style}</h1>
                            <div>{product.image}</div>
                            <p>{product.content}</p>
                        </div>   
                        );
                }):""}
            </ul>
        </div>
    )
}

export default CategorieS;