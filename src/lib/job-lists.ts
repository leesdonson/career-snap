export enum JobStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export enum JobType {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  INTERNSHIP = "INTERNSHIP",
  CONTRACT = "CONTRACT",
}

export type JobList = {
  jobId: string;
  companyLogo: string;
  companyName: string;
  jobTitle: string;
  jobLocation: string;
  jobLink: string;
  jobDescription: string;
  jobRequirements: string;
  jobBenefits: string;
  jobSalary: string;
  jobType: JobType;
  jobStatus: JobStatus;
  jobPostingDate: string;
  jobClossingDate: string;
};
export const jobLists: JobList[] = [
  {
    jobId: "1hdwudabhhd",
    companyLogo: "https://placehold.co/100x100/A7F3D0/1F2937?text=TechCorp",
    companyName: "TechCorp Innovations",
    jobTitle: "Senior Software Engineer",
    jobLocation: "San Francisco, CA",
    jobLink: "https://techcorp.com/careers/senior-software-engineer-sf",
    jobDescription:
      "Develop high-performance, scalable software solutions for our cutting-edge cloud platform. Work with a collaborative team on challenging projects.",
    jobRequirements:
      "5+ years experience in software development, strong proficiency in Python/Java, experience with AWS/Azure, Bachelor's in CS or related field.",
    jobBenefits:
      "Comprehensive health, dental, vision, 401k match, unlimited PTO, remote work options, professional development budget.",
    jobSalary: "$150,000 - $180,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-01",
    jobClossingDate: "2024-06-30",
  },
  {
    jobId: "2hdwzdsdcvcudabhhd",
    companyLogo: "https://placehold.co/100x100/FEE2E2/991B1B?text=GlobalBiz",
    companyName: "GlobalBiz Solutions",
    jobTitle: "Marketing Specialist",
    jobLocation: "New York, NY",
    jobLink: "https://globalbiz.com/jobs/marketing-specialist-ny",
    jobDescription:
      "Execute marketing campaigns, manage social media, and analyze market trends to drive brand awareness and lead generation.",
    jobRequirements:
      "2+ years marketing experience, excellent communication skills, proficiency with marketing automation tools, Bachelor's in Marketing.",
    jobBenefits:
      "Health insurance, paid time off, performance bonuses, professional growth opportunities.",
    jobSalary: "$60,000 - $75,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-10",
    jobClossingDate: "2024-07-15",
  },
  {
    jobId: "3hdwudabhhjtsdad",
    companyLogo: "https://placehold.co/100x100/DBEAFE/1E40AF?text=InnovateX",
    companyName: "InnovateX Labs",
    jobTitle: "Data Scientist Intern",
    jobLocation: "Boston, MA",
    jobLink: "https://innovatex.com/careers/data-scientist-intern",
    jobDescription:
      "Assist in data collection, cleaning, and analysis. Develop predictive models and contribute to research projects.",
    jobRequirements:
      "Currently enrolled in a Master's/Ph.D. program in Data Science/Statistics, strong R/Python skills, knowledge of machine learning.",
    jobBenefits:
      "Paid internship, mentorship program, potential for full-time offer, access to cutting-edge research.",
    jobSalary: "$25/hour",
    jobType: JobType.INTERNSHIP,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-04-20",
    jobClossingDate: "2024-06-01",
  },
  {
    jobId: "4hdwudab35erhd",
    companyLogo: "https://placehold.co/100x100/FFFBEB/92400E?text=HealthNet",
    companyName: "HealthNet Services",
    jobTitle: "Registered Nurse (RN)",
    jobLocation: "Los Angeles, CA",
    jobLink: "https://healthnet.org/jobs/rn-los-angeles",
    jobDescription:
      "Provide compassionate and professional nursing care to patients in a busy hospital environment.",
    jobRequirements:
      "Valid RN license, 3+ years clinical experience, BLS/ACLS certification, excellent patient care skills.",
    jobBenefits:
      "Competitive salary, health/dental/vision, retirement plan, tuition reimbursement, flexible shifts.",
    jobSalary: "$80,000 - $100,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-15",
    jobClossingDate: "2024-07-31",
  },
  {
    jobId: "5hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/E0F7FA/00796B?text=EduCorp",
    companyName: "EduCorp Learning",
    jobTitle: "Content Writer (Contract)",
    jobLocation: "Remote",
    jobLink: "https://educorp.com/careers/content-writer-remote",
    jobDescription:
      "Create engaging and informative educational content for various online courses and marketing materials.",
    jobRequirements:
      "Proven writing experience, strong research skills, ability to meet deadlines, Bachelor's degree preferred.",
    jobBenefits:
      "Flexible hours, project-based work, opportunity to work with subject matter experts.",
    jobSalary: "$50/hour",
    jobType: JobType.CONTRACT,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-05",
    jobClossingDate: "2024-06-25",
  },
  {
    jobId: "6hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/D1FAE5/065F46?text=FinPros",
    companyName: "Financial Pros Inc.",
    jobTitle: "Financial Analyst",
    jobLocation: "Chicago, IL",
    jobLink: "https://finpros.com/careers/financial-analyst-chicago",
    jobDescription:
      "Conduct financial forecasting, reporting, and operational metrics tracking. Provide insights to support strategic decisions.",
    jobRequirements:
      "2+ years experience in financial analysis, strong Excel skills, familiarity with financial modeling, Bachelor's in Finance/Accounting.",
    jobBenefits:
      "Bonus opportunities, mentorship, health coverage, paid holidays, 401k.",
    jobSalary: "$70,000 - $90,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-20",
    jobClossingDate: "2024-07-10",
  },
  {
    jobId: "7hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/FFE4E6/BE123C?text=RetailHub",
    companyName: "RetailHub Stores",
    jobTitle: "Retail Store Manager",
    jobLocation: "Miami, FL",
    jobLink: "https://retailhub.com/jobs/store-manager-miami",
    jobDescription:
      "Oversee daily store operations, manage staff, optimize sales, and ensure excellent customer service.",
    jobRequirements:
      "5+ years retail management experience, strong leadership skills, proven track record of meeting sales targets.",
    jobBenefits:
      "Competitive salary, performance incentives, health benefits, employee discounts.",
    jobSalary: "$55,000 - $70,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.CLOSED, // Example of a closed job
    jobPostingDate: "2024-03-01",
    jobClossingDate: "2024-04-15",
  },
  {
    jobId: "8hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/F0F9FF/0C4A6E?text=LogiSol",
    companyName: "Logistics Solutions Co.",
    jobTitle: "Logistics Coordinator",
    jobLocation: "Dallas, TX",
    jobLink: "https://logisol.com/careers/logistics-coordinator",
    jobDescription:
      "Coordinate shipments, track inventory, and optimize supply chain processes to ensure timely delivery.",
    jobRequirements:
      "2+ years logistics experience, strong organizational skills, proficiency with logistics software.",
    jobBenefits:
      "Health insurance, paid vacation, training programs, stable work environment.",
    jobSalary: "$45,000 - $55,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.CLOSED,
    jobPostingDate: "2024-05-22",
    jobClossingDate: "2024-07-20",
  },
  {
    jobId: "9hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/DCFCE7/15803D?text=GreenEco",
    companyName: "GreenEco Energy",
    jobTitle: "Environmental Scientist",
    jobLocation: "Denver, CO",
    jobLink: "https://greeneco.com/jobs/environmental-scientist",
    jobDescription:
      "Conduct environmental impact assessments, research sustainable practices, and advise on regulatory compliance.",
    jobRequirements:
      "Master's degree in Environmental Science, 3+ years field experience, strong analytical skills.",
    jobBenefits:
      "Impactful work, flexible hours, health benefits, professional development.",
    jobSalary: "$70,000 - $90,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-08",
    jobClossingDate: "2024-07-01",
  },
  {
    jobId: "10hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/FEF2F2/DC2626?text=CreativeFlow",
    companyName: "CreativeFlow Design Studio",
    jobTitle: "Junior Graphic Designer",
    jobLocation: "Portland, OR",
    jobLink: "https://creativeflow.com/careers/junior-graphic-designer",
    jobDescription:
      "Assist senior designers in creating visual concepts, logos, and marketing materials for diverse clients.",
    jobRequirements:
      "Portfolio demonstrating design skills, proficiency in Adobe Creative Suite, Bachelor's in Graphic Design.",
    jobBenefits:
      "Creative work environment, mentorship, health coverage, paid time off.",
    jobSalary: "$40,000 - $50,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-25",
    jobClossingDate: "2024-07-25",
  },
  {
    jobId: "11hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/ECFDF5/059669?text=CyberSec",
    companyName: "CyberSec Solutions",
    jobTitle: "Cybersecurity Analyst",
    jobLocation: "Washington, D.C.",
    jobLink: "https://cybersec.com/careers/cybersecurity-analyst",
    jobDescription:
      "Monitor security systems, respond to incidents, conduct vulnerability assessments, and implement security policies.",
    jobRequirements:
      "3+ years cybersecurity experience, knowledge of network security protocols, relevant certifications (e.g., CompTIA Security+).",
    jobBenefits:
      "Top-tier health benefits, certification reimbursement, 401k with generous match, remote flexibility.",
    jobSalary: "$95,000 - $115,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.CLOSED,
    jobPostingDate: "2024-05-18",
    jobClossingDate: "2024-07-05",
  },
  {
    jobId: "12hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/FFFAE0/CA8A04?text=PrimeAuto",
    companyName: "Prime Auto Dealership",
    jobTitle: "Automotive Technician",
    jobLocation: "Houston, TX",
    jobLink: "https://primeauto.com/jobs/automotive-technician",
    jobDescription:
      "Perform maintenance, diagnostics, and repairs on various vehicle makes and models.",
    jobRequirements:
      "ASE certification, 5+ years experience, valid driver's license, own tools.",
    jobBenefits:
      "Competitive hourly wage, commission opportunities, health insurance, paid training.",
    jobSalary: "$60,000 - $80,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-12",
    jobClossingDate: "2024-07-01",
  },
  {
    jobId: "13hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/F3E8FF/7C3AED?text=BuildCorp",
    companyName: "BuildCorp Construction",
    jobTitle: "Construction Project Manager",
    jobLocation: "Seattle, WA",
    jobLink: "https://buildcorp.com/careers/construction-project-manager",
    jobDescription:
      "Manage construction projects from conception to completion, ensuring adherence to budget, schedule, and quality standards.",
    jobRequirements:
      "7+ years project management experience, PMP certification preferred, strong knowledge of construction processes.",
    jobBenefits:
      "Project bonuses, company vehicle, health/dental, retirement plan, growth opportunities.",
    jobSalary: "$100,000 - $130,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-03",
    jobClossingDate: "2024-06-28",
  },
  {
    jobId: "14hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/EFF6FF/1E40AF?text=MediCare",
    companyName: "MediCare Clinic",
    jobTitle: "Medical Assistant (Part-Time)",
    jobLocation: "Phoenix, AZ",
    jobLink: "https://medicare.org/jobs/medical-assistant-part-time",
    jobDescription:
      "Assist physicians with patient examinations, manage patient records, and perform administrative duties.",
    jobRequirements:
      "Certified Medical Assistant (CMA), 1+ year experience, excellent interpersonal skills.",
    jobBenefits:
      "Flexible schedule, paid sick leave, opportunities for cross-training.",
    jobSalary: "$20 - $25/hour",
    jobType: JobType.PART_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-28",
    jobClossingDate: "2024-07-30",
  },
  {
    jobId: "15hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/FFEDD5/D97706?text=FoodieFare",
    companyName: "FoodieFare Restaurant Group",
    jobTitle: "Executive Chef",
    jobLocation: "New Orleans, LA",
    jobLink: "https://foodiefare.com/jobs/executive-chef",
    jobDescription:
      "Lead kitchen operations, develop menus, manage staff, and ensure high culinary standards.",
    jobRequirements:
      "10+ years culinary experience, culinary degree, strong leadership and creativity.",
    jobBenefits:
      "Performance bonuses, health insurance, paid vacation, creative freedom.",
    jobSalary: "$85,000 - $110,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-19",
    jobClossingDate: "2024-07-18",
  },
  {
    jobId: "16hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/FDE68A/B45309?text=RetailEdge",
    companyName: "RetailEdge Solutions",
    jobTitle: "E-commerce Manager",
    jobLocation: "Remote",
    jobLink: "https://retailedge.com/jobs/ecommerce-manager-remote",
    jobDescription:
      "Oversee all aspects of our online store, including marketing, sales, and customer experience.",
    jobRequirements:
      "5+ years e-commerce experience, strong digital marketing skills, proficiency with e-commerce platforms.",
    jobBenefits:
      "Work from home, performance bonuses, health benefits, flexible hours.",
    jobSalary: "$75,000 - $95,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-21",
    jobClossingDate: "2024-07-16",
  },
  {
    jobId: "17hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/DCCFEF/6D28D9?text=AeroTech",
    companyName: "AeroTech Aerospace",
    jobTitle: "Aerospace Engineer",
    jobLocation: "Cape Canaveral, FL",
    jobLink: "https://aerotech.com/careers/aerospace-engineer",
    jobDescription:
      "Design, develop, and test aerospace vehicles and systems. Work on cutting-edge space exploration projects.",
    jobRequirements:
      "Master's or Ph.D. in Aerospace Engineering, 5+ years experience, strong analytical and problem-solving skills.",
    jobBenefits:
      "Generous health package, stock options, 401k, professional development, unique work environment.",
    jobSalary: "$120,000 - $160,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-02",
    jobClossingDate: "2024-06-20",
  },
  {
    jobId: "18hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/CCE3FF/1D4ED8?text=FutureEd",
    companyName: "FutureEd Academy",
    jobTitle: "High School Teacher (Math)",
    jobLocation: "Austin, TX",
    jobLink: "https://futureed.edu/jobs/math-teacher-austin",
    jobDescription:
      "Teach mathematics to high school students, develop engaging lesson plans, and foster a positive learning environment.",
    jobRequirements:
      "Teaching certification, Bachelor's degree in Mathematics or Education, 2+ years teaching experience.",
    jobBenefits:
      "Competitive salary, health benefits, professional development, supportive faculty.",
    jobSalary: "$50,000 - $65,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-14",
    jobClossingDate: "2024-07-08",
  },
  {
    jobId: "19hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/FDE2F2/E11DAE?text=SportZone",
    companyName: "SportZone Athletics",
    jobTitle: "Sports Marketing Intern",
    jobLocation: "Denver, CO",
    jobLink: "https://sportzone.com/careers/sports-marketing-intern",
    jobDescription:
      "Assist with sports event promotions, social media campaigns, and market research for athletic products.",
    jobRequirements:
      "Currently enrolled in a Bachelor's program in Marketing/Sports Management, strong interest in sports.",
    jobBenefits:
      "Unpaid internship with college credit, networking opportunities, experience in sports industry.",
    jobSalary: "Unpaid (for credit)",
    jobType: JobType.INTERNSHIP,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-04-10",
    jobClossingDate: "2024-05-30",
  },
  {
    jobId: "20hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/D0F0C0/3CB371?text=GreenThumb",
    companyName: "GreenThumb Landscaping",
    jobTitle: "Landscape Architect",
    jobLocation: "Charlotte, NC",
    jobLink: "https://greenthumb.com/jobs/landscape-architect",
    jobDescription:
      "Design innovative and sustainable landscape solutions for commercial and residential projects.",
    jobRequirements:
      "Bachelor's or Master's in Landscape Architecture, 3+ years experience, strong CAD skills.",
    jobBenefits:
      "Project bonuses, health coverage, flexible work arrangements, creative environment.",
    jobSalary: "$65,000 - $85,000",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.CLOSED,
    jobPostingDate: "2024-05-23",
    jobClossingDate: "2024-07-22",
  },
  {
    jobId: "21hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/E5E7EB/4B5563?text=LegalAid",
    companyName: "LegalAid Alliance",
    jobTitle: "Paralegal (Part-Time)",
    jobLocation: "Sacramento, CA",
    jobLink: "https://legalaid.org/jobs/paralegal-part-time",
    jobDescription:
      "Support attorneys with legal research, document preparation, and case management for various legal aid initiatives.",
    jobRequirements:
      "Associate's degree or Paralegal Certificate, 2+ years experience in a legal setting, strong attention to detail.",
    jobBenefits:
      "Flexible hours, paid time off, professional development, meaningful work.",
    jobSalary: "$28 - $35/hour",
    jobType: JobType.PART_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-29",
    jobClossingDate: "2024-07-29",
  },
  {
    jobId: "22hdwudwsrab35erhd",
    companyLogo: "https://placehold.co/100x100/FEECEB/EF4444?text=FoodLink",
    companyName: "FoodLink Distribution",
    jobTitle: "Warehouse Associate",
    jobLocation: "Indianapolis, IN",
    jobLink: "https://foodlink.com/jobs/warehouse-associate",
    jobDescription:
      "Receive, store, and distribute food products. Maintain a clean and organized warehouse environment.",
    jobRequirements:
      "Ability to lift heavy objects, basic math skills, experience with pallet jacks preferred.",
    jobBenefits:
      "Health insurance, paid breaks, opportunities for advancement.",
    jobSalary: "$18 - $22/hour",
    jobType: JobType.FULL_TIME,
    jobStatus: JobStatus.OPEN,
    jobPostingDate: "2024-05-16",
    jobClossingDate: "2024-07-09",
  },
];
