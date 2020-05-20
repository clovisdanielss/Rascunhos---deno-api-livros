# Minha primeira API fake com DENO

## Instalação:

O documento de configuração lock.json assegura as versões utilizadas.

Para instalar use:
- deno cache -r --lock=lock.json dependences.ts
Para adicionar novos modulos, adicione em dependences e:
- deno cache --lock=lock.json --lock-write dependences.ts
Depois só rodar:
- deno run --allow-net main.ts