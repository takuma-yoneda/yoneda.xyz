import React, { ReactNode } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import NameCard from '@/components/NameCard'
import SectionHeading from '@/components/SectionHeading'

interface RenderAuthorsProps {
  authors: string[];
  targetAuthor: string;
}

const publications = [
  {"title": "Cold Diffusion on the Replay Buffer: Learning to Plan from Known Good States",
  "authors": ["Zidan Wang", "Takeru Oba", "Takuma Yoneda", "Rui Shen", "Matthew Walter", "Bradly C. Stadie"],
  "note": "In submission to CoRL 2023",
  "tooltip": "In submisssion; The draft will be available soon."},
  {"title": "Statler: STATe-maintaining Language models for Embodied Reasoning",
  "authors": ["Takuma Yoneda*", "Jiading Fang*", "Peng Li*", "Huanyu Zhang*", "Tianchong Jiang", "Ben Picker", "David Yunis", "Shengjie Lin", "Luzhe Sun", "Richard Xu", "Hongyuan Mei", "Matthew Walter"],
  "note": "In submission to CoRL 2023",
  "url": "http://arxiv.org/abs/2306.17840"},
  {"title": "Blending Imitation and Reinforcement Learning for Robust Policy Improvement",
  "authors": ["Xuefeng Liu", "Takuma Yoneda", "Matthew Walter", "Yuxin Chen", "Rick L. Stevens"],
  "note": "In submission to NeurIPS 2023",
  "tooltip": "In submisssion; The draft will be available soon."},
  {"title": "Active Policy Improvement from Multiple Black-box Oracles",
  "authors": ["Xuefeng Liu*", "Takuma Yoneda*", "Chaoqi Wang*", "Matthew Walter", "Yuxin Chen"],
  "note": "ICML 2023",
  "url": "https://arxiv.org/abs/2306.10259"},
  {"title": "6-DoF Stability Field via Diffusion Models",
  "authors": ["Takuma Yoneda", "Tianchong Jiang", "Gregory Shakhnarovich", "Matthew R. Walter"],
  "note": "In submission to IROS 2023",
  "tooltip": "In submisssion; The draft will be available soon."},
  {"title": "To the Noise and Back: Diffusion for Shared Autonomy", 
  "authors": ["Takuma Yoneda", "Luzhe Sun", "Ge Yang", "Bradly C. Stadie", "Matthew R. Walter"],
  "url": "https://arxiv.org/abs/2302.12244",
  "note": "To appear at RSS 2023",
  "links": {"website": "https://diffusion-for-shared-autonomy.github.io/"}},
  {"title": "Invariance Through Latent Alignment", 
  "authors": ["Takuma Yoneda*", "Ge Yang*", "Matthew R. Walter", "Bradly C. Stadie"],
  "url": "https://arxiv.org/abs/2112.08526",
  "note": "RSS 2022",
  "links": {"website": "https://invariance-through-latent-alignment.github.io/"}},
  {"title": "A Robot Cluster for Reproducible Research in Dexterous Manipulation",
  "authors": ["Stefan Bauer", "Felix Widmaier", "Manuel Wüthrich", "Niklas Funk", "Julen Urain De Jesus", "Jan Peters", "Joe Watson", "Claire Chen", "Krishnan Srinivasan", "Junwu Zhang", "Jeffrey Zhang", "Matthew R. Walter", "Rishabh Madan", "Charles Schaff", "Takahiro Maeda", "Takuma Yoneda", "Denis Yarats", "Arthur Allshire", "Ethan K. Gordon", "Tapomayukh Bhattacharjee", "Siddhartha S. Srinivasa", "Animesh Garg", "Annika Buchholz", "Sebastian Stark", "Thomas Steinbrenner", "Joel Akpo", "Shruti Joshi", "Vaibhav Agrawal", "Bernhard Schölkopf"],
  "url": "https://arxiv.org/abs/2109.10957",
  "note": "arXiv:2109.10957 2021"},
  {"title": "Benchmarking Structured Policies and Policy Optimization for Real-World Dexterous Object Manipulation",
  "authors": ["Niklas Funk*", "Charles Schaff*", "Rishabh Madan*", "Takuma Yoneda*", "Julen Urain De Jesus", "Joe Watson", "Ethan K. Gordon", "Felix Widmaier", "Stefan Bauer", "Siddhartha S. Srinivasa", "Tapomayukh Bhattacharjee", "Matthew R. Walter", "Jan Peters"],
  "url": "https://arxiv.org/abs/2105.02087",
  "note": "IEEE Robotics and Automation Letters 2021",
  "links": {"website": "https://sites.google.com/view/benchmark-rrc", "code": "https://github.com/cbschaff/benchmark-rrc"}},
  {"title": "Grasp and Motion Planning for Dexterous Manipulation for the Real Robot Challenge",
  "authors": ["Takuma Yoneda*", "Charles Schaff*", "Takahiro Maeda", "Matthew R. Walter"],
  "url": "https://arxiv.org/abs/2101.02842",
  "note": "arXiv:2101.02842 2021"},
  {"title": "Pow-Wow: A Dataset and Study on Collaborative Communication in Pommerman",
  "authors": ["Takuma Yoneda", "Matthew R. Walter", "Jason Naradowsky"],
  "url": "https://larel-ws.github.io/assets/pdfs/pow_wow_a_dataset_and_study_on_collaborative_communication_in_pommerman.pdf",
  "note": "the First Workshop on Language in Reinforcement Learning (LaReL), ICML 2020",
  "links": {"website": "https://takuma.yoneda.xyz/pow-wow/"}},
  {"title": "UCL Machine Reading Group: Four Factor Framework For Fact Finding (HexaF)",
  "authors": ["Takuma Yoneda", "Jeff Mitchell", "Johannes Welbl", "Pontus Stenetorp", "Sebastian Riedel"],
  "url": "https://www.aclweb.org/anthology/W18-5515",
  "note": "Proceedings of the First Workshop on Fact Extraction and VERification (FEVER), EMNLP 2018"}
];

