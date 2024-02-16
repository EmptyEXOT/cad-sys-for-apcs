'use client'
import React, {ReactNode, useRef} from 'react';
import {Provider} from "react-redux";
import {AppStore, makeStore} from "@/shared/store/store";
import {setupListeners} from "@reduxjs/toolkit/query";

const StoreProvider = ({children} : {children: ReactNode}) => {
    const storeRef = useRef<AppStore>()

    if (!storeRef.current) {
        storeRef.current = makeStore()
        setupListeners(storeRef.current.dispatch)
    }

    return (
        <Provider store={storeRef.current}>{children}</Provider>
    );
};

export default StoreProvider;