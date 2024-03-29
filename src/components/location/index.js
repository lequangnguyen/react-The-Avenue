/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0790798728653!2d105.79817921533224!3d21.029521593127384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab43fcd71c37%3A0x1c1c754b0ff490c8!2zMTI1IE5ndXnhu4VuIEtoYW5nLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1566871475673!5m2!1svi!2s"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;