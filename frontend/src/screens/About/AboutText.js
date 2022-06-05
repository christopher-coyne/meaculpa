import { Link } from "react-router-dom";

const AboutText = [
  {
    title: "What is this page?",
    text: (
      <>
        This is a personal project that shows reviews for Columbia professors
        and courses. The original reviews were scraped from Culpa.app, the site
        that this is based on. But while Culpa.app is for all professors, this
        site only includes the data for computer science professors and courses.
        Yes, I also know that a million other Columbia students had the same
        idea :/
      </>
    ),
  },
  {
    title: "What's the tech stack?",
    text: (
      <>
        React on the frontend, node + express on the backend. The database is
        postgreSQL and hosted on Amazon Web Services. I used the python library
        beautiful soup for the web scraping
      </>
    ),
  },
  {
    title:
      "This is pretty nifty! Is there any way I can explore the data more?",
    text: (
      <>
        Part of the reason I made this was I thought it would be cool to take
        the review data and show it in an Insightful or interesting way. I
        created some visualizations using the ChartJS library{" "}
        <Link to={"/full-data"}>here</Link>.
      </>
    ),
  },
  {
    title: "Can I submit my own review?",
    text: (
      <>
        Yep! You can click the “submit” button on the navbar or the homepage. Or
        you can click <Link to={"/submit"}>here</Link>. However, The admin of
        this page (me) reserves the right to remove any review if it has
        inappropriate content. In the future, I hope to implement authentication
        + account creation so you can delete reviews as well.
      </>
    ),
  },
  {
    title: "What are the gold and silver icons next to some of the professors?",
    text: (
      <>
        These are gold or silver nuggets. On the original culpa site, if a
        professor is particularly outstanding or Has great reviews, they will
        receive a gold or silver nugget.
      </>
    ),
  },
  {
    title: "Other resources?",
    text: (
      <>
        Major shoutout to www.ui-gradients.com for the free gradient backgrounds
        :sunglasses"
      </>
    ),
  },
];

export default AboutText;
