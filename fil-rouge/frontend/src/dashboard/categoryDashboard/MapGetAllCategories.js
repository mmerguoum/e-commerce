import React from 'react'
import RowCategory from './RowCategory'

const MapGetAllCategories = ({getAllCategories, handleDelete, handleId}) => {
    const categories = getAllCategories.map(({_id, ...otherProps}) => (
        <RowCategory key={_id} {...otherProps} id={_id} handleDelete={handleDelete} handleId={handleId}/>
        ))
      return (
        <React.Fragment>
           {categories}
        </React.Fragment>
      )
}

export default MapGetAllCategories