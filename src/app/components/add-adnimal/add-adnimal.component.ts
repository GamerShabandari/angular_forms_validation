import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-adnimal',
  templateUrl: './add-adnimal.component.html',
  styleUrls: ['./add-adnimal.component.scss']
})
export class AddAdnimalComponent implements OnInit {


  /////////////////////////////////////////////

  name = new FormControl("");

  type = new FormControl("");

  description = new FormControl("");


  /////////////////////////////////////////////

  createUserForm = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    age: new FormControl(0),
    zip: new FormControl("")

  });

  /////////////////////////////////////////////

  playerForm = this.formbuilder.group({

    firstname: ["", [Validators.required, Validators.minLength(3)]],
    lastname: ["", [Validators.required, Validators.minLength(3)]],
    position: ["", Validators.required],
    shirtNumber: [0, [Validators.required, Validators.min(1), Validators.max(99)]],
    nickNames: this.formbuilder.array([this.formbuilder.control("")])

  })


  get nickNames():FormArray{
    return this.playerForm.get("nickNames") as FormArray;
  }

  get playerName(){

    return this.playerForm.get("firstname")

  }

  addNickname(){
    this.nickNames.push(this.formbuilder.control(""));
  }


  /////////////////////////////////////////////


  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  changeName() {
    this.name.setValue("Gamer Is Best")
  }

  submit() {
    console.log(this.createUserForm.value);

  }

  savePlayer() {
    console.log(this.playerForm.value);

  }

}
