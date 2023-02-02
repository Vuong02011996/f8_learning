import { Button , Table} from 'antd';
import React from 'react';

// CSS antd notworking
// https://stackoverflow.com/questions/67964697/ant-design-does-not-work-in-react-js-project
import 'antd/dist/antd.css';
/**
 * // https://3x.ant.design/components
 * 1. Button
 * 2. Table
 * @returns 
 */
// 1. Button

function AntButton()
{
    return (
        <div className="App">
            <>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </>
        </div>
    )
}

// 2. Table
// To display a collection of structured data. To sort, search, paginate, filter data.
function AntTable()
{
    // dataSource of Table as an array of data.
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
    return (
        <Table dataSource={dataSource} columns={columns}></Table>
    )
}
const App = AntTable
export default App