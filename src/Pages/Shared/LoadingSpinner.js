import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center'>
            <div className='h-24 w-24 rounded-full border-t-4 border-accent animate-spin'></div>
        </div>
    );
};

export default LoadingSpinner;