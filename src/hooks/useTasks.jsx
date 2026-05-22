import { useState, useEffect } from "react";

function useTasks() {

    const [recurringTasks, setRecurringTasks] = useState(() => {
        const saved = localStorage.getItem("recurringTasks");
            return saved ? JSON.parse(saved) : [];
        
    })

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });


    useEffect(() => {
        localStorage.setItem("recurringTasks", JSON.stringify(recurringTasks));
    }, [recurringTasks])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])
    

    function addRecurringTask(text, emoji, defaultHour) {
        const newTask = {
            id: Date.now(),
            text,
            emoji,
            defaultHour
        }
        setRecurringTasks([...recurringTasks, newTask])
    }

    function addTask(text, emoji, defaultHour) {
        const newTask = {
            id: Date.now(),
            text,
            emoji,
            defaultHour
        }
        setTasks([...tasks, newTask])
    }

    function removeRecurringTask(id) {
        setRecurringTasks(recurringTasks.filter(task => task.id !== id));
    }

    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return {tasks, recurringTasks, addTask, addRecurringTask, removeTask, removeRecurringTask};
}

export default useTasks;