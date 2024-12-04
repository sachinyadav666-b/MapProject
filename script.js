let language = document.getElementById("language")
let name_c = document.getElementById("name")
let Capital = document.getElementById("Capital")
let Population = document.getElementById("Population")
let flag = document.getElementById("flag")
let Area = document.getElementById("Area")
let map = document.getElementById("map")
let Continents = document.getElementById("Continents")
let CoatofArms = document.getElementById("CoatofArms")

let close_c = document.getElementById("close")
let d_container = document.getElementById("d_container")



function apifun(country_name){
    console.log(country_name);
    let api = `https://restcountries.com/v3.1/name/${country_name}`

    fetch(api).then((response)=>{
        return response.json()
    }).then((country_data)=>{
        console.log(country_data);
        flag.src = country_data[0].flags.svg
        Area.innerHTML = country_data[0].area + "sq.km"
        Capital.innerHTML = country_data[0].capital[0]
        CoatofArms.src = country_data[0].coatOfArms.svg
        Continents.innerHTML = country_data[0].continents[0]
        name_c.innerHTML = country_data[0].name.common
        map.href = country_data[0].maps.googleMaps
        Population.innerHTML = country_data[0].population
        let lng = country_data[0].languages
        let newl = Object.values(lng)

        language.innerHTML = newl
    })
}


let all_country = document.querySelectorAll("path")

all_country.forEach((country)=>{
    country.addEventListener("click",()=>{
        console.log(country.getAttribute("title"));
        d_container.style.display = 'flex'
        animboxin()
        apifun(country.getAttribute("title"))
        
    })
   
})

function animboxOut(){
    gsap.to(".box", {
        duration: 1,
        scale: 0.1,
        y: 40,
        autoAlpha:0,
        ease: "power1.inOut",
        stagger: {
          grid: [7,15],
          from: "edges",
          amount: 1.5
        },onComplete:()=>{
            d_container.style.display = 'none'
        }
      });
}

close_c.addEventListener('click', ()=>{
    animboxOut()
})

function animboxin(){
    gsap.fromTo(".box",{
        scale:0.1,
        y:40,
        autoAlpha: 0
        },
        
        {
        duration: 1,
        scale: 1,
        y: 40,
        autoAlpha:1,
        ease: "power1.inOut",
        stagger: {
          grid: [7,15],
          from: "edges",
          amount: 1.5
        }
      });
}