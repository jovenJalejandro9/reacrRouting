import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class UserDetail extends Component {
    handleRedirect(){
        browserHistory.push('/users');
    }
    render(){
        const users = this.props.route.data;
        const id = this.props.params.id;
        const user = users.filter(user => {
            if(user.id == id) {
                return user;
            }
        });
        return (
            <div>
                <h1>{user[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={user[0].media} alt={user[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Apellido</strong>: {user[0].surname}</li>
                           <li><strong>Profesion</strong>: {user[0].profession}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Users</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetail