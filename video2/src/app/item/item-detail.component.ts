import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Mediafilepicker, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from 'nativescript-mediafilepicker';
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemDetailComponent implements OnInit {
    

    constructor() { }

    ngOnInit(): void {
    }
        
}
