import Link from "next/link";
import Date from "../companents/Date";
import Layout from "../companents/Layout";
import { getSortedPostsData } from "../lib/postsstatic";
import Image from "next/image";
import youtubeImg from "../public/images/cat.jpg";

export interface PostI {
  id: number
  title: string
  date: number
}

export default function Postsstatic(allPostsData: any) {

  return (
    <Layout home>
      <section className='' style={{ borderWidth: '1px', borderColor: 'red' }}>
        <h2>Blog</h2>
        <ul>
          {allPostsData.allPostsData.map((post: PostI) => (
            <li key={post.id}>
              <Link href={`/postsstatic/${post.id}`}>{post.id}</Link>
              <br />
              <small>
                <Date dateString={post.date} />
              </small>
              <br />
            </li>
          ))}
        </ul>
        <Image src={youtubeImg} width={500} alt="pev" placeholder="blur" />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
