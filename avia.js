const country = document.getElementById('countries');
const cities = document.getElementById('cities');
let ro =  document.getElementById('ro');
let r1 = document.getElementById('r1')
const countries = {
	'Россия': ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Адлер', 'Петропаловск-Камчатский'],
	'Соединённые Штаты': ['Нью-Йорк', 'Калифорния', 'Сан-Франциско', 'Сан-Фьерро', 'Лос-Сантос'],
};

for (let key in countries) {
  country.innerHTML += `<option>${key}</option>`
}

for(let i = 0; i < countries[country.value].length; i++) {
  cities.innerHTML += `<option>${countries[country.value][i]}</option>`
}

country.addEventListener ('change', ()=> { 
  let arr = countries[country.value]
  cities.innerHTML = ''
 for (let i = 0; i < arr.length; i++) {
   cities.innerHTML += `<option>${arr[i]}</option>`
 } 
 ro.innerText = country.value
})

cities.addEventListener ('change', () => {
  r1.innerText = ''
  r1.innerText += ', ' + cities.value
}
)

 
