import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/Home.css';

import Api from '../services/Api'

class Home extends React.Component {

  constructor() {
    super();
    this.state = {users: []};
  }

  getUsers = async () => {
    var response = await Api.get("/users");
    console.log(response.data)
    this.setState({users: response.data.users});
  }

  render() {
    return (
      <div className="Home">
        <Link to="/novo_usuario">Novo Usuário</Link>

        <h1>Home</h1>
        <button onClick={this.getUsers}>Pegar Usuários</button>

        { this.state.users.map((user, i) => (
          <div key={i}>
            <h1>{user.name} | {user.last_name} | {user.email} | {user.age}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default Home;
