import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'To get our feet wet, let’s try passing some data from our Board component to our Square component.',
            'To get our feet wet, let’s try passing some data from our Board component to our Square component.',
            'To get our feet wet, let’s try passing some data from our Board component to our Square component.'
        ],
        linkto: [
            'https://vi.reactjs.org/tutorial/tutorial.html',
            'https://www.react-reveal.com/',
            'http://tratu.coviet.vn/hoc-tieng-anh/tu-dien/lac-viet/A-V/reveal.html'
        ],
        delay: [500, 0, 500]
    }

    showBoxes = () => {
        return this.state.prices.map((box, i) => {
            return (
                <Zoom delay={this.state.delay[i]} key={i}>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <span>${this.state.prices[i]}</span>
                                <span>{this.state.positions[i]}</span>
                            </div>
                            <div className="pricing_description">
                                {this.state.desc[i]}
                            </div>
                            <div className="pricing_buttons">
                                <MyButton
                                    text="Purchase"
                                    bck="#ffa800"
                                    color="#ffffff"
                                    link={this.state.linkto[i]}
                                />
                            </div>
                        </div>
                    </div>
                </Zoom>

            )
        })
    }

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;