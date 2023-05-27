import React from "react";
import Image from "next/image";
import locationImg from '../public/HOL2.jpg';

const Directions = () => {
  return (
    <main>
      <p>
        The conference will be held in room HOL 190 of the House of Learning (HOL) on the Kamloops
        campus at Thompson Rivers University.
      </p>
      <Image
        src={locationImg} alt='kamloops'
        priority width={300}
        style={{ objectFit: "contain", width: '100%', height: '40vh'}}
      />
      <div className="googleMapDiv">
        <iframe className="googleMapFrame" 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10114.354520221586!2d-120.36535299999998!3d50.671898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2cf508b7182b%3A0x15dbc030617b7e44!2sHouse%20of%20Learning%2C%20Kamloops%2C%20BC%20V2C%206N6!5e0!3m2!1sen!2sca!4v1685213923542!5m2!1sen!2sca" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </main>
  )
}
export default Directions;
