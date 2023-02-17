// In UMI project
// You can configure the routing by defining the routes in the config/router.config.js file:
/**
 * path: The URL path that the route matches.
 * component: The component that will be rendered when the route is matched.
 */

import React from 'react';
import { useParams } from 'react-router-dom';

export default {
    routes: [
        {
            path: '/',
            component: './index',
        },
        {
            path: '/about',
            component: './about',
        },
        {
            path: '/users',
            component: './users',
        },
        //   You can also use dynamic routing and pass parameters to your routes, like this:
        //In this example, the :id part of the URL is treated as a parameter that can be passed to the ./user component.
        // You can access the parameters in your component using the useParams hook from the react-router-dom library.
        {
            path: '/user/:id',
            component: './user',
        },

        // The wrappers and authority properties are optional,
        //and you can use them to add additional functionality or restrictions (hạn chế)to your routes.
        //The wrappers property can be used to wrap your components with higher-order components (HOCs) that add additional functionality, such as authentication.
        //The authority property can be used to restrict(hạn chế) access to routes based on user permissions.
        {
            path: '/camera/:id/chi-tiet',
            component: './camera/form',
            wrappers: ['@/wrappers/auth'], // wrappers: An array of components that will wrap the component defined in the component property(./camera/form)
            authority: [permissions.ADMIN],
        },
    ],
};

// ------------------------useParams--------------------------------------------------
// In Umi project, the useParams hook allows you to access the dynamic parameters in the URL path.
// When a URL contains a dynamic parameter, such as /users/:id,
// the useParams hook can be used to extract the value of the id parameter from the URL.

// Sure! Here's an example of a ./user component that uses the useParams hook to access the id parameter passed in the URL:
const User = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>User {id}</h1>
            <p>This is the user profile page for user {id}.</p>
        </div>
    );
};

// --------------------------------useHistory---------------------------------------------------------------------
// use the useHistory hook from the umi library in a Umi project:
import React from 'react';
import { useHistory } from 'umi';

const Example = () => {
    const history = useHistory();
    //  The history object provides access to the push method, which is used to programmatically navigate to another route in your application.
    // In this case, clicking the button will navigate to the /about route.

    const handleClick = () => {
        history.push('/about');
    };

    return (
        <div>
            <h1>Example Page</h1>
            <button onClick={handleClick}>Go to About Page</button>
        </div>
    );
};
