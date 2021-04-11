import React, { Fragment } from 'react'

const FormularioPresupuesto = ({register,errors}) => {
    return (
        <Fragment>
            <div className="row">
                <div className="input-field col s12">
                    <input {...register("nombre", { required: true })} type="text" id="nombre1" className="validate" />
                    <label htmlFor="nombre1">Nombre y Apellido</label>
                    {errors.nombre && <span className="error red-text">El nombre y apellido es requerido</span>}
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input {...register("email", { required: true })} type="email" id="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    {errors.email && <span className="error red-text">El mail es requerido</span>}
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input {...register("telefono", { required: true })} type="number" id="telefono" className="validate" />
                    <label htmlFor="telefono">Teléfono</label>
                    {errors.telefono && <span className="error red-text">El teléfono es requerido</span>}
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea {...register("presupuesto", { required: true })} id="presupuesto" className="materialize-textarea" />
                    <label htmlFor="presupuesto">Presupuesto</label>
                    {errors.presupuesto && <span className="error red-text">El presupuesto es requerido</span>}
                </div>
            </div>
        </Fragment>
    )
}

export default FormularioPresupuesto
