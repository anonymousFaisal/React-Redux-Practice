import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setCustomValue } from "../../redux/state/counter/counterSlice";

const Counter = () => {
  const myNumber = useRef();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card shadow-sm" style={{ maxWidth: "800px", margin: "auto" }}>
      <div className="card-header bg-primary text-center">
        <h4 className="text-white mb-0">My Counter App</h4>
      </div>
      <div className="card-body text-center">
        <h1 className="display-4 fw-bold">{count}</h1>

        <div className="my-4">
          <button onClick={() => dispatch(increment())} className="btn btn-success mx-2 px-4">
            Increase +
          </button>
          <button onClick={() => dispatch(decrement())} className="btn btn-danger mx-2 px-4">
            Decrease –
          </button>
        </div>

        <div className="my-3 d-flex justify-content-center">
          <input type="number" className="form-control w-50 text-center" placeholder="Enter number" ref={myNumber} />
          <button className="btn btn-primary ms-2" onClick={() => dispatch(setCustomValue(myNumber.current.value))}>
            Set
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
