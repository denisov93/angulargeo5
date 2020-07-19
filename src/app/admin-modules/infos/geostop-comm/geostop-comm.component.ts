import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';

export interface GeoCommentElement {
  geoCommId: string;
  usernameGC: string;
  geostopName: string;
  geoComment: string;
}


@Component({
  selector: 'app-geostop-comm',
  templateUrl: './geostop-comm.component.html',
  styleUrls: ['./geostop-comm.component.scss']
})
export class GeostopCommComponent implements OnInit {

  ELEMENT_DATA: GeoCommentElement[] =[];
  dataSource;
  displayedColumns: string[] = ['geoCommId', 'usernameGC', 'geostopName', 'geoComment'];

   //Validators:
   commentId = new FormControl('', [Validators.required]);y
   badUsername = new FormControl('',[Validators.required]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router : Router, private req: RequestService ) { }

  ngOnInit(): void {

    this.req.getAllActiveCommentGeo().subscribe(
      data=>{
        var arr:GeoCommentElement[]=[];
        data.map(
          e=>{
            arr.push({ geoCommId: e.commentID , usernameGC:e.username, geostopName:e.geoSpotName, geoComment: e.content });
          }
        );
        this.ELEMENT_DATA = arr;
        this.dataSource = new MatTableDataSource<GeoCommentElement>(this.ELEMENT_DATA);
      },(err:HttpErrorResponse)=>{console.log(err)}

    );


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
