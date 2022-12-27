<template>
    <div class="dateContainer">
        <div class="centralPart">
          <dateCarousel/>
        </div>
        <div class="rightPart">
          <classicButton :imgButton="imgSrc('calendarIcone.svg')" action="openCalendar" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'dateContainer',

  methods : {

    imgSrc($imgName) {

      return require('~/assets/img/' + $imgName);
      
    }

  }
}
</script>

<style lang="scss" scoped>

  .dateContainer {

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px 10px;
    border-top: 1px solid #F77F00;
    margin: 0 auto;
    width: 90%;
    
  }

</style>