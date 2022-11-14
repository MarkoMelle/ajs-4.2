export default function matchers(array) {
  array.sort((a, b) => b.health - a.health);
  return array;
}
