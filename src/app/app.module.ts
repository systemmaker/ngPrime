import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';
import { DataTableModule } from 'primeng/datatable';
import { ContextMenuModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import {InplaceModule} from 'primeng/inplace';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DataTableModule,
        ContextMenuModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        InplaceModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
