import React from "react";
const Content = React.lazy(() => import("app2/Content"));

const fetchUserData = async () => {
  // fetch the data from its own server (localhost:3000)
  const response = await fetch("/api/user");
  return response.json();
};

const App = () => {
  const [userInfo, setUserInfo] = React.useState();

  React.useEffect(() => {``
    // IIEF
    (async () => {
      const userData = await fetchUserData();
      setUserInfo(userData);
    })();
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "4px dashed #fc451e",
      }}
    >
      <div style={{ padding: "1rem" }}>
        <h3>User info</h3>

        {!userInfo && <p>loading user info...</p>}
        {userInfo && (
          <>
            <p>ID: {userInfo.id}</p>
            <p>Name: {userInfo.name}</p>
            <p>Company: {userInfo.company}</p>
          </>
        )}
      </div>
      <React.Suspense fallback={<h1>Loading....</h1>}>
        <Content />
      </React.Suspense>
    </div>
  );
};

export default App;
