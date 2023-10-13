# m-yamaguchi-hisoftec.github.io
PWAで通知を行うアプリです

## やったこと

### github

- アカウント作成

- `Settings` - `Dev Settings` - `Personal access tokens` - `Tokens(classic)`
    - `Generate new token (classic)`
        - Note: sourcetree用
        - Expiration : 90 days
        - Select scopes:
            - `repo` にチェック
            - `admin:org` - `read:org` にチェック
            - `gist` にチェック
            - `notifications` にチェック
        - `Generate token` クリック
        
### sourcetree

- 適当なフォルダ作成
- フォルダに README.md、index.html 作成。内容は適当に。
- sourcetree の `Create` でフォルダパス指定し `作成` クリック (git init やってくれるのかな？)

- README.md、index.html をステージに追加
- コメント： First commit でコミット
- `リポジトリ` - `リポジトリ設定`
    - `追加`
        - リモート名： origin
        - URL/パス： https://github.com/[ユーザ名]/[リポジトリ名].git
        - ホストタイプ： GitHub (自動設定かも？)
        - ルートURL： https://www.github.com (自動設定かも？)
        - ユーザ名： [ユーザ名] (m-yamaguchi-hisoftec)
    - `OK` で確定
- ツールバーの `プッシュ`
    - `master` にチェックし `プッシュ` クリック
    - github のサインインダイアログが表示されるので、パスワードのところに アクセストークン文字列を入力
    - プッシュ完了すれば OK

### github pages

- ブランチのページの `Settings` - `Pages`
    - `Build and deployment` - `Branch` の `None` を `master` にして `Save` クリック
    - `Pages` 設定ページの上部に URL が表示されればOK。表示されない場合は `Pages` 設定ページを開き直してみること。(__URLは大文字小文字を見ているようなので注意__)
    
### OneSignal

- アカウント作成

    
### PWA

- manifest.json 作成
- sw.js 作成