const findHero = document.querySelector('form');
const dynamicResult = document.querySelector('.invisible');


const updatingUI = async data => {
    const resultingData = await data;
    dynamicResult.childNodes[3].setAttribute('src', data.data.results[0].thumbnail.path + '.' +  data.data.results[0].thumbnail.extension ); 
    
    if(resultingData.data.results[0].description === ''){
        dynamicResult.childNodes[5].innerText = 'CLASSIFIED'
    } else{
        dynamicResult.childNodes[5].innerHTML = 'Description : <br>' +  resultingData.data.results[0].description;
    }
    
    if(dynamicResult.classList.contains('invisible')){
        dynamicResult.classList.remove('invisible');
    }

   console.log(data);
}


findHero.addEventListener('submit', e => {
    //preventing default and resetting form
    e.preventDefault();
    

    //getting the input value
    const heroValue = findHero.hero.value.trim();
    findHero.reset();
    


    //calling the Marvel API
    getHero(heroValue)
    .then(data => updatingUI(data))
    .catch(err => {
        console.log('There was an error', err);
        if(!dynamicResult.classList.contains('invisible')){
            dynamicResult.classList.add('invisible');
        }
    }
    )
});