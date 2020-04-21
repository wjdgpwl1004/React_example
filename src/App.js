import React from 'react';
import TabList from './components/TabList';
import { Route } from 'react-router-dom';
import Index from './components/pages/Index';
import MemberList from './components/pages/MemberList';
import MyPage from './components/pages/MyPage';
import Profile from './components/pages/Profile';

function App() {
  return (
    <>
      <TabList/>
      
      <hr/>

      <Route path="/" component={Index} exact />
      <Route path="/MemberList" component={MemberList} />
      <Route path="/MyPage" component={MyPage} />
      <Route path="/Profile" component={Profile} />
    </>
  );
}

export default App;
