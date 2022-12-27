<template>
    <div class="match">
        <div class="topPart">
          <h3>Quart final : europa League - BO5</h3>
        </div>
        <div class="scorePart">
          <div class="teams leftPart">
            <div class="name">BDS esport</div>
            <div class="logo"><img src="~/assets/img/teamBds.png" alt=""></div>
            <div class="score loose">1</div>
          </div>
          <div class="teams rightPart">
            <div class="name">Fnatic esport</div>
            <div class="logo"><img src="~/assets/img/teamFnatic.png" alt=""></div>
            <div class="score win">4</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'match'
}
</script>

<style lang="scss" scoped>

.match {

  background-color: white;
  width: 100%;
  padding: 20px 10px;
  border-radius: 8px;
  margin: 10px 0;

  .topPart {

    max-width: 80%;
    margin: 0 auto;

    h3 {

      text-align: center;
      font-weight: 700;
      font-size: 20px;
      color: #021C29;

    }

  }

  .scorePart {

    display: flex;
    justify-content: space-between;
    align-items: center;

    .teams{

      display: flex;
      justify-content: space-between;
      align-items: center;
      width: calc(50% - 10px);
      color: #021C29;
      font-weight: 700;
      font-size: 16px;
      line-height: 11px;

      .name {

        max-width: 60px;
        text-align: center;

      }

      .score {

        color: #69C909;

        &.loose {

          color: #CC0505;

        } 

        text-shadow: 1px 1px 0 rgba(0, 0, 0), 
                    -1px 1px 0 rgba(0, 0, 0),
                    1px -1px 0 rgba(0, 0, 0),
                    -1px -1px 0 rgba(0, 0, 0),
                    0px 4px 4px rgba(2, 28, 41, 0.25)
                    ;

      }

      .logo {

        background-color: white;
        box-shadow: 0px 4px 4px rgba(2, 28, 41, 0.25);
        border-radius: 12px;
        padding: 10px;

        img {

          width: 40px;
          height: 40px;
          object-fit: contain;


        }

      }

      &.rightPart {

        flex-direction: row-reverse;

      }

    }

  }

}

</style>