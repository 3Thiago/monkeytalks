import Vue from 'vue'
import Vuex from 'vuex'

/** Emojis  **/
import hng from '../assets/img/hng.svg'
import smug from '../assets/img/smug.svg'
import bebe from '../assets/img/bebe.png'
import raugh from '../assets/img/raugh.png'
import coolstorybro from '../assets/img/coolstorybro.png'
let hngHtml = `<img src=${hng} width=50 height=50 />`
let smugHtml = `<img src=${smug} width=50 height=50 />`
let bebeHtml = `<img src=${bebe} width=50 height=50 />`
let raughHtml = `<img src=${raugh} width=50 height=50 />`
let coolstorybroHtml = `<img src=${coolstorybro} width=50 height=50 />`
let emojiMap = {":hng": hng, ":smg": smug, ":beb": bebe, ":rau": raugh, ":csb": coolstorybro}
/** END Emojis */

Vue.use(Vuex)

export const store = new Vuex.Store({
     state: {
          showFaucet : false,
          showSendCard : false,
          fee : null,
          premiumFee: null,
          mtAccount: null,
          mobileDetect: null,
          emojiMap: emojiMap
     },
     mutations: {
          changeFaucet(state, showFaucet) {
               state.showFaucet = showFaucet
          },
          changeSendCard(state, showSendCard) {
               state.showSendCard = showSendCard
          },
          changeFee(state, fee) {
               state.fee = fee
          },
          changePremiumFee(state, premiumFee) {
               state.premiumFee = premiumFee
          },
          changeMtAccount(state, mtAccount) {
               state.mtAccount = mtAccount
          },
          changeMobileDetect(state, mobileDetect) {
               state.mobileDetect = mobileDetect
          }
     },
     getters: {
          showFaucet: state => state.showFaucet,
          showSendCard: state => state.showSendCard,
          showFee: state => state.fee,
          showPremiumFee: state => state.premiumFee,
          showMtAccount: state => state.mtAccount,
          showMobileDetect: state => state.mobileDetect,
          showEmojiMap: state => state.emojiMap
     }
})