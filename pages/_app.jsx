import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as NextAuthProvider } from "next-auth/client";

import createStore from '../store/store';
import DefaultLayout from '../components/layouts/DefaultLayout';
import '../scss/style.scss';
import '../scss/home-default.scss';
import '../scss/market-place-1.scss';
import '../scss/market-place-2.scss';
import '../scss/market-place-3.scss';
import '../scss/market-place-4.scss';
import '../scss/electronic.scss';
import '../scss/furniture.scss';
import '../scss/organic.scss';
import '../scss/technology.scss';
import '../scss/autopart.scss';
import '../scss/electronic.scss';

class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.store);
    }

    componentDidMount() {
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);

        this.setState({ open: true });
    }

    componentWillUnmount() {

    }

    render() {
        const { Component, pageProps, store } = this.props;
        const session = {};
        console.log(session);
        const getLayout =
            Component.getLayout || (page => <DefaultLayout children={page} />);
        return getLayout(
            <NextAuthProvider session={session}>
                <Provider store={store} session={session}>
                    <PersistGate
                        loading={<Component {...pageProps} />}
                        persistor={this.persistor}>
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </NextAuthProvider>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
