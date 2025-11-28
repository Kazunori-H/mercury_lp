# モバイルフレンドリーテストガイド

## テストツール

### 1. Google モバイルフレンドリーテスト
- URL: https://search.google.com/test/mobile-friendly
- 使用方法:
  1. サイトURL（https://www.mercuryjpn.com）を入力
  2. 「URLをテスト」をクリック
  3. 結果を確認し、問題があれば修正

### 2. Chrome DevTools デバイスモード
- Chromeで該当ページを開く
- DevToolsを起動（F12）
- デバイスツールバーを有効化（Ctrl+Shift+M / Cmd+Shift+M）
- 各種デバイスでプレビュー

### 3. 実機テスト
- iPhone（Safari）
- Android（Chrome）
- タブレット（iPad、Android）

## 実装済みのモバイル対応

### HTML設定
- [x] viewportメタタグ設定
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

### レスポンシブデザイン要素
- [x] `<br class="pc-only">` タグでPC/モバイルの改行制御
- [x] ハンバーガーメニュー用のナビゲーショントグル実装

### タッチ対応
- [x] タップターゲットサイズの確保（ボタン、リンク）
- [x] ホバー効果の代替（タッチデバイス対応）

## チェックリスト

### 表示・レイアウト
- [ ] コンテンツが画面幅に収まっている
- [ ] 横スクロールが発生していない
- [ ] テキストが小さすぎず読みやすい（最小16px推奨）
- [ ] 画像が適切にリサイズされている

### ナビゲーション
- [ ] ハンバーガーメニューが正常に動作
- [ ] タップしやすいボタンサイズ（最小44x44px）
- [ ] リンク同士が近すぎない
- [ ] フォームが使いやすい

### パフォーマンス
- [ ] ページ読み込みが3秒以内
- [ ] スムーズなスクロール
- [ ] タップ反応の遅延がない

### コンテンツ
- [ ] 電話番号がタップで発信可能（tel:リンク） ✓
- [ ] メールアドレスがタップでメーラー起動（mailto:リンク） ✓
- [ ] 地図がタップで地図アプリ起動（必要に応じて）

## テスト対象デバイス

### スマートフォン
| デバイス | 画面サイズ | ブラウザ |
|---------|-----------|---------|
| iPhone 14 Pro | 393x852 | Safari |
| iPhone SE | 375x667 | Safari |
| Galaxy S21 | 360x800 | Chrome |
| Pixel 7 | 412x915 | Chrome |

### タブレット
| デバイス | 画面サイズ | ブラウザ |
|---------|-----------|---------|
| iPad Pro | 1024x1366 | Safari |
| iPad Mini | 768x1024 | Safari |
| Galaxy Tab | 800x1280 | Chrome |

## よくある問題と対処法

### 1. テキストが小さすぎる
```css
/* 最小フォントサイズを16pxに設定 */
body {
  font-size: 16px;
}
```

### 2. タップターゲットが小さい
```css
/* ボタンやリンクの最小サイズを確保 */
.button, a {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
}
```

### 3. 横スクロールが発生
```css
/* コンテナの最大幅を制限 */
img, video {
  max-width: 100%;
  height: auto;
}
```

### 4. フォームが使いにくい
```html
<!-- 適切なinput typeを使用 -->
<input type="email" ...>
<input type="tel" ...>
<input type="url" ...>
```

## テスト実施記録

### 初回テスト（公開後）
| 項目 | 結果 | 問題点 | 対応 |
|-----|------|-------|------|
| Google モバイルフレンドリーテスト |  |  |  |
| iPhone Safari |  |  |  |
| Android Chrome |  |  |  |
| iPad |  |  |  |

### モバイルフレンドリー最適化のヒント

1. **フォントサイズ**: 本文は最低16px、見出しは適切な階層で
2. **行間**: 1.5〜1.8を推奨
3. **余白**: タップしやすいよう十分な余白を確保
4. **画像**: WebP形式で軽量化、lazy loading実装
5. **フォーム**: 大きな入力欄、適切なキーボードタイプ

## 参考リンク

- [Google モバイルフレンドリーテスト](https://search.google.com/test/mobile-friendly)
- [モバイルフレンドリーなサイトの作成](https://developers.google.com/search/mobile-sites)
- [レスポンシブWebデザインの基礎](https://web.dev/responsive-web-design-basics/)
