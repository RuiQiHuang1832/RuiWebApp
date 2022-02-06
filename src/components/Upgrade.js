import React, { Component } from 'react'
import "../styling/Upgrade.css"
import VIPbanner from '../images/vip.png'
import AQUAbanner from '../images/aqua.png'
import NOVAbanner from '../images/nova.png'
//format code.. hungry delete + online html formatter
//linking buys


export class Upgrade extends Component {
    render() {
        return (
            <div>
                <div style={{ background: "#161618" }} className='container-fluid p-0 p-lg-5 p-md-5 p-sm-5 '>
                    <div className='row  '>
                        <div className='col '>
                            <h1 className='text-white text-center py-3 gradient-custom-upgradeheader'>~Upgrade~</h1>
                            <div style={{ background: "rgb(36, 36, 36)" }}> {/**style={{ background: "rgb(36, 36, 36)" }} v white lines */}

                                <div className='card-body'>
                                    <div className='row justify-content-center'> {/**Gap-4 ^ */}

                                        {/**1st COLUMN */}
                                        <div className='col-lg-4 col-md-7 col-sm-10  '>
                                            <div id="theborderstart" className='card my-5 '>
                                                <div className='d-inline-flex  p-2 w-100 gradient-custom-1 justify-content-between fw-bold'>
                                                    <div className='fs-5 ms-2 text-white'>VIP</div>
                                                    <div style={darkHighlight} className='fs-5 text-white'>$10.00</div>

                                                </div>
                                                <div id='borderRadius' >
                                                    <div className='row'>
                                                        <table className='table '>
                                                            <tbody id="content">
                                                                <tr className='border border-white'>
                                                                    <td><div className='ms-2'> Length:</div></td>
                                                                    <td><div className='text-center '> 1 Month </div></td>
                                                                </tr>
                                                                <tr className='border border-white bgColorBar'>
                                                                    <td colSpan={2}><div className=' text-center text-white text-nowrap'><span style={VIPColor}>VIP</span> Userbar</div></td>
                                                                    {/**colSpan allows me to use the full width of the row! This the right way to code for text-center!!*/}
                                                                </tr>

                                                                <tr className='border border-white '>
                                                                    <td colSpan={2}><div id="vipMargin" className='text-center'><img src={VIPbanner} className='img-fluid' width="220" /></div></td>

                                                                </tr>

                                                                <tr className=' bgColorBar '>
                                                                    <td colSpan={2}><div className='text-center text-white text-nowrap'><span style={VIPColor}>VIP</span> Upgrade Perks</div></td>

                                                                </tr>
                                                                <tr className=''>
                                                                    <td><div className='ms-2'> A new cool username style.</div></td>
                                                                    <td><div style={VIPColor} className=' text-center'>John&nbsp;Doe</div></td>
                                                                </tr>
                                                                <tr className='iconcolor-vip '>
                                                                    <td><div className='ms-2'> <span style={VIPColor}>VIP</span> Award </div></td>
                                                                    <td><div className='text-center '> <i style={iconFontSize} class=" bi bi-gem"></i> </div></td>
                                                                </tr>
                                                                <tr className='iconcolor-vip'>
                                                                    <td><div className='ms-2 '> Bypass the requirements to unlock hidden content.</div></td>
                                                                    <td><div className='text-center mt-1 '> <i style={iconFontSize} class="bi bi-lock-fill"></i> </div></td>
                                                                </tr>
                                                                <tr className='iconcolor-vip'>
                                                                    <td><div className='ms-2 mb-2 mt-1'>Access to <span style={VIPColor}>VIP</span> exclusive forums. </div></td>
                                                                    <td><div className='text-center'> <i style={iconFontSize} class="bi bi-star-fill"></i> </div>  </td>
                                                                </tr>
                                                                <tr className='iconcolor-vip'>
                                                                    <td> <div className='ms-2'>Storage for 5,000 messages.</div>  </td>
                                                                    <td> <div className='text-center '> <i style={iconFontSize} class="bi bi-envelope-check-fill"></i> </div></td>
                                                                </tr>
                                                                <tr className='iconcolor-vip'>
                                                                    <td><div className='ms-2'>Able to change display name 1 time every month.</div></td>
                                                                    <td><div className='text-center '> <i style={iconFontSize} class="bi bi-body-text"></i> </div></td>
                                                                </tr>
                                                                <tr className='iconcolor-vip'>
                                                                    <td><div className='ms-2'>Able to change your username.</div></td>
                                                                    <td><div className='text-center '> <i style={iconFontSize} class="bi bi-collection-fill"></i> </div> </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="d-flex justify-content-center">
                                                            <button type='button' className='text-dark text-center mb-3  btn btn-outline-danger'> <a className='text-decoration-none text-dark' href="https://google.com" >Buy VIP</a> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/**2nd COLUMN */}
                                        <div className='col-lg-4 col-md-7 col-sm-10  h-200'>
                                            <div className=' '>
                                                <div className='d-flex justify-content-center mb-3 '> <span id="bestvaluetag" className='badge rounded-pill bg-warning border border-dark fs-6 '>Best Value</span> </div>
                                                <div id="thebordermiddle">
                                                    <div className='d-inline-flex  p-2 w-100 gradient-custom-7 justify-content-between fw-bold'>
                                                        <div className='fs-5 ms-2 text-white'>AQUA</div>
                                                        <div style={darkHighlight} className='fs-5 text-white '>$35.00</div>
                                                    </div>

                                                    <div id='borderRadius' className=' bg-body '>
                                                        <div className='row '>
                                                            <table className='table '>
                                                                <tbody id="content" className=''>
                                                                    <tr className='border border-white'>
                                                                        <td><div className='ms-2 '> Length:</div></td>
                                                                        <td><div className='text-center '> Lifetime </div></td>
                                                                    </tr>
                                                                    <tr className='border border-white bgColorBar '>
                                                                        <td colSpan={2}><div className=' text-center text-white text-nowrap'><span style={AQUAColor}>AQUA</span> Userbar</div></td>
                                                                        {/**colSpan allows me to use the full width of the row! This the right way to code for text-center!!*/}
                                                                    </tr>

                                                                    <tr className='border border-white '>
                                                                        <td colSpan={2}><div id="vipMargin" className='text-center'><img src={AQUAbanner} className='img-fluid' width="220" /></div></td>

                                                                    </tr>

                                                                    <tr className='bgColorBar '>
                                                                        <td colSpan={2}><div className='text-center text-white text-nowrap'><span style={AQUAColor}>AQUA</span> Upgrade Perks</div></td>

                                                                    </tr>
                                                                    <tr className=' '>
                                                                        <td><div className='ms-2 '> A new cool username style.</div></td>
                                                                        <td><div style={AQUAColor} className=' text-center '>John&nbsp;Doe</div></td>
                                                                    </tr>
                                                                    <tr className='iconcolor-aqua   '>
                                                                        <td><div className='ms-2'> <span style={AQUAColor}>AQUA</span> Award </div></td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class=" bi bi-gem"></i> </div></td>
                                                                    </tr>
                                                                    <tr className='iconcolor-aqua'>
                                                                        <td><div className='ms-2 '> Bypass the requirements to unlock hidden content.</div></td>
                                                                        <td> <div className='text-center mt-1 '> <i style={iconFontSize} class="bi bi-lock-fill"></i> </div>  </td>
                                                                    </tr>
                                                                    <tr className='iconcolor-aqua'>
                                                                        <td><div className='ms-2 mb-2 mt-1'>Access to <span style={AQUAColor}>VIP</span> exclusive forums. </div> </td>
                                                                        <td><div className='text-center'> <i style={iconFontSize} class="bi bi-star-fill"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className='iconcolor-aqua'>
                                                                        <td><div className='ms-2'>Storage for 5,000 messages.</div> </td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-envelope-check-fill"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className='iconcolor-aqua'>
                                                                        <td><div className='ms-2'>Able to change display name 1 time every month.</div></td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-body-text"></i> </div></td>
                                                                    </tr>
                                                                    <tr className='iconcolor-aqua'>
                                                                        <td><div className='ms-2'>Able to change your username.</div></td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-collection-fill"></i> </div></td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div style={AQUAColor} className='ms-2 '>Able to choose cover page</div></td>
                                                                        <td>{/**100% width border line*/}</td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div style={AQUAColor} className='ms-2 '>Can rename to banned members</div></td>
                                                                        <td>{/**100% width  border line*/}</td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div style={AQUAColor} className='ms-2 '>Ability to change the color of your userbar</div></td>
                                                                        <td>{/**100% width border line */}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="d-flex justify-content-center">
                                                                <button type='button' className='text-dark text-center mb-3  btn btn-outline-info'> <a className='text-decoration-none text-dark' href="https://google.com" >Buy AQUA</a> </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/**3rd COLUMN */}
                                        <div className='col-lg-4 col-md-7 col-sm-10  '>
                                            <div className=' my-5 border-0 '>
                                                <div id="theborderend" className='card my-5 '>
                                                    <div className='d-inline-flex  p-2 w-100 gradient-custom-6 justify-content-between fw-bold'>
                                                        <div className='fs-5 ms-2 text-white'>NOVA</div>
                                                        <div style={darkHighlight} className='fs-5 text-white '>$50.00</div>
                                                    </div>
                                                    <div id='borderRadius' className='  '>
                                                        <div className='row '>
                                                            <table className='table '>
                                                                <tbody id="content" className=''>
                                                                    <tr className='border border-white'>
                                                                        <td><div className='ms-2 '> Length:</div></td>
                                                                        <td><div className='text-center '> Lifetime </div></td>
                                                                    </tr>
                                                                    <tr className='border border-white bgColorBar '>
                                                                        <td colSpan={2}><div className=' text-center text-white text-nowrap'><span style={NOVAColor}>NOVA</span> Userbar</div></td>
                                                                        {/**colSpan allows me to use the full width of the row! This the right way to code for text-center!!*/}
                                                                    </tr>

