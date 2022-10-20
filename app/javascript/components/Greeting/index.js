import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../../reducer/reducer";

const Greeting = () => {
  const message = useSelector((state) => state.greeting);
  const dispatch = useDispatch();


  const handleClick = () => {
    dispatch(fetchGreeting());
  }


  return (
    <>
      <p>{message}</p>
      <button type='button' onClick={() => handleClick()}>Generate new message</button>
    </>
  );
};

export default Greeting;