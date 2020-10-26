import React,{ PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state){
    //     console.log('Person.js getDerivedStateFromProps');
    //     return state;
    // }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('Person.js shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons){
    //         return true;
    //     }else
    //         return false;
    // }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Person.js getSnapshotBeforeUpdate');
        return {message:'Snapshot'};
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('Person.js componentDidUpdate');
        console.log(snapshot);
    }
    componentWillUnmount(){
        console.log('Person.js ComponentWillUnmount');
    }
    render(){
        return(
                this.props.persons.map((person, index) => {
                return <Person name={person.name} age={person.age} 
                click={() => {this.props.clicked(index)} }
                changed={(event) => {this.props.changed(event,person.id)}}
                key={person.id}
                isAuth={this.props.isAuthenticated}/>
                })
        );
    }
}   

export default Persons;