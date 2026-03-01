# 人類のバグ：主な病理のカテゴライズと権威ある参照

> 肉体をハードウェア・ソフトウェアとして捉えるとき、病理は「バグ」である。主な病理をカテゴライズし、権威ある順に参照を列挙する。

---

## 前提：病理＝バグ

[body-hardware-software-ontology.md](../core-engine/body-hardware-software-ontology.md) において、肉体は点群合成ハードウェア、身体操作はソフトウェア、魂はOSである。この枠組みでは、**病理はシステムのバグ**として発生する。

- **ハードウェアのバグ**：構造的損傷、変性、先天異常
- **ソフトウェアのバグ**：運動パターンの非互換、破壊的アップデート
- **OSのバグ**：認知・精神の障害、記憶の不整合

---

## 権威の順序

病理の分類・参照における権威順：
1. **WHO ICD-11** — 国際標準。世界保健総会で採択された疾病分類
2. **CDC / NIH** — 米国公的機関。ICD実装、研究資金、疫学
3. **各国公的機関** — 日本では厚生労働省、国立研究開発法人

---

## 1. 主な病理カテゴリ（ICD-11 準拠）

### カテゴリ一覧（権威順に参照）

| カテゴリ | 人類のバグとしての意味 | 主な例 | 参照（権威順） |
|----------|------------------------|--------|----------------|
| **感染症・寄生虫** | 外部エージェントの侵入、システム汚染 | 結核、HIV、COVID-19、寄生虫 | WHO ICD-11, CDC NCHS, NIH NIAID |
| **腫瘍（がん）** | 細胞の制御不能な増殖、メモリ破壊 | 悪性新生物、白血病 | WHO ICD-11, NIH NCI, CDC |
| **血液・免疫** | 防御システムの異常、自己攻撃 | 貧血、自己免疫疾患、免疫不全 | WHO ICD-11, NIH NHLBI, CDC |
| **内分泌・代謝** | 調節シグナルの異常、エネルギー代謝のバグ | 糖尿病、甲状腺疾患、肥満 | WHO ICD-11, NIH NIDDK, CDC |
| **精神・神経発達** | OS・認知のバグ、ソフトウェアの非互換 | うつ病、統合失調症、ADHD、認知症 | WHO ICD-11, NIH NIMH, NINDS |
| **神経系** | 神経回路の障害、信号伝達の破綻 | 脳卒中、パーキンソン病、てんかん | WHO ICD-11, NIH NINDS |
| **循環器** | エネルギー供給系の障害 | 心疾患、脳卒中、高血圧 | WHO ICD-11, NIH NHLBI, CDC |
| **呼吸器** | ガス交換系の障害 | 喘息、COPD、肺炎 | WHO ICD-11, NIH NHLBI, CDC |
| **消化器・肝・腎** | 摂取・代謝・排泄の障害 | 肝硬変、腎不全、炎症性腸疾患 | WHO ICD-11, NIH NIDDK |
| **筋骨格** | ハードウェア支持系のバグ、ソフトウェア非互換 | 関節炎、腰痛、骨折、変性 | WHO ICD-11, NIH NIAMS |
| **皮膚** | 境界層の障害 | 湿疹、感染、がん | WHO ICD-11 |
| **泌尿生殖器** | 排泄・生殖系の障害 | 腎疾患、生殖器疾患 | WHO ICD-11, NIH NIDDK |
| **外傷・中毒** | 外部からの破壊的入力 | 骨折、熱傷、中毒 | WHO ICD-11, CDC |
| **先天異常** | 初期ビルドの欠陥 | 染色体異常、奇形 | WHO ICD-11, NIH NICHD |

---

## 2. 権威ある参照機関（病理カテゴリ別）

### 最上位参照（全カテゴリに共通）

| 順位 | 機関 | Origin 名称 | 役割 |
|------|------|-------------|------|
| 1 | **WHO** | World Health Organization (OMS / Organisation mondiale de la Santé) | ICD-11 の策定・管理。疾病分類の国際標準 |
| 2 | **CDC** | Centers for Disease Control and Prevention | 疫学、ICD実装（米国）、疾病監視 |
| 3 | **NIH** | National Institutes of Health | 研究資金、各疾患別研究所 |

### 疾患別 NIH 研究所（権威順）

| 研究所 | Origin 名称 | 担当カテゴリ |
|--------|-------------|-------------|
| **NCI** | National Cancer Institute | 腫瘍 |
| **NIAID** | National Institute of Allergy and Infectious Diseases | 感染症 |
| **NIMH** | National Institute of Mental Health | 精神・神経発達 |
| **NINDS** | National Institute of Neurological Disorders and Stroke | 神経系 |
| **NHLBI** | National Heart, Lung, and Blood Institute | 循環器、呼吸器、血液 |
| **NIDDK** | National Institute of Diabetes and Digestive and Kidney Diseases | 内分泌、代謝、消化器、腎 |
| **NIAMS** | National Institute of Arthritis and Musculoskeletal and Skin Diseases | 筋骨格、皮膚 |
| **NICHD** | Eunice Kennedy Shriver National Institute of Child Health and Human Development | 先天異常、周産期 |

---

## 3. ICD-11 への参照方法

- **オンライン**：https://icd.who.int/browse11/l-m/en
- **API**：リモートアクセス可能
- **多言語**：統合多言語サポート

病理を「人類のバグ」として扱う際、ICD-11 のコードを参照元として固定することで、記憶に頼らず、外部ストレージ（権威ある分類）との照合が可能になる。

---

## 4. 本リポジトリとの接続

| 病理カテゴリ | 関連ドキュメント |
|-------------|------------------|
| 筋骨格、神経 | [breaking-update-protocol.md](../safety-maintenance/breaking-update-protocol.md) — 破壊的アップデート（腰痛等） |
| 精神・認知 | [maxwell-demon-recovery-ontology.md](../core-engine/maxwell-demon-recovery-ontology.md) — 忘却、回復動力 |
| 筋骨格 | [muscle-bone-balancing.md](../core-engine/muscle-bone-balancing.md) — テンセグリティ、傷害予防 |

---

*planetary-movement-mba | Standard Operating Procedures for Planetary Life*
