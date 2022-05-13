/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import '../../styling/CurrencyData.css';

export default function CurrencyData(props) {
    return (
        <div className="mb-5">
            <div style={{ width: '80%' }} className="d-inline-flex bg-dark p-2 mt-5 justify-content-between fw-bold ">

                <div className="btn-group">
                    <div className="btn btn-dark currency pe-0">Currencies</div>
                    <div type="button" className="btn btn-dark currency dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden"> </span>
                    </div>
                    <ul className="dropdown-menu">
                        <li>
                            <div className="dropdown-item disabled text-reset">
                                Note: You can change your tickers
                                <br />
                                in the settings menu.
                                <br />
                                <span className="text-danger">Currently displaying your top 3.</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div style={{ width: '80%' }} className="d-flex justify-content-evenly pt-3 border border-top-0">
                <div>
                    <h4>{props.stocksymbol[0]}</h4>
                    <p>
                        $
                        {props.stockprice[0]}
                    </p>
                    <p>{props.stockvolume[0]}</p>
                </div>
                <div>
                    <h4>{props.stocksymbol[1]}</h4>
                    <p>
                        $
                        {props.stockprice[1]}
                    </p>

                    <p>{props.stockvolume[1]}</p>
                </div>
                <div>
                    <h4>{props.stocksymbol[2]}</h4>
                    <p>
                        $
                        {props.stockprice[2]}
                    </p>

                    <p>{props.stockvolume[2]}</p>
                </div>
            </div>
        </div>
    );
}
