import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MessagePageRoutingModule,
        ReactiveFormsModule,
        IonicStorageModule.forRoot({
            driverOrder: ['sqlite', 'websql', 'indexeddb']
        })
    ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
