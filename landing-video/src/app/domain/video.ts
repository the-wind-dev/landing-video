import { myComment } from "./myComment"; 
export interface Video {
    id: string,
    name: string,
    videoSrc: string,
    description?: string,
    comments: myComment[],
}