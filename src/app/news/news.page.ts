import { Component, OnInit } from '@angular/core';
import { News} from './News';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  private newslist: News[] = [];
  private news: News;

  constructor() {

   }
  
   enviarAlerta(titulo: string, subtitulo: string){
      alert("Cadastrado com sucesso!")
      this.news = new News()
      this.news.titulo = titulo
      this.news.subtitulo = subtitulo;
      this.newslist.push(this.news);
   }

  ngOnInit() {
  }

}
