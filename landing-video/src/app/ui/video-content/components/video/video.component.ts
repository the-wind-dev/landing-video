import { Component, Input, OnInit } from '@angular/core';
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
  public videoItems: Video[] = []

  @Input()
  public newCommentText: string = ''
  
  constructor(public videoService: VideoService) { }

  ngOnInit(): void {
    
    this.uploadVideo()
  }

  public uploadVideo(): void {
    
    this.videoService.readAll().then( (videos: readonly Video[]) => {

      // Fix me: не очень нрасиво берутся данные из DB
      for (let video of videos) {   
        for (let comment of video.comments) {
          if (comment.authorImg == '') {
            comment.authorImg=`../../../../assets/profile-images/avatar_default.jpg`
          }  
        }
        this.videoItems.push(video)
      }      
    })
  }
  public newComment(videoId: string, event: Event) {
    const videoIdNum: number = +videoId 
    console.log(videoId, event)
    const eventText: string = event.toString()
    
    this.videoService.read(videoIdNum)
                     .then( (res) => {const videoItem: Video})
    console.log(videoItem)
                    //  (res) => {
                    //   res.comments.push({
                    //     authorId: '4',
                    //     authorImg: '',
                    //     authorName: '4author',
                    //     text: eventText,
                    //   })
                    //   console.log(res)
                    //  }
    
  }


}
