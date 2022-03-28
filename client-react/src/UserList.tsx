import { Group } from "./model/user/group";
import { User } from "./model/user/user";

export interface UserListProps {
    userListKey: Array<User>;
    callBackFuncKey: (user: User) => void;
}

function joinedGroupNames(groupList: Array<Group>): string {

    return groupList.map(group => group.name).join(", ");
}

function UserList(userListProps: UserListProps) {

    return (

        <div className="columns">
            <div className="column is-one-third is-offset-one-third is-centered">

                {userListProps.userListKey.map(user => {
                    return (

                        <div className="block">
                            <div key={user.id} className="card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{user.firstname} {user.lastname}</p>
                                            <p className="subtitle is-6">Id: {user.id}</p>
                                        </div>
                                        <div className="media-right">
                                            <button onClick={() => userListProps.callBackFuncKey(user)} className="button is-success">Login</button>
                                        </div>
                                    </div>
                                    <div className="content">
                                        Groups: {joinedGroupNames(user.groupList)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default UserList;
