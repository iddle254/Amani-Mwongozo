import React from "react";
import ContactComponent from "../components/engage/Contact.component";
import EngageHeaderComponent from "../components/engage/EngageHeader.component";
import SnackBarComponent from "../components/engage/SnackBar.component";
import Testimonial from "../components/engage/Testimonial.component";
import SectionCarousel from "../components/engage/SectionCarousel.js";

function Engage() {
  return (
    <div>
      <EngageHeaderComponent />
      <ContactComponent />
      {/* <Testimonial /> */}
    </div>
  );
}

export default Engage;
