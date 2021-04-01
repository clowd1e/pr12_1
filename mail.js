    function myFunc(str) {
        let stf = str.split(' ');
        let result = [];
        let word = [];

    for (let i = 0; i <= stf.length - 1; i++) {
        word[i] = stf[i].slice(1, stf[i].length);
        if (stf[i] === stf[i].toUpperCase()) {
            result[i] = stf[i].toLowerCase(); 
        } else if (stf[i] === stf[i][0].toLowerCase() + word[i].toUpperCase()) {
        result[i] = stf[i][0].toUpperCase() + word[i].toLowerCase();
        } else {
        result[i] = stf[i];
        }
        return result.join(' ');  
    }
    }
    console.log(myFunc('aBSTRACTION'))
    console.log(myFunc('wHY dO wE NEED cAPS lOCK'))
    console.log(myFunc('Lock'))
    console.log(myFunc('FuNkY iS nOt CaPs!'))
    console.log(myFunc('cAPS'))