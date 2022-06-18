import React from 'react'
import Products from './Products'

const MapGetAllProductInSite = ({getAllProduct, handleDelete,handleId}) => {
    const product = getAllProduct.map(({_id, ...otherProps}) => (
       <Products key={_id} {...otherProps} id={_id} handleId={handleId} handleDelete={handleDelete}/> 
    ))
    return (
    <React.Fragment>
       {product}
    </React.Fragment>
  )
}

export default MapGetAllProductInSite