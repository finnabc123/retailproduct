import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

    public opened = true;

    @ViewChild('appDrawer', {static: true}) appDrawer: ElementRef;
    version = VERSION;
    navItems: any[] = [
        {
            displayName: 'Category',
            iconName: 'recent_actors',
            children: [
                {
                    displayName: 'Item List',
                    iconName: 'group',
                    children: [
                        {
                            displayName: 'Item',
                            iconName: 'person',
                            route: 'category/itemList/item',
                        },
                    ]
                },
                {
                    displayName: 'Role',
                    iconName: 'speaker_notes',
                    children: [
                        {
                            displayName: 'Admin',
                            iconName: 'person',
                            children: [
                                {
                                    displayName: 'Add',
                                    iconName: 'star_rate',
                                    route: 'testfolder/test',
                                },
                                {
                                    displayName: 'View',
                                    iconName: 'star_rate',
                                    route: 'testfolder/test',
                                }
                            ]
                        },
                        {
                            displayName: 'Users',
                            iconName: 'star_rate',
                            route: 'testfolder/test',
                        }
                    ]
                }
            ]
        }
    ];
    constructor() { }
}
