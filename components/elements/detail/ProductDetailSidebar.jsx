import React from 'react';

import DefaultDescription from './modules/description/DefaultDescription';
import ThumbnailSidebar from './modules/thumbnail/ThumbnailSidebar';
import InformationSidebar from './modules/information/InformationSidebar';
import { getDataProduct } from '../../../../lib/dataProducts';

const ProductDetailSidebar = () => {
    const extended = getDataProduct('extended');
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailSidebar product={extended} />
                <InformationSidebar product={extended} />
            </div>
            <DefaultDescription />
        </div>
    );
}

export default ProductDetailSidebar;
