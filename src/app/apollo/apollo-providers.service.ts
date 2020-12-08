import { Provider } from "@angular/core";
import { APOLLO_NAMED_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular-link-http";
import { NamedOptions } from "apollo-angular/types";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Client } from "./client.utils";

export function getProviders(clients: Client[]): Provider[] {
  return [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory(httpLink: HttpLink): NamedOptions {
        const newClient = {} as NamedOptions;
        clients.forEach((client) => {
          newClient[`${client.name}`] = {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: client.uri,
            }),
          };
        });
        return newClient;
      },
      deps: [HttpLink],
    },
  ];
}
