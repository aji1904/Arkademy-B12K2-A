const username_valid = username => (
    /[a-z]{5,9}/.test(username)
)
const password_valid = password => (
    /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{8,})/.test(password)
)

console.log(username_valid('cod3r'))
console.log(username_valid('siska'))

console.log(password_valid('p4s$gW'))
console.log(password_valid('codeYourFuture!123'))