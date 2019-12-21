import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  const [spec, setSpec] = useState(specials);

  return (
    <div>
      {spec.map((x, index)=>
        <SpecialButton text={x} key={index} />
      )}
    </div>
  );
};

export default Specials;
