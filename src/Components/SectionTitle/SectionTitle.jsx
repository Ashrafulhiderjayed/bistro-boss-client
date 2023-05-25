

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <p className="text-yellow-500 italic">{subHeading}</p>
            <h3 className="text-4xl">{heading}</h3>
        </div>
    );
};

export default SectionTitle;