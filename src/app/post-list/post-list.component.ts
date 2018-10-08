import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() title1: string;
  @Input() content1: string;
  @Input() loveIts1: number;
  @Input() date1: Date;
  constructor() { }

  ngOnInit() {
  }

}
