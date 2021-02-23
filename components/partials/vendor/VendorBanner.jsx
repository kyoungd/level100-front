import React from 'react';
import Link from 'next/link';
const VendorBanner = () => (
    <div
        className="ps-vendor-banner bg--cover"
        style={{ backgroundImage: "url('/static/img/bg/vendor.jpg')" }}
    >
        <div className="ps-vendor-banner">
            <div className="container">
                <h2>
                    Find gappers and customized stock setup on ThinkOrSwim
                </h2>
                <Link href="/vendor/store-list">
                    <a className="ps-btn ps-btn--lg" href="#">
                        Find Studies
                    </a>
                </Link>
            </div>
        </div>
    </div>
);

export default VendorBanner;
