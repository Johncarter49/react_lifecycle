import React, { Component } from 'react';
import './CounterStyle.css';

export default class Counter extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           name: "Ali",
           count: 0,
    
        };
        console.log("constructor");
      };

      increase = () => {
          this.setState({count: this.state.count + 1});
      }

      decrease = () => {
          this.setState({count: this.state.count - 1});
      }

      static getDerivedStateFromProps(props, state ){
        console.log("getDerivedStateFromProps", state);
        return null
      }

      componentDidMount = ()=> {
          console.log("Component mounted!");
          console.log("------------------")
      }

      componentDidUpdate = () => {
          console.log("Updated!");
          console.log("------------------")
      }

      shouldComponentUpdate(){
          console.log("Should Update???")
          return true;
      }


      getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log("snapshot", prevstate);
        return null
      }

      componentWillMount(){
          console.log("will unmount Bye!");
      }


    render() {
        console.log("Render");
        return (
            <div className="container">
                <p>counter: {this.state.count}</p>
                <button onClick={()=> this.increase()}>ARTTIR</button>
                <button onClick={() => this.decrease()}>AZALT</button>
            </div>
        )
    }
}
