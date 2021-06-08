import "antd/dist/antd.css";
import "./App.css";
import { Card } from "antd";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Login" bordered={true} style={{ width: 300 }}>
        <Login />
      </Card>
    </div>
  );
}

export default App;
