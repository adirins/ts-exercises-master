/**
 * You're given a string of words. 
 * You need to find the word "Nemo", and return a string like so: "I found Nemo at X!", X is the index of the word.
 * If you can't find Nemo, return "I can't find Nemo :(".
 */

function findingNemo(input: string) { 
    // (input.indexOf("Nemo") < 0) ? (`I can't find Nemo :(`) ; (`I found Nemo at ${input.split(` `).indexOf("Nemo")}!`);


    if (input.indexOf("Nemo") < 0){
        return (`I can't find Nemo :(`)
    }else{
        return (`I found Nemo at ${input.split(` `).indexOf("Nemo")}!`)
    }
}

export { findingNemo };