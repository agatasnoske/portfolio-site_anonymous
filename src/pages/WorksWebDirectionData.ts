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

export const WorksWebDirectionData: WorkItem[] = [
    {
    title: 'ECサイトディレクション業務',
    period: '6ヶ月',
    languange: 'HTML5, css3, Sass, Javascript(JQuery)',
    tool: 'Illustrator',
    version: 'git(github)',
    server: '',
    cms: '',
    other: '',
    image1: '/works/15/1.png',
    image2: '',
    image3: '',
    description:
        'デザインサイドのディレクターを担当。途中からの参画であったため、完成後のデザインの修正や、未完の静的ページ、商品詳細ページのデザインのディレクションを担当しました。<br>客先MTGでお客様の要望をもとにワイヤーデザインを作成。FIX後にデザイナーに依頼を行い、適宜フィードバックを行いながらデザインを完成させていきました。<br>その後コーダーに詳細を伝え、コーディング依頼を行いますが、工数的に難しい場合、自身で巻き取りコーディングを行いました。',
    thumb: '/works/15/thumb.png',
    }
]
