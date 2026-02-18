import { useState } from 'react'
export default function Player({ initialName, symbol, isActive, onNameChange }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event){
        setPlayerName(event.target.value)
    }
    
    function handleEditClick() {
        setIsEditing(editing => !editing);
        if(isEditing){
            onNameChange(symbol, playerName)
        }
    }

    return (
        <li className={isActive? "active": undefined}>
            <span className="player">
                {!isEditing && <span className="player-name">{playerName}</span>}
                {isEditing && <input className="player-name" type='text' value={playerName} onChange={handleChange}/>}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            </span>
        </li>
    )
}