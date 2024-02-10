# App Envio de Pedidos de Comida por WhatsApp

Este é um aplicativo mobile desenvolvido em React Native que permite aos usuários enviar pedidos de comida por WhatsApp de forma rápida e conveniente.

## Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- Tailwind CSS
- Zustand
- Async Storage

## Funcionalidades

- Adicionar itens ao carrinho
- Remover itens do carrinho
- Validação de carrinho vazio
- Validação de endereço para entrega preenchido
- Envio de pedidos para WhatsApp da loja

## Configuração

1. Na raiz do projeto, crie um arquivo chamado `expo-env.d.ts` e adicione o seguinte código para incluir a tipagem necessária:

   ```typescript
   /// <reference types="expo/types" />
   ```
2. Configuração da variável **PHONE_NUMBER**: No arquivo **`cart.tsx`**, é necessário configurar a variável **PHONE_NUMBER** com o número de telefone para o qual os pedidos serão enviados via WhatsApp

```javascript
const PHONE_NUMBER = '5512999999999'
```

## Rodando o Projeto

Para rodar o projeto, siga os passos abaixo:

1. Certifique-se de ter o Node.js e o npm instalados em seu sistema.
2. Clone este repositório e navegue até o diretório do projeto.
3. Instale as dependências do projeto usando o comando:

   ```bash
   npm install
   ```

4. Após a instalação das dependências, inicie o servidor de desenvolvimento Expo usando o comando:

   ```bash
   npx expo start
   ```

   Isso abrirá uma página no navegador com um QR code. Você pode escanear este QR code usando o aplicativo Expo Go no seu dispositivo móvel para visualizar o aplicativo em tempo real.

5. Alternativamente, se você estiver usando um emulador Android ou iOS, você pode iniciar o aplicativo usando o comando:

   ```bash
   npx expo start --android
   ```

   ou

   ```bash
   npx expo start --ios
   ```

   Isso iniciará o aplicativo no emulador correspondente.

6. Se você não tiver o Expo Go instalado no seu dispositivo móvel, você pode baixá-lo na [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US) para dispositivos Android ou na [App Store](https://apps.apple.com/us/app/expo-go/id982107779) para dispositivos iOS.


## Estrutura do Projeto
```
pedido-lanche-nlw/
├── assets/
├── src/
│ ├── app/
│ ├── assets/
│ ├── components/
│ ├── store/
│ ├── types/
│ └── utils/
├── .gitignore
├── app.json
├── babel.config.js
├── expo-env.d.ts (deve ser criado)
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Screenshots
<table style="border: none; table-layout: fixed; height: 400px;">
  <tr>
    <td style="width: 20%;"><img src="https://github.com/wmfarinha/pedido-lanche-nlw/blob/main/screenshoots/Screenshot_20240210_102107_Expo%20Go.jpg" alt="app" style="width:100%;"></td>
    <td style="width: 20%;"><img src="https://github.com/wmfarinha/pedido-lanche-nlw/blob/main/screenshoots/Screenshot_20240210_102113_Expo%20Go.jpg" alt="app" style="width:100%;"></td>
    <td style="width: 20%;"><img src="https://github.com/wmfarinha/pedido-lanche-nlw/blob/main/screenshoots/Screenshot_20240210_102127_Expo%20Go.jpg" alt="app" style="width:100%;"></td>
    <td style="width: 20%;"><img src="https://github.com/wmfarinha/pedido-lanche-nlw/blob/main/screenshoots/Screenshot_20240210_102223_Expo%20Go.jpg" alt="app" style="width:100%;"></td>
    <td style="width: 20%;"><img src="https://github.com/wmfarinha/pedido-lanche-nlw/blob/main/screenshoots/Screenshot_20240210_102254_WhatsApp.jpg" alt="app" style="width:100%;"></td>
  </tr>
</table>

**Desenvolvido por [William Faria](https://github.com/wmfarinha)**
