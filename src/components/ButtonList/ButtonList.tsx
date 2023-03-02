import { buttonLabels } from "../../data/buttonLabels";
import { Button } from "../Button/Button";

export const ButtonList = (): JSX.Element => {
  return (
    <ol>
      {buttonLabels.map((button) => (
        <li>
          <Button label={button} />
        </li>
      ))}
      ;
    </ol>
  );
};
