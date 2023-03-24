export const getUniqueId = () =>
  Math.random().toString().substring(-4) +
  new Date().getTime().toString().substring(-4)
