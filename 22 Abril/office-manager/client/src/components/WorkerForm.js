import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const WorkerForm = (props) => {
  
  const {onSubmitProp} = props;

  return (
    <div>
      <Formik

        initialValues={{
          name: "",
          image:"",
          experience:"",
          direccion:"",
          role:"Desarrollador Fullstack",
          skill1: true,
          skill2: true,
          skill3: true,
        }}

        validationSchema={Yup.object().shape({
            name: Yup.string()
            .required("Por favor ingresa un nombre"),
            image: Yup.string()
            .required("Imagen Obligatoria"),
            experience: Yup.number()
            .required("Experiencie obligatoria"),
            direccion: Yup.string()
            .required("Direccion Obligatoria"),
            role: Yup.string()
            .required("Cargo obligatorio"),
            skill1: Yup.bool(),
            skill2: Yup.bool(),
            skill3: Yup.bool(),
        })}

        onSubmit={(values,{setSubmitting})=>{
            onSubmitProp(values);
        }}

      >
           {({errors,
            touched,
            handleSubmit})=>{

                return (
                    <div>
                        <h2>Formulario de Trabajador</h2>
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor='name'>Nombre</label>
                            <Field id="name" type="text" placeholder="Nombre" name="name" className="form-control" />
                            {errors.name && touched.name && <p className='error'>{errors.name} </p>}

                            <label htmlFor='image'>Imagen URL</label>
                            <Field id="image" type="text" placeholder="url" name="image" className="form-control" />
                            {errors.image && touched.image && <p className='error'>{errors.image} </p>}

                            <label htmlFor='experience'>Años de experiencia</label>
                            <Field id="experience" type="number" placeholder="Años" name="experience" className="form-control" />
                            {errors.experience && touched.experience && <p className='error'>{errors.experience} </p>}

                            <label htmlFor='direccion'>Direccion</label>
                            <Field id="direccion" type="text" placeholder="Ej: alameda 123" name="direccion" className="form-control" />
                            {errors.direccion && touched.direccion && <p className='error'>{errors.direccion} </p>}

                            <label htmlFor="role" >Cargo del trabajador</label>
                            <Field  id='role' type="text" as='select' name='role'>
                                <option value="Desarrollador Fullstack">Desarrollador Fullstack</option>
                                <option value="Administracion">Administración</option>
                                <option value="Jefe">Jefe</option>
                            </Field>

                            <br></br>
                            <Field id="skill1" type="checkbox" name="skill1" />
                            <label htmlFor='skill1'>Habilidad 1</label>
                            {errors.skill1 && touched.skill1 && <p className='error'>{errors.skill1} </p>}

                            <Field id="skill2" type="checkbox" name="skill2"  />
                            <label htmlFor='skill2'>Habilidad 2</label>
                            {errors.skill2 && touched.skill2 && <p className='error'>{errors.skill2} </p>}

                            <Field id="skill3" type="checkbox" name="skill3" />
                            <label htmlFor='skill1'>Habilidad 3</label>
                            {errors.skill3 && touched.skill3 && <p className='error'>{errors.skill3} </p>}                         
                            <br></br>
                            <button type="submit" disabled={Object.values(errors).length>0} >Enviar</button>
                        </Form>
                    </div>
                )

            }}

      </Formik>
    </div>
  );
};

export default WorkerForm;
