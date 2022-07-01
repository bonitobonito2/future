import Login from "./components/sigin/Login";
import Layout from "./components/layout/layout";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useNavigate } from "react-router-dom";
import CraeteAccount from "./components/signup/craeteAccount";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const isLogined = useSelector((state) => state.PersonSlice.isLogined);
  const navigate = useNavigate()
  return (
    <div className="App">
      {!isLogined && (
        <Routes>
          <Route path="/login">
            <Route
              index
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
          </Route>
          <Route path="/signup">
            <Route
              index
              element={
                <Layout>
                  <CraeteAccount />
                </Layout>
              }
            />
          </Route>
          <Route
            path="*"
            element={
             <Navigate replace to = '/login' />
            }
          />
        </Routes>
      )}
      {isLogined && (
        <Routes>
          <Route path="/" element={<Navigate replace to = '/profile' />} />
          <Route path="/profile" element= {<p>hello</p>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
