import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroCardComponent } from "./home-page/hero-card/hero-card.component";
import { ViewAllButtonComponent } from "../buttons/view-all-button/view-all-button.component";
import { SectionHeaderComponent } from "./home-page/section-header/section-header.component";
import { HeroComponent } from "./home-page/hero/hero.component";

@NgModule({
    declarations:[HeroComponent,HeroCardComponent,SectionHeaderComponent],
    imports:[CommonModule,CommonModule,ViewAllButtonComponent],
    exports:[HeroComponent,HeroCardComponent,SectionHeaderComponent,],

})
export class MainModule{}