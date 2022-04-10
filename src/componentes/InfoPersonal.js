import React from 'react';

function InfoPersonal({ formData, setFormData }){
  return(
    <div className='Info-personal-container'>
      <input
        type='text'
        placeholder='Primer Nombre'
        value={formData.firstName}
        onChange={(e) => {
          setFormData({...formData, firstName: e.target.value });
        }}
      />
      <input
        type='text'
        placeholder='Apellido'
        value={formData.lastName}
        onChange={(e) => {
          setFormData({...formData, lastName: e.target.value });
        }}
      />
      <input
        type='text'
        placeholder='Nombre de Usuario'
        value={formData.userName}
        onChange={ (e) => {
          setFormData({...formData, userName: e.target.value });
        }}
      />
    </div>
  )
}


export default InfoPersonal;