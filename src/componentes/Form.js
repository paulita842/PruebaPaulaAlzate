import React, { useState } from 'react';

//Componentes
import Info from '../componentes/Info';
import RegistroInfo from '../componentes/RegistroInfo';
import InfoPersonal from '../componentes/InfoPersonal';



function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitle = ['Inscripción', 'Información Personal', 'Otros'];

  const pages = () => {
    if ( page === 0) {
      return <RegistroInfo formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
      return <InfoPersonal formData={formData} setFormData={setFormData} />
    } else {
      return <Info formData={formData} setFormData={setFormData} />
    }
  };

  return(
    <div className='form'>
      <div className='progressbar'>
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className='form-container'>
        <div className='header'>
          <h1>{FormTitle[page]}</h1>
        </div>
        <div className='body'>{pages()}</div>
        <div className='footer'>
          <button
            disabled={page === 0}
            onClick={() =>{
              setPage((current) => current -1);
            }}
          >
           Back 
          </button>
          <button
            disabled={!formData.email || !formData.password || !formData.confirmPassword}
            onClick={() => {
              if (page === FormTitle.length -1) {
                alert('Enviado con Exito');
                console.log(formData);
              } else {
                setPage((current) => current +1);
              }
            }}
          > 
          {page === FormTitle.length -1 ? 'enviar' : 'next'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form;

