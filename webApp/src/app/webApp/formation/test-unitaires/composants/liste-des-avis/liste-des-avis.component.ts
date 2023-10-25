import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-liste-des-avis',
  templateUrl: './liste-des-avis.component.html',
  styleUrls: ['./liste-des-avis.component.scss']
})
export class ListeDesAvisComponent implements OnInit {

  // props
  public listeDesAvis: any[] = [];

  // constructeur
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAvis().subscribe(
      (datas) => {
        this.listeDesAvis = datas;
      }
    );
    
  }
}



