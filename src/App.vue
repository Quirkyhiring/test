<template>
  <div id="app">
    <h1 id = "premium"> Premium Package
    </h1> 

    <v-circle id = "circle">
        
    </v-circle>
    <h1 id = "billing">
      Billing Cycle
    </h1> 
    <div id = "card" style = "position: absolute; left: 140px; top: 375px;">
      <v-card-text>
        <p id = "Title" style="position:fixed; left: 182px; top: 415px;">Monthly</p>
        <p id = "Price">$15/Mon</p>
        <p id="SubTitle">Monthly after free trial</p>
      </v-card-text>
      <v-card-actions>
      </v-card-actions>
    </div>
    <div id = "card" style="position: absolute; left: 728px; top: 375px;">
      <v-card-text>
        <p id = "Title" style="position:fixed; left: 770px; top: 415px;">Annual</p>
        <p id = "Price" style="position:fixed; left: 1200px; top: 415px;">$126</p>
        <p id="SubTitle" style="position:fixed; left: 770px; top: 477px;">Annual after free trial</p>
      </v-card-text>
      <v-card-actions>
      </v-card-actions>
    </div>
    <div id = "today-card">
      <v-card-text>
        <p id = "today-title">Today Due:</p>
        <p id="today-subtitle">“Your free trial begins on February 12, 2020 and will end on March 12, 2020. You cancel your subscription at any time before March 12, 2020 to avoid being charged”</p>
      </v-card-text>
    </div>
    <button id = "button-cancel">
      <p id = "text-cancel">
        CANCEL
      </p>
    </button>
    <button id = "button-next" style = "left: 1130px; top; 759px" v-on:click = "onNext">
      <p id = "text-next">
        NEXT
      </p>
    </button>
  </div>

</template>

<script>
  
</script>

<style>
#premium{
  position: absolute;
  width: 572px;
  height: 44px;
  left: 140px;
  top: 136px;

  /* Title */

  font-family: Acumin Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 65px;
  /* or 162% */

  display: flex;
  align-items: center;

  color: #404040;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#circle{
  position: absolute;
  left: 9.72%;
  right: 87.08%;
  top: 22.33%;
  bottom: 72.56%;

  background: #3CB1E5;
}
#billing{
  position: absolute;
  width: 186px;
  height: 33px;
  left: 141px;
  top: 310px;

  font-family: Acumin Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  /* or 125% */

  display: flex;
  align-items: center;

  color: #3CB1E5;
}
#card{

  width: 572px;
  height: 158px;


  background: #FFFFFF;
  /* card_shadow */

  box-shadow: 0px 2px 6px rgba(82, 82, 82, 0.25);
  border-radius: 6px;
}
#Title{
position:fixed;
width: 160px;
height: 34px;


/* Title */

font-family: Acumin Pro;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 65px;
/* or 162% */

display: flex;
align-items: center;

color: #263238;

}
#SubTitle{
  position: fixed;
  width: 180px;
  height: 20px;
  left: 182px;
  top: 477px;

  font-family: Acumin Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 65px;
  /* or 361% */

  display: flex;
  align-items: center;

  color: #555555;
}
#Price{
  position: fixed;
  width: 160px;
  height: 34px;
  left: 520px;
  top: 415px;

  font-family: Acumin Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 65px;
  /* or 203% */

  display: flex;
  align-items: center;
  text-align: right;

  color: #082947;
}
#today-card{
  position: absolute;
  width: 1160px;
  height: 154px;
  left: 140px;
  top: 557px;

  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(82, 82, 82, 0.25);
  border-radius: 6px;
}
#today-title{
  position: fixed;
  width: 159px;
  height: 29.62px;
  left: 182px;
  top: 588.59px;

  font-family: Acumin Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  /* or 125% */

  display: flex;
  align-items: center;
}
#today-subtitle{
    position: fixed;
  width: 964px;
  height: 40px;
  left: 182px;
  top: 647px;

  font-family: Acumin Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* or 137% */


  color: #888888;
}
#button-cancel{
  position: absolute;
  width: 170px;
  height: 48px;
  left: 140px;
  top: 759px;

  border: 2px solid #888888;
  box-sizing: border-box;
  border-radius: 4px;
}
#button-next{
  position: absolute;
  width: 170px;
  height: 48px;
  left: 1130px;
  top: 759px;

  border: 2px solid #3CB1E5;
  box-sizing: border-box;
  border-radius: 4px;
}
#text-next{
  color: #3CB1E5;
}
</style>
