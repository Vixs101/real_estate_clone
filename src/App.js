import React, { createContext, useContext } from "react";


// create a context for the app
const AuthContext = createContext({
  user: {
    username: "@Eli",
    name: "Elijah Victor",
    email: "elijahvix695@gmail.com",
  },
});

// define a context provider
function AuthProvider(props) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          username: "@Eli",
          name: "Elijah Victor",
          email: "elijahvix695@gmail.com",
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// define user profile component
function UserProfile() {
  const {user} = useContext(AuthContext);

  console.log(user)
  return (
    <>
      <h1>User Profile</h1>
      <div>UserName : @Eli</div>
      <div> Name : Elijah Victor</div>
      <div> Email : elijahvix695@gmail.com</div>
    </>
  );
}

// root component
export default function App() {
  return (
    <AuthProvider>
      <section className="main-container">
        <UserProfile />
      </section>
    </AuthProvider>
  );
}
