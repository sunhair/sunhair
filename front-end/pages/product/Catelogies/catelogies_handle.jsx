import React from "react";
import { useState } from "react";

function Cate_Handle(props) {
    return (
        <div className="catelogies">
        <ul>
            <li>{props.name}</li>
        </ul>
    </div>
    );
}

export default Cate_Handle;