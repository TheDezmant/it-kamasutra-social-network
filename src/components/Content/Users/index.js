import React from 'react';
import { SelectedPage, StyledUsers } from './units';
import userPhoto from '../../../asses/images/user.png';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <StyledUsers>
            <div>
                {pages.map((p) => {
                    return (
                        <SelectedPage
                            fw={props.currentPage === p ? 'bold' : ''}
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}>
                            {p}
                        </SelectedPage>
                    );
                })}
            </div>

            {props.users.map((u) => (
                <div key={u.id}>
                    <div>
                        <div>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" />
                            </div>
                            <div>
                                {u.followed ? (
                                    <button
                                        onClick={() => {
                                            props.unfollow(u.id);
                                        }}>
                                        UnFollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            props.follow(u.id);
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
};

export default Users;
