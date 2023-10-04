function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if (bill <= 0 | bill == '') {
        alert ("Digite um valor válido para o total da conta");
        return;
    }

    if (serviceQual == 0) {
        alert ("Selecione a qualidade do serviço");
        return;
    }

    if (numOfPeople == '' | numOfPeople < 1) {
        alert ("Quantidade de pessoas inválido");
        return;
    } else if (numOfPeople == 1){
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "inline";
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "inline-block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip)