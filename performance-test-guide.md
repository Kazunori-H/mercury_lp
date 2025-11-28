# パフォーマンステストガイド

## テストツール

### 1. PageSpeed Insights
- URL: https://pagespeed.web.dev/
- 使用方法:
  1. サイトURL（https://www.mercuryjpn.com）を入力
  2. 「分析」をクリック
  3. モバイルとデスクトップの両方でテスト

### 2. Lighthouse（Chrome DevTools）
- Chrome DevToolsの「Lighthouse」タブから実行
- パフォーマンス、アクセシビリティ、ベストプラクティス、SEOを総合評価

### 3. WebPageTest
- URL: https://www.webpagetest.org/
- 詳細な読み込み時間とウォーターフォール分析

## 実施済みの最適化

### サーバー側（.htaccess）
- [x] Gzip圧縮の有効化
- [x] ブラウザキャッシュの設定
- [x] 静的リソースの長期キャッシュ（画像: 1年、CSS/JS: 1ヶ月）

### HTML最適化
- [x] メタタグの最適化
- [x] Google Fonts preconnect設定
- [x] 構造化データの実装

### セキュリティとベストプラクティス
- [x] HTTPSリダイレクト
- [x] セキュリティヘッダー設定
- [x] Canonical URL設定

## 推奨される追加最適化

### 画像最適化
```bash
# 画像圧縮ツールの使用を推奨
# - TinyPNG (https://tinypng.com/)
# - ImageOptim (Mac)
# - Squoosh (https://squoosh.app/)

# WebP形式への変換も検討
```

### CSS/JavaScript最適化
```bash
# CSSの最小化（minify）
# - cssnano
# - clean-css

# JavaScriptの最小化
# - terser
# - uglify-js
```

### フォント最適化
- サブセット化（使用する文字のみ読み込み）
- WOFF2形式の使用
- font-display: swap の設定（実装済み）

## パフォーマンス目標

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5秒
- **FID (First Input Delay)**: < 100ミリ秒
- **CLS (Cumulative Layout Shift)**: < 0.1

### PageSpeed Insights スコア
- モバイル: 90点以上
- デスクトップ: 95点以上

## テスト実施手順

### 1. 公開後の初回テスト
```
1. PageSpeed Insightsでテスト
2. 結果をスクリーンショットで保存
3. 改善提案をリストアップ
4. 優先度をつけて対応
```

### 2. 定期テスト（月1回推奨）
```
1. 同じツールで再テスト
2. スコアの推移を記録
3. 新たな問題がないか確認
```

## よくある改善項目

### 画像関連
- [ ] 適切なサイズへのリサイズ
- [ ] 次世代フォーマット（WebP）の使用
- [ ] 遅延読み込み（lazy loading）の実装

### リソース読み込み
- [ ] 使用していないCSS/JavaScriptの削除
- [ ] クリティカルCSSのインライン化
- [ ] JavaScriptの遅延読み込み

### サーバー
- [ ] CDNの使用検討
- [ ] サーバーレスポンスタイムの改善

## 記録シート

| テスト日 | モバイルスコア | デスクトップスコア | LCP | FID | CLS | メモ |
|---------|-------------|----------------|-----|-----|-----|------|
| 2025-11-28 |  |  |  |  |  | 初回テスト |
|  |  |  |  |  |  |  |

## 参考リンク

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
