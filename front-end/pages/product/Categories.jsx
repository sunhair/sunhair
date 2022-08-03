import React from 'react'
import PropTypes from 'prop-types'

function Categories({data,setselectedId}) {
    const handleSelectCategory = (id)=>{
        setselectedId(id)

    }
    return (
        <div>
            <ul>
                {data.map((product) =>
                    <li key={product.id} onClick={()=>handleSelectCategory(product.id)}>{product.name}</li>
                    )
                }
            </ul>
        </div>
    )
}


export default Categories
