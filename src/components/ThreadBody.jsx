import React from 'react';

export default function ThreadBody(props) {
    return (
        <div className="mt-1 mx-3">
            <span style={{ fontSize: '12px' }} className="text-secondary">
                Posted
                {' '}
                <span style={{ textDecoration: 'underline dotted' }}>Yesterday</span>
            </span>
            <span
                style={{
                    background: '#191717', marginTop: '-4px', marginRight: '-16px', fontSize: '0px',
                }}
                className="float-end p-2 "
            >
                <span className="p-1" style={{ fontSize: '13px' }}>
                    #
                    {props.number}

                </span>
            </span>
            <div className="mt-4">
                Reducing just the padding on the columns wont make the trick,
                as you will extend the width of the page, making it uneven with the rest of your page, say navbar.
                You need to equally reduce the negative margin on the row. Taking @martinedwards LESS example:

            </div>
        </div>
    );
}
