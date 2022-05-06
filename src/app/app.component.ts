import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({

    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent {

    title = 'Control Alumnos';

    @HostBinding('class') componentCssClass: any;

    constructor(public OverlayContainer: OverlayContainer){
    }

    public onSetTheme(e:string){
        this.OverlayContainer.getContainerElement().classList.add(e);
        this.componentCssClass = e;
    }
}
