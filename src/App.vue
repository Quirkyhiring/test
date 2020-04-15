<template>
<v-app>
  <v-container>
    <div class = "premium">
      Premium Package
    </div>
    <v-stepper v-model="e1" alt-labels justify-center class = "elevation-0" size="10px">

    <v-stepper-header class = "elevation-0" justify = "center" align = "center">
      <v-stepper-step step="1" color="#3CB1E5" style = "font-size:13px" :complete="e1 != 1" complete-icon="">1. Billing Cycle
      </v-stepper-step>

      <v-divider color = "#3CB1E5"></v-divider>

      <v-stepper-step step="2" color="#3CB1E5" style = "font-size:13px" :complete="e1 != 2" complete-icon="">2. Payment Method
      </v-stepper-step>

      <v-divider color = "#3CB1E5"></v-divider>

      <v-stepper-step  step="3" color="#3CB1E5" style = "font-size:13px"
      :complete="e1 != 3" complete-icon="">3. Review Order
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <div class = "maintitle"> Billing Cycle </div>
    <v-row no-gutters>
      <v-col cols = "12" sm = "6" v-for="sub in subscriptionPlan" :key="sub.id">
        <v-card class = "card" @click="onMonth(sub)">
          <v-card-text>
            <v-row no-gutters>
              <v-col cols = "12" sm="6" xs="6">
                <p class="card-title">
                  {{sub.payment_plan_name}}
                </p>
              </v-col>
              <v-col cols = "12" sm="6" xs="6">
                <p class="Price">
                  {{sub.payment_plan == "MON" ? "$" + sub.price + "/mon" :  "$" + sub.price}}
                </p>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <div class="SubTitle">
              {{sub.payment_plan_name}} after free trial
            </div>

          </v-card-text>

          <div v-if="type === sub.id">
            <v-avatar tile color="#3CB1E5" width="100%" height="10px" style="border-radius: 0px 0px 6px 6px; position: relative; top: -11px">
            </v-avatar>
          </div>
        
          <div v-if="sub.note.length > 0" class="payment-note" style="display: block">
            <p class="note-value">{{sub.note}}</p>
          </div>
        </v-card>
       </v-col>
      </v-row>
        <v-row no-gutters style = "margin-bottom: 50px">
          <v-col cols = "12" sm = "12"  xs="12">
            <v-card class = "card">
                <v-card-text class = "billing-cardtext">
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
                    “Your free trial begins on {{curDate}} and will end on {{expireDate}}. You cancel your subscription at any time before {{expireDate}} to avoid being charged”              
                  </div>
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters style = "padding-left: 10px; padding-right: 10px">
          <v-col cols = "12" sm = "6">
            <v-row no-gutters justify="start"> 
              <v-btn class="button" tile outlined color="grey darken-2">CANCEL
              </v-btn>
            </v-row>
          </v-col>
          <v-col cols = "12" sm = "6">
            <v-row no-gutters justify = "end">
              <v-btn class="button" tile outlined color="primary" @click="e1 = 2, drawCircle()" v-bind:disabled="isCycleSelected">NEXT
                <v-icon right>mdi-arrow-right</v-icon> 
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <div class = "maintitle"> Payment Method </div>
        <v-row no-gutters="">
          <v-col cols="12" sm="6">
            <v-card class = "card-payment" @click = "onMasterCard()">
              <v-row justify="center" align="center">
              <v-col cols="13" sm="1">
              <v-checkbox v-model="bMasterCard"></v-checkbox>
              </v-col>
              <v-col cols="13" sm="3">
                <img :src = "svg_card1"/>
              </v-col>
              <v-col col = "13" sm = "3">
                <img :src = "svg_card2"/>
              </v-col>
              <v-col cols="13" sm="3">
                <img :src = "svg_card3"/>
              </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card class = "card-payment" style = "padding: 20px" @click = "onPayPal()">
              <v-row justify="center" align="center">
                <v-col cols="12" sm="1" justify="center" align="center">
                  <v-checkbox v-model="bPayPal"></v-checkbox>
                </v-col>
                <v-col cols="12" sm="11" justify="center" align="center">
                  <img :src = "svg_paypal"/>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row style="padding: 10px">
          <v-col cols="12" sm="6" v-if="bMasterCard == true">
            <v-card style = "padding: 20px; margin-bottom: 40px">
              <div id="c_input">
                <v-row>
                  <v-col cols="12" sm="6" md="6" >
                    <v-text-field class = "elevation-0" label="First name" v-model="FirstName" solo />
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field class = "text-form" label="Last name" v-model="LastName" solo />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field class = "text-form" label="Credit card number" v-model="CreditNumberCard" solo />
                  </v-col>
                </v-row>
                <p class="text-expiration"> Expiration date </p>
                <v-row>
                  <v-col cols="12" sm="3" md="3">
                    <v-autocomplete class = "text-form" ref="month" v-model="month" :items="months" label="MM" solo/>
                  </v-col>
                  <v-col cols="12" sm="3" md="3">
                    <v-autocomplete class = "text-form" ref="year" v-model="year" :items="years" label="YY" solo/>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field class = "text-form" label="Security code" v-model="SecurityCode" solo/>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-autocomplete class = "text-form" ref="country" v-model="country" :items="countries" label="Country" solo />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field class = "text-form" label="Postal Code" v-model="PostalCode" solo/>
                  </v-col>
                </v-row>
              </div>
              <v-checkbox style = "margin-top: -10px;" :label="`Save card information`"/>
            </v-card>
            <v-row no-gutters>
              <v-col cols = "12" sm = "6">
                  <v-row no-gutters justify="start"> 
                    <v-btn class="button" tile outlined color="grey darken-2" @click="e1 = 1, drawCircle()">
                      <v-icon left >mdi-arrow-left</v-icon> BACK
                    </v-btn>
                </v-row>
              </v-col>
              <v-col cols = "12" sm = "6">
                <v-row no-gutters justify = "end">
                  <v-btn class="button" tile outlined color="primary" @click="e1 = 3, drawCircle()" v-bind:disabled="isPaymentMethodSelected">NEXT
                    <v-icon right>mdi-arrow-right</v-icon> 
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" v-if="bMasterCard == true" justify="center" align="center">
            <img :src = "svg_card4"/>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="3">
        <div class="maintitle"> Review Order </div>
        <v-card style = "margin-bottom: 50px">
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <v-row>
                  <v-col cols="12" sm="1" justtify = "right" align = "right">
                    <v-avatar color="#3CB1E5" size="6">
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" sm="11">
                    <p class = "text-review"> Your free trial starts today and ends on August 11, 2020. </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="1" justtify = "right" align = "right">
                    <v-avatar color="#3CB1E5" size="6">
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" sm="11">
                    <p class = "text-review"> Beginning August 11, 2020, your payment method will be charged {{type}}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="1" justtify = "right" align = "right">
                    <v-avatar color="#3CB1E5" size="6">
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" sm="11">
                    <p class = "text-review">The plan will automatically renew each month until cancalled. To avoid charges fot the next month, cancel before the renewal date.</p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="6" justify = "center" align = "center">
                <img :src = "svg_review"/>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-row no-gutters>
          <v-col cols = "12" sm = "6">
            <v-row no-gutters justify="start"> 
              <v-btn class="button" tile outlined color="grey darken-2" @click="e1 = 2, drawCircle()">
                <v-icon left >mdi-arrow-left</v-icon> BACK
              </v-btn>
            </v-row>
          </v-col>
          <v-col cols = "12" sm = "6">
            <v-row justify="end">
              <v-dialog v-model="dialog" persistent width="400px" height="226px">
                <template v-slot:activator="{ on }">
                  <v-btn @click = "onPlaceOrder()" class = "button" style = "margin-right: 12px" color="info" v-on="on">PLACE ORDER </v-btn>
                </template>
                <v-card>
                  <v-card-text style = "padding: 20px 60px 20px 50px">
                    <p class = "text-dialog">{{alert}}</p>
                  </v-card-text>
                  <v-btn class = "text-okay" width = "100%" color = "info" @click="onOKAY()" height="70px">OKAY</v-btn>
                </v-card>
              </v-dialog>
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
import axios from 'axios';

