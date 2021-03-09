import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const WithGraphQL = (session, children) => {
    const token = session.jwt.toString();

    const client = new ApolloClient({
        uri:
            `${process.env.NEXT_PUBLIC_API_URL}/graphql` ||
            "http://localhost:1337/graphql",
        credentials: "same-origin",
        cache: new InMemoryCache(),
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithGraphQL;
