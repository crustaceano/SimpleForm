document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event){
    event.preventDefault();
    var element = document.getElementById('main-form');
    var name = element.name.value;
    var pass = element.pass.value;
    var repass = element.repass.value;
    var state = element.state.value;
    var fail = "";
    if(name == "" || pass == "" || state == ""){
        fail = "Заполните все поля";
    } else if(name.lenght <= 1 || name.lenght > 50){
        fail = "Введите корректное имя";
    } else if(pass != repass){
        fail = "Пароли должы совпадать";
    } else if(pass.split("&").lenght > 1){
        fail = "Некоректный пароль";
    }
    if(fail != ""){
        document.getElementById('error').innerHTML = fail;
    } else{
        alert("Все данные корректно заполнены");
    }
}
