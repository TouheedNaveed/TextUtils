import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom';


export default function Services(props) {
    return (
        <>
            <div className="heading text-center">
                <h1 style={{ color: props.mode === 'dark' ? 'white' : "black" }}>{props.heading}</h1>
            </div>
            <div className='container d-flex justify-content-between gap-3 mt-5' >
                <div className="card w-25" style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#212529' : 'white' }}>
                    <div className="img">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/0*WN1FHsl90CP2ApOx" className="card-img-top" alt="text to speech" />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 className="card-title">Text to Speech</h5>
                            <p className="card-text">You can turn your text to speech by clicking speech functionality.</p>
                        </div>
                        <Link to="/"><button className="btn btn-primary">Speech Text</button></Link>
                    </div>
                </div>
                <div className="card w-25" style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#212529' : 'white' }}>
                    <div className="img">
                        <img src="https://png.pngtree.com/png-vector/20220605/ourmid/pngtree-clear-text-effect-editable-png-image_230846.png" className="card-img-top" alt="clear text" />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 className="card-title">Clear Text</h5>
                            <p className="card-text">You can clear your text by clicking clear functionality</p>
                        </div>

                        <Link to="/"><button className="btn btn-primary">Clear Text</button></Link>
                    </div>
                </div>
                <div className="card w-25" style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#212529' : 'white' }}>
                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1K3N14dXLIpkSujH0xZbzTPmm7ZOM35D51Q&s" className="card-img-top" alt="text to UpperCase" />
                    </div>
                    <div className="card-body ">
                        <h5 className="card-title">Text to UpperCase</h5>
                        <p className="card-text">You can turn your text to Uppercase by clicking Uppercase functionality</p>
                        <Link to="/"><button className="btn btn-primary">Text to Uppercase</button></Link>
                    </div>
                </div>
                <div className="card w-25" style={{ color: props.mode === 'dark' ? 'white' : "black", backgroundColor: props.mode === 'dark' ? '#212529' : 'white' }}>
                    <div className="img">
                        <img src="https://st2.depositphotos.com/6922808/49398/i/450/depositphotos_493980808-stock-photo-lowercase-letter-alphabet-written-chalk.jpg" className="card-img-top" alt="text to LowerCase" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Text to LowerCase</h5>
                        <p className="card-text">You can turn your text to LowerCase by clicking LowerCase functionality</p>
                        <Link to="/"><button className="btn btn-primary">Text to LowerCase</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
