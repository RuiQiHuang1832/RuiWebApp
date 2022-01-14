import React, { Component } from 'react'
import '../styling/Tos.css'
export class Tos extends Component {
    render() {
        return (
            <>
            <section id="backgroundColor">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-11'>
                            <div className='card gradient border border-dark border-2' style={{ borderRadius: "10px", margin: "30px auto" }}>
                                <div className='card-body ' >
                                    <h5 className='d-flex justify-content-center text-decoration-underline mt-3 '>Terms of Service</h5>
                                    <p className='text-muted fs-5'>1. Terms</p>
                                    <p className='' style={fontSize}>By accessing the website at https://Overflow.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, 
                                        and agree that you are responsible for compliance with any applicable local laws. 
                                        If you do not agree with any of these terms, you are prohibited from using or accessing this site. 
                                        The materials contained in this website are protected by applicable copyright and trademark law.</p>
                                    <p className='text-muted fs-5'>2. Use License</p>    
                                    <p className='' style={fontSize}>Permission is granted to temporarily download one copy of the materials (information or software) on Overflow.com's website for personal, non-commercial transitory viewing only. 
                                        This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); 
                                        attempt to decompile or reverse engineer any software contained on Overflow.com's website; remove any copyright or other proprietary notations from the materials; 
                                        or transfer the materials to another person or "mirror" the materials on any other server. This license shall automatically terminate 
                                        if you violate any of these restrictions and may be terminated by Overflow.com at any time. Upon terminating your viewing of these materials or upon the termination of this license, 
                                        you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                                        <p className='text-muted fs-5'>3. Disclaimer</p>  
                                        <p className='' style={fontSize}>The materials on Overflow.com's website are provided on an 'as is' basis. Overflow.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, 
                                            fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. 
                                            Further, Overflow.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials 
                                            on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                                            <p className='text-muted fs-5'>4. Limitations</p>  
                                            <p className='' style={fontSize}>In no event shall Overflow.com or its suppliers be liable for any damages (including, without limitation, 
                                                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 
                                                Overflow.com's website, even if Overflow.com or a Overflow.com authorized representative has been notified orally or in writing of the 
                                                possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or 
                                                limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                                         <p className='text-muted fs-5'> 5. Accuracy of materials</p>   
                                         <p className='' style={fontSize}>The materials appearing on Overflow.com's website could include technical, typographical, or photographic errors. 
                                             Overflow.com does not warrant that any of the materials on its website are accurate, complete or current. Overflow.com may make changes to the materials contained on its website at any time without notice. 
                                             However Overflow.com does not make any commitment to update the materials.</p>            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </>
        )
    }
}

const fontSize = {
        fontSize:'16px'
}

export default Tos
