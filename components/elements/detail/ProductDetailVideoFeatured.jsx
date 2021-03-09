import React from 'react';
import DefaultDescription from './modules/description/DefaultDescription';
import InformationExtended from './modules/information/InformationExtended';
import ThumbnailVideoFeatured from './modules/thumbnail/ThumbnailVideoFeatured';
import { getDataProduct } from '../../../../lib/dataProducts';

const ProductDetailVideoFeatured = () => {
    const extended = getDataProduct('extended');
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailVideoFeatured />
                <InformationExtended product={extended} />
            </div>
            <DefaultDescription />
        </div>
    );
}

export default ProductDetailVideoFeatured;
