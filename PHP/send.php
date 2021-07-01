<?php

$qone = $_POST['qone'];
$qtwo = $_POST['qtwo'];

$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];


$name = trim($name); //удаление пробелов
$surname = trim($surname);
$phone = trim($phone);



if (mail("testredlinemail@mail.ru","Письмо с сайта","Имя: ".$name." фамилия: ".$surname." телефон: ".$phone." Ответ на Сколько будет 2+2 "."(".$qone.")"." Сколько глаз у здорового человека "."(".$qtwo.")" )){
    
    echo('Письмо успешно отправлено!');
    echo($name);
    echo($message);
  exit("<meta http-equiv='refresh' content='0; url= /index.html'>");
}
else{
    echo('Есть ошибки!');
}



?>