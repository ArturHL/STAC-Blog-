function userValidator (storage) {
  if (storage.getItem('userLogged') === '0') {
    return false
  } else {
    return true
  }
}
function emptyValidator (inputClass) {
  if (document.querySelector(`.${inputClass}`).value === null || document.querySelector(`.${inputClass}`).value === '') {
    console.log(false)
    return false
  } else {
    console.log(true)
    return true
  }
}

export { userValidator, emptyValidator }
