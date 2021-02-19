const getMoviesFromApi = () => {
  return fetch('https://braer-game.ru/')
    .then(response => response)
    .catch(error => {
      //console.error(error)
    })
}

export { getMoviesFromApi }
