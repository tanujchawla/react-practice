import React from 'react';

const authContext = React.createContext({ // can be a string, array as well
    authenticated : false,
    login : () => {}
});

export default authContext;