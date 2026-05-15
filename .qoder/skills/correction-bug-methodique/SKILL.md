---
name: correction-bug-methodique
description: Corriger des bugs de façon méthodique et exhaustive en 6 phases avant d'écrire du code. Utiliser lorsque l'utilisateur demande de corriger un bug, résoudre une anomalie, ou investiguer un problème dans le code.
---

# Correction de bug méthodique

## Instructions

Avant d'écrire la moindre ligne de code, suivre impérativement les 6 phases ci-dessous dans l'ordre. Cocher chaque sous-étape au fur et à mesure.

```
Phase 1: [ ] Compréhension & Diagnostic
Phase 2: [ ] Analyse des dépendances & impacts
Phase 3: [ ] Identification des cas limites & régressions
Phase 4: [ ] Correction
Phase 5: [ ] Validation & Tests
Phase 6: [ ] Synthèse
```

---

## Phase 1 — Compréhension & Diagnostic

- [ ] Identifier la **cause racine** du bug, pas seulement les symptômes visibles
- [ ] Retracer le **chemin d'exécution complet** qui mène à l'erreur
- [ ] Déterminer si le bug est **isolé ou systémique** (peut-il se reproduire ailleurs ?)
- [ ] Identifier **depuis quand** le bug existe et ce qui a pu le déclencher
- [ ] Lister toutes les **hypothèses** et les vérifier une à une

## Phase 2 — Analyse des dépendances & impacts

- [ ] Cartographier les **composants, modules et fonctions** liés au bug
- [ ] Identifier les **effets de bord** possibles d'une modification
- [ ] Repérer les **invariants, contrats implicites et hypothèses** du code environnant
- [ ] Vérifier les mécanismes de **cache, état global, concurrence, asynchronisme**
- [ ] Tenir compte des **environnements multiples** (dev, staging, prod, OS, navigateurs)

## Phase 3 — Identification des cas limites & régressions

Lister explicitement avant de corriger :

| Type | Description |
|------|-------------|
| **Cas nominaux** | Fonctionnement normal attendu |
| **Cas limites** | Valeurs nulles, vides, extrêmes, inattendues, concurrentes |
| **Cas d'erreur** | Exceptions, timeouts, données corrompues, permissions |
| **Comportements préservés** | Ce qui ne doit pas être altéré |

## Phase 4 — Correction

- [ ] Proposer la solution la plus **ciblée et minimale** possible
- [ ] Si plusieurs approches existent, comparer les trade-offs (complexité, maintenabilité) et justifier le choix
- [ ] Assurer la **rétrocompatibilité** avec le reste du système
- [ ] Respecter les **conventions, patterns architecturaux et style** existants
- [ ] Ne laisser **aucun code mort, debug temporaire ou hack**

## Phase 5 — Validation & Tests

- [ ] Écrire les **tests unitaires et d'intégration** couvrant le bug corrigé
- [ ] Vérifier que les **tests existants passent** sans modification
- [ ] Ajouter des tests pour chaque **cas limite** identifié en phase 3
- [ ] Documenter comment **reproduire le bug** avant correction et **vérifier la résolution**

## Phase 6 — Synthèse

Conclure avec :

1. **Cause racine** — résumé clair
2. **Correction apportée** — description concise
3. **Fichiers/fonctions modifiés** — liste complète
4. **Risques résiduels** — comment les surveiller
5. **Dette technique** — améliorations connexes à planifier
