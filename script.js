// Switch Statements

let category = 'beyaz eşya';

switch (category) {
    case 'telefon':
        console.log('telefon kategorisi.');
        break;

    case 'bilgisayar':
        console.log('bilgisayar kategorisi.');
        break;
    default:
        console.log('kategori bulunamadı.');
}

let day;
// console.log(new Date().getDay());

switch (new Date().getDay()) {
    case 0:
        day = 'Pazar';
        break;

    case 1:
        day = 'Pazartesi';
        break;
    case 2:
        day = 'Salı';
        break;
    case 3:
        day = 'Çarşamba';
        break;
    case 4:
        day = 'Perşembe';
        break;
    case 5:
        day = 'Cuma';
        break;
    case 6:
        day = 'Cumartesi';
        break;
}
console.log(`Bugün günlerden ${day}`);


switch (new Date().getDay() + 5) {
    case 0:
    case 6:
        day = 'Hafta Sonu';
        break;


    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = 'Hafta İçi';
        break;
}

console.log(`Bugün  ${day}`);