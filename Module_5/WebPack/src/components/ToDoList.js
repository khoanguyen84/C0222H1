import React, { useState } from "react";
function ToDoList(){
    const [jobs, setJobs ] = useState([]);
    const [job, setJob] = useState('');
    const handleAddJob = function(){
        setJob("");
        setJobs([...jobs, job]);
    }
    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => setJob(e.target.value)} 
                value = {job}
            />
            <button onClick={handleAddJob}>Add Job</button>
            <div>
                <ul>
                    {
                        jobs.map((job, index) => <li key={index}>{job}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;