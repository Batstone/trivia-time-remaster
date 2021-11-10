import { useSelector } from 'react-redux';
import SetupForm from './components/screens/SetupForm';
import GameScreen from './components/screens/GameScreen';

import './App.css';



function App() {
  const gameInfo = useSelector(state => state.questions);
  console.log(gameInfo.length);

  return (
    <>
      {gameInfo.length === 0 && <SetupForm />}
      {gameInfo.length > 0 ? <p>TEST</p> : ''}
    </>
  );
}

export default App;
