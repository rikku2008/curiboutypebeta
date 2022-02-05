'use strict';

{
    function setWord() {
        no = Math.floor(Math.random() * words.length)
        word = words[no];
        target.textContent = word;
        loc = 0;
        img.src = imgs[no]

    }

    function check(e) {
        if (e.data[loc] === word[loc]) {
            loc++;
            target.textContent = '_'.repeat(loc) + word.substring(loc);
        }
    }

    let word;
    let loc = 0;
    let score = 0;
    let starttime;
    let play = false;
    let no;

    const target = document.getElementById('target');
    const type = document.getElementById('type');
    const img = document.getElementById('img');

    document.addEventListener('click', () =>{
        if (play === true) {
            return;
        }

        setWord();
        play = true;
        starttime = Date.now();
    })

    type.addEventListener('input', e => {
        if(play === true){
            check(e);

            check(e);
            console.log(loc);
            if(loc >= word.length){
                if (score===10){
                    play = false;
                    const elapsedtime = ((Date.now() - starttime) / 1000).toFixed(2)
                    target.textContent="finish!"
                    const result = document.getElementById('result');
                    result.textContent= `finish! ${elapsedtime} seconds!`
                }else{
                    setWord();
                    type.value = "";
                    type.value = "";
                    type.value = "";
                    score++;
                }
            }
        }
    });
}