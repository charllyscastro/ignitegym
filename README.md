# Instalação
npx create-expo-app --template

# Estrutura da aplicação

## paths
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