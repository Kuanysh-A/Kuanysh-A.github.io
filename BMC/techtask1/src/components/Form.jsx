import React from "react";

const Form = (props) => {
  return (
    <div>
      <input
        type="text"
        name="formText"
        placeholder={props.placeholder}
        className={`border border-grayForm border-solid rounded-md border-opacity-10 ${props.className}`}
      />
    </div>
  );
};

export default Form;
