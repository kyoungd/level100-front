import React from 'react';

import DefaultDescription from './modules/description/DefaultDescription';
import ThumbnailGroupped from './modules/thumbnail/ThumbnailGroupped';
import InformationGroupped from './modules/information/InformationGroupped';
import { getDataProduct } from '../../../../lib/dataProducts';

const ProductDetailGroupped = () => {
    const gropped = getDataProduct('gropped');
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailGroupped product={gropped} />
                <InformationGroupped product={gropped} />
            </div>
            <DefaultDescription />
        </div>
    );
}

export default ProductDetailGroupped;
