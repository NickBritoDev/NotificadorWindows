# Notificação no Windows com JavaScript

Este projeto apresenta um exemplo simples de como criar e exibir notificações no Windows usando JavaScript. O script demonstra como criar uma notificação personalizada, interativa e como agendar a exibição de uma notificação após um certo período de tempo.

## Como Funciona

1. A função `exibirNotificacao()` é definida para criar e mostrar a notificação.
2. Opções personalizadas, como o conteúdo do corpo e o ícone da notificação, são configuradas.
3. A notificação é criada usando o construtor `Notification` com o título e opções.
4. Um evento `onclick` é configurado para fechar a notificação ao ser clicada.
5. Um temporizador é usado para abrir uma nova janela após 5 segundos, levando à documentação de JavaScript.
6. Uma verificação de permissão é realizada após 1 segundo:
   - Se a permissão foi concedida, a notificação é exibida imediatamente.
   - Se a permissão não foi concedida, uma solicitação é feita ao usuário.
     - Se o usuário permitir, a notificação é exibida.

## Uso

1. Abra o arquivo `index.html` em um navegador compatível.
2. Você verá uma notificação após um atraso de 5 segundos.
3. Você pode clicar na notificação para fechá-la.
4. Após 5 segundos, a notificação será fechada automaticamente e uma nova janela será aberta com a documentação de JavaScript.

## Personalização

- Modifique a mensagem e o ícone da notificação no código, ajustando as opções na função `exibirNotificacao()`.
- O link que é aberto após 5 segundos pode ser substituído por outra URL de sua escolha.

## Observações

- Certifique-se de que seu navegador esteja configurado para permitir notificações para que o exemplo funcione corretamente.

## Recursos

- [Documentação de Notificações Web](https://developer.mozilla.org/pt-BR/docs/Web/API/notification)
- [Documentação de JavaScript na MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
