//  use the useLocation hook from the umi library in a Umi project:
import React from 'react';
import { useLocation } from 'umi';

const Example1 = () => {
    // The location object provides information about the current location, 
    // such as the pathname (the current URL path). In this case, the current pathname is displayed on the page.
  const location = useLocation();

  // query and pathname properties from the location object returned by the useLocation hook
  // The location object provides information about the current location, such as the pathname (the current URL path) 
  // and query (the query string in the URL).
  const { query, pathname } = useLocation() 

  // A query string is a part of a URL that contains data to be passed to a web application or back-end server. 
  // It usually follows a ? character and consists of key-value pairs separated by & characters. For example:
  // http://example.com/page?key1=value1&key2=value2 
  // You can access the values in the query object by their keys, for example: query.key1 or query.key2.

  return (
    <div>
      <h1>Example Page</h1>
      <p>Current pathname: {location.pathname}</p>
    </div>
  );
};
