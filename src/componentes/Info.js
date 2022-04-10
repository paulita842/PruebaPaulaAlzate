import React from 'react';

function Info({ formData, setFormData}) {
  return(
    <div className='Info-container'>
      <input
        type='text'
        placeholder='Nacionalidad'
        value={formData.nationality}
        onChange={(e) =>{
          setFormData({...formData, nationality: e.target.value });
        }}
      />
      <input
        type='text'
        placeholder='otro'
        value={formData.other}
        onChange={(e) => {
          setFormData({...formData, other: e.target.value});
        }}
      />
    </div>
  )
}

export default Info;