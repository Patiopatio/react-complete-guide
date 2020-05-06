import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm a {props.name} and I am {props.age}!
      </p>
      <p>
        {props.children}
        {props.hobby}
      </p>
    </div>
  );
};

export default person;
