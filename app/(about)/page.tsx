/*
 * @Author: JUZICN juz1cn@163.com
 * @Date: 2024-09-01 11:58:31
 * @LastEditors: JUZICN juz1cn@163.com
 * @LastEditTime: 2024-09-01 12:01:20
 * @FilePath: \personalweb\app\(about)\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Container from "@/components/shared/container";
import Social from "@/components/social";
import Footer from '@/components/footer';

export default function About() {
  const paragraphs = [
    `我喜欢编程。玩转代码、发现新技术以及构建有趣且实用的项目是我的最爱。在项目页面上，我会展示所有项目，包括Github仓库和在线演示。`,
    `我热爱软件开发，并且乐于接受用户反馈以改进整体用户体验。特别是当可以简化生产过程并专注于构建时，这让我感到非常兴奋。`,
    `在空闲时间，我喜欢制作关于编程的视频。不仅仅是教程，我还会分享一些看法和经验。你可以在哔哩哔哩上搜索“他五格连我三刀”找到我。`,
  ];

  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert 
      text-zinc-800 dark:text-zinc-200 container animate-enter"
    >
      <p className="my-5 text-zinc-800 dark:text-zinc-200">
        你好👋, 我叫橘子. 一个山东的学生
      </p>
      <script src="https://res.juz1.cn/js/copyright.js" async></script>
      {paragraphs.map((paragraph, index) => (
        <div
          key={paragraph}
          style={
            { "--stagger": index } as React.CSSProperties & {
              [key: string]: number;
            }
          }
        >
          <p className={index === paragraphs.length - 1 ? "mb-8" : ""}>
            {paragraph}
          </p>
          {index === 0 && <hr />}
        </div>
      ))}
      <Social />
      <Footer />
    </Container>
  );
}
