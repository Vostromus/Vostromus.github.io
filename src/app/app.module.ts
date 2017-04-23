import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--NgModel lives here
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroesComponent} from './heroes.component'
import { HeroDetailComponent} from './hero-detail.component';
import {GenericCascadesComponent } from './generic-cascades.component'
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,                  
                  RouterModule.forRoot([
                    {
                      path:'heroes',
                      component: HeroesComponent
                    }
                  ])
                  
                  ],
  declarations: [ AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    GenericCascadesComponent ],
  bootstrap:    [ AppComponent ],
  providers:[HeroService]
})



export class AppModule { }
