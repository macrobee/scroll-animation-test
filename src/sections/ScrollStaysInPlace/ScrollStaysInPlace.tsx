interface IScrollStaysInPlaceProps {
    text: string;
  }
  
  const ScrollStaysInPlace = ({ text }: IScrollStaysInPlaceProps) => {
    return (
      <div className="section-container section-container_main-color">
        <h1>{text}</h1>
      </div>
    );
  };
  
  export default ScrollStaysInPlace;
  