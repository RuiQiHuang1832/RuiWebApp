import React, { Component } from 'react'

export class Faq extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row justify-content-center '>
                        <div className='col-9'>
                            <p style={{ fontSize: "35px" }} className='text-center fw-bold p-5  '>Frequently Asked Questions</p>
                            <h5 className=' text-center p-5'> Got a question? We've got answers. If you have some other questions, contact us at <a href="#!">contact@Overflow.com.</a></h5>
                            <div className='accordion pb-5 px-5'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header'>
                                        <button className='accordion-button collapsed fw-bold fs-6' type='button' data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                            What is the purpose of this site?
                                        </button>

                                    </h2>
                                    <div className='accordion-collapse collapse ' id='collapseOne'>
                                        <div className='accordion-body'>
                                            <div> For fun. </div>

                                        </div>
                                    </div>

                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header'>
                                        <button className='accordion-button collapsed fw-bold fs-6' type='button' data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                            Can I request a refund?
                                        </button>

                                    </h2>
                                    <div className='accordion-collapse collapse ' id='collapseTwo'>
                                        <div className='accordion-body'>
                                            <div>Unfortunately, not. We do not issue full or partial refunds.</div>

                                        </div>
                                    </div>

                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header'>
                                        <button className='accordion-button collapsed fw-bold fs-6' type='button' data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                            Can I cancel my subscription?
                                        </button>

                                    </h2>
                                    <div className='accordion-collapse collapse ' id='collapseThree'>
                                        <div className='accordion-body'>
                                            <div> You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month.
                                                You will continue to have access to your account until your current subscription expires.</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header'>
                                        <button className='accordion-button collapsed fw-bold fs-6' type='button' data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                        Why are threads locked for me, while others can reply?
                                        </button>

                                    </h2>
                                    <div className='accordion-collapse collapse ' id='collapseFour'>
                                        <div className='accordion-body'>
                                            <div> Particular sections require a post count to take part into. E.g. it requires 10 posts to participate (reply to threads and create threads).</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header'>
                                        <button className='accordion-button collapsed fw-bold fs-6' type='button' data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                        Can I donate towards the site/the staff team/the moderators?
                                        </button>

                                    </h2>
                                    <div className='accordion-collapse collapse ' id='collapseFive'>
                                        <div className='accordion-body'>
                                            <div> Yes, donations towards the site are handled by petrichor please PM him with the title "Donation". If you want to donate towards a moderator, PM the mod you choose. 
                                          <p/><div className='text-danger'>NOTE:</div> Donations are not the same as upgrades. You will not receive any special rank for it. Nevertheless, you will be awarded the donator award.  
Our site does not officially feature donations towards mods. Therefore you won't receive anything!  
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header'>
                                        <button className='accordion-button collapsed fw-bold fs-6' type='button' data-bs-toggle="collapse" data-bs-target="#collapseSix">
                                            Can I use my custom domain?
                                        </button>

                                    </h2>
                                    <div className='accordion-collapse collapse ' id='collapseSix'>
                                        <div className='accordion-body'>
                                            <div> Absolutely! You can connect your custom domain on the platform in all paid plans.</div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default Faq