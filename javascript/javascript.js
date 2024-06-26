document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('button').onclick=count;})

    let counter = 0;

    function count (){
        counter++;//counter = counter + 1
        document.querySelector('h1').innerHTML=counter;

        if (counter %10 === 0){
            alert(`Count of clicks is now ${counter}`)
        }
    }


    document.addEventListener('DOMContentLoaded', function(){

        document.querySelector('form').onsubmit = function(){

        const name = document.querySelector(`#name`).value;
        const age = document.querySelector(`#age`).value;

        if (age < 0){
            alert(`ERROR! Please enter a valid age`)
        }
        else if (age > 0 && age < 12){
            alert(`Hello ${name} you're part of Generation Alpha`)
        }
        else if (age > 11 && age < 28){
            alert(`Hello ${name} you're part of Generation Z`)
        }
        else if (age > 27 && age < 44){
            alert(`Hello ${name} you're a Millennial`)
        }
        else if (age > 43 && age < 60){
            alert(`Hello ${name} you're part of Generation X`)
        }
        else if (age > 59 && age < 79){
            alert(`Hello ${name} you're a Baby Boomer`)
        }
        else if (age > 78 && age < 100){
            alert(`Hello ${name} you're part of The Silent Generation`)
        }
        else if (age > 99 && age < 124){
            alert(`Hello ${name} you're part of The Greatest Generation`)
        }
        else{
            alert(`CONGRATULATIONS! ${name} you're a legend, please enlighten us about the secrets of life`)
        }
        
        }
       
    })