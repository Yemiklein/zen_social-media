import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: "6hsuml71",
    dataset: "production",
   apiVersion: '2022-11-15',
    useCdn: true,
    token: 'skYXQaVF10n42uQDjjGwP2ML94JqcFljpeTViBpe1ggP9ZFbx70mTjpb1XiVQUJE4wklJhLna0YKXhpeXZg5pdiVzF4J4HzYoraOg0wFLBo058noP2LrSvwCfBaMUr1erHsKU3kxH6EQuuRU9H2WoxBnjqD6WVo9bFrRsguzNI67s42f0lS7',
    // 'skcC4sXip0D8EPMlvUqFHvcxWMrhapWQN3rdVXX9wCjKzSxO6kBAQOKZlub5HOsxTCLp27YsMET2pK3jIK5LxWsfIY9Gn8tnlrl4qDFDepNwGNNNx2PtcgUSw97wviAcCRJ8ppbE0auS8FGJNOe7Mi0BI5qX4NJUXgJp6f6EQV1yXCoCIA7t'
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

