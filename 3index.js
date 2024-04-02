function calculateNetSalary() {
    var basicSalary = parseFloat(document.getElementById("basic_salary").value);
    var benefits = parseFloat(document.getElementById("benefits").value);
    var PAYE_THRESHOLD = 28800;  // Monthly
    var NHIF_THRESHOLD = 6000;  // Monthly
    var NHIF_RATES = [150, 300, 400, 500, 600, 750, 850, 900, 1000];
    var NHIF_CONTRIBUTIONS = [150, 300, 400, 500, 600, 750, 850, 900, 1000, 1100];
    var NSSF_EMPLOYEE_RATE = 0.06;
    var NSSF_EMPLOYER_RATE = 0.06;

    // Calculate the gross salary
    var grossSalary = basicSalary + benefits;

    // Calculate the NHIF deductions
    var nhifDeduction = 0;
    for (var i = 0; i < NHIF_RATES.length; i++) {
        if (grossSalary <= NHIF_THRESHOLD) {
            nhifDeduction = NHIF_CONTRIBUTIONS[i];
            break;
        } else if (grossSalary > NHIF_THRESHOLD && i == NHIF_RATES.length - 1) {
            nhifDeduction = NHIF_CONTRIBUTIONS[i];
            break;
        }
    }

    // Calculate the NSSF deductions
    var nssfDeductionEmployee = basicSalary * NSSF_EMPLOYEE_RATE;
    var nssfDeductionEmployer = basicSalary * NSSF_EMPLOYER_RATE;

    // Calculate the taxable income
    var taxableIncome = grossSalary - nhifDeduction - nssfDeductionEmployee;

    // Calculate the PAYE (Tax)
    var paye = (taxableIncome <= PAYE_THRESHOLD) ? 0 : (taxableIncome - PAYE_THRESHOLD) * 0.25;

    // Calculate net salary
    var netSalary = grossSalary - nhifDeduction - nssfDeductionEmployee - paye;

    // Display the results
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Gross Salary: " + grossSalary.toFixed(2) + "<br>";
    resultDiv.innerHTML += "NHIF Deductions: " + nhifDeduction.toFixed(2) + "<br>";
    resultDiv.innerHTML += "NSSF Deductions (Employee): " + nssfDeductionEmployee.toFixed(2) + "<br>";
    resultDiv.innerHTML += "NSSF Deductions (Employer): " + nssfDeductionEmployer.toFixed(2) + "<br>";
    resultDiv.innerHTML += "PAYE (Tax): " + paye.toFixed(2) + "<br>";
    resultDiv.innerHTML += "Net Salary: " + netSalary.toFixed(2);
}