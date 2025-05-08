import { useState } from 'react'

function TaskInput({ addTask }) {
    const [input, setInput] = useState('')

    const handleAdd = () => {
        if (input.trim()) {
            addTask(input)
            setInput('')
        }
    }

    return (
        <div className="flex gap-2 mb-4">
            <input
                type="text"
                className="flex-1 p-2 border rounded"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAdd} className="bg-blue-500 text-white px-4 rounded">
                Add
            </button>
        </div>
    )
}

export default TaskInput