export default{
  data: () => ({
    svg_card1 :require('./assets/svg/card1.svg'),
    svg_card2 :require('./assets/svg/card2.svg'),
    svg_card3 :require('./assets/svg/card3.svg'),
    svg_card4 :require('./assets/svg/card4.svg'),
    svg_paypal :require('./assets/svg/paypal.svg'),
    svg_review :require('./assets/svg/review.svg'),
    curDate: "",
    expireDate: "",
    dialog: false,
    months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    years:['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984'],
    countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
    bMasterCard: false,
    bPayPal: false,
    e1: 1,
    laste1: 1,
    isCycleSelected:true,
    isPaymentMethodSelected: true,
    type:"",
    FirstName:"",
    LastName:"",
    CreditNumberCard:"",
    month:"",
    year:"",
    SecurityCode:"",
    country:"",
    PostalCode:"",
    subscriptionPlan: [],
    awsApiUrl: "http://ec2-18-223-131-167.us-east-2.compute.amazonaws.com:8080/api/billing",
    alert: ""
  }),
  methods:{
    onMonth(sub)
      {
        this.isCycleSelected = false;
        this.type = sub.id;
        var notes = document.getElementsByClassName("payment-note");
        notes[sub.id - 1].style.display = "none";
        notes[2 - sub.id].style.display = "block";
      },
    onMasterCard(){
      this.isPaymentMethodSelected = false;
      this.bMasterCard = true;
      this.bPayPal = false;
    },
    onPayPal(){
      this.isPaymentMethodSelected = false;
      this.bPayPal = true;
      this.bMasterCard = false;
    },
    onPlaceOrder(){
      console.log("onPlaceOrder");

      var formData = new FormData();
      formData.append('payment_method', "VIS");
      formData.append('first_name', this.FirstName);
      formData.append('last_name', this.LastName);
      formData.append('card_number', this.CreditNumberCard);
      formData.append('expiration_month',  this.month);
      formData.append('expiration_year', this.year);
      formData.append('cvv', "090");
      formData.append('country', this.country);
      formData.append('postal_code', this.postal_code);
      formData.append('account', 1);
      
      axios.post('http://ec2-18-223-131-167.us-east-2.compute.amazonaws.com:8080/api/billing/payment/', {
          payment_method: '' + "VIS",
          first_name: '' + this.FirstName,
          last_name: '' + this.LastName,
          card_number: '' + this.CreditNumberCard,
          expiration_month: '' + this.month,
          expiration_year: '' + this.year,
          cvv: '' + "090",
          country: '' + this.country,
          postal_code: '' + this.postal_code,
          account: '' + 1
        })
        .then((response) => {
          this.alert = response.data.detail;
        })
        .catch((e) => {
          console.log(e);
          this.alert = "Oops";
        });
    },
    drawCircle(){
      var steps = document.getElementsByClassName("v-stepper__step__step");

      var curSel = steps[this.laste1 - 1];
      curSel.style.width = '5px';
      curSel.style.height = '5px';
      curSel.style.margin = "8px 0px 10px 0px";
      curSel.innerHTML = "";
      
      curSel = steps[this.e1 - 1];
      curSel.style.width = '46px';
      curSel.style.height = '46px';
      curSel.innerHTML = "•";
      curSel.style.margin = "-11px 0px 10px 0px";
      this.laste1 = this.e1;
    },
    onOKAY(){
      this.e1 = 1;
      this.drawCircle();
      this.dialog = false;
    }
    },
    mounted(){
      this.drawCircle();
      axios.get(this.awsApiUrl + "/package").then((response) => {
        this.subscriptionPlan = response.data.reverse();
      });
    },
created()
    {
        this.curDate = new Date().toDateString();
        this.expireDate = new Date();
        this.expireDate.setDate(this.expireDate.getDate() + 30);
        this.expireDate = this.expireDate.toDateString();
    }
}
</script>
