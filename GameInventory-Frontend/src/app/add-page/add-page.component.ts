import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GameDto } from '../models/gameDto';
import { HttpServiceService } from '../http-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  newGame: GameDto;

  constructor(
    public dialogRef: MatDialogRef<AddPageComponent>,
    public service: HttpServiceService
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm){
    this.service.addGame().subscribe(res => {
      this.dialogRef.close();
    });
  }

}
