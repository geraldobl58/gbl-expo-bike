import { Button, IButtonProps } from "native-base";

type ButtonDetailProps = IButtonProps & {
  title: string;
};

export function ButtonDetail({ title, ...rest }: ButtonDetailProps) {
  return (
    <Button
      _pressed={{
        color: "primary.50",
      }}
      shadow="1"
      borderRadius="10"
      w="149"
      h="43"
      {...rest}
    >
      {title}
    </Button>
  );
}
