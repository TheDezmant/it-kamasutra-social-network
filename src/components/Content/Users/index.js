import React from "react";
import StyledUsers from "./units";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                photo: "https://i.pinimg.com/originals/9d/55/b6/9d55b6f1824bcd2c16a22c0a1bef7501.jpg",
                fullName: "Dmitry",
                status: "I am a boss 1",
                location: { city: "Moscow", country: "Russia" },
            },
            {
                id: 2,
                followed: true,
                photo: "https://i.pinimg.com/originals/9d/55/b6/9d55b6f1824bcd2c16a22c0a1bef7501.jpg",
                fullName: "Sasha",
                status: "I am a boss 2",
                location: { city: "Minsk", country: "Belarus" },
            },
            {
                id: 3,
                followed: false,
                photo: "https://i.pinimg.com/originals/9d/55/b6/9d55b6f1824bcd2c16a22c0a1bef7501.jpg",
                fullName: "Katy",
                status: "I am a boss 3",
                location: { city: "Donesck", country: "Ukraina" },
            },
            {
                id: 4,
                followed: true,
                photo: "https://i.pinimg.com/originals/9d/55/b6/9d55b6f1824bcd2c16a22c0a1bef7501.jpg",
                fullName: "Vova",
                status: "I am a boss 4",
                location: { city: "Moscow", country: "Russia" },
            },
        ]);
    }

    console.log("props", props.users);

    return (
        <StyledUsers>
            {props.users.map((u) => (
                <div key={u.id}>
                    <div>
                        <div>
                            <div>
                                <img src={u.photo} alt="" width="50px" height="50px" />
                            </div>
                            <div>
                                {u.followed ? (
                                    <button
                                        onClick={() => {
                                            props.unfollow(u.id);
                                        }}
                                    >
                                        UnFollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            props.follow(u.id);
                                        }}
                                    >
                                        Follow
                                    </button>
                                )}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.location.country}</div>
                            </div>
                            <div>{u.location.city}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                </div>
            ))}
        </StyledUsers>
    );
};

export default Users;
