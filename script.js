const key="6b9d9bae701c721b6b9c218b1ad18640"
let currentWeather= document.querySelector(".current_weather")
function save(){
    var location=document.getElementById("city").value
   console.log(location)
   
   fetch("https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid="+key).then(response =>{
    return(response.json())
   })
   .then(data=>
    {
        console.log(data);
        let city=data.name;
        let lat= data.coord.lat;
        let long=data.coord.lon;
        let wind_speed= data.wind.speed;
        let temp= data.main.temp;

        let div=document.createElement("div")
        let h2el=document.createElement("h2")
        h2el.innerHTML="City Name -"+city
        let wind_pargraph=document.createElement("p")
        wind_pargraph.innerHTML="Wind Spead-"+wind_speed
        let temp_pargraph=document.createElement("p")
        temp_pargraph.innerHTML="temperature is-"+temp
        div.append(h2el,wind_pargraph,temp_pargraph)
        console.log(div)
currentWeather.append(div)
        
        fetch("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&appid="+key).then(response =>
        {
         return(response.json())
        })
         .then(data=>{
            console.log(data)

            for (let index = 0; index < data.list.length; index+=8) {
               console.log(data.list[index])
                
            }
        })
    })
}



// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
// base
// : 
// "stations"
// clouds
// : 
// {all: 0}
// cod
// : 
// 200
// coord
// : 
// {lon: -96.6989, lat: 33.0198}
// dt
// : 
// 1664765369
// id
// : 
// 4719457
// main
// : 
// {temp: 292.38, feels_like: 291.64, temp_min: 289.16, temp_max: 295.34, pressure: 1020, …}
// name
// : 
// "Plano"
// sys
// : 
// {type: 2, id: 2016912, country: 'US', sunrise: 1664713294, sunset: 1664755828}
// timezone
// : 
// -18000
// visibility
// : 
// 10000
// weather
// : 
// [{…}]
// wind
// : 
// deg
// : 
// 144
// gust
// : 
// 1.34
// speed
// : 
// 0.45
// [[Prototype]]
// : 
// Object
// [[Prototype]]
// : 
// Object