# Ponte Juridica - Frontend

## Proposta em poucas palavras
Ponte Juridica e uma plataforma web para aproximar solicitantes e advogados, facilitando o inicio, acompanhamento e consultoria juridica de processos.

## Sobre o projeto
Ponte Juridica e uma plataforma Web que tem como objetivo principal dar auxilio juridico para pessoas que precisam de processos novos, em andamento ou consultoria juridica em varios tipos de processos existentes.

## Como funciona
### Solicitante
O solicitante que necessita do processo cria seu cadastro e publica um "post", informando o tipo de processo e uma descricao (detalhada ou nao, a criterio da pessoa). Tambem informa os valores, tanto do pagamento principal quanto de possiveis acordos pos-processo.

### Advogado
O advogado busca os processos disponiveis na plataforma, filtrando os que se encaixam no seu perfil de especialidade e nos valores informados pelo solicitante. A partir do post, entra em contato para solicitar mais informacoes do caso e, quando necessario, documentos para os autos do processo. E proibido solicitar dados pessoais sensiveis.

## Tecnologias utilizadas
- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- React Icons
- React Toastify
- ESLint

## Como executar o projeto
### Pre-requisitos
- Node.js 18+ (recomendado 20+)
- npm

### Instalacao
```bash
npm install
```

### Ambiente de desenvolvimento
```bash
npm run dev
```
Executa o frontend localmente com hot reload.

### Build de producao
```bash
npm run build
```
Gera a versao otimizada em `dist/`.

### Preview do build
```bash
npm run preview
```
Sobe um servidor local para visualizar a build de producao.

### Lint
```bash
npm run lint
```
Executa verificacoes de padrao e qualidade de codigo.
