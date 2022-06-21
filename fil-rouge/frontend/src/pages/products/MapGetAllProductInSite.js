import React from 'react'
import OneProduct from './OneProduct'

const MapGetAllProductInSite = ({getAllProduct}) => {
    const product = getAllProduct.map(({_id, ...otherProps}) => (
       <OneProduct key={_id} {...otherProps} id={_id}/> 
    ))
    return (
    <React.Fragment>
       {product}
    </React.Fragment>
  )
}

export default MapGetAllProductInSite