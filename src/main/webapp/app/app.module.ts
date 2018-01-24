import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterGamificationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterGamificationAppRoutingModule} from './app-routing.module';
import { JhipsterGamificationHomeModule } from './home/home.module';
import { JhipsterGamificationAdminModule } from './admin/admin.module';
import { JhipsterGamificationAccountModule } from './account/account.module';
import { JhipsterGamificationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterGamificationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterGamificationSharedModule,
        JhipsterGamificationHomeModule,
        JhipsterGamificationAdminModule,
        JhipsterGamificationAccountModule,
        JhipsterGamificationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterGamificationAppModule {}
