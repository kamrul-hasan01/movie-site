export const CrossIcon = () => (
  <svg
    stroke="currentColor"
    fill="red"
    strokeWidth="0"
    viewBox="0 0 94.926 94.926"
    xmlns="http://www.w3.org/2000/svg"
    className=""
  >
    <path
      d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
    />
  </svg>
);

export const BurgerMenu = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="white"
    >
      <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z" />
    </svg>
  );
};
export const OpenNewTab = () => {
  return (
    <svg
      className="w-[35px] inline-block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon
        fill="var(--ci-primary-color, currentColor)"
        points="400 464 48 464 48 104 240 104 240 72 16 72 16 496 432 496 432 272 400 272 400 464"
        className="ci-primary"
      />
      <polygon
        fill="var(--ci-primary-color, currentColor)"
        points="304 16 304 48 441.373 48 188.687 300.687 211.313 323.313 464 70.627 464 208 496 208 496 16 304 16"
        className="ci-primary"
      />
    </svg>
  );
};