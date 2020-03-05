import Api from '@/services/Api'

export default {
  index () {
    return Api().get('games')
  },
  post (game) {
    return Api().post('games', game)
  }
}
