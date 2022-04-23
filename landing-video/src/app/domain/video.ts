import { Comment } from "./comment"; 
export interface Video {
    id: string,
    name: string,
    videoSrc: string,
    description?: string,
    comments: Comment[],
}