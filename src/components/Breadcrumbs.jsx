import React from 'react';

export default function Breadcrumbs(props) {
    let textColor = 'text-secondary';
    function createList(path) {
        return path.map((e, i) => {
            if (i === path.length - 1) {
                textColor = 'text-white';
            }
            return (<li className={`breadcrumb-item ${textColor}`}>{e}</li>);
        });
    }

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {createList(props.path)}
            </ol>
        </nav>
    );
}
