import { Component } from '@angular/core';
import * as pizzas from '../../pizza.json';
import * as components from '../../components.json';
import { MdSnackBar } from '@angular/material';

const model = JSON.parse(localStorage.getItem("model")) || {};

if(!localStorage.getItem("pizzas")){
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
}
if(!localStorage.getItem("components")) {
  localStorage.setItem("components", JSON.stringify(components));
}

function countPizza(pizza, size) {
  Object.keys(model).forEach(function (key) {
    if(model[key] && pizza.contains[size][key]){
      model[key] = model[key] - pizza.contains[size][key];
    }
  });
  this.snackBar.open("Добавлена пицца " + pizza.name, "ОК", {duration: "1500"});
}

function reset(model) {
  Object.keys(model).forEach(function (key) {
    model[key] = 0;
  });
}

function save(model) {
  localStorage.setItem("model", JSON.stringify(model));
  this.snackBar.open("Остаток сохранен", "ОК", {duration: "1500"});
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public snackBar: MdSnackBar){}

  pizzas = JSON.parse(localStorage.getItem("pizzas"));
  components = JSON.parse(localStorage.getItem("components"));
  model = model;
  countPizza = countPizza;
  save = save;
  reset = reset;
}
