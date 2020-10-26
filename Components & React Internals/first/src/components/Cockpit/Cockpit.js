import React,{ useEffect , useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        console.log('Cockpit.js useEffect()');
        alert('Saved');
        //ex->HTTP Req.
        toggleButtonRef.current.click();
        return () => {
            console.log('Cockpit.js CleanUp');
        }
    },[]);

    let btnClass='';
    if(props.showPersons)
        btnClass = classes.Red;

    const assignedClasses = [];

    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is Working.</p>
          <button ref={toggleButtonRef} className={btnClass} onClick = {props.clickbtn}>Toggle Persons</button>
          {/* <AuthContext.Consumer>
          {(context) => <button onClick={context.login}>Log In</button>}
          </AuthContext.Consumer> */}
          <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);