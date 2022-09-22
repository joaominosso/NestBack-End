Esse sistema faz a manipulação de dados de um servidor.

Tais dados são separados em três tabelas:
Questões: onde o professor pode subir várias questões que ficam organizadas em um banco junto com todas as outras questões.
Atividades: Plano separado que atribui algumas questões e alunos, e tem como criador um usuário do tipo professor.
Users:podem ser alunos ou professores.

# instalação
1°->Você precisa do VsCode, Postgress e Node instalado.
2°->rode o comando "yarn" após clonar o repositório em sua máquina.
3°->Quando inicializado o Postgres vai requisitar uma senha, essa senha que você colovar é a que você vai substituir no arquivo ".env", o username é padrão, cuidado com a porta que você usa, verifique o arquivo "app.module.ts" para ver se a porta que você escolheu ao abrir o postgress é a mesma.
4°->Em seguida abra o postgress e crie um servidor chamado "class".
 oppen postgress, go to the database, and create one database called "class".
5°->Abra o terminal novamente em seu Vscode e digite "yarn start".

Pronto você ja vai consegui até mesmo pelo navegador pela URL de cada comando.

*** CUIDADO: CORS está acessível, pre-flight não é ncessária ***
