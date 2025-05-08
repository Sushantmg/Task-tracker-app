import { useState, useEffect } from 'react'
import { saveTasks, loadTasks } from '../utils/localStorage'
import { makeID } from '../utils/makeID'

const useTasks = () => {
    const [tasks, setTasks] = useState(() => loadTasks() || [])

    useEffect(() => {
        saveTasks(tasks)
    }, [tasks])

    const addTask = (text) => {
        const newTask = {
            id: makeID(),
            text,
            completed: false,
        }
        setTasks(prev => [...prev, newTask])
    }

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    const toggleTask = (id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )
    }

    return { tasks, addTask, deleteTask, toggleTask }
}

export default useTasks
