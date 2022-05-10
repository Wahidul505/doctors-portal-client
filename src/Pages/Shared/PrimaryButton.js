import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button
            class="btn bg-gradient-to-r from-secondary to-primary text-white font-semibold border-0 hover:from-secondary-focus hover:to-primary-focus text-lg"
        >{children}</button>
    );
};

export default PrimaryButton;