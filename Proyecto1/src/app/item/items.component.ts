import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import { ItemService } from "./item.service";
import * as camera from "nativescript-camera";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Image } from "tns-core-modules/ui/image";
import { knownCollections } from "tns-core-modules/ui/page/page";
import { Mediafilepicker, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from 'nativescript-mediafilepicker';
@Component({
    moduleId: module.id,
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        
    }
    onDrawerButtonTap(): void{
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onButtonTap(): void {
        camera.requestPermissions().then(
            function success() {
                const Options = {width:300, height: 300, keepAspectRatio:false,saveToGallery: true};
                camera.takePicture(Options).
                then((imageAsset) => {
                console.log("Tamano: " + imageAsset.options.width + "x" + imageAsset.options.height);
                console.log("keepAscpectRatio: " + imageAsset.options.keepAspectRatio);
                console.log("foto guardada");
            }).catch((err) => {
                        console.log("Error -> " + err.message);
                    });
            },
            function failure(){
                console.log("Permiso de camara no aceptado por el usuario");
            }

        );
    }
    takePicture(): void {
        
        let options: ImagePickerOptions = {
            android: {
                isCaptureMood: false, // if true then camera will open directly.
                isNeedCamera: true,
                maxNumberFiles: 10,
                isNeedFolderList: true
            }, ios: {
                isCaptureMood: false, // if true then camera will open directly.
                isNeedCamera: true,
                maxNumberFiles: 10
            }
        };
         
        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openImagePicker(options);
         
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