const Intro = () => {
  return (
    <>
      <p>
          I am a PhD candidate at <Link href="https://ttic.edu/">TTIC</Link>
          , an academic institute located on the campus of the <Link href="https://www.uchicago.edu/">University of Chicago</Link>.
          My research interest lies in the intersection of Reinforcement Learning and Natural Language Processing, especially in the context of robotics.
      </p>
      <p>
          In the past, I have interned at several places including <Link href="https://mr.cs.ucl.ac.uk/">UCL</Link>(2018 summer) and <Link href="https://www.preferred.jp/en/">Preferred Networks</Link> (2019 summer; known for <Link href="https://github.com/chainer/chainer">Chainer</Link>).
          <br />
          I am now at <Link href="https://ttic.edu/ripl/">Robot Intelligence through Perception Lab</Link>{' '}
          working with <Link href="https://bstadie.github.io/">Bradly Stadie</Link> and <Link href="https://ttic.uchicago.edu/~mwalter/">Matthew R. Walter</Link>.
          <br />
      </p>
      <p className='mt-2'>
        TTIC featured me recently: <Link href="https://www.ttic.edu/student-highlights/yoneda/">Takuma Yoneda - Student Highlight</Link>
      </p>
    </>
  )
}

const RenderAuthors: React.FC<RenderAuthorsProps> = ({ authors, targetAuthor }) => {
  /* Render authors with boldface if the author is the targetAuthor (wrote with help with ChatGPT / Claude) */
  const authorsComponents = authors.map((author, index) => {
    if (author.includes(targetAuthor)) {
      return <b key={index}>{author}</b>;
    } else {
      return author;
    }
  });

  const authors_str = authorsComponents.map((author, index) => {
    /* Separate the authors by comma, and use ", and" for the last one */
    if (index === authorsComponents.length - 1) {
      return author;
    } else if (index === authorsComponents.length - 2) {
      return (
        <React.Fragment key={index}>
          {author} and&nbsp;
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={index}>
          {author},&nbsp;
        </React.Fragment>
      );
    }
  });

  return <p className="text-sm">{authors_str}</p>;
};


const Publications = () => {
  return (
    <>
      <SectionHeading>Publications (<Link href='https://scholar.google.com/citations?user=EtYv_AIAAAAJ&hl=en'>Google Scholar</Link>)</SectionHeading>
      <ul className='list-disc list-inside'>
        {publications.map((pub, index) => (
          <li key={index}>
            {pub.url ? (
              <Link href={pub.url} className="font-medium"> {pub.title} </Link>
            ) : (
              pub.tooltip ? (
                <div className="tooltip" data-tip={pub.tooltip}>
                  <a className="font-medium">{pub.title}</a>
                </div>) : (
                  <a className="font-medium">{pub.title}</a>
              )
            )}
            <div><RenderAuthors authors={pub.authors} targetAuthor="Takuma Yoneda" /></div>
            {pub.note ? (<p className='text-sm italic'>{pub.note}</p>) : (<></>)}
          </li>
        ))}
      </ul>
    </>
  )
}

const Internships = () => {
  return (
    <>
      <SectionHeading>Internships</SectionHeading>
      <ul className='list-disc list-inside'>
        <li>
          <Link href='https://preferred.jp/en/'>Preferred Networks, Inc.</Link> (Tokyo, Japan; 2019 Summer)
          {/* <p>Deep Reinforcement Learning for multi-agent cooperative game with communication.</p> */}
        </li>
        <li>
          <Link href='https://mr.cs.ucl.ac.uk/'>University College London</Link> (London, UK; 2018 Summer)
          {/* <p>Led a project on Fact-Extraction and VERification (FEVER) shared task. We got the 2nd place in the competition.</p> */}
        </li>
        <li>
          <Link href='https://tech.zozo.com/en/'>VASILY, Inc.</Link> (Tokyo, Japan; 2017 Summer)
          {/* <p>Learning a joint embedding space for images and descriptions to realize a multi-modal search system.</p> */}
        </li>
        <li>
          <Link href='https://yamaha-motor.com/'>Yamaha Motor Corporation</Link> (Shizuoka, Japan; 2017 Spring)
          {/* <p>Improving a model to obtain better bounding box in car detection tasks.</p> */}
        </li>
      </ul>
    </>
  )
}

const Talks = () => {
  return (
    <>
      <SectionHeading>Talks</SectionHeading>
      <ul className='list-disc list-inside'>
        <li><Link href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fiimlab%2Fposts%2Fpfbid02sd4jCD6iHZTSSCuPwAFZv3gKvqoEAWTUi7vJj2vqdrCxiPqHHe68z9XbWTUkGVqml">Invited talk (virtual)</Link> at <Link href="https://www.toyota-ti.ac.jp/Lab/Denshi/iim/index.html">Intelligent Information Media lab at TTIJ</Link></li>
        <li><Link href="https://aip.riken.jp/events/event_79885/?lang=en">Invited talk</Link> at <Link href="https://www.riken.jp/en/research/labs/aip/">RIKEN AIP</Link></li>
      </ul>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Takuma Yoneda</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <NameCard
            name="Takuma Yoneda"
            altname="米田 拓真"
            image_url="/tyoneda.jpg"
            mobile={false}
          />
          <div className='flex flex-col items-center'>
            <div className='max-w-screen-md'>
              <Intro />
              <Publications />
              <Internships />
              <Talks />
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
