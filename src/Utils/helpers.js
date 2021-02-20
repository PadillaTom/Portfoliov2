// Page Variants General:
export const pageVars = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: '100vh',
  },
};
// Page Transitions General
export const pageTrans = {
  transition: 'linear',
  duration: 0.5,
  ease: 'easeInOut',
};

/* ======================================================================== */
/* 1.Homepage */
/* ======================================================================== */
// Route
export const varsHome = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
export const transHome = {
  duration: 0,
};
// Bg
export const varsHomeBg = {
  from: { scale: 1.05, opacity: 0 },
  to: { scale: 1, opacity: 1 },
};
// CTA
export const varsHomeCta = {
  from: { y: '1rem', opacity: -10 },
  to: { y: 0, opacity: 1 },
};

/* ======================================================================== */
/* 2.About Page */
/* ======================================================================== */
export const varsAbout = {
  to: { opacity: 1 },
  from: { opacity: 0 },
};
export const transAbout = {
  in: {},
  out: {},
};

/* ======================================================================== */
/* 3.Contact Page*/
/* ======================================================================== */
export const varsContact = {
  in: {},
  out: {},
};
export const transContact = {
  in: {},
  out: {},
};

/* ======================================================================== */
/* 4.Works Page */
/* ======================================================================== */
export const varsWorks = {
  in: {},
  out: {},
};
export const transWorks = {
  in: {},
  out: {},
};

/* ======================================================================== */
/* 5.Work Details Page */
/* ======================================================================== */
export const varsWDetails = {
  in: {},
  out: {},
};
export const transWDetails = {
  in: {},
  out: {},
};
export const wdImage = {
  from: {
    width: '600px',
    height: '400px',
    y: '-65%',
  },
  to: {
    y: '0%',
    width: '100%',
    height: '70vh',
  },
};
export const wdTitle = {
  from: {
    opacity: 0,
    y: 400,
  },
  to: {
    opacity: 1,
    y: 0,
  },
};

/* ======================================================================== */
/* 6.Error Page */
/* ======================================================================== */
export const varsError = {
  in: {},
  out: {},
};
export const transError = {
  in: {},
  out: {},
};

/* ======================================================================== */
/* 7.Navbar Component */
/* ======================================================================== */
export const varsNav = {
  in: {},
  out: {},
};
export const transNav = {
  in: {},
  out: {},
};
