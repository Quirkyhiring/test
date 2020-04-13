<template>
<v-app>
  <v-container>
    <div class = "premium">
      Premium Package
    </div>
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">1. Billing Cycle</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">2. Payment Method</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">3. Review Order</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
      <v-stepper-content step="1">
        <div class = "billing"> Billing Cycle </div>
    <v-row no-gutters>
      <v-col cols = "12" sm = "6">
        <v-card class = "card" @click="onMonth()" id = "month">
          <v-card-text>
            <v-row no-gutters>
              <v-col cols = "12" sm="6" xs="6">
                <p class="card-title">
                  Monthly
                </p>
              </v-col>
              <v-col cols = "12" sm="6" xs="6">
                <p class="Price">
                  $15/mon
                </p>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <div class="SubTitle">
              Monthly after free trial
            </div>

          </v-card-text>
          <div v-if="type === 'A'">
            <v-avatar tile color="#3CB1E5" width="100%" height="20px" style="border-radius: 6px">
            </v-avatar>
          </div>
        </v-card>
        </v-col>
        <v-col cols = "12" sm = "6" xs="6">
          <v-card class = "card" @click="onAnnual()">
            <v-card-text>
              <v-row no-gutters>
              <v-col cols = "12" sm = "6" xs="6">
                <p class="card-title">
                  Annual
                </p>
              </v-col>
              <v-col cols = "12" sm = "6" xs="6">
                <p class="Price">
                  $126
                </p>
              </v-col>
              </v-row>
              <v-divider></v-divider>
              <div class="SubTitle">
                Annual after free trial
              </div>
            </v-card-text>
            <div v-if="type === 'B'">
              <v-avatar tile color="#3CB1E5" width="100%" height="20px" style="border-radius: 6px">
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters style = "margin-bottom: 50px">
        <v-col cols = "12" sm = "12"  xs="12">
          <v-card class = "card">
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols = "12" sm = "6" xs="6">
                  <p class="today-title">
                    Today Due:
                  </p>
                  </v-col>
                  <v-col cols = "12" sm = "6"  xs="6">
                    <p class = "today-price">
                      $0.00
                    </p>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <div class="today-subtitle">
                  “Your free trial begins on February 12, 2020 and will end on March 12, 2020. You cancel your subscription at any time before March 12, 2020 to avoid being charged”              </div>
              </v-card-text>
              <v-card-actions>
              </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols = "12" xs="6" sm = "6" md = "6" lg = "6" xl = "6">
          <v-row no-gutters justify="start"> 
            <v-btn class="ma-2" tile outlined color="grey darken-2">CANCEL
          </v-btn>
          </v-row>
        </v-col>
        <v-col cols = "12" xs="6" sm = "6" md = "6" lg = "6" xl = "6">
          <v-row no-gutters justify = "end">
            <v-btn class="ma-2" tile outlined color="primary" @click="e1 = 2" :disabled="!selected?'':disabled">NEXT
            <v-icon right>mdi-arrow-right</v-icon> 
          </v-btn>
          </v-row>
        </v-col>
      </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <div class = "billing"> Payment Method </div>
         <v-row no-gutters>
        <v-col cols = "12" xs="6" sm = "6" md = "6" lg = "6" xl = "6">
          <v-row no-gutters justify="start"> 
            <v-btn class="ma-2" tile outlined color="grey darken-2">CANCEL
          </v-btn>
          </v-row>
        </v-col>
        <v-col cols = "12" xs="6" sm = "6" md = "6" lg = "6" xl = "6">
          <v-row no-gutters justify = "end">
            <v-btn class="ma-2" tile outlined color="primary" @click="e1 = 3" :disabled="!selected?'':disabled">NEXT
            <v-icon right>mdi-arrow-right</v-icon> 
          </v-btn>
          </v-row>
        </v-col>
      </v-row>
      </v-stepper-content>

      <v-stepper-content step="3">
        <div class="billing"> Review Order </div>
      <v-row no-gutters>
        <v-col cols = "12" xs="6" sm = "6" md = "6" lg = "6" xl = "6">
          <v-row no-gutters justify="start"> 
            <v-btn class="ma-2" tile outlined color="grey darken-2">CANCEL
          </v-btn>
          </v-row>
        </v-col>
        <v-col cols = "12" xs="6" sm = "6" md = "6" lg = "6" xl = "6">
          <v-row no-gutters justify = "end">
            <v-btn class="ma-2" tile outlined color="primary" @click="e1 = 1" :disabled="!selected?'':disabled">NEXT
            <v-icon right>mdi-arrow-right</v-icon> 
          </v-btn>
          </v-row>
        </v-col>
      </v-row>
      </v-stepper-content>
    </v-stepper-items>

  </v-stepper>
    
    </v-container>
</v-app>
</template>

<script>
export default{

  data: () => ({
    e1: 1,
    selected:false,
    type:""
  }),
  methods:{
    onMonth()
      {
        this.selected = true;
        this.type = 'A';
        //alert("asdf");
      },
    onAnnual(){
      this.selected = true;
      this.type = 'B';
      //alert("asdf");      
    }
    }
   
}
 
</script>

<style>
</style>
