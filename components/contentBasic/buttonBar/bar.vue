<template>
    <div class="containerBarAction">
        <div class="left">
          <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'barAction',
}
</script>

<style lang="scss">
  
  .containerBarAction {

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;

  }

</style>