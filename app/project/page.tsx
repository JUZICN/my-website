import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Project",
  description: "Juzis Project",
};

export default function Work() {
  return (
    <Container size="large">
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          This page is for showcasing my projects.
        </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Projects</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          2023-{new Date().getFullYear()}
        </p>
          <p>1.<a href="https://me.juz1.cn" target="_blank">About</a>   AboutMe</p>
          <p>2.<a href="https://juz1.cn/blog" target="_blank">Blog</a>   MyBlog</p>
          <p>3.<a href="https://status.juz1.cn" target="_blank">Status</a>   MyStatus</p>
          <p>4.<a href="https://sponsor.juz1.cn" target="_blank">Sponsor</a>   SponsorMe</p>
      </div>
      <script src="https://res.juz1.cn/js/copyright.js" async></script>
              <Footer />
    </Container>
  );
}