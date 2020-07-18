import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

export interface GeoCommentElement {
  geoCommId: string;
  usernameGC: string;
  geostopName: string;
  geoComment: string;
}

const ELEMENT_DATA: GeoCommentElement[] =[
  
];

@Component({
  selector: 'app-geostop-comm',
  templateUrl: './geostop-comm.component.html',
  styleUrls: ['./geostop-comm.component.scss']
})
export class GeostopCommComponent implements OnInit {

  dataSource = new MatTableDataSource<GeoCommentElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['geoCommId', 'usernameGC', 'geostopName', 'geoComment'];

   //Validators:
   commentId = new FormControl('', [Validators.required]);
   badUsername = new FormControl('',[Validators.required]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onSubmit(){

    //Para desativar o comentario
    const body1={
      commentId: this.badUsername.value.toString(),
    }
    //Fazer ligação ao servidor

    //Para atribuir os pontos negativos ao utilizador
    const body2={
       badusername: this.badUsername.value.toString(),
     }
     //Fazer ligação ao servidor
     alert("O utilizador foi sancionado e o comentário desactivado! The user has been sanctioned and the comment has been disabled!");
  }

  cancel(){
    setTimeout( () => this.router.navigate(['/admin']) , 100 );
  }


}
