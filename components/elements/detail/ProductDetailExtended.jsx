import React from 'react';
import ThumbnailExtended from './modules/thumbnail/ThumbnailExtended';
import DefaultDescription from './modules/description/DefaultDescription';
import InformationExtended from './modules/information/InformationExtended';
import { getDataProduct } from '../../../../lib/dataProducts';

const ProductDetailCountdown = () => {
    const extended = getDataProduct('extended');
    return (
        <div className="ps-product--detail">
            <div className="ps-product__header">
                <ThumbnailExtended product={extended} />
                <InformationExtended product={extended} />
            </div>
            <DefaultDescription />
        </div>
    );
}

export default ProductDetailCountdown;
