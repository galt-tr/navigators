import logo from './navigators.jpg';
import { Timeline, Follow } from 'react-twitter-widgets'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Working together to build on Bitcoin
        </p>
        <Button href="https://bitcoinnavigators.slack.com" size='lg' className='button'>Join the Slack</Button>
        <ul/>
        <Follow 
          username='bitcoin_nav'
          options={{
            size: "large"
          }}
        />

        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'bitcoin_nav'
          }}
          options={{
            height: '600',
            width: '400',
            borderColor: '#fff6e6'
          }}
         />
      </header>
    </div>
  );
}

export default App;
