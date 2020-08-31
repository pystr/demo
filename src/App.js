import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyLogin from './Components/MyLogin';
import MyHeader from './Components/TopBar';
import MyMenu from './Components/MenuBar';
import MyContent from './Components/Content';
import TestPage from './Components/Test';
import Products from './Components/Products';
import Basket from './Components/Basket';
import dndTest from './Components/dndTest';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


export default function AuthExample() {
  return (
    <Router>
      <section id="container" class="">
      <AuthButton /> 
<MyHeader/>

<MyMenu isAuthenticated={fakeAuth.isAuthenticated}/>
        

        <Switch>
          <Route path="/Dashboard">
            <MyContent />
          </Route>
          <Route render={(LogSucc)} path="/Login" >
            <MyLogin {...LogSucc}/>
          </Route>
          <Route path="/Urunler">
            <Products />
          </Route>
          <Route path="/Sepet">
            <Basket />
          </Route>
          <Route path="/dndtest">
            <dndTest />
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </section>
    </Router>
  );
}
let LogSucc=false;
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); 
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Hoş Geldiniz.!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Güvenli Çıkış
      </button>
    </p>
  ) : (
    <p>Lürfen Giriş Yapın</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
// function App() {
//   return (
   
//     <section id="container" class="">
//     <Router>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/public">
//             <PublicPage />
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/protected">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//         </section>
      
//   );
// }

// export default App;
