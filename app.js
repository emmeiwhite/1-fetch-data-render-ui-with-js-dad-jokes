const url = ' https://icanhazdadjoke.com/'

// Step-1: Select the elements
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', () => {
  console.log('Result is')
  console.log(result)

  fetchDadJokes()
})

const fetchDadJokes = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app'
      }
    })

    if (!response.ok) {
      throw new Error('Error: Could not fetch data!')
    }

    const data = await response.json()

    result.innerText = data.joke
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
