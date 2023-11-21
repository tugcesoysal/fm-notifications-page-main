import "./App.css";
import Header from "./Components/Header";
import Notification from "./Components/Notification";
import users from "./Users";
import { useState, useEffect } from "react";

function App() {
  const [read, setRead] = useState(users.map((user) => user.read));
  const handleRead = () => {
    setRead((prevRead) => prevRead.map(() => true));
  };
  console.log(read);
  useEffect(() => {}, [read]);

  return (
    <div className="App">
      <Header
        handle={handleRead}
        unread={read.filter((item) => item === false).length}
      />
      {users.map((user, index) => (
        <Notification
          key={index}
          avatar={user.avatar}
          name={user.name}
          reaction={user.reaction}
          reactionTo={user.reactionTo}
          time={user.time}
          message={user.message}
          post={user.post}
          group={user.group}
          read={read[index]}
        />
      ))}
    </div>
  );
}

export default App;
