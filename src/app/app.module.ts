import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ApolloClientsModule } from "./apollo/apollo.module";

import { AppComponent } from "./app.component";

import { ActControlService } from "./services/controls/acts/act-control.service";
import { ProcessHTTPMsgService } from "./services/process-httpmsg.service";

import { MatGoogleMapsAutocompleteModule } from "@angular-material-extensions/google-maps-autocomplete";
import { AgmCoreModule } from "@agm/core";
import { LoginComponent } from "./components/login/login.component";
import { HeaderComponent } from "./components/header/header.component";
import { FFModule } from "./elements/forms/ff.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent],
  imports: [
    ApolloClientsModule.register(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FFModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot(),
  ],
  entryComponents: [LoginComponent],
  providers: [ActControlService, ProcessHTTPMsgService],
  bootstrap: [AppComponent],
})
export class AppModule {}
