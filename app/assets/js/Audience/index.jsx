import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UserStore from '../stores/UserStore.js';
const userStore = new UserStore();

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
        return userStore.users.map( u => (
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
            </div>
        );
    }
}

export default Audience;
