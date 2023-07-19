import LoginScreen from './screens/LoginScreen';
import {Routes, Route } from 'react-router-dom';
import NewPasword from './screens/NewPasword';
import ResetPasword from './screens/ResetPasword';
import SignupScreen from './screens/SignupScreen';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/"  Component={LoginScreen}/>
          <Route path="/reset" exact Component={ResetPasword}/>
          <Route path="/signup" exact Component={SignupScreen}/>
          <Route path="/newpassword/:token" Component={NewPasword}/>
      </Routes>
    </div>
  );
}

export default App;
