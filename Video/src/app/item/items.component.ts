import { Component, OnInit } from "@angular/core";
import { VideoRecorder, Options as VideoRecorderOptions } from 'nativescript-videorecorder';
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})

export class ItemsComponent implements OnInit {
    

    constructor() { }

    ngOnInit(): void {
        
    }
    onButtonTap(): void {        
        const options: VideoRecorderOptions = {
            hd: true,
            saveToGallery: true,
            duration: 30,
            format: 'mp4',
            size: 300,
            position:'back'
        }
        const videorecorder = new VideoRecorder(options)
         
        videorecorder.record().then((data) => {
            console.log(data.file)
            console.log("foto Guardada");
        }).catch((err) => {
            console.log(err)
        })
    }   
                              
}
