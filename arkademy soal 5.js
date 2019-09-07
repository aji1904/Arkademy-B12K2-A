const vowel_count = str => {
  var matches = str.match(/[aeiou]/ig);
  return matches != null ? matches.length : 0
}

console.log(vowel_count('programmer'))
console.log(vowel_count('hmm..'))