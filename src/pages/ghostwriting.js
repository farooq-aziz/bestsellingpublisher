import CTA from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1, MRCards } from "@/component"
import Head from "next/head"

const ProfessionalGhostwriting = () => {
  const MRContent2Data = [
    {
      title: "Fiction",
      desc: "Immerse yourself in a world of endless possibilities with fiction, where imagination knows no bounds. From thrilling adventures to heartwarming romances, fiction offers an escape into enchanting narratives crafted by talented storytellers."
    },
    {
      title: "Informative",
      desc: "In a world brimming with knowledge, informative literature serves as a guiding light, illuminating the path to understanding and enlightenment. From academic textbooks to engaging non-fiction, informative works provide readers with valuable insights and practical wisdom on a myriad of subjects."
    },
    {
      title: "Memoir",
      desc: "Journey through the world of lived experiences with memoirs, where personal narratives weave tales of triumph, resilience, and self-discovery. Memoirs offer a glimpse into the intimate moments and transformative events that shape a person's life, inviting readers to connect with the raw authenticity of the human experience."
    },
    {
      title: "Children's Book",
      desc: "Spark the imagination and ignite a love for reading with children's books, where whimsy and wonder abound on every page. From colorful picture books to enchanting fairy tales, children's literature enthralls young minds and fosters a lifelong passion for learning and creativity. "
    },
    {
      title: "Self Help Book",
      desc: "Empower yourself to steer life's challenges and unlock your full potential with self-help books, where personal growth and transformation take center stage. From practical strategies for success to insights on mindfulness and resilience, self-help literature offers valuable tools and guidance for individuals striving to live happier, healthier, and more fulfilling lives."
    },
    {
      title: "Biography",
      desc: "Probe into the lives of extraordinary individuals and explore the world of human existence with biographies, where real-life stories unfold with depth and authenticity. From historical figures to modern-day icons, biographies offer a glimpse into the triumphs, tribulations, and defining moments that shape a person's legacy."
    }
  ]
  const MRCardData = [
    {
      classes: "bg-[#F2F2F2] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-center",
      content: [
        {
          icon: "",
          title: "Seal Of Approval",
          desc: "100% Original Content",
        },
        {
          icon: "",
          title: "In-Depth Review System",
          desc: "Error-Free Copies",
        },
        {
          icon: "",
          title: "Unlimited Revisions",
          desc: "Amendments and Omissions",
        },
        {
          icon: "",
          title: "Rights Of Ownership Maintained",
          desc: "Copyrights",
        },
      ]
    }]
  const MRCardData2 = [
    {
      classes: "bg-[#fff] shadow-lg mr-2xl:px-4 px-2 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      stepText: "Step",
      indexing: true,
      content: [
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Submit Your Manuscript",
          desc: "Start your publishing process by sharing your manuscript with us.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Edit & Design",
          desc: "We add our artistic expertise while retaining your unique voice.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Review & Approve",
          desc: "We will NEVER go above your head! Your approval matters, and we want to ensure our creative contributions align with your vision.",
        },
        {
          textColor: "text-[#40BEE2] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "Witness your book being published and reaching readers across the globe.",
        },
      ]
    }]
  return (
    <main>
      <Head>
        <title>Professional Ghostwriting Services | Best Selling Publisher</title>
        <meta name="description" content="Best Selling Publisher offers professional ghostwriting services tailored to your needs. Start your publishing journey today and see why we're the premier choice for authors." />

        <meta property="og:url" content="https://bestsellingpublisher.com/ghostwriting/" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com/ghostwriting/" />
      </Head>
      <MRHero
        title="Affordable and Professional  <br /> Ghostwriting Services"
        desc="Do you know how to make your content incredible? You team up with the experts! </br> Over the years, we have assisted innumerable authors who aspired to become the next best sellers. If you plan to be one of them, we are here for you."
        logos="images/banner/img2.webp"
        counter={true}
        classes='!py-[80px] bg-[#fefefe]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/serious-man.webp')]"
      />
      <Enlistedlogo />
      <MRCards
        subTitle="Our Services Have Been Constantly Hailed as Remarkable"
        title={`What Makes Us the Premier Choice in <br class="mr-xl:block hidden" /> Professional Ghostwriting?`}
        desc="Best Selling Publisher's ghostwriting services truly stand out as a class apart. Their team of expert writers possesses an unparalleled ability to capture the unique voice and essence of each client, flawlessly translating their ideas into fascinating prose. What sets them apart is their dedication to understanding the vision and goals of their clients."
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={true}
        variant="icons"
        data={MRCardData} />
      <MRContent1
        subTitle="Our Exceptional"
        title="Ghostwriting Services"
        desc="What if we tell you that you no longer have to worry about writing? It’ll ease so many of your problems, right? <span class='h-3 block'></span> Best Selling Publisher's exceptional ghostwriting services set them apart in the industry. Their team of skilled writers possesses a rare talent for impeccably embodying the voice and vision of their clients, whether it's for a memoir, a novel, or corporate literature."
        img2="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is simple yet effective."
        textTheme="text-white"
        list={[
          "Genuine Content",
          "Extensive Formatting",
          "Critical Reviews and Assessments",
          "Copy Editing",
          "Editing and Proofreading",
          "Publishing, Marketing, and Promotions",
          "Creative Consultancy",
          "Line and Developmental Editing"
        ]}
        classes="bg-[url('../../public/imageAR/serviceBG.webp')]"
        theme="dark"
      />
      <MRContent2
        subTitle="Our Creative Ghostwriters,"
        title="Breathe Life into the Mundane"
        desc={`Our ghostwriters accentuate your ideas on a whole different level. Every project that we work on inevitably becomes a page-turner.`}
        data={MRContent2Data}
      />
      <CTA
        subtitle="Your Book, Our Expertise"
        title=" – Let's Collaborate!"
        desc="Need assistance or have inquiries? <span class='block h-3'></span> Our committed team is at your disposal during our operational hours, ready to assist you. We extend a warm invitation to engage with us; after all, your inquiries and requirements are consistently our foremost concern, aren't they?"
      />
      <BTM />
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

export default ProfessionalGhostwriting