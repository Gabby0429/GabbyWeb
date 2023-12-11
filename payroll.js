let payrollList = [];

function addEmployee() {
    const empName = document.getElementById('empName').value;
    const daysWorked = parseInt(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;

    payrollList.push({
        name: empName,
        daysWorked,
        dailyRate,
        grossPay,
        deductionAmount,
        netPay,
    });

    displayPayroll();
}

function deleteEmployee() {
    const deleteLineNumber = parseInt(document.getElementById('deleteLineNumber').value);

    if (deleteLineNumber >= 1 && deleteLineNumber <= payrollList.length) {
        payrollList.splice(deleteLineNumber - 1, 1);
        displayPayroll();
    } else {
        alert("Invalid line number. Please enter a valid line number.");
    }
}

function displayPayroll() {
    const table = document.getElementById('payrollTable');
    table.innerHTML = "<tr><th>No.</th><th>Employee Name</th><th>Days Worked</th><th>Daily Rate</th><th>Gross Pay</th><th>Deduction Amount</th><th>Net Pay</th></tr>";

    payrollList.forEach((employee, index) => {
        const { name, daysWorked, dailyRate, grossPay, deductionAmount, netPay } = employee;
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);

        cell1.innerHTML = index + 1;
        cell2.innerHTML = name;
        cell3.innerHTML = daysWorked;
        cell4.innerHTML = dailyRate;
        cell5.innerHTML = grossPay.toFixed(2);
        cell6.innerHTML = deductionAmount.toFixed(2);
        cell7.innerHTML = netPay.toFixed(2);
    });
}

function goToHomePage() {
    window.location.href = "index.html"; 
}