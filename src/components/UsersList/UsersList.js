import './UsersList.css'

const UsersList = ({ users = [] }) => {

  return (
    <div className="userslist">
      {users?.map((user, i) => {
        return <UserCard user={user} key={i} />;
      })}
    </div>
  );
}

const UserCard = ({ user }) => {

  return (
    <div className="usercard">
      <div className="usercard-img"></div>
      <div>
        <div className="usercard-name">
          <h3>{user?.name || "No Username"}</h3>
        </div>
      </div>
    </div>
  )
}

export default UsersList
