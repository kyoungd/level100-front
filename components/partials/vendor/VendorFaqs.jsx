import React from 'react';
import Link from 'next/link';

const VendorFaqs = () => (
    <div className="ps-section--vendor ps-vendor-faqs">
        <div className="container">
            <div className="ps-section__header">
                <p>FREQUENTLY ASKED QUESTIONS</p>
                <h4>Here are some common questions</h4>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <figure>
                            <figcaption>What can you do help me today?</figcaption>
                            <p>
                                We spend a lot of time drawing trend-line and support-line.
                                We decided to automated that process in TOS, and that saved us
                                hours of work every day.  We are sure it will save you a similar
                                amount of time, too.
                            </p>
                            <p>
                                It draws a trend-line and support line.  They are two different things.
                                The trend lines describe what is happening right now, and the support-line
                                displays the major events that will likely limit price and volume movements.
                                They are the basics of all trading and
                                drawing them is what we do every day for every stock that we consider trading.
                            </p>
                            <p>
                                We draw trend-line and support line for visible window (minutes),
                                5 days, and 5 years.  They are color coded so you can differentiate
                                them easily.
                            </p>
                        </figure>
                        <figure>
                            <figcaption>What else do you have for me?</figcaption>
                            <p>
                                We also share information that we find useful like which combination
                                of indicators are useful.  Yes, everyone has their own opinion,
                                but it will help you see some patterns you never considered before.
                                We must learn, evole and adapt with time.
                            </p>
                        </figure>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <figure>
                            <figcaption>What is special about us?</figcaption>
                            <p>
                                We are day trader who practices we preach every day.
                            </p>
                            <p>
                                It is important that all our software developers are day-traders.
                                Only then, can we understand the pain that you experience.
                                It is this understanding of day-trading and knowledge of software development
                                that makes us unique.  Our aim is true.
                            </p>
                        </figure>
                        <figure>
                            <figcaption>
                                I am a beginner.  How can you help me?
                            </figcaption>
                            <p>
                                Follow the best advice for beginners.  Limit your loss,
                                practice trading on simulation instead with real money,
                                learn to read the trades others made on the chart rather than patterns,
                                create a strategy that consistantly works for you and so on.
                            </p>
                            <p>
                                Use combination of indicators, until you do not need them.
                                You will always need some indicators for additional confirmation,
                                but find the ones that works with your strategy.
                            </p>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="ps-section__footer">
                <p>Still have more questions? Feel free to contact us.</p>
                <div className="ps-btn">
                    <Link href='/page/contact-us'>
                        <a>Contact Us</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default VendorFaqs;
