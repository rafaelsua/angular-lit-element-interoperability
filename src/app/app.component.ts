import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("input") passwordField: ElementRef;

  password = null;
  showImage = false;

  ngOnInit() {
    this.passwordField.nativeElement.focus();
  }

  onKey($event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  onPasswordValid($event) {
    this.showImage = true;

    setTimeout(() => this.showImage = false, 5000);
  }
}
