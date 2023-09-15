import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RedditService } from 'src/app/services/reddit.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
post: any;
  constructor(private dataServ: DataService, private reddit: RedditService){

    reddit.getPosts().then(posts => console.log(posts));
  }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    throw new Error('Method not implemented.');
  }

}
