import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [
		HeaderComponent,
		SidebarComponent,
		FooterComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		HeaderComponent,
		SidebarComponent,
		FooterComponent
	]
})
	
export class SharedModule { }
