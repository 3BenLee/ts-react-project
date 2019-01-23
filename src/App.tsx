import * as React from 'react';
import './App.css';
import MyClass from './components/MyClass';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MyClass 
        name={ 'Ben' }
        isDope={false}
        />
      </div>
    );
  }
}

export default App;
