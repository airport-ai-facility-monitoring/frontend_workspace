import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import mainRoutes from "./routes/mainRoutes";
import adminRoutes from "./routes/adminRoutes";
import Login from "./component/login/login";
import SignUp from "./component/Signup/singup";
import Login from "./component/login/login";
import Anomaly from "./component/anomaly/Anomaly";
import Anomalyreport from './component/Anomalyreport/anomalyreport';
import AnomalyReportEdit from './component/anomalyreport/AnomalyreportEdit'
import UserDetail from './component/admin/UserDetail'
import UsersList from './component/admin/UsersList'



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
          <Route path="/dashdetail" element={<DashDetail />} />
          <Route path="/anomalyreport" element={<Anomalyreport />} />
          <Route path="/anomalyreport/edit" element={<AnomalyReportEdit />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
