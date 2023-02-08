import Chat from '../../components/Chat/Chat'
import UsersList from '../../components/UsersList/UsersList'
import './ChatPage.css'
import { ChatMessage, ReceiveMsgRequest, Empty } from '../../chat_pb'
import { useState, useEffect } from 'react'

const ChatPage = ({ client }) => {
  const [users, setUsers] = useState([]);
  const [msgList, setMsgList] = useState([]);
  let duplicate = []

  const username = window.localStorage.getItem("username");

  console.log('list', msgList)
  useEffect(() => {
    const strRq = new ReceiveMsgRequest();
    strRq.setUser(username);

    var chatStream = client.receiveMsg(strRq, {});
    chatStream.on("data", (response) => {
      console.log('res', response)
      const from = response.getFrom();
      const msg = response.getMsg();
      const time = response.getTime();

      console.log('stream msg', msg)

      console.log("sending friend msg:" + msg, " from:" + from)

      duplicate.push(msg)
      let count = 0
      for (let i = 0; i < duplicate.length; i++) {
        // console.log(duplicate[i])
        if (duplicate[i] == msg) {
          count++
        }
      }
      // console.log('dup', duplicate)
      console.log(count)

      if (count % 2 != 0) {
        if (from === username) {
          setMsgList((oldArray) => [
            ...oldArray,
            { from, msg, time, mine: true },
          ]);

        } else {
          setMsgList((oldArray) => [...oldArray, { from, msg, time }]);
        }
      }

    });

    chatStream.on("status", function (status) {
      console.log(status.code, status.details, status.metadata);
    });

    chatStream.on("end", () => {
      console.log("Stream ended.");
    });
  }, []);

  useEffect(() => {
    getAllUsers();
  }, []);

  // console.log('msgList', msgList)

  const getAllUsers = () => {
    client.getAllUsers(new Empty(), null, (err, response) => {
      let usersList = response?.getUsersList() || [];
      usersList = usersList
        .map((user) => {
          return {
            id: user.array[0],
            name: user.array[1],
          };
        })
        .filter((u) => u.name !== username);
      setUsers(usersList);
    });
  }

  const sendMessage = (message) => {
    const msg = new ChatMessage();
    msg.setMsg(message);
    msg.setFrom(username);
    msg.setTime(new Date().toLocaleString());

    client.sendMsg(msg, null, (err, response) => {
      console.log(response);
    });
  }

  return (
    <div className="chatpage">
      <div className="userslist-section">
        <div
          style={{ paddingBottom: "4px", borderBottom: "1px solid darkgray" }}
        >
          <div>
            <button onClick={getAllUsers}>REFRESH</button>
          </div>
          <div>
            <span>
              Logged in as <b>{username}</b>
            </span>
          </div>
        </div>
        <UsersList users={users} />
      </div>
      <div className="chatpage-section">
        <Chat msgList={msgList} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default ChatPage
