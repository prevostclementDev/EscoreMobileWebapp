<template>
    <div class="dateCarousel">
        <div class="buttonDate buttonPrev">
          <button>
            <img src="~/assets/img/arrowCarousel.svg" alt="">
          </button>
        </div>
        <div class="containDate">
          <div class="date">
            <div class="day">16</div>
            <div class="month">Sept</div>
          </div>
          <div class="date active">
            <div class="day">17</div>
            <div class="month">Sept</div>
          </div>
          <div class="date">
            <div class="day">18</div>
            <div class="month">Sept</div>
          </div>
        </div>
        <div class="buttonDate buttonNext">
          <button>
            <img src="~/assets/img/arrowCarousel.svg" alt="">
          </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'carouselDate'
}
</script>

<style lang="scss" scoped>

.dateCarousel {

  display: flex;
  justify-content: center;
  align-items: center;

  .containDate {

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;

    .date {

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: white;
      width: 45px;
      height: 45px;
      margin: 0 10px;
      border-radius: 8px;

      font-family: 'Open Sans';
      color: #021C29;
      font-weight: 700;
      font-size: 12px;
      line-height: 11px;


      &.active {

        width: 55px;
        height: 55px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;

      }

      &:first-child {

        margin-left: 0;

      }

      &:last-child {

        margin-right: 0;

      }

    }

  }

  .buttonDate {

    margin: 0 5px;

    &.buttonNext {

      button {

        img {

          transform: rotate(180deg);

        }

      }

    }

    button {
      
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      img {

        width: 20px;

      }

    }

  }

}

</style>