                                                                    <tr className='border border-white '>
                                                                        <td colSpan={2}><div id="vipMargin" className='text-center'><img src={NOVAbanner} className='img-fluid' width="220" /></div></td>

                                                                    </tr>

                                                                    <tr className=' bgColorBar '>
                                                                        <td colSpan={2}><div className='text-center text-white text-nowrap'><span style={NOVAColor}>NOVA</span> Upgrade Perks</div></td>

                                                                    </tr>
                                                                    <tr className=' '>
                                                                        <td><div className='ms-2 '> A new cool username style.</div></td>
                                                                        <td><div style={NOVAColor} className=' text-center '>John&nbsp;Doe</div></td>
                                                                    </tr>
                                                                    <tr className=' iconcolor-nova  '>
                                                                        <td> <div className='ms-2'> <span style={NOVAColor}>NOVA</span> Award </div></td>
                                                                        <td> <div className='text-center '> <i style={iconFontSize} class=" bi bi-gem"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className='iconcolor-nova'>
                                                                        <td> <div className='ms-2 '> Bypass the requirements to unlock hidden content.</div>  </td>
                                                                        <td> <div className='text-center mt-1 '> <i style={iconFontSize} class="bi bi-lock-fill"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className='iconcolor-nova'>
                                                                        <td><div className='ms-2 mb-2 mt-1'>Access to <span style={NOVAColor}>NOVA</span> exclusive forums. </div> </td>
                                                                        <td><div className='text-center'> <i style={iconFontSize} class="bi bi-star-fill"></i> </div></td>
                                                                    </tr>
                                                                    <tr className='iconcolor-nova'>
                                                                        <td><div className='ms-2'>Storage for 5,000 messages.</div></td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-envelope-check-fill"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className='iconcolor-nova'>
                                                                        <td><div className='ms-2'>Able to change display name 1 time every month.</div> </td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-body-text"></i> </div></td>
                                                                    </tr>
                                                                    <tr className='iconcolor-nova'>
                                                                        <td><div className='ms-2'>Able to change your username.</div></td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-collection-fill"></i> </div></td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div style={NOVAColor} className='ms-2 '>Able to choose cover page</div></td>
                                                                        <td>{/**100% width border line*/}</td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div style={NOVAColor} className='ms-2 '>Can rename to banned members</div></td>
                                                                        <td>{/**100% width  border line*/}</td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div style={NOVAColor} className='ms-2 '>Ability to change the color of your userbar</div></td>
                                                                        <td>{/**100% width border line */}</td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div style={NOVAColor} className='ms-2 '>Ability to use BBCode/Emojis in your usertitle</div></td>
                                                                        <td>{/**100% width border line*/}</td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div style={NOVAColor} className='ms-2 '>Your own personal @overflow.to email</div></td>
                                                                        <td>{/**100% width  border line*/}</td>
                                                                    </tr>


                                                                </tbody>
                                                            </table>
                                                            <div className="d-flex justify-content-center">
                                                                <button type='button' className='text-dark text-center mb-3  btn btn-outline-warning'><a className='text-decoration-none text-dark' href="https://google.com" >Buy Nova</a></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const iconFontSize = {
    fontSize: " 18px"
}

const VIPColor = {
    color: "rgb(225, 64, 199)",
    textShadow: " 0.5px 0.5px 5px rgb(225, 64, 199)"
}

const AQUAColor = {
    color: " #6991f7",
    textShadow: " 0.5px 0.5px 5px #6991f7"
}

const NOVAColor = {
    color: "rgb(212, 103, 9)",
    textShadow: " rgb(212 103 9) 1px 1px 3px"
}

const darkHighlight = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "10px",
    margin: "-8px",
}

export default Upgrade
