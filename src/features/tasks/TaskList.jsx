import TaskItem from '../../components/TaskItem'

function TaskList({ tasks, deleteTask, toggleTask }) {
    return (
        <div className="space-y-2">
            {tasks.length === 0 && <p className="text-gray-500">No tasks yet.</p>}
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} />
            ))}
        </div>
    )
}

export default TaskList
