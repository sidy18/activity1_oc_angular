import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp1-angular-oc';

  posts = [
    {title:"Mon premier post test", content:"Je m'engage à finir ce cours de openclassroom en 24 h",loveIts: 0, created_at:new Date},
    {title:"Mon second post", content:"Et je m'engage à finir 2 cours de coursera en 1 mois", loveIts:0, created_at:new Date()},
    {title:"Mon dernier poste et non le moindre", content:"Bonne chance pour gérer tout ça", loveIts:0, created_at:new Date()}
  
  ];
}
