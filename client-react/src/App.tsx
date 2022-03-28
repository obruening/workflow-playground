import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import FormHookExample from './FormHookExample';
import Layout from './Layout';
import LoginPage from './LoginPage';
import Menu from './Menu';
import ProcessInstancesPage from './page/processinstances/ProcessInstancesPage';
import ErfassungEdit from './page/task/erfassung/ErfassungEdit';
import ErfassungReadOnly from './page/task/erfassung/ErfassungReadOnly';
import LeiterEdit from './page/task/leiter/LeiterEdit';
import LeiterReadOnly from './page/task/leiter/LeiterReadOnly';
import Success from './page/task/Success';
import TasksPage from './page/tasks/TasksPage';
import PublicPage from './PublicPage';
import RequireAuth from './RequireAuth';
import Workflow from './Workflow';

function App() {
  
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<LoginPage />} />
            <Route element={<Menu />}>
              <Route path="public" element={<PublicPage />} />
              <Route element={<RequireAuth />} >
                <Route index element={<TasksPage />} />
                <Route path="form" element={<FormHookExample />} />
                <Route path="workflow" element={<Workflow />} />
                <Route path="tasks/:id/erfassung/edit" element={<ErfassungEdit />} />
                <Route path="tasks/:id/erfassung" element={<ErfassungReadOnly />} />
                <Route path="tasks/:id/leiter/edit" element={<LeiterEdit />} />
                <Route path="tasks/:id/leiter" element={<LeiterReadOnly />} />
                <Route path="processinstances" element={<ProcessInstancesPage />} />
                <Route path="success" element={<Success />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
