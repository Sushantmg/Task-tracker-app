import useTasks from '../hooks/useTasks'
import TaskInput from '../features/tasks/TaskInput'
import TaskList from '../features/tasks/TaskList'

function Home() {
    const { tasks, addTask, deleteTask, toggleTask } = useTasks()

    return (
        <div className="max-w-xl mx-auto">
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
        </div>
    )
}

export default Home
