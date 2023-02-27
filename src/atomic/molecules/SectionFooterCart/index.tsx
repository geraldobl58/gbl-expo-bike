import { HStack, Text } from "native-base";

type SectionFooterCartProps = {
  title: string;
  value: string;
};

export function SectionFooterCart({ title, value }: SectionFooterCartProps) {
  return (
    <HStack justifyContent="space-between" mb="4">
      <Text fontSize="sm" color="white" bold>
        {title}
      </Text>
      <Text fontSize="sm" color="white:alpha.50">
        {value}
      </Text>
    </HStack>
  );
}
