import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import FullPost from './components/FullPost';
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
        <Route exact path='/fullpost/:id' component={FullPost} />
      </div>
    );
  }
}

export default App;
