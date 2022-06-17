import React from 'react'
import RowUser from './RowUser'

const MapGetAllUser = ({getAllUsers, handleId, handleDelete}) => {
  const users = getAllUsers.map(({_id, ...otherProps}) => (
    <RowUser key={_id} {...otherProps} id={_id} handleDelete={handleDelete} handleId={handleId}/>
    ))
  return (
    <React.Fragment>
       {users}
    </React.Fragment>
  )
}

export default MapGetAllUser