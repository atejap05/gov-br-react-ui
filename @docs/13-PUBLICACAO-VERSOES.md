# Publicação de Versões

Este guia detalha o processo completo para publicar novas versões da biblioteca **gov-br-react-ui** no NPM e atualizar o Storybook no Chromatic.

## 📋 Informações Atuais

- **Versão Atual**: `0.0.8-beta`
- **Package NPM**: [gov-br-react-ui](https://www.npmjs.com/package/gov-br-react-ui)
- **Storybook Chromatic**: [Visualizar](https://main--660d686fca703150f4bd09bd.chromatic.com)
- **Project ID Chromatic**: `Project:660d686fca703150f4bd09bd`
- **Token Chromatic**: Configurado em `package.json` script

## 🎯 Visão Geral do Processo

O processo de publicação envolve:

1. **Preparação**: Testes, lint, build
2. **Versionamento**: Atualizar versão seguindo SemVer
3. **Build**: Compilar biblioteca
4. **Publicação NPM**: Publicar no registro NPM
5. **Publicação Storybook**: Atualizar no Chromatic
6. **Git**: Criar tag e commit

## 📊 Versionamento Semântico (SemVer)

Seguimos [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`

### Estrutura de Versão

```
MAJOR.MINOR.PATCH[-PRERELEASE]
```

### Tipos de Versão

#### Patch (0.0.8 → 0.0.9)

**Quando usar:**
- Correções de bugs
- Correções de segurança
- Ajustes de documentação
- Melhorias de performance sem mudanças de API

**Exemplo:**
```bash
# Versão atual: 0.0.8-beta
# Nova versão: 0.0.9-beta
npm version patch
```

#### Minor (0.0.8 → 0.1.0)

**Quando usar:**
- Novos componentes
- Novas funcionalidades em componentes existentes
- Novas props (não breaking)
- Melhorias que mantêm compatibilidade

**Exemplo:**
```bash
# Versão atual: 0.0.8-beta
# Nova versão: 0.1.0-beta
npm version minor
```

#### Major (0.0.8 → 1.0.0)

**Quando usar:**
- Breaking changes
- Mudanças de API incompatíveis
- Remoção de componentes ou props
- Mudanças significativas de comportamento

**Exemplo:**
```bash
# Versão atual: 0.0.8-beta
# Nova versão: 1.0.0
npm version major
```

### Pré-releases (Beta/Alpha)

#### Beta (0.0.8-beta → 0.0.9-beta)

**Quando usar:**
- Versões de teste antes do release estável
- Coletar feedback de usuários
- Testar em produção com usuários beta

**Publicação:**
```bash
npm publish --tag beta
```

**Instalação:**
```bash
npm install gov-br-react-ui@beta
# ou
npm install gov-br-react-ui@0.0.9-beta
```

#### Alpha (0.0.8-alpha)

**Quando usar:**
- Versões muito experimentais
- Desenvolvimento interno
- Testes de features incompletas

### Exemplos de Versionamento

```
0.0.8-beta  →  0.0.9-beta   (Patch: bug fix)
0.0.8-beta  →  0.1.0-beta   (Minor: novo componente)
0.0.8-beta  →  1.0.0        (Major: breaking change)
0.0.8-beta  →  0.0.8-beta.1 (Pré-release incrementado)
```

## ✅ Checklist Pré-Publicação

Antes de publicar, execute este checklist:

### Código

- [ ] Código testado e funcionando
- [ ] Todos os testes passando (se houver)
- [ ] Linter sem erros (`npm run lint`)
- [ ] TypeScript compila sem erros (`npm run build`)
- [ ] Storybook funciona localmente (`npm run storybook`)
- [ ] Build de produção funciona (`npm run build`)

### Documentação

- [ ] README.md atualizado (se necessário)
- [ ] Documentação em `@docs/` atualizada
- [ ] Changelog atualizado (se mantido)
- [ ] Exemplos no Storybook funcionando

### Versionamento

- [ ] Versão atual identificada (`package.json`)
- [ ] Tipo de versão determinado (patch/minor/major)
- [ ] Versão nova planejada

### Git

- [ ] Todas as mudanças commitadas
- [ ] Branch atual sincronizado com remoto
- [ ] Sem arquivos não rastreados importantes

## 🚀 Processo Passo a Passo

### Passo 1: Preparar Ambiente

```bash
# Certifique-se de estar na branch correta (geralmente main)
git checkout main
git pull origin main

# Limpar node_modules e reinstalar (opcional, mas recomendado)
rm -rf node_modules package-lock.json
npm install
```

### Passo 2: Executar Testes e Validações

```bash
# 1. Linter
npm run lint

# 2. Build (valida TypeScript e gera dist/)
npm run build

# 3. Verificar se dist/ foi criado corretamente
ls -la dist/

# 4. Testar Storybook localmente
npm run storybook
# Verificar visualmente se tudo está funcionando
```

### Passo 3: Atualizar Versão

#### Opção A: Usando npm version (Recomendado)

```bash
# Para patch
npm version patch

# Para minor
npm version minor

# Para major
npm version major
```

Isso automaticamente:
- Atualiza `package.json`
- Cria commit Git
- Cria tag Git

#### Opção B: Manual

1. Edite `package.json`:
```json
{
  "version": "0.0.9-beta"
}
```

2. Commit:
```bash
git add package.json
git commit -m "chore: atualiza versão para 0.0.9-beta"
```

3. Criar tag:
```bash
git tag v0.0.9-beta
```

### Passo 4: Build Final

```bash
# Build de produção
npm run build

# Verificar arquivos gerados
ls -la dist/
# Deve conter:
# - index.es.js
# - index.es.js.map
# - index.umd.js
# - index.umd.js.map
# - index.d.ts
```

### Passo 5: Verificar Conteúdo do Pacote

```bash
# Ver o que será publicado (dry-run)
npm pack --dry-run

# Ou criar tarball para inspeção
npm pack
# Isso cria: gov-br-react-ui-0.0.9-beta.tgz
# Você pode inspecionar o conteúdo antes de publicar
```

### Passo 6: Publicar no NPM

#### Verificar Login

```bash
# Verificar se está logado
npm whoami

# Se não estiver logado
npm login
```

#### Publicar

**Para versão beta:**
```bash
npm publish --tag beta
```

**Para versão estável:**
```bash
npm publish
```

**Para versão específica:**
```bash
npm publish --tag beta --access public
```

#### Verificar Publicação

```bash
# Verificar no NPM
npm view gov-br-react-ui

# Verificar versão específica
npm view gov-br-react-ui@0.0.9-beta

# Testar instalação
npm install gov-br-react-ui@0.0.9-beta
```

### Passo 7: Publicar Storybook no Chromatic

#### Build do Storybook

```bash
# Build estático do Storybook
npm run build-storybook

# Verificar se storybook-static/ foi criado
ls -la storybook-static/
```

#### Publicar no Chromatic

```bash
# Publicar no Chromatic
npm run chromatic

# Ou manualmente
npx chromatic --project-token=chpt_e145a2c5c679c8b
```

O Chromatic irá:
- Fazer upload do Storybook
- Capturar screenshots
- Comparar com versão anterior
- Gerar link de visualização

#### Verificar Publicação

Acesse: https://main--660d686fca703150f4bd09bd.chromatic.com

### Passo 8: Git - Push e Tags

```bash
# Push dos commits
git push origin main

# Push das tags
git push origin --tags

# Ou push de tag específica
git push origin v0.0.9-beta
```

### Passo 9: Verificação Final

- [ ] Versão publicada no NPM: https://www.npmjs.com/package/gov-br-react-ui
- [ ] Storybook atualizado: https://main--660d686fca703150f4bd09bd.chromatic.com
- [ ] Tag Git criada e pushada
- [ ] Instalação testada: `npm install gov-br-react-ui@nova-versao`

## 📝 Scripts Úteis

### Script Completo de Publicação

Você pode criar um script personalizado em `package.json`:

```json
{
  "scripts": {
    "release:patch": "npm version patch && npm run build && npm publish --tag beta && npm run chromatic && git push --follow-tags",
    "release:minor": "npm version minor && npm run build && npm publish --tag beta && npm run chromatic && git push --follow-tags",
    "release:major": "npm version major && npm run build && npm publish && npm run chromatic && git push --follow-tags"
  }
}
```

**Uso:**
```bash
npm run release:patch
npm run release:minor
npm run release:major
```

⚠️ **Atenção**: Use scripts automatizados com cuidado. Sempre revise antes de publicar.

## 🔧 Configuração do NPM

### Verificar Configurações

```bash
# Ver configurações do NPM
npm config list

# Verificar registry
npm config get registry
# Deve retornar: https://registry.npmjs.org/

# Verificar acesso
npm whoami
```

### Configurações Importantes

```bash
# Configurar registry (se necessário)
npm config set registry https://registry.npmjs.org/

# Configurar acesso público (já configurado no package.json)
# "publishConfig": { "access": "public" }
```

## 🎨 Publicação do Storybook

### Chromatic

O projeto está configurado com Chromatic para hospedagem do Storybook.

#### Configuração

Arquivo `chromatic.config.json`:
```json
{
  "projectId": "Project:660d686fca703150f4bd09bd",
  "zip": true
}
```

Token no `package.json`:
```json
{
  "scripts": {
    "chromatic": "npx chromatic --project-token=chpt_e145a2c5c679c8b"
  }
}
```

#### Processo

1. **Build do Storybook**:
   ```bash
   npm run build-storybook
   ```

2. **Publicar no Chromatic**:
   ```bash
   npm run chromatic
   ```

3. **Aguardar processamento**: O Chromatic processa e publica automaticamente

4. **Acessar**: https://main--660d686fca703150f4bd09bd.chromatic.com

#### Opções do Chromatic

```bash
# Publicar sem testes visuais
npx chromatic --project-token=chpt_e145a2c5c679c8b --exit-zero-on-changes

# Publicar com build específico
npx chromatic --project-token=chpt_e145a2c5c679c8b --build-script-name=build-storybook

# Ver ajuda
npx chromatic --help
```

### Build Estático Alternativo

Se preferir hospedar o Storybook em outro lugar:

```bash
# Build estático
npm run build-storybook

# Isso cria storybook-static/ que pode ser servido em:
# - Netlify
# - Vercel
# - GitHub Pages
# - Qualquer servidor estático
```

## 🐛 Troubleshooting

### Erro: "Package name already exists"

**Problema**: Versão já publicada.

**Solução**: Use uma versão diferente ou incremente:
```bash
npm version patch
```

### Erro: "403 Forbidden" no NPM

**Problema**: Sem permissão para publicar.

**Soluções**:
1. Verificar login: `npm whoami`
2. Verificar se é owner do pacote
3. Verificar `publishConfig.access` no `package.json`

### Erro: "You must verify your email"

**Problema**: Email não verificado no NPM.

**Solução**: Verificar email em https://www.npmjs.com/settings/[seu-usuario]

### Erro no Chromatic: "Project not found"

**Problema**: Token ou Project ID incorreto.

**Solução**: Verificar:
- Token em `package.json` script
- Project ID em `chromatic.config.json`
- Acesso à conta Chromatic

### Build falha antes de publicar

**Soluções**:
```bash
# Limpar tudo
rm -rf node_modules dist storybook-static

# Reinstalar
npm install

# Build novamente
npm run build
```

### Versão não aparece no NPM

**Problema**: Publicação pode levar alguns minutos.

**Soluções**:
1. Aguardar 2-5 minutos
2. Verificar: `npm view gov-br-react-ui versions`
3. Verificar se tag foi usada corretamente

### Storybook não atualiza no Chromatic

**Soluções**:
1. Verificar build do Storybook: `npm run build-storybook`
2. Verificar se `storybook-static/` foi criado
3. Executar Chromatic novamente: `npm run chromatic`
4. Verificar logs do Chromatic

## 📋 Checklist Completo de Publicação

### Antes de Começar

- [ ] Código testado e funcionando
- [ ] Linter passa (`npm run lint`)
- [ ] Build funciona (`npm run build`)
- [ ] Storybook funciona (`npm run storybook`)
- [ ] Todas as mudanças commitadas
- [ ] Branch sincronizada com remoto

### Versionamento

- [ ] Tipo de versão determinado (patch/minor/major)
- [ ] Versão atualizada em `package.json`
- [ ] Commit de versão criado
- [ ] Tag Git criada

### Build

- [ ] Build executado com sucesso
- [ ] Arquivos em `dist/` verificados
- [ ] Build do Storybook executado
- [ ] `storybook-static/` criado

### Publicação NPM

- [ ] Login NPM verificado (`npm whoami`)
- [ ] Conteúdo do pacote verificado (`npm pack --dry-run`)
- [ ] Publicação executada (`npm publish`)
- [ ] Versão verificada no NPM (`npm view gov-br-react-ui`)

### Publicação Storybook

- [ ] Build do Storybook executado
- [ ] Chromatic executado (`npm run chromatic`)
- [ ] Storybook atualizado e acessível

### Git

- [ ] Commits pushados (`git push`)
- [ ] Tags pushadas (`git push --tags`)
- [ ] Versão documentada (se mantém changelog)

### Verificação Final

- [ ] Instalação testada: `npm install gov-br-react-ui@nova-versao`
- [ ] Componentes funcionando em projeto de teste
- [ ] Storybook acessível e atualizado
- [ ] Documentação atualizada (se necessário)

## 📚 Recursos

- **[NPM Documentation](https://docs.npmjs.com/)**
- **[Semantic Versioning](https://semver.org/)**
- **[Chromatic Documentation](https://www.chromatic.com/docs/)**
- **[Storybook Deployment](https://storybook.js.org/docs/react/sharing/publish-storybook)**

## 🔄 Próximos Passos

Após publicar:

1. **Anunciar**: Notificar usuários sobre nova versão (se relevante)
2. **Monitorar**: Acompanhar issues e feedback
3. **Documentar**: Atualizar changelog (se mantido)
4. **Planejar**: Próxima versão e features

## 💡 Dicas

### Versionamento

- Use **patch** para correções rápidas
- Use **minor** para novas features
- Use **major** apenas quando necessário (breaking changes)
- Mantenha **beta** até ter confiança para release estável

### Publicação

- Sempre teste localmente antes de publicar
- Use `npm pack --dry-run` para verificar conteúdo
- Mantenha changelog atualizado
- Documente breaking changes claramente

### Storybook

- Publique Storybook junto com cada versão
- Use Chromatic para visual testing
- Mantenha exemplos atualizados

---

**Dúvidas sobre publicação?** Consulte o [FAQ](./12-FAQ.md) ou veja [07. Build e Publicação](./07-BUILD-PUBLICACAO.md) para mais detalhes sobre o processo de build.
