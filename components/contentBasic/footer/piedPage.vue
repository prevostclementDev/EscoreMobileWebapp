<template>
    <div class="footerContainer">
        <div class="topBar">
          <div class="left">Create by <strong>Prévost Clément</strong></div>
          <div class="right"><a href="">Contact</a></div>
        </div>
        <Title color="white" />
    </div>
</template>

<script>
export default {
  name: 'piedPage'
}
</script>

<style lang="scss">

  .footerContainer {

    background: linear-gradient(180deg, rgba(2, 28, 41, 0.7) 0%, #021C29 100%);
    border-radius: 20px 20px 0 0;
    font-family: 'Open Sans', sans-serif;
    padding: 30px 15px 20px;

    .topBar {

      color: white;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .left {

        font-weight: 400;
        font-size: 12px;
        line-height: 14px;

      }

      .right {

        a {

          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          padding: 8px 12px;
          font-family: 'Open Sans', sans-serif;
          text-decoration: none;
          color: #003049;
          background-color: white;
          border-radius: 14px;

        }
        
      }

    }

  }

</style>