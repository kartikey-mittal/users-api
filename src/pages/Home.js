import React from 'react';
import List from './List';


const HomePage = () => {
 const homePageStyle = {
    backgroundColor: '#6341D6',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'auto',
 };

 const contentContainerStyle = {
  backgroundColor: '#F4F8F9',
  width: 'calc(100vw - 100px)',
  margin: 50,
  height: 'calc(100vh - 100px)',
  maxWidth: 'calc(100vw - 100px)',
  maxHeight: 'calc(100vh - 100px)',
  overflowY: 'auto',
  borderRadius: 10, // Example value, you can adjust as needed
  boxShadow: '5px 15px 15px 5px rgba(0.4, 0, 0, 0.1)', // Example value, you can adjust as needed
};

 const contentStyle = {
   padding: 30,
   backgroundColor: 'transparent',
   height: 'calc(100vh - 160px)',
   display: 'flex',
   justifyContent: 'space-between' // Align List and Profile components horizontally
 };

 return (
  <>
    <div style={homePageStyle}>
      <div style={contentContainerStyle}>
        {/* Your content goes here */}
        <div style={contentStyle}>
          <List/>
          <div style={{flex:1}}></div>
          {/* <Profile/> */}
        </div>
      </div>
    </div>
  </>
 );
};

export default HomePage;
