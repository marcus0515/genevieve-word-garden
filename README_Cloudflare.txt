Genevieve 字詞小花園｜練習 A

今次完成：第一課六項——早操、陽光、鳥兒、花朵、學生、跑。
網站與一張 A4 工作紙以 A1–A6 對應。這是六項試用組，並非全部 34 項。

一、先試用
1. 在 Mac 解壓縮網站包，打開 dist/index.html。
2. 打印 dist/worksheet-A.pdf，A4、原大／100%。
3. 網站揀題號，先看字聽普通話，再完成上半頁兩次抄寫。
4. 沿工作紙中線將上半頁摺到背面，網站切換「遮字聽寫」。
5. 撳播放，在下半頁相同題號寫字；寫完撳「核對」。
6. 自己揀「識寫」或「再練」。家長之後仍要抽查手寫。
手機使用建議先完成下面 Cloudflare 部署，再用正式網址開啟。

二、沿用 Griffin 的 GitHub → Cloudflare Workers 方式
Griffin 之前的專案是 little-learning-club。
今次為 Genevieve 另外建立 genevieve-word-garden，避免改到 Griffin 的網站。

步驟 1｜GitHub 準備程式
登入你用開的 GitHub（marcus0515），建立新 repository：genevieve-word-garden。
可選 Private；主分支用 main。
解壓網站包，把 package.json、package-lock.json、wrangler.jsonc、scripts 資料夾、dist 資料夾
及 README 放在 repository 最頂層，再 Commit changes。
不要只上載 ZIP，也不要把所有檔案多包在一層外層資料夾裏。
確認 GitHub 最頂層直接見到 package.json 及 wrangler.jsonc。

步驟 2｜Cloudflare 接駁 GitHub
登入 Cloudflare，進入 Workers & Pages，建立應用程式／匯入 Git repository。
選擇建立 Worker，連接 GitHub，再選剛建立的 genevieve-word-garden repository。
如需要授權，只選這個 repository 即可。

步驟 3｜建置設定
Worker / Project name：genevieve-word-garden
Production branch：main
Root directory：留空或 /
Build command：npm run build
Deploy command：npm run deploy
不需要填 Pages 的 build output directory；本包使用 Workers Static Assets。
dist 已在 wrangler.jsonc 設為網站資產資料夾。
不用建立 D1、登入系統或填入 API key。

步驟 4｜Deploy
按 Deploy，等顯示成功後，使用 Cloudflare 畫面實際給你的 workers.dev 網址。
先測試六個詞語的普通話播放、慢讀、下載工作紙及遮字聽寫。
再用你自己的香港網絡／手機關閉 VPN 試開，確認實際連線正常。
本包已準備好，但你還未連接 Cloudflare 前，並沒有正式公開網址。

三、日後更新
改好內容並 Commit 到 main 後，Cloudflare Workers Builds 會按既有連接自動建置部署。
Cloudflare 的 Worker 名稱須與 wrangler.jsonc 的 name 一致。
如果同名 Worker 已存在，請在 wrangler.jsonc 及 Cloudflare 使用另一個相同的新名稱。

四、音檔與進度
六個 MP3 已包含在 dist/audio，不需依賴手機內置朗讀聲音。
語音生成指定 zh-CN 普通話聲音。音檔及字卡的 A1–A6 對照固定。
「慢慢讀」以較低播放速度重播同一段音檔。
進度只存在目前瀏覽器；不同手機、瀏覽器、網址之間不會同步。
網站不會讀取紙上筆跡，也不會自動判斷字寫得對不對。

官方文件（2026-11-01 核對）：
https://developers.cloudflare.com/workers/static-assets/binding/
https://developers.cloudflare.com/workers/ci-cd/builds/configuration/
