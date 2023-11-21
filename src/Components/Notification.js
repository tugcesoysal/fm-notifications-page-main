import { useEffect } from "react";

export default function Notification(props) {
  const unread = `notification ${props.read ? "" : "unread"}`;
  useEffect(() => {
    console.log("Notification rendered");
  }, [props.read]);

  return (
    <div className={unread}>
      <img width={50} height={50} alt="avatar" src={props.avatar} />
      <div className="contentDiv">
        <div>
          <span className="name">{props.name} </span>
          <span className="reaction">{props.reaction} </span>
          {props.reactionTo && (
            <span className="reactionTo">{props.reactionTo} </span>
          )}
          {props.group && <span className="group">{props.group} </span>}

          {!props.read && <div className="mark"></div>}
        </div>

        <p className="time">{props.time}</p>
        {props.message && <p className="message">{props.message}</p>}
      </div>
      {props.post && (
        <img
          width={50}
          height={50}
          className="post"
          src={props.post}
          alt="post"
        />
      )}
    </div>
  );
}
