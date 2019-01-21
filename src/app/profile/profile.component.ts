import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/';
import { Profile } from '../interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  constructor(private profileService: ProfileService) {

  }

  ngOnInit() {
    this.profile = this.profileService.getUser();
  }

}
