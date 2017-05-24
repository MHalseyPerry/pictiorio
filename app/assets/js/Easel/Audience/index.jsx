import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Audience extends Component {
    render () {
        return (
            <div className="audience">
                {this.getUsers()}
            </div>
        );
    }

    getUsers () {
        return this.props.store.users.map( u => (
            <User
                user={u}
                key={u.id} />
        ));
    }
}

class User extends Component {
    render () {
        const { user } = this.props;

        return (
            <div className="user" >
                <img src={user.pic} />
                <div className="name">{user.name}</div>
            </div>
        );
    }
}

export default Audience;
