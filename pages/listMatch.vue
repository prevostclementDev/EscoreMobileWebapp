<template>
    <div class="container">
      <enTete />
      <bar>
        <template  #left>
          <classicButton :imgButton="imgSrc('filterIcone.svg')" action="openFilter" />
        </template>
        <template  #right>
          <classicButton :imgButton="imgSrc('burgerIcone.svg')" action="openBurgerMenu" />
        </template>
      </bar>

      <dateContainer/>
  
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

    }

}
</script>
  