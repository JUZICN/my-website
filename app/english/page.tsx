import Container from "@/components/shared/container";
import Social from "@/components/social";
import Footer from '@/components/footer';

export default function About() {
  const paragraphs = [
`I enjoy programming. Playing around with code, discovering new tech, and building fun and useful projects are my favorite. On the projects page, I will show you all of my projects with a Github repository and an online demo.`,
    `Driven by a love for software development, I thrive on receiving user
    feedback and improving the overall user experience. It's
    especially exciting to streamline production and focus solely on
    building.`,
    `In my spare time, I like creating videos about programming. Not just tutorial, but also share some opinions and experience. You can find me on 哔哩哔哩 by searching 他五格连我三刀`,
  ];

  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert 
      text-zinc-800 dark:text-zinc-200 container animate-enter"
    >
      <p className="my-5 text-zinc-800 dark:text-zinc-200">
        Hi👋, I&apos;m Juzi. A student at ShanDong
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