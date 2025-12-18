const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">{user.name}</h2>

        <p><strong>Address:</strong> {user.address?.street}, {user.address?.city}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        <p>
          <strong>Website:</strong>{" "}
          <a href={`https://${user.website}`} className="text-blue-600">
            {user.website}
          </a>
        </p>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetailsModal;
