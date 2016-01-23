App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    };
  },
  renderTask() {
    return this.data.tasks.map((task) =>{
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