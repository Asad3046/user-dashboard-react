import Dashboard from "./Dashboard";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}

export default App;
