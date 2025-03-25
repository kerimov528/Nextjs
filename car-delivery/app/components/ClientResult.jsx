'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const ClientResult = dynamic(() => import('./ResultComponent'), {
    ssr: false,
    loading: () => <p>Loading post details...</p>,
});

export default ClientResult;
