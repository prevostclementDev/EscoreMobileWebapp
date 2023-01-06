<template>
    <div class="containerFilter" v-if="openPopUpFilter">
        <div class="topBar">
            <classicButton :imgButton="imgSrc('popUpCloseIcone.svg')" action="UnDisplayFilter" />
        </div>
        <div class="containerChildFilter">
          <p class="title">Leagues</p>
          <div class="option">
            <filterCheck title="World" filterType="leagues" />
            <filterCheck title="EuropaLeague" filterType="leagues" />
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'filterContainer',
  computed : {

    openPopUpFilter() {

      return this.$store.state.action.filterOpen;

    }

  },
  methods : {

    imgSrc($imgName) {

      return require('~/assets/img/' + $imgName);
      
    },

  },
}
</script>

<style lang="scss" scoped>

.containerFilter {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    z-index: 99999;

    .topBar {

        display: flex;
        justify-content: flex-end;
        padding: 15px;

    }

    .containerChildFilter {

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      padding: 15px 0;

      border-bottom: 1px solid #021C29;

      .title {

        color: #021C29;
        font-weight: 700;
        font-size: 29px;
        margin-bottom: 10px;

      }

      .option {

        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 80%;

      }

    }

}

</style>