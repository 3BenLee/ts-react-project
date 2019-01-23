import * as React from 'react';

export interface IMyClassProps { 
  name: string; 
  isDope: boolean;
};

export interface IMyClassState {
  age: number;
}

class MyClass extends React.Component<IMyClassProps, IMyClassState> {

  public state = {
    age: 42
  }
  public render() {
    return (
      <div className="App">
        <h1>My name is {this.props.name} and I am {this.state.age}!</h1>
        <div>
          {this.props.isDope ? (<h2>Rock on!</h2>) : (<h2>That sucks!</h2>)}
        </div>
        <h2>{this.props.isDope}</h2>
      </div>
    );
  }
}

export default MyClass;

{/* <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div> */}