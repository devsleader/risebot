import React from 'react';

interface BackToTopProps {
    scroll: boolean | number;
}

export default function BackToTop({ scroll }: BackToTopProps): React.ReactElement {
    return React.createElement(
        React.Fragment,
        null,
        scroll && React.createElement('a', { id: 'scroll-top', className: 'show' })
    );
}