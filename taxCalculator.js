const calcaulateTax = (regimeType = 'old', totalIncome, totalInvestment = 0) => {

    // generate tax related input data
    const taxInput = (regime) => {
        if(regime === 'old') {
            return {
                taxableIncome : totalIncome,
                firstSlab:5,
                secondSlab:10,
                thirdSlab: 15,
                fourthSlab: 30,
                fifthSlab: 30,
                sixthSlab: 30
            }
        } else {
            return {
                taxableIncome: totalIncome - totalInvestment,
                firstSlab:5,
                secondSlab:20,
                thirdSlab: 20,
                fourthSlab: 20,
                fifthSlab: 25,
                sixthSlab: 30
            }
        }
    }

    // get tax data
    const taxData = taxInput(regimeType);

    if(taxData.taxableIncome <= 250000) return "No Tax for you !!!";

    // formula to calculate interest
    const calSlabTax = (slabAmout, interest) => {
        return (slabAmout * interest) / 100
    }

    // fixed tax slot tax amount
    const firstSlotTax = calSlabTax(250000, taxData.firstSlab);
    const secondSlotTax = calSlabTax(250000, taxData.secondSlab);
    const thirdSlotTax = calSlabTax(250000, taxData.thirdSlab);
    const fourthSlotTax = calSlabTax(250000, taxData.fourthSlab);
    const fifthSlotTax = calSlabTax(250000, taxData.fifthSlab);

    // if the taxable amount in in between 2.5 lakh to 5 lakh
    if(taxData.taxableIncome > 250000 && taxData.taxableIncome <= 500000) {
        const variableAmount = taxData.taxableIncome - 250000;
        const variableAmtTax = calSlabTax(variableAmount, taxData.firstSlab );
        return `NO TAX!!! Total tax ${variableAmtTax}/RS rebate under 87/A ${variableAmtTax}/RS.`;
    }

    // if the taxable amount in in between 5 lakh to 7.5 lakh
    if(taxData.taxableIncome > 500000 && taxData.taxableIncome <= 750000) {
        const variableAmount = taxData.taxableIncome - 500000;
        const variableAmtTax = calSlabTax(variableAmount, taxData.secondSlab);
        const totalTax = firstSlotTax + variableAmtTax;
        return `Total tax is ${totalTax}/RS`;
    }

    // if the taxable amount in in between 7.5 lakh to 10 lakh
    if(taxData.taxableIncome > 750000 && taxData.taxableIncome <= 1000000) {
        const variableAmount = taxData.taxableIncome - 750000;
        const variableAmtTax = calSlabTax(variableAmount, taxData.thirdSlab);
        const totalTax = firstSlotTax + secondSlotTax + variableAmtTax;
        return `Total tax is ${totalTax}/RS`;
    }

    // if the taxable amount in in between 10 lakh to 12.5 lakh 
    if(taxData.taxableIncome > 1000000 && taxData.taxableIncome <= 1250000) {
        const variableAmount = taxData.taxableIncome - 1000000;
        const variableAmtTax = calSlabTax(variableAmount, taxData.fourthSlab);
        const totalTax = firstSlotTax + secondSlotTax + thirdSlotTax + variableAmtTax;
        return `Total tax is ${totalTax}/RS`;
    }

    // if the taxable amount in in between 12.5 lakh to 15 lakh 
    if(taxData.taxableIncome > 1250000 && taxData.taxableIncome <= 1500000) {
        const variableAmount = taxData.taxableIncome - 1250000;
        const variableAmtTax = calSlabTax(variableAmount, taxData.fifthSlab);
        const totalTax = firstSlotTax + secondSlotTax + thirdSlotTax + fourthSlotTax + variableAmtTax;
        return `Total tax is ${totalTax}/RS`;
    }

    // if the taxable amount is above 15 
    if(taxData.taxableIncome > 1500000) {
        const variableAmount = taxData.taxableIncome - 1500000;
        const variableAmtTax = calSlabTax(variableAmount, taxData.sixthSlab);
        const totalTax = firstSlotTax + secondSlotTax + thirdSlotTax + fourthSlotTax + fifthSlotTax + variableAmtTax;
        return `Total tax is ${totalTax}/RS`;
    }
}

console.log(calcaulateTax('old', 50000000000))