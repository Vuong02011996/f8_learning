
function logger(reducer)
{
    return (pre_state, action) => {
        console.group(action.type)
        console.log("Pre State: ", pre_state)
        console.log("Action: ", action)

        const newState = reducer(pre_state, action)
        
        console.log("New State: ", newState)
        console.groupEnd()

        return newState
    }
}

export default logger