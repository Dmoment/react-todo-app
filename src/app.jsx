class Todo extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {done: (this.props.done), text: (this.props.text)}
        this.handleClick= this.handleClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleClick(event) {
        this.setState(
          state => ({
            done: !state.done
          }),
          function(event){
            this.handleSubmit(event);
          }
          
        );
      }

    handleChange(event) {
      let text= event.target.value;
      this.setState(
        state => ({text: text})
        );
    }

    handleSubmit(event) {
      console.log("this is where submit will happen");
    }
    render() {

          return (
              <div className="todo">
                      <span>
                            <input type="checkbox" checked={this.state.done}
                            onClick={this.handleClick}></input>
                            <input type="text" value={this.state.text}
                            className={this.state.done ? 'done' : 'not-done'}
                            onChange={this.handleChange} onBlur={this.handleSubmit}></input>
                        </span>
                      </div>);
    }
}

class TodoList extends React.Component{
  constructor(props){ 
    super(props);
    this.state = {todos: []} //This is an instance of the TodoList
    this.newTodo = this.newTodo.bind(this);
  }
  

  newTodo(event) {
    event.preventDefault(); //It cancels the default action belongs to the event in this case it cancels the null '#' link
    todos = this.state.todos; //This has created object from instance of class TodoList
    todos.push({_id: ""});//This will push a new entry to the local todos array. It won't change the original state of todos array
    //now we have to change the original state of todos array
    //this.state.todos = todos We cannot do this React doesn't allow this to happen. Reacts wants you to use special method to perform state change
   //Therefore, state can only be changed by setState() method
   this.setState(state=>({
     todos: todos
   })
   );

  }

  render(){ 
    const todoList = this.state.todos.map((todo) =>
                      <Todo key={todo._id.toString()} text={todo.text} done={todo.done} />
    );
    return <React.Fragment>
            <h1>React ToDo App</h1>
            {todoList}
            <a href="#" onClick={this.newTodo}>New Todo</a>
    </React.Fragment>
  }

}


ReactDOM.render(<TodoList/>, document.getElementById("root"));
