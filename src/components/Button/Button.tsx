import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button>{label}</button>
    </ButtonStyled>
  );
};
