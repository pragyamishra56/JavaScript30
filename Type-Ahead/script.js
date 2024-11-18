const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []
fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    cities.push(...data)
  })

const input = document.querySelector('input.search')
input.addEventListener('input', displaySuggestions)

function displaySuggestions(e) {
  const userInput = e.target.value
  const suggestionList = document.querySelector('.suggestions')

  if (userInput.length === 0) {
    suggestionList.innerHTML = '<li>filter for a City or a State</li>'
    return console.log('input string is empty ... suggestions are initialized')
  }
  
  const citySuggestions = returnSuggestions(userInput)
  suggestionList.innerHTML = returnListHtml(userInput, citySuggestions)
}

function returnSuggestions(userInput) {
  const regex = new RegExp(userInput, 'gi')
  const result = cities.filter((city) => {
    return city.city.match(regex) || city.state.match(regex)
  })
  return result
}

function returnListHtml(userInput, citySuggestions) {
  const regex = new RegExp(userInput, 'gi')
  const listHtml = citySuggestions
    .map(city => {
      const cityName = city.city.replace(regex, `<span class='hl'>${userInput}</span>`)
      const stateName = city.state.replace(regex, `<span class='hl'>${userInput}</span>`)
      return `<li>
      <span class='place'>${cityName}, ${stateName}</span>
      <span class='population'>${numberWithCommas(city.population)}</span>
      </li>`
    })
    .join('')
  return listHtml
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}