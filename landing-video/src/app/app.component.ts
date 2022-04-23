import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'landing-video';

  constructor(){}

  public ngAfterViewInit(): void {
    
    // this.videoService.read()
  }
}
