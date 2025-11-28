# Favicon 設定ガイド

## 必要なファイル

以下のfaviconファイルを`images/`ディレクトリに配置してください。

### 必須ファイル（✅ 配置済み）

1. **favicon.ico** (マルチサイズ)
   - 従来のブラウザ用アイコン ✅

2. **favicon.svg** (SVGベクター形式)
   - モダンブラウザ用のスケーラブルアイコン ✅

3. **favicon-96x96.png** (96x96px)
   - 高解像度ディスプレイ用PNG ✅

4. **apple-touch-icon.png** (180x180px)
   - iOSデバイスのホーム画面用アイコン ✅

5. **android-chrome-192x192.png** (192x192px)
   - Androidデバイス用アイコン（小） ✅

6. **android-chrome-512x512.png** (512x512px)
   - Androidデバイス用アイコン（大） ✅

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
    ├── favicon.ico
    ├── favicon.svg
    ├── favicon-96x96.png
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
