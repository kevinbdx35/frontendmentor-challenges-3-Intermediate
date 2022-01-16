"use strict";

const API_KEY = "at_zhqO2qfcpDZ6sZtUVgaxoYSaT79T8"
const SEARCH_API = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

const form = document.getElementById('form')
const search = document.getElementById('search')



// //GET initial location
// getLocation(SEARCH_API+'&ipAddress=8.8.8.8');

async function getLocation(url){
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.location)

}

form.addEventListener('submit', function(e){
  e.preventDefault()

  const searchIp = search.value

  if(searchIp && searchIp !== ''){
    getLocation(SEARCH_API + '&ipAddress=' + searchIp)
  
  
  search.value = ''
  
  }else{
    window.location.reload()
  }


})