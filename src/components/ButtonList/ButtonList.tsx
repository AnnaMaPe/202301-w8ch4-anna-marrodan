import { buttonLabels } from "../../data/buttonLabels";
import { Button } from "../Button/Button";
import { ButtonListStyled } from "./ButtonListStyled";

export const ButtonList = (): JSX.Element => {
  return (
    <ButtonListStyled>
      {buttonLabels.map((button, position) => (
        <li key={position}>
          <Button label={button} />
        </li>
      ))}
    </ButtonListStyled>
  );
};
