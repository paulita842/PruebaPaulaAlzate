import React from 'react';

function RegistroInfo({ formData, setFormData }){
  return(
    <div className='Registro-info-container'>
      <input
        type='email'
        placeholder='Email'
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type='password'
        placeholder='min. 8 caracteres'
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type='password'
        placeholder='confirmar contraseña'
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  )
}

export default RegistroInfo;