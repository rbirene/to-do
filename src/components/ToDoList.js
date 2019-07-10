import React, {Component} from 'react';

export default class ToDoList extends Component {

  constructor(props) {
    super(props);

    this.state ={
      userInput: "",
      list: []
    }
  }

  changeUserInput(input){
    this.setState({
      userInput: input
    });
  }

  addToList(input){
    let listArray = this.state.list;
    listArray.push(input);
    this.setState({
      list: listArray,
      userInput: ""
    });
  }

  render(){
    return(
      <div className="to-do-list-main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>To Do</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="task-input">
                <h2>Create a Task</h2>
              <input
                    onChange={ (e)=>this.changeUserInput(e.target.value)}
                    placeholder="Your task"
                    rows="1"
                    type="text"
                    value={this.state.userInput}
                  /><br/><br/>
                <button onClick={()=> this.addToList(this.state.userInput)}>Done</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="task-list">
                <h2>Your Tasks</h2>
                <ul>
                  {this.state.list.map((val)=><li><span className="checkbox"></span>{val}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
