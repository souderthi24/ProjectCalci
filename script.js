let string = "";

let btns = document.getElementsByClassName('button');

Array.from(btns).forEach((button) => {
    button.addEventListener('click', (e) => {

        const theMethod = e.target.innerHTML;
        const value = document.querySelector("input").value;
        switch (theMethod) {
            case "DEL":
                string = value.substring(0, value.length - 1);
                break;
            case "=":
                string = eval(string);
                break;
            case 'C':
                string = "";
                break;
            default:
                console.log(e.target);
                string = string + e.target.innerHTML;
                break;


        }
        document.querySelector('input').value = string;
    })
})

function redirect() {
    window.open("https://officesolutionpro.com/different-types-of-calculators/");
}
