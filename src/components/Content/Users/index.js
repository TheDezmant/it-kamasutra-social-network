import React from 'react';
import StyledUsers from './units';
import * as axios from 'axios';
import userPhoto from '../../../asses/images/user.png';

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                this.props.setUsers(response.data.items);
            });
        }
    };

    render() {
        return (
            <StyledUsers>
                <button onClick={this.getUsers}>GetUsers</button>
                {this.props.users.map((u) => (
                    <div key={u.id}>
                        <div>
                            <div>
                                <div>
                                    <img src={userPhoto} alt="" width="50px" height="50px" />
                                </div>
                                <div>
                                    {u.followed ? (
                                        <button
                                            onClick={() => {
                                                this.props.unfollow(u.id);
                                            }}>
                                            UnFollow
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                this.props.follow(u.id);
                                            }}>
                                            Follow
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{'u.location.country'}</div>
                                </div>
                                <div>{'u.location.city'}</div>
                                <div>{u.status}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </StyledUsers>
        );
    }
}

export default Users;
