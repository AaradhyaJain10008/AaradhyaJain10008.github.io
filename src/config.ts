export const siteConfig = {
  name: "Aaradhya Jain",
  title: "Business & Data Analyst",
  description: "Portfolio of Aaradhya Jain - MS in Business Analytics @ Drexel University", 
  accentColor: "#1d4ed8",
  social: {
    email: "aj3265@drexel.edu",
    linkedin: "https://linkedin.com/in/aaradhyajain108",
    twitter: "", 
    github: "https://github.com/AaradhyaJain10008",
  },
  aboutMe:
    "MS in Business Analytics candidate at Drexel University with a background in Computer Applications. I specialize in transforming complex datasets into actionable business insights using SQL, Python, and Tableau. With experience ranging from retail sales optimization to NLP-driven sentiment analysis, I am passionate about leveraging data-driven storytelling to drive executive-level decision-making and operational efficiency.",
  skills: [
    "SQL", 
    "Python", 
    "Tableau", 
    "Power BI", 
    "R", 
    "Snowflake", 
    "AWS", 
    "Pandas/NumPy", 
    "ETL Pipelines", 
    "Statistical Modeling",
    "A/B Testing"
  ],
  projects: [
    {
      name: "Aramark MLB Sales & Operations Dashboard",
      description:
        "Analyzed 100k+ records via SQL to identify sales velocity trends and built a real-time Power BI dashboard for onsite managers, reducing stockouts by 15% during peak game-day demand.",
      link: "https://github.com/AaradhyaJain10008",
      skills: ["SQL", "Power BI", "Trend Analysis"],
    },
    {
      name: "Customer Sentiment & NLP Analysis",
      description:
        "Constructed a Python NLP pipeline for 10,000+ reviews using NLTK and TextBlob; applied tokenization and sentiment scoring to categorize feedback for product improvement strategies.",
      link: "https://github.com/AaradhyaJain10008",
      skills: ["Python", "NLP", "Data Cleaning"],
    },
    {
      name: "Supply Chain ROI & Logistics Analysis",
      description:
        "Identified 5% cost reduction opportunities by conducting a comparative analysis of logistics routes using Tableau and modeled ROI for delivery tiers using SQL.",
      link: "https://github.com/AaradhyaJain10008",
      skills: ["Tableau", "SQL", "Supply Chain Analytics"],
    },
  ],
  experience: [
    {
      company: "Magadh Tech",
      title: "Data Analytics Intern",
      dateRange: "Jun 2025 - Aug 2025",
      bullets: [
        "Streamlined the processing of 250k+ daily records using Python (Pandas), reducing manual errors by 20% and cutting latency by 60%.",
        "Queried Snowflake databases to analyze user engagement for 10+ features, identifying key drivers for the product roadmap.",
        "Designed Tableau dashboards to track DAU and retention, providing leadership visibility into a 12% increase in user activity.",
      ],
    },
    {
      company: "Dollex Aggrotech Ltd.",
      title: "Business Analyst Intern",
      dateRange: "Sep 2023 - Aug 2024",
      bullets: [
        "Orchestrated scalable SQL workflows to replace manual Excel reporting, saving 10+ hours per month for operations teams.",
        "Developed Power BI dashboards for 500+ SKUs, optimizing stock allocation and reducing holding costs by 8%.",
        "Performed root cause analysis on 1,000+ discrepant records using SQL, achieving 99.9% accuracy for financial compliance.",
      ],
    },
    {
      company: "Ai Trillion",
      title: "Product Analyst Intern",
      dateRange: "Jun 2023 - Aug 2023",
      bullets: [
        "Managed API integrations from 5+ e-commerce platforms, ensuring 100% data flow reliability for real-time analytics.",
        "Translated business requirements into technical specifications, accelerating feature launch cycles by 10%.",
        "Executed validation checks on third-party streams using Python, identifying schema issues before system deployment.",
      ],
    },
  ],
  education: [
    {
      school: "Drexel University, LeBow College of Business",
      degree: "Master of Science in Business Analytics",
      dateRange: "Expected Jun 2026",
      achievements: [
        "GPA: 3.84/4.0",
        "Relevant Coursework: Predictive Analytics, Database Management, Python for Business",
      ],
    },
    {
      school: "Prestige Institute of Management and Research",
      degree: "Bachelor of Computer Applications",
      dateRange: "Jun 2024",
      achievements: ["Focus on Computer Science and Data Structures"],
    },
  ],
};
