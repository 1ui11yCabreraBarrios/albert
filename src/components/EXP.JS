import React from "react";
import { useForm } from "react-hook-form";
// import { FormControl, InputLabel,Input,FormHelperText} from "@material-ui/core";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2 className="text-center my-5 titulo">
        Administrador de Pacientes de Veterinaria
      </h2>
      <div className="container mt-5 p-5">
        <div id="contenido" className="row">
          <div className="col-md-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">
                  We'll never share your email.
                </FormHelperText>
              </FormControl> */}

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
                    {...register("mascota", { required: true })}
                  />
                </div>
                {errors.mascota && <span className="text-danger">This field is required</span>}
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
                  />
                </div>
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
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Fecha:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Hora:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input type="time" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Sintomas:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <textarea className="form-control" defaultValue={""} />
                </div>
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
