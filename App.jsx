// App component - represents the whole app
App = React.createClass({

   mixins: [ReactMeteorData],


     // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    }
  },
 
  renderTasks() {
    return this.getTasks().map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.data.incompleteCount})</h1>
         <label className="hide-completed">
            <input
              type="checkbox"
              readOnly={true}
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted} />
            Hide Completed Tasks
          </label>

          <AccountsUIWrapper />

          { this.data.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks" />
            </form> : ''
          }
        </header>

        <ul>
        {this.renderTasks()}
        </ul>
      </div>
    );
  }
});