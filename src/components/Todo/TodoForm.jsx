import React from "react";
import { useForm } from "react-hook-form";

const TodoForm = ({onSubmit}) => {

    const { register, handleSubmit} = useForm();

    return (
        <form className="todo-form" onSubmit={handleSubmit(onSubmit)}>
            <label>
                Task name:
            <input {...register("name")} /> <br/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm;