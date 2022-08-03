import React from "react";
import { useState } from "react";
import data from "./data";



export default function Product(){
    
    function Catelogy(props) {
        const [key, setID] = useState({});
        function Cate_Handle(props) {
            return (
                <div className="catelogies">
                <ul>
                    <li>{props.name}</li>
                </ul>
            </div>
            );
        }
        return (
            <div>
            {data.map((product) => {
                return (
                    <Cate_Handle
                    key={product.id}
                    name={product.name}
                    onClick={() => setID(props.onclick(product.id))}
                    />  
                );
            })}
            </div>
        );
    }

    function Items() {
        function Items_handle(props) {
            function HandleCate(props) {
                return (
                    <div>
                        <div>{props.Style}</div>
                        <div>{props.image}</div>
                        <div>{props.content}</div>
                    </div>
                );
            }
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
        return (
                <div>
                    {data.map(items => {
                    return (
                        <Items_handle 
                        key={items.id}
                        Catelogies={items.Catelogies}
                        />
                    );
                    })}
                </div>
        );
    }

    return (
        <div>
            <Catelogy />
            <Items />
        </div>
      )
};

