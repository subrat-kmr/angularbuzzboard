import { Component, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  registerForm: FormGroup;
  submitted = false;
  users:any[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.users = [
      {
        "firstName": "fwf",
        "lastName": "wefewf",
        "email": "fewf@ewfew.wefw",
        "phone": 13213213,
        "company": "4214124",
        "gender": "male",
        "dob": "2021-08-20",
        "pwd": "4214",
        "cpwd": "4214",
        "password": "",
        "confirmPassword": ""
    },
    {
      "firstName": "Test",
      "lastName": "test1",
      "email": "test@ewfew.wefw",
      "phone": 13213213,
      "company": "4214124",
      "gender": "male",
      "dob": "2021-08-20",
      "pwd": "4214",
      "cpwd": "4214",
      "password": "",
      "confirmPassword": ""
  }
    ]
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required , Validators.minLength(10)],
      company: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      pwd: ['', Validators.required],
      cpwd: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.users.push(this.registerForm.value);
    this.registerForm.reset();
    // alert(
    //   'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    // );
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  onEdit(user){
    // this.registerForm.value = user;
    this.registerForm = this.formBuilder.group({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      company: user.company,
      gender: user.gender,
      cpwd: user.cpwd,
      pwd: user.pwd,
      dob: user.dob
      
    })
  }

  onDelete(user){
    this.users.filter((item,index)=>{
      if(item.firstName = user.firstName){
        this.users.splice(index, 1);
      }
    })
  }


  
}
