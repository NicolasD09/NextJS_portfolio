export const skillTypeLabel = {
  'Humaine': 'Transverse',
  'Technique': 'Technique'
}

export const getSkillType = (skill: keyof typeof skillTypeLabel): string => {
  return skillTypeLabel[skill];
}
