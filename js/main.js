//connecting html and js
let button = document.querySelector(".btn");
let zipcode = document.querySelector(".zipcode");
let city = document.querySelector(".city");
let kelvin = document.querySelector(".kelvin");
let celcius = document.querySelector(".celcius");
let fahrenheit = document.querySelector(".fahrenheit");
let conditions = document.querySelector(".conditions");
let icon = document.querySelector(".icon");

// function retrieval() {
//     let zip = document.getElementsByClassName("zipcode").value
//     const appID = "284ef8b222342e68981f6ce3ab5b3de2"
//     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${appID}`)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             console.log(data)
//         })
//         .catch(function(err) {
//             alert(err)
//         })
// };

function retrieval() {
    // console.log(document.getElementById("zipcode").value)
    const appID = "284ef8b222342e68981f6ce3ab5b3de2"
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${document.getElementById("zipcode").value},us&appid=${appID}`)
        .then(function(res) {
            return res.json()
        }).then(function(data) {
            console.log(data)
            {
                let cityValue = data['name'];
                let kelvinValue = data['main']['temp'];
                let conditionsValue = data['weather'][0]['main'];
                let picture = data.weather[0].icon

                city.innerHTML = cityValue;
                kelvin.innerHTML = kelvinValue + " K";
                conditions.innerHTML = conditionsValue;
                celcius.innerHTML = (Math.round(kelvinValue - 273.15)) + " °C";
                fahrenheit.innerHTML = (Math.round(1.8*(kelvinValue - 273) + 32)) + " °F";
                icon.src = "http://openweathermap.org/img/wn/" + picture + "@4x.png"
            };
        }) .catch(function(err) {
             alert(err)
})
}
