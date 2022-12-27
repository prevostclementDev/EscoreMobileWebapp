<template>
    <div class="containerEnTete">
        <img src="~/assets/img/head-top-triangle.svg" alt="">
        <div class="contentEntete">
          <Title />
        </div>
    </div>
</template>

<script>
export default {
  name: 'enTete'
}
</script>

<style lang="scss">
  .containerEnTete {

    background-color: white;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.11);
    border-radius: 0px 0px 30px 30px;
    padding-bottom: 10px;
    
    img {

      width: 100%;
      height: auto;
      object-fit: cover;

    }

  }
</style>