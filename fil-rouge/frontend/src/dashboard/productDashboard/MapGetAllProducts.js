import React from 'react'
import RowProduct from './RowProduct'

const MapGetAllProducts = ({getAllProduct, handleDelete,handleId}) => {
    const product = getAllProduct.map(({_id, ...otherProps}) => (
       <RowProduct key={_id} {...otherProps} id={_id} handleId={handleId} handleDelete={handleDelete}/> 
    ))
    return (
    <React.Fragment>
       {product}
    </React.Fragment>
  )
}

export default MapGetAllProducts