function TaskItem({ task, onDelete, onToggle }) {
    return (
        <div className="flex justify-between items-center p-2 bg-white shadow rounded">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                </span>
            </div>
            <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700">
                Delete
            </button>
        </div>
    )
}

export default TaskItem
