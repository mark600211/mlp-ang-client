import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { Apollo, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { createUploadLink } from "apollo-upload-client";
import { getProviders } from "./apollo-providers.service";
import { clients } from "./client.utils";

@NgModule({
  imports: [ApolloModule, HttpLinkModule, HttpClientModule],
  exports: [HttpLinkModule],
})
export class ApolloClientsModule {
  static register(): ModuleWithProviders<ApolloClientsModule> {
    const providers = getProviders(clients);

    return {
      ngModule: ApolloClientsModule,
      providers,
    };
  }
}

//   constructor(apollo: Apollo, httpLink: HttpLink) {
//     const http = httpLink.create({ uri: clients[0].uri });

//     // const uploadLink = createUploadLink({
//     //   uri: environment.GQL_URI_SUB,
//     // });

//     // const client = new SubscriptionClient(environment.WS_URI_FILES, {
//     //   reconnect: true,
//     // });

//     // const link = new WebSocketLink(client);

//     // const linkEr = onError(({ graphQLErrors, networkError }) => {
//     //   if (graphQLErrors)
//     //     graphQLErrors.map(({ message, locations, path }) =>
//     //       console.log(
//     //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//     //       )
//     //     );

//     //   if (networkError) console.log(`[Network error]: ${networkError}`);
//     // });

//     // const httpLinkWithErrorHandling = ApolloLink.from([http]);

//     // apollo.create({ link: link, cache: new InMemoryCache() }, "filesWS");
//     // apollo.create({ link: uploadLink, cache: new InMemoryCache() }, "sub");
//     apollo.create({
//       link: http,
//       cache: new InMemoryCache(),
//     });
//   }
// }
