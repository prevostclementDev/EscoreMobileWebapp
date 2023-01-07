<template>
    <div class="dateCarousel">
        <div class="buttonDate buttonPrev">
          <button @click.prevent="SetCalendar(false,'back')">
            <img src="~/assets/img/arrowCarousel.svg" alt="">
          </button>
        </div>
        <div class="containDate">
          <div v-for="(date, index) in activeLayoutDate" class="date" v-bind:class = "(index == getActiveDate.index)?'active':''" @click.prevent="SetActiveDate(date,index)">
            <div class="day">{{ date.toLocaleString('fr-FR',{day : 'numeric'}) }}</div>
            <div class="month">{{ date.toLocaleString('fr-FR',{month : 'short'}).slice(0,-1) }}</div>
          </div>
        </div>
        <div class="buttonDate buttonNext">
          <button @click.prevent="SetCalendar(false)">
            <img src="~/assets/img/arrowCarousel.svg" alt="">
          </button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'carouselDate',
  computed : {

    activeLayoutDate() {

      return this.$store.state.matchList.activeLayoutDate;

    },

    getActiveDate() {

      return this.$store.state.matchList.activeDate;

    }

  },
  methods : {

    SetCalendar(now = true, changeTo = "next") {

      this.$store.commit('matchList/setCalendar',{
        now : now,
        changeTo : changeTo,
      })

    },

    SetActiveDate(date,index) {

      this.$store.commit('matchList/setActiveDate',{
        date : date,
        index : index,
      });

    },

  },
  mounted() {

      this.SetCalendar();

  }
}
</script>

<style lang="scss" scoped>

.dateCarousel {

  display: flex;
  justify-content: center;
  align-items: center;

  .containDate {

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;

    .date {

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: white;
      width: 45px;
      height: 45px;
      margin: 0 5px;
      border-radius: 8px;

      font-family: 'Open Sans';
      color: #021C29;
      font-weight: 700;
      font-size: 12px;
      line-height: 11px;

      cursor: pointer;

      &.active {

        width: 55px;
        height: 55px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;

      }

      &:first-child {

        margin-left: 0;

      }

      &:last-child {

        margin-right: 0;

      }

    }

  }

  .buttonDate {

    margin: 0 5px;

    &.buttonNext {

      button {

        img {

          transform: rotate(180deg);

        }

      }

    }

    button {
      
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      img {

        width: 20px;

      }

    }

  }

}

</style>