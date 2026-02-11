import { useState } from 'react'
export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    function handleClick() {
        setIsEditing(true);
    }
    return (
        <li>
            <span className="player">
                {!isEditing && <span className="player-name">{name}</span>}
                {isEditing && <input className="player-name" />}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleClick}>Edit</button>
            </span>
        </li>
    )
}