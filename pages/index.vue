<template>
  <div class="container">
    <enTete gameName="Vos résultats Esport" srcImg="" />
    <bar>
      <template #right>
        <classicButton :imgButton="imgSrc('burgerIcone.svg')" action="DisplayMenu"  />
      </template>
      
    </bar>

<!--     <selectedContainer name="Vos favoris">
      <favoriteElement name="Équipes" :imgSrc="imgSrc('teamIcone.svg')"/>
      <favoriteElement name="Jeux" :imgSrc="imgSrc('GameIcone.svg')"/>
      <favoriteElement name="Tournois" :imgSrc="imgSrc('TournamentIcone.svg')"/>
    </selectedContainer> -->

    <selectedContainer name="Choisissez votre jeu">
      <gameElement :imgSrc="imgSrc('GameValorantChoose.png')" link="/match/valorant" />
      <gameElement :imgSrc="imgSrc('GameLolChoose.png')" link="/match/lol" />
      <gameElement :imgSrc="imgSrc('GameRlChoose.png')" link="/match/rl" />
    </selectedContainer>

    <piedPage />
    <Menu />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
