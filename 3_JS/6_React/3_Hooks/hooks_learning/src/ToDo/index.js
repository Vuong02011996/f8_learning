import {useState, useEffect, useRef, useReducer} from 'react'
import reducer, {initState} from './reducer'
import {addJob, deleteJob, setJob} from './action'

function HookReducer()
{
    const inputRef = useRef()

    const [state, dispatch] = useReducer(reducer, initState)
    console.log("state innit: ", state)


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