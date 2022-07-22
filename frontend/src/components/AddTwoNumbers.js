import { useState } from "react";
import axios from "axios";
import validateNumber from "../helper/validateNumber";
import "./style.css";

function AddTwoNumbers() {
  const [state, setState] = useState({
    firstNumber: "",
    secondNumber: "",
    result: "",
    validated: true,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (!validateNumber(value)) {
      setState({
        ...state,
        validated: false,
      });
      return;
    }

    setState({
      ...state,
      [name]: value,
      validated: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!state.validated) return;

    axios
      .post("http://localhost:3001/add", {
        firstNumber: state.firstNumber,
        secondNumber: state.secondNumber,
      })
      .then((res) => {
        setState({
          ...state,
          result: res.data.result,
          validated: true,
        });
      });
  }

  return (
    <>
      <p className="title">Adding Two Numbers</p>
      {state.validated ? (
        <></>
      ) : (
        <div className="error">Insert correct numbers!</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstNumber"
          placeholder="First Number"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="secondNumber"
          placeholder="Second Number"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add Two Numbers</button>
      </form>
      <div>
        Result: <span className="result-value">{state.result}</span>
      </div>
    </>
  );
}

export default AddTwoNumbers;
