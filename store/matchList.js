import axios from 'axios'

export const state = () => ({

    activeGame : {
        name: "League of Legends",
        img: require(`~/assets/img/lol.png`),
        apiName: "lol",
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
    activeLayoutDate : [],

    allMatch : [],
    baseUrlApi : 'https://api.pandascore.co/',

  })
  
  export const mutations = {
  
    activeGame(state, data) {
  
      if ( state.UsableGames[data.gameName] != undefined ) {

        state.activeGame.name = state.UsableGames[data.gameName];
        state.activeGame.img = require(`~/assets/img/${data.gameName}.png`);
        state.activeGame.apiName = data.gameName;

        this.commit('matchList/renderMatchList');

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

      this.commit('matchList/renderMatchList');

    },

    setActiveDate(state, data) {

      state.activeDate.date = data.date;
      state.activeDate.index = data.index;

      this.commit('matchList/renderMatchList');

    },

    setMatchList(state, data) {

      state.allMatch = data;

    },
  
    renderMatchList(state, data) {

      state.allMatch = [];

      const header = {

        headers: {
            'Authorization': 'Bearer '+process.env.apiKey,
            'accept': 'application/json'
        }

      }

      axios.get(state.baseUrlApi + state.activeGame.apiName + "/matches?filter[begin_at]="+state.activeDate.date.toISOString().slice(0,10)+"&page=1&per_page=99", header)
      .then(response => {

        let globalContainer = [];
        
        for ( let match of response.data ) {

          let matchSetup = {};

          matchSetup.name = match.name;

          if ( match.match_type == "best_of" ) {

            matchSetup.type = 'BO'+match.number_of_games;

          }

          matchSetup.league = [
            match.league.name,
            match.league.slug,
          ];

          matchSetup.id = match.id;
          matchSetup.teams = [];

          for (let team of match.opponents) {

            let winner = false;

            if ( match.winner_id == team.opponent.id ) {

              winner = true;

            }

            let score = 0;

            for (let result of match.results) {

              if ( result.team_id == team.opponent.id ) {

                score = result.score;

              }

            }

            matchSetup.teams.push({
              accronym : team.opponent.accronym,
              id : team.opponent.id,
              image : team.opponent.image_url,
              name : team.opponent.name,
              slug : team.opponent.slug,
              score : score,
              winner : winner,
            });

          }

          globalContainer.push(matchSetup);

        }

        this.commit('matchList/setMatchList', globalContainer);

      })
      .catch(error => {

        console.log(error)

      })

    }

  }