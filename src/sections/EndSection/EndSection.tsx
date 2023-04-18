interface IEndSectionProps {
    text: string;
  }
  
  const EndSection = ({ text }: IEndSectionProps) => {
    return (
      <div className="section-container section-container_main-color">
        <h1>{text}</h1>
      </div>
    );
  };
  
  export default EndSection;
  