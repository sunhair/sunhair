import React from "react";

function handle_cate(props) {
    return (
        <div>
            <div>{props.Style}</div>
            <div>{props.image}</div>
            <div>{props.content}</div>
        </div>
    );
}

export default handle_cate;