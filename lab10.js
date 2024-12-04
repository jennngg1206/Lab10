function changeMessage(){
    const output = document.getElementById('output');
    output.innerText = 'Hello, ${Dylan}!';
}



function changeMessage(){
    const message= document.getElementById('message');
    message.innerText= 'Hello, World';
}




function addNumbers(){
    const num1=parseFloat(document.getElementById ('num1').value)
    const num2=parseFloat(document.getElementById ('num2').value)
    const result=document.getElementById('result');
    result.innerText='Sum: ${num1 + num2}';
}



function updateTitle(){
    const inputTitle= document.getElementById('inputTitle').value;
    const title= document.getElementById('title');
    title.innerText= inputTitle;
}



function concatenateStrings(){
    const string1= document.getElementById('string1').value;
    const string2= document.getElementById('combinedText');
    const combinedText = document.getElementById('combinedText');
    combinedText.innertext=string1 + ' ' + string2;
}



document.getElementById('changeBgBtn'). addEventListener('click'), function() {
    colorBox.style.backgroundColor = 'blue';
}