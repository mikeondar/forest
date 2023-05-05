function calcTip(bill) {
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    return tip;
}

bills = [125, 555, 44]
tips = []
total = []
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i])
}

console.log(bills)
console.log(tips)
console.log(total)
