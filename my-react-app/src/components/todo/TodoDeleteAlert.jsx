
import Swal from 'sweetalert2';
import { removeTodo } from '../../redux/state/todo/todoSlice';
import store from '../../redux/store/store';
export function TodoDeleteAlert(i) {
    
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    store.dispatch(removeTodo(i))
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
}