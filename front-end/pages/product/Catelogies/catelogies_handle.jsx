import React from "react";
import { useState } from "react";

function Cate_handle(props) {
    const [nav, setNav] = useState();

    function handleClick(){
        setNav();
    }
    return (
        <div className="catelogies">
        <ul>
            <div onClick={handleClick}><li>{props.name}</li></div>
        </ul>
    </div>
    );
}

export default Cate_handle;