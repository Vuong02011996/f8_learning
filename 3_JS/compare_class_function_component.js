import React, { useState } from "react";
 
/** https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/
 * https://reactjs.org/docs/hooks-effect.html   
 * 
 * 
 * State and lifecycle
 * Syntax
 * Passing Props
 * Handling State
 * Hoisting only for functional components
 * 
 * 1.Functional component run from top to bottom and once the function is returned it cant be kept alive.
 * @returns 
 */
const FunctionalComponent=()=>{
    const [count, setCount] = useState(0);
 
    const increase = () => {
        setCount(count+1);
    }
 
    return (
        <div style={{margin:'50px'}}>
            <h1>Welcome to Geeks for Geeks </h1>
            <h3>Counter App using Functional Component : </h3>
          <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
} 
 
 
export  {FunctionalComponent};

 
/**Chúng phức tạp hơn functional components ở chỗ nó còn có: phương thức khởi tạo, life-cycle, hàm render() và quản lý state (data)
 * có thể nhận props (trong hàm khởi tạo) nếu cần.
 * có thể maintain data của nó với state
 * phải có 1 method render() trả về 1 React element (JSX), or null
 * 
 * React lifecycle methods can be used inside class components (for example, componentDidMount)
 * 1. Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.
 * 
 * 
 * Cái khó là quản lí state trong class không dùng hook
 */
class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }
 
    render(){
        return (
            <div style={{margin:'50px'}}>
               <h1>Welcome to Geeks for Geeks </h1>
               <h3>Counter App using Class Component : </h3>
               <h2> {this.state.count}</h2> 
               <button onClick={this.increase}> Add</button>
 
            </div>
        )
    }
}
 
export  {ClassComponent};