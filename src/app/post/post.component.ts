import {Component} from '@angular/core'

@Component({
    selector: 'app-post',
    template:`<ul> 
                    <li *ngFor="let item of items">{{items}}</li>
              <ul>`,
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {

    titles = [
        {
            property:'Post title intell',
            definition: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum in itaque rerum tenetur doloremque placeat excepturi esse repellendus totam! Adipisci!'
        },
        {
            property:'Post title magic',
            definition: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum in itaque rerum tenetur doloremque placeat excepturi esse repellendus totam! Adipisci!'
        },
        {
            property:'Post title silicon',
            definition:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum in itaque rerum tenetur doloremque placeat excepturi esse repellendus totam! Adipisci!'

        }
    ]

}