var run = true;
var happynumber = parseInt(prompt('Enter a number'));
if(isNaN(happynumber)) {
    run = false;
    alert('sorry NaN reload page to try again');
}
var happyNumberTest = happynumber;
var split = [];
var square = [];
var sum = 0;

    while(run) {
    split = (happyNumberTest + '').split('');
    for(i = 0; i < split.length; i++){
        split.splice([i], 1, Math.pow(split[i], 2));
    }

    for(i = 0; i < split.length; i++){
            sum += split[i];
    }
    if(sum === 1){
        document.write('happy!');
        break;
    }
    if(sum < 7 && sum !== 1){
        document.write('unhappy!')
        break;
    }
    happyNumberTest = sum;
    console.log(sum);
    sum = 0;
}








    











