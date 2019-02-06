import * as React from 'react';

interface IPost {
  title: string;
  id: number;
  body: string;
}

interface IState {
  loadedPost: IPost | null;
}

class FullPost extends React.Component<any, IState> {

  state: Readonly<IState> = {
    loadedPost: null
  }
   componentDidMount() {
      console.log('fullpost', this.props)
      fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
      .then((response) => {
        return response.json()
      })
      .then((post) => {
        this.setState({loadedPost: post})
        console.log(this.state.loadedPost)
      })
    }
  render() {

    const post = this.state.loadedPost
      if (!post) {
        return null
      }

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  }
}

export default FullPost;