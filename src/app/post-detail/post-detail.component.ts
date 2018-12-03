import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';
import { Location } from '@angular/common';
import {MatDialog} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post;
  constructor(private route: ActivatedRoute,
    private postService: PostServiceService,
    private location: Location,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }
  goBack(): void {
    this.location.back();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: {author: this.post.author, contact: this.post.contact}
    });
  }
}

