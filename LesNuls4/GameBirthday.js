var numberSeven = Number(prompt('Entrez le nombre 7'));
var birthDay = Number(prompt('Entrez le jour de votre naissance'));
var calculation = numberSeven * birthDay;
calculation = calculation - 1;
calculation = calculation * 13;
var birthMonth = Number(prompt('Entrez le mois de votre naissance'));
calculation = calculation + birthMonth;
calculation = calculation + 3;
calculation = calculation * 11;
calculation = calculation - birthDay;
calculation = calculation - birthMonth;
calculation = calculation / 10;
calculation = calculation + 11;
calculation = calculation / 100;

document.write("Voici votre date d'anniversaire : " + calculation);
