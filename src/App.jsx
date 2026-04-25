// import Header from './components/Header.jsx';
// import Main from "./components/Main.jsx"
// import Footer from "./components/Footer.jsx"
// import Num from './components/Map.jsx';

// const jobData = [ { company: "Meta", role: "Frontend Developer" }, { company: "Amazon", role: "Backend Developer" } ];
// function App() {
//   return (
//     <>
//     {jobData.map((ele, idx) => (
//       <Card 
//       key = {idx}
//       companyname = {ele.company}
//       role= {ele.role}
//     ))}
//     </>
//   )
// }

// export default App

import { useEffect, useState } from "react";

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    setError(false);

    const controller = new AbortController();

    try {
      const res = await fetch("https://randomuser.me/api/", {
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error("API Error");
      }

      const data = await res.json();

      if (data.results && data.results.length > 0) {
        setUser(data.results[0]);
      } else {
        throw new Error("Invalid data");
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err);
        setError(true);
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Random User</h1>

      {/* 🔥 Loading Skeleton */}
      {loading && (
        <div>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "#ccc",
              margin: "auto",
              animation: "pulse 1s infinite",
            }}
          ></div>

          <div
            style={{
              width: "150px",
              height: "20px",
              background: "#ccc",
              margin: "10px auto",
              animation: "pulse 1s infinite",
            }}
          ></div>
        </div>
      )}

      {/* 🔥 Error State */}
      {error && <p style={{ color: "red" }}>Something went wrong</p>}

      {/* 🔥 Success State */}
      {!loading && !error && user && (
        <div>
          <img
            src={user.picture.large}
            alt="user"
            style={{ borderRadius: "50%" }}
          />
          <h2>
            {user.name.first} {user.name.last}
          </h2>
        </div>
      )}

      <br />

      {/* 🔥 Button */}
      <button onClick={fetchUser} disabled={loading}>
        {loading ? "Loading..." : "Fetch New User"}
      </button>

      {/* 🔥 Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
        `}
      </style>
    </div>
  );
}

export default RandomUser;






























// // function App() {
// //  return <Num />

// // }
// // export default App;

// // import React, { useState, useEffect} from 'react';

// // function TitleCounter() {
// //   const [count, setCount] = useState(0);
// //   const [otherState, setOtherstate] = useState(false);

// //   useEffect(() => {
// //     document.title = `Total Clicks: ${count}`;
// //     console.log("Effects ran: Title updated");
// //   }, [count]);

// //   return (
// //     <div style={{ padding: "20px", textAlign: "center" }}>
// //       <h1>Document Title Syncer</h1>
// //       <p>Current count: {count}</p>

// //       <button onClick={() => setCount(count +1)}>
// //         Increment count 
// //       </button>

// //       <div style = {{ marginTop: '20px'}}>
// //         <button onClick={() => setOtherstate(!otherState)}>
// //           Toggle Other state (Watch console)
// //         </button>

// //         <p> Other state is: {otherState.toString()} </p>
// //       </div>
// //       </div>
// //   )
  
// // }

// // export default TitleCounter

// // ~



// // function App() {
// //   return (
// //     <div className="box">
// //       <Header />
// //       <Main />
// //       <Footer />
// //     </div>
// //   )
// // }

// // export default App










    
//      {/* <Header name = {name} age = {18}/>
//      <Footer name = {name} lastname = {"Kaur"}/> */}
//   {/* <Header /> 
//       <main> 
//         <p className='Para1'>Welcome to my React app!</p>
//         <p className='Para2'>Here are the features of react</p>
//         <section className='hero'>
//           <ol>
//           <li>React’s main feature is its component-based architecture, which breaks the UI into reusable pieces.</li>
//           <li>Another key feature is the Virtual DOM, which improves performance by updating only the changed parts.</li>
//           <li>The third feature is state and hooks, which make the UI dynamic and interactive.</li>
//         </ol>
//         </section>
//         </main>  
//         <footer> &copy; 2026 All rights are reserved</footer>
//      <Header /> */}
//       {/* <main>
//       <section className='container'>
//         <div>
//           <img src={img} className='image' alt="Profile image" />
//         </div>

//         <div className='name'>
//           <h2>Parmeet Kaur</h2>

//         <p>SEO Expert</p>
//         </div>

//         <div className='data'>
//           <div>
//             <h3>Following</h3>
//             <p>1K</p>
//           </div>
//           <div>
//             <h3>Followers</h3>
//             <p>5K</p>
//           </div>
//           <div>
//             <h3>Posts</h3>
//             <p>650</p>
//           </div>
//         </div>

//         <div className='buttons'>
//           <button>Send Message</button>
//           <button>Follow Request</button>
//         </div>
//       </section>
//      </main> */}

    
  

// //   const data = [
// //     {
// //       userId: 1,
// //       id: 1,
// //       title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// //       body: "quia et suscipit suscipit recusandae consequuntur expedita..."
// //     },
// //     {
// //       userId: 1,
// //       id: 2,
// //       title: "qui est esse",
// //       body: "est rerum tempore vitae sequi sint nihil..."
// //     },
// //     {
// //       userId: 1,
// //       id: 3,
// //       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
// //       body: "et iusto sed quo iure voluptatem occaecati..."
// //     }
// //   ];

  
// //   let isLoggedIn = true;
// //   let isAdmin = true;

// //   return (
// //     <div style={{ padding: "20px" }}>

     
// //       <h2>
// //         {isLoggedIn && isAdmin && "Welcome Admin"}
// //         {isLoggedIn && !isAdmin && "Welcome User"}
// //         {!isLoggedIn && "Please Login"}
// //       </h2>

     
// //       {isAdmin && <p>🔰 Admin Badge</p>}
// //       {isLoggedIn && <p>🟢 Logged In</p>}

// //       <hr />


// //       <h2>Posts</h2>

// //       {data.map((item) => (
// //         <div
// //           key={item.id}
// //           style={{
// //             border: "1px solid black",
// //             marginBottom: "10px",
// //             padding: "10px",
// //             borderRadius: "8px"
// //           }}
// //         >
// //           <h3>
// //             {item.id}. {item.title}
// //           </h3>
// //           <p>{item.body}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }