var letter = prompt('Enter a letter : ')
letter = letter.toLowerCase()   // for covert

switch (letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Vowel');
        break;
    
    default:
        console.log('Consonant')
}