/******************************
 * Ваша реализация компонента
 *****************************/
'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeFilter = this.changeFilter.bind(this);
    this.state = {state: 'Flayers'};
  }
  
  changeFilter(filter) {    
    this.setState({
      state: filter
    });
    
  }
  
  filterProject() {
    if (this.state.state == 'All') {
      return this.props.projects;
    } 
    return this.props.projects.filter((el) => {
      if (el.category == this.state.state) {
        return el;
      }
    });     
  }
  
  render() {    
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.state}
          onSelectFilter={filter =>  this.setState({state: filter})} />
        <Portfolio projects={this.filterProject()} />
      </div>
    );
  }
}

