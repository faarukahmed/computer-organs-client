import React from "react";

const BusinessSummaryInfo = ({ cardTitle, img, cardname }) => {
  return (
    <div className="rounded my-12">
      <div className={`card shadow-xl items-center`}>
        <figure className="pt-5 w-24">
          <img className="w-30 h-30" src={img} alt="Album" />
        </figure>
        <div className="card-body text-center">
          <h1 className="text-center text-6xl font-bold">{cardTitle}</h1>
          <h4 className="">{cardname}</h4>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummaryInfo;
