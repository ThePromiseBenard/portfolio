interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return <div>layout d {children}</div>;
};
export default layout;
