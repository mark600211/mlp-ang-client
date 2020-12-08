import { env } from "process";
import { environment } from "src/environments/environment";

export interface Client {
  name: string;
  uri: string;
}

export const clients: Client[] = [
  {
    name: "ActsClient",
    uri: environment.ACTS_GQL,
  },
  {
    name: "ConsumersClient",
    uri: environment.CONSUMERS_GQL,
  },
  {
    name: "OptionsClient",
    uri: environment.OPTIONS_GQL,
  },
];
