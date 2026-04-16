import Header from './components/Header.jsx';
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"


// function App() {
//   const data = [
//     {
//       userId: 1,
//       id: 1,
//       title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit suscipit recusandae consequuntur expedita..."
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "qui est esse",
//       body: "est rerum tempore vitae sequi sint nihil..."
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       body: "et iusto sed quo iure voluptatem occaecati..."
//     }
//   ];

  
//   let isLoggedIn = true;
//   let isAdmin = false;

//   return (
//     <div style={{ padding: "20px" }}>

     
//       <h2>
//         {isLoggedIn && isAdmin && "Welcome Admin"}
//         {isLoggedIn && !isAdmin && "Welcome User"}
//         {!isLoggedIn && "Please Login"}
//       </h2>

     
//       {isAdmin && <p>🔰 Admin Badge</p>}
//       {isLoggedIn && <p>🟢 Logged In</p>}

//       <hr />


//       <h2>Posts</h2>

//       {data.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             border: "1px solid black",
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "8px"
//           }}
//         >
//           <h3>
//             {item.id}. {item.title}
//           </h3>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect} from 'react';

function TitleCounter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherstate] = useState(false);

  useEffect(() => {
    document.title = `Total Clicks: ${count}`;
    console.log("Effects ran: Title updated");
  }, [count]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Document Title Syncer</h1>
      <p>Current count: {count}</p>

      <button onClick={() => setCount(count +1)}>
        Increment count 
      </button>

      <div style = {{ marginTop: '20px'}}>
        <button onClick={() => setOtherstate(!otherState)}>
          Toggle Other state (Watch console)
        </button>

        <p> Other state is: {otherState.toString()} </p>
      </div>
      </div>
  )
  
}

export default TitleCounter

~



// function App() {
//   return (
//     <div className="box">
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   )
// }

// export default App










    
     {/* <Header name = {name} age = {18}/>
     <Footer name = {name} lastname = {"Kaur"}/> */}
  {/* <Header /> 
      <main> 
        <p className='Para1'>Welcome to my React app!</p>
        <p className='Para2'>Here are the features of react</p>
        <section className='hero'>
          <ol>
          <li>React’s main feature is its component-based architecture, which breaks the UI into reusable pieces.</li>
          <li>Another key feature is the Virtual DOM, which improves performance by updating only the changed parts.</li>
          <li>The third feature is state and hooks, which make the UI dynamic and interactive.</li>
        </ol>
        </section>
        </main>  
        <footer> &copy; 2026 All rights are reserved</footer>
     <Header /> */}
      {/* <main>
      <section className='container'>
        <div>
          <img src={img} className='image' alt="Profile image" />
        </div>

        <div className='name'>
          <h2>Parmeet Kaur</h2>

        <p>SEO Expert</p>
        </div>

        <div className='data'>
          <div>
            <h3>Following</h3>
            <p>1K</p>
          </div>
          <div>
            <h3>Followers</h3>
            <p>5K</p>
          </div>
          <div>
            <h3>Posts</h3>
            <p>650</p>
          </div>
        </div>

        <div className='buttons'>
          <button>Send Message</button>
          <button>Follow Request</button>
        </div>
      </section>
     </main> */}

    
  

