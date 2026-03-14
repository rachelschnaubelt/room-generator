import { useState } from 'react'
import './App.scss'
import rooms from './content/rooms.json';
import lighting from './content/lighting.json';
import sensoryDetails from './content/sensory_details.json';
import storyDetails from './content/story_details.json';
import surprise from './content/surprise.json';
import size from './content/size.json';
import { randomItemFromArray } from './utils/random';
import Button from './components/button/button';
import Room from './components/room/room';

function App() {
  const [room, setRoom] = useState({})

  const generateRoom = () => {
    const newRoom = {
      roomType: randomItemFromArray(rooms),
      roomSize: randomItemFromArray(size),
      roomLighting: randomItemFromArray(lighting),
      roomSensoryDetails: randomItemFromArray(sensoryDetails),
      roomStoryDetails: randomItemFromArray(storyDetails),
      roomSurprise: randomItemFromArray(surprise)
    }

    setRoom(newRoom);
  }

  return (
    <main className={'main-content'}>
      <Room
        room={room} />
      <Button onClick={generateRoom}>
        Get a New Room
      </Button>
    </main>
  )
}

export default App
