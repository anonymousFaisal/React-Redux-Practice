import Swal from "sweetalert2";
import store from "../../redux/store/store";
import { editTodo } from "../../redux/state/todo/todoSlice";

export async function TodoEditAlert(index) {
  const inputValue = store.getState().todo.value[index];

  const { value: task } = await Swal.fire({
    title: "Edit Todo List",
    input: "text",
    inputLabel: "Todo List",
    inputValue,
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    }
  });

  if (task) {
    store.dispatch(editTodo({ index, task }));
    Swal.fire('Todo list has been Changed');
  }
}
