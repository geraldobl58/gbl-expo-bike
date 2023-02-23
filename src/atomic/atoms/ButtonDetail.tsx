import { Button } from "native-base";

type ButtonDetailProps = {
  title: string;
};

export function ButtonDetail({ title }: ButtonDetailProps) {
  return (
    <Button
      _pressed={{
        color: "primary.50",
      }}
      shadow="1"
      borderRadius="10"
      w="149"
      h="43"
    >
      {title}
    </Button>
  );
}
