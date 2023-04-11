const first_input = document.querySelector("#first-input");
const operator_input = document.querySelector("#operator-input");
const second_input = document.querySelector("#second_input");

const result_text = document.getElementById("result-text");

// Buttons constant
const calc_button = document.querySelector("#calculate-button");

calc_button.addEventListener("click", () => {

    const first_input_value = Number(document.querySelector("#first-input").value);
    const operator_input_value = document.querySelector("#operator-input").value;
    const second_input_value = Number(document.querySelector("#second-input").value);

    let summary;

    if (operator_input_value == "Addition(+)") {

        summary = first_input_value + second_input_value;
        result_text.innerText = `Result: ${summary}`;
    }
    
    else if (operator_input_value == "Subtraction(-)") {

        summary = first_input_value - second_input_value;
        result_text.innerText = `Result: ${summary}`;
    }

    else if (operator_input_value == "Division(/)") {
        
        summary = first_input_value / second_input_value;
        result_text.innerText = `Result: ${summary}`;
    }

    else if (operator_input_value == "Multiplication(*)") {

        summary = first_input_value * second_input_value;
        result_text.innerText = `Result: ${summary}`;
    }

    else {

        result_text.innerText = `Result: Not a valid operator.`
    }
})