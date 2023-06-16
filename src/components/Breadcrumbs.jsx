import React from 'react';

export default function Breadcrumbs(props) {
    let textColor = 'text-secondary';
    function createList(path) {
        return path.map((e, i) => {
            if (i === path.length - 1) {
                textColor = 'text-white';
            }
            return (<li key={e} className={`breadcrumb-item ${textColor}`}>{e}</li>);
        });
    }

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center pt-4 mb-0">
                {createList(props.path)}
            </ol>
        </nav>
    );
}
