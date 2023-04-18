interface IScrollItemsAcrossProps {
  text: string;
}

const ScrollItemsAcross = ({ text }: IScrollItemsAcrossProps) => {
  return (
    <div className="section-container section-container_secondary-color">
      <h1>{text}</h1>
    </div>
  );
};

export default ScrollItemsAcross;
