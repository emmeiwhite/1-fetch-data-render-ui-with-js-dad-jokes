const url = " https://icanhazdadjoke.com/asgasgsa";

const button = document.querySelector(".btn");
const result = document.querySelector(".result");

const fetchDadJoke = async () => {
  result.textContent = "Loading ...";

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "applications/json",
        "User-Agent": "Learning Application",
      },
    });

    console.log(response);
    if (!response.ok) {
      console.log("There was an Error ...");
      throw new Error("There was an Error ...");
    }
    const data = await response.json();
    console.log(data);
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "There was an error ...";
  }
};

// We also want to show a dynamic Joke as soon as the application loads
fetchDadJoke();
button.addEventListener("click", () => {
  fetchDadJoke();
});
