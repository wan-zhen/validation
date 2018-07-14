import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})

export class StepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup =  new FormGroup({
      accountCtrl: new FormControl('', [Validators.required, Validators.email]),
      passwordCtrl: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPasswordCtrl: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.secondFormGroup =  new FormGroup({
      nameCtrl: new FormControl(''),
      phoneCtrl: new FormControl('', [Validators.required]),
    });
  }

}
