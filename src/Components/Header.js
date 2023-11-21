export default function Header(props) {
  return (
    <header className="header">
      <h1 className="header__head">Notification</h1>
      {props.unread !== 0 && <h1 className="header__num">{props.unread}</h1>}
      <button className="header__read" onClick={props.handle}>
        Mark all as read
      </button>
    </header>
  );
}
