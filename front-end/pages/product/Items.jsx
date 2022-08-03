import React from 'react'
import PropTypes from 'prop-types'
import data from './data'


const Item = (item)=>{
    return (
        <p>{item}</p>
    )
}

function Items({data}) {
  return (
    <React.Fragment>
        {
            data && data.Catelogies?.map((item,i)=>
                <Item
                    key={i}
                    item = {item}
                />
            )
        }    
    </React.Fragment>
  )
}


export default Items
