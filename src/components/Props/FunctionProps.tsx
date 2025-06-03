function Avatar({ img, alt }) {
  return <img src={img} alt={alt} />;
}

function Name({ name }) {
  return <h4>{name}</h4>;
}

function Handle({ handle }) {
  return <p>@{handle}</p>;
}

function Badge({ user, style, addFriend }) {
  return (
    <div style={style}>
      <Avatar img={user.img} alt={user.name} />
      <div>
        <Name name={user.name} />
        <Handle handle={user.handle} />
        <button
          onClick={() => {
            addFriend();
          }}
        >
          Add Friend
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      user={{
        name: "Lynn Fisher",
        img: "https://avatars.githubusercontent.com/u/871315",
        handle: "lynnandtonic",
      }}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid var(--beige-10)",
        borderRadius: 8,
        backgroundColor: "var(--charcoal)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center",
      }}
      addFriend={() => alert("Added!")}
    />
  );
}
