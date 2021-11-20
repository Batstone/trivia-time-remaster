import { useSelector } from 'react-redux';
import SetupForm from './components/screens/SetupForm';
import GameScreen from './components/screens/GameScreen';

import './App.css';



function App() {
  const playerInfo = useSelector(state => state.playerInfo);
  const gameReadyCheck = useSelector(state => state.gameReady);


  return (
    <>
      {!playerInfo.length && <SetupForm />}
      {gameReadyCheck && <GameScreen />}
    </>
  );
}

export default App;
