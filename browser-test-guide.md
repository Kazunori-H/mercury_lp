# クロスブラウザテストガイド

## テスト対象ブラウザ

### デスクトップ
| ブラウザ | バージョン | OS | 優先度 |
|---------|-----------|----|----|
| Google Chrome | 最新版 | Windows/Mac | 高 |
| Microsoft Edge | 最新版 | Windows/Mac | 高 |
| Firefox | 最新版 | Windows/Mac | 中 |
| Safari | 最新版 | Mac | 高 |

### モバイル
| ブラウザ | OS | 優先度 |
|---------|----|----|
| Safari | iOS 15+ | 高 |
| Chrome | Android 11+ | 高 |

## テストツール

### 1. 実ブラウザでのテスト（推奨）
各ブラウザを実際にインストールしてテスト

### 2. オンラインツール
- **BrowserStack**: https://www.browserstack.com/
- **LambdaTest**: https://www.lambdatest.com/
- **Sauce Labs**: https://saucelabs.com/

### 3. ブラウザ開発者ツール
- Chrome DevTools (F12)
- Firefox Developer Tools (F12)
- Safari Web Inspector (Cmd+Opt+I)
- Edge DevTools (F12)

## テストチェックリスト

### 表示・レイアウト
- [ ] ページが正しく表示される
- [ ] レイアウトが崩れていない
- [ ] フォントが正しく表示される（Google Fonts）
- [ ] 画像が正しく表示される
- [ ] 色が正しく表示される

### 機能
- [ ] ハンバーガーメニューが動作する
- [ ] スムーズスクロールが動作する（アンカーリンク）
- [ ] ホバーエフェクトが動作する
- [ ] リンクがすべて正常に動作する
- [ ] tel:リンクが動作する（モバイル）
- [ ] mailto:リンクが動作する

### CSS関連
- [ ] Flexboxレイアウトが正しく表示される
- [ ] Grid レイアウトが正しく表示される（使用している場合）
- [ ] トランジション/アニメーションが動作する
- [ ] メディアクエリが正しく動作する

### JavaScript
- [ ] モバイルメニューのトグルが動作する
- [ ] エラーがコンソールに出ていない
- [ ] イベントリスナーが正常に動作する

### パフォーマンス
- [ ] ページ読み込みが速い（3秒以内目標）
- [ ] スクロールが滑らか
- [ ] インタラクションの反応が速い

## ブラウザ固有の注意点

### Chrome
- 最も広く使われているブラウザ
- 最新のWeb標準をサポート
- 開発者ツールが充実

### Safari
- iOSデバイスで唯一のブラウザエンジン
- 一部のCSS/JS機能の実装が遅れることがある
- プライベートブラウジングモードでの動作確認も重要

### Firefox
- プライバシー重視のブラウザ
- 独自のレンダリングエンジン（Gecko）
- 開発者ツールが優秀

### Edge
- Chromiumベースで、Chromeと高い互換性
- Windows環境でのシェアが増加中
- Internet Explorerとの後方互換性は不要（サポート終了）

## よくある互換性問題

### 1. CSSベンダープレフィックス
```css
/* 必要に応じてベンダープレフィックスを追加 */
.element {
  -webkit-transform: translateX(10px);
  -moz-transform: translateX(10px);
  -ms-transform: translateX(10px);
  transform: translateX(10px);
}
```

### 2. Flexbox / Grid の古いブラウザ対応
```css
/* Autoprefixerの使用を推奨 */
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

### 3. JavaScriptの互換性
```javascript
// ES6+の機能を使用する場合はBabelでトランスパイル
// 古いブラウザをサポートする場合はポリフィルを検討
```

## テスト実施記録

### 初回テスト
| ブラウザ | バージョン | OS | 結果 | 問題点 | 対応状況 |
|---------|-----------|----|----|-------|---------|
| Chrome | | Windows | | | |
| Chrome | | Mac | | | |
| Edge | | Windows | | | |
| Firefox | | Windows | | | |
| Safari | | Mac | | | |
| Safari | | iOS | | | |
| Chrome | | Android | | | |

## テスト実施手順

### 1. 基本動作確認
```
1. 各ブラウザでサイトを開く
2. 全ページを順にチェック
3. リンクをすべてクリック
4. フォーム入力をテスト（該当する場合）
5. レスポンシブデザインを確認（ウィンドウリサイズ）
```

### 2. JavaScript動作確認
```
1. コンソールを開く（F12）
2. エラーが出ていないか確認
3. インタラクティブ要素をすべて操作
4. モバイルメニューの開閉テスト
```

### 3. パフォーマンス確認
```
1. Network タブでリソース読み込みを確認
2. Performance タブでページ読み込み時間を測定
3. Console タブで警告やエラーを確認
```

## 自動化ツール（オプション）

### Playwright
```javascript
// 複数ブラウザでの自動テスト
const { chromium, firefox, webkit } = require('playwright');
```

### Selenium
```python
# クロスブラウザ自動テスト
from selenium import webdriver
```

## 修正後の再テスト

問題を修正した後は、以下を実施：
1. 修正したブラウザで再確認
2. 他のブラウザでも影響がないか確認
3. モバイルブラウザでも確認

## 参考リンク

- [Can I Use](https://caniuse.com/) - ブラウザ互換性確認
- [MDN Web Docs](https://developer.mozilla.org/) - Web技術リファレンス
- [BrowserStack](https://www.browserstack.com/) - クラウドベースのブラウザテスト
- [Autoprefixer](https://autoprefixer.github.io/) - CSSプレフィックス自動追加

## 最小サポート対象

現時点での推奨サポート範囲：
- Chrome: 最新版 + 1つ前のバージョン
- Edge: 最新版
- Firefox: 最新版
- Safari: 最新版 + 1つ前のバージョン
- iOS Safari: iOS 15+
- Android Chrome: Android 11+

※Internet Explorer 11 はサポート対象外（Microsoft公式サポート終了）
