import { View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

type SwipeableButtonProps = {
  children: React.ReactNode;
  leftAction: React.ReactNode;
  handleSwipe: () => void;
};

export function SwipeableButton({
  children,
  leftAction,
  handleSwipe,
}: SwipeableButtonProps) {
  return (
    <View>
      <Swipeable
        rightThreshold={145}
        overshootRight={false}
        onSwipeableLeftOpen={handleSwipe}
        renderLeftActions={() => leftAction}
      >
        {children}
      </Swipeable>
    </View>
  );
}
