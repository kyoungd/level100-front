import React from 'react';
import InformationCountDown from './modules/information/InformationCountDown';
import ThumbnailCountDown from './modules/thumbnail/ThumbnailCountDown';
import DefaultDescription from './modules/description/DefaultDescription';
import { getDataProduct } from '../../../../lib/dataProducts';

const ProductDetailCountdown = () => {
    const countdown = getDataProduct('countdown');
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailCountDown product={countdown} />
                <InformationCountDown product={countdown} />
            </div>
            <DefaultDescription />
        </div>
    );
}

export default ProductDetailCountdown;
