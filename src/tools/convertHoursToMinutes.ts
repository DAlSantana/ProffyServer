export default function converthourToMinutes(time: string) {
  const [hour, minutes] = time.split(":").map(Number);
  const timInMinutes = hour * 60 + minutes;

  return timInMinutes;
}
