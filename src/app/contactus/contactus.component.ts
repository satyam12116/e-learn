import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private dialogRef:MatDialogRef<ContactusComponent>) { }

  ngOnInit(): void {
  }
  contactForm=this.formBuilder.group({
    name:[''],
    email:[''],
    mob:[''],
    msg:['']
  });
  save(){
    console.log(this.contactForm.value,'formData');
    this.dialogRef.close();
  }
}
