

const search = document.querySelector("#search")
const btnS = document.querySelector("#btnS")
const day = document.querySelector("#day")
const monthF = document.querySelector("#month")
const cityS = document.querySelector("#cityS")
const temp = document.querySelector("#temp-c")
const imgF = document.querySelector("#imgF")
const textD = document.querySelector("#textD")
const wind_mph = document.querySelector("#wind_mph")
const wind_dir = document.querySelector("#wind_dir")
const humidity = document.querySelector("#humidity")



const dayS = document.querySelector("#dayS")
const imgS = document.querySelector("#imgS")
const maxtemp_cS = document.querySelector("#maxtemp_cS")
const avgtemp_cS = document.querySelector("#avgtemp_cS")
const textDS = document.querySelector("#textDS")

const dayT = document.querySelector("#dayT")
const imgT = document.querySelector("#imgT")
const maxtemp_cT = document.querySelector("#maxtemp_cT")
const avgtemp_cT = document.querySelector("#avgtemp_cT")
const textDT = document.querySelector("#textDT")




async function gitCity(x) {
    let cityHttp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=24d7fc80fc3846d28e2161926210205&q=${x}&days=4`)
    let city = await cityHttp.json()

    getData(city)
}

const carntDate = _ => {

    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let dS;
    d.getDay() == 6 ? dS = 0 : dS = d.getDay() + 1
    d.getDay() == 5 ? dT = 1 : dT = d.getDay() + 2
    day.textContent = weekday[d.getDay()]
    dayS.textContent = weekday[dS]
    dayT.textContent = weekday[dT]


    var M = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    monthF.textContent = `${M.getDate()}${month[M.getMonth()]}`;
}

const getData = (city) => {
    let caurantCity = city.location.name
    let caurantTemp = city.current.temp_c
    let caurantUrlF = city.current.condition.icon
    let caurantText = city.current.condition.text
    let caurantWindKM = city.current.wind_mph
    let caurantWindDr = city.current.wind_dir
    let caurantHumidity = city.current.humidity

    let caurantimgS = city.forecast.forecastday[1].day.condition.icon
    let maxtemp_cSF = city.forecast.forecastday[1].day.maxtemp_c
    let avgtemp_cSF = city.forecast.forecastday[1].day.avgtemp_c
    let textDSF = city.forecast.forecastday[1].day.condition.text

    let caurantimgT = city.forecast.forecastday[2].day.condition.icon
    let maxtemp_cTF = city.forecast.forecastday[2].day.maxtemp_c
    let avgtemp_cTF = city.forecast.forecastday[2].day.avgtemp_c
    let textDTF = city.forecast.forecastday[2].day.condition.text

    display(caurantCity, caurantTemp, caurantUrlF, caurantText, caurantWindKM, caurantWindDr, caurantHumidity,
        caurantimgS, maxtemp_cSF, avgtemp_cSF, textDSF,
        caurantimgT, maxtemp_cTF, avgtemp_cTF, textDTF)
}

const display = (city, temp_c, url, state, windKM, windDr, humidityD, urlS, maxtemp_cSF, avgtemp_cSF, textDSF, urlT, maxtemp_cTF, avgtemp_cTF, textDTF) => {
    cityS.textContent = city
    temp.textContent = `${temp_c}\xB0C`
    imgF.setAttribute("src", `${url}`)
    textD.textContent = state
    wind_mph.textContent = windKM
    wind_dir.textContent = windDr
    humidity.textContent = humidityD

    imgS.setAttribute("src", urlS)
    maxtemp_cS.textContent = `${maxtemp_cSF}\xB0C`
    avgtemp_cS.textContent = `${avgtemp_cSF}\xB0C`
    textDS.textContent = textDSF

    imgT.setAttribute("src", urlT)
    maxtemp_cT.textContent = `${maxtemp_cTF}\xB0C`
    avgtemp_cT.textContent = `${avgtemp_cTF}\xB0C`
    textDT.textContent = textDTF
}

const find = _ => {
    const x = search.value
    x == "" ? gitCity("cairo") : gitCity(x)
    carntDate()
}
find()



btnS.addEventListener("click", find)
search.addEventListener("keyup", find)
