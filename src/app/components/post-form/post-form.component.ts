import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post-service/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() posts: Post[];
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Output() limitPosts: EventEmitter<Post[]> = new EventEmitter();

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe((post) => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe((post) => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }

  showPostEntries(e) {
    console.log(e.target.value);
    if (e.target.value != undefined) {
      this.postService
        .displayPostsEntries(e.target.value)
        .subscribe((posts) => {
          this.posts = posts;
          this.limitPosts.emit(posts);
        });
    }
  }
}
