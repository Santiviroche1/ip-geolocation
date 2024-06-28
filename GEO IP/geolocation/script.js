const OPTIONS = {

  method: 'GET',
  headers: {
    'x-rapidapi-key': 'a7d88e98d6msh05140f3dda8eaaep1b66bejsna3e370654db0',
    'x-rapidapi-host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com'
  }
};


const fetchIpInfo = ip => {
  return fetch(`https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/${ip}`, OPTIONS)
    .then(res =>res.json())
    .catch(err => console.error(err))
}
  
const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('results')

$form.addEventListener('submit', async (event) =>{
event.preventDefault()
const {value} = $input
if (!value) return


$submit.setAttribute('disabled', '')
$submit.setAttribute('aria-busy','true')


const ipInfo = await fetchIpInfo(value)

if(ipInfo){
  $results.innerHTML = JSON.stringify(ipInfo, null, 2)
}

$submit.removeAttribute('disabled')
$submit.removeAttribute('aria-busy')

})