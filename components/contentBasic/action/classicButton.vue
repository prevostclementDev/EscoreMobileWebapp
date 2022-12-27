<template>
    <button class="btnBasic">
      <img :src="imgButton" alt="">
    </button>
</template>

<script>
export default {
  name: 'classicButton',
  props : {

    imgButton : "",
    action : "",

  }
}
</script>

<style lang="scss">

  .btnBasic {

    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 8px;
    outline: none;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 5px;
    position: relative;
    cursor: pointer;

    img {

      width : 50%;
      height: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);


    }

  }

</style>