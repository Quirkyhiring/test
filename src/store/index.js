import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        postData({commit}, param){
            console.log("postData");
              return new Promise((resolve, reject) => {
              Vue.prototype
                .$http({ url: 'http://ec2-18-223-131-167.us-east-2.compute.amazonaws.com:8080/api/billing/payment/', method: 'POST', data: param })
                .then(resp => {
                  resolve(resp)
                })
                .catch(err => {
                  if (err.response.status === 401) {
                    commit('err postPayment')
                  }
                  reject(err)
                })
            })
        }
    }
})