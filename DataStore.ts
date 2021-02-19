type GameType = {
  type: 'game'
  link: string
  title: string
  coverSource: any
}

type DataStoreType = {
  GAMES: [GameType]
  VIDEOS: [Object]
}

export const DATA_STORE: DataStoreType = {
  GAMES: [
    {
      type: 'game',
      link: 'https://braer-game.ru/',
      title: 'Brick Invaders — The Game',
      coverSource: require('./src/assets/covers/16.jpg')
    }
  ],
  VIDEOS: [
    // Vebinars
    {
      type: 'vebinar',
      link: 'https://youtu.be/EinZcwDq6Dg',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    {
      type: 'vebinar',
      link: 'https://youtu.be/F8t1VwopGds',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    {
      type: 'vebinar',
      link: 'https://youtu.be/Is56m-HG6BQ',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    // Promos
    {
      type: 'promo',
      link: 'https://youtu.be/n-RaXxcMlYc',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    {
      type: 'promo',
      link: 'https://youtu.be/Q9OtDKKz7dQ',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    {
      type: 'promo',
      link: 'https://youtu.be/oMSoaUHgTXk',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    // Instructions
    {
      type: 'instruction',
      link: 'https://youtu.be/QK2CDKFgeVA',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    {
      type: 'instruction',
      link: 'https://youtu.be/egbdHxekzt4',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    {
      type: 'instruction',
      link: 'https://youtu.be/K-oiesKFqrM',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    {
      type: 'instruction',
      link: 'https://youtu.be/GXGtnjLsKCY',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    {
      type: 'instruction',
      link: 'https://youtu.be/1OX7FcxZFdA',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    },
    {
      type: 'instruction',
      link: 'https://youtu.be/VEeqK6UpSdw',
      title: 'vebinar video 1',
      coverSource: require('./src/assets/covers/16.jpg')
    }
  ]
}
