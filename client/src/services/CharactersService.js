import Api from '@/services/Api'

export default {
  getAllCharacters () {
    return Api().get('characters')
  },
  post (character) {
    return Api().post('characters', character)
  }
}
