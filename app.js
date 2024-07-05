function numberToText() {
    let units = ["", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"];
    let teens = ["on", "on bir", "on iki", "on üç", "on dörd", "on beş", "on altı", "on yeddi", "on səkkiz", "on doqquz"];
    let tens = ["", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"];

    let input = prompt("1 ilə 99 arasında rəqəm daxil edin:");
    let num = parseInt(input);

    if (isNaN(num) || num < 1 || num > 99) {
        console.log("Düzgün bir rəqəm daxil edin.");
        return;
    }

    let text = "";

    if (num < 10) {
        text = units[num];
    } else if (num < 20) {
        text = teens[num - 10];
    } else {
        let unitPart = num % 10;
        let tenPart = Math.floor(num / 10);
        if (unitPart === 0) {
            text = tens[tenPart];
        } else {
            text = tens[tenPart] + " " + units[unitPart];
        }
    }

    console.log(text);
}

numberToText();
