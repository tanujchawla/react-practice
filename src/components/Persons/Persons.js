import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('Update cycle--Persons--getDerivedStateFromProps');
    //     return state;
    // }
    

    ///////// As we have to check a lot properties here, we should extend extend a PureComponent, 
    ///////// which automatically does that behind the scenes

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Update--Persons---shouldComponentUpdate');
    //     if(
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Update--Persons--getSnapshot');
        return { message : 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Snapshot::::', snapshot);
        console.log('Update-Persons-ComponentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Persons----ComponentWillUnmount');
    }

    render()  {
        console.log('Persons rendering!!!');
        return this.props.persons.map((person, index) => {
            return <Person
                        name={person.name} 
                        age={person.age} 
                        click={() => this.props.clicked(index)} 
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)}
                    />
        });
    }
}
// const persons = (props) => {
//     console.log('Persons rendering!!!');
//     return props.persons.map((person, index) => {
//         return <Person
//                     name={person.name} 
//                     age={person.age} 
//                     click={() => props.clicked(index)} 
//                     key={person.id}
//                     changed={(event) => props.changed(event, person.id)}
//                 />
//     });
// }

// export default persons;
export default Persons;