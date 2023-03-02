interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps): JSX.Element => {
  return <button>{label}</button>;
};
