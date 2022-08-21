

# レポジトリ作成
…or create a new repository on the command line
```git
echo "# Heart-Station" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sh-kikuchi/Heart-Station.git
git push -u origin main
```

# 既存のレポジトリにPush
…or push an existing repository from the command line
```git
git remote add origin https://github.com/sh-kikuchi/Heart-Station.git
git branch -M main
git push -u origin main
```

# git reset

```git
git reflog
```

```git
git reset --hard HEAD@{1}
```

# 作業中のやつを棚上げ

- 棚上げ（stashリストに保存）
```git
git stash save "コメント"
```
<br>

- stashしたリスト確認
```git
git stash list
```
<br>

- 作業を戻す（リストは残る）
```git
git stash apply stash@{0}
```

<br>

- 作業戻す＋リストから削除
```git
git stash pop stash@{0}
```

<br>

- リストから削除
```git
git stash drop stash@{0}
```
