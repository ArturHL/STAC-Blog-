function userValidator (storage) {
  if (storage.getItem('userID') === '0') {
    return false
  } else {
    return true
  }
}
export default userValidator
