// Page Variants General:
export const pageVars = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
// Page Transitions General
export const pageTrans = {
  transition: "linear",
  duration: 0.7,
  ease: "easeInOut",
};

/* ======================================================================== */
/* 1.Homepage */
/* ======================================================================== */
// Route
export const transHome = {
  duration: 0.35,
};
// Bg
export const varsHomeBg = {
  from: { scale: 1.05, opacity: 0 },
  to: { scale: 1, opacity: 1 },
};
// Name
export const varsHomeName = {
  from: { opacity: 0 },
  to: { opacity: 1 },
};
// CTA
export const varsHomeCta = {
  from: { y: 0, opacity: -25 },
  to: { y: 0, opacity: 1 },
};

/* ======================================================================== */
/* 2.About Page */
/* ======================================================================== */
export const varsAboutImgBg = {
  from: { y: "110vh" },
  to: { y: 0 },
};
export const varsAboutScroll = {
  from: { y: "-2rem" },
  to: { y: 0 },
};
/* ======================================================================== */
/* 3.Contact Page*/
/* ======================================================================== */
export const varsContImg = {
  from: { scale: 1.2 },
  to: { scale: 1 },
};
export const varsContStag = {
  from: { y: "-2rem", opacity: 0 },
  to: { y: 0, opacity: 1 },
};

/* ======================================================================== */
/* 4.Works Page */
/* ======================================================================== */
export const varsWp = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
export const varsWpWorks = {
  from: { y: "100vh" },
  to: { y: 0 },
};
