import React from 'react';
import Button from 'react-bootstrap/Button';
import BucketList from './BucketList'

const Landing = props => {
    return (
        <div className="">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="f1 fw6">Let's Surply those in need!</h1>
                    <p className="f3 fw5">
                    Send your surplus to people in need!
                    </p>
                    <Button variant="primary" size="lg" className="mh3 grow" href="/family">
                            Give surplus
                    </Button>
                    <Button variant="primary" size="lg" className="mh3 grow" href="/family">
                            Calculate surplus
                    </Button>
    
                    <div>
                    </div>
                </div>
            </div>
            <BucketList/>

        </div>
    )
}

export default Landing; 
