

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-1/3 mx-auto text-center my-4">
            <p className="text-yellow-500 italic mb-2">--{subHeading}--</p>
            <h3 className="text-4xl p-4 border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;