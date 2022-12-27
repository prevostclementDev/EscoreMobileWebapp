<template>
  <div>
    <div class="containerEnTete">
        <img src="~/assets/img/head-top-triangle.svg" alt="">
        <div class="contentEntete">
          <Title />
          <div class="smallText">{{ gameName }}</div>
        </div>
    </div>
    <div v-if="srcImg != ''" class="img">
      <img src="~/assets/img/AfficheJeuValorant.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'enTete',
  props: {

    srcImg: '',
    gameName: ''

  }
}
</script>

<style lang="scss">
  
  .img {

    z-index: 0;
    position: relative;
    margin: -20px 0 0 0;

    img {
      width: 100%;
    }

  }

  .containerEnTete {

    background-color: white;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.11);
    border-radius: 0px 0px 30px 30px;
    padding-bottom: 10px;
    z-index: 1;
    position: relative;
    
    img {

      width: 100%;
      height: auto;
      object-fit: cover;

    }

    .smallText {

      font-family: 'Open sans', sans-serif;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #274B5E;
      text-align: center;
      margin-bottom: 5px;

    }

  }
</style>