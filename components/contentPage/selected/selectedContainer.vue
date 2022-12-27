<template>
    <div class="selectedContainer">
        <div class="title">
          <h2>{{ name }}</h2>
        </div>
        <div class="content">
          <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'containerSelecteur',
  props : {

    name : "",

  }
}
</script>

<style lang="scss" scoped>

  .selectedContainer {

    padding: 30px 20px 10px;

    .title {

      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: white;

    }
    
    .content {

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 20px 10px;

    }

  }

</style>