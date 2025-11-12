export default function Dashboard({ users, error }) {
  const ulStyle = {
    listStyleType: "none",
    display: users.length < 1 ? "none" : "block",
  }
  const listStyle = {
    listStyleType: "none",
    fontSize: "18px",
    padding: "5px",
  }
  return (
    <>
      <div>
        <div
          style={users.length < 1 ? { display: "block" } : { display: "none" }}
        >
          Loading
        </div>
        <ul style={ulStyle}>
          {users.map((user) => (
            <li key={user.id} style={listStyle}>
              <b>{user.name}</b>
              <ul style={ulStyle}>
                <li>Email: {user.email}</li>
                <li>Address: {user.address.city}</li>
                <li>Web: {user.website}</li>
              </ul>
            </li>
          ))}
        </ul>
        <span style={error ? { display: "inline" } : { display: "none" }}>
          {error}
        </span>
      </div>
    </>
  )
}
