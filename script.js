function calculeMoyenne(liste)
{
    let res = 0;

    for (let i = 0; liste[i] != null; i++)
        res += liste[i] - '0';
    return (res / liste.length)
}

function calculeMinimum(liste)
{
    let res = liste[0] - '0';

    for (let i = 0; liste[i] != null; i++)
        if ((liste[i] - '0') < res)
            res = liste[i] - '0';
    return (res);

}

function calculeMaximum(liste)
{
    let res = liste[0] - '0';

    for (let i = 0; liste[i] != null; i++)
        if ((liste[i] - '0') > res)
            res = liste[i] - '0';
    return (res);
}

function calculeMediane(liste)
{
    let size = liste.length;
    let mid_even = liste[Math.round(size / 2)] - '0';
    let mid = liste[Math.round(size / 2 - 1)] - '0';

    if (liste.length % 2 === 0)
        return ((mid + mid_even) / 2);
    else
        return (mid);
}

function error_check(string)
{
    let err_check = 0;

    for (let i = 0; string[i] != null; i++) {
        if (string[i] != ',' && string[i] != ' ' && (string[i] < '0' || string[i] > '9'))
            err_check++;
        if (string[i] === ',' && string[i + 1] != ' ')
            err_check++;
        if (string[i] === ' ' && (string[i + 1] < '0' || string[i + 1] > '9'))
            err_check++;
    }
    return (err_check);
}

let user_input = prompt('Donnez une liste de nombres séparé par une virgule.');
let empty_list = "JE T'AI DEMANDÉ UNE LISTEEEEEEE";
let bad_list = "LISTE DE NOMBRE SEPARÉ PAR UNE VIRGULE C'EST PAS COMPLIQUÉ QUAND MÊME";
let err_check = error_check(user_input);
if (err_check != 0)
    document.getElementById("text").innerHTML = bad_list;
else if (user_input.length === 0)
    document.getElementById("text").innerHTML = empty_list;
else {
    let liste = user_input.split(', ');
    let message = "Voici les résultats des statistiques d'après votre liste de nombre !!\n";
    let calc_moy = `Calcul de la moyenne des nombres: ${calculeMoyenne(liste)}. `;
    let calc_min = `Le plus petit nombre de la liste: ${calculeMinimum(liste)}. `;
    let calc_max = `Le plus grand nombre de la liste: ${calculeMaximum(liste)}. `;
    let calc_med = `Calcul de la médianne des nombres: ${calculeMediane(liste)}.`;
    document.getElementById("text").innerHTML = message;
    document.getElementById("result").innerHTML = calc_moy + calc_min + calc_max + calc_med;
}
