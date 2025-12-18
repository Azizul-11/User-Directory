const UserCard = ({ user, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-4 border rounded cursor-pointer hover:bg-gray-50 transition"
    >
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-600">{user.phone}</p>
    </div>
  );
};

export default UserCard;
