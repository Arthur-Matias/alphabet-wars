const handleButtonClick = () => {
    let allFighters = document.querySelector('#fighters').value;
    let resultPlace = document.querySelector('.result');
    let resultPhrase = alphabetWar(allFighters.toLowerCase());
    resultPlace.innerHTML =`<p>${resultPhrase}</p>`;
    let winnersTable = document.querySelector('#winnersTable');

    document.querySelector('#fighters').addEventListener("keypress", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("myBtn").click();
        }
    });
}

const handleKeyPress= () => {

} 

const alphabetWar = (fighters) =>{
    
    let fightersArr = fighters.split('');

    const letters = {

        leftSideStrenght: 0,
        rightSideStrenght: 0,
        leftSideCompetitors: [],
        rightSideCompetitors: [],
      
        leftSideTeam: ['w','p','b','s'],
        rightSideTeam: ['m','q','d','z'],
        letterStrenght: [4, 3, 2, 1],
    }

    for ( let i = 0; i < fightersArr.length; i++ ) {
        const element = fightersArr[i];
        if ( letters.rightSideTeam.indexOf(element) !== -1 ) {
            letters.rightSideCompetitors.push(element);
            letters.rightSideStrenght += letters.letterStrenght[letters.rightSideTeam.indexOf(element)];
            console.log('right competitors: ' + letters.rightSideCompetitors + ' index: ' + letters.rightSideTeam.indexOf(element) + ' strenght: ' + letters.rightSideStrenght)
        } else if ( letters.leftSideTeam.indexOf(element) !== -1 ) {
            letters.leftSideCompetitors.push(element);
            letters.leftSideStrenght += letters.letterStrenght[letters.leftSideTeam.indexOf(element)];
            console.log('left competitors: ' + letters.leftSideCompetitors + ' index: ' + letters.leftSideTeam.indexOf(element) + ' strenght: ' + letters.leftSideStrenght);
        }else{
            console.log('none: ' + element)
        }
    }
    if(letters.leftSideStrenght > letters.rightSideStrenght){
        return "Left side wins!";
    }else if(letters.leftSideStrenght < letters.rightSideStrenght){
        return "Right side wins!";
    }else{
        return "Let's fight again!";
    }
}