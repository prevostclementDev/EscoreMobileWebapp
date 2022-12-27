<template>
    <div class="container">
      <enTete :srcImg="getActiveGame.img" :gameName="getActiveGame.name" />
      <bar>
        <template  #left>
          <classicButton :imgButton="imgSrc('filterIcone.svg')" action="openFilter" />
        </template>
        <template  #right>
          <classicButton :imgButton="imgSrc('burgerIcone.svg')" action="DisplayMenu" />
        </template>
      </bar>

      <dateContainer/>

      <containerList/>
  
      <piedPage />
      <Menu />
    </div>
</template>
  
<script>
export default {
    name: 'macthListPage',
    computed:{

      getActiveGame() {
        return this.$store.state.matchList.activeGame;
      },

    },
    methods : {

      imgSrc($imgName) {

        return require('~/assets/img/' + $imgName);
        
      },

      UpdatePage() {

        this.$store.commit('matchList/activeGame', {
          gameName : this.$route.params.listMatch,
        });

      }

    },
    mounted() {
      this.$store.commit('action/UnDisplayMenu');
      this.UpdatePage();
    }

}
</script>
  