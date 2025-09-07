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

export const WorksSoloDevelopmentData: WorkItem[] = [
    {
    title: '企業コーポレートサイト制作',
    period: '3ヶ月',
    languange: 'HTML5, css3, PHP, Sass, Javascript(JQuery)',
    tool: 'Adobe XD',
    version: 'git(github)',
    server: 'AWS Lightsail',
    cms: 'Wordpress',
    other: 'Docker',
    image1: '/works/00/pc.jpg',
    image2: '/works/00/tab.jpg',
    image3: '/works/00/sp.jpg',
    description:
        'IT企業のロゴ、名刺のデザイン、コーポレートサイトサイトの開発をいたしました。こちらのページでは、UI/UXデザイン、フロントエンド開発についてご紹介いたします。<br>デザインコンセプトとしては、「”IT企業”然としすぎないデザイン」で、1ソースでのマルチデバイス対応、シンプルなデザインを目標にデザインを進めました。<br>サーバーは小規模開発ということで定額制のAWS Lightsailを採用。保守運用しやすいようにWordpressをCMSとして採用。ソースコードはgithubで管理し、dockerを使ってローカルで仮想環境を構築。作業内容をローカルで確認後、FTPで本番環境に反映するというフローで開発業務を実施いたしました。',
    thumb: '/works/00/sample.jpg',
    },

]
