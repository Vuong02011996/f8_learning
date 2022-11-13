import Content from './Content'
import { ThemeProvider, ThemeContext } from './ThemeContext'
import {useContext} from 'react'


function Context()
{   
    const context = useContext(ThemeContext)
    console.log(context)
    // Ở đây không thể  component Context không thể vừa là component con(nhận Props) vừa làm component cha nên 
    // ta đưa ThemeProvider vào file index.js 
    return (
        <div style={{padding: 20}}>
            <button onClick={context.handleClick}>Toggle Theme</button>
            <Content/>
        </div>
    )
}
export default Context