import { Alert, message } from 'antd';
import React from 'react';

export default function TestAlert() {
    message.success('This is a success message!');
    message.error('This is an error message!');
    message.warning('This is a warning message!');
    message.info('This is an info message!');
    message.success({
        content: 'This is a success message!',
        duration: 3,
        icon: <SmileOutlined />,
        className: 'custom-class',
        style: {
            marginTop: '50px',
        },
    });
    return (
        <>
            {/* // The message prop specifies the text that should be displayed in the alert, while the type prop determines the color scheme of the alert.
                // The possible values for the type prop are success, info, warning, and error.

                // we've added the closable and showIcon props to display a close button and an icon respectively.
                // We've also added the banner prop to display the alert as a banner instead of a standard alert box 
            */}
            <Alert
                message="This is a closable alert message"
                type="warning"
                closable
                showIcon
                description="This is a description of the alert message."
            />
        </>
    );
}
