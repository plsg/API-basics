// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        console.log(this.responseURL);
        data.forEach(movie => {
            // Log each movie's title
            console.log(movie.title);

            // Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // Create a p and set the text content to the film's description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`; //End with an ellipses

            // Append the cards to the container element
            container.appendChild(card);

            // Each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        console.log('error');
    }
}

// Send request 
request.send();

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);



// ¯\_(ツ)_/¯ fetch didn't work with ghibli ¯\_(ツ)_/¯

// **** NASA's api.data.gov using API key ****
// const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=zLXx8dF0HBgIWlQ2txyzDODYZmjJ4PLAnMpkK0N5';

// fetch(apiURL)
//     .then(res => res.json())
//     .then(function (data) {
//         console.log(JSON.stringify(data));
//     })
//     .catch(function (error) {
//         console.log(JSON.stringify(error));
//     });
