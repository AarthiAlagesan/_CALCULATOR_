let outputscreen = document.getelementbyId("outputscreen");
function display(num){
    outputscreen.value += num;
}
function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}
function clear(){
    outputscreen.value =" ";
}
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}
