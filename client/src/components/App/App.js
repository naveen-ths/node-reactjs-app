import React from 'react';
import axios from 'axios';

import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      del_id: '',
      firstName: '',
      lastName: '',
      gravatar: '',
      organization: '',
      country: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDelete = (user_id) => {
    this.setState(
      { del_id: user_id },
      () => this.deleteUser(this.state.del_id)
    )
  };

  handleSubmit = e => {
    e.preventDefault();

    axios.post(`http://localhost:3001/users/create`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gravatar: this.state.gravatar,
      organization: this.state.organization,
      country: this.state.country
    })
      .then(res => {
        if (res.status === 200) {
          alert(res.data);
          window.location.reload();
        }
      })
  }

  deleteUser = (del_id) => {
    axios.delete(`http://localhost:3001/users/${del_id}/delete`)
      .then(res => {
        if (res.status === 200) {
          alert(res.data);
          window.location.reload();
        }
      })
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/users/list`)
      .then(res => {
        const users = Object.values(res.data);
        this.setState({ users });
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <td>Sr No.</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Gravatar Name</td>
                <td>Organization Name</td>
                <td>Country</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) =>
                <tr key={user._id}>
                  <td>{index}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gravatar}</td>
                  <td>{user.organization}</td>
                  <td>{user.country}</td>
                  <td><button className="btn btn-danger" onClick={e => this.handleDelete(user._id)}>Delete</button></td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="add-user-form">
            <h2>Add New User</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" name="firstName" className="form-control" id="firstname" onChange={this.handleChange} placeholder="Enter your first name" />
              </div>
              <div className="form-group">
                <input type="text" name="lastName" className="form-control" id="lastname" onChange={this.handleChange} placeholder="Enter your last name" />
              </div>
              <div className="form-group">
                <input type="text" name="gravatar" className="form-control" id="gravatar" onChange={this.handleChange} placeholder="Enter your gravatar url." />
              </div>
              <div className="form-group">
                <input type="text" name="organization" className="form-control" id="organization" onChange={this.handleChange} placeholder="Enter your company name" />
              </div>
              <div className="form-group">
                <input type="text" name="country" className="form-control" id="country" onChange={this.handleChange} placeholder="Enter your country" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
