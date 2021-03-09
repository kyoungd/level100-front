import React from 'react';

import DefaultDescription from './modules/description/DefaultDescription';
import ThumbnailOnSale from './modules/thumbnail/ThumbnailOnSale';
import InformationOnSale from './modules/information/InformationOnSale';
import { getDataProduct } from '../../../../lib/dataProducts';

const ProductDetailOnSale = () => {
    const extended = getDataProduct('extended');
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailOnSale product={extended} />
                <InformationOnSale product={extended} />
            </div>
            <DefaultDescription />
        </div>
    );
}

export default ProductDetailOnSale;
