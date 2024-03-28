import Color from "@/types/Color";

function getColor(id: number): Color {
  switch (id) {
    case 1:
      return {
        preview: 'bg-purple-500',
        gradient: 'bg-gradient-to-r from-purple-500 to-purple-900'
      };
    case 2:
      return {
        preview: 'bg-indigo-500',
        gradient: 'bg-gradient-to-r from-indigo-500 to-blue-500'
      };
    case 3:
      return {
        preview: 'bg-pink-500',
        gradient: 'bg-gradient-to-r from-pink-500 to-rose-500'
      };
    default:
      return {
        preview: 'bg-emerald-500',
        gradient: 'bg-gradient-to-r from-emerald-500 to-emerald-900'
      };
  }
}

export default getColor;