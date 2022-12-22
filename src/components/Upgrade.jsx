import React, { Component } from 'react';
import '../styling/Upgrade.css';
import { BREADCRUMB_PATH } from '../global';
import Breadcrumbs from './Breadcrumbs';
// import VIPbanner from '../images/vip.png';
// import AQUAbanner from '../images/aqua.png';
// import NOVAbanner from '../images/nova.png';

const TITLE = 'Upgrade';

export class Upgrade extends Component {
  // UseEffect for functions, componentDidMount for classes
  // called after mounting
  componentDidMount() {
    document.title = TITLE;
  }

  render() {
    return (
      <section>
        <Breadcrumbs path={BREADCRUMB_PATH.Upgrade} />
        <div className="container-fluid p-0 p-lg-5 p-md-5 p-sm-5 ">
          <div className="row">
            <div className="col">
              <h1 className="text-white text-center py-3 gradient-custom-upgradeheader">Upgrade</h1>
              <div>
                {/** style={{ background: "rgb(36, 36, 36)" }} v white lines */}
                <div className="card-body">
                  <div className="row justify-content-center ">
                    {/** Gap-4 ^ */}
                    {/** 1st COLUMN */}
                    <div className="col-lg-4 col-md-7 col-sm-10  ">
                      <div id="theborderstart" className="card my-5 ">
                        <div className="d-inline-flex  p-2 w-100 gradient-custom-1 justify-content-between fw-bold">
                          <div className="fs-5 ms-2 text-white">Tier 1</div>
                          <div className="darkHighlight fs-5 text-white">
                            ...
                          </div>
                        </div>
                        <section className="borderRadius">
                          <div className="row">
                            <table className="table ">
                              <tbody id="content" className="iconfontsize VIPColor iconcolor-vip">
                                <tr className="border border-white text-white">
                                  <td><div className="ms-2 "> Length:</div></td>
                                  <td><div className="text-center "> ... </div></td>
                                </tr>
                                <tr className="border border-white bgColorBar">
                                  <td colSpan={2}>
                                    <div className=" text-center text-white text-nowrap">
                                      <span>Tier 1 </span>
                                      Userbar
                                    </div>
                                  </td>
                                  {/** colSpan allows me to use the full width of the row! This the right way to code for text-center!! */}
                                </tr>

                                <tr className="border border-white ">
                                  <td colSpan={2}><div className="text-center">{/** <img aria-label="vip banner" className="img-fluid" width="220" /> */}</div></td>
                                </tr>

                                <tr className=" bgColorBar ">
                                  <td colSpan={2}>
                                    <div className="text-center text-white text-nowrap">
                                      <span>Tier 1 </span>
                                      Upgrade Perks
                                    </div>
                                  </td>

                                </tr>
                                <tr>
                                  <td><div className="ms-2 text-white"> ...</div></td>
                                  <td><div className=" text-center">...</div></td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="ms-2 text-white">
                                      <span>...</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center ">
                                      <i className=" bi bi-gem" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><div className="ms-2 text-white"> ...</div></td>
                                  <td>
                                    <div className="text-center ">
                                      <i className="bi bi-lock-fill" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="ms-2 mb-2 mt-1 text-white">
                                      <span>...</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center">
                                      <i className="bi bi-star-fill" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="ms-2 text-white">...</div>
                                  </td>
                                  <td>
                                    <div className="text-center ">
                                      <i className="bi bi-envelope-check-fill" />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td><div className="ms-2 text-white">...</div></td>
                                  <td>
                                    <div className="text-center ">
                                      <i className="bi bi-body-text" />
                                    </div>
                                  </td>
                                </tr>

                              </tbody>
                            </table>
                            <div className="d-flex justify-content-center">
                              <button type="button" className=" text-center mb-3  btn btn-outline-danger">
                                <a className="text-decoration-none text-white" href="https://google.com">Buy Tier 1</a>
                              </button>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    {/** 2nd COLUMN */}
                    <div className="col-lg-4 col-md-7 col-sm-10  h-200">
                      <div className=" ">
                        <div className="d-flex justify-content-center mb-3 ">
                          <span id="bestvaluetag" className="badge rounded-pill bg-warning border border-dark fs-6 ">Best Value</span>
                        </div>
                        <div id="thebordermiddle">
                          <div className="d-inline-flex  p-2 w-100 gradient-custom-7 justify-content-between fw-bold">
                            <div className="fs-5 ms-2 text-white">Tier 2</div>
                            <div className="fs-5 text-white darkHighlight">...</div>
                          </div>

                          <section className="borderRadius">
                            <div className="row ">
                              <table className="table ">
                                <tbody id="content" className="iconfontsize AQUAColor iconcolor-aqua">
                                  <tr className="border border-white text-white">
                                    <td><div className="ms-2 "> Length:</div></td>
                                    <td><div className="text-center "> ... </div></td>
                                  </tr>
                                  <tr className="border border-white bgColorBar ">
                                    <td colSpan={2}>
                                      <div className=" text-center text-white text-nowrap">
                                        <span>Tier 2 </span>
                                        Userbar
                                      </div>
                                    </td>
                                    {/** colSpan allows me to use the full width of the row! This the right way to code for text-center!! */}
                                  </tr>

                                  <tr className="border border-white ">
                                    <td colSpan={2}><div className="text-center">{/** <img aria-label="aqua banner" className="img-fluid" width="220" /> */}</div></td>

                                  </tr>

                                  <tr className="bgColorBar ">
                                    <td colSpan={2}>
                                      <div className="text-center text-white text-nowrap">
                                        <span>Tier 2 </span>
                                        Upgrade Perks
                                      </div>
                                    </td>

                                  </tr>
                                  <tr>
                                    <td><div className="ms-2 text-white"> ...</div></td>
                                    <td><div className=" text-center ">...</div></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="ms-2 text-white">
                                        <span>...</span>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="text-center ">
                                        <i className=" bi bi-gem" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><div className="ms-2 text-white"> ...</div></td>
                                    <td>
                                      <div className="text-center ">
                                        <i className="bi bi-lock-fill" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="ms-2 mb-2 mt-1 text-white">
                                        <span>...</span>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="text-center">
                                        <i className="bi bi-star-fill" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="text-white">
                                    <td>
                                      <div className="ms-2">...</div>
                                    </td>
                                    <td>
                                      <div className="text-center ">
                                        <i className="bi bi-envelope-check-fill" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="text-white">
                                    <td><div className="ms-2">...</div></td>
                                    <td>
                                      <div className="text-center ">
                                        <i className="bi bi-body-text" />
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td><div className="ms-2 ">...</div></td>
                                    <td>{/** 100% width border line */}</td>
                                  </tr>
                                  <tr>
                                    <td><div className="ms-2 ">...</div></td>
                                    <td>{/** 100% width  border line */}</td>
                                  </tr>
                                  <tr>
                                    <td><div className="ms-2 ">... </div></td>
                                    <td>{/** 100% width border line */}</td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="d-flex justify-content-center  ">
                                <button type="button" className="text-center mb-3 btn btn-outline-info">
                                  <a className="text-decoration-none text-white " href="https://google.com">Buy Tier 2</a>
                                </button>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                    {/** 3rd COLUMN */}
                    <div className="col-lg-4 col-md-7 col-sm-10  ">
                      <div className=" my-5 border-0 ">
                        <div id="theborderend" className="card my-5 ">
                          <div className="d-inline-flex  p-2 w-100 gradient-custom-6 justify-content-between fw-bold">
                            <div className="fs-5 ms-2 text-white">Tier 3</div>
                            <div className="fs-5 text-white darkHighlight">...</div>
                          </div>
                          <section className="borderRadius">
                            <div className="row ">
                              <table className="table ">
                                <tbody id="content" className="iconfontsize NOVAColor iconcolor-nova ">
                                  <tr className="border border-white text-white">
                                    <td><div className="ms-2 "> Length:</div></td>
                                    <td><div className="text-center "> ... </div></td>
                                  </tr>
                                  <tr className="border border-white bgColorBar ">
                                    <td colSpan={2}>
                                      <div className=" text-center text-white text-nowrap">
                                        <span>Tier 3 </span>
                                        Userbar
                                      </div>
                                    </td>
                                    {/** colSpan allows me to use the full width of the row! This the right way to code for text-center!! */}
                                  </tr>

                                  <tr className="border border-white ">
                                    <td colSpan={2}><div className="text-center">{/** <img aria-label="nova banner" className="img-fluid" width="220" /> */}</div></td>
                                  </tr>

                                  <tr className=" bgColorBar ">
                                    <td colSpan={2}>
                                      <div className="text-center text-white text-nowrap">
                                        <span>Tier 3 </span>
                                        Upgrade Perks
                                      </div>
                                    </td>

                                  </tr>
                                  <tr className="text-white ">
                                    <td><div className="ms-2 "> ...</div></td>
                                    <td><div className=" text-center ">...</div></td>
                                  </tr>
                                  <tr className="text-white ">
                                    <td>
                                      <div className="ms-2">
                                        <span>...</span>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="text-center ">
                                        <i className=" bi bi-gem" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="text-white">
                                    <td>
                                      <div className="ms-2 "> ...</div>
                                    </td>
                                    <td>
                                      <div className="text-center ">
                                        <i className="bi bi-lock-fill" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="text-white">
                                    <td>
                                      <div className="ms-2 mb-2 mt-1">
                                        <span>...</span>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="text-center">
                                        <i className="bi bi-star-fill" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="text-white">
                                    <td><div className="ms-2">...</div></td>
                                    <td>
                                      <div className="text-center ">
                                        <i className="bi bi-envelope-check-fill" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="text-white">
                                    <td>
                                      <div className="ms-2">...</div>
                                    </td>
                                    <td>
                                      <div className="text-center ">
                                        <i className="bi bi-body-text" />
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td><div className="ms-2 ">...</div></td>
                                    <td>{/** 100% width border line */}</td>
                                  </tr>
                                  <tr>
                                    <td><div className="ms-2 ">...</div></td>
                                    <td>{/** 100% width  border line */}</td>
                                  </tr>
                                  <tr>
                                    <td><div className="ms-2 ">...</div></td>
                                    <td>{/** 100% width border line */}</td>
                                  </tr>
                                  <tr>
                                    <td><div className="ms-2 ">...</div></td>
                                    <td>{/** 100% width border line */}</td>
                                  </tr>
                                  <tr>
                                    <td><div className="ms-2 ">...</div></td>
                                    <td>{/** 100% width  border line */}</td>
                                  </tr>

                                </tbody>
                              </table>
                              <div className="d-flex justify-content-center">
                                <button type="button" className=" text-center mb-3  btn btn-outline-warning">
                                  <a className="text-decoration-none text-white" href="https://google.com">Buy Tier 3</a>
                                </button>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Upgrade;
