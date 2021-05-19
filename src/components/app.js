import React from "react";
import debounce from "lodash/debounce";
import EmptyState from "./empty-state";
import ErrorState from "./error-state";
import Navbar from "./navbar";
import Search from "./search";
import UserCard from "./user-card";

const searchTimeoutInMs = 300;
const apiUrl = "https://api.github.com/users";

function App() {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState("idle");

  const debounceSearch = React.useMemo(
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeoutInMs),
    []
  );

  const handleSearchTermChange = (event) => {
    if (event.target.value) {
      debounceSearch(event.target.value);
    }
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setUsername(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  React.useEffect(() => {
    async function getUser() {
      try {
        const user = await fetchUser(username);
        setUser(user);
        setStatus("resolved");
      } catch (err) {
        setStatus("rejected");
        setError(err);
      }
    }

    if (username) {
      getUser();
    }
  }, [username]);

  return (
    <div className="w-1/2 mx-auto text-center">
      <Navbar />
      <main className="mt-4">
        <Search error={error} onSearchTermChange={handleSearchTermChange} />
        <div className="mt-12 px-4">
          <div className="flex flex-row items-center rounded-lg bg-white shadow-lg overflow-auto">
            {(() => {
              if (status === "idle") return <EmptyState />;
              if (status === "rejected") return <ErrorState error={error} />;
              if (status === "resolved") return <UserCard user={user} />;
            })()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

async function fetchUser(username) {
  const response = await window.fetch(`${apiUrl}/${username}`);
  const data = await response.json();
  if (response.ok) {
    if (data?.name) {
      return data;
    } else {
      const error = new Error(`No results found for "${username}"`);
      return Promise.reject(error);
    }
  } else {
    if (data?.message) {
      const error = new Error(data.message);
      return Promise.reject(error);
    }
  }
}
