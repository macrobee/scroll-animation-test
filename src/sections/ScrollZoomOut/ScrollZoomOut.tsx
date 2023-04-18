interface IScrollZoomOutProps {
    text: string;
  }
  
  const ScrollZoomOut = ({ text }: IScrollZoomOutProps) => {
    return (
      <div className="section-container section-container_main-color">
        <h1>{text}</h1>
      </div>
    );
  };
  
  export default ScrollZoomOut;
  