import React from 'react';
import UserClass from './UserClass';
import userContext from '../utils/userContext';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log("Parents Component Did Mount Called");
  }
  render() {
    return (
      <div className="bg-gray-100 p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">About Us Page</h1>
        <p className="text-lg mb-4">
          Welcome to our about us page where you can learn more about our
          company.
        </p>
        <h2 className="text-2xl font-bold mb-2">Mission</h2>
        <p className="mb-4">
          Our mission is to provide the best service to our customers.
        </p>
        <h2 className="text-2xl font-bold mb-2">Values</h2>
        <p className="mb-4">
          We value integrity, transparency, and innovation.
        </p>
        <h1 className="text-xl font-bold mb-2">
          LoggedIn User:
          <userContext.Consumer>
            {({ loggedInUser }) => loggedInUser}
          </userContext.Consumer>
        </h1>
        <UserClass name="First" location="Gurugram" />
      </div>
    );
  }
}

export default About;
