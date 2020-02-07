import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('Cockpit----UseEffect');
        //Http requests...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);

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
            <button className={btnClasses} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(Cockpit);