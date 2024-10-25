# Script PowerShell para facilitar a criacao de commits semanticos

Write-Host "Selecione o tipo de commit:"
Write-Host "1. feat: Novo recurso"
Write-Host "2. fix: Correcao de bug"
Write-Host "3. docs: Documentacao"
Write-Host "4. test: Testes"
Write-Host "5. build: Build"
Write-Host "6. perf: Performance"
Write-Host "7. style: Estilo de codigo"
Write-Host "8. refactor: Refatoracao"
Write-Host "9. chore: Tarefas"
Write-Host "10. ci: Integracao continua"
Write-Host "11. raw: Dados RAW"
Write-Host "12. cleanup: Limpeza de codigo"
Write-Host "13. remove: Remocao de arquivos"
Write-Host ""

$commit_type = Read-Host "Digite o numero correspondente ao tipo de commit"

switch ($commit_type) {
    1 { $type="feat" }
    2 { $type="fix" }
    3 { $type="docs" }
    4 { $type="test" }
    5 { $type="build" }
    6 { $type="perf" }
    7 { $type="style" }
    8 { $type="refactor" }
    9 { $type="chore" }
    10 { $type="ci" }
    11 { $type="raw" }
    12 { $type="cleanup" }
    13 { $type="remove" }
    default { Write-Host "Tipo de commit invalido"; exit }
}

$message = Read-Host "Digite a mensagem do commit"
$commit_message = "[$type]: $message"
git commit -a -m "$commit_message"

Write-Host "Commit criado com sucesso: $commit_message"
