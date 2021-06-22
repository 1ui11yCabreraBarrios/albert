import React from "react";
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.mascota) {
    errors.mascota = 'Required';
  } else if (values.mascota.length > 5) {
    errors.mascota = 'Must be 5 characters or less';
  }

  if (!values.propietario) {
    errors.propietario = 'Required';
  } else if (values.propietario.length > 20) {
    errors.propietario = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.sintomas) {
    errors.sintomas = 'Required';
  } else if (values.sintomas.length > 20) {
    errors.sintomas = 'Must be 20 characters or less';
  }

 

  return errors;
};

const Formulario = () => {

  const formik = useFormik({
    initialValues: {
      mascota: '',
      propietario: '',
      telefono: '',
      email: '',
      sintomas: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h2 className="text-center my-5 titulo">
        Administrador de Pacientes de Veterinaria
      </h2>
      <div className="container mt-5 p-5">
        <div id="contenido" className="row">
          <div className="col-md-6 ">
            <form onSubmit={formik.handleSubmit}>
             
              <legend className="mb-4">Datos del Paciente</legend>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Nombre Mascota:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input
                    type="text"
                    id="mascota"
                    name="mascota"
                    className="form-control"
                    placeholder="Nombre Mascota"
                    onChange={formik.handleChange}
                    value={formik.values.mascota}
                  />
                </div>
                {formik.errors.mascota ? <div className="text-danger">{formik.errors.mascota}</div> : null}
               
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Propietario:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input
                    type="text"
                    id="propietario"
                    name="propietario"
                    className="form-control"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={formik.handleChange}
                    value={formik.values.propietario}
                    
                  
                  />
                </div>
                {formik.errors.propietario ? <div className="text-danger">{formik.errors.propietario}</div> : null}
               
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Teléfono:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="form-control"
                    placeholder="Número de Teléfono"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Correo:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo Electronico"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                {formik.errors.email ? <span className="text-danger">{formik.errors.email}</span> : null}
              </div>
              
             
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Sintomas:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <textarea className="form-control"  id="sintomas" name="sintomas" defaultValue={""} 
                   onChange={formik.handleChange}
                   value={formik.values.sintomas}
                  />
                </div>
                {formik.errors.sintomas ? <span className="text-danger">{formik.errors.sintomas}</span> : null}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success w-100 d-block">
                  Crear Cita
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Administra tus Citas</h2>
            <ul className="list-group lista-citas" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
