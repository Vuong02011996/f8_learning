// Cách 3
// import './Paragraph.css'

// Cách 4
import abc from './Paragraph.module.css'

function Paragraph()
{
    return (
        // Ta dùng class trả ra từ object 
        <>
            <h2 className={abc.heading_h2}>Heading h2</h2>
            <div className="d-flex title">Item1</div>
            <div className="d-flex">Item2</div>
        </>
    )
}
export default Paragraph