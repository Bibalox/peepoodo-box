interface Sound {
  url: string
  label: string
  color: 'yellow' | 'pink' | 'brown' | 'blue'
}

export const soundList: Sound[] = [
  {
    url: 'bubon',
    label: 'Au plus profond',
    color: 'pink'
  },
  {
    url: 'chiant',
    label: 'Chiiiaaaaannnnt !',
    color: 'yellow'
  },
  {
    url: 'coeur',
    label: 'Avec ton coeur',
    color: 'blue'
  },
  {
    url: 'dechiqueter',
    label: 'Il faut le vouloir',
    color: 'brown'
  }
]