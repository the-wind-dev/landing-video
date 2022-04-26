import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/domain/video';
import { myComment } from 'src/app/domain/myComment';
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
    const newCom: myComment = {
      authorId: "1",
      authorImg: "../../../../assets/profile-images/avatar_1.jpg",
      authorName: "The first wind",
      text: "mm deleniti!"
    }
    this.videoService.read(videoId)
    .then( (res) => {
      console.log(res.comments)
      res.comments.push(newCom)
      console.log(res.comments)
      return res
    })
    .then( (res) => {
      this.videoService.update(+videoId, res)
    })

    // .then( (res) => {console.log(res)} )
    
  }


}
