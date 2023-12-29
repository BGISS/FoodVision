import "./BlurredElipse.css";

function BlurredElipse({ color }: { color: string }) {
  const ellipseStyle = {
    background: `${color}`,
  };

  return <div className="blurred-ellipse" style={ellipseStyle}></div>;
}
export default BlurredElipse;
