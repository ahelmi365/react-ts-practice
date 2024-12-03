interface IProps {
  colors: string[];
}

const ViewSelectedColors = ({ colors }: IProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {colors.map((color) => (
        <span key={color} style={{ background: color }} className="rounded px-2 text-sm text-white">
          {color}
        </span>
      ))}
    </div>
  );
};

export default ViewSelectedColors;
