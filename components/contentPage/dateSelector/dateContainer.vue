<template>
    <div class="dateContainer">
        <div class="centralPart">
          <dateCarousel/>
        </div>
        <div class="rightPart">
          <classicButton :imgButton="imgSrc('calendarIcone.svg')" action="openCalendar" :calendar="true" />
          <button class="resetBtn" @click.prevent="resetCalendar">reset</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'dateContainer',

  methods : {

    imgSrc($imgName) {

      return require('~/assets/img/' + $imgName);
      
    },

    resetCalendar() {

      this.$store.commit('matchList/setCalendar',{
        now : true,
        changeTo : 'next',
      })

    }

  }
}
</script>

<style lang="scss" scoped>

  .dateContainer {

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 0px 10px;
    border-top: 1px solid #F77F00;
    margin: 0 auto;
    width: 90%;

    .rightPart {

      width: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .resetBtn {

        margin-top: 10px;
        width: 50px;
        background-color: white;
        border: none;
        outline: none;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 5px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;

        cursor: pointer;
        
        color: #021C29;

      }

    }
    
  }

</style>