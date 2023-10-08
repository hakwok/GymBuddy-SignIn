interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const AdButton = ({ children, onClick, color = "info" }: Props) => {
  return (
    <button className={`btn btn-${color} btn-lg`} onClick={onClick}>
      {children}
    </button>
  );
};

export default AdButton;
