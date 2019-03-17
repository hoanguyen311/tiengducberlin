/* eslint-disable no-undef */

export default function(src, id) {
  const fjs = document.getElementsByTagName('script')[0];
  if (document.getElementById(id)) return;
  const js = document.createElement('script');
  js.id = id;
  js.src = src;
  fjs.parentNode.insertBefore(js, fjs);
}
