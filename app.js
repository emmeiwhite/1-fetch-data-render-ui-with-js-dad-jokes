const url = ' https://icanhazdadjoke.com/asgasgsa'

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

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
