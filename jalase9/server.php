<?php

class Student{
  public $age;
  public $firstname;
  public $lastname ;
  public $cars;
  public $education;

  
  private $privateProperty;

  function f(){
    $this->privateProperty = "gholamalitabar";
  }
}

$s = new Student();

$s->age =1;
$s->firstname = "reza";
$s->lastname = "gholamalitabar";
$s->cars = ["bmw", "sapia"];
$s->education = "bachelor";

$output = json_encode($s);

print($output);

// $s->privateProperty = "go"; \\ error