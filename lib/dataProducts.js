import Product from '../../../elements/products/Product';

const getDataProduct = collectionType => {

    switch (collectionType) {
        case 'relatedProduct':
            const [relatedProduct] = Product;
            return relatedProduct;
        case 'extended':
            const [imageSwatcher] = Product;
            return imageSwatcher;
        case 'gropped':
            const [gropped] = Product;
            return gropped;
        case 'countdown':
            const [countdown] = Product;
            return countdown;
        case 'sample':
            const [sample] = Product;
            return sample;
        default:
            return Product;
    }
}

export { getDataProduct }
