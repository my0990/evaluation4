export const getRandomEval = (e, text, btnToggle) => {
    let result = [];
    console.log('1: ', text);
    console.log('2: ', btnToggle);
    for (let i = 0; i < text.length; i++) {
        if(btnToggle[i] === false){
            continue;
        } else {
            let randomNum = Math.floor(Math.random()*text[i].length);
            result.push(text[i][randomNum].replace(/\r/g, ""))
        }
    }
    
    return result;
}

