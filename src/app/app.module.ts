import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

import { SharedModule } from './shared.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ProfileComponent } from './profile/profile.component';

import { NavigationComponent } from './navigation/navigation.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { ControlsComponent } from './controls/controls.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    ProfileComponent,
    NavigationComponent,
    NavigationItemComponent,
    ControlsComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    ResizableModule,
    DynamicFormModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
