import React, { Component } from 'react';

// import Radium from 'radium';

import classes from './Person.module.css';

import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';

import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context';

// import styled from 'styled-components';

// const StyledDiv = styled.div`
//     width : 60%;
//     margin : 16px auto;
//     border : 1px solid #eee;
//     box-shadow: 0  2px 3px #ccc;
//     padding : 16px;
//     text-align : center;
//     @media (min-width: 500px) {
//         width : 450px;
//     }
// `;

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef(); // new way after react 16.3 
    }

    static contextType = AuthContext;

    render() {
        console.log('Person render!!!')
        // return [  Rendering Adjacent JsX elements(one way of doing so)
        //     // <div className={classes.Person}>
        //         <p key="i1" onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old.</p>,
        //         <p key="i2">{this.props.children}</p>,
        //         <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
        //     // </div>
        // ];
        return (
            <Aux>
                {/* <AuthContext.Consumer> */}
                    {/* {(context) => context.authenticated  ? <p>Authenicated!</p> : <p>Please log in.</p>} */}
                {/* </AuthContext.Consumer> */}
                {this.context.authenticated  ? <p>Authenicated!</p> : <p>Please log in.</p>}
                <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                type="text"
                // ref={(inputEl) => { this.inputElement = inputEl }}  Old way
                ref={this.inputElement}
                onChange={this.props.changed}
                value={this.props.name} />
            </Aux>
        );
        // We can replace Aux by React.Fragment(inbuilt feature) or we can 
        // import { Fragment } and replace Aux by just Fragment which does
        // the same work as our Aux behind the scenes
    }

    componentDidMount() {
        // this.inputElement.focus(); // old way
        this.inputElement.current.focus(); // new way
        console.log('context:::', this.context.authenticated);
    }
}

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed :  PropTypes.func
};

// const person = (props) => {
//     // const style = {
//     //     '@media (min-width: 500px)' : {
//     //         width : '450px'
//     //     }
//     // }
//     console.log('Person render!!!')
//     return (
//         <div className={classes.Person}>
//         {/* <StyledDiv> */}
//             <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old.</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         {/* </StyledDiv> */}
//         </div>
//     );
// }

// export default Radium(person);
// export default person;
export default withClass(Person, classes.Person);