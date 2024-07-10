import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        location: '',
      },
    };
  }
  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/rituraj2084');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} alt="profle pic" />
        <h1>Name: {name}</h1>
        <h2>Contact: @rituraj2084</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
