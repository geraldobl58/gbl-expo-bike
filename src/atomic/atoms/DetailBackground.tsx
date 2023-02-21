import { Image } from "native-base";

import detail from "../../assets/img/detail.png";

export function DetailBackground() {
  return (
    <Image
      source={detail}
      alt="image of detail"
      position="absolute"
      top="140"
      bottom="0"
      right="0"
    />
  );
}
