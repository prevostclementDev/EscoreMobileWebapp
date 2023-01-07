<template>
    <div class="match">
        <div class="topPart">
          <h3>{{ matchData.name }} - {{ matchData.type }}
          </h3>
        </div>
        <div class="scorePart">
          <div class="teams " v-for="(Team, index) in matchData.teams" :class="(index == 0)?'leftPart':'rightPart'">
            <div class="name">{{ Team.name }}</div>
            <div class="logo"><img :src="Team.image" alt=""></div>
            <div class="score" :class="(Team.winner)?'win':'loose'">{{ Team.score }}</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'match',
  props : {

    matchData : {
      type: Object,
      default: {}
    }

  },

}
</script>

<style lang="scss" scoped>

.match {

  background-color: white;
  width: 100%;
  padding: 20px 10px;
  border-radius: 8px;
  margin: 10px 0;

  .topPart {

    max-width: 80%;
    margin: 0 auto;

    h3 {

      text-align: center;
      font-weight: 700;
      font-size: 20px;
      color: #021C29;

    }

  }

  .scorePart {

    display: flex;
    justify-content: space-between;
    align-items: center;

    .teams{

      display: flex;
      justify-content: space-between;
      align-items: center;
      width: calc(50% - 10px);
      color: #021C29;
      font-weight: 700;
      font-size: 16px;
      line-height: 11px;

      .name {

        max-width: 60px;
        text-align: center;
        line-height: 100%;

      }

      .score {

        color: #69C909;

        &.loose {

          color: #CC0505;

        } 
        font-family: 'Open sans', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 16px;
        -webkit-text-stroke: 1px #021C29;
        text-shadow:  0px 4px 4px rgba(2, 28, 41, 0.25);

      }

      .logo {

        background-color: white;
        box-shadow: 0px 4px 4px rgba(2, 28, 41, 0.25);
        border-radius: 12px;
        padding: 10px;

        img {

          width: 40px;
          height: 40px;
          object-fit: contain;


        }

      }

      &.rightPart {

        flex-direction: row-reverse;

      }

    }

  }

}

</style>