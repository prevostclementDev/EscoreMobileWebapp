<template>
    <div class="container">
      <enTete :srcImg="imgSrc('AfficheJeuValorant.png')" gameName="Valorant" />
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
    methods : {

      imgSrc($imgName) {

        return require('~/assets/img/' + $imgName);
        
      }

    },
    mounted() {

      this.$store.commit('action/UnDisplayMenu');

    }

}
</script>
  