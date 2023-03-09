**INICIALIZAR PROJETO EM REACT**

https://vitejs.dev/guide/

npm create vite@latest
faz o processo q ele manda

cd . (entrar na pasta criada)
code . (fazer abrir o vscode na pasta)
fecha o outro cmd 

instalar dependencias do projeto:
npm i (instala as dependencias que estao contidas no pack de json)
npm run dev (pra rodar o projeto)
``VITE v4.1.4  ready in 587 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help``
abre a local host em local

https://reactrouter.com/en/main
REACT router DOM

npm install react-router-dom (instala o router dom)
npm run dev (se n fez antes)
 
*Component Styling (styled-components)*

npm install --save styled-components

*Procedencias*

Deletar assets em src e deletar o svg em public pq eles ocupam espaco na pagina
apaga tudo dentro de App.jsx exceto a funcao app e o export do final

Cria uma pasta styles dentro de src e cria 2 JS global e theme.js

Criar uma pasta Pages com a pagina App (e aqui vai outras paginas do seu site) com index.jsx e styles.js

Configurar letra no index.html (importar fontes)

Importar o style global.js no main.jsx (import {App} from './Pages/App';) e criar a tag (<GlobalStyle />)

Importar a pagina principal dentro de App (import {App} from './Pages/App')

Criar o provider (ThemesProvider) do styled_component para prover ao global.js e, portanto, ao main.jsx para prover o que tem dentro do arquivo (temas)para a aplicacao toda. TEM QUE EMBRULHAR TUDO QUE TIVER DENTRO DA SUA APLICACAO NO PROVIDER





