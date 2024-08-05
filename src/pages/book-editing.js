import WEARE from "@/component/editing/LetUsWEARE"
import PWMODE from "@/component/editing/CoverDesign"
import BTM from "@/component/bottomLogos"
import CTA from "@/component/cta3"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent1, MRCards } from "@/component"
import PublishingNewComponent from "@/fa-component/PublishingNewComponent"
import Head from "next/head"

const BookEditing = () => {
  const MRCardData = [
    {
      classes: "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      cta: false,
      stepText: false,
      indexing: false,
      content: [
        {
          title: "Proofreading: ",
          textColor: "text-[#40BEE2]",
          desc: "Have you ever wondered how a simple typo can take away from the brilliance of your story? At Best Selling Publisher, we understand that even the smallest errors can cast a shadow over your masterpiece. That's why our proofreading service doesn't just skim the surface; we dive deep into your manuscript, carefully checking for grammar, punctuation, and spelling mistakes to ensure your final product is flawless.",
        },
        {
          title: "Line Editing:",
          textColor: "text-[#40BEE2]",
          desc: "Best Selling Publisher's line editing service enhances your manuscript's readability, flow, and style by refining sentence structure, diction, and pacing. Our line editors delve deep into your prose, smoothing out awkward phrasing, clarifying ambiguous passages, and polishing language for maximum impact.",
        },
        {
          title: "Developmental Editing:",
          textColor: "text-[#40BEE2]",
          desc: "Do you know what separates a good book from a great one? At Best Selling Publisher, our developmental editing service provides invaluable feedback and guidance to strengthen your manuscript's structure, plot, and character development. Our developmental editors collaborate closely with you to identify strengths, address weaknesses, and unlock the full potential of your story.",
        },
      ]
    },
  ]
  const MRCardData2 = [
    {
      classes: "bg-[#fff] shadow-lg mr-2xl:px-4 px-2 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      stepText: "Step",
      indexing: true,
      content: [
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Submit Your Manuscript",
          desc: "Share your manuscript, and we will get started.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Edit & Design",
          desc: "We retain the context but add that artistic flavor.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Review & Approve",
          desc: "You review and approve our creative contributions.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "Your book has been published and distributed.",
        },
      ]
    }]
  return (
    <main>
      <Head>
        <title>Professional Book Editing Services | Best Selling Publisher</title>
        <meta name="description" content="Make your book unforgettable with our book editing services. We fine-tune your manuscript for clarity, coherence, and reader engagement." />
        
        <meta property="og:url" content="https://bestsellingpublisher.com/book-editing/" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com/book-editing/" />
      </Head>
      <MRHero
        title="Craft the Perfect Narrative for Your Manuscript with our Expert Book Editing Services"
        desc="Do you feel your book can go from good to exceptional with some editing? <span class='h-3 block'></span>
        At Best Selling Publisher, we believe every manuscript holds the potential to become a masterpiece. Our book editing services are designed to refine your writing, ensuring each page resonates with your readers. With a track record of transforming over 400 million words for 100+ authors, our expertise is your gateway to publishing success."
        logos="images/banner/img2.png"
        counter={true}
        classes='bg-[#fefefe] !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/night-laptop.png')]"
      />
      <Enlistedlogo />
      <MRContent1
        subTitle="If You Think It’s Good"
        title="We Can Always Make It Better"
        desc="With a keen eye for detail and a deep understanding of storytelling, our editors work tirelessly to uplift manuscripts to their highest standard. From refining plot arcs to perfecting prose, they methodically craft each sentence to ensure clarity, coherence, and resonance. Here’s what you get if you choose us:"
        img1="/imageAR/book-editing2.png"
        list={[
          "We edit the structure of your manuscript.",
          "We provide critical and helpful feedback.",
          "We format your text without affecting its readability.",
          "We ensure that there are no grammatical errors.",
          "We can rewrite or paraphrase the text for you.",
          "But you will always have the last say…"
        ]}
        direction="flex-row-reverse"
      />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Best Selling Publishers."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <MRCards
        subTitle="We tailor our services to give you"
        title={`Expert Book Editing Solutions `}
        desc="Trusted by authors worldwide, Best Selling Publisher's professional editors are renowned for their expertise, professionalism, and unwavering dedication to crafting exceptional manuscripts that enthrall readers and leave a lasting impact."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="steps"
        data={MRCardData}
      />
      <BTM />
      <CTA
        subtitle="What Are You Waiting For?"
        title="Let's Kickstart Your Project Today!"
        desc="Need help or have questions? Our friendly team is here to assist you during our business hours. We warmly invite you to reach out; your questions and needs always take center stage with us. Feel free to get in touch anytime."
      />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`We emphasize prompt deliveries because we don’t like to keep you waiting. Following are the <br class="mr-xl:block hidden" /> 4 easy steps that keep us streamlined from the beginning:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2} />
      <SwiperComponents />
      <MRContact />
    </main>
  )
}

export default BookEditing