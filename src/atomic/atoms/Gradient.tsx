import { LinearGradient } from "expo-linear-gradient";

import { useTheme } from "native-base";

type GradientProps = {
  children: React.ReactNode;
};

export function Gradient({ children }: GradientProps) {
  const { colors } = useTheme();

  return (
    <LinearGradient
      colors={[colors.ocean[100], colors.purple[100]]}
      style={{
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      {children}
    </LinearGradient>
  );
}
