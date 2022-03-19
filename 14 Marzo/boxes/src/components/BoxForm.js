import React, { useState, useEffect } from "react";

const BoxForm = (props) => {
  const { boxes, setBoxes } = props;

  const [boxInfo, setBoxInfo] = useState({
    color: "",
    ancho: "",
    alto: "",
  });

  useEffect(() => {
    console.log(boxInfo);
  }, [boxInfo]);

  useEffect(() => {
      console.log(boxes);
  }, [boxes]);

  const onChange = (e) => {
    setBoxInfo({
      ...boxInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setBoxes([...boxes, boxInfo]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="color">Elige un color</label>
          <input type="color" name="color" onChange={onChange}></input>
        </div>
        <div className="form-group">
          <label htmlFor="ancho">Elige un ancho</label>
          <input type="number" name="ancho" onChange={onChange}></input>
        </div>
        <div className="form-group">
          <label htmlFor="alto">Elige un alto</label>
          <input type="number" name="alto" onChange={onChange}></input>
        </div>
        <input type="submit" value="Agregar Caja"></input>
      </form>
    </div>
  );
};

export default BoxForm;
