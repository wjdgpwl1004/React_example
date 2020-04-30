import React, {useState} from 'react';
// import Swiper from 'react-id-swiper';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
// import TabList from './components/TabList';
// import { Route } from 'react-router-dom';
// import Index from './components/pages/Index';
// import MemberList from './components/pages/MemberList';
// import MyPage from './components/pages/MyPage';
// import Profile from './components/pages/Profile';

function App() {
  const [value, setValue] = useState(3);
  // const params = {
  //   slidesPerView: 'auto',
  //   spaceBetween: 30,
  //   grabCursor: true,
  // }
  return (
    <div style={{padding:'10%'}}>
    {/* <Swiper {...params}>
      <div style={{width:'200px',height:'300px', background: 'pink' }}>Slide1</div>
      <div style={{width:'100px',height:'300px', background: 'black' }}>Slide #2</div>
      <div style={{width:'300px',height:'300px', background: 'blue' }}>Slide #3</div>
      <div style={{width:'100px',height:'300px', background: 'green' }}>Slide #4</div>
      <div style={{width:'200px',height:'300px', background: 'pink' }}>Slide #1</div>
      <div style={{width:'100px',height:'300px', background: 'black' }}>Slide #2</div>
      <div style={{width:'300px',height:'300px', background: 'blue' }}>Slide #3</div>
      <div style={{width:'100px',height:'300px', background: 'green' }}>Slide #4</div>
    </Swiper> */}

    <InputRange
        maxValue={20}
        minValue={0}
        value={value}
        onChange={value => setValue(value)} />
      {/* <TabList/>
      
      <hr/>

      <Route path="/" component={Index} exact />
      <Route path="/MemberList" component={MemberList} />
      <Route path="/MyPage" component={MyPage} />
      <Route path="/Profile" component={Profile} /> */}
    </div>
  );
}

export default App;
