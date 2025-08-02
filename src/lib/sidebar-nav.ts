export const sidebarNavFn = (userId: string) => {
  return [
    {
      name: "Personal Info",
      href: `/users/${userId}`,
    },
    {
      name: "Experiences",
      href: `/users/${userId}/experiences`,
    },
    {
      name: "Education",
      href: `/users/${userId}/education`,
    },
    {
      name: "Skills",
      href: `/users/${userId}/skills`,
    },
  ];
};
