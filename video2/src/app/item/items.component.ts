import { Component, OnInit } from "@angular/core";
import { Mediafilepicker, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from 'nativescript-mediafilepicker';
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
    VideoTap(): void {
        let allowedVideoQualities = [];
        
        let options: VideoPickerOptions = {
            android: {
                isCaptureMood: false, // if true then camera will open directly.
                isNeedCamera: true,
                maxNumberFiles: 2,
                isNeedFolderList: true,
                maxDuration: 20,
        
            },
            ios: {
                isCaptureMood: false, // if true then camera will open directly.
                videoMaximumDuration: 10,
                allowedVideoQualities: allowedVideoQualities
            }
        };
        
        let mediafilepicker = new Mediafilepicker(); 
        mediafilepicker.openVideoPicker(options);
        
        mediafilepicker.on("getFiles", function (res) {
            let results = res.object.get('results');
            console.dir(results);
        });
        
        // for iOS iCloud downloading status
        mediafilepicker.on("exportStatus", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
        
        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
        
        mediafilepicker.on("cancel", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
    }
}
