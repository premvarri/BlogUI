import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css'],
})
export class FriendslistComponent implements OnInit {
  activeTab: string = 'users'; // Default to 'users'

  users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ];

  // Dummy content for friend list
  friendList = [
    { id: 1, name: 'Friend 1' },
    { id: 2, name: 'Friend 2' },
    { id: 3, name: 'Friend 3' },
  ];
  ngOnInit() {
    console.log('Component initialized');
    console.log('activeTab:', this.activeTab);
  }
  // Function to handle adding friends
  addFriend(userId: number) {
    // Add your logic here to handle the friend addition
    alert(`Added friend with ID ${userId}`);
  }

  showFriends() {
    this.activeTab = 'friendList';
    console.log('Switched to Friend List tab');
    console.log('activeTab:', this.activeTab);
  }
  showUsers() {
    this.activeTab = 'users';
    console.log('Switched to Friend List tab');
    console.log('activeTab:', this.activeTab);
  }
  showFrndreq() {
    this.activeTab = 'frndReq';
    console.log('Switched to Friend List tab');
    console.log('activeTab:', this.activeTab);
  }
}
