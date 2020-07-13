import React, { Component } from 'react';
import introSvg from '../assets/img/intro-img.svg';
import '../../src/App.css'

export class IntroSections extends Component {
    render() {
        return (
            <div>
                <div id="intro" class="clearfix">
                <div class="container d-flex h-100">
                    <div class="row justify-content-center align-self-center">
                    <div class="col-md-6 intro-info order-md-first order-last">
                        <h2>Rapid Solutions<br />for Your<span> Business!</span></h2>
                        <div>
                        <a href="#about" class="btn-get-started scrollto">Get Started</a>
                        </div>
                    </div>
                    <div class="col-md-6 intro-img order-md-last order-first">
                        <img src={introSvg} alt="" class="img-fluid"/>
                    </div>
                    </div>

                </div>
                </div>
            </div>
        )
    }
}

export default IntroSections
