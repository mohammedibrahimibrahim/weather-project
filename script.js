const API_KEY = `578f6dd773fe76ee138b80c66b14c55c`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const searchBtn = document.querySelector("form button");
   
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

form .addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
form .addEventListener("click", ()=>{
    checkWeather(form.value);
})







   window.addEventListener('load', () => {
    
    gsap.from("main", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out"
    });

    
    gsap.from("#search", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
    gsap.from(".row button", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5, 
        ease: "power2.out"
    });

   
    gsap.from("#float", {
        rotation: 360,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1
    });
});