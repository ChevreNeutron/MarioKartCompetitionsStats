import Api from '@/services/Api'

export default {
  getAllCharacters () {
    return Api().get('characters')
  }
}
