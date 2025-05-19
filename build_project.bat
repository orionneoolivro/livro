@echo off

REM Este script muda para a pasta 'landing', instala as dependências e executa o build.
REM É útil para testar o processo de build localmente, similar ao que o Render faz.

echo Mudando para o diretório landing...
cd landing

IF %ERRORLEVEL% NEQ 0 (
    echo Erro: Nao foi possivel mudar para o diretorio 'landing'. Certifique-se de que a pasta existe.
    goto :eof
)

echo Instalando dependencias (npm install)...
npm install

IF %ERRORLEVEL% NEQ 0 (
    echo Erro: Nao foi possivel instalar as dependencias.
    goto :eof
)

echo Executando o build (npm run build)...
npm run build

IF %ERRORLEVEL% NEQ 0 (
    echo Erro: Nao foi possivel executar o build.
    goto :eof
)

echo Build concluido com sucesso na pasta landing/build!

REM O script termina aqui. Para servir o site localmente, voce pode usar um servidor web simples
REM que aponte para a pasta 'landing/build', ou configurar um Static Site no Render. 