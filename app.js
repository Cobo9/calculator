window.onload = function (){

    const buttons = document.querySelectorAll(".calculator__button")
    const input = document.querySelector(".calculator__input")


    buttons.forEach(button => {
        button.addEventListener("click", buttonClickHandler)
    })

    function buttonClickHandler (e) {
        let value = e.target.innerHTML;
            switch(value){
                case "c": clearInput();
                    break;
                case "=": evaluateExpresssion();
                    break;
                default:
                    console.log(value)
                    input.value += value;
            }
    }

    function clearInput () {
        input.value = "";
    }

    function evaluateExpresssion (){
       let result = math.evaluate(input.value);
       input.value = result;
    }

}