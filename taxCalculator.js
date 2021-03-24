const calcaulateTax = (totalIncome, totalInvestment, regime = 'old') => {
    const taxInput = (regime) => {
        if(regime === 'old') {
            return {
                taxableIncome: totalIncome - totalInvestment,
                firstSlab:5,
                secondSlab:20,
                thirdSlab: 20,
                fourthSlab: 30
            }
        } else {
            return {
                taxableIncome : totalIncome,
                firstSlab:5,
                secondSlab:10,
                thirdSlab: 15,
                fourthSlab: 20,
                fifthSlab: 25,
                sixthSlab: 30
            }
        }
    }

    const taxData = taxInput(regime);

    if(taxData.taxableIncome <= 250000) return "No Tax for you !!!";

    const calSlabTax = (slabAmout, interest) => {
        return (slabAmout * interest) / 100
    }

    if(taxData.taxableIncome > 250000 && taxData.taxableIncome <= 500000) {
        const firstSlabAmount = taxData.taxableIncome - 250000;
        const firstSlabTax = calSlabTax(firstSlabAmount, taxData.firstSlab );
        return `NO TAX!!! Total tax ${firstSlabTax}/RS rebate under 87/A ${firstSlabTax}/RS.`;
    }

    if(taxData.taxableIncome > 500000 && taxData.taxableIncome <= 750000) {
        const firstSlabTax = calSlabTax(250000, taxData.firstSlab );
        const secondSlabAmout = taxData.taxableIncome - 500000;
        const secondSlabTax = calSlabTax(secondSlabAmout, taxData.secondSlab);
        return `Total tax ${firstSlabTax + secondSlabTax}/RS`;
    }

    if(taxData.taxableIncome > 750000 && taxData.taxableIncome <= 1000000) {
        const firstSlabTax = calSlabTax(250000, taxData.firstSlab );
        const secondSlabTax = calSlabTax(250000, taxData.secondSlab );
        const thirdSlabAmout = taxData.taxableIncome - 750000;
        const thirdSlabTax = calSlabTax(thirdSlabAmout, taxData.thirdSlab);
        return `Total tax ${firstSlabTax + secondSlabTax + thirdSlabTax}/RS`;
    }
}

console.log(calcaulateTax(550001, 50000))