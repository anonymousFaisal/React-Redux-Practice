import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/state/todo/todoSlice";

const CreateTodo = () => {
    const dispatch = useDispatch();
    const taskInput = useRef(null);

  return (
    <div className="container-fluid my-4">
      <div className="card  border-0 p-2">
        <div className="row g-2">
          <div className="col-9">
            <input ref={taskInput} type="text" placeholder="Add Todo..." className="form-control form-control-lg" />
          </div>
          <div className="col-3 d-grid">
            <button className="btn btn-primary btn-lg" onClick={() => dispatch(addTodo(taskInput.current.value))}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
