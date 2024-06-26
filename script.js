class Calculator {
     constructor() {
          this.previousOperandTextElement = previousOperandTextElement
          this.currentOperandTextElement = currentOperandTextElement
          this.clear()
     }
     clear() {
          this.currentOperand = ""
          this.previousOperand = ""
          this.operation = undefined

     }

     delete() {
          this.currentOperand=this.currentOperand.toString().slice(0,-1)

     }
     appendNumber(num) {
          if (num === '.' && this.currentOperand.includes('.')) return
          this.currentOperand = this.currentOperand.toString() + num.toString();


     }
     chooseOperation(operation) {
          if (this.currentOperand==='') return
          if(this.previousOperand!=='') {
               this.compute()
          }
          this.operation=operation
          this.previousOperand=this.currentOperand
          this.currentOperand=""

     }
     compute() {

          let r
          const p=parseFloat(this.previousOperand)
          const c=parseFloat(this.currentOperand)
          if(isNaN(p) || isNaN(c)) return
          switch (this.operation) {
               case '+':
                 r = p + c
                 break
               case '-':
                 r = p - c
                 break
               case '*':
                 r = p * c
                 break
               case '÷':
                 r = p / c
                 break
               default:
                 return
             }
             this.currentOperand = r
             this.previousOperand = ""
             this.operation = undefined
             

     }
     updateDisplay() {
          this.currentOperandTextElement.innerText = this.currentOperand;
          if (this.operation != null) {
              this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
          } else {
              this.previousOperandTextElement.innerText = '';
          }
      }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
     button.addEventListener('click', () => {
          calculator.appendNumber(button.innerText)
          calculator.updateDisplay()
     })
})

operationButtons.forEach(button => {
     button.addEventListener('click', () => {
          calculator.chooseOperation(button.innerText)
          calculator.updateDisplay()
     })
})


equalsButton.addEventListener('click', button => {
     calculator.compute()
     calculator.updateDisplay()
   })

allClearButton.addEventListener('click', button => {
     calculator.clear()
     calculator.updateDisplay()
   })

 deleteButton.addEventListener('click', button => {
     calculator.delete()
     calculator.updateDisplay()
   })