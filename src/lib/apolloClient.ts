import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  const httpLink = new HttpLink({
    uri: "https://api.escuelajs.co/graphql",
    fetchOptions: { cache: "no-store" },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
};
