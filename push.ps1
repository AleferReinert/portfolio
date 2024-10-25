Write-Host "Selecione o tipo de commit:"
Write-Host "1. build: Mudancas no sistema de construcao ou dependencias"
Write-Host "2. chore: Atualizacoes em tarefas de build e ferramentas"
Write-Host "3. ci: Mudancas em scripts de integracao continua"
Write-Host "4. docs: Atualizacoes na documentacao"
Write-Host "5. feat: Novo recurso ou funcionalidade"
Write-Host "6. fix: Correcao de bug"
Write-Host "7. perf: Melhorias de desempenho"
Write-Host "8. refactor: Alteracoes de codigo sem adicao de recursos"
Write-Host "9. revert: Reverte um commit anterior"
Write-Host "10. style: Mudancas de estilo ou formatacao"
Write-Host "11. test: Adicao ou correcao de testes"
Write-Host ""

$commit_type = Read-Host "Digite o numero correspondente ao tipo de commit"

switch ($commit_type) {
    1 { $type="build" }
    2 { $type="chore" }
    3 { $type="ci" }
    4 { $type="docs" }
    5 { $type="feat" }
    6 { $type="fix" }
    7 { $type="perf" }
    8 { $type="refactor" }
    9 { $type="revert" }
    10 { $type="style" }
    11 { $type="test" }
    default { Write-Host "Tipo de commit invalido"; exit }
}

$message = Read-Host "Digite a mensagem do commit"
$commit_message = "${type}: $message"

# Passos antes do commit:
# Executa o lint
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro no lint. Commit cancelado."
    exit
}

# Executa os testes
npm run test
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro nos testes. Commit cancelado."
    exit
}

# Se tudo estiver ok, o commit e realizado
Write-Host "Commit criado com sucesso!"
