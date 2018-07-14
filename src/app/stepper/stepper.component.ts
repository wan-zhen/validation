import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})

export class StepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  constructor() {}

  ngOnInit() {
    this.firstFormGroup =  new FormGroup({
      accountCtrl: new FormControl('', [Validators.required, Validators.email]),
      passwordCtrl: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPasswordCtrl: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.secondFormGroup =  new FormGroup({
      nameCtrl: new FormControl(''),
      phoneCtrl: new FormControl('', [Validators.required])
    });
    this.thirdFormGroup =  new FormGroup({
      fileCtrl: new FormControl('', [Validators.required])
    });
    this.fourFormGroup =  new FormGroup({
      cardnameCtrl: new FormControl('', [Validators.required])
    });
  }
}
