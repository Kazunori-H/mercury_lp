# Favicon 設定ガイド

## 必要なファイル

以下のfaviconファイルを`images/`ディレクトリに配置してください。

### 必須ファイル

1. **favicon-16x16.png** (16x16px)
   - ブラウザタブ用の小サイズアイコン

2. **favicon-32x32.png** (32x32px)
   - ブラウザタブ用の標準サイズアイコン

3. **apple-touch-icon.png** (180x180px)
   - iOSデバイスのホーム画面用アイコン

4. **android-chrome-192x192.png** (192x192px)
   - Androidデバイス用アイコン（小）

5. **android-chrome-512x512.png** (512x512px)
   - Androidデバイス用アイコン（大）

## ファイル生成方法

### オンラインツールを使用（推奨）

1. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - 元画像（512x512px以上推奨）をアップロード
   - 各プラットフォーム用の設定を調整
   - ファイル一式をダウンロード

2. **Favicon.io** (https://favicon.io/)
   - テキストから生成、画像から生成、絵文字から生成が可能

### Photoshop/Illustratorを使用

- 元のロゴファイル（`Mercury Co., Ltd_orange.png`）を使用
- 各サイズにリサイズして保存
- 透過背景またはブランド色の背景を選択

## 配置場所

```
mercury_lp/
└── images/
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    ├── android-chrome-192x192.png
    └── android-chrome-512x512.png
```

## 確認方法

1. ローカルサーバーを起動
2. ブラウザで http://localhost:8000 にアクセス
3. ブラウザタブにfaviconが表示されることを確認
4. iOSデバイスでホーム画面に追加して確認

## 注意事項

- ファビコンはブランドカラー（オレンジ #ff6600）を使用
- 背景は透過または白を推奨
- シンプルなデザインが小サイズでも認識しやすい
