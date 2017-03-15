import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    //template: `
    //<h1>{{title}}</h1>
    //<people-list>
    //`,
    templateUrl: 'views/mainForm.html'
})
export class AppComponent {
    title: string = 'Star Wars Pplz!!!';
}
