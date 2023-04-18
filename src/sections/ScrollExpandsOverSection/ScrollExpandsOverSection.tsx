interface IScrollExpandsOverSectionProps {
    text: string;
  }
  
  const ScrollExpandsOverSection = ({ text }: IScrollExpandsOverSectionProps) => {
    return (
      <div className="section-container section-container_secondary-color">
        <h1>{text}</h1>
      </div>
    );
  };
  
  export default ScrollExpandsOverSection;
  