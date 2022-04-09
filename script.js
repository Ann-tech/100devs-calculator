window.addEventListener('DOMContentLoaded', function(e) {
    let buttonContainer = document.querySelector('#button-container');

    buttonContainer.addEventListener('click', function(e) {
        let target = e.target;
        calculator.parse(target.value);
    });

    let input = document.querySelector('input');

    let calculator = {
        currentValue: "",
    
        parse(value) {
          if (value == '=') {
            input.value =  this.calculateResult(this.currentValue);
            this.currentValue = input.value;
          }
          else {
            this.currentValue += value;
            input.value = this.currentValue;
          }
          
          
        },

        calculateResult(expression) {
            return eval(expression);  
        }
    }
});

