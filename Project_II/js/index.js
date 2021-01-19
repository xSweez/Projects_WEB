const Triangle = function(counter,limit){
    const string = "#";
    if(isNaN(counter) || isNaN(limit)){
        console.log("Coloque somente números!")
    }else{
        while(counter < limit){
            counter = counter+1;
            let input = string.length*counter;
            console.log(string.repeat(input));
        }
    }
}

Triangle(10,20);
