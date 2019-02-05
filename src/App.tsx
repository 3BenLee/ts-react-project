import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BlogRead from './components/BlogRead';
import MyBlogs from './components/MyBlogs';
import MyClass from './components/MyClass';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyClass 
        name={ 'Ben' }
        isDope={true}
        />
        <Route exact path='/' component={MyBlogs} />
        <Route exact path='/blogread/:id' component={BlogRead} />
      </div>
    );
  }
}

export default App;
