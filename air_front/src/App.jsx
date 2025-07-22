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
import Anomalyreport from "./component/Anomalyreport/anomalyreport";
import AnomalyReportEdit from "./component/anomalyreport/AnomalyreportEdit";

import AdminHome from "./component/admin/AdminHome";

import UserDetail from "./component/admin/UserDetail";
import UsersList from "./component/admin/UsersList";
import AdminLayout from "./component/admin/Layout/AdminLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/notifications/:id" element={<NotificationDetail />} />
          <Route path="notifications/new" element={<NotificationWrite />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/anomaly" element={<Anomaly />} />
          <Route path="/dashdetail" element={<DashDetail />} />
          <Route path="/anomalyreport" element={<Anomalyreport />} />
          <Route path="/anomalyreport/edit" element={<AnomalyReportEdit />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="anomalyreport" element={<Anomalyreport />} />
        <Route path="anomalyreport/edit" element={<AnomalyReportEdit />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<AdminHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
