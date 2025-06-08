const button = document.querySelectorAll('button');
const inputField = document.getElementById('text-input');


console.log(button)

for(let i=0; i<button.length; i++){
  button[i].addEventListener('click', (event)=>{
    console.log(event.target.innerHTML)
    let inputText= '';

    switch(event.target.innerHTML){
      case 'AC':
        break;

      case 'DEL':
        inputText = inputField.value.slice(0, -1);
        break;
      
      case '=':
        try{
          inputText = eval(inputField.value);
        }
        catch(e){
          inputText = 'Invalid Operation'
        }
        break;
      
      default:
        inputText = `${inputField.value}${event.target.innerHTML}`
    }

    inputField.value=inputText;
  })
}
