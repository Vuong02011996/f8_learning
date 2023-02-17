// Sau khi dispatch một action sẽ gọi một function để thay đổi lại state với action tương ứng
// Vậy sẽ re-redener lại component khi nào sau khi state thay đổi với dữ liệu mới?


// umi projects often use react-redux to manage application state.

// useSelector 
// The useSelector hook allows you to access state stored in the Redux store from a React component. 
// You pass a selector function to useSelector that takes the state from the store and returns the state you want to access in your component. 
// The hook then returns the selected state, which you can use in your component.

// useDispatch
// The useDispatch hook allows you to dispatch actions to the Redux store from a React component.
// An action is an object that represents an event that changes the state in the Redux store

import { useSelector, useDispatch } from 'umi';
import { setExample } from './actions';

const Example = () => {
  const exampleState = useSelector(state => state.example);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'example/setExample',
      payload: 'new example',
    });
  };

  return (
    <div>
      <h1>Example Page</h1>
      <p>Example state: {exampleState}</p>
      <button onClick={handleClick}>Set example</button>
    </div>
  );
};

export default Example;

// In this code, the function takes the loading and camera state from the store and returns an array with two values:
/**
 * loading: This value is obtained from the effects property of the loading state. 
 *          The effects property holds information about the loading state of the effects in the application. 
 *          By using this value, you can check if any effects are currently loading.
 * 
 *          
 * { pagination, error, data, branches, classes }: This value is obtained from the camera state. 
 *                                                  The camera state holds information about the camera data, 
 *                                                  including the pagination information, error information, data, branches, and classes. 
 *                                                  By using this value, you can access the camera data in your component
 * 
 * 
 * The two values returned from the useSelector hook are destructured into separate variables.
 *  This makes it easier to use these values in your component.
 */
const [loading,{ pagination, error, data, branches, classes }] = useSelector(({ loading: { effects }, camera }) => [effects, camera]);

// The first element of the array loading is the value of the effects property from the loading state
// The second element of the array { pagination, error, data, branches, classes } is an object that destructures the values of the pagination, error, data, branches, and classes properties from the camera state.

// By using the useSelector hook, you can subscribe to changes in the store and update your component whenever the store state changes.
//  This allows you to keep your component in sync with the state of the application.