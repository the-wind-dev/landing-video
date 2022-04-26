import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/domain/video';
import { VideoService } from 'src/app/ui/shared/api/video.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  public videoId: string = '1'
  public videoSrcs: string[] = []
  public videoItems: Video[] = [];
  
  constructor(public videoService: VideoService) { }

  ngOnInit(): void {
    
    this.uploadVideo()
  }

  public uploadVideo(): void {
    
    this.videoService.readAll().then( (videos: readonly Video[]) => {
      // Fix me: не очень нрасиво берутся данные из DB
      for (let video of videos) {
        console.log('SRC: ',video.videoSrc)

        
        for (let comment of video.comments) {
          // comment.authorImg = `../../../../assets/profile-photos/avatar_${comment.authorId}.jpg`
          console.log(comment.authorImg)
        }
        console.log(video.comments) 
        this.videoItems.push(video)
      }
      console.log(this.videoItems)

      
    })
  }


}
