interface IProps {
  url: string;
  alt: string;
  className?: string;
}

const Image = ({ url, alt, className }: IProps) => {
  return <img src={url} alt={alt} className={`${className} object-cover`} height={"120px"}/>;
};

export default Image;
