import { User, JoinResponse } from './chat_pb'
import { ChatServiceClient } from './chat_grpc_web_pb'
import { useState, useRef } from 'react'
import Header from './components/Header/Header'
import ChatPage from './pages/ChatPage/ChatPage'

const client = new ChatServiceClient('http://localhost:10000', null, null)

function App() {
  // console.log(client)
  const inputRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  const joinHandler = () => {
    const _username = inputRef.current.value

    const user = new User()
    user.setId(Date.now())
    user.setName(_username)

    client.join(user, null, (err, response) => {
      if (err) {
        return console.log(err)
      }

      const error = response.getError()
      // const msg = response.getMsg()

      // console.log(msg)

      if (error == 1) {
        setSubmitted(true)
        return
      }

      window.localStorage.setItem('username', _username.toString())
      setSubmitted(true)
    })
  }

  const renderChatPage = () => {
    return <ChatPage client={client} />;
  }

  const renderJoinPage = () => {
    return (
      <div>
        <div>
          <h1>Join Chat As...</h1>
        </div>
        <div style={{ padding: "10px 0" }}>
          <input
            style={{ fontSize: "1.3rem" }}
            type="text"
            ref={inputRef}
            placeholder="Your username..."
          />
        </div>
        <div>
          <button
            onClick={joinHandler}
            style={{
              padding: "7px 38px",
              fontSize: "1.2em",
              boxSizing: "content-box",
              borderRadius: "4px",
            }}
          >
            Join
          </button>
        </div>
      </div>
    )
  }
  return (
    <>
      <Header />
      <div className="container">
        <main className="main">
          {submitted ? renderChatPage() : renderJoinPage()}
        </main>
      </div>
    </>
  );
}

export default App;
