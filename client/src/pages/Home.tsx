import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, Truck, Globe, AlertTriangle, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 z-0 opacity-20">
           {/* Abstract Geometric Background */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-primary transform -skew-x-12 translate-x-1/4"></div>
        </div>
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm tracking-widest uppercase bg-background/10 backdrop-blur-sm">
                Project KESOYO
              </Badge>
              <Badge variant="destructive" className="px-4 py-1 text-sm tracking-widest uppercase">
                Confidential
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              SMART FIRE<br />
              <span className="text-primary">EXTINGUISHER</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
              気体で消すから跡が残らない。<br />
              消防庁確認済みの、次世代初期消火アイテム。
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById('executive-summary')?.scrollIntoView({ behavior: 'smooth' })}
              >
                事業計画詳細へ
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full flex items-center justify-center"
          >
            {/* Product Image Placeholder - Replace with actual image */}
            <div className="relative w-full h-full flex items-center justify-center">
               <img 
                 src="/images/001.webp" 
                 alt="KESOYO Product" 
                 className="object-contain max-h-full drop-shadow-2xl"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="py-24 bg-background">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="col-span-1 md:col-span-2 space-y-8">
              <h2 className="text-4xl font-bold tracking-tight border-l-4 border-primary pl-6">
                事業概要
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                「KESOYO」は、従来の消火器の課題（重い、使いにくい、汚れる）を解決する、エアゾール式の革新的初期消火具です。
                中国で年間数十万本の実績を持つ製品を、<span className="font-bold text-foreground">日本の法規制に完全準拠</span>する形で初めて導入します。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-none shadow-none bg-muted/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <ShieldCheck className="text-primary h-6 w-6" />
                      法的正当性
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    消防庁・経済産業省から正式な見解を取得済み。コンプライアンスを遵守した唯一無二の正規輸入品。
                  </CardContent>
                </Card>
                <Card className="border-none shadow-none bg-muted/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Globe className="text-primary h-6 w-6" />
                      市場優位性
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    行政のお墨付きを得た先行者利益。BtoBからBtoCまで幅広い市場へのアプローチが可能。
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="col-span-1 bg-secondary p-8 flex flex-col justify-center space-y-6 text-secondary-foreground">
              <h3 className="text-2xl font-bold">Product Specs</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-secondary-foreground/20 pb-2">
                  <span className="opacity-70">Size</span>
                  <span className="font-mono">H24cm × φ5cm</span>
                </li>
                <li className="flex justify-between border-b border-secondary-foreground/20 pb-2">
                  <span className="opacity-70">Weight</span>
                  <span className="font-mono">550g</span>
                </li>
                <li className="flex justify-between border-b border-secondary-foreground/20 pb-2">
                  <span className="opacity-70">Duration</span>
                  <span className="font-mono">15 sec</span>
                </li>
                <li className="flex justify-between border-b border-secondary-foreground/20 pb-2">
                  <span className="opacity-70">Price</span>
                  <span className="font-mono">¥14,800 (inc. tax)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Administrative Compliance */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">行政対応の経緯</h2>
            <p className="text-xl text-muted-foreground">5年の歳月をかけた、確固たる法的基盤。</p>
          </div>
          
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-12 space-y-12">
            {[
              { year: "2022", title: "消防庁見解取得", desc: "「消火器には該当しない」との見解を得る。" },
              { year: "2024", title: "販売許可取得", desc: "消防庁予防課より「初期消火アイテム」として合法的に販売可能との正式見解を取得。" },
              { year: "2025", title: "経産省協議完了", desc: "経済産業省（高圧ガス・火薬室）との実務協議を経て、正規の輸入・販売体制を構築。" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                <span className="text-sm font-bold text-primary tracking-wider">{item.year}</span>
                <h3 className="text-2xl font-bold mt-1 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">競合比較分析</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-4 px-6 text-lg font-bold w-1/3">比較項目</th>
                  <th className="py-4 px-6 text-lg font-bold text-primary bg-primary/5 w-1/3">KESOYO (ケソーヨ)</th>
                  <th className="py-4 px-6 text-lg font-bold text-muted-foreground w-1/3">ファイヤースティック</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">価格 (税込)</td>
                  <td className="py-4 px-6 font-bold text-primary bg-primary/5">¥14,800</td>
                  <td className="py-4 px-6 text-muted-foreground">¥17,600〜</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">消防庁確認</td>
                  <td className="py-4 px-6 font-bold text-primary bg-primary/5 flex items-center gap-2">
                    <Check className="h-5 w-5" /> 済み
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">不明</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">経産省確認</td>
                  <td className="py-4 px-6 font-bold text-primary bg-primary/5 flex items-center gap-2">
                    <Check className="h-5 w-5" /> 済み
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">済み</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">噴射時間</td>
                  <td className="py-4 px-6 bg-primary/5">15秒</td>
                  <td className="py-4 px-6 text-muted-foreground">50秒 / 100秒</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">製造国</td>
                  <td className="py-4 px-6 bg-primary/5">中国</td>
                  <td className="py-4 px-6 text-muted-foreground">イタリア</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-right">
            ※ファイヤースティックは国内累計販売本数4万本の実績あり
          </p>
        </div>
      </section>

      {/* Supply Chain & Future */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Truck className="h-8 w-8 text-primary" />
                サプライチェーン & 輸入体制
              </h2>
              <div className="space-y-8">
                <div className="bg-background/5 p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-primary">商社連携</h3>
                  <p className="mb-4">日中両国の強力なパートナーシップにより、安定した供給体制を確立。</p>
                  <ul className="space-y-2 text-sm opacity-80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">JP</span> 株式会社タカデン（日本側商社）
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">CN</span> 蘇州豊迅汽車租賃有限公司（郁偉 董事長）
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background/5 p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-primary">輸入受け入れ環境</h3>
                  <p className="mb-4">「火薬類」としての管理意識と体制を完備。</p>
                  <ul className="space-y-2 text-sm opacity-80">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 株式会社ビー・クリエイティブが責任主体</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 専用保管スペース・識別管理体制の構築</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 2026年年初より正規輸入開始決定</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                今後の課題と展望
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">火薬保管庫の確保</h3>
                    <p className="opacity-70">国内在庫の安定化に向けた専用保管庫の整備。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">簡易試験場の設置</h3>
                    <p className="opacity-70">品質管理と安全性確認のための自社試験環境の構築。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Made in Japan化</h3>
                    <p className="opacity-70">最終工程を日本国内で行い、国産ブランドとしての信頼性を確立。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">実証実験・比較動画</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> 中国テスト①</h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/avJxlQ5SKjw" title="中国テスト①" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> 中国テスト②</h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WpfzdQBXmUs" title="中国テスト②" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> 国内テスト①</h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tcLebzzTFNM" title="国内テスト①" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2 text-muted-foreground"><AlertTriangle className="h-5 w-5"/> 他社ライバル商品</h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LY38PSxXsDs" title="他社ライバル商品" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Business Guide Section */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="bg-card text-card-foreground p-8 md:p-12 shadow-xl border border-border/50">
            <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
              <Info className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">ケソーヨ事業のご案内</h2>
            </div>
            
            <div className="space-y-10 text-lg leading-relaxed">
              <section>
                <h3 className="text-xl font-bold text-primary mb-4">1. 事業背景と目的</h3>
                <p className="text-muted-foreground">
                  従来の消火器は「重い・使いにくい・汚れる」という課題があり、一般家庭や小規模店舗への普及には限界がありました。
                  「KESOYO（ケソーヨ）」は、これらの課題を解決するエアゾール式（固体燃焼型）の革新的な初期消火アイテムです。
                  中国では年間数十万本の実績があり、この度、日本の法規制に完全準拠する形で正規輸入を開始します。
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-primary mb-4">2. 行政対応と法的安全性</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">消防庁見解:</strong> 2022年に「消火器には該当しない」との見解を取得。2024年には「初期消火アイテム」として合法的に販売可能との正式見解を得ています。</li>
                  <li><strong className="text-foreground">経済産業省対応:</strong> 本製品は火薬類取締法上の「火薬類」に該当しますが、高圧ガス・火薬室との実務協議を経て、正規の輸入・販売体制を構築済みです。</li>
                  <li><strong className="text-foreground">中国公安基準:</strong> 中国公安基準（GA）に合格しており、高い安全性が証明されています。</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-primary mb-4">3. サプライチェーンと輸入体制</h3>
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h4 className="font-bold mb-2">商社連携</h4>
                  <p className="text-muted-foreground mb-4">
                    日本側商社「株式会社タカデン」と、中国側商社「蘇州豊迅汽車租賃有限公司（郁偉 董事長）」との強力なパートナーシップにより、
                    2026年年初からの安定した正規輸入が決定しています。
                  </p>
                  <h4 className="font-bold mb-2">受け入れ環境（株式会社ビー・クリエイティブ）</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>専用保管スペース（一般倉庫と区分）の確保</li>
                    <li>「火薬類該当製品」としての厳格な識別管理</li>
                    <li>直射日光・高温・火気を避けた安全な保管環境</li>
                    <li>万全の在庫管理とトレーサビリティ体制</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-primary mb-4">4. 今後の展開と課題</h3>
                <p className="text-muted-foreground mb-4">
                  事業の拡大に伴い、以下の施策を順次進めてまいります。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">火薬保管庫の確保:</strong> 国内在庫の安定化に向け、専用の火薬保管庫を整備します。</li>
                  <li><strong className="text-foreground">簡易試験場の設置:</strong> 自社での品質管理と安全性確認を行うための試験環境を構築します。</li>
                  <li><strong className="text-foreground">Made in Japan化:</strong> 将来的には最終工程を日本国内で行い、国産ブランドとしての信頼性を確立することを目指します。</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold tracking-tight mb-12">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                <img src="/images/002.webp" alt="Usage Scenes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
             </div>
             <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                <img src="/images/003.webp" alt="Color Variations" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
             </div>
             <div className="col-span-1 md:col-span-2 aspect-[21/9] bg-muted flex items-center justify-center overflow-hidden">
                <img src="/images/004.webp" alt="Features" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-secondary-foreground border-t border-white/10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-widest">KESOYO</h3>
            <p className="text-sm opacity-60 mt-2">株式会社ビー・クリエイティブ</p>
          </div>
          <div className="text-sm opacity-60">
            © 2025 Be Creative Co., Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
