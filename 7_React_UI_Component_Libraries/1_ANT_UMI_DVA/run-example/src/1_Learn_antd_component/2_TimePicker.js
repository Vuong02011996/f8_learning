//  https://ant.design/components/time-picker
/**Props:
 * minuteStep={15}:khoảng thời gian giữa các phút trong bộ chọn
 * onSelect: 	A callback function, executes when a value is selected
 * onChange: 	A callback function, can be executed when the selected time is changing
 */
import React, { useState } from 'react';
import { TimePicker, Form, Row, Col } from 'antd';
import moment from 'moment';

// onSelect Không hoạt động
// const handleSelectFromTime = (value) => {
//     setFromTime(value);
// };

const format = 'HH:mm';
function TestTimePicker() {
    const [endTime, setEndTime] = useState(moment('12:08', format));
    const handleChangeEndTime = (value) => {
        setEndTime(value);
    };
    return (
        <Row>
            {/* // Không dùng được dayjs, chỉ dùng moment */}
            {/* <TimePicker defaultValue={dayjs('12:08', format)} format={format} />; */}
            <TimePicker defaultValue={moment('12:08', format)} format={format} />
            {/* Nằm trong FormItem chỉ khởi tạo được giá trị dựa vào initialValues của FormItem */}
            <Col span={6}>
                <Form layout="vertical">
                    <Form.Item label="Kết thúc điểm danh" name="end_time" initialValue={endTime}>
                        <TimePicker
                            // initialValue={fromTime}
                            value={endTime}
                            format={format}
                            minuteStep={15}
                            onChange={handleChangeEndTime}
                        />
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

export default TestTimePicker;
