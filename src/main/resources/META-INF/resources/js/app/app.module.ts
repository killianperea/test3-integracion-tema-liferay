import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import 'chart.js/dist/Chart.min'
import { AccordionModule } from 'primeng-wl/accordion';	
import { CardModule } from 'primeng-wl/card'
import { NoopAnimationsModule,BrowserAnimationsModule } from './animations/src/animations';
import { FieldsetModule } from 'primeng-wl/fieldset';
import { ScrollPanelModule } from 'primeng-wl/scrollpanel';
import { TabViewModule } from 'primeng-wl/tabview';
import { PanelModule } from 'primeng-wl/panel';
import { ToolbarModule } from 'primeng-wl/toolbar';
import { SplitButtonModule } from 'primeng-wl/splitbutton';
import { ButtonModule } from 'primeng-wl/button';
import { RouterModule } from '@angular/router';
import {ConfirmDialogModule} from 'primeng-wl/confirmdialog';
import { LightboxModule } from 'primeng-wl/lightbox';
import { OverlayPanelModule } from 'primeng-wl/overlaypanel';
import { DialogModule } from 'primeng-wl/dialog';
import { SidebarModule } from 'primeng-wl/sidebar';
import { TooltipModule } from 'primeng-wl/tooltip';



@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		ButtonModule,
		TooltipModule,
		DialogModule,
		SidebarModule,
		ConfirmDialogModule,	
		OverlayPanelModule,
		FormsModule,
		LightboxModule,
		SplitButtonModule,
		ToolbarModule,
		CardModule,
		AccordionModule,
		NoopAnimationsModule,
		FieldsetModule,
		ScrollPanelModule,
		TabViewModule,
		PanelModule,
		BrowserAnimationsModule
	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	bootstrap: [ ]
})
export class AppModule {
	ngDoBootstrap() { }
}