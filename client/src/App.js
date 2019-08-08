import React from 'react';
import axios from 'axios';
import './App.css';

export default class PersonList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      profile: {country: '', firstName: '', lastName: '', gravatar: '', organization: ''}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/users/list`)
      .then(res => {
        const profile = res.data;
        this.setState({ profile });
      })
  }

  render() {
    return (
      <div>
        <p>First Name: { this.state.profile.firstName }</p>
        <p>Last Name: { this.state.profile.lastName }</p>
        <p>Country: { this.state.profile.country }</p>
        <p>Gravatar: { this.state.profile.gravatar }</p>
        <p>Organization: { this.state.profile.organization }</p>
      </div>
    )
  }
}
