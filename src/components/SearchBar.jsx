const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring"
    />
  );
};

export default SearchBar;
