import React from 'react';

import DefaultDescription from './modules/description/DefaultDescription';
import ThumbnailAffiliate from './modules/thumbnail/ThumbnailAffiliate';
import InformationAffiliate from './modules/information/InformationAffiliate';
import { getDataProduct } from '../../../../lib/dataProducts';

const ProductDetailAffiliate = () => {
    const sample = getDataProduct('sample');

    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailAffiliate product={sample} />
                <InformationAffiliate product={sample} />
            </div>
            <DefaultDescription />
        </div>
    );
};

export default ProductDetailAffiliate;
