import UserCard from "./UserCard";

const UserList = ({ users, onUserClick }) => {
  if (!users.length) {
    return <p className="text-center text-gray-500">No users found</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => onUserClick(user)}
        />
      ))}
    </div>
  );
};

export default UserList;
