import React, { createContext } from 'react'

let GameStatus = {
  play: false,
  gameLink: null
}

const GameContext = createContext([GameStatus])

function GameProvider({ children }) {
  const [gamePlayedStatus, SetGamePlayedStatus] = React.useState([GameStatus])

  //   useEffect(() => {
  //     SetGamePlayedStatus([GameStatus])
  //   }, [GameStatus])

  const changeGameStatus = newStatus => {
    SetGamePlayedStatus(newStatus)
    console.log('newStatus', newStatus)
  }

  return <GameContext.Provider value={[gamePlayedStatus, { changeGameStatus }]}>{children}</GameContext.Provider>
}

export { GameProvider, GameContext }
