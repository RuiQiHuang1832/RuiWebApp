/* eslint-disable no-unused-vars */
import React from 'react';
import parse from 'html-react-parser';
import { getRelativeTime } from '../functions/coreFunctions';

export default function ThreadBody(props) {
    return (
        <div className="mt-1 mx-3">
            <span style={{ fontSize: '12px' }} className="text-secondary">
                Posted
                {' '}
                <span style={{ textDecoration: 'underline dotted' }}>
                    {getRelativeTime(props.time)}
                </span>
                <span className="fw-bold text-success d-inline-block d-lg-none">
                    &nbsp;by
                    {' '}
                    {props.authorId}
                </span>

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
                {parse(`${props.body}`)}
            </div>
        </div>
    );
}
