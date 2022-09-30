import React, { useRef, useState } from 'react'

function Todo() {
    const [job, setJob] = useState("")
    const [jobs, setJobs] = useState([])
    const ref = useRef()
    const copyIndex = useRef(0)
    const handleSubmit = () => {
        setJobs(pre => [...pre, job])
        setJob("")
    }
    const handleSubmitUpdate = () => {
        let copyJobs = [...jobs]
        copyJobs[copyIndex.current] = job
        setJobs(copyJobs)
        setJob("")
    }

    const handleUpdate = (index, job) => {
        setJob(job)
        ref.current.focus()
        copyIndex.current = index
    }

    const handleDelete = (index) => {
        const copyJobs = [...jobs]
        copyJobs.splice(index, 1)
        setJobs(copyJobs)
    }
    return (
        <div>
            <h2>TO DO LIST</h2>
            <div>
                <input type="text" placeholder='Add to do' ref={ref} value={job} onChange={(e) => setJob(e.target.value)} />
                <button onClick={handleSubmitUpdate}>Update</button>
                <button onClick={handleSubmit}>Add</button>
            </div>
            <div>
                <h4>List to do</h4>
                <ul>
                    {jobs.length ? jobs.map((job, index) =>
                        <div key={index}>
                            <li>{job}</li>
                            <button onClick={() => handleUpdate(index, job)}>Sửa</button>
                            <button onClick={() => handleDelete(index)}>Xóa</button>
                        </div>
                    ) : ""}
                </ul>
            </div>
        </div>
    )
}

export default Todo