import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title2: string;
  @Input() content2: string;
  @Input() loveIts2: number;
  @Input() date2: Date;
  constructor() { }

  ngOnInit() {
  }

  onIncrement()
  {
    this.loveIts2++;
  }
  onDecrement()
  {
    this.loveIts2--;
  }

}
