import { useState } from "react";

import RecurringTasksForm from "./RecurringTasksForm/Index";
import ScheduledTasksForm from "./ScheduledTasksForm/Index";
import useTasks from "../../hooks/useTasks";

function TasksBox () {

    const {recurringTasks, addRecurringTask, removeRecurringTask, tasks, addTask, removeTask} = useTasks();


    const [inputValue, setInputValue] = useState('');

    function handleRecurringSubmit(e) {
        if (e.key === "Enter" && inputValue.trim() !== '') {
            addRecurringTask(inputValue);
            setInputValue('');
        }
    }

    function handleSubmit(e) {
        if (e.key === "Enter" && inputValue.trim() !== '') {
            addTask(inputValue);
            setInputValue('');
        }
    }
    

    return <div className="flex flex-col items-center p-4 w-80 sm:px-12 bg-sky-900 rounded-2xl">
        <RecurringTasksForm 
            onChange={(e) => setInputValue(e.target.value)} 
            onKeyDown={handleRecurringSubmit} 
            recurringTasks={recurringTasks}  
            onRemove={removeRecurringTask}/>

        <ScheduledTasksForm 
            onChange={(e) => setInputValue(e.target.value)} 
            onKeyDown={handleSubmit} 
            tasks={tasks}  
            onRemove={removeTask}/>

    </div>;
}

export default TasksBox;