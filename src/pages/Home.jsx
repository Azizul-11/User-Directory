import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import UserDetailsModal from "../components/UserDetailsModal";
import AddUserForm from "../components/AddUserForm";
import Loader from "../components/Loader";

const Home = () => {
  const { users, loading, error, search, setSearch, addUser } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Directory</h1>

      <AddUserForm onAdd={addUser} />
      <SearchBar search={search} setSearch={setSearch} />
      <UserList users={users} onUserClick={setSelectedUser} />

      <UserDetailsModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
};

export default Home;
