import { Component } from '@angular/core';

import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, '森井 將裕');
// const CURRENT_USER: User = new User(1, 'テスト 太郎');
const ANOTHER_USER: User = new User(2, '佐藤 考太');


// const COMMENTS: Comment[] = [
//   { name: '佐藤 考太' , message: 'おつでーす！'},
//   { name: '佐藤 考太' , message: '作業終わったー？？'},
//   { name: '森井 將裕' , message: 'おつでーす！'},
//   { name: '森井 將裕' , message: '終わってまーす'}
// ];

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'おつでーす！'),
  new Comment(ANOTHER_USER, '作業終わったー？？'),
  new Comment(CURRENT_USER, 'おつでーす！'),
  new Comment(CURRENT_USER, '終わってまーす')
]

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
  comment = '';

  addComment(comment: string): void {
    if(comment) {
      this.comments.push(new Comment(this.currentUser, comment));
      this.comment = '';
    }
  }

  //addComment(comment: string): void {
  //  if(comment) {
  //    this.commentsRef.push(new Comment({ user: this.crrentUser, message: comment }));
  //    this.comment = '';
  //  }
  //}

}
