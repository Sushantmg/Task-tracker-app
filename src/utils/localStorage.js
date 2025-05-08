export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const loadTasks = () => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
}
