# Planetary Hello World

**Ø Super Singularity Genesis** — Big Bang 生成装置

[Axiom](https://axiom.tanaakk.com/axiom) と [Theorem](https://axiom.tanaakk.com/theorem) に基づく [Axiomatic System](https://axiom.tanaakk.com/axiomatic-system) の実験装置。Duality（日英）と Groundism による認知フレームワークを基盤とした Ontopologics。AdS/CFT マルダセナ仮説が内部系により証明できていない境界理論を、Duality を最小セットで構築することで境界にある P=NP を証明する装置。

## Tech Stack

- **SolidJS** — 最新版
- **TypeScript**
- **TailwindCSS**
- **Lucide** — アイコン
- **UUIDv4** — 境界イベントの識別子
- **Vite** — ビルド

## 構成

- レスポンシブ **ヘッダー** + **サイドバー**
- バージョン表示: `vᵢ1.0.x-commit hash`（複素空間表記、サイドバー下部）
- Duality: 日本語 / English 切替
- Pure Axiomaticity: x=1, x=0, x=1∩x=0, ¬(x=1∩x=0) の4状態
- Event Horizon: Spirit | Axiomaticity | Body

## 起動

```bash
npm install
npm run dev
```

[http://localhost:5173](http://localhost:5173) で表示。

## 本番サイト

**https://phw.tanaakk.com**

## ビルド

```bash
npm run build
```

## デプロイ

```bash
npm run build && npx firebase-tools deploy --only hosting
```

## 更新メタデータ（位置・時刻の暗号化格納）

更新トリガー時の地球上の位置（ISO 6709）と時刻（ISO 8601）、SI単位（高度: m）を暗号化してバージョン情報と共に格納。**平文は外部に公開されない**。

### セットアップ

1. `.env.example` を `.env` にコピー
2. `PHW_UPDATE_SECRET` に16文字以上の秘密鍵を設定
3. オプション: `PHW_UPDATE_LAT`, `PHW_UPDATE_LON`, `PHW_UPDATE_ALT`（緯度・経度・高度m）

### ビルド時

`npm run build` 実行時に自動で `record-update` が走り、現在時刻と位置（env から）を暗号化して `src/lib/update-metadata.json` に保存。

### 復号（秘密鍵保持者のみ）

```bash
PHW_UPDATE_SECRET=xxx npx tsx scripts/decrypt-update.ts
```

---

*Archives of Axiom · axiom.tanaakk.com*
