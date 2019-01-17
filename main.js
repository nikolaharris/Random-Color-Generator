function setColor() {
    randomColorOne = "#000000".replace(/0/g,function(){
        return (~~(Math.random()*16)).toString(16);}); 
        console.log(randomColorOne)

    randomColorTwo = "#000000".replace(/0/g,function(){
        return (~~(Math.random()*16)).toString(16);}); 
        console.log(randomColorTwo)

    document.getElementById('container').style.backgroundImage = '-webkit-linear-gradient( left,'+ randomColorOne +' , '+ randomColorTwo +')';
    document.getElementById('colorOne').innerHTML = randomColorOne;
    document.getElementById('colorTwo').innerHTML = randomColorTwo;
}