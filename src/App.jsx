import { useState, useEffect } from "react"
import UserDashboard from "./components/UserCard"
function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")
  const getUsers = async () => {
    return new Promise((resolve, reject) => {
      let response = null
      let data = null
      try {
        setTimeout(async () => {
          response = await fetch("https://jsonplaceholder.typicode.com/users")
          data = await response.json()
          setUsers(data)
        }, 2000)
        resolve(users)
      } catch (error) {
        reject(error)
        setError(error)
      }
    })
  }
  useEffect(() => {
    setUsers([])
    getUsers()
    const intervalId = setInterval(() => {
      getUsers()
    }, 60000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <UserDashboard users={users} error={error} />
    </>
  )
}

export default App
