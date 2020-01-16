import React from 'react';
import ReactFullPage from '@fullpage/react-fullpage';
import Menu from './Menu';
import SectionCaseHead from './SectionCaseHead';
import SectionCaseContent from './SectionCaseContent';
import nezha from '../assets/case_nezha.jpg';
import earth from '../assets/case_earth.jpg';
import tiantan from '../assets/case_tiantan.png';
import shadow from '../assets/case_shadow.jpg';
import jinma from '../assets/case_jinma.png';
import zl from '../assets/case_zl.jpg';
import zl06 from '../assets/case_06.png';
import zl07 from '../assets/case_07.png';
import zl08 from '../assets/case_08.png';
import robots from '../assets/case_robots.jpg';

const cases = [
  {
    bg: nezha,
    title: '哪吒之魔童降世',
    descriptions: [
      'IMAX 3D首部国产动画电影',
      '打破中国动画电影史并晋升为中国影史三甲',
    ],
    rewards: [],
    details:
      '首映期间创动画电影最快破亿纪录、动画电影首日最高票房纪录、国产动画电影单周票房新纪录...“我是小妖怪，逍遥又自在。杀人不眨眼，吃人不放盐。”黑眼圈、小雀斑、鲨鱼牙、厌世脸...颠覆传统莲花化身，没有一丝仙气儿的熊孩子“丑哪吒“，在电影点映期间从无人问津到口碑爆棚，让人看到国漫崛起的新标准，新希望！',
    hasArrow: true,
  },
  {
    bg: earth,
    title: '流浪地球',
    descriptions: ['中国首部科幻巨作'],
    rewards: [
      { img: tiantan, names: ['第9届北京国际电影节天坛奖', '最佳视觉效果奖'] },
    ],
    details:
      '国内上映二十天，票房不断飙升突破43亿人民币，成为中国电影史票房亚军。它的出现，提升中国电影工业的新高度，弥补了在科幻题材的空白，为中国科幻电影照亮了前行的道路，开启中国科幻电影元年。',
    hasArrow: true,
  },
  {
    bg: shadow,
    title: '影',
    descriptions: [],
    rewards: [
      {
        img: jinma,
        names: [
          '第55届金马奖最佳导演',
          '最佳视觉效果',
          '最佳美术设计',
          '最佳造型设计',
        ],
      },
    ],
    details:
      '在提交《影》的渲染过程中，由于时间紧、任务重，PIXOMONDO与瑞云进行了大量的技术对接、测试和优化，最终实现生产流程API对接，简化了操作逻辑，使项目渲染更加便捷，实现高效产出。影片在第55届台湾金马奖与第13届亚洲电影大奖中狂揽8项大奖，10项提名，满载而归。',
    hasArrow: true,
  },
  {
    bg: zl,
    title: '战狼Ⅱ',
    descriptions: ['国内重工业商业大片时代的开端', '刷新中国电影票房新纪录'],
    rewards: [
      {
        img: zl06,
        names: ['中国电影周金鹤奖最佳影片'],
      },
      {
        img: zl07,
        names: ['“五个一工程”优秀作品奖'],
      },
      {
        img: zl08,
        names: ['中美电影节最佳电影'],
      },
    ],
    details:
      '上映首日破亿，96小时已破12亿，刷新了华语影史单日票房冠军纪录，创下华语电影史“最快破10亿”票房新纪录。中国市场观影人次达1.4亿，跻身全球影史“单一市场观影人次”榜首。',
    hasArrow: true,
  },
  {
    bg: robots,
    title: '三个机器人',
    descriptions: [
      'Netflix科幻动画选集《爱，死亡与机器人》之一',
      '《死侍》导演蒂姆·米勒与《纸牌屋》的导演大卫·芬奇联手监制',
    ],
    rewards: [],
    details:
      '“《三个机器人》这个项目与瑞云合作，让我喜出望外。瑞云渲染服务可以使我们在规定的期限内完成制作并交付。如果有项目上的需要，我们肯定会再次与他们合作。”——西班牙动画工作室Blow Studio',
    hasArrow: true,
  },
  {
    bg: robots,
    title: '三个机器人',
    descriptions: [
      'Netflix科幻动画选集《爱，死亡与机器人》之一',
      '《死侍》导演蒂姆·米勒与《纸牌屋》的导演大卫·芬奇联手监制',
    ],
    rewards: [],
    details:
      '“《三个机器人》这个项目与瑞云合作，让我喜出望外。瑞云渲染服务可以使我们在规定的期限内完成制作并交付。如果有项目上的需要，我们肯定会再次与他们合作。”——西班牙动画工作室Blow Studio',
    hasArrow: true,
  },
];

const Case = () => (
  <>
    {/* <Menu /> */}
    <ReactFullPage
      scrollingSpeed={1000}
      // parallax
      // parallaxOptions={{
      //   type: 'reveal',
      //   percentage: 100,
      //   property: 'translate',
      // }}
      render={() => (
        <ReactFullPage.Wrapper>
          <SectionCaseHead />
          {cases.map((item, i) => (
            <SectionCaseContent
              key={i}
              bg={item.bg}
              title={item.title}
              descriptions={item.descriptions}
              rewards={item.rewards}
              details={item.details}
              hasArrow={item.hasArrow}
            />
          ))}
        </ReactFullPage.Wrapper>
      )}
    />
  </>
);

export default Case;
