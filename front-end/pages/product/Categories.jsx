import React from 'react'
import PropTypes from 'prop-types'
import CategorieS from './ProductItems'
import { useState } from 'react'
import data from './data'

function Categories() {
    const [id, setId] = useState();
    function show(id) {
        setId(id);
    }
    return (
        <div>
                {data.map((product) =>
                    <CategorieS 
                        id = {id}
                        getId = {show}
                        key = {product.id}
                        content = {product}
                    />
                )
                }
        </div>
    )
}


export default Categories
