interface DividerXProps {
  className: string;
}

const DividerX = ({ className }: DividerXProps) => {
  return (
    <div
      className={`w-10 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full ${className}`}
    ></div>
  );
};

export default DividerX;
