// worksData.ts
export type WorkItem = {
    title: string
    period: string
    languange: string
    tool: string
    version: string
    server: string
    cms: string
    other: string
    image1: string
    image2: string
    image3: string
    description: string
    thumb: string
}

export const WorksFrontUiuxData: WorkItem[] = [
    {
    title: '静的ダウンロードサイト',
    period: '3ヶ月',
    languange: 'HTML5, css3, Sass, Javascript(JQuery)',
    tool: 'Illustrator',
    version: 'git(github)',
    server: '',
    cms: '',
    other: '',
    image1: '/works/01/pc.jpg',
    image2: '/works/01/tab.jpg',
    image3: '/works/01/sp.jpg',
    description:
        '建築用設計ツールのエクステンションDLページです。PHPによるデータの流し込みがしやすいようなHTML、CSSの構築を心がけました、具体的にはdivなどの抽象的なタグではなく、listやsectionタグなど具体性のあるタグを多用し、CSSはdiv{display: block}のようなタグに直接CSSを設定することはせず、BEMによるclass名設定を遵守いたしました。画像の挿入は最小限とし、できうる限りCSS、JQuery、Vue.jsで描写やページを構築しました。<br>私がページ開発をする場合、最低でも2つ以上のブレイクポイントを設定したレスポンシブ設定を心がけます。',
    thumb: '/works/01/pc.jpg',
    },
    {
    title: 'Google mapを利用したアプリ',
    period: '2ヶ月',
    languange: 'ASP ,javascript(Jquery, Vue.js)',
    tool: 'Adobe XD',
    version: '',
    server: '',
    cms: '',
    other: '',
    image1: '/works/06/pc.jpg',
    image2: '/works/06/tab.jpg',
    image3: '',
    description:
        '大手建築会社様社内ツールの開発です。PCとタブレットでの使用を主眼に置いたため、スマートフォン用のデザインは作成致しませんでした。<br>社内のデフォルトブラウザがインターネットエクスプローラー(IE)だったため、IEで正常に動作することを考えながらのデザイン、コーディングとなりました。<br>aspxで旧デザインは制作されており、開発予算はそこまで多くいただけなかったようなので、できるだけ工数をかけないためにも現行のaspxを基礎として、<br>主にCSSを書き換えることでデザインを作るという形だったことと、2000年代に流行したテーブルレイアウトにより書かれているソースで開発を任された経験が少なかったため、<br>大変貴重な経験をさせていただいたと思っております。{display: block}のようなタグに直接CSSを設定することはせず、BEMによるclass名設定を遵守いたしました。画像の挿入は最小限とし、できうる限りCSS、JQuery、Vue.jsで描写やページを構築しました。<br>私がページ開発をする場合、最低でも2つ以上のブレイクポイントを設定したレスポンシブ設定を心がけます。',
    thumb: '/works/06/pc.jpg',
    },
    {
    title: 'LP制作',
    period: '1ヶ月',
    languange: 'HTML, CSS(Sass), Javascript(Jquery)',
    tool: 'Adobe XD',
    version: '',
    server: '',
    cms: '独自CMS',
    other: '',
    image1: '/works/07/pc.jpg',
    image2: '',
    image3: '',
    description:
        'VAIOの公式ECサイト上に掲載されたレンタルサービスについての説明ページを作成しました。時間もなく、また、写真素材なども少ない中で、MV用の画像などを独自で作成し、フリー素材を使いながら、ブランドイメージに沿う用な”男性的でスマート”なイメージを表現しました。',
    thumb: '/works/07/pc.jpg',
    },
    {
    title: 'ポータルサイト 保守運用',
    period: '6ヶ月',
    languange: 'HTML, CSS(Sass), Javascript(Jquery)',
    tool: 'Illustrator',
    version: '',
    server: '',
    cms: 'SiteCore',
    other: '',
    image1: '/works/08/pc.jpg',
    image2: '',
    image3: '/works/08/sp.jpg',
    description:
        'e-MRという医療従事者向け情報サイトの更新や新規ページ作成などを請け負っておりました。医療従事者、特にお医者様はインターネットでの情報収集やスマートデバイスの使い方が上手ではないという通説があります。これは、医療知識がクローズドであること、医療現場でのIoT化が遅れていることなどが要因と言われています。そのためWeb開発の当たり前、webデザインのオーソドックスが通用しないという開発を進めていく上での難しさがありました。基本に立ち返り、「ユーザーが求めるデザインとは何か」ということを改めて考えさせられました。<br>領域別ページは、サイト内で乱立する記事ページやウェビナーへの導入リンクを、呼吸器科のお医者様向け、循環器科のお医者様向けというように分野別にまとめて導入しやすくする狙いがありました。',
    thumb: '/works/08/pc.jpg',
    },

]
