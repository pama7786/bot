import React,{useState} from 'react';
import '../stylesheets/App.css';
import BotCollection from './BotCollection';
import Navbar from './Navbar';
import YourBotArmy from './YourBotArmy';

function App() {

  const [myBots,setMyBots] = useState([]);

  function addMyBot(bot){
    if(myBots.filter((item)=>item.id==bot.id).length==0){
      const newBots = [...myBots,bot];
      setMyBots(()=>newBots);
    }
    else{
      alert('Bot is already in your army')
    }
  }
  function removeMyBot(bot){
    const newBots = myBots.filter((item)=>bot.id!==item.id)
    setMyBots(()=>newBots);
  }

  return (
    <div className="container-75">
      <Navbar />
      <YourBotArmy
      myBots={myBots}
      removeMyBot={removeMyBot}
      />
      <BotCollection
      addMyBot={addMyBot}
      removeMyBot={removeMyBot}
      />
    </div>
  );
}

export default App;