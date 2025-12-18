import { useEffect, useState } from "react";
import { fetchUsers } from "../api/userApi";

const LOCAL_KEY = "added_users";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const apiUsers = await fetchUsers();

      const localUsers = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
      const combinedUsers = [...apiUsers, ...localUsers];

      combinedUsers.sort((a, b) => a.name.localeCompare(b.name));
      setUsers(combinedUsers);
    } catch (err) {
      setError("Failed to load users", err);
    } finally {
      setLoading(false);
    }
  };

  const addUser = (user) => {
    const updatedUsers = [...users, user].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setUsers(updatedUsers);

    const localUsers = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
    localStorage.setItem(LOCAL_KEY, JSON.stringify([...localUsers, user]));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return {
    users: filteredUsers,
    loading,
    error,
    search,
    setSearch,
    addUser,
  };
};
