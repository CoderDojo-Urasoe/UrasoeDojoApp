import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Login from './pages/login';
import Top from './pages/top';
import Contents from './pages/contents';
import Content from './pages/content';
import ContentForm from './pages/content-form';
import AppInfo from './pages/app-info';
import AppInfoForm from './pages/app-info-form';
import Members from './pages/members';
import MemberForm from './pages/member-form';
import Roles from './pages/roles';
import RoleForm from './pages/role-form';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Top />} />
            <Route path="/contents" element={<Contents />} />
            <Route path="/contents/:id" element={<Content />} />
            <Route path="/contents/new" element={<ContentForm />} />
            <Route path="/contents/:id/edit" element={<ContentForm />} />
            <Route path="/app-info" element={<AppInfo />} />
            <Route path="/app-info/edit" element={<AppInfoForm />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/new" element={<MemberForm />} />
            <Route path="/members/:id/edit" element={<MemberForm />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/roles/new" element={<RoleForm />} />
            <Route path="/roles/:id/edit" element={<RoleForm />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;