import React from 'react'
import './About.css'

export default function About(props) {
    return (
        <>
            <div className="heading"><h1 style={{ color: props.mode === 'dark' ? 'white' : "black"}}>About Us</h1></div>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }}>
                    <h2 className="accordion-header">
                        <button style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }}>
                    <h2 className="accordion-header">
                        <button style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }}>
                    <h2 className="accordion-header">
                        <button style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }}>
                    <h2 className="accordion-header">
                        <button style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Contact Us
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }}>
                    <h2 className="accordion-header">
                        <button style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#474c52' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            FAQs
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
