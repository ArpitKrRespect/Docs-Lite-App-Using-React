import { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Project Plan: A detailed roadmap outlining the goals, milestones, and timelines for the upcoming project. Includes resource allocation and risk assessments.",
      filesize: "1.8 MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Downloading",
        tagColor: "Gray",
        progress: "20",
      },
    },
    {
      desc: "Marketing Strategy: A comprehensive guide to online and offline marketing tactics designed to increase brand visibility and customer engagement over the next quarter.",
      filesize: "2.3 MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "Yellow",
      },
    },
    {
      desc: "Financial Report: A monthly financial breakdown detailing revenue, expenses, profit margins, and projections for future growth. Critical for decision-making.",
      filesize: "3.5 MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        tagColor: "Gray",
      },
    },
    {
      desc: "User Feedback Summary: A compilation of user feedback from recent product launches, focusing on key insights for enhancing user experience and satisfaction.",
      filesize: "5.1 MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        tagColor: "Yellow",
      },
    },
    {
      desc: "Product Prototype: A high-fidelity mockup of the new product, showcasing the design, features, and user interface. Used for internal reviews and stakeholder presentations.",
      filesize: "4.2 MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        tagColor: "Gray",
      },
    },
    {
      desc: "Team Meeting Notes: A summary of key takeaways and action items from the latest team meeting, focusing on project progress, deadlines, and responsibilities.",
      filesize: "6.3 MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        tagColor: "Yellow",
      },
    },
    {
      desc: "Quarterly Report: A detailed analysis of company performance over the last quarter, including revenue trends, market share, and competitive analysis.",
      filesize: "7.0 MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        tagColor: "Gray",
      },
    },
    {
      desc: "Sales Presentation: A polished PowerPoint presentation aimed at potential clients, outlining the company’s value proposition, services, and case studies.",
      filesize: "8.5 MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Downloading",
        tagColor: "Yellow",
      },
    },
    {
      desc: "Client Proposal: A professionally written proposal for a new client, including project scope, pricing, and timelines, tailored to the client's specific needs.",
      filesize: "9.1 MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "Gray",
      },
    },
    {
      desc: "Annual Report: A comprehensive report summarizing the company’s achievements, financials, and strategy for the upcoming year. A key document for investors and stakeholders.",
      filesize: "10.2 MB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Downloading",
        tagColor: "Yellow",
        progress: "90",
      },
    },
  ];

  return (
    <div ref={ref} className="w-full h-screen fixed z-[3] top-0 left-0 p-5 flex gap-5 flex-wrap justify-center">
      {data.map((item, index) => (
        <Cards data={item} reference={ref} key={index} />
      ))}
    </div>
  );
};

export default Foreground;
