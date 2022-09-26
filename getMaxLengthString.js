const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {

  if(arrayOfString === null || arrayOfString === undefined){
    return undefined
  }
  if(arrayOfString != 0){
    return arrayOfString.slice(-2)
    }


  }


console.log(getMaxLengthString(null))
console.log(getMaxLengthString(undefined))
console.log(getMaxLengthString(['hi']))
console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']))
console.log(getMaxLengthString(['hello', 'hi', 'hey']))

module.exports = getMaxLengthString
