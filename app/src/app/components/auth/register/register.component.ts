import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeVisibility(){
    this.visible = !this.visible;
  }

}
