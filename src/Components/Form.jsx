import React, { useState } from "react";
import FormMessage from "./FormMessage";

const Form = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const nameRegex = !/^\s/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleColor = (e) => {
    setMail(e.target.value);
  };

  const eventHandler = (e) => {
    e.preventDefault();
    if (
      name.trim().length > 3 &&
      nameRegex.test(name) &&
      emailRegex.test(mail)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="sections">
      <form onSubmit={eventHandler}>
        <input
          onChange={handleName}
          type="text"
          placeholder="ingresar nombre"
          value={name}
        />
        <input
          onChange={handleColor}
          type="text"
          placeholder="ingresa tu correo"
          value={mail}
        />
        <button>Enviar</button>
      </form>
      {error && (
        <p style={{ color: "red" }}>
          Por favor verifique su información nuevamente
        </p>
      )}
      {show && <FormMessage nombre={name} correo={mail} />}
    </div>
  );
};

export default Form;
