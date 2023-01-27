import MoreInfo  from "./components/MoreInfo";
import {UserProvider} from './UserProvider';
import Otro from './components/Otro'
const App = () => {


  return (
      <UserProvider>
        <h2>algo</h2>

        <Otro/>
        </UserProvider>
  );
};
export default App;