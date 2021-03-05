//bringing html tags over to js; these are all classes in my html
let zipcode = document.querySelector(".zipcode");
let city = document.querySelector(".city");
let kelvin = document.querySelector(".kelvin");
let celcius = document.querySelector(".celcius");
let fahrenheit = document.querySelector(".fahrenheit");
let conditions = document.querySelector(".conditions");
let icon = document.querySelector(".icon");
// let sponge = document.querySelector(".sponge");


function retrieval() {
    const appID = "284ef8b222342e68981f6ce3ab5b3de2"
    //backticks allow you to use ${} without concatenating using + signs. 
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${document.getElementById("zipcode").value},us&appid=${appID}`)
    //API call, then use .then .then .catch promise format to initiate different steps
    //this says -- then, you take the response from the API call...
        .then(function(res) {
            //...and return it in a JSON format so that it can be easily used below.
            return res.json()
        }).then(function(data) {
            //I kept the console log in here in case I need to look at the API data in devtools.
            console.log(data)
            {
                //this says, take the json data and apply variables to that data. The format on the left
                //is pulling the specific call response. 
                let cityValue = data['name'];
                let kelvinValue = data['main']['temp'];
                let conditionsValue = data['weather'][0]['main'];
                //for the image source for the icon:
                let picture = data['weather'][0]['icon']
                //below, this is telling the html to display the data that was assigned to variables above. 
                city.innerHTML = cityValue;
                kelvin.innerHTML = kelvinValue + " K";
                conditions.innerHTML = conditionsValue;
                //this provides the inner html for celcius and fahrenheit -- they are based off the kelvin value
                celcius.innerHTML = (Math.round(kelvinValue - 273.15)) + " °C";
                fahrenheit.innerHTML = (Math.round(1.8*(kelvinValue - 273) + 32)) + " °F";
                //this is the image source for the icon 
                icon.src = "http://openweathermap.org/img/wn/" + picture + "@4x.png"
                // if (kelvinValue < 300) {
                //     sponge.src = "../img/sponge.gif"
            //     }
            };
            //this is the "else" of this promises format -- if nothing above works, return an error. 
            //This error message gives you the specific error to be helpful, rather than giving a generic error message
        }) .catch(function(err) {
             alert(err)
})
}


