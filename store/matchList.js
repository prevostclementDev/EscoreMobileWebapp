export const state = () => ({

    activeGame : {
        name: "League of Legends",
        img: require(`~/assets/img/lol.png`),
    },

    UsableGames : {
        'lol': 'League of Legends',
        'rl': 'Rocket League',
        'valorant': 'Valorant',
    }
  
  })
  
  export const mutations = {
  
    activeGame(state, data) {
  
      if ( state.UsableGames[data.gameName] != undefined ) {

        state.activeGame.name = state.UsableGames[data.gameName];
        state.activeGame.img = require(`~/assets/img/${data.gameName}.png`);

      } else {

        this.$router.push('/');

      }
  
    },
  
  }