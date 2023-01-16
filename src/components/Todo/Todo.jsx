import React, {useState} from "react";
import "./todo.css";

import Table from "../Table/Table";
import TodoForm from "./TodoForm";

const initialTasks =
[
    {id: 1, name: "give cat food"},
    {id: 2, name: "do todo app"},
    {id: 3, name: "go gym"}
 ]

const Todo = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const onSubmit = (data) => {
        const resultObject = {id: tasks.length+1, name: data.name };
        setTasks((currentTasks) => [...currentTasks, resultObject]);
    } 

    return (
    <div className="App">
        <main>
            <h1>Your TODO list:</h1>
            <Table data={tasks}/> <br/>
            <TodoForm onSubmit={onSubmit}/>
        </main>
    </div>
    )
}

export default Todo;