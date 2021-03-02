// import { from } from "rxjs";
import { User } from './user';

export class Comment {

  id: number;
  date: number;
  message: string;
  // initial: string;
  // name: string;
  user: User;

  // user: User;
  // name: string;
  // message: string;
  // date: number;
  // key?: string;
  // isEdit: boolean;

  // constructor(public user: User, public message: string) {
  //   this.date = Date.now();
  // }

  // constructor(value: any) {
  //   this.user = value.user;
  //   this.message = value.message;
  //   this.date = value.date || Date.now();
  //   if(value.key) {
  //     this.key = value.key;
  //   }
  // }

}
