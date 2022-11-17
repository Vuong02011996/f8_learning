import {useState, useEffect, useRef, useReducer} from 'react'
import reducer, {initState} from './reducer'
import {addJob, deleteJob, setJob} from './action'
import logger from './logger'

// https://www.youtube.com/watch?v=RClK-ltP-Bg&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=114
// https://drive.google.com/file/d/1uNnhYqX-FCCDdmxdJNv19wB2u7cmyw83/view

function HookReducer()
{
    const inputRef = useRef()

    const [state, dispatch] = useReducer(logger(reducer), initState)
    // console.log("state innit: ", state)


    function handleSubmit()
    {
        dispatch(addJob(state.job))
        dispatch(setJob(""))
        inputRef.current.focus()

    }
    return (
        <>
            <h1>To Do App</h1>
            <input
                ref={inputRef}
                value={state.job}
                placeholder="Enter job..."
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {state.jobs.map((job, index) => 
                <li key={index}>{job}
                    <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                </li>
                )}
            </ul>
        </>
    )
}

export default HookReducer