import { Component, OnInit } from '@angular/core';
import { GameDto } from '../models/gameDto';
import { HttpServiceService } from '../http-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPageComponent } from '../add-page/add-page.component';
import { EditPageComponent } from '../edit-page/edit-page.component';

@Component({
  selector: 'app-pc-page',
  templateUrl: './pc-page.component.html',
  styleUrls: ['./pc-page.component.scss']
})
export class PcPageComponent implements OnInit {
  displayedColumns: string[] = ['title', 'rating', 'console', 'quantity', 'description', 'edit', 'delete']
  dataSource: GameDto[] = null;
  allGames: GameDto[];

  constructor(
    public service: HttpServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.service.getAllGames().subscribe(result => {
      this.dataSource = this.service.filterGames(result, "PC");
    });
  }

  openAdd() : void{
    this.service.createNewGame("PC");
    const dialogRef = this.dialog.open(AddPageComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  openEdit(game: GameDto) : void{
    this.service.newGameItem = game;
    const dialogRef = this.dialog.open(EditPageComponent, {
      width: '50%',
    })

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  deleteItem(game: GameDto) : void{
    this.service.newGameItem = game;
    this.service.deleteGame().subscribe(() => {
      this.ngOnInit();
    });
  }

  clearAll() : void{
    this.service.deleteAllGames();
    this.ngOnInit();
  }

}
