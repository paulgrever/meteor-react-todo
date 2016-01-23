App = React.createClass({
  getTask() {
    return [
      { _id: 1, text: "This is task 1" },
      { _id: 2, text: "This is task 2" },
      { _id: 3, text: "This is task 3" }
    ];
  },
  renderTask() {
    return this.getTask().map((task) =>{
      return <Task key={task._id} task={task} />;
    });
  }, 
  render() {
    return (
      <div class='container'>
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTask()}
        </ul>
      </div>
    );
  }
});