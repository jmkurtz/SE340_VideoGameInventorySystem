import { Component, OnInit } from '@angular/core';
import { GameDto } from '../models/gameDto';
import { MatDialogRef } from '@angular/material/dialog';
import { AddPageComponent } from '../add-page/add-page.component';
import { HttpServiceService } from '../http-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  editedGameItem: GameDto;

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
    this.service.editGame().subscribe(res => {
      this.dialogRef.close();
    });
  }
}
