# NotifyApp

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
- フォルダに README.md 作成。内容は適当に。
- sourcetree の `Create` でフォルダパス指定し `作成` クリック (git init やってくれるのかな？)

- README.md をステージに追加
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
