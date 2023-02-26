import { Box, Image } from "native-base";

type ImagePreviewProps = {
  showDescription: boolean;
  image: string;
};

export function ImagePreview({
  showDescription = false,
  image,
}: ImagePreviewProps) {
  return (
    <Box
      width="100%"
      height={showDescription ? "280" : "200"}
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src={image}
        width="350px"
        height="250px"
        alt="bike"
        resizeMode="contain"
        flex="1"
      />
    </Box>
  );
}
