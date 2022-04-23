import { Inject, Injectable } from "@angular/core";
import { Video } from "src/app/domain/video";
// import { Comment } from "@angular/compiler";
import { API_SERVER_PATH } from "../tokens";
import { HttpClient } from "@angular/common/http"
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class VideoService {
    constructor(private httpClient: HttpClient,
                @Inject(API_SERVER_PATH) private apiServerPath: string) {
    }

    
    public readAll(): Promise<readonly Video[]> {
        
        return firstValueFrom(this.httpClient.get<readonly Video[]>(`${this.apiServerPath}/videos`))
    }
}