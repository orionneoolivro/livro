#!/bin/bash

# Exibe cada comando que está sendo executado
set -x

# Instala as dependências
echo "Instalando dependências..."
npm install

# Verifica se a instalação foi bem-sucedida
if [ $? -ne 0 ]; then
    echo "Erro: Falha ao instalar as dependências."
    exit 1
fi

# Executa o build
echo "Executando o build..."
npm run build

# Verifica se o build foi bem-sucedido
if [ $? -ne 0 ]; then
    echo "Erro: Falha ao executar o build."
    exit 1
fi

echo "Build concluído com sucesso na pasta landing/build!" 