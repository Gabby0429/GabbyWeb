function performOperations() {
    var n = document.getElementById("inputNumber").value;

    
    var factorial = 1;
    var i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }


    var sum = 0;
    i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);

    
    var average = 0;
    for (i = 1; i <= n; i++) {
        average += i;
    }
    average /= n;

    
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p>${n}! (Factorial): ${factorial}</p>
        <p>Sum of the first ${n} numbers: ${sum}</p>
        <p>Average of the first ${n} numbers: ${average}</p>
    `;
}