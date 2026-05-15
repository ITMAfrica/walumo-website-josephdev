---
name: feature-chirurgical
description: Implémenter une fonctionnalité de manière chirurgicale en suivant des règles strictes de propreté de code. Utiliser lorsqu'une feature doit être ajoutée avec zéro import inutilisé, zéro code mort, et une modification minimale des fichiers existants.
---

# Feature chirurgicale

## Règles strictes — à respecter absolument

### 1. CHIRURGICAL — Modifications minimales

- Modifie **uniquement** les fichiers nécessaires à la feature.
- N'ajoute, ne supprime, ne réorganise **RIEN** d'autre dans le code existant.
- Pas de refactoring, pas de renommage, pas de "nettoyage" en passant.

### 2. ZÉRO IMPORT INUTILISÉ

- Avant de finaliser : supprime **TOUT** import que tu n'utilises pas dans le code que tu écris.
- Ne laisse jamais un import "au cas où" ou "prévu pour plus tard".
- Si un import existant devient inutilisé à cause de ton changement, retire-le aussi.
- Vérification : `import` non utilisé = erreur à corriger immédiatement.

### 3. ZÉRO VARIABLE / FONCTION MORTE

- Chaque variable, constante ou fonction que tu déclares doit être **utilisée**.
- Pas de déclaration spéculative.
- Pas de code commenté laissé en place.
- Pas de fonction helper créée "au cas où elle servirait".

### 4. COMPATIBILITÉ

- Respecte le style, les conventions de nommage et la structure du projet existant.
- N'introduis **pas** de nouvelle dépendance sans le signaler explicitement dans ta réponse.
- Utilise les mêmes patterns que le code adjacent.

### 5. VÉRIFICATION FINALE (obligatoire avant de répondre)

Avant de marquer la tâche comme terminée :

1. Relis **chaque fichier modifié** ligne par ligne.
2. Vérifie qu'il n'y a aucun import inutilisé.
3. Vérifie qu'il n'y a aucune variable/fonction non lue.
4. Vérifie qu'il n'y a aucun code commenté.
5. Confirme explicitement :
   > "Aucun import inutilisé. Aucune variable non lue. Aucun code mort."

## Workflow d'implémentation

```
Étape 1 : Analyser le besoin
  ↓
Étape 2 : Identifier les fichiers à modifier (liste explicite)
  ↓
Étape 3 : Implémenter dans chaque fichier
  ↓
Étape 4 : Relire chaque fichier modifié ligne par ligne
  ↓
Étape 5 : Exécuter la vérification finale (règle n°5)
  ↓
Étape 6 : Confirmer la propreté du code
```

## Exemple de vérification finale

```markdown
## Vérification finale
- [x] Fichier A : aucun import inutilisé, aucune variable non lue, aucun code mort
- [x] Fichier B : aucun import inutilisé, aucune variable non lue, aucun code mort
- Résultat : ✅ Aucun import inutilisé. Aucune variable non lue. Aucun code mort.
```
