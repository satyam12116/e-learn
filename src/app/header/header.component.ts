import { Component, OnInit } from '@angular/core';
import { ContactusComponent } from '../contactus/contactus.component';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openContactus(){
    const dialogRef=this.dialog.open(ContactusComponent,{
      width:'500px'
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('dialog closed', result)
    });
  }

}
