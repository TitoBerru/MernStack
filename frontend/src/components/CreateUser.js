import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        userName: '',
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });
    }

    onChangeuserName = e => {
        this.setState({
            userName: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if(this.state.userName === ''){
            alert('por favor ingrese un usuario')

        } else {
        await axios.post('http://localhost:4000/api/users', {
            userName: this.state.userName
        });
        this.setState({ userName: '' });
        this.getUsers();
    }
    }

    deleteUser = async (userId) => {
        const response = window.confirm('¿Seguro que quiere borrar a este usuario?');
        if (response) {
            await axios.delete('http://localhost:4000/api/users/' + userId);
            this.getUsers();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Nuevo usuario</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.userName}
                                    type="text"
                                    onChange={this.onChangeuserName}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Guardar
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.userName}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
