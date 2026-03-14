import { useEffect, useRef, useState } from 'react';
import { startsWithVowel } from '../../utils/strings';
import './room.scss';
import Button from '../button/button';

const Room = ({ room }) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const [currentRoom, setCurrentRoom] = useState({});
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isFadingIn, setIsFadingIn] = useState(false);
    const switchRoomsTimeout = useRef(null);
    const endTransitionTimeout = useRef(null);

    const resetAnimationState = () => {
        clearTimeout(switchRoomsTimeout.current);
        clearTimeout(endTransitionTimeout.current);
    }

    const copyRoom = () => {
        const el = document.querySelector('.cmp-room');
        const buttonText = el.querySelector('.cmp-button').innerText;
        const result = el.innerText.replace(buttonText, '').trim();
        navigator.clipboard.writeText(result);
    }

    useEffect(() => {
        resetAnimationState();
        setIsFadingOut(true);
        setIsFadingIn(false);

        switchRoomsTimeout.current = setTimeout(() => {
            setCurrentRoom(room);
            setIsFadingOut(false);
            setIsFadingIn(true);
        }, 1000);

        endTransitionTimeout.current = setTimeout(() => {
            setIsFadingIn(false);
        }, 5000);

        if (Object.keys(room).length > 0) {
            setIsInitialized(true);
        }

        return () => resetAnimationState();
    }, [room])

    return (
        <div className={`cmp-room bg-light ${isFadingOut ? 'fade-out' : ''} ${isFadingIn ? 'fade-in' : ''} ${isInitialized ? 'initialized' : ''}`}>
            {currentRoom.roomType && currentRoom.roomSize &&
                <p>
                    You enter {startsWithVowel(currentRoom.roomSize) ? 'an' : 'a'} {currentRoom.roomSize} {currentRoom.roomType}.
                </p>
            }
            {currentRoom.roomLighting &&
                <p>
                    The space is lit by {currentRoom.roomLighting}.
                </p>
            }
            {currentRoom.roomSensoryDetails && 
                <p>
                    You notice {currentRoom.roomSensoryDetails}.
                </p>
            }
            {currentRoom.roomStoryDetails &&
                <p>
                    You find {currentRoom.roomStoryDetails}.
                </p>
            }
            {currentRoom.roomSurprise &&
                <p>
                    Notably, {currentRoom.roomSurprise}.
                </p>
            }
            {isInitialized && 
                <Button onClick={copyRoom} size={'small'} style={'secondary'}>
                    Copy Room to Clipboard
                </Button>
            }
        </div>
    )
}

export default Room;