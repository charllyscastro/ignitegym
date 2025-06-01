# Instalação
npx create-expo-app --template

# Estrutura da aplicação

## paths tsconfig
"paths": {
    "@dtos/*": ["./src/dtos/*"],
    "@assets/*": ["./src/assets/*"],
    "@components/*": ["./src/components/*"],
    "@screens/*": ["./src/screens/*"],
    "@storage/*": ["./src/storage/*"],
    "@utils/*": ["./src/utils/*"],
    "@services/*": ["./src/services/*"],
    "@hooks/*": ["./src/hooks/*"],
    "@contexts/*": ["./src/contexts/*"],
    "@routes/*": ["./src/routes/*"]
}

## Fonts
npx expo install expo-font @expo-google-fonts/roboto

## Gluestack
npm install @gluestack-ui/themed@1.1.34 @gluestack-style/react@1.0.57 @gluestack-ui/config@1.1.19 --legacy-peer-deps

## Svg
npx expo install react-native-svg
