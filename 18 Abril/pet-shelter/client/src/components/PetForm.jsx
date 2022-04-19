import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const PetForm = (props) => {
  const {
    iname,
    itype,
    idescription,
    iskill1,
    iskill2,
    iskill3,
    onSubmitProp,
  } = props;

  return (
    <div>
      <Formik

        initialValues={{
          name: iname,
          type: itype,
          description: idescription,
          skill1: iskill1,
          skill2: iskill2,
          skill3: iskill3,
        }}

        validationSchema={Yup.object().shape({
            name: Yup.string()
            .min(4,"Nombre es muy corto")
            .max(15,"Nombre es muy largo")
            .required("Por favor ingresa un nombre"),
            type: Yup.string()
            .min(4,"Tipo es muy corto")
            .max(15,"Tipo es muy largo")
            .required("Por favor ingresa un tipo"),
            description: Yup.string()
            .required("Descripcion obligatoria"),
            skill1: Yup.string()
            .min(4,"Habilidad muy corta")
            .max(15,"Habilidad muy larga"),
            skill2: Yup.string()
            .min(4,"Habilidad muy corta")
            .max(15,"Habilidad muy larga"),
            skill3: Yup.string()
            .min(4,"Habilidad muy corta")
            .max(15,"Habilidad muy larga")
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
                        <h2>Formulario de Mascotas</h2>
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor='name'>Nombre</label>
                            <Field id="name" type="text" placeholder="Nombre" name="name" className="form-control" />
                            {errors.name && touched.name && <p className='error'>{errors.name} </p>}

                            <label htmlFor='type'>Tipo</label>
                            <Field id="type" type="text" placeholder="Tipo" name="type" className="form-control" />
                            {errors.type && touched.type && <p className='error'>{errors.type} </p>}

                            <label htmlFor='description'>Descripcion</label>
                            <Field id="description" type="text" placeholder="Descripcion" name="description" className="form-control" />
                            {errors.description && touched.description && <p className='error'>{errors.description} </p>}

                            <label htmlFor='skill1'>Habilidad 1</label>
                            <Field id="skill1" type="text" placeholder="Escribe la habilidad" name="skill1" className="form-control" />
                            {errors.skill1 && touched.skill1 && <p className='error'>{errors.skill1} </p>}

                            <label htmlFor='skill2'>Habilidad 2</label>
                            <Field id="skill2" type="text" placeholder="Escribe la habilidad" name="skill2" className="form-control" />
                            {errors.skill2 && touched.skill2 && <p className='error'>{errors.skill2} </p>}

                            <label htmlFor='skill3'>Habilidad 3</label>
                            <Field id="skill3" type="text" placeholder="Escribe la habilidad" name="skill3" className="form-control" />
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

export default PetForm;
