




const api_key="5274bad3"

// "https://www.omdbapi.com/?t=${}name&apikey=${api_key}"



async function getData(){
    
    let movie= document.getElementById("search").value;

    let url = `https://www.omdbapi.com/?t=${movie}&apikey=${api_key}`

    // console.log(url);




    let res = await fetch(url);

    let data  = await res.json();

    append(data);

    console.log(data);
}

function append(data){



    let container = document.getElementById("container");

    let img = document.createElement("img");
    img.src=`${data.Poster}`;

    let p1 = document.createElement("p");
    p1.innerText=`Movie Name: ${data.Title}`;

    let p2 = document.createElement("p");
    p2.innerText=`Actor Name: ${data.Actors}`

    let p3 = document.createElement("p");
    p3.innerText=`Release Date:  ${data.Released}`

    let p4 = document.createElement("p");
    p4.innerText=`Genre: ${data.Genre}`


    container.append(img, p2, p1, p3, p4);
}












































// const api_key ="5be51de9d8777359c7f419a2a2797e70";

// //"https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";


// async function getData() {

//     let city = document.getElementById("city").value;

//     let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
 
// //    console.log(url);


// let res= await fetch(url);

// let data = await res.json();

// append(data);

// console.log(data)


// }

// function append(data){

//      let container = document.getElementById("container");

//      let h3 = document.createElement("h3");
//      h3.innerText=`City Name: ${data.name}`;

//      let p1 = document.createElement("p");
//      p1.innerText=`Current temp: ${data.main.temp}`;  
    
      
//      let p2 = document.createElement("p");
//      p2.innerText=`Max temp: ${data.main.temp_max}`;


//      let p3 = document.createElement("p");
//      p3.innerText=`Max temp: ${data.main.temp_min}`;


//      let p4 = document.createElement("p");
//      p4.innerText=`Cloud: ${data.clouds.all}`;


//      let p5 = document.createElement("p");
//      p5.innerText=`Sunrise: ${data.sys.sunrise}`;

//      let p6 = document.createElement("p");
//      p6.innerText=`Sunset: ${data.sys.sunset}`;

//      let p7 = document.createElement("p");
//      p7.innerText=`Wind Speed: ${data.wind.speed}`;
    
//       container.append(h3, p1, p2, p3, p4, p5, p6, p7);   
      
//       let iframe = document.getElementById("gmap_canvas");
//       iframe.src= src=`https://maps.google.com/maps?q=${data.name}%20&t=&z=13&ie=UTF8&iwloc=&output=embed`;

      
//       }
//       function getLocatWeather(){

//         navigator.geolocation.getCurrentPosition(success);

//         function success(position){
//             const latitude = position.coords.latitude;

//             const longitude = position.coords.longitude;

//             getData(latitude, longitude);

//             console.log(latitude);
//             console.log(longitude);

//         }

//     }

//     getLocatWeather();