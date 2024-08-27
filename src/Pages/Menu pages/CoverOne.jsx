import React from 'react';



const CoverOne = ({img,  tittle }) => {
    return (
        <section>
            <div
                className="hero h-[550px] mb-24"
                style={{
                    backgroundImage: `url("${img}")`,
                }}>



                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{tittle}</h1>
                        <p className="mb-5 uppercase">
                            Would you like to try a dish?


                        </p>

                    </div>
                </div>

            </div>
           {/* <section>
           <Sectiontittle
                heading='Todays Offer'
                subHeading='Do dot miss'
            ></Sectiontittle>
           </section> */}
           

             

        </section>
    );
};

export default CoverOne;

