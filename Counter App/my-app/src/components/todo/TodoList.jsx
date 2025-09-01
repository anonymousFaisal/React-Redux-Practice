import React from "react";
import { useSelector } from "react-redux";
import { TodoDeleteAlert } from "./TodoDeleteAlert";
import { TodoEditAlert } from "./TodoEditAlert";

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.value);
  return (
    <div className="container my-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">📋 Todo List</h5>
        </div>
        <div className="card-body p-0">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th style={{ width: "10%" }}>No</th>
                <th style={{ width: "50%" }}>Task Name</th>
                <th style={{ width: "20%" }}>Edit</th>
                <th style={{ width: "20%" }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((item, index) => (
                <tr key={index.toString()}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>
                    <button onClick={() => {TodoEditAlert(index)}} className="btn btn-sm btn-primary">Edit</button>
                  </td>
                  <td>
                    <button onClick={() => {TodoDeleteAlert(index)}} className="btn btn-sm btn-danger">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
