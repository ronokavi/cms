import { Injectable } from '@angular/core';
import { Profile, Image } from '../interfaces/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile: Profile;
  constructor() {

  }
  getUser(): Profile {
    return this.profile = {
      email: 'ronokavi@gmail.com',
      firstName: 'ron',
      lastName: 'okavi',
      img: {
        alt: 'alt',
        description: 'description',
        src: 'assets/images/profile_pic_small.jpg'
      },
    };
  }
}
