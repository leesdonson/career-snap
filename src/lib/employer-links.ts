export const getEmployerLinks = (slug: string) => {
  return [
    { label: "Create Job", href: `/job-posting/new/${slug}` },
    { label: "Business Profile", href: `/business/profile/${slug}` },
  ];
};
