import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css';

import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBttnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => { // runs after return/render
        console.log('Cockpit----UseEffect');
        //Http requests...
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBttnRef.current.click();

        return () => {
            console.log('Cockpit---Clean Up work in Use Effect');
        }
    }, []); //[props.persons] to run it when persons change //pass blank array to only run it the first time

    useEffect(() => {
        console.log('Cockpit----UseEffect---2');
        return () => {
            console.log('Cockpit---Clean Up work in Use Effect---2');
        }
    }); // runs on every render cycle

    const assignedClasses = [];

    let btnClasses = '';

    if(props.showPersons) {
        btnClasses = classes.Red;
    }

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>It's working!</p>
            <button ref={toggleBttnRef} className={btnClasses} onClick={props.clicked}>Toggle Persons</button>
            {/* <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer> */}
            {<button onClick={authContext.login}>Login</button>}
        </div>
    );
};

export default React.memo(Cockpit);