import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import NotificationsPage from "./component/notifications/NotificationsPage";
import NotificationDetail from "./component/notifications/NotificationDetail";
import NotificationWrite from "./component/notifications/NotificationWrite";
import Home from "./component/Home/Home";
import Dashboard from "./component/Dashboard/Dashboard";
import DashDetail from "./component/Dashboard/DashDetail";
import Alert from "./component/alert/Alert";
import SettingsPage from "./component/settings/SettingsPage";
import SignUp from "./component/Signup/singup";
import Login from "./component/login/login";
import Anomaly from "./component/anomaly/Anomaly";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/notifications/:id" element={<NotificationDetail />} />
          <Route path="notifications/new" element={<NotificationWrite />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/anomaly" element={<Anomaly />} />
          <Route path="dashdetail" element={<DashDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
