console.log('Siva')

const selecting = document.getElementById('my-select')


selecting.addEventListener('change', (e) =>{

    console.log(e.target.value)
    document.getElementById('output').innerHTML=`sie haben ${e.target.value} ausgewählt`

})