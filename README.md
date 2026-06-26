<div align="center">
  <h1>🤰 Lar Renascer — Plataforma Web</h1>
  <p><em>Tecnologia a serviço de quem acolhe quem mais precisa</em></p>
</div>

---

## 📑 Sumário
- [Sobre o projeto](#-sobre-o-projeto)
- [O problema e a solução](#-o-problema-e-a-solução)
- [Funcionalidades do MVP](#-funcionalidades-do-mvp)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Como executar o projeto](#-como-executar-o-projeto)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Referência rápida da API](#-referência-rápida-da-api)
- [Segurança e privacidade](#-segurança-e-privacidade)
- [Equipe](#-equipe)
- [Licença](#-licença)
- [Agradecimentos](#-agradecimentos)

---

## 🌱 Sobre o projeto

Este repositório reúne o MVP (Produto Minimamente Viável) desenvolvido como projeto de **[Desenvolvimento de Software]**, do curso de **[Análise e Desenvolvimento de Sistemas]** do **[UniSENAI - Campus Joinville]**, sob orientação de **[Tiago Ricaldi e Emerson Amancio]**.

O grupo escolheu como causa social o **Lar Renascer**, uma casa de acolhimento que recebe gestantes em situação de vulnerabilidade social, oferecendo a elas e aos seus filhos um ambiente seguro durante a gestação.

O projeto nasce de um problema concreto, identificado em conversa direta com a instituição: o site atual do Lar Renascer tem baixa visibilidade e não oferece nenhuma ferramenta de gestão para o dia a dia da casa — tudo ainda é feito de forma manual e descentralizada.

---

## 🎯 O problema e a solução

| Problema identificado | Como o MVP resolve |
| :--- | :--- |
| Site institucional pouco visível, desorganizado visualmente | Páginas com design estruturado para informar e chamar atenção para a causa|
| Cadastro de gestantes acolhidas feito manualmente, sem histórico organizado | Formulário de cadastro que alimenta um banco de dados estruturado |
| Doações sem nenhum controle ou forma de identificar quem ajudou | Página de doação com QR Code Pix + registro dos dados de quem doa, com exportação em CSV |
| Equipe da casa sem tempo/conhecimento técnico para administrar um sistema complexo | Área interna com painéis independentes, protegida por senha única — sem exigir cadastro de usuário |

---

## ✅ Funcionalidades do MVP

- [x] Landing page institucional (testemunhos, contato, sobre o lar)
- [x] Cadastro de gestantes que precisam de acolhimento
- [x] Página de doação com QR Code Pix + registro de doadores
- [x] Exportação da lista de doadores e gestantes cadastradas em CSV
- [x] Telas frontend concluídas (landing page, cadastro e doação)
- [x] Painéis internos de relatórios (Gestantes e Doações) protegidos por login simplificado

---

## 🛠 Tecnologias utilizadas

| Camada | Tecnologia |
| :--- | :--- |
| **Frontend** | React, Vite, Tailwind CSS, Navegação SPA por Estado |
| **Backend** | Node.js, |
| **ORM / Banco de dados** | Prisma + PostgreSQL (Neon) |
| **Autenticação da área interna** | HTTP Basic Auth com injeção de credenciais base64 no Frontend |
| **Pagamentos** | Pix dinâmico, gerado a partir da chave Pix real |
| **Deploy** | Vercel (frontend) + Render (backend) |

---

## 🏗 Arquitetura

```mermaid
flowchart LR
    subgraph FE[Frontend]
        A["React + Vite + Tailwind"]
    end
    subgraph BE[Backend]
        B["Node.js + Prisma"]
    end
    C[("PostgreSQL — Neon")]

    A -- "API REST (JSON)" --> B
    B --> C
    A -.deploy.-> V(["Vercel"])
    B -.deploy.-> R(["Render"])
