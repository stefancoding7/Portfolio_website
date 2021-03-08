const profilePic = document.querySelector('.thumbnail-box > img');
const skills = document.querySelectorAll('.skills');
//console.log(skills.getAttribute('data-skills'));

// get radnom number
function random(number) {
    const random = Math.floor(Math.random() * number);
    return random;
}

// set boxshadow in setTimeout 
function shadowLate(time) {
    setTimeout(function(){
        profilePic.style.boxShadow = '11px 12px 0px -3px #ffffff';
    }, time)
};




function progressBar() {
    for(let i = 0; skills.length > i; i++){
        let maxValue = skills[i].getAttribute('data-skills');
        
        let value = 0;
        const interval = setInterval(function(){
            value++;
            if(value == maxValue){
                clearInterval(interval);
            } else {
                skills[i].style.background = `linear-gradient(90deg, #000000 ${value}%, #FFFF ${value}%)`;
            }
            
        }, random(2));
    }
    
    
}


shadowLate(random(15000));
progressBar();