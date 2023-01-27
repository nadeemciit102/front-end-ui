<template>
  <br /><br />
  <div id="todo-list">
    <h1>Todo List</h1>
    <form>
      <input type="text" placeholder="Add a task..." v-model="tempInput" />
      <button @click.prevent="addfunc">Add Task</button>
    </form>
    <ol>
      <li
        v-for="(val, index) in arr"
        :key="index"
        class="task"
        :class="{ complete: val.isCompleted }"
      >
        {{ val.value }}---------- {{ val.creation_date }}

        <button @click="taskCompleted(index)" v-show="!val.isCompleted">
          Completed
        </button>
        <button @click="taskCompleted(index)" v-show="val.isCompleted">
          Undo
        </button>
        <button @click="editTodo(index)">Edit</button>
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </ol>
  </div>
</template>

<script>
import { ref } from "vue";
//import func from "vue-editor-bridge";

export default {
  name: "TodoList",
  setup() {
    const array = ref([]);
    const tempInput = ref("");
    const editSavedTodo = ref(null);
    const isCompleted = false;

    const addfunc = () => {
      if (tempInput.value) {
        let newId = array.value.length + 1;
        const date = new Date().toLocaleString({
          hour: "numeric",
          minute: "numeric",
          hour12: "true",
        });

        if (editSavedTodo.value != null) {
          array.value[editSavedTodo.value].value = tempInput.value;
          editSavedTodo.value = null;
        } else {
          array.value.push({
            id: newId,
            value: tempInput.value,
            creation_date: date,
            isCompleted: isCompleted,
          });
        }
        tempInput.value = "";
      }
    };
    function taskCompleted(id) {
      array.value[id].isCompleted = !array.value[id].isCompleted;
    }
    // function taskUndo(id) {
    //   array.value[id].isCompleted = false;
    // }
    function editTodo(id) {
      tempInput.value = array.value[id].value;
      editSavedTodo.value = id;
    }
    function deleteTodo(id) {
      array.value.splice(id, 1);
    }
    return {
      addfunc,
      arr: array,
      tempInput: tempInput,
      // isCompleted: isCompleted,
      taskCompleted,
      editTodo,
      deleteTodo,
    };
  },
};
</script>

<style scoped>
body {
  background-color: #f2f2f2;
}
#todo-list {
  width: 50%;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 30px;
  background-color: white;
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 10px;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-weight: bold;
}
form {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
form input[type="text"] {
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-right: 10px;
}
form button {
  width: 20%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
}
.task {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 5px #ccc;
}
.task p {
  margin-bottom: 10px;
  color: #333;
}
.task button {
  float: right;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
}
.task button:nth-of-type(2) {
  background-color: #4caf50;
  color: white;
}
.task button:nth-of-type(4) {
  background-color: #f44336;
  color: white;
}
.task button:nth-of-type(3) {
  background-color: #4caf50;
  color: white;
}
.task button:nth-of-type(1) {
  background-color: #4caf50;
  color: white;
}
form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.complete {
  text-decoration: line-through;
}
</style>
