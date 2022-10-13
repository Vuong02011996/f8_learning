import html from "../core.js";
import { connect } from "../store.js"; 

const connector = connect()

function App({})
{   
    return html`
    <section class="todoapp">
    
    </section>
    
    `
}

export default connector(App)