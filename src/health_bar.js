export default function healthBar(object) {
  if (object.health > 50) {
    return 'healthy';
  }
  if (object.health <= 50 && object.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}

export function sortByHealth(characters) {
  return characters.slice().sort((a, b) => b.health - a.health);
}
