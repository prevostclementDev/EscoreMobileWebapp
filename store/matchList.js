export const state = () => ({

    activeGame : {
        name: "League of Legends",
        img: require(`~/assets/img/lol.png`),
    },

    UsableGames : {
        'lol': 'League of Legends',
        'rl': 'Rocket League',
        'valorant': 'Valorant',
    },
  
    activeDate : {
      date: new Date(),
      index: 1,
    },
    activeLayoutDate : []

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

    setCalendar(state, data) {

      let date = new Date();

      if ( !data.now ) {

        date = new Date(state.activeLayoutDate[1].getTime());

        if ( data.changeTo == "next") {

          date.setDate(date.getDate() + 1);
  
        } else if ( data.changeTo == "back") {
  
          date.setDate(date.getDate() - 1);
  
        } else {

          date = new Date(data.changeTo);

        }

      }

      let nextDate = new Date(date.getTime());
      let LastDate = new Date(date.getTime());
      nextDate.setDate(nextDate.getDate() + 1);
      LastDate.setDate(LastDate.getDate() - 1);

      state.activeLayoutDate = [
        LastDate,
        date,
        nextDate,
      ]

      state.activeDate.date = state.activeLayoutDate[state.activeDate.index];

    },

    setActiveDate(state, data) {

      state.activeDate.date = data.date;
      state.activeDate.index = data.index;

    }

  
  }