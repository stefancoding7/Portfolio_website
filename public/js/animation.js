const profilePic = document.querySelector('.thumbnail-box > img');
const skills = document.querySelectorAll('.skills');
const terminal = document.querySelector('.terminal')

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



// progress bar for about page
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
            
        }, random(40));
    }
    
    
}


function terminalEffect() {
    let typewriter = new Typewriter(terminal, {
        loop: true
    });
    
    typewriter.typeString('EXPRESS')
        .pauseFor(1500)
        .deleteAll()
        .typeString('LARAVEL')
        .pauseFor(2500)
        .deleteChars(7)
        .typeString('VUE.JS')
        .pauseFor(2000)
        .deleteChars(7)
        .typeString('NODE.JS')
        .pauseFor(2500)
        .deleteChars(7)
        .typeString('REACT')
        .pauseFor(2400)
        .start();
}


shadowLate(random(10000));

if(skills) {
    progressBar();
}


if(terminal) {
    terminalEffect();
}
