import React from 'react';

const VendorAbout = () => (
    <div className="ps-section--vendor ps-vendor-about">
        <div className="container">
            <div className="ps-section__header">
                <p>WHAT DO WE DO</p>
                <h4>
                    As a day trader, most of our time is spent on searching for the right setups. <br />
                    Our customized script for ThinkOrSwim will do that better.
                </h4>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/icons/vendor-1.png" alt="martfury" />
                            </div>
                            <div className="ps-block__content">
                                <h4>Cut Time</h4>
                                <div className="ps-block__desc" data-mh="about-desc">
                                    <p>
                                        Use our scanners or allow us to build you a custom scanner. It will save you countless hours of searching and staring at the chart looking.
                                    </p>
                                </div>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/icons/vendor-2.png" alt="martfury" />
                            </div>
                            <div className="ps-block__content">
                                <h4>Powerful Tools</h4>
                                <div className="ps-block__desc" data-mh="about-desc">
                                    <p>
                                        Allow our solution to find the winning setup just in time to take advantage of the development. Market changes rapidly but we help you to be quicker.
                                    </p>
                                </div>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/icons/vendor-3.png" alt="martfury" />
                            </div>
                            <div className="ps-block__content">
                                <h4>More Revenue</h4>
                                <div className="ps-block__desc" data-mh="about-desc">
                                    <p>
                                        At the end of the day, it is all about winning. With our solution, you can find setups that you are looking for automatically and win more trades.
                                    </p>
                                </div>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default VendorAbout;
