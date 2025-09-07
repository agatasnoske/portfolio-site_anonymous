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

export const worksFrontEndData: WorkItem[] = [
    {
    title: 'サイト改修業務',
    period: '3ヶ月',
    languange: 'HTML5, css3,, Javascript(JQuery)',
    tool: 'Adobe XD',
    version: '',
    server: '',
    cms: '',
    other: '',
    image1: '/works/11/pc.jpg',
    image2: '',
    image3: '/works/11/sp.jpg',
    description:
        '他社ベンダー様が製作したデザインをディレクター1名、2名のエンジニアチームでコーディングいたしました。<br>前任のエンジニアがすでにメインページを途中まで製作していたところから引き継ぎ、もう一名のエンジニアと手分けして下層ページの制作を進めていきました。<br>下層ページとTOPページの新規制作がある程度完了した段階で一人体制となり、その後の修正対応を進めました。<br>ローンチ直前隣、お客様からも多数の修正ポイントを上げていただき、一人での作業はかなり困難ではございましたがなんとか完遂することができました。<br>非常にレギュレーションが厳しく、各デバイスごとに制作されたデザインデータと寸分違わように制作しなければなりませんでしたので、細かくパーツをpngとして書き出し、文字や小さいアイコンなどのデータはSVGに加工して素材とし、制作を進めていきました。マルチブラウザ対応も必要であったため、各ブラウザ用にjsは書き換え（javascriptのライブラリはJqueryを使用）ながら製作していきました。',
    thumb: '/works/11/pc.jpg',
    },
    {
    title: 'LP制作',
    period: '1ヶ月',
    languange: 'HTML5, css3,, Javascript(JQuery)',
    tool: 'Illustrator,Photoshop',
    version: 'git(github)',
    server: '',
    cms: '',
    other: '',
    image1: '/works/09/pc.jpg',
    image2: '',
    image3: '',
    description:
        '某国内大手ECサイト向けのLPを製作しました。すでにFIXしたphotoshopデータのデザインをもとに、コーディングを進めていきました。<br>非常にレギュレーションが厳しく、各デバイスごとに制作されたデザインデータと寸分違わように制作しなければなりませんでしたので、細かくパーツをpngとして書き出し、文字や小さいアイコンなどのデータはSVGに加工して素材とし、制作を進めていきました。マルチブラウザ対応も必要であったため、各ブラウザ用にjsは書き換え（javascriptのライブラリはJqueryを使用）ながら製作していきました。',
    thumb: '/works/09/pc.jpg',
    },
    {
    title: 'LP制作',
    period: '1ヶ月',
    languange: 'HTML, CSS(Sass), Javascript(Jquery)',
    tool: 'Illustrator,Photoshop',
    version: '',
    server: '',
    cms: '',
    other: '',
    image1: '/works/10/pc.jpg',
    image2: '',
    image3: '',
    description:
        'e-LINEatへの導入ページとして作成しました。短いスパンでデザインとコーディングを進める必要がありました。',
    thumb: '/works/10/pc.jpg',
    },

]
