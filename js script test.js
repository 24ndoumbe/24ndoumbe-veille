document.writeln('<form id="myForm">');
document.writeln('<div>');
document.writeln('<label for="myField">Champ&nbsp;:</label>');
document.writeln('<input type="text" id="myField" size="60">');
document.writeln('</div>');
document.writeln('</form>');

document.getElementById('myField').value = "Vous avez réussi votre exercice";

function validateForm() {
    if (document.getElementById('myField').value == '') {
        document.getElementById('myFieldError').innerHTML = 'le champ ne peut etre vide';
        return false;
    } else {
        document.getElementById('myFieldError').innerHTML =
    }
